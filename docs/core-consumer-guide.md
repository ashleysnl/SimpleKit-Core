# SimpleKit Core Consumer Guide

## Purpose

`simplekit-core` provides the shared platform layer for SimpleKit repos:

- design tokens
- shared shell styles
- header / footer
- support CTA
- central tools registry
- related tools rendering
- page config pattern for static tool pages

Tool-specific business logic must stay in each tool repo.

## Consumer Assets

- `/simplekit-core.css`
- `/simplekit-core.js`
- `/simplekit-tools.js`
- `/core.css`
- `/core.js`
- `/dist/simplekit-core.css`
- `/dist/simplekit-core.js`
- `/dist/simplekit-tools.js`

## Page Config Pattern

Set `window.SimpleKitPage` before loading `core.js`.

```html
<script>
  window.SimpleKitPage = {
    pageType: "tool",
    activeNavHref: "./tools.html",
    toolId: "cpp",
    relatedTools: ["retirement", "rrsp-tfsa", "fire"],
    showSupportCta: true,
    showFloatingSupportButton: true,
    showRelatedTools: true,
    showFooterToolLinks: true,
    footerNote: "SimpleKit shell loaded from the shared core repo."
  };
</script>
<script type="module" src="./core.js"></script>
```

Supported config fields today:

- `pageType`
- `activeNavHref`
- `toolId`
- `featuredToolId`
- `relatedTools`
- `relatedToolIds`
- `showSupportCta`
- `showFloatingSupportButton`
- `showRelatedTools`
- `showFooter`
- `showFooterToolLinks`
- `showFooterLearnLinks`
- `showFooterSupportLinks`
- `supportTitle`
- `supportCopy`
- `supportPrimaryLabel`
- `supportSecondaryLabel`
- `footerNote`

## Required Mount Points

Add these placeholders where the shell should render:

```html
<div data-simplekit-header></div>
<div data-simplekit-related-tools></div>
<div data-simplekit-support></div>
<div data-simplekit-footer></div>
```

Optional registry-driven mounts:

```html
<div data-simplekit-featured-tool></div>
<div data-simplekit-tool-grid></div>
```

## Adding a Tool

Update `/src/platform/tools.js` with:

- `id`
- `name`
- `slug`
- `href`
- `aliases`
- `category`
- `timeToUse`
- `status`
- `description`
- `ctaLabel`
- `learnSlug`
- `learnHref`
- `relatedToolIds`

If the tool lives in another repo or on another domain, `href` should point directly to the external page URL.

## Hosting Strategy

For a static multi-repo setup:

1. Host this repo once as the canonical shared asset source, or vendor the public files into each consumer repo.
2. Prefer `/core.css` and `/core.js` as the canonical public endpoints.
3. Use absolute `href` values in the registry when cross-repo links should leave the current site.

Legacy compatibility paths remain available under `/dist/*` and the older `simplekit-core.*` names.

## What Stays Out of Core

Do not put these in `simplekit-core`:

- calculator formulas
- planner state models
- report generation
- charts tied to one tool
- retirement-specific assumptions
- tool-specific glossary content
