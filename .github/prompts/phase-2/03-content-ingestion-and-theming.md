---
title: Phase 2 Prompt 03 - Content Ingestion and Theming
---

## Purpose

Wire Markdown content into the Next.js app so pages can render philosophical excerpts, book lists, and Scripture anchors while preserving non-prescriptive tone.

## Required Context

- Prior prompt outputs (scaffold + design system)
- content/phase-1-excerpts.md and content/texts/\*
- docs/site-blueprint.md (section mapping)
- README.md (key concepts, three user flows)
- .github/docs/current-phase.md (checklist targets)

## Prompt Loop

Repeat for each major section:

1. **Preflight**: Verify design components are available; confirm markdown files remain source of truth; reread guardrails against prescriptive copy.
2. **Implement**: Build utilities and data loaders; map content to thematic groupings.
3. **Cleanup & Optimize**: Remove unused imports, ensure lazy loading where appropriate, memoize heavy transforms.
4. **Validate**: Run `npm run build` (if fast) or targeted tests to ensure static generation succeeds; manually QA key pages in dev server.
5. **Document**: Note data structures and mapping logic in PROJECT_NOTES.md.

## Tasks

- Create a `lib/content` module to:
  - Read Markdown from `content/` folders at build time using `fs/promises`.
  - Parse frontmatter (gray-matter) for metadata (e.g., category, stage, scripture references).
  - Export typed helper functions: `getExcerptsByTheme`, `getBookListsByStage`, `getScriptureWaypoints`, `getQuotesBySource`.
- Normalize content into structured TypeScript interfaces (e.g., `Excerpt`, `BookListEntry`, `StageTag`). Ensure types align with README definitions and site blueprint.
- Introduce theme tagging to mark each piece with `primaryFlow` (school, home, founding) and `stage` (nursery, gymnasium, poetic, spiritual).
- Prepare placeholder asset references for imagery (e.g., mapping to docs/assets-inventory.md entries) without embedding images yet.
- Implement caching or memoization in data layer to avoid redundant file reads during dev.
- Add unit tests (Jest) for content helpers to confirm markdown parsing yields expected structures; include coverage for missing metadata handling.

## Success Criteria

- Data helpers return structured, typed content ready for rendering in App Router `generateStaticParams` or `generateMetadata` functions.
- Markdown content loads without runtime errors; builds succeed using static export.
- Tests added for data layer pass under `npm test`.
- PROJECT_NOTES.md updated with data schema descriptions and any assumptions.

## Hand-off

Proceed to Prompt 04 once content utilities are validated and documentation captures any markdown gaps requiring curation.
