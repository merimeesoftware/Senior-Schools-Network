---
title: Phase 3 Prompt 02 - Hero Imagery and Alt Text Audit
---

## Purpose

Integrate hero images across key pages using the image manifest and conduct an accessibility-focused alt text audit.

## Required Context

- IMAGE-SYSTEM-SUMMARY.md (manifest summary, usage patterns)
- lib/assets.ts (image manifest and utilities)
- components/OptimizedImage.tsx
- app/(site)/**/page.tsx (Home, Philosophy, Schools, Home-Application, Join-Found, Contact)
- .github/docs/design-system.md (imagery guidelines)

## Prompt Loop

1. Preflight: Review imagery guidelines and alt text standards.
2. Implement: Add or refine hero images at top of each target page using getRandomAsset() with relevant filters (stage, category, tags).
3. Validate: Visually inspect layout; ensure LCP image uses priority and appropriate sizes.
4. Document: Capture what assets/filters each page uses.

## Tasks

- Add or confirm a top hero `OptimizedImage` on: Home, Philosophy, Schools, Home-Application, Join-Found, Contact.
- Use getRandomAsset() filters matching each page's theme (e.g., beauty/sacred-art for Contact; gymnasium/adventure for Schools).
- Ensure alt text is present via manifest; override only when context demands specificity.
- Mark hero images as priority where they are likely LCP; set sizes to responsive values.
- Remove any redundant or conflicting hero placements further down the page to avoid duplicate LCPs.

## Success Criteria

- Each target page loads with a single, context-appropriate hero image at the top.
- Alt text is descriptive and <= 100 characters.
- Lighthouse shows improved LCP where applicable.

## Hand-off

Proceed to Prompt 03 after verifying heroes render correctly and pass an accessibility scan.
