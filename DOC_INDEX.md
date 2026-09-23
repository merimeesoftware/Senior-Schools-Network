# Doc index — Senior Schools Network

One job per file. Do not duplicate.

## Agents read, in this order

1. `PRODUCT.global.md` then `PRODUCT.md`
2. `DESIGN.global.md` then `DESIGN.md`
3. `TECH_STACK.md` then `ARCHITECTURE.md` if present
4. `CORE.md` if the house has a mission filter
5. Lists / content collections

This repo has no `ARCHITECTURE.md` and no `CORE.md`. Mission “never” today lives in `.github/copilot-instructions.md` (fold later). Runtime layers are the static export described in `TECH_STACK.md`.

## Owns what

| File | Owns |
| --- | --- |
| `PRODUCT.md` | One-liner, plan, CTA, locked lines, voice |
| `DESIGN.md` | World, type, color, rooms, components |
| `TECH_STACK.md` | Language, deploy, CI |
| `ARCHITECTURE.md` | (absent — do not create to look complete) |
| `CORE.md` | (absent — mission never currently in copilot-instructions) |

## Conflict rule

Words → `PRODUCT.md`. Look → `DESIGN.md`. Runtime → `TECH_STACK.md`. Mission “never” → `CORE.md`.

If two files disagree: update the loser. Do not leave both. Do not mix PRODUCT and DESIGN.

## Leftovers

Other markdown in this repo. One job each, or a named collection. Do not duplicate canon. Do not delete this pass.

| File | Job now | Fate |
| --- | --- | --- |
| `README.md` | Contributor doors, commands, duplicate stack blurb | keep; fold stack/mission into pointers to PRODUCT / TECH_STACK after human OK |
| `AGENTS.md` | Cursor Cloud runtime notes + canon pointers | keep |
| `.github/copilot-instructions.md` | Agent source-of-truth table (pre-canon) | fold into this index + PRODUCT; leave a pointer |
| `.github/docs/north-star.md` | Mission, StoryBrand flows, IHP | fold words into PRODUCT; keep as philosophy collection or archive after human OK |
| `.github/docs/stages.md` | Locked five-mode card | keep as collection (taxonomy). PRODUCT cites it. Do not fork labels. |
| `.github/docs/design-system.md` | Look + IA + StoryBrand + asset wish-list | fold look into DESIGN (done); leftover IA/pages that are not live → archive after human OK |
| `.github/docs/technical.md` | Stale stack (npm, Render, GitHub Pages) | fold into TECH_STACK; archive after human OK |
| `.github/docs/next-steps.md` | Backlog + decision log | keep as collection |
| `.github/docs/assets.md` | Image manifest how-to | keep as collection (image system) |
| `.github/docs/image-system.md` | Image system implementation notes | keep as collection or fold into assets.md |
| `.github/prompts/prompt.md` | Empty agent prompt stub | archive after human OK |
| `docs/reviews/copy-storybrand-rewrite.md` | Unshipped BrandScript + page copy | fold accepted lines into PRODUCT; keep review until copy ships |
| `docs/reviews/frontend-review.md` | Lighthouse audit | keep as collection |
| `docs/reviews/architecture-cloudflare-review.md` | Architecture + Cloudflare plan | keep as collection; do not treat as current host |
| `components/philosophy/README.md` | Philosophy component map | keep as collection |
| `public/assets/logos/schools/README.md` | Logo drop instructions | keep as collection |
| `public/texts/**` | Primary texts, quotes, lists | keep as content collection |
| `PRODUCT.global.md` | House script law | keep |
| `DESIGN.global.md` | House design philosophies | keep |
| `.cursor/rules/frontend-design.mdc` | Cursor UI glob rule | keep |
