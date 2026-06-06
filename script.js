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
      title: "KickSonar",
      summary: {
        zh: "一个 TypeScript Web 项目，在线版本部署在 kicksonar.com，代码维护在 nikoedwards/ks。",
        en: "A TypeScript web project deployed at kicksonar.com and maintained in nikoedwards/ks.",
      },
      stack: ["TypeScript", "Web App"],
      repo: "https://github.com/nikoedwards/ks",
      live: "https://kicksonar.com",
    },
    {
      title: "Seedance TVC",
      summary: {
        zh: "一个部署在 GitHub Pages 上的 JavaScript Web 项目，代码维护在 nikoedwards/seedancetvc。",
        en: "A JavaScript web project deployed on GitHub Pages and maintained in nikoedwards/seedancetvc.",
      },
      stack: ["JavaScript", "GitHub Pages"],
      repo: "https://github.com/nikoedwards/seedancetvc",
      live: "https://nikoedwards.github.io/seedancetvc/",
    },
    {
      title: "Personal Website",
      summary: {
        zh: "一个部署在 GitHub Pages 上的个人网站，用来展示 Vibe Coding、GitHub 项目和 Notion 文章。",
        en: "A GitHub Pages personal website for Vibe Coding projects, GitHub work, and Notion writing.",
      },
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

const pageTitles = {
  home: {
    zh: "Niko Edwards - 个人网站",
    en: "Niko Edwards - Personal Website",
  },
  projects: {
    zh: "Vibe Coding 项目 - Niko Edwards",
    en: "Vibe Coding Projects - Niko Edwards",
  },
  github: {
    zh: "GitHub - Niko Edwards",
    en: "GitHub - Niko Edwards",
  },
  articles: {
    zh: "文章 - Niko Edwards",
    en: "Articles - Niko Edwards",
  },
  places: {
    zh: "足迹 - Niko Edwards",
    en: "Places - Niko Edwards",
  },
};

const translations = {
  zh: {
    document: {
      title: "Niko Edwards - 个人网站",
      description:
        "Niko Edwards 的个人网站，展示 Vibe Coding 项目、GitHub 仓库、Contribution 面板、Notion 文章和去过的地方。",
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
      kicker: "Vibe Coding / GitHub Pages / Notion",
      copy: "一个简洁的个人主页，用来收拢我在 Vibe Coding、GitHub 项目和 Notion 写作里的公开轨迹。",
      profileFallback: "从 GitHub 公开构建中。",
      meta: {
        githubLabel: "GitHub",
        focusLabel: "方向",
        focusValue: "Vibe Coding",
        writingLabel: "写作",
        writingValue: "Notion 笔记",
        deployLabel: "部署",
        deployValue: "GitHub Pages",
      },
    },
    ticker:
      "CURRENTLY / VIBE CODING / OPEN SOURCE / NOTION ARTICLES / GITHUB PAGES / SHIP IN PUBLIC /",
    home: {
      viewProjects: "查看项目 ->",
      viewGithub: "查看 GitHub ->",
      viewArticles: "查看文章 ->",
      viewPlaces: "查看足迹 ->",
      socialIndex: "05 / ELSEWHERE",
      socialTitle: "社交与公开入口",
      socialCopy: "一些公开入口，用来放代码、笔记和联系方式。",
    },
    projects: {
      index: "01 / VIBE CODING",
      title: "Vibe Coding 项目",
      copy: "这里放我做过的 Web 项目和可以公开展示的代码。后续新增项目时，只需要在配置里追加一条记录。",
      allGithub: "查看 GitHub ->",
      live: "在线预览 ->",
      repo: "代码仓库 ->",
    },
    github: {
      index: "02 / GITHUB",
      title: "仓库与贡献面板",
      copy: "这里同步展示我的公开 GitHub 信息、最新仓库和公开 Contribution 快照。",
      repositories: "全部仓库 ->",
      contributionCaption: "GitHub 公开贡献快照：@nikoedwards",
      publicRepos: "公开仓库",
      followers: "关注者",
      latestPush: "最近推送",
      loading: "正在加载 GitHub 仓库...",
      unavailable: "GitHub 数据暂时不可用。",
      openGithub: "打开 GitHub ->",
      contributionTotal: "过去一年公开贡献",
      contributionLoading: "正在加载 Contribution 面板...",
      contributionUnavailable: "Contribution 数据暂时不可用。",
      less: "少",
      more: "多",
      noRepos: "还没有公开仓库。",
      noDescription: "还没有公开描述。",
      stars: "stars",
      updated: "更新于",
    },
    articles: {
      index: "03 / ARTICLES",
      title: "Notion 文章",
      open: "打开 Notion ->",
      copy: "文章直接维护在 Notion，网站嵌入同一个公开页面。技术笔记、项目复盘和长期主题都会放在这个板块里。",
      fallbackTitle: "同步索引备份",
      loading: "正在加载文章...",
      fallbackName: "Notion 文章",
      fallbackDate: "实时源",
      fallbackSummary:
        "文章源头维护在 Notion。若嵌入不可用，可以通过这里打开同步索引或 Notion 原页面。",
      read: "阅读 ->",
    },
    places: {
      index: "04 / PLACES",
      title: "去过的地方",
      copy: "一张静态世界地图，只高亮我去过的地方。它不需要缩放，也不依赖第三方地图服务。",
    },
    footer: {
      copy: "一个维护在公开仓库里的个人网站。使用原生 HTML、CSS 和 JavaScript 构建。",
    },
  },
  en: {
    document: {
      title: "Niko Edwards - Personal Website",
      description:
        "Niko Edwards' personal website for Vibe Coding projects, GitHub repositories, contributions, Notion articles, and places visited.",
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
      kicker: "Vibe Coding / GitHub Pages / Notion",
      copy: "A simple personal site for collecting my public trail across Vibe Coding, GitHub projects, and Notion writing.",
      profileFallback: "Building in public from GitHub.",
      meta: {
        githubLabel: "GitHub",
        focusLabel: "Focus",
        focusValue: "Vibe Coding",
        writingLabel: "Writing",
        writingValue: "Notion Notes",
        deployLabel: "Deploy",
        deployValue: "GitHub Pages",
      },
    },
    ticker:
      "CURRENTLY / VIBE CODING / OPEN SOURCE / NOTION ARTICLES / GITHUB PAGES / SHIP IN PUBLIC /",
    home: {
      viewProjects: "View projects ->",
      viewGithub: "View GitHub ->",
      viewArticles: "View articles ->",
      viewPlaces: "View places ->",
      socialIndex: "05 / ELSEWHERE",
      socialTitle: "Elsewhere",
      socialCopy: "A few public places where I keep code, notes, and contact details.",
    },
    projects: {
      index: "01 / VIBE CODING",
      title: "Vibe Coding projects",
      copy: "A focused view of web projects and public code. Future projects can be added by extending the site config.",
      allGithub: "All GitHub ->",
      live: "Live ->",
      repo: "Repo ->",
    },
    github: {
      index: "02 / GITHUB",
      title: "Repositories and contribution graph",
      copy: "Public GitHub profile details, recent repositories, and the public contribution snapshot live here.",
      repositories: "Repositories ->",
      contributionCaption: "Public GitHub contribution snapshot: @nikoedwards",
      publicRepos: "Public repos",
      followers: "Followers",
      latestPush: "Latest push",
      loading: "Loading GitHub repositories...",
      unavailable: "GitHub data is temporarily unavailable.",
      openGithub: "Open GitHub ->",
      contributionTotal: "public contributions in the last year",
      contributionLoading: "Loading contribution graph...",
      contributionUnavailable: "Contribution data is temporarily unavailable.",
      less: "Less",
      more: "More",
      noRepos: "No public repositories yet.",
      noDescription: "No public description yet.",
      stars: "stars",
      updated: "Updated",
    },
    articles: {
      index: "03 / ARTICLES",
      title: "Notion journal",
      open: "Open Notion ->",
      copy: "Articles are maintained directly in Notion, and this site embeds the same public page. Technical notes, project retrospectives, and long-running themes live here.",
      fallbackTitle: "Synced article index",
      loading: "Loading articles...",
      fallbackName: "Notion Articles",
      fallbackDate: "Live source",
      fallbackSummary:
        "Articles are maintained in Notion. If the embed is unavailable, this index and the original Notion page remain available.",
      read: "Read ->",
    },
    places: {
      index: "04 / PLACES",
      title: "Places I've been",
      copy: "A static world map that highlights places I have visited, without zoom controls or third-party map tiles.",
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

const byId = (id) => document.getElementById(id);
const state = {
  locale: localStorage.getItem("locale") || "zh",
  theme:
    localStorage.getItem("theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"),
  githubProfile: null,
  githubRepos: [],
  githubContributions: null,
  articles: null,
};

function pageName() {
  return document.body.dataset.page || "home";
}

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
  button.setAttribute(
    "aria-label",
    state.theme === "dark" ? t("controls.themeLightLabel") : t("controls.themeDarkLabel"),
  );
  button.setAttribute("title", button.getAttribute("aria-label"));
}

function applyActiveNavigation() {
  const currentPage = pageName();
  document.querySelectorAll("[data-nav]").forEach((link) => {
    if (link.dataset.nav === currentPage) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

function applyLanguage() {
  document.documentElement.lang = state.locale === "zh" ? "zh-CN" : "en";
  document.title = pageTitles[pageName()]?.[state.locale] || t("document.title");
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute("content", t("document.description"));

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });

  document.querySelectorAll("[data-locale-option]").forEach((button) => {
    const isActive = button.dataset.localeOption === state.locale;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
    button.setAttribute("aria-label", button.dataset.localeOption === "zh" ? "Switch to Chinese" : "Switch to English");
  });

  const tickerLine = byId("ticker-line");
  if (tickerLine) tickerLine.textContent = `${t("ticker")} ${t("ticker")}`;

  applyTheme();
  renderProfileLine();
  renderProjects();
  renderArticleFallback();
  if (state.githubRepos.length) renderRepoGrid(state.githubRepos);
  if (state.githubProfile) renderGitHubProfile(state.githubProfile, state.githubRepos);
  if (state.githubContributions) renderContributionGraph(state.githubContributions);
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
  if (!grid) return;
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
  if (link) link.href = siteConfig.notionUrl;
  if (frame && frame.src !== siteConfig.notionEmbedUrl) frame.src = siteConfig.notionEmbedUrl;
}

function renderArticleFallback() {
  const grid = byId("article-grid");
  if (!grid) return;
  grid.innerHTML = "";
  const visibleArticles = Array.isArray(state.articles) && state.articles.length ? state.articles : fallbackArticles();
  visibleArticles.forEach((article) => grid.append(createArticleCard(article)));
}

async function loadArticleFeed() {
  if (!byId("article-grid")) return;
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
  document.querySelectorAll("[data-social-links], #social-links").forEach((container) => {
    container.innerHTML = "";

    siteConfig.socials
      .filter((item) => item.url)
      .forEach((item) => {
        container.append(createCardLink(item.label, item.url));
      });
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
  if (!grid) return;
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
  const avatar = byId("avatar");
  if (avatar) avatar.src = profile.avatar_url;

  const repoCount = byId("repo-count");
  if (repoCount) repoCount.textContent = profile.public_repos;

  const followerCount = byId("follower-count");
  if (followerCount) followerCount.textContent = profile.followers;

  const latestPush = byId("latest-push");
  if (latestPush) latestPush.textContent = repos[0] ? formatDate(repos[0].pushed_at) : "N/A";

  renderProfileLine();
}

function renderGitHubUnavailable() {
  const grid = byId("repo-grid");
  if (!grid) return;
  grid.innerHTML = "";

  const card = document.createElement("article");
  card.className = "repo-card loading-card";
  card.append(createTextElement("p", t("github.unavailable")));
  const links = document.createElement("div");
  links.className = "card-links";
  links.append(createCardLink(t("github.openGithub"), `https://github.com/${siteConfig.githubUser}`));
  card.append(links);
  grid.append(card);
}

function contributionMonthLabels(days) {
  const labels = [];
  const seenMonths = new Set();

  days.forEach((day) => {
    const date = new Date(`${day.date}T00:00:00Z`);
    const month = date.getUTCMonth();
    const year = date.getUTCFullYear();
    const key = `${year}-${month}`;
    if (seenMonths.has(key)) return;

    seenMonths.add(key);
    labels.push({
      label: new Intl.DateTimeFormat(state.locale === "zh" ? "zh-CN" : "en", {
        month: "short",
        timeZone: "UTC",
      }).format(date),
      week: day.week,
    });
  });

  return labels;
}

function renderContributionLegend() {
  const legend = byId("contribution-legend");
  if (!legend) return;

  legend.innerHTML = "";
  legend.append(createTextElement("span", t("github.less")));

  for (let level = 0; level <= 4; level += 1) {
    const square = document.createElement("i");
    square.className = "contribution-legend-cell";
    square.dataset.level = String(level);
    legend.append(square);
  }

  legend.append(createTextElement("span", t("github.more")));
}

function renderContributionGraph(data) {
  const chart = byId("contribution-chart");
  if (!chart) return;

  const days = Array.isArray(data.days)
    ? data.days
        .filter((day) => day.date)
        .map((day) => ({
          date: day.date,
          week: Number(day.week) || 0,
          day: Number(day.day) || 0,
          level: Math.max(0, Math.min(4, Number(day.level) || 0)),
        }))
        .sort((a, b) => new Date(a.date) - new Date(b.date))
    : [];

  if (!days.length) {
    renderContributionUnavailable();
    return;
  }

  const contributionTotal = byId("contribution-total");
  if (contributionTotal) {
    const count = data.count || data.totalContributions || "Public";
    contributionTotal.textContent =
      state.locale === "zh" && count !== "Public" ? `${count} 次` : `${count} contributions`;
  }

  renderContributionLegend();
  chart.innerHTML = "";

  const weeks = Math.max(53, Math.max(...days.map((day) => day.week)) + 1);
  chart.style.setProperty("--weeks", String(weeks));

  const monthRow = document.createElement("div");
  monthRow.className = "contribution-months";
  monthRow.style.setProperty("--weeks", String(weeks));

  contributionMonthLabels(days).forEach((month) => {
    const label = document.createElement("span");
    label.textContent = month.label;
    label.style.gridColumn = `${month.week + 1} / span 4`;
    monthRow.append(label);
  });

  const body = document.createElement("div");
  body.className = "contribution-body";

  const weekdays = document.createElement("div");
  weekdays.className = "contribution-weekdays";
  const weekdayLabels =
    state.locale === "zh" ? ["", "一", "", "三", "", "五", ""] : ["", "Mon", "", "Wed", "", "Fri", ""];
  weekdayLabels.forEach((label) => weekdays.append(createTextElement("span", label)));

  const grid = document.createElement("div");
  grid.className = "contribution-grid";
  grid.style.setProperty("--weeks", String(weeks));

  days.forEach((day) => {
    const cell = document.createElement("span");
    cell.className = "contribution-cell";
    cell.dataset.level = String(day.level);
    cell.style.gridColumn = `${day.week + 1}`;
    cell.style.gridRow = `${day.day + 1}`;
    cell.title = `${day.date} · level ${day.level}`;
    cell.setAttribute("aria-label", cell.title);
    grid.append(cell);
  });

  body.append(weekdays, grid);
  chart.append(monthRow, body);
}

function renderContributionUnavailable() {
  const chart = byId("contribution-chart");
  if (!chart) return;
  chart.innerHTML = "";
  chart.append(createTextElement("p", t("github.contributionUnavailable"), "contribution-empty"));
}

async function loadContributions() {
  if (!byId("contribution-chart")) return;

  try {
    const response = await fetch(`contributions.json?v=${Date.now()}`);
    if (!response.ok) throw new Error("Contribution data unavailable");
    const data = await response.json();
    state.githubContributions = data;
    renderContributionGraph(data);
  } catch (error) {
    renderContributionUnavailable();
  }
}

async function loadGitHub() {
  const needsGitHub = ["avatar", "repo-grid", "repo-count", "follower-count", "latest-push"].some((id) =>
    byId(id),
  );
  if (!needsGitHub) return;

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
    renderGitHubUnavailable();
  }
}

document.querySelectorAll("[data-locale-option]").forEach((button) => {
  button.addEventListener("click", () => {
    setLocale(button.dataset.localeOption);
  });
});

byId("theme-toggle")?.addEventListener("click", () => {
  setTheme(state.theme === "dark" ? "light" : "dark");
});

applyTheme();
applyActiveNavigation();
applyLanguage();
renderNotionEmbed();
renderSocials();
loadArticleFeed();
loadGitHub();
loadContributions();
