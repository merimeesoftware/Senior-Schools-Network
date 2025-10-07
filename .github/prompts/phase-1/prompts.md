---
mode: agent
phase: 1
applyGuardrailsFrom: .github/instructions/instructions.md
---

# Phase 1 Prompts (Planning & Content Gathering)

Read: `README.md`, `.github/technical.md`, `.github/roadmap.md`, `.github/current-phase.md`, `.github/instructions/instructions.md`.
Use only sources in `content/` (especially `content/texts/*`). Attribute quotes briefly.
Outputs must be Markdown files only. No app code.

## 1) Blueprint Generation
Task: Update `docs/site-blueprint.md` with:
- Information architecture, StoryBrand flows, quote/scripture waypoints (with source refs)
- Text wireframes for key pages
- Accessibility notes
Success Criteria:
- Cross-references to actual repo files (e.g., `content/texts/Thousand Good Books List.md`)
- No implementation details beyond Phase 1 scope

## 2) Excerpt Synthesis
Task: Populate `content/phase-1-excerpts.md` with 10–25 short excerpts sourced from:
- `content/texts/the-restoration-of-innocence.md`
- `content/texts/Mythopoeia.md`
- `content/texts/summa-1084-1088.md`
- `content/texts/Thousand Good Books List.md`
- Others in `content/texts/` as relevant
Format: For each excerpt, include:
- Source file
- Theme tags (e.g., wonder, stages, poetic-knowledge, scripture-tie)
- 1–3 sentence excerpt (or paraphrase when necessary) with inline attribution
Success Criteria:
- No fabricated quotes; all tied to repository texts
- Brevity and clarity; ready for later rendering

## 3) Book List Table Staging
Task: From `content/texts/Thousand Good Books List.md`, outline staged tables in `content/phase-1-excerpts.md` (or a dedicated `content/staged-book-lists.md` if preferred) with sections:
- Nursery (0–7), Gymnasium (7–13), Poetic/Youth (13–20), and Spiritual (All Ages)
Success Criteria:
- Use table format; keep lists short exemplar sets (5–10 per stage) for Phase 1
- Include a note pointing to the full list for Phase 2 rendering

## 4) Assets Inventory
Task: Update `docs/assets-inventory.md` with candidate images/media and sources.
Success Criteria:
- Each asset lists source/attribution and alt text proposal

## 5) Validation Pass
Task: Use `.github/prompts/phase-1/validation-prompts.md` to check alignment.
Deliverable:
- If issues found, add a short “Findings & Fixes” section at bottom of `docs/site-blueprint.md`.

## Definition of Done
- `docs/site-blueprint.md` updated and cross-referenced
- `content/phase-1-excerpts.md` populated with excerpts and staged book tables or a link to `content/staged-book-lists.md`
- `docs/assets-inventory.md` updated
- Validation completed and any findings addressed
