# SimpleKit V2 calculator style guide

System contract **1**, compatible theme **1.1**. Maintained common implementation: Core `v2/`; adoption and rollback: [shared theme](../v2-shared-theme.md). Edit shared primitives here, tool differences in their owning calculator source, and site composition/registry in `simplekit-site`. Do not copy a second maintained stylesheet or registry.

## Page and task hierarchy

Use shared header → actual breadcrumbs → compact title/one sentence → working inputs and primary results → assumptions/sources → related tools/guides → normal-flow shared footer/support. Keep fields within easy reach on mobile. Static educational panels can follow the task or use native `details`; financial controls and live outputs belong outside optional introductory disclosures.

Use an appropriate task layout: a simple comparison may show inputs beside results; dynamic rows, multi-scenario reports, guided steps, checklists and itinerary tabs keep their own workflow. At narrow widths show inputs then a readable primary answer. Never force every tool into a universal dashboard or giant homepage hero. Preserve the actual heading hierarchy, routes and meaningful introductory disclaimers.

## One shared visual source

Use `--v2-display` for headings and `--v2-body` for text/controls; reuse the locally licensed font files and `font-display: swap`. Core's wordmark/menu/footer renderer owns branding. Use navy/action/slate/surface/canvas/border tokens, existing spacing/gutters/radii/shadows and sprite icons. Do not hardcode the older starter palette, create another font stack, or add decorative gradients to working pages. Focus and error states retain explicit text and visible contrast.

Use `.v2c-hero` for a compact introduction, `.v2c-surface`/`.v2c-card` for discrete working areas, `.v2c-summary` for a primary result and `.v2c-context` for static optional context. Avoid repeated nested card padding. Tool-specific adapters may override layout deliberately without redefining the brand tokens. Decorative icons are hidden from assistive technology; icon-only actions need a name.

## Controls and results

Provide persistent labels, units, appropriate native controls and visible help/error relationships. Maintain at least 44px interactive targets, keyboard focus, native hidden import controls and associated checkbox/radio labels. Keep visible labels when condensing dynamic rows; long editable names may scroll within their field, not widen the page. Let charts/tables scroll or reflow locally with a text/data alternative, captions and headings. Preserve export formats and complete values; never clip the page to hide a defect.

Keep financial behavior source-owned: IDs, formulas, parser/locale rules, ranges, defaults, rounding, assumptions, saved data/version, import/export and analytics remain intact unless explicitly in scope. A visual edit is not permission to change them. Primary results should communicate units, assumptions and empty/error states. Use live announcements for consequential updates without repeatedly reading entire tables during typing.

## Shell and support

Opt in with `.sk-v2[data-v2-system="1"]`; calculator consumers also use their existing `data-v2-calculator` and family markers. Render header/footer/breadcrumbs from pinned `v2/components.mjs`, or adopt existing migrated markup through its narrow assembly adapter. Keep skip/main/nav IDs stable, selected navigation and exactly one header/footer. No-JS links remain available; mobile navigation is ordinary disclosure navigation.

Use locally assembled pinned assets. The portable site provides `/assets/core/v2/` and generated `/assets/v2/` compatibility aliases; standalone consumers must vendor/localize the same revision and font/sprite-relative paths. An unversioned `https://core.simplekit.app` stylesheet is not a V2 upgrade strategy. Never mount a second legacy Core shell. Keep support in normal flow/footer so it cannot cover inputs, results, menus or mobile safe areas. Save/export/menu controls are not support controls and must remain reachable.

## Verification and exceptions

During implementation inspect the diff, build one coherent batch and briefly inspect touched mobile/desktop task behavior. Record implemented-but-unverified work `[~]`. Full numerical/state/SEO/accessibility/browser/visual checks belong to the site's Phase 16 frozen candidate. Preserve required CI. Exceptions must record the owning source, reason, preserved behavior and deferred checks; they must not silently become the default starter. Production merge/deployment requires the reviewed release procedure and explicit authorization.
