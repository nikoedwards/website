import { writeFile } from "node:fs/promises";

const githubUser = process.env.GITHUB_USER || "nikoedwards";
const sourceUrl = `https://github.com/users/${githubUser}/contributions`;
const outputPath = process.env.CONTRIBUTIONS_OUTPUT || "contributions.json";
const monthNames = {
  Jan: "Jan",
  Feb: "Feb",
  Mar: "Mar",
  Apr: "Apr",
  May: "May",
  Jun: "Jun",
  Jul: "Jul",
  Aug: "Aug",
  Sep: "Sep",
  Oct: "Oct",
  Nov: "Nov",
  Dec: "Dec",
};

function parseContributionCount(html) {
  const match = html.match(/>\s*([\d,]+)\s+contributions\s+in the last year\s*</i);
  return match?.[1] || "";
}

function parseMonthLabels(html) {
  const header = html.match(/<thead>[\s\S]*?<\/thead>/i)?.[0] || "";
  const labels = [];
  let startWeek = 0;
  const pattern =
    /ContributionCalendar-label" colspan="(\d+)"[\s\S]*?<span aria-hidden="true"[^>]*>\s*([A-Za-z]{3})\s*<\/span>/g;

  for (const match of header.matchAll(pattern)) {
    const span = Number(match[1]);
    labels.push({ label: monthNames[match[2]] || match[2], week: startWeek });
    startWeek += span;
  }

  return labels;
}

function parseDays(html) {
  const days = [];
  const pattern =
    /<td[^>]*data-ix="(\d+)"[^>]*data-date="(\d{4}-\d{2}-\d{2})"[^>]*data-level="(\d)"[^>]*>/g;

  for (const match of html.matchAll(pattern)) {
    const [, week, date, level] = match;
    const day = new Date(`${date}T00:00:00Z`).getUTCDay();
    days.push({
      date,
      week: Number(week),
      day,
      level: Number(level),
    });
  }

  return days;
}

const response = await fetch(sourceUrl);
if (!response.ok) {
  throw new Error(`GitHub contribution request failed with ${response.status}`);
}

const html = await response.text();
const count = parseContributionCount(html);
const labels = parseMonthLabels(html);
const days = parseDays(html);

if (!days.length) {
  throw new Error("No contribution days were parsed from GitHub.");
}

const payload = {
  user: githubUser,
  sourceUrl,
  count,
  generatedAt: new Date().toISOString(),
  labels,
  days,
};

await writeFile(outputPath, `${JSON.stringify(payload, null, 2)}\n`, "utf8");
console.log(`Generated ${outputPath} with ${days.length} days and count ${count || "unknown"}.`);
