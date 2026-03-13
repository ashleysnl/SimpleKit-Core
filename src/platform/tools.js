export const SIMPLEKIT_TOOLS = [
  {
    id: "retirement-planner",
    name: "Retirement Planner",
    slug: "retirement-planner.html",
    href: "./retirement-planner.html",
    category: "Financial Planning",
    timeToUse: "5 min",
    status: "live",
    featured: true,
    description: "Build a clearer picture of retirement income, savings, taxes, CPP, OAS, and future cash flow.",
    ctaLabel: "Open Planner",
    learnSlug: "retirement-planning-basics.html",
    learnHref: "./retirement-planning-basics.html",
    relatedToolIds: ["cpp-calculator", "fire-calculator", "rrsp-tfsa-calculator"],
  },
  {
    id: "net-worth-calculator",
    name: "Net Worth Calculator",
    slug: "net-worth-calculator.html",
    href: "./net-worth-calculator.html",
    category: "Financial Planning",
    timeToUse: "2 min",
    status: "planned",
    featured: false,
    description: "See where you stand today by adding up assets, debts, and home equity in one simple snapshot.",
    ctaLabel: "View Your Net Worth",
    learnSlug: "understanding-net-worth.html",
    learnHref: "./understanding-net-worth.html",
    relatedToolIds: ["fire-calculator", "retirement-planner", "travel-planner"],
  },
  {
    id: "fire-calculator",
    name: "FIRE Calculator",
    slug: "fire-calculator.html",
    href: "./fire-calculator.html",
    category: "Financial Planning",
    timeToUse: "3 min",
    status: "planned",
    featured: false,
    description: "Estimate how much you may need to retire early and how savings pace affects the timeline.",
    ctaLabel: "Explore FIRE",
    learnSlug: "fire-explained.html",
    learnHref: "./fire-explained.html",
    relatedToolIds: ["net-worth-calculator", "retirement-planner", "rrsp-tfsa-calculator"],
  },
  {
    id: "cpp-calculator",
    name: "CPP Calculator",
    slug: "cpp-calculator.html",
    href: "./cpp-calculator.html",
    category: "Financial Planning",
    timeToUse: "2 min",
    status: "live",
    featured: false,
    description: "Explore CPP timing and compare how starting earlier or later affects future income decisions.",
    ctaLabel: "Estimate CPP",
    learnSlug: "cpp-basics.html",
    learnHref: "./cpp-basics.html",
    relatedToolIds: ["retirement-planner", "fire-calculator", "rrsp-tfsa-calculator"],
  },
  {
    id: "rrsp-tfsa-calculator",
    name: "RRSP / TFSA Calculator",
    slug: "rrsp-tfsa-calculator.html",
    href: "./rrsp-tfsa-calculator.html",
    category: "Financial Planning",
    timeToUse: "3 min",
    status: "planned",
    featured: false,
    description: "Compare account strategies and see how tax treatment can change the long-term outcome.",
    ctaLabel: "Compare Accounts",
    learnSlug: "rrsp-vs-tfsa-basics.html",
    learnHref: "./rrsp-vs-tfsa-basics.html",
    relatedToolIds: ["retirement-planner", "cpp-calculator", "fire-calculator"],
  },
  {
    id: "travel-planner",
    name: "Travel Planner",
    slug: "travel-planner.html",
    href: "./travel-planner.html",
    category: "Lifestyle Planning",
    timeToUse: "2 min",
    status: "planned",
    featured: false,
    description: "Organize trip costs, compare scenarios, and make travel budgeting easier before you book.",
    ctaLabel: "Plan a Trip",
    learnSlug: "travel-budget-planning-basics.html",
    learnHref: "./travel-budget-planning-basics.html",
    relatedToolIds: ["tools", "net-worth-calculator", "retirement-planner"],
  },
];

export function getToolById(toolId) {
  return SIMPLEKIT_TOOLS.find((tool) => tool.id === toolId) || null;
}

export function getToolsByIds(ids = []) {
  return ids.map((id) => getToolById(id)).filter(Boolean);
}

export function getFeaturedTool() {
  return SIMPLEKIT_TOOLS.find((tool) => tool.featured) || SIMPLEKIT_TOOLS[0];
}
