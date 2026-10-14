# Maintained SimpleKit V2 authoring contract

Core owns the shared V2 style/markup contract and the following reusable authoring sources. The original local App Factory repository and Mac-only prompt paths were unavailable during Phase 15D; these are the maintained V2 counterparts, not edits to that external generator. Calculator-local specs still own financial behavior.

- [Calculator style guide](calculator-style-guide.md)
- [Master Codex build prompt](master-codex-build-prompt.md)
- [Spec template](calculator-spec.template.yaml)
- [Starter integration](../../starter/v2/README.md) and [authored HTML template](../../starter/v2/index.template.html)
- [Shared theme and upgrade contract](../v2-shared-theme.md)

Read the site's current `docs/SIMPLEKIT_V2_REDESIGN_PLAN.md` and AGENTS.md. Work on synchronized `develop-v2` in each owning repository; preserve unrelated work and production. Authoring documentation can advance independently of the site's immutable runtime pin. Never resolve production assets from branch HEAD: render/vendor shared components and assets from the deliberately adopted full Core SHA in `simplekit-site/data/calculator-sources.json`.

Existing calculator migrations are the starting point. CPP and Budget are compact simple/complex references; Retirement/Mortgage remain existing pilots. Use the actual authored sources and current handoffs rather than historical screenshots as proof of acceptance. The homepage's coastal imagery, search and discovery are not calculator components.

For V2 these documents supersede legacy copied guidance that mandates a large gradient hero, mutable CDN shell injection or one fixed two-column layout. Historical local spec fields, financial assumptions and release gates remain binding. Add future generator support in its owning source if that repository becomes available; don't patch rendered prompts and assume the external generator is fixed.
