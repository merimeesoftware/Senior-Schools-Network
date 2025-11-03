---
title: Phase 3 Prompt 04 - Accessibility and Contrast Checks
---

## Purpose

Ensure imagery and UI meet accessibility standards, including color contrast and keyboard/screen reader support.

## Required Context

- .github/docs/design-system.md (accessibility standards)
- app/globals.css (utility classes)
- components/* (CTAButton, Accordion, Navigation, ScriptureCarousel)

## Prompt Loop

1. Preflight: Review WCAG 2.1 AA requirements and the project's accessibility checklist.
2. Implement: Address focus visibility, ARIA labeling, and prefers-reduced-motion for imagery transitions.
3. Validate: Run an accessibility scan (axe), and manual keyboard-only navigation across key pages.
4. Document: Note fixes and remaining findings.

## Tasks

- Verify hero images and galleries have appropriate alt text and do not convey essential information solely via imagery.
- Ensure focus rings are visible and consistent on interactive elements over imagery.
- Add skip-to-content link and verify it works across all pages.
- Confirm color contrast of text over hero images meets AA; add overlays when necessary.
- Respect prefers-reduced-motion for any transitions or carousels.

## Success Criteria

- Lighthouse Accessibility: 95+ score.
- Zero critical axe violations related to images and navigation.

## Hand-off

Proceed to Prompt 05 after accessibility issues are resolved.
