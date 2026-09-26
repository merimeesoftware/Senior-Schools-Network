---
applyTo: '**'
---

# AI Agent Instructions and Guardrails

Operating constraints for AI agents working in this repository.

## Source of Truth

Read root `DOC_INDEX.md`. Load order:

1. `PRODUCT.global.md` then `PRODUCT.md`
2. `DESIGN.global.md` then `DESIGN.md`
3. `ARCHITECTURE.md` and `TECH_STACK.md`

Words → `PRODUCT.md`. Look → `DESIGN.md`. Runtime → `TECH_STACK.md`.

The old `.github/docs/` stubs are removed. Canon lives only in the root files above.

## Mission

Promote a loose network of Catholic schools aligned with John Senior's philosophy of **education through sense, story, and liturgy**. The network spans the five locked modes—musical, gymnastic, poetic, romantic, and virtuous. Inspire and connect; never prescribe curricula. Mode names, order, and public lines: `PRODUCT.md`.

## Technical Stack

- **Runtime**: Bun 1.3.6
- **Framework**: Next.js 14.2 (static export to `out/`)
- **Styling**: Tailwind CSS 3.4
- **Testing**: Jest 30 + React Testing Library
- **Deployment**: Cloudflare Workers + Static Assets (`wrangler.jsonc`). CI/CD is Workers Builds only: `main` runs `bun run build` then `npx wrangler deploy`; other branches run `bun run build` then `npx wrangler preview`. Optional local scripts, after `bun run build`: `deploy:cloudflare`, `preview:cloudflare`. `netlify.toml` stays until post-cutover cleanup. Canonical origin: `https://seniorschools.org` (`lib/site.ts`).

## Content Rules

- Quote only from repo sources (`public/texts/PHILOSOPHICAL-AXIOMS.md`, `public/texts/*`)
- Never fabricate quotes—attribute all citations
- Maintain Catholic fidelity and charitable tone
- Platform is network-focused—no content about specific prototype schools
- Stage labels, slugs, and filter order must match `PRODUCT.md` (musical, gymnastic, poetic, romantic, virtuous)

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
- Add GitHub Actions workflows, or repository secrets `CLOUDFLARE_API_TOKEN` / `CLOUDFLARE_ACCOUNT_ID`. CI/CD is Workers Builds (`docs/deploy-cloudflare.md`)
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
- **Tech**: Follow `ARCHITECTURE.md` and `TECH_STACK.md`; prefer static generation; avoid runtime complexity
- **Ethics**: Emphasize charity and humility; never collect user data
