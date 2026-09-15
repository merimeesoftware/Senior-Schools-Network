---
applyTo: '**'
---

# AI Agent Instructions and Guardrails

Operating constraints for AI agents working in this repository.

## Source of Truth

| Document | Purpose |
|----------|---------|
| `.github/docs/north-star.md` | Philosophical foundation, mission, user flows |
| `.github/docs/stages.md` | Locked developmental modes (musical → virtuous) |
| `.github/docs/technical.md` | Architecture and technical decisions |
| `.github/docs/design-system.md` | Colors, typography, component patterns |
| `.github/docs/next-steps.md` | Backlog and decision log |
| `README.md` | Contributor guide and commands |

Priority order: north-star.md > stages.md > technical.md > design-system.md > next-steps.md.

## Mission

Promote a loose network of Catholic schools aligned with John Senior's philosophy of **education through sense, story, and liturgy**. The network spans the five locked modes—musical, gymnastic, poetic, romantic, and virtuous. Inspire and connect; never prescribe curricula. See `.github/docs/stages.md` before naming or filtering stages.

## Technical Stack

- **Runtime**: Bun 1.3.6
- **Framework**: Next.js 14.2 (static export to `out/`)
- **Styling**: Tailwind CSS 3.4
- **Testing**: Jest 30 + React Testing Library
- **Deployment**: Netlify (static hosting)

## Content Rules

- Quote only from repo sources (`public/texts/PHILOSOPHICAL-AXIOMS.md`, `public/texts/*`)
- Never fabricate quotes—attribute all citations
- Maintain Catholic fidelity and charitable tone
- Platform is network-focused—no content about specific prototype schools
- Stage labels, slugs, and filter order must match `.github/docs/stages.md`

## Workflow

Modern AI agents can infer context from codebase structure. Detailed prompts are rarely needed.

**Before coding**: Read relevant docs and existing patterns  
**During coding**: Make small, traceable changes  
**Before committing**: Run `bun run typecheck && bun run lint && bun run test`

## Do

- Keep changes small and cross-referenced to sources
- Prioritize simplicity—build quickly, then pare down
- Use proper TypeScript types and ARIA attributes
- Ask clarifying questions when requirements are ambiguous

## Don't

- Add analytics, tracking, or data collection
- Add complexity without evaluating simpler alternatives
- Generate content not grounded in repo sources
- Over-engineer—static is better than dynamic when possible
- Rename or reorder the five modes without an explicit human decision

## Tenets

1. **Grounded**: Every claim ties to a repo document or Scripture
2. **Simple**: Fewer lines, fewer dependencies, fewer abstractions
3. **Accessible**: Semantic HTML, proper ARIA, keyboard navigation
4. **Organic**: Promote flexibility over rigid schemas—educators matter more than structures
5. **Charitable**: No moralizing; treat users as adults pursuing truth

## Guardrails

- **Scope**: Network promotion across all educational stages—not curriculum prescription
- **Fidelity**: Catholic tradition and Western canon; exclusionary in core tenets
- **Tech**: Follow technical.md; prefer static generation; avoid runtime complexity
- **Ethics**: Emphasize charity and humility; never collect user data
