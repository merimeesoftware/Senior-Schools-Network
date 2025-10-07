# Phase 2: Core Development

## Overview

This phase shifts focus from planning to prototyping the Senior Schools Network digital platform, building incrementally on Phase 1 deliverables. We will implement a minimal viable prototype using Next.js and Tailwind CSS, rendering synthesized content (e.g., Markdown excerpts on poetic knowledge, gymnasium restoration, and poetic-scientific foundations) into basic pages. Emphasis remains on evoking wonder through sensory-integrated, narrative-driven design, aligned with John Senior's philosophy—intuitive apprehension rooted in wonder, physical adventure, and spiritual formation. All elements promote organic discovery, fostering loose affiliations without rigid schemas or prescriptive mandates.

**This phase draws from core texts like _Rerum Novarum_ for humane economic bases in founding paths, Aquinas's _Summa_ for sensory ascent in resource rendering, and Chesterton's _Outline of Sanity_ for distributist principles against mechanization, ensuring continuity with sacred and historical traditions.**

The goal is to create a local demo that positions users as "heroes" in StoryBrand flows, guided by Senior's vision toward restoration of innocence. Prototype pages will incorporate quotes for immersion and Scripture anchors for reflection, emphasizing gymnasium emphasis (e.g., adventure modules) and non-prescriptive tools (e.g., downloadable guides). Development mirrors poetic flexibility: iterative, educator-focused, with tech amplifying repose and wonder.

Expected Outcomes:

- A functional Next.js prototype with core pages and rendered content.
- Implemented user flows with basic interactivity (e.g., collapsible excerpts via ARIA).
- CI/CD setup for automated checks (e.g., linting, quality scans).
- Updated repository with code, ready for Phase 3 refinements.

## Content Synthesis

Building on Phase 1, refine and integrate uploaded content for prototype rendering:

