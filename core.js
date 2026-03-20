const SIMPLEKIT_TOOLS = [
  {
    id: "retirement-planner",
    aliases: ["retirement"],
    name: "Retirement Planner",
    slug: "retirement-planner.html",
    href: "https://simplekit.app/retirement-planner/",
    category: "Financial Planning",
    timeToUse: "5 min",
    status: "live",
    featured: true,
    description: "Build a clearer picture of retirement income, savings, taxes, CPP, OAS, and future cash flow.",
    ctaLabel: "Open Planner",
    learnSlug: "retirement-planning-basics.html",
    learnHref: "https://simplekit.app/learn/retirement-planning-basics/",
    relatedToolIds: ["cpp-calculator", "fire-calculator", "rrsp-tfsa-calculator"],
  },
  {
    id: "net-worth-calculator",
    aliases: ["networth"],
    name: "Net Worth Calculator",
    slug: "net-worth-calculator.html",
    href: "https://simplekit.app/net-worth-calculator/",
    category: "Financial Planning",
    timeToUse: "2 min",
    status: "planned",
    featured: false,
    description: "See where you stand today by adding up assets, debts, and home equity in one simple snapshot.",
    ctaLabel: "View Your Net Worth",
    learnSlug: "understanding-net-worth.html",
    learnHref: "https://simplekit.app/learn/net-worth-basics/",
    relatedToolIds: ["fire-calculator", "retirement-planner", "travel-planner"],
  },
  {
    id: "fire-calculator",
    aliases: ["fire"],
    name: "FIRE Calculator",
    slug: "fire-calculator.html",
    href: "https://simplekit.app/fire-calculator/",
    category: "Financial Planning",
    timeToUse: "3 min",
    status: "planned",
    featured: false,
    description: "Estimate how much you may need to retire early and how savings pace affects the timeline.",
    ctaLabel: "Explore FIRE",
    learnSlug: "fire-explained.html",
    learnHref: "https://simplekit.app/learn/fire-explained/",
    relatedToolIds: ["net-worth-calculator", "retirement-planner", "rrsp-tfsa-calculator"],
  },
  {
    id: "cpp-calculator",
    aliases: ["cpp"],
    name: "CPP Calculator",
    slug: "cpp-calculator.html",
    href: "https://simplekit.app/cpp-calculator/",
    category: "Financial Planning",
    timeToUse: "2 min",
    status: "live",
    featured: false,
    description: "Explore CPP timing and compare how starting earlier or later affects future income decisions.",
    ctaLabel: "Estimate CPP",
    learnSlug: "cpp-basics.html",
    learnHref: "https://simplekit.app/learn/cpp-basics/",
    relatedToolIds: ["retirement-planner", "fire-calculator", "rrsp-tfsa-calculator"],
  },
  {
    id: "rrsp-tfsa-calculator",
    aliases: ["rrsp-tfsa"],
    name: "RRSP / TFSA Calculator",
    slug: "rrsp-tfsa-calculator.html",
    href: "https://simplekit.app/rrsp-vs-tfsa-calculator/",
    category: "Financial Planning",
    timeToUse: "3 min",
    status: "planned",
    featured: false,
    description: "Compare account strategies and see how tax treatment can change the long-term outcome.",
    ctaLabel: "Compare Accounts",
    learnSlug: "rrsp-vs-tfsa-basics.html",
    learnHref: "https://simplekit.app/learn/rrsp-vs-tfsa-basics/",
    relatedToolIds: ["retirement-planner", "cpp-calculator", "fire-calculator"],
  },
  {
    id: "mortgage",
    aliases: ["mortgage-calculator"],
    name: "Mortgage Calculator",
    slug: "mortgage",
    href: "https://simplekit.app/mortgage-calculator/",
    category: "Home Planning",
    timeToUse: "3 min",
    status: "live",
    featured: false,
    description: "Estimate mortgage payments, compare affordability scenarios, and understand how housing costs fit into your wider plan.",
    ctaLabel: "Estimate Mortgage",
    learnSlug: "",
    learnHref: "",
    relatedToolIds: ["networth", "fire", "retirement", "rrsp-tfsa"],
  },
  {
    id: "travel-planner",
    aliases: ["travel"],
    name: "Travel Planner",
    slug: "travel-planner.html",
    href: "https://simplekit.app/travel-planner/",
    category: "Lifestyle Planning",
    timeToUse: "2 min",
    status: "planned",
    featured: false,
    description: "Organize trip costs, compare scenarios, and make travel budgeting easier before you book.",
    ctaLabel: "Plan a Trip",
    learnSlug: "travel-budget-planning-basics.html",
    learnHref: "https://simplekit.app/learn/travel-budget-planning-basics/",
    relatedToolIds: ["tools", "net-worth-calculator", "retirement-planner"],
  },
];

const DEFAULT_NAV = [
  { href: "https://simplekit.app", label: "Home" },
  { href: "https://simplekit.app/tools/", label: "Tools" },
  { href: "https://simplekit.app/learn/", label: "Learn" },
  { href: "https://simplekit.app/about/", label: "About" },
  { href: "https://simplekit.app/support/", label: "Support" },
];

