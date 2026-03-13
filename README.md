# SimpleKit Core

Shared platform layer for the SimpleKit ecosystem.

## Supported Public API

Treat only these files as supported shared infrastructure:

- [simplekit-core.css](/Users/AshleySkinner/Documents/00_Engineering/04_Code/39_SimpleKit%20Core/simplekit-core.css)
- [simplekit-core.js](/Users/AshleySkinner/Documents/00_Engineering/04_Code/39_SimpleKit%20Core/simplekit-core.js)
- [simplekit-tools.js](/Users/AshleySkinner/Documents/00_Engineering/04_Code/39_SimpleKit%20Core/simplekit-tools.js)
- [core.css](/Users/AshleySkinner/Documents/00_Engineering/04_Code/39_SimpleKit%20Core/core.css)
- [core.js](/Users/AshleySkinner/Documents/00_Engineering/04_Code/39_SimpleKit%20Core/core.js)
- [dist/simplekit-core.css](/Users/AshleySkinner/Documents/00_Engineering/04_Code/39_SimpleKit%20Core/dist/simplekit-core.css)
- [dist/simplekit-core.js](/Users/AshleySkinner/Documents/00_Engineering/04_Code/39_SimpleKit%20Core/dist/simplekit-core.js)
- [dist/simplekit-tools.js](/Users/AshleySkinner/Documents/00_Engineering/04_Code/39_SimpleKit%20Core/dist/simplekit-tools.js)
- [src/platform/tools.js](/Users/AshleySkinner/Documents/00_Engineering/04_Code/39_SimpleKit%20Core/src/platform/tools.js)
- [src/platform/shell.js](/Users/AshleySkinner/Documents/00_Engineering/04_Code/39_SimpleKit%20Core/src/platform/shell.js)

This repo is intended to provide reusable static-site infrastructure for:

- shared design tokens
- shared shell styles
- shared header / nav
- shared footer
- support CTA
- central tools registry
- related tools rendering
- lightweight page config for static tool pages

## Core Surface

Use these files from other SimpleKit repos:

- [simplekit-core.css](/Users/AshleySkinner/Documents/00_Engineering/04_Code/39_SimpleKit%20Core/simplekit-core.css)
- [simplekit-core.js](/Users/AshleySkinner/Documents/00_Engineering/04_Code/39_SimpleKit%20Core/simplekit-core.js)
- [simplekit-tools.js](/Users/AshleySkinner/Documents/00_Engineering/04_Code/39_SimpleKit%20Core/simplekit-tools.js)
- [core.css](/Users/AshleySkinner/Documents/00_Engineering/04_Code/39_SimpleKit%20Core/core.css)
- [core.js](/Users/AshleySkinner/Documents/00_Engineering/04_Code/39_SimpleKit%20Core/core.js)

Versioned-style aliases also exist under [dist/](/Users/AshleySkinner/Documents/00_Engineering/04_Code/39_SimpleKit%20Core/dist).

## Page Config Pattern

Consuming pages set `window.SimpleKitPage` before loading `simplekit-core.js`.

```html
<link rel="stylesheet" href="./simplekit-core.css" />
<script>
  window.SimpleKitPage = {
    pageType: "tool",
    activeNavHref: "./tools.html",
    toolId: "cpp-calculator",
    relatedTools: ["retirement", "rrsp-tfsa", "fire"],
    showSupportCta: true,
    showRelatedTools: true,
    showFooterToolLinks: true,
    footerNote: "Shared platform shell loaded from SimpleKit core."
  };
</script>
<script type="module" src="./simplekit-core.js"></script>
```

Required shell mount points:

```html
<div data-simplekit-header></div>
<div data-simplekit-related-tools></div>
<div data-simplekit-support></div>
<div data-simplekit-footer></div>
```

## Registry

The central tools registry lives in [src/platform/tools.js](/Users/AshleySkinner/Documents/00_Engineering/04_Code/39_SimpleKit%20Core/src/platform/tools.js) and is re-exported for consumers through [simplekit-tools.js](/Users/AshleySkinner/Documents/00_Engineering/04_Code/39_SimpleKit%20Core/simplekit-tools.js).

Each tool entry includes:

- `id`
- `name`
- `slug`
- `href`
- `aliases`
- `category`
- `timeToUse`
- `status`
- `featured`
- `description`
- `ctaLabel`
- `learnSlug`
- `learnHref`
- `relatedToolIds`

Update the registry first whenever the platform adds or renames a tool.

## Repo Layout

- `simplekit-core.css`: lightweight shared shell/design CSS
- `simplekit-core.js`: shared shell bootstrap and public platform entry
- `simplekit-tools.js`: public registry entrypoint for consumer repos
- `dist/*`: lightweight consumer-facing aliases for downstream repos
- `src/platform/tools.js`: central tool registry
- `src/platform/shell.js`: reusable header/footer/support/related-tools renderers
- `docs/core-consumer-guide.md`: integration guide for downstream repos

## What Belongs In Core

- shared shell rendering
- generic layout and component styles
- shared branding and design tokens
- cross-tool navigation
- support CTA
- tools registry
- related-tools logic

## What Does Not Belong In Core

- calculator formulas
- planner state models
- report generation
- charts tied to one tool
- tool-specific assumptions
- tool-specific glossary/help content
- app-specific service workers

## Deployment / Versioning

Recommended approach for downstream repos:

1. Reference the shared assets from a stable hosted copy of this repo, or vendor the files into the consuming repo.
2. Prefer the `dist/` entrypoints for consumer usage.
3. If tools live in separate repos or domains, update registry entries to use `href` and `learnHref` values instead of relying on local slugs alone.
4. When publishing changes, treat the public files above as the compatibility surface.

## Maintenance Rule

Keep all future platform additions inside `src/platform/*`, `simplekit-core.*`, and `dist/*`.
