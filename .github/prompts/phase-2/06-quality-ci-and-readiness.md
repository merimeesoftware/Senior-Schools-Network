---
title: Phase 2 Prompt 06 - Quality, CI/CD, and Readiness Review
---

## Purpose

Finalize Phase 2 by establishing automated quality gates, executing comprehensive testing, and reviewing readiness against the current-phase checklist.

## Required Context

- Outputs from Prompts 01-05
- .github/docs/technical.md (CI/CD workflow expectations)
- .github/docs/current-phase.md (checklist and pass criteria)
- README.md (guardrails and narrative alignment)
- docs/roadmap.md (Phase 2 deliverables)

## Prompt Loop

For each quality dimension:

1. **Preflight**: Review outstanding TODOs in PROJECT_NOTES.md; confirm no unexpected repo changes.
2. **Implement**: Configure workflows and tests incrementally.
3. **Cleanup & Optimize**: Remove redundant scripts, ensure package.json scripts are concise, avoid duplicating configuration.
4. **Validate**: Run automated pipelines locally where feasible; capture results.
5. **Document**: Update PROJECT_NOTES.md and/or a dedicated CHECKLIST.md with status against current-phase requirements.

## Tasks

- Expand test coverage:
  - Component tests for key UI pieces (QuoteCard, CTAButton, navigation) ensuring rendering and accessibility states.
  - Integration tests for page flows (e.g., using @testing-library/react) verifying StoryBrand sections appear with correct scripture anchors.
- Configure linting and formatting scripts in package.json (`lint`, `format`, `test`, `typecheck`, `build`).
- Add GitHub Actions workflow `.github/workflows/ci.yml` implementing lint, test, build, Semgrep security scan, and (optional) Trivy dependency scan per technical.md.
- Ensure workflow caches dependencies and fails on any warnings that violate guardrails (e.g., missing scripture anchor for required sections).
- Run full local validation suite (`npm run lint`, `npm test`, `npm run build`) and record outcomes.
- Perform content alignment review against the checklist in current-phase.md, marking completion status.
- Update PROJECT_NOTES.md with summary of readiness, outstanding risks, and recommendations for Phase 3.

## Success Criteria

- CI workflow committed and passing locally (or with documented setup steps if remote validation required).
- Automated tests cover core flows and content helpers with acceptable coverage levels.
- Linting, formatting, and build commands succeed without warnings.
- Checklist review demonstrates ≥90% compliance for Philosophical, Technical, StoryBrand categories; ≥85% for Content; 100% guardrail adherence.
- PROJECT_NOTES.md (and optional CHECKLIST.md) clearly communicate remaining gaps and next steps.

## Completion Signal

Declare Phase 2 prompt series complete only after documenting results and ensuring repo state is clean or staged per team conventions.