function normalizeToolId(toolId) {
  const value = String(toolId || "").trim();
  if (!value) return "";
  return value.toLowerCase();
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("\"", "&quot;")
    .replaceAll("'", "&#39;");
}

function resolveToolHref(tool) {
  return tool?.href || (tool?.slug ? `./${tool.slug}` : "#");
}

function resolveLearnHref(tool) {
  return tool?.learnHref || (tool?.learnSlug ? `./${tool.learnSlug}` : "");
}

function buildNavHtml(activeHref = "") {
  return DEFAULT_NAV.map((item) => {
    const isActive = item.href === activeHref;
    return `<a href="${escapeHtml(item.href)}"${isActive ? ' aria-current="page"' : ""}>${escapeHtml(item.label)}</a>`;
  }).join("");
}

function buildFooterToolLinks() {
  return SIMPLEKIT_TOOLS.map((tool) => (
    `<a href="${escapeHtml(resolveToolHref(tool))}">${escapeHtml(tool.name)}</a>`
  )).join("");
}

function buildRelatedToolsHtml(relatedTools) {
  if (!relatedTools.length) return "";
  return `
    <section class="panel platform-section">
      <div class="section-intro">
        <p class="section-kicker">Related tools</p>
        <h2>Next helpful tools</h2>
      </div>
      <div class="related-grid">
        ${relatedTools.map((tool) => `
          <a class="related-card" href="${escapeHtml(resolveToolHref(tool))}">
            <strong>${escapeHtml(tool.name)}</strong>
            <p>${escapeHtml(tool.description)}</p>
          </a>
        `).join("")}
      </div>
    </section>
  `;
}

function renderFeaturedTool(config) {
  const mount = document.querySelector("[data-simplekit-featured-tool]");
  if (!mount) return;
  const tool = getToolById(config.featuredToolId) || getFeaturedTool();
  if (!tool) return;
  mount.innerHTML = `
    <article class="featured-tool-card">
      <div>
        <span class="card-tag">${escapeHtml(tool.featured ? "Flagship" : tool.category)}</span>
        <h3>${escapeHtml(tool.name)}</h3>
        <p>${escapeHtml(tool.description)}</p>
        <div class="tool-meta-row">
          <span>${escapeHtml(tool.category)}</span>
          <span>${escapeHtml(tool.timeToUse)}</span>
          <span>${escapeHtml(tool.status)}</span>
        </div>
      </div>
      <div class="landing-actions">
        <a class="btn btn-primary" href="${escapeHtml(resolveToolHref(tool))}">${escapeHtml(tool.ctaLabel)}</a>
        ${resolveLearnHref(tool) ? `<a class="btn btn-secondary" href="${escapeHtml(resolveLearnHref(tool))}">Read guide</a>` : ""}
      </div>
    </article>
  `;
}

function renderToolDirectory() {
  const mount = document.querySelector("[data-simplekit-tool-grid]");
  if (!mount) return;
  mount.innerHTML = SIMPLEKIT_TOOLS.filter((tool) => !tool.featured).map((tool) => `
    <article class="tool-card">
      <span class="card-tag">${escapeHtml(tool.category)}</span>
      <h3>${escapeHtml(tool.name)}</h3>
      <p>${escapeHtml(tool.description)}</p>
      <div class="tool-meta-row">
        <span>${escapeHtml(tool.timeToUse)}</span>
        <span>${escapeHtml(tool.status)}</span>
      </div>
      <a class="btn btn-secondary" href="${escapeHtml(resolveToolHref(tool))}">${escapeHtml(tool.ctaLabel)}</a>
    </article>
  `).join("");
}

function renderHeader(config) {
  const mount = document.querySelector("[data-simplekit-header]");
  if (!mount) return;
  mount.innerHTML = `
    <div class="site-topbar">
      <a class="site-brand" href="https://simplekit.app">SimpleKit</a>
      <nav class="site-nav" aria-label="Primary navigation">
        ${buildNavHtml(config.activeNavHref)}
      </nav>
    </div>
  `;
}

