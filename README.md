# Niko Edwards Personal Website

A minimal personal website for GitHub Pages.

## Sections

- Vibe Coding projects
- GitHub repositories
- GitHub public contribution graph
- Notion article embed
- Real world map with highlighted visited regions
- Social links

## Edit Content

Most personal content lives in `script.js`:

- `featuredProjects`
- `notionUrl`
- `notionEmbedUrl`
- `visitedPlaces`
- `socials`

Main pages are split into static GitHub Pages routes:

- `projects.html`
- `github.html`
- `articles.html`
- `places.html`

The site is static and can be deployed directly from the repository root with GitHub Pages.

## Places Map

The places page uses Leaflet with OpenStreetMap tiles. Visited regions are configured in
`siteConfig.visitedPlaces` in `script.js`; boundary data can be stored as GeoJSON files in
`data/`. Hong Kong is currently highlighted via `data/hong-kong.geojson`.

## GitHub Contribution Graph

The contribution graph is generated from GitHub's public contribution endpoint and saved
as `contributions.json`. The website renders the graph with native HTML/CSS so it can match
the current light or dark theme. Private/self-only contribution counts are not available without an
authenticated GitHub token, so the public website may differ from the graph you see while
logged in to GitHub.

## Notion Article Sync

The main article section uses Notion's public embed URL. The optional GitHub Actions sync
keeps `articles.json` available as a fallback index if the embed is ever unavailable.

To enable automatic sync:

1. Create a Notion integration with read content permission.
2. Copy the internal integration token.
3. Share the article database with that integration in Notion.
4. Add a GitHub Actions repository secret named `NOTION_TOKEN`.
5. Optional: add a repository variable named `NOTION_DATABASE_ID` if the database ID changes.
6. Run the `Sync Notion Articles` workflow once, or wait for the hourly schedule.
