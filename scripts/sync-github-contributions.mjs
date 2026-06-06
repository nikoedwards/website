import { writeFile } from "node:fs/promises";

const githubUser = process.env.GITHUB_USER || "nikoedwards";
const sourceUrl = `https://github.com/users/${githubUser}/contributions`;
const outputPath = process.env.CONTRIBUTIONS_OUTPUT || "contributions.svg";
const colors = ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"];
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

function escapeXml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

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

function renderSvg({ count, labels, days }) {
  const cell = 11;
  const gap = 4;
  const step = cell + gap;
  const left = 82;
  const top = 58;
  const width = 920;
  const height = 170;
  const lastUpdated = new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date());

  const monthText = labels
    .map(
      ({ label, week }) =>
        `<text x="${left + week * step}" y="43" class="label">${escapeXml(label)}</text>`,
    )
    .join("");

  const dayLabels = [
    { label: "Mon", day: 1 },
    { label: "Wed", day: 3 },
    { label: "Fri", day: 5 },
  ]
    .map(({ label, day }) => `<text x="28" y="${top + day * step + 10}" class="label">${label}</text>`)
    .join("");

  const cells = days
    .map(({ date, week, day, level }) => {
      const x = left + week * step;
      const y = top + day * step;
      const color = colors[level] || colors[0];
      return `<rect x="${x}" y="${y}" width="${cell}" height="${cell}" rx="2" fill="${color}"><title>${escapeXml(
        date,
      )}: level ${level}</title></rect>`;
    })
    .join("");

  const legendX = width - 178;
  const legendY = height - 30;
  const legend = colors
    .map(
      (color, index) =>
        `<rect x="${legendX + 48 + index * 18}" y="${legendY - 10}" width="11" height="11" rx="2" fill="${color}"></rect>`,
    )
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-labelledby="title desc">
  <title id="title">${escapeXml(githubUser)} GitHub contribution graph</title>
  <desc id="desc">Public GitHub contribution graph generated from ${escapeXml(sourceUrl)}.</desc>
  <style>
    .title { fill: #24292f; font: 600 15px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
    .label { fill: #57606a; font: 12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
    .meta { fill: #6e7781; font: 11px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
  </style>
  <rect width="${width}" height="${height}" rx="8" fill="#ffffff"/>
  <text x="26" y="24" class="title">${escapeXml(count || "Public")} contributions in the last year</text>
  <text x="26" y="${height - 18}" class="meta">Generated from GitHub public contributions · ${escapeXml(
    lastUpdated,
  )}</text>
  ${monthText}
  ${dayLabels}
  ${cells}
  <text x="${legendX}" y="${legendY}" class="label">Less</text>
  ${legend}
  <text x="${legendX + 142}" y="${legendY}" class="label">More</text>
</svg>
`;
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

await writeFile(outputPath, renderSvg({ count, labels, days }), "utf8");
console.log(`Generated ${outputPath} with ${days.length} days and count ${count || "unknown"}.`);
