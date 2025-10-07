---
title: Phase 2 Prompt 02 - Design System and Layout Components
---

## Purpose

Translate the visual site plan into reusable Tailwind-driven components and layouts that embody the "enclosed garden" aesthetic while maintaining accessibility.

## Required Context

- Outputs from Prompt 01 (project scaffold, PROJECT_NOTES.md)
- docs/visual site plan.md (palette, typography, imagery guidance)
- docs/site-blueprint.md (wireframes, navigation priorities)
- README.md (StoryBrand emphasis, Catholic guardrails)
- .github/docs/technical.md (component guidance, accessibility goals)

## Prompt Loop

Apply the same loop for each work segment:

1. **Preflight**: Confirm success criteria from Prompt 01 met; revisit guardrails; inspect git status for unexpected changes.
2. **Implement**: Build components iteratively, keeping comments minimal and meaningful only where clarity is needed.
3. **Cleanup & Optimize**: Remove dead code, ensure Tailwind classes are purposeful, run Prettier.
4. **Validate**: Use Storybook if available (optional) or render via Next.js dev server; run linting.
5. **Document**: Update PROJECT_NOTES.md with component inventory and design decisions.

## Tasks

- Configure Tailwind theme extensions for:
  - Primary/secondary color tokens (parchment, forest, gold, stage-specific accents).
  - Typography scales using Tailwind `fontFamily`, `fontSize`, and `lineHeight` aligned with Playfair Display, Merriweather, and Lato.
  - Box shadows, border radius, and spacing consistent with visual plan.
- Create base UI components under `components/`:
  - `BrandHeader` with logo placeholder, navigation, and CTA slots.
  - `Footer` featuring Scripture waypoint placeholder and contact CTA.
  - `QuoteCard`, `CTAButton`, `SectionHeading`, `ContentContainer`.
  - Stage-tag badges (nursery, gymnasium, poetic, spiritual) to reuse across pages.
- Implement a responsive layout system:
  - Global max-width containers, balanced whitespace per visual plan.
  - Mobile-first navigation with accessible toggle (no JavaScript heavy frameworks).
- Ensure accessibility:
  - Semantic HTML within components.
  - Keyboard navigation for menus; ARIA attributes as needed.
- Provide sample content placeholders referencing upcoming Markdown integration without hardcoding final copy (e.g., TODO markers that reference source markdown filenames).

## Success Criteria

- Tailwind theme accurately reflects palette and typography; inspect via dev server to confirm.
- Components render cleanly on mobile and desktop, matching IA structure.
- Navigation supports StoryBrand flows with clear CTA placeholders.
- Accessibility checks: keyboard focus visible, nav toggles ARIA labeled.
- PROJECT_NOTES.md documents design tokens, component purpose, and any open questions.

## Hand-off

Only progress to Prompt 03 after confirming design system stability and capturing any asset needs (e.g., imagery sources) in PROJECT_NOTES.md.
