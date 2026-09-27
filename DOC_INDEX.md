# Doc index — Senior Schools Network

One job per file. Do not duplicate.

## Agents read, in this order

1. `PRODUCT.global.md` then `MISSION.md`
2. `DESIGN.global.md` then `DESIGN.md`
3. `ARCHITECTURE.md` and `TECH_STACK.md`
4. This file, when a path is unclear
5. Collections: `public/texts/*`, then `docs/deploy-cloudflare.md` if the task is cutover

There is no `CORE.md` in this repo.

## Owns what

| File | Owns |
|------|------|
| `PRODUCT.global.md` | House StoryBrand shape and voice law. Not a hero |
| `MISSION.md` | SSN one-liner, heroes, plan, CTA, five modes, philosophy, locked lines, voice |
| `DESIGN.global.md` | House look philosophies. Not a palette |
| `DESIGN.md` | This site’s world, rooms, type, color, motion, components, imagery |
| `ARCHITECTURE.md` | Layers and constraints |
| `TECH_STACK.md` | Language, deploy, CI, runtime gaps |
| `DOC_INDEX.md` | Load order, ownership, leftovers |

## Conflict rule

Words → `MISSION.md`. Look → `DESIGN.md`. Runtime → `TECH_STACK.md`.

Layers and constraints → `ARCHITECTURE.md`. If a layer note and a command or host checklist disagree, `TECH_STACK.md` wins the command and `ARCHITECTURE.md` wins the layer.

If two files disagree, update the loser. Do not leave both. Do not mix product sentences into `DESIGN.md`.

`/impeccable clarify` may tighten words. It may not change the one-liner, the plan, or the direct CTA in `MISSION.md`.

## Retired paths (removed)

These files were mined into the canon and then deleted. The paths are gone. Do not restore them.

Canon lives only in the root files: `MISSION.md`, `DESIGN.md`, `ARCHITECTURE.md`, and `TECH_STACK.md`. House law stays in `PRODUCT.global.md` and `DESIGN.global.md`.

| Former path | Claims now live in |
|-------------|--------------------|
| `.github/docs/north-star.md` | `MISSION.md` |
| `.github/docs/stages.md` | `MISSION.md` (five modes) |
| `.github/docs/design-system.md` | `DESIGN.md` |
| `.github/docs/assets.md` | `DESIGN.md` (imagery) |
| `.github/docs/image-system.md` | `DESIGN.md` (imagery) |
| `.github/docs/technical.md` | `ARCHITECTURE.md` + `TECH_STACK.md` |
| `.github/docs/next-steps.md` | Removed. It was a pointer only. Open implementation notes are not canon |

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
| `PRODUCT.template.md` | Pointer that `MISSION.md` is already filled | keep |

## Not canon

- Live four-column labels (Nursery / Gymnasium / Poetic / Spiritual) in components. `MISSION.md` is the mode lock. UI migration is a later code pass.
- Unverified quotations. If a line is not under `public/texts/`, do not treat it as Senior’s.
- Bonfire and Quarto taxonomies. Do not import them.
