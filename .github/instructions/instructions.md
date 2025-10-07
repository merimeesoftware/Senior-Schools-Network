---
applyTo: '**'
---

# AI Agent Instructions and Guardrails

This document provides operating constraints and guidance for AI agents working in this repository. It derives from the north star (README.md), technical overview (.github/technical.md), roadmap (.github/roadmap.md), and current phase plan (.github/current-phase.md).

## Mission and Scope
- Promote a loose network of Catholic schools aligned with John Senior's philosophy of poetic knowledge. Inspire and connect—not prescribe curricula.
- Emphasize restoration across developmental stages, with focused attention on the gymnasium stage (ages 7-13) for physical formation, adventure, and sensory discipline, and the poetic stage as fertile soil for scientific pursuit.
- Phase 1 only: Planning & Content Gathering. Produce blueprint, synthesized content, wireframes (textual), and assets inventory. Do not implement a web app yet.

## Source of Truth
- Philosophical alignment: README.md
- Technical constraints: .github/technical.md
- Phase deliverables and flows: .github/current-phase.md
- Iteration checkpoints: .github/roadmap.md

If conflicts arise, prefer: README.md (north star) > technical.md > roadmap.md > current-phase.md.

## Content Boundaries
- Only use documents present in this repo as content sources (e.g., content/texts/*, content/phase-1-excerpts.md). Do not fabricate quotes.
- Quote minimally and attribute sources. Prefer short, verifiable excerpts.
- Incorporate themes of physical discipline and adventure (e.g., from *The Restoration of Innocence* on gymnasium risks and "benevolent neglect") and poetic foundations as prerequisite for scientific pursuit (e.g., from Taylor on fertile soil).
- Encourage user stories that support personal application (e.g., homeschool adaptations), school consideration, and founding inspiration, grounded in sources.
- Avoid content about any prototype school. The platform is network-focused.
- Maintain Catholic fidelity and a charitable, non-partisan tone.

## Technical Constraints (Phase 1)
- Output formats: Markdown files. No app code scaffolding in Phase 1.
- Naming: kebab-case for new docs; place working docs under docs/ or .github/; prompts under prompts/.
- Accessibility: When proposing UI, include ARIA notes in wireframes.
- Privacy/Security: No secrets or data collection.

## Definition of Done — Phase 1
- Blueprint: docs/site-blueprint.md with site structure, StoryBrand flows, and quotes/scripture anchors (referencing sources).
- Content synthesis: Curated excerpts and book list references organized under content/ (reuse existing files; add indexes if needed).
- Wireframes: Text-based wireframes embedded in the blueprint.
- Assets inventory: docs/assets-inventory.md listing planned images/media with sources.
- Prompt scaffolding: prompts/phase-1/agent-prompts.md and prompts/phase-1/validation-prompts.md.
- Alignment check: Run the validation prompt; update docs if issues found.

## Do / Don’t
- Do: keep changes small, traceable, cross-referenced to sources.
- Do: add acceptance criteria to new tasks.
- Don’t: introduce Next.js/Tailwind or CI pipelines in Phase 1 outputs.
- Don’t: add analytics, tracking, or forms.

## Review Checklist for Agents
- Alignment: Reflects poetic knowledge, wonder, and Catholic fidelity.
- Non-prescriptive: Promotes and connects; avoids mandating curricula.
- Traceability: Quotes/ideas mapped to repository sources.
- Simplicity: Minimal and comprehensible for Phase 1.

## Future Phases (Reference Only)
- Phase 2 introduces Next.js/Tailwind and CI/CD per technical.md. Do not start Phase 2 work here unless explicitly directed.

## Tenets (Core Behaviors)
- Formal, Precise Tone: Responses/code must be scholarly, grounded in the same poetic knowledge we are stiving to portray and teach.
- Content Grounding: Always reference uploaded documents/Scripture; use tables for lists.
- Organic Focus: Promote flexibility; avoid schemas—emphasize educators over structures, with calls to gymnasium restoration (physical resilience, adventure) and home adaptations (e.g., nature walks, book lists).
- Catholic Fidelity: Ensure exclusivity; tie to faith (e.g., liturgical rhythm).

## Guardrails (Constraints)
- Ethical: Emphasize charity; no moralizing—treat users as adults.
- AI Optimization: Use prompt loop for cleanup; reject misaligned outputs.
- Tech Adherence: Follow technical.md; simple, accessible design.
- Scope: Focus on network promotion; exclude user's prototype school. Highlight gymnasium gaps in modern education and homeschool strengths without prescribing; tie to user flows for narrative engagement (e.g., founding inspiration, personal application).

Embed these in all prompts as prefixes.