import { SIMPLEKIT_TOOLS, getFeaturedTool, getToolById, getToolsByIds } from "./tools.js";

const DEFAULT_NAV = [
  { href: "https://simplekit.app", label: "Home" },
  { href: "https://simplekit.app/tools/", label: "Tools" },
  { href: "https://simplekit.app/learn/", label: "Learn" },
  { href: "https://simplekit.app/about/", label: "About" },
  { href: "https://simplekit.app/support/", label: "Support" },
];

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
          ${showFooterToolLinks ? `
            <div class="footer-link-list">
              ${buildFooterToolLinks()}
            </div>
          ` : ""}
        </div>
        <div>
          <strong>Learn</strong>
          ${showFooterLearnLinks ? `
            <div class="footer-link-list">
              <a href="./learn.html">Guides Hub</a>
              <a href="./retirement-planning-basics.html">Retirement Planning Basics</a>
              <a href="./cpp-basics.html">CPP Basics</a>
              <a href="./rrsp-vs-tfsa-basics.html">RRSP vs TFSA Basics</a>
            </div>
          ` : ""}
        </div>
        <div>
          <strong>Support</strong>
          ${showFooterSupportLinks ? `
            <div class="footer-link-list">
              <a href="./support.html">Support SimpleKit</a>
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
        <a class="btn btn-secondary" href="./support.html">${escapeHtml(config.supportSecondaryLabel || "See support options")}</a>
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
  floatingSupport.setAttribute("aria-label", "Buy Me a Coffee");
  floatingSupport.textContent = "☕ Buy Me a Coffee";
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

export function initSimpleKitShell(config = {}) {
  renderHeader(config);
  renderFeaturedTool(config);
  renderToolDirectory(config);
  renderFooter(config);
  renderSupport(config);
  renderFloatingSupportButton(config);
  renderRelatedTools(config);
}
