# Shared V2 theme — System v1 compatible amendment 1.1

Core `v2/` is the maintained source for common tokens, licensed fonts, shared sprite, shell CSS/navigation and pure shell markup. The current authored homepage in `simplekit-site` and its 686bceb8 isolated demo supplied the visual authority for this amendment. Homepage imagery, search, questions, goal/featured/guide composition and guided discovery remain site-owned.

## Public contract and adoption

- Keep `.sk-v2[data-v2-system="1"]`. The new optional `data-v2-theme="1.1"` on the header/footer selects the compact wordmark/menu and footer treatment. Existing class names, nav IDs, current-page semantics and skip/main targets remain supported.
- `v2/components.mjs` exports the existing shellHeader/shellFooter/breadcrumb/related/escaping helpers, plus `alignSharedShell(html)`. It has no dependencies on financial logic, DOM state, persistence, analytics or a tool registry.
- The portable site imports this module from its existing immutable Core cache. It renders site templates with the same helpers and applies the narrow shell adapter to already migrated upstream HTML. That adapter replaces only an existing V1 header/footer; it preserves the document head, substantive body, skip link, nav ID and selected nav destination. No generated/cache file is an authoring location.
- The default sprite URL is the portable `/assets/core/v2/icons/sprite.svg` alias. Standalone builds must vendor/localize the same pinned assets, or supply their own documented assembly alias; updating a live unversioned CDN is not this adoption path.
- The common primary-action radius is a token. Calculator-specific form/result layouts and compact introductions remain in existing calculator adapters and calculator/pilot primitives. No coastal hero is added to tools or articles.
- Marked V2 footers contain the ordinary support destination. Known legacy floating support/banner mounts are suppressed only when that footer exists. Saved-plan/export controls are untouched. Existing unmarked legacy Core consumers retain original core.css/core.js and support behavior.
- Navigation enhancement is idempotent, preserves visible links with JS disabled, and closes on Escape, outside pointer, selection and focus leaving the header. Theme 1.1 uses the homepage's 900px desktop navigation threshold; older unmarked V1 shells retain 768px.

## Upgrade and version rules

Change common theme values/components here on Core develop-v2. Publish a reviewed immutable commit, then deliberately update the site's existing calculator-sources pin and adoption record. The site generates its compatibility `/assets/v2` fonts/sprite/styles from that same pin rather than maintaining divergent shell implementations. Do not add another registry or remote mutable theme dependency.

This is an additive V1 amendment: prior token meanings, component class contracts and financial behavior are retained. Breaking/removing a token/class, changing required markup/API or incompatible behavior requires a new contract version and explicit consumer migration. An appearance change within the compatible contract still invalidates affected visual evidence and requires release QA.

Rollback: restore the previous Core pin and the associated site adapter/template changes through a normal revert; rebuild the portable artifact. Previous pin is f3bc12213c5b91698ddc64953faa6c4a9ef15e61. No cache editing, force-push, state deletion or production/CDN deployment. Final numerical/state/cross-browser/SEO/accessibility acceptance belongs to Phase 16.
