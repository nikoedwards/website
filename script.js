const siteConfig = {
  name: "Niko Edwards",
  githubUser: "nikoedwards",
  email: "1003056501@qq.com",
  notionUrl:
    "https://www.notion.so/62f4ab3b6325461fa526f9996ee53ac9?v=db711b6352bd4edca65d7a46660d917f&source=copy_link",
  articleFeedUrl: "articles.json",
  featuredProjects: [
    {
      title: "Personal Website",
      summary:
        "一个部署在 GitHub Pages 上的个人网站，用来展示 Web Coding、GitHub 项目和 Notion 文章。",
      stack: ["HTML", "CSS", "JavaScript"],
      repo: "https://github.com/nikoedwards/website",
      live: "https://nikoedwards.github.io/website/",
    },
  ],
  socials: [
    { label: "GitHub", url: "https://github.com/nikoedwards" },
    { label: "Email", url: "mailto:1003056501@qq.com" },
  ],
};

const languageColors = {
  JavaScript: "#f1c232",
  TypeScript: "#2459c9",
  HTML: "#d95f2d",
  CSS: "#2965d9",
  Python: "#3572a5",
  Vue: "#42b883",
  React: "#149eca",
};

const byId = (id) => document.getElementById(id);

function formatDate(value) {
  if (!value) return "N/A";
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
}

function createTextElement(tag, text, className) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  element.textContent = text;
  return element;
}

function createTagList(tags) {
  const list = document.createElement("ul");
  list.className = "tag-list";
  tags.forEach((tag) => {
    const item = document.createElement("li");
    item.textContent = tag;
    list.append(item);
  });
  return list;
}

function createCardLink(label, url) {
  const link = document.createElement("a");
  link.href = url;
  link.target = "_blank";
  link.rel = "noreferrer";
  link.textContent = label;
  return link;
}

function renderProjects() {
  const grid = byId("project-grid");
  grid.innerHTML = "";

  siteConfig.featuredProjects.forEach((project) => {
    const card = document.createElement("article");
    card.className = "project-card";

    const content = document.createElement("div");
    content.append(createTextElement("h3", project.title));
    content.append(createTextElement("p", project.summary));
    content.append(createTagList(project.stack));

    const links = document.createElement("div");
    links.className = "card-links";
    if (project.live) links.append(createCardLink("Live →", project.live));
    if (project.repo) links.append(createCardLink("Repo →", project.repo));

    card.append(content, links);
    grid.append(card);
  });
}

const fallbackArticles = [
  {
    title: "Notion Articles",
    date: "Live source",
    summary: "文章源头维护在 Notion。配置同步后，这里会自动显示最新的公开文章索引。",
    tags: ["Notion"],
    url: siteConfig.notionUrl,
  },
];

function createArticleCard(article) {
  const card = document.createElement("article");
  card.className = "article-card";

  const content = document.createElement("div");
  content.append(createTextElement("span", article.date || "Notion", "article-date"));
  content.append(createTextElement("h3", article.title || "Untitled"));
  content.append(createTextElement("p", article.summary || "No summary yet."));
  content.append(createTagList(article.tags?.length ? article.tags : ["Article"]));

  const links = document.createElement("div");
  links.className = "card-links";
  if (article.url) links.append(createCardLink("Read →", article.url));

  card.append(content, links);
  return card;
}

async function renderArticles() {
  const link = byId("notion-link");
  if (siteConfig.notionUrl) {
    link.href = siteConfig.notionUrl;
  } else {
    link.hidden = true;
  }

  const grid = byId("article-grid");
  grid.innerHTML = "";

  try {
    const response = await fetch(`${siteConfig.articleFeedUrl}?v=${Date.now()}`);
    if (!response.ok) throw new Error("Article feed unavailable");
    const articles = await response.json();
    const visibleArticles = Array.isArray(articles) && articles.length ? articles : fallbackArticles;
    visibleArticles.forEach((article) => grid.append(createArticleCard(article)));
  } catch (error) {
    fallbackArticles.forEach((article) => grid.append(createArticleCard(article)));
  }
}

function renderSocials() {
  const container = byId("social-links");
  container.innerHTML = "";

  siteConfig.socials
    .filter((item) => item.url)
    .forEach((item) => {
      container.append(createCardLink(item.label, item.url));
    });
}

function createRepoCard(repo) {
  const card = document.createElement("article");
  card.className = "repo-card";

  const content = document.createElement("div");
  const title = document.createElement("h3");
  const titleLink = createCardLink(repo.name, repo.html_url);
  title.append(titleLink);
  content.append(title);
  content.append(createTextElement("p", repo.description || "No public description yet."));

  const meta = document.createElement("div");
  meta.className = "repo-meta";

  if (repo.language) {
    const language = document.createElement("span");
    const dot = document.createElement("i");
    dot.className = "language-dot";
    dot.style.background = languageColors[repo.language] || "#1f6f4a";
    language.append(dot, repo.language);
    meta.append(language);
  }

  meta.append(createTextElement("span", `${repo.stargazers_count} stars`));
  meta.append(createTextElement("span", `Updated ${formatDate(repo.pushed_at)}`));

  const links = document.createElement("div");
  links.className = "card-links";
  links.append(createCardLink("View repo →", repo.html_url));
  if (repo.homepage) links.append(createCardLink("Live →", repo.homepage));

  card.append(content, meta, links);
  return card;
}

async function loadGitHub() {
  const user = siteConfig.githubUser;
  const profileUrl = `https://api.github.com/users/${user}`;
  const reposUrl = `https://api.github.com/users/${user}/repos?sort=pushed&per_page=100`;

  try {
    const [profileResponse, reposResponse] = await Promise.all([fetch(profileUrl), fetch(reposUrl)]);
    if (!profileResponse.ok || !reposResponse.ok) {
      throw new Error("GitHub API request failed");
    }

    const [profile, repos] = await Promise.all([profileResponse.json(), reposResponse.json()]);
    const publicRepos = repos
      .filter((repo) => !repo.fork)
      .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at));

    byId("avatar").src = profile.avatar_url;
    byId("profile-line").textContent =
      profile.bio || `${profile.public_repos} public repositories on GitHub.`;
    byId("repo-count").textContent = profile.public_repos;
    byId("follower-count").textContent = profile.followers;
    byId("latest-push").textContent = publicRepos[0] ? formatDate(publicRepos[0].pushed_at) : "N/A";

    const grid = byId("repo-grid");
    grid.innerHTML = "";

    if (!publicRepos.length) {
      grid.append(createTextElement("article", "No public repositories yet.", "repo-card loading-card"));
      return;
    }

    publicRepos.slice(0, 6).forEach((repo) => {
      grid.append(createRepoCard(repo));
    });
  } catch (error) {
    const grid = byId("repo-grid");
    grid.innerHTML = "";
    const card = document.createElement("article");
    card.className = "repo-card loading-card";
    card.append(createTextElement("p", "GitHub data is temporarily unavailable."));
    const links = document.createElement("div");
    links.className = "card-links";
    links.append(createCardLink("Open GitHub →", `https://github.com/${user}`));
    card.append(links);
    grid.append(card);
  }
}

renderProjects();
renderArticles();
renderSocials();
loadGitHub();
