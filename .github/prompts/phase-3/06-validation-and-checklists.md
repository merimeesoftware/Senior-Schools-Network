---
title: Phase 3 Prompt 06 - Validation and Checklists
---

## Purpose

Validate that Phase 3 deliverables are complete across imagery, accessibility, SEO, and content alignment.

## Required Context

- .github/docs/current-phase.md (checklists and success criteria)
- .github/docs/design-system.md (standards)
- Jest setup files (jest.config.js, jest.setup.ts)

## Prompt Loop

1. Preflight: Confirm prior prompts completed.
2. Implement: Run lints, typechecks, and tests; fix any regressions.
3. Validate: Use Lighthouse and manual QA against the checklists.
4. Document: Summarize results and open follow-ups for Phase 4.

## Tasks

- Run ESLint/TypeScript checks; target 0 errors.
- Run Jest tests; target 80%+ coverage where feasible.
- Lighthouse scan for Performance 90+, Accessibility 95+, SEO 90+.
- Manually verify hero images, galleries, and alt text across target pages.

## Success Criteria

- All Phase 3 checklist items at or above required thresholds.
- No blocking issues remain for deployment readiness.

## Hand-off

Create a short summary PR description and label as Phase 3 completion.
