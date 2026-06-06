import { writeFile } from "node:fs/promises";

const notionToken = process.env.NOTION_TOKEN;
const databaseId =
  process.env.NOTION_DATABASE_ID || "62f4ab3b6325461fa526f9996ee53ac9";
const notionVersion = process.env.NOTION_VERSION || "2022-06-28";
const notionDatabaseUrl =
  "https://www.notion.so/62f4ab3b6325461fa526f9996ee53ac9?v=db711b6352bd4edca65d7a46660d917f&source=copy_link";

if (!notionToken) {
  console.log("NOTION_TOKEN is not set. Keeping the existing article feed.");
  process.exit(0);
}

function plainText(richText = []) {
  return richText.map((item) => item.plain_text || "").join("").trim();
}

function propertyEntries(page) {
  return Object.entries(page.properties || {});
}

function findProperty(page, predicate) {
  return propertyEntries(page).find(([name, property]) => predicate(name, property))?.[1];
}

function pickTitle(page) {
  const property = findProperty(page, (_name, prop) => prop.type === "title");
  return plainText(property?.title) || "Untitled";
}

function pickSummary(page) {
  const preferred = findProperty(page, (name, prop) => {
    const normalized = name.toLowerCase();
    return (
      ["rich_text", "formula"].includes(prop.type) &&
      /summary|description|excerpt|intro|摘要|简介|描述/.test(normalized)
    );
  });

  if (preferred?.type === "rich_text") return plainText(preferred.rich_text);
  if (preferred?.type === "formula") return formulaText(preferred.formula);
  return "";
}

function formulaText(formula) {
  if (!formula) return "";
  if (formula.type === "string") return formula.string || "";
  if (formula.type === "number") return String(formula.number ?? "");
  if (formula.type === "boolean") return formula.boolean ? "Yes" : "No";
  if (formula.type === "date") return formula.date?.start || "";
  return "";
}

function pickTags(page) {
  const property = findProperty(page, (name, prop) => {
    const normalized = name.toLowerCase();
    return (
      ["multi_select", "select"].includes(prop.type) &&
      /tag|category|type|topic|标签|分类|主题/.test(normalized)
    );
  });

  if (property?.type === "multi_select") return property.multi_select.map((tag) => tag.name);
  if (property?.type === "select" && property.select?.name) return [property.select.name];
  return ["Article"];
}

function pickDate(page) {
  const property = findProperty(page, (name, prop) => {
    const normalized = name.toLowerCase();
    return prop.type === "date" && /date|publish|published|time|日期|时间|发布/.test(normalized);
  });

  const value = property?.date?.start || page.created_time;
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
}

function isPublished(page) {
  const property = findProperty(page, (name, prop) => {
    const normalized = name.toLowerCase();
    return prop.type === "checkbox" && /published|public|visible|发布|公开|展示/.test(normalized);
  });

  return property ? Boolean(property.checkbox) : true;
}

async function queryNotionDatabase() {
  const response = await fetch(`https://api.notion.com/v1/databases/${databaseId}/query`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${notionToken}`,
      "Content-Type": "application/json",
      "Notion-Version": notionVersion,
    },
    body: JSON.stringify({
      page_size: 50,
      sorts: [{ timestamp: "last_edited_time", direction: "descending" }],
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Notion API failed with ${response.status}: ${body}`);
  }

  return response.json();
}

const data = await queryNotionDatabase();
const articles = data.results
  .filter((page) => page.object === "page" && isPublished(page))
  .map((page) => ({
    title: pickTitle(page),
    date: pickDate(page),
    summary: pickSummary(page),
    tags: pickTags(page),
    url: page.public_url || page.url || notionDatabaseUrl,
    lastEdited: page.last_edited_time,
  }));

if (!articles.length) {
  articles.push({
    title: "Notion Articles",
    date: "Live source",
    summary: "Notion database is connected, but no published articles were found yet.",
    tags: ["Notion"],
    url: notionDatabaseUrl,
  });
}

await writeFile("articles.json", `${JSON.stringify(articles, null, 2)}\n`, "utf8");
console.log(`Synced ${articles.length} Notion article(s).`);
