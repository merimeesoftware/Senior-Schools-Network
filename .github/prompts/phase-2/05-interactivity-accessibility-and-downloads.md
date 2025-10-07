---
title: Phase 2 Prompt 05 - Interactivity, Accessibility, and Download Prep
---

## Purpose

Enhance the prototype with gentle interactivity, ensure accessibility conformance, and prepare downloadable resources placeholders without violating non-prescriptive ethos.

## Required Context

- Outputs from Prompts 01-04
- docs/visual site plan.md (interaction guidance)
- docs/site-blueprint.md (CTAs, guides, toolkit expectations)
- .github/docs/current-phase.md (accessibility and checklist requirements)
- README.md (guardrails on tone and spiritual alignment)

## Prompt Loop

Apply the loop per feature:

1. **Preflight**: Audit existing components for compliance; note any accessibility issues from prior prompts; confirm file paths for downloads.
2. **Implement**: Add interactive elements carefully, prioritizing keyboard and screen reader support.
3. **Cleanup & Optimize**: Remove redundant state, ensure ARIA labels and focus states; keep comments succinct.
4. **Validate**: Run automated accessibility linting (axe or eslint-plugin-jsx-a11y), manual keyboard QA, and regression tests.
5. **Document**: Log enhancements and any remaining accessibility TODOs in PROJECT_NOTES.md.

## Tasks

- Implement collapsible sections (e.g., accordions) for long excerpts or FAQs using headless components with ARIA-compliant semantics.
- Add filter UI to `/schools` page:
  - Allow filtering by stage focus (gymnasium, high school boarding, etc.).
  - Respect non-prescriptive tone (filters as discovery aids, not rigid categories).
- Prepare download stubs for "Gymnasium Guide for Families" and "Founder's Toolkit":
  - Create markdown/pdf placeholders under `public/downloads/` or `content/downloads/` with disclaimers that guides are inspirational.
  - Ensure CTA buttons trigger downloads without collecting user data.
- Add gentle motion/hover states aligning with visual plan (muted transitions, no flashy animations).
- Implement scripture waypoint carousel or rotator in footer (optional) with accessible controls and ability to pause/stop animation.
- Improve SEO and social metadata where needed (Open Graph images placeholders referencing enclosed garden imagery).

## Success Criteria

- Interactive elements pass keyboard-only navigation and screen reader checks.
- Filters update page content without full reloads, preserving accessibility (announce results counts via ARIA live region if feasible).
- Download links functional, pointing to placeholder resources with clear context.
- Transition effects subtle and consistent with aesthetic.
- PROJECT_NOTES.md updated with accessibility validation steps and future improvements.

## Hand-off

Move to Prompt 06 after confirming all interactive features behave as intended and accessibility documentation is current.
