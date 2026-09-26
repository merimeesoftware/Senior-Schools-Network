# Doc index — Senior Schools Network

One job per file. Do not duplicate.

## Agents read, in this order

1. `PRODUCT.global.md` then `PRODUCT.md`
2. `DESIGN.global.md` then `DESIGN.md`
3. `ARCHITECTURE.md` and `TECH_STACK.md`
4. This file, when a path is unclear
5. Collections: `public/texts/*`, then `docs/deploy-cloudflare.md` if the task is cutover

There is no `CORE.md` in this repo.

## Owns what

| File | Owns |
|------|------|
| `PRODUCT.global.md` | House StoryBrand shape and voice law. Not a hero |
| `PRODUCT.md` | SSN one-liner, heroes, plan, CTA, five modes, philosophy, locked lines, voice |
| `DESIGN.global.md` | House look philosophies. Not a palette |
| `DESIGN.md` | This site’s world, rooms, type, color, motion, components, imagery |
| `ARCHITECTURE.md` | Layers and constraints |
| `TECH_STACK.md` | Language, deploy, CI, runtime gaps |
| `DOC_INDEX.md` | Load order, ownership, leftovers |

## Conflict rule

Words → `PRODUCT.md`. Look → `DESIGN.md`. Runtime → `TECH_STACK.md`.

Layers and constraints → `ARCHITECTURE.md`. If a layer note and a command or host checklist disagree, `TECH_STACK.md` wins the command and `ARCHITECTURE.md` wins the layer.

If two files disagree, update the loser. Do not leave both. Do not mix product sentences into `DESIGN.md`.

`/impeccable clarify` may tighten words. It may not change the one-liner, the plan, or the direct CTA in `PRODUCT.md`.

## Retired as sources of truth

Durable claims from these files now live in the canon. The paths remain as short pointers so old links do not 404 in the repo. Do not add new truth to them.

| Old file | Now owned by |
|----------|----------------|
| `.github/docs/north-star.md` | `PRODUCT.md` |
| `.github/docs/stages.md` | `PRODUCT.md` (five modes) |
| `.github/docs/design-system.md` | `DESIGN.md` |
| `.github/docs/assets.md` | `DESIGN.md` (imagery) |
| `.github/docs/image-system.md` | `DESIGN.md` (imagery) |
| `.github/docs/technical.md` | `ARCHITECTURE.md` + `TECH_STACK.md` |
| `.github/docs/next-steps.md` | Pointer only. Open implementation notes are not canon |

## Leftovers

| File | Job now | Fate |
|------|---------|------|
| `README.md` | Contributor doors and commands | keep |
| `AGENTS.md` | Load order plus local run/lint notes | keep |
| `.github/copilot-instructions.md` | Copilot guardrails; must follow this index | keep |
| `docs/deploy-cloudflare.md` | Cutover runbook | keep as collection |
| `docs/reviews/*` | Point-in-time reviews (copy, frontend, Cloudflare). Proposals, not locks | keep as collection |
| `public/texts/*` | Quote bank and primary texts, including `PHILOSOPHICAL-AXIOMS.md` | keep as collection |
| `components/philosophy/README.md` | Local component note | keep |
| `.cursor/skills/impeccable/` | `/impeccable` skill tree | keep |
| `PRODUCT.template.md` | Pointer that `PRODUCT.md` is already filled | keep |

## Not canon

- Live four-column labels (Nursery / Gymnasium / Poetic / Spiritual) in components. `PRODUCT.md` is the mode lock. UI migration is a later code pass.
- Unverified quotations. If a line is not under `public/texts/`, do not treat it as Senior’s.
- Bonfire and Quarto taxonomies. Do not import them.
