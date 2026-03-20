export const SIMPLEKIT_TOOLS = [
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

function normalizeToolId(toolId) {
  const value = String(toolId || "").trim();
  if (!value) return "";
  return value.toLowerCase();
}

export function getToolById(toolId) {
  const normalizedToolId = normalizeToolId(toolId);
  return SIMPLEKIT_TOOLS.find((tool) => {
    const aliases = Array.isArray(tool.aliases) ? tool.aliases : [];
    return normalizeToolId(tool.id) === normalizedToolId
      || aliases.some((alias) => normalizeToolId(alias) === normalizedToolId);
  }) || null;
}

export function getToolsByIds(ids = []) {
  const seen = new Set();
  return ids
    .map((id) => getToolById(id))
    .filter((tool) => {
      if (!tool || seen.has(tool.id)) return false;
      seen.add(tool.id);
      return true;
    });
}

export function getFeaturedTool() {
  return SIMPLEKIT_TOOLS.find((tool) => tool.featured) || SIMPLEKIT_TOOLS[0];
}
