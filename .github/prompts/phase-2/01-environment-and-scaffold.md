---
title: Phase 2 Prompt 01 - Environment and Scaffold
---

## Purpose

Stand up the Phase 2 development environment and baseline Next.js + Tailwind scaffold that honors the north-star philosophy and prepares for Markdown-driven content.

## Required Context

- README.md (north star, StoryBrand flows, Catholic guardrails)
- docs/site-blueprint.md (IA, personas, core quotes)
- .github/docs/technical.md (stack, tooling, CI expectations)
- docs/visual site plan.md (visual system)
- .github/docs/current-phase.md (Phase 2 checklist and success metrics)

## Prompt Loop

For each section below, run the standard loop:

1. **Preflight**: Re-read guardrails, confirm system instructions, check for existing worktree changes. Validate Node.js >= 18 and npm availability.
2. **Implement**: Execute the task list, narrating each substantive step.
3. **Cleanup & Optimize**: Remove scaffolding or unused files, align formatting (Prettier), ensure code comments are sparse and meaningful.
4. **Validate**: Run appropriate commands/tests (e.g., `npm run lint` once configured) and note results.
5. **Document**: Summarize key decisions in PROJECT_NOTES.md (create if absent) without duplicating README content.

## Tasks

- Initialize a Next.js 14 (App Router) project in-place (no separate repo) configured for static export readiness.
- Configure Tailwind CSS per technical.md; include base layers that reflect the "enclosed garden" palette and typography stack (Playfair Display, Merriweather, Lato via next/font).
- Set up project structure for Markdown-driven content:
  - Create `content/` ingestion paths mirrored from existing markdown files.
  - Add helper utilities for loading markdown via `fs/promises` (static generation friendly).
- Establish global layout components (`app/layout.tsx`, `app/(site)/layout.tsx` if using route groups) with top-level navigation matching site-blueprint IA and footer space reserved for Scripture waypoints.
- Install and configure required tooling: ESLint (Next.js default), Prettier, TypeScript strict mode, react-markdown + remark plugins placeholder (actual rendering in later prompts).
- Add initial Tailwind config tokens for colors, fonts, spacing inspired by visual site plan; ensure design tokens are exported for reuse.

## Success Criteria

- Project builds locally (`npm run build`) and dev server launches without error.
- Tailwind styles available, fonts wired through next/font.
- Layout provides nav placeholders for Home, Philosophy & Resources, Schools Network, Home Application, Join/Found, Contact.
- No prescriptive copy beyond placeholders referencing upcoming content.
- Documentation updated (PROJECT_NOTES.md) capturing setup decisions, tool versions, and guardrail confirmations.

## Hand-off

Only proceed to Prompt 02 after confirming the Success Criteria and logging outstanding questions in PROJECT_NOTES.md.
