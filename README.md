# Niko Edwards Personal Website

A minimal personal website for GitHub Pages.

## Sections

- Web Coding projects
- GitHub repositories
- GitHub contribution graph
- Notion article index
- Social links

## Edit Content

Most personal content lives in `script.js`:

- `featuredProjects`
- `articles`
- `notionUrl`
- `socials`

The site is static and can be deployed directly from the repository root with GitHub Pages.

## Notion Article Sync

Notion cannot be embedded directly in a GitHub Pages iframe because Notion sends framing
protection headers. Instead, this repo syncs a public article index from Notion into
`articles.json`.

To enable automatic sync:

1. Create a Notion integration with read content permission.
2. Copy the internal integration token.
3. Share the article database with that integration in Notion.
4. Add a GitHub Actions repository secret named `NOTION_TOKEN`.
5. Optional: add a repository variable named `NOTION_DATABASE_ID` if the database ID changes.
6. Run the `Sync Notion Articles` workflow once, or wait for the hourly schedule.
