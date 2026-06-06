const siteConfig = {
  name: "Niko Edwards",
  githubUser: "nikoedwards",
  email: "1003056501@qq.com",
  notionUrl:
    "https://guttural-phlox-926.notion.site/62f4ab3b6325461fa526f9996ee53ac9?v=db711b6352bd4edca65d7a46660d917f",
  notionEmbedUrl:
    "https://guttural-phlox-926.notion.site/ebd/62f4ab3b6325461fa526f9996ee53ac9?v=db711b6352bd4edca65d7a46660d917f",
  articleFeedUrl: "articles.json",
  featuredProjects: [
    {
      title: "Personal Website",
      summary: {
        zh: "一个部署在 GitHub Pages 上的个人网站，用来展示 Web Coding、GitHub 项目和 Notion 文章。",
        en: "A GitHub Pages personal website for Web Coding projects, GitHub work, and Notion writing.",
      },
      stack: ["HTML", "CSS", "JavaScript"],
      repo: "https://github.com/nikoedwards/website",
      live: "https://nikoedwards.github.io/website/",
    },
  ],
  visitedPlaces: [
    {
      name: { zh: "香港", en: "Hong Kong" },
      region: { zh: "中国", en: "China" },
      lat: 22.3193,
      lon: 114.1694,
      note: { zh: "去过", en: "Visited" },
    },
  ],
  socials: [
    { label: "GitHub", url: "https://github.com/nikoedwards" },
    { label: "Email", url: "mailto:1003056501@qq.com" },
  ],
};

