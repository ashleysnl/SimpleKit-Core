# SimpleKit Core V2 development

- Work on `develop-v2`; synchronize it before new source-owned V2 tasks. Keep `main` and production unchanged until separately authorized release.
- Keep legacy Core assets stable. V2 assets are explicitly opted in and bundled by the portable SimpleKit site build; do not deploy them to the production CDN during development.
- Follow the SimpleKit V2 project plan in `ashleysnl/simplekit-site`. During implementation inspect source changes and build each coherent batch; defer comprehensive financial, accessibility, SEO and browser regression checks to its Phase 16 checkpoint.
- Preserve calculator state, formulas, URLs, analytics and exports. Presentation helpers must not read or write financial inputs or persistence.
- For future V2 tools and shared authoring changes, read `docs/v2-authoring/README.md`, its maintained style guide/master prompt/spec, and `starter/v2/README.md`. These are the cloud-accessible V2 counterparts to unavailable legacy Factory paths. Existing local financial specs remain authoritative; do not regenerate completed tools from the starter.