function renderFooter(config) {
  const mount = document.querySelector("[data-simplekit-footer]");
  if (!mount || config.showFooter === false) return;
  const showFooterToolLinks = config.showFooterToolLinks !== false;
  const showFooterLearnLinks = config.showFooterLearnLinks !== false;
  const showFooterSupportLinks = config.showFooterSupportLinks !== false;
  mount.innerHTML = `
    <footer class="app-footer no-print" aria-label="Footer">
      <div class="footer-grid">
        <div>
          <strong>SimpleKit</strong>
          <p class="muted small-copy">Simple tools for complex life decisions. Built to make planning clearer without extra friction.</p>
        </div>
        <div>
          <strong>Tools</strong>
          ${showFooterToolLinks ? `<div class="footer-link-list">${buildFooterToolLinks()}</div>` : ""}
        </div>
        <div>
          <strong>Learn</strong>
          ${showFooterLearnLinks ? `
            <div class="footer-link-list">
              <a href="https://simplekit.app/learn/">Learn Hub</a>
              <a href="https://simplekit.app/learn/retirement-planning-basics/">Retirement Planning Basics</a>
              <a href="https://simplekit.app/learn/cpp-basics/">CPP Basics</a>
              <a href="https://simplekit.app/learn/fire-explained/">FIRE Explained</a>
              <a href="https://simplekit.app/learn/rrsp-vs-tfsa-basics/">RRSP vs TFSA Basics</a>
              <a href="https://simplekit.app/learn/net-worth-basics/">Understanding Net Worth</a>
            </div>
          ` : ""}
        </div>
        <div>
          <strong>Support</strong>
          ${showFooterSupportLinks ? `
            <div class="footer-link-list">
              <a href="https://simplekit.app/support/">Support SimpleKit</a>
              <a href="https://buymeacoffee.com/ashleysnl" target="_blank" rel="noopener noreferrer">Buy Me a Coffee</a>
            </div>
          ` : ""}
        </div>
      </div>
      <div class="footer-meta-row">
        <span class="muted small-copy">${escapeHtml(config.footerNote || "SimpleKit core shell for static tool pages.")}</span>
        <span class="muted small-copy">© 2026 SimpleKit</span>
      </div>
    </footer>
  `;
}

function renderSupport(config) {
  const mount = document.querySelector("[data-simplekit-support]");
  if (!mount || config.showSupportCta === false) return;
  mount.innerHTML = `
    <section class="panel support-banner" aria-labelledby="sharedSupportTitle">
      <div>
        <p class="section-kicker">Support</p>
        <h2 id="sharedSupportTitle">${escapeHtml(config.supportTitle || "If SimpleKit helped you, support future tools")}</h2>
        <p class="muted">${escapeHtml(config.supportCopy || "Buy Me a Coffee helps fund ongoing improvements, maintenance, and new SimpleKit tools.")}</p>
      </div>
      <div class="landing-actions">
        <a class="btn btn-primary" href="https://buymeacoffee.com/ashleysnl" target="_blank" rel="noopener noreferrer">${escapeHtml(config.supportPrimaryLabel || "Support future tools")}</a>
        <a class="btn btn-secondary" href="https://simplekit.app/support/">${escapeHtml(config.supportSecondaryLabel || "See support options")}</a>
      </div>
    </section>
  `;
}

function renderFloatingSupportButton(config) {
  if (config.showFloatingSupportButton === false) return;
  if (document.getElementById("simplekitFloatingSupport")) return;
  const floatingSupport = document.createElement("a");
  floatingSupport.id = "simplekitFloatingSupport";
  floatingSupport.className = "floating-support-btn";
  floatingSupport.href = "https://buymeacoffee.com/ashleysnl";
  floatingSupport.target = "_blank";
  floatingSupport.rel = "noopener noreferrer";
  floatingSupport.setAttribute("aria-label", "Support this free tool");
  floatingSupport.textContent = "☕ Support this free tool";
  document.body.appendChild(floatingSupport);
}

function renderRelatedTools(config) {
  const mount = document.querySelector("[data-simplekit-related-tools]");
  if (!mount || config.showRelatedTools === false) return;
  const fallbackIds = getToolById(config.toolId)?.relatedToolIds || [];
  const configuredRelatedIds = Array.isArray(config.relatedToolIds) && config.relatedToolIds.length
    ? config.relatedToolIds
    : Array.isArray(config.relatedTools) && config.relatedTools.length
      ? config.relatedTools
      : fallbackIds;
  mount.innerHTML = buildRelatedToolsHtml(getToolsByIds(configuredRelatedIds.filter((id) => id !== "tools")));
}

function getToolById(toolId) {
  const normalizedToolId = normalizeToolId(toolId);
  return SIMPLEKIT_TOOLS.find((tool) => {
    const aliases = Array.isArray(tool.aliases) ? tool.aliases : [];
    return normalizeToolId(tool.id) === normalizedToolId
      || aliases.some((alias) => normalizeToolId(alias) === normalizedToolId);
  }) || null;
}

function getToolsByIds(ids = []) {
  const seen = new Set();
  return ids
    .map((id) => getToolById(id))
    .filter((tool) => {
      if (!tool || seen.has(tool.id)) return false;
      seen.add(tool.id);
      return true;
    });
}

function getFeaturedTool() {
  return SIMPLEKIT_TOOLS.find((tool) => tool.featured) || SIMPLEKIT_TOOLS[0];
}

function initSimpleKitShell(config = {}) {
  if (typeof document === "undefined") return;
  renderHeader(config);
  renderFeaturedTool(config);
  renderToolDirectory(config);
  renderFooter(config);
  renderSupport(config);
  renderFloatingSupportButton(config);
  renderRelatedTools(config);
}

const pageConfig = globalThis.SimpleKitPage || {};

export {
  initSimpleKitShell,
  SIMPLEKIT_TOOLS,
  getToolById,
  getToolsByIds,
  getFeaturedTool,
};

initSimpleKitShell(pageConfig);
