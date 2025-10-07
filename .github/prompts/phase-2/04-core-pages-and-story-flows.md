---
title: Phase 2 Prompt 04 - Core Pages and StoryBrand Flows
---

## Purpose
Implement the primary site pages and narrative flows that guide users through school consideration, home application, and founding inspiration, leveraging the structured content layer.

## Required Context
- Successful completion of Prompts 01-03
- docs/site-blueprint.md (wireframes, flows)
- README.md (StoryBrand framing, philosophical tenets)
- docs/visual site plan.md (layout cues)
- .github/docs/current-phase.md (checklist targets)

## Prompt Loop
For each page/flow:
1. **Preflight**: Confirm required content helpers exist; revisit guardrails ensuring non-prescriptive tone and Catholic fidelity; review IA requirements.
2. **Implement**: Build the page following the wireframe; integrate reusable components and markdown-derived content.
3. **Cleanup & Optimize**: Ensure accessible semantics, remove unused code, keep comments minimal.
4. **Validate**: Manually QA flows in dev server; run linting/tests; verify static generation builds.
5. **Document**: Capture open content questions and success confirmations in PROJECT_NOTES.md.

## Tasks
- Create pages under `app/` for:
  - `/` Home (hero quote, three path CTAs, featured content snippets).
  - `/philosophy` (sections for Poetic Knowledge, Physical Discipline & Adventure, Poetic Foundations for Scientific Pursuit, Stages of Development; integrate quotes, scripture anchors).
  - `/schools` (directory placeholder with filters for gymnasium, high school boarding, etc.; populate mock data from markdown until real dataset available).
  - `/home-application` (resources for families; highlight Gymnasium Guide download placeholder).
  - `/join` or `/found` (encouragement copy, Founder's Toolkit download placeholder, reach-out CTA).
  - `/contact` (guidance text, no live form).
- Use content helpers to inject quotes, scripture, and book lists into relevant sections; ensure each flow references appropriate waypoints (e.g., Ephesians 6:4 on school flow, Proverbs 22:6 on home flow, Matthew 11:28 on founding flow).
- Implement CTA components with consistent styling and accessible labels; ensure CTAs point to existing or placeholder routes/downloads.
- Add metadata (SEO) per page with meaningful descriptions referencing poetic knowledge and gymnasium emphasis; avoid prescriptive claims.
- Ensure layout remains responsive and matches visual plan (hero imagery placeholders, section dividers, etc.).

## Success Criteria
- All primary routes render without runtime errors and pull data from markdown helpers.
- Flows clearly present hero -> guide -> plan -> action -> success narrative with scripture waypoints.
- Responsiveness verified on mobile/tablet/desktop; navigation between flows intuitive.
- PROJECT_NOTES.md updated with page overview, outstanding assets, and copy needs.

## Hand-off
Advance to Prompt 05 after validating flows and capturing any TODOs for interactive enhancements or content gaps.
