import { initSimpleKitShell } from "./src/platform/shell.js";
import { SIMPLEKIT_TOOLS, getToolById, getToolsByIds, getFeaturedTool } from "./src/platform/tools.js";

const pageConfig = globalThis.SimpleKitPage || {};

export {
  initSimpleKitShell,
  SIMPLEKIT_TOOLS,
  getToolById,
  getToolsByIds,
  getFeaturedTool,
};

initSimpleKitShell(pageConfig);