- **Key Themes Extracted** (Adapted for Implementation):
  - Poetic Knowledge: Render Taylor's synthesis (from excerpts.md) as interactive cards; **echoed in Tolkien's _Mythopoeia_ as sub-creative wonder, fostering imagination as fertile soil for wisdom (cf. excerpts.md).**
  - Wonder and Restoration: Embed quotes in page headers; **as in Boethius's _Consolation_, where repose amid change restores innocence (Book II: 'Earth we grasp with the earthly').**
  - Physical Discipline and Adventure: Prototype gymnasium sections with adventure-focused lists (e.g., from Thousand Good Books List.md: Robin Hood, Treasure Island); **inspired by _The Ballad of the White Horse_ for epic resilience, blending risk with stories (e.g., Alfred's quest as gymnasium model).**
  - Poetic Foundations for Scientific Pursuit: Modular excerpts countering fragmentation; **per Chesterton (_Outline_, Ch. IV: machinery's 'wheel of fate' disrupts natural order).**
  - Stages of Development: Tables rendered via react-markdown, with gymnasium adventure emphasis.

- **Sacred Ties**: Integrate papal teachings from _Rerum Novarum_ (¶23: family as educational base) with Scripture (e.g., Proverbs 22:6) to frame stages as spiritual acts in flows.

## Checklist

### Philosophical Alignment (90%+ Required)

- [ ] **Wonder as First Principle**: Every prototyped page begins with a quote or narrative evoking sensory wonder (e.g., from Hugh of St. Victor or Tolkien's _Mythopoeia_).
- [ ] **Gymnasium Emphasis**: Pages highlight physical discipline/adventure for boys (ages 7-13), with "warrior poets" theme from _The Restoration of Innocence_ and _The Ballad of the White Horse_.
- [ ] **Poetic-Scientific Integration**: Resources tie poetic mode to scientific foundations (e.g., "fertile soil" from Taylor, countering mechanization per Chesterton).
- [ ] **Non-Prescriptive Ethos**: All guides/toolkit rendered as inspirational, educator-driven (no mandates).
- [ ] **Catholic Fidelity**: Content grounded in faith (e.g., liturgical rhythm, Scripture anchors like Ephesians 6:4).
- [ ] **Three-Path System**: Flows for school consideration, personal/family application, founding inspiration prototyped with narrative progression.
- [ ] **Spiritual Formation Links**: StoryBrand elements connect to moral/spiritual aims (e.g., Plan → stages with gymnasium emphasis; Success → restoration of innocence).
- [ ] **Integration of all core resources (e.g., Chesterton for distributism in founding paths).**

### Technical Alignment (90%+ Required)

- [ ] **Frontend Implementation**: Next.js pages with Tailwind styling; react-markdown for excerpts (per technical.md).
- [ ] **Accessibility Prep**: ARIA labels for interactives (e.g., collapsible sections); WCAG compliance in layouts.
- [ ] **Derivation from technical.md**: Hybrid static/SSR for SEO; mobile-first responsiveness.
- [ ] **Scalability Notes**: Components reusable for future API (e.g., school submissions).

### StoryBrand/User Flows Alignment (90%+ Required)

- [ ] **Hero-Guide Framework**: Users as heroes facing problems (e.g., gymnasium gap); Senior's philosophy as guide.
- [ ] **Clear Plans and CTAs**: Flows include steps, actions (e.g., "Download Guide"), avoids failure, ends in success.
- [ ] **Narrative Immersion**: Flows use quotes/Scripture as "waypoints" to guide users. Enhanced emphasis on gymnasium restoration and poetic foundations addresses gaps while maintaining non-prescriptive ethos.

### Content Readiness (85%+ Required)

- [ ] **Excerpts Synthesized**: Passages organized and rendered under philosophy pages; tagged by theme.
- [ ] **Book Lists Prepared**: Tables by stage (e.g., gymnasium adventures from Thousand Good Books List.md).
- [ ] **Scripture Ties Identified**: Verses mapped to pages/flows (e.g., Ephesians 6:4).
- [ ] **Assets Inventoried**: Integrate from docs/assets-inventory.md (e.g., Pre-Raphaelite images per visual site plan.md).
- [ ] **Wireframes Documented**: Phase 1 wireframes implemented as prototypes.
- [ ] **Guides Outlined**: "Gymnasium Guide" and "Founder's Toolkit" as non-prescriptive downloads.
- [ ] **Excerpts include cross-references to literary/philosophical texts (e.g., Boethius for repose themes).**

### Guardrails & Instructions Compliance

- [ ] **Instructions.md Adherence**: Boundaries respected (no fabricated quotes; Catholic fidelity; no prototype school content).
- [ ] **Ethical Focus**: Charitable, non-partisan tone; no moralizing. Treats users as adults pursuing truth.
- [ ] **Privacy/Security**: No data collection; forms non-interactive.
- [ ] **Tenets Embedded**: Formal tone, content grounding, organic focus maintained.

### Execution Readiness

- [ ] **Clear Deliverables**: Prototype code, rendered pages, CI/CD workflows.
- [ ] **Timeline Feasibility**: Week 1-2 (Days 4-7) realistic for part-time; reviews for fidelity.
- [ ] **Iteration Plan**: Validation prompts ready; refinements via PRs.
- [ ] **Team Alignment**: Collaborators understand hierarchy (README.md > technical.md > roadmap.md > current-phase.md).

### Pass/Fail Criteria

- **Pass**: ≥90% in Philosophical, Technical, StoryBrand; ≥85% in Content; 100% in Guardrails.
- **Fail**: If critical gap (e.g., prescriptive tone), address before proceeding.

### Review Process

1. Run checklist after prototyping.
2. Cross-reference against README.md, instructions.md, technical.md.
3. Identify gaps; iterate on code/docs.
4. Re-run; pass = ready for Phase 3.

This ensures Phase 2 outputs amplify wonder through prototyped content, aligned with the north star.

---

This prototype sets a poetic, faith-grounded foundation for refinement.