const translations = {
  zh: {
    document: {
      title: "Niko Edwards - 个人网站",
      description:
        "Niko Edwards 的个人网站，展示 Web Coding 项目、GitHub 仓库、Contribution 面板、Notion 文章和去过的地方。",
    },
    nav: {
      projects: "项目",
      github: "GitHub",
      articles: "文章",
      places: "足迹",
      elsewhere: "社交",
    },
    controls: {
      language: "EN",
      languageLabel: "切换到英文",
      dark: "暗色",
      light: "亮色",
      themeDarkLabel: "切换到暗色模式",
      themeLightLabel: "切换到亮色模式",
    },
    hero: {
      kicker: "Web Coding / GitHub Pages / Notion",
      copy: "一个简洁的个人主页，用来收拢我在 Web Coding、GitHub 项目和 Notion 写作里的公开轨迹。",
      profileFallback: "从 GitHub 公开构建中。",
      meta: {
        githubLabel: "GitHub",
        focusLabel: "方向",
        focusValue: "Web Coding",
        writingLabel: "写作",
        writingValue: "Notion 笔记",
        deployLabel: "部署",
        deployValue: "GitHub Pages",
      },
    },
    ticker:
      "CURRENTLY · WEB CODING · OPEN SOURCE · NOTION ARTICLES · GITHUB PAGES · SHIP IN PUBLIC ·",
    projects: {
      index: "§ 01 · WEB CODING",
      title: "Web Coding 项目",
      allGithub: "查看 GitHub →",
      live: "在线预览 →",
      repo: "代码仓库 →",
    },
    github: {
      index: "§ 02 · GITHUB",
      title: "仓库与 Contribution 面板",
      repositories: "全部仓库 →",
      contributionCaption: "实时 GitHub Contribution 面板：@nikoedwards",
      publicRepos: "公开仓库",
      followers: "关注者",
      latestPush: "最近推送",
      loading: "正在加载 GitHub 仓库...",
      unavailable: "GitHub 数据暂时不可用。",
      openGithub: "打开 GitHub →",
      noRepos: "还没有公开仓库。",
      noDescription: "还没有公开描述。",
      stars: "stars",
      updated: "更新于",
    },
    articles: {
      index: "§ 03 · ARTICLES",
      title: "Notion 文章",
      open: "打开 Notion →",
      copy: "文章直接维护在 Notion，网站嵌入同一个公开页面。技术笔记、项目复盘和长期主题都会收在这个板块里。",
      fallbackTitle: "同步索引备份",
      loading: "正在加载文章...",
      fallbackName: "Notion 文章",
      fallbackDate: "实时源",
      fallbackSummary: "文章源头维护在 Notion。若嵌入不可用，可以通过这里打开同步索引或 Notion 原页面。",
      read: "阅读 →",
    },
    places: {
      index: "§ 04 · PLACES",
      title: "去过的地方",
      copy: "一张轻量的世界地图，记录我去过的城市。地图由数据驱动，后续新增地点只需要更新配置。",
      count: "{count} 个地点",
    },
    footer: {
      copy: "一个维护在公开仓库里的个人网站。使用原生 HTML、CSS 和 JavaScript 构建。",
    },
  },
  en: {
    document: {
      title: "Niko Edwards - Personal Website",
      description:
        "Niko Edwards' personal website for Web Coding projects, GitHub repositories, contributions, Notion articles, and places visited.",
    },
    nav: {
      projects: "Projects",
      github: "GitHub",
      articles: "Articles",
      places: "Places",
      elsewhere: "Elsewhere",
    },
    controls: {
      language: "中文",
      languageLabel: "Switch to Chinese",
      dark: "Dark",
      light: "Light",
      themeDarkLabel: "Switch to dark mode",
      themeLightLabel: "Switch to light mode",
    },
    hero: {
      kicker: "Web Coding / GitHub Pages / Notion",
      copy: "A simple personal site for collecting my public trail across Web Coding, GitHub projects, and Notion writing.",
      profileFallback: "Building in public from GitHub.",
      meta: {
        githubLabel: "GitHub",
        focusLabel: "Focus",
        focusValue: "Web Coding",
        writingLabel: "Writing",
        writingValue: "Notion Notes",
        deployLabel: "Deploy",
        deployValue: "GitHub Pages",
      },
    },
    ticker:
      "CURRENTLY · WEB CODING · OPEN SOURCE · NOTION ARTICLES · GITHUB PAGES · SHIP IN PUBLIC ·",
    projects: {
      index: "§ 01 · WEB CODING",
      title: "Projects shipped on the web",
      allGithub: "All GitHub →",
      live: "Live →",
      repo: "Repo →",
    },
    github: {
      index: "§ 02 · GITHUB",
      title: "Repositories and contribution graph",
      repositories: "Repositories →",
      contributionCaption: "Live GitHub contribution graph for @nikoedwards",
      publicRepos: "Public repos",
      followers: "Followers",
      latestPush: "Latest push",
      loading: "Loading GitHub repositories...",
      unavailable: "GitHub data is temporarily unavailable.",
      openGithub: "Open GitHub →",
      noRepos: "No public repositories yet.",
      noDescription: "No public description yet.",
      stars: "stars",
      updated: "Updated",
    },
    articles: {
      index: "§ 03 · ARTICLES",
      title: "Notion journal",
      open: "Open Notion →",
      copy: "Articles are maintained directly in Notion, and this site embeds the same public page. Technical notes, project retrospectives, and long-running themes live here.",
      fallbackTitle: "Synced article index",
      loading: "Loading articles...",
      fallbackName: "Notion Articles",
      fallbackDate: "Live source",
      fallbackSummary:
        "Articles are maintained in Notion. If the embed is unavailable, this index and the original Notion page remain available.",
      read: "Read →",
    },
    places: {
      index: "§ 04 · PLACES",
      title: "Places I've been",
      copy: "A lightweight world map for places I have visited. It is data-driven, so future updates only need new entries in the config.",
      count: "{count} place{plural}",
    },
    footer: {
      copy: "Personal website maintained in public. Built with plain HTML, CSS, and JavaScript.",
    },
  },
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

const SVG_NS = "http://www.w3.org/2000/svg";
const byId = (id) => document.getElementById(id);
const state = {
  locale: localStorage.getItem("locale") || "zh",
  theme:
    localStorage.getItem("theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"),
  githubProfile: null,
  githubRepos: [],
  articles: null,
};

function t(key) {
  return key.split(".").reduce((value, part) => value?.[part], translations[state.locale]) || key;
}

function localize(value) {
  if (!value || typeof value === "string") return value || "";
  return value[state.locale] || value.en || value.zh || "";
}

function formatDate(value) {
  if (!value) return "N/A";
  return new Intl.DateTimeFormat(state.locale === "zh" ? "zh-CN" : "en", {
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

function applyTheme() {
  document.documentElement.dataset.theme = state.theme;
  const button = byId("theme-toggle");
  if (!button) return;
  const nextMode = state.theme === "dark" ? "light" : "dark";
  button.textContent = t(`controls.${nextMode}`);
  button.setAttribute(
    "aria-label",
    state.theme === "dark" ? t("controls.themeLightLabel") : t("controls.themeDarkLabel"),
  );
}

function applyLanguage() {
  document.documentElement.lang = state.locale === "zh" ? "zh-CN" : "en";
  document.title = t("document.title");
  document.querySelector('meta[name="description"]')?.setAttribute("content", t("document.description"));

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });

  byId("language-toggle").textContent = t("controls.language");
  byId("language-toggle").setAttribute("aria-label", t("controls.languageLabel"));
  byId("ticker-line").textContent = `${t("ticker")} ${t("ticker")}`;
  applyTheme();
  renderProfileLine();
  renderProjects();
  renderArticleFallback();
  renderVisitedPlaces();
  if (state.githubRepos.length) renderRepoGrid(state.githubRepos);
  if (state.githubProfile) renderGitHubProfile(state.githubProfile, state.githubRepos);
}

function setLocale(locale) {
  state.locale = locale;
  localStorage.setItem("locale", locale);
  applyLanguage();
}

function setTheme(theme) {
  state.theme = theme;
  localStorage.setItem("theme", theme);
  applyTheme();
}

function renderProfileLine() {
  const profileLine = byId("profile-line");
  if (!profileLine) return;
  profileLine.textContent = state.githubProfile?.bio || t("hero.profileFallback");
}

function renderProjects() {
  const grid = byId("project-grid");
  grid.innerHTML = "";

  siteConfig.featuredProjects.forEach((project) => {
    const card = document.createElement("article");
    card.className = "project-card";

    const content = document.createElement("div");
    content.append(createTextElement("h3", project.title));
    content.append(createTextElement("p", localize(project.summary)));
    content.append(createTagList(project.stack));

    const links = document.createElement("div");
    links.className = "card-links";
    if (project.live) links.append(createCardLink(t("projects.live"), project.live));
    if (project.repo) links.append(createCardLink(t("projects.repo"), project.repo));

    card.append(content, links);
    grid.append(card);
  });
}

function fallbackArticles() {
  return [
    {
      title: t("articles.fallbackName"),
      date: t("articles.fallbackDate"),
      summary: t("articles.fallbackSummary"),
      tags: ["Notion"],
      url: siteConfig.notionUrl,
    },
  ];
}

function createArticleCard(article) {
  const card = document.createElement("article");
  card.className = "article-card";

  const content = document.createElement("div");
  content.append(createTextElement("span", article.date || "Notion", "article-date"));
  content.append(createTextElement("h3", article.title || "Untitled"));
  content.append(createTextElement("p", article.summary || ""));
  content.append(createTagList(article.tags?.length ? article.tags : ["Article"]));

  const links = document.createElement("div");
  links.className = "card-links";
  if (article.url) links.append(createCardLink(t("articles.read"), article.url));

  card.append(content, links);
  return card;
}

function renderNotionEmbed() {
  const link = byId("notion-link");
  const frame = byId("notion-frame");
  link.href = siteConfig.notionUrl;
  if (frame.src !== siteConfig.notionEmbedUrl) frame.src = siteConfig.notionEmbedUrl;
}

function renderArticleFallback() {
  const grid = byId("article-grid");
  if (!grid) return;
  grid.innerHTML = "";
  const visibleArticles = Array.isArray(state.articles) && state.articles.length ? state.articles : fallbackArticles();
  visibleArticles.forEach((article) => grid.append(createArticleCard(article)));
}

async function loadArticleFeed() {
  try {
    const response = await fetch(`${siteConfig.articleFeedUrl}?v=${Date.now()}`);
    if (!response.ok) throw new Error("Article feed unavailable");
    const articles = await response.json();
    state.articles = Array.isArray(articles) ? articles : null;
  } catch (error) {
    state.articles = null;
  }
  renderArticleFallback();
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
  content.append(createTextElement("p", repo.description || t("github.noDescription")));

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

  meta.append(createTextElement("span", `${repo.stargazers_count} ${t("github.stars")}`));
  meta.append(createTextElement("span", `${t("github.updated")} ${formatDate(repo.pushed_at)}`));

  const links = document.createElement("div");
  links.className = "card-links";
  links.append(createCardLink(t("projects.repo"), repo.html_url));
  if (repo.homepage) links.append(createCardLink(t("projects.live"), repo.homepage));

  card.append(content, meta, links);
  return card;
}

function renderRepoGrid(repos) {
  const grid = byId("repo-grid");
  grid.innerHTML = "";

  if (!repos.length) {
    grid.append(createTextElement("article", t("github.noRepos"), "repo-card loading-card"));
    return;
  }

  repos.slice(0, 6).forEach((repo) => {
    grid.append(createRepoCard(repo));
  });
}

function renderGitHubProfile(profile, repos) {
  byId("avatar").src = profile.avatar_url;
  byId("repo-count").textContent = profile.public_repos;
  byId("follower-count").textContent = profile.followers;
  byId("latest-push").textContent = repos[0] ? formatDate(repos[0].pushed_at) : "N/A";
  renderProfileLine();
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

    state.githubProfile = profile;
    state.githubRepos = publicRepos;
    renderGitHubProfile(profile, publicRepos);
    renderRepoGrid(publicRepos);
  } catch (error) {
    const grid = byId("repo-grid");
    grid.innerHTML = "";
    const card = document.createElement("article");
    card.className = "repo-card loading-card";
    card.append(createTextElement("p", t("github.unavailable")));
    const links = document.createElement("div");
    links.className = "card-links";
    links.append(createCardLink(t("github.openGithub"), `https://github.com/${user}`));
    card.append(links);
    grid.append(card);
  }
}

function projectPlace(place) {
  return {
    x: ((place.lon + 180) / 360) * 1000,
    y: ((90 - place.lat) / 180) * 520,
  };
}

function renderVisitedPlaces() {
  const markerLayer = byId("visited-markers");
  const list = byId("visited-list");
  markerLayer.innerHTML = "";
  list.innerHTML = "";

  siteConfig.visitedPlaces.forEach((place) => {
    const { x, y } = projectPlace(place);
    const name = localize(place.name);
    const region = localize(place.region);
    const note = localize(place.note);
    const labelLeft = x > 820;
    const group = document.createElementNS(SVG_NS, "g");
    group.setAttribute("class", "visited-marker");

    const title = document.createElementNS(SVG_NS, "title");
    title.textContent = `${name}, ${region}`;
    group.append(title);

    const halo = document.createElementNS(SVG_NS, "circle");
    halo.setAttribute("class", "pin-halo");
    halo.setAttribute("cx", x);
    halo.setAttribute("cy", y);
    halo.setAttribute("r", 18);
    group.append(halo);

    const pin = document.createElementNS(SVG_NS, "circle");
    pin.setAttribute("class", "pin");
    pin.setAttribute("cx", x);
    pin.setAttribute("cy", y);
    pin.setAttribute("r", 7);
    group.append(pin);

    const label = document.createElementNS(SVG_NS, "text");
    label.setAttribute("x", labelLeft ? x - 16 : x + 16);
    label.setAttribute("y", y - 12);
    label.setAttribute("text-anchor", labelLeft ? "end" : "start");
    label.textContent = name;
    group.append(label);
    markerLayer.append(group);

    const item = document.createElement("div");
    item.className = "visited-item";
    item.append(createTextElement("strong", name));
    item.append(createTextElement("span", `${region} · ${note}`));
    list.append(item);
  });

  const count = siteConfig.visitedPlaces.length;
  byId("visited-count").textContent =
    state.locale === "zh"
      ? t("places.count").replace("{count}", count)
      : t("places.count").replace("{count}", count).replace("{plural}", count === 1 ? "" : "s");
}

byId("language-toggle").addEventListener("click", () => {
  setLocale(state.locale === "zh" ? "en" : "zh");
});

byId("theme-toggle").addEventListener("click", () => {
  setTheme(state.theme === "dark" ? "light" : "dark");
});

applyTheme();
applyLanguage();
renderNotionEmbed();
renderSocials();
loadArticleFeed();
loadGitHub();
