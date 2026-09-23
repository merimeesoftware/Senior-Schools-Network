# PRODUCT.global.md

StoryBrand law for every merimeesoftware product with a human visitor.

Product truth lives in each repo’s `PRODUCT.md`. Visual truth lives in that repo’s `DESIGN.md`. Stack lives in `TECH_STACK.md`. This file names the **script shape** and the **voice rules**. It does not name a hero, a palette, or a host.

Read this. Then fill the repo `PRODUCT.md` from `PRODUCT.template.md`. Do not leave a generic audience/purpose page.

Pairs with `DESIGN.global.md`. Load order for an agent:

1. `PRODUCT.global.md` (this file) + repo `PRODUCT.md`
2. `DESIGN.global.md` + repo `DESIGN.md`
3. `TECH_STACK.md` / `ARCHITECTURE.md`
4. Mission filter if the house has one (`CORE.md` here)

---

## Two jobs

| File | Owns | Must not own |
| --- | --- | --- |
| `PRODUCT.md` | Hero, want, problem, guide, plan, CTA, failure, success, locked public lines, voice, what the product is not | Hex, typeface, 3D, hosting |
| `DESIGN.md` | World, rooms, type, color, motion, components | One-liner, plan, CTA |
| `TECH_STACK.md` | Language, deploy, CI | Copy, look |
| Mission filter | What the house may never become | Marketing sentences |

If two files disagree: **PRODUCT wins on words. DESIGN wins on look. TECH_STACK wins on runtime.** Update the loser. Do not leave both.

---

## Script (every repo fills these)

StoryBrand. Customer is the hero. Brand is the guide.

1. One-liner (public, locked once accepted)
2. Character — one person
3. Problem — external, internal, philosophical
4. Guide — empathy then authority
5. Plan — three steps or fewer, verbs the hero does
6. Call to action — one direct, one transitional
7. Failure
8. Success
9. Wireframe for Persuade surfaces
10. Voice
11. Operating constraints that affect copy or scope
12. Out of scope

Optional, when the surface has doors: **Doors** (names the hero uses, not room paint).

---

## Rules

- One hero. Not a segment soup.
- One want. Stages, features, and rooms are the plan, not the want.
- One direct CTA. Doors may *be* that CTA. Do not add a second verb that competes.
- Public lines in `PRODUCT.md` are the only lines an agent may put on a threshold.
- `/impeccable clarify` may tighten. It may not change the one-liner, plan, or direct CTA.
- Do not preach the house philosophy on a public page unless `PRODUCT.md` says the page is allowed to argue. Bonfire files a shelf. Senior argues.
- Do not invent a second one-liner to sound literary.

---

## What this file must not do

- Name a product’s hero or accent.
- License a second script (“and also we are a community”).
- Replace `DESIGN.global.md`.
