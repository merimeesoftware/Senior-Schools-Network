# DESIGN.global.md

Design philosophy for merimeesoftware surfaces. Product truth stays in each repo’s `PRODUCT.md`. Local look stays in each repo’s `DESIGN.md`.

This file names **philosophies** and the **principles** that follow. It does not name a palette, a typeface, or a component. Those are local, so two products never share an accent by accident.

Read this first. Then open the repo `DESIGN.md` and paint only what that file allows.

---

## Two philosophies (do both)

Award sites that work do two jobs at once. Sites that grate do only the second.

### 1. Prize first, then the walk

StoryBrand. Lando’s header. Basement’s line that performance is craft.

In two seconds the visitor knows: who this is for, what winning looks like, the next step. Spectacle is allowed after that sentence. If a 3D opening delays the sentence, the opening loses.

### 2. World as the medium

Lusion. Messenger. Bruno Simon. Immersive Garden. The Monolith Project.

The site is a place. Scroll can move a camera. One totem object may carry identity. Content rides on the world; the world is not a menu. A still fallback is the same place, unlit.

Steal path from (1). Steal atmosphere from (2). Never bury the prize in a hallway puzzle (Noomo’s spatial idea is right; mining case studies is the anti-pattern).

---

## Principles

These bind every merimeesoftware UI that has a human visitor.

1. **The prize in two seconds.** Want, guide, door. Motion after meaning.
2. **One world, many rooms, skippable.** A directory always exists beside the wander. Driving a car through the site is an add-on, never the only door.
3. **3D is weather and totem, never the catalog.** Names stay type. The room behind them may breathe.
4. **One totem per room.** Not five competing toys on one view.
5. **Scroll is camera, not pagination.** Arrival into the room. Then the names sit still.
6. **Still fallback is the real site.** Reduced motion, weak GPU, shared phone: the painted plate. Volume is the same plate, lit.
7. **Performance is part of beauty.** Hitching particles are slop. Frame-rate is taste.
8. **Sound is optional and off by default.**
9. **Type is architecture.** Large place-name. Short warrant. Numbered titles. Mute meta.
10. **Do not make the user mine.** If the next step is behind a spatial riddle, it is not the path.
11. **One ground, one ink, one accent** on a given surface. Room color lives in the plate and the numeral, not in the chrome.
12. **Honor `prefers-reduced-motion`.** The still is not a consolation prize.

---

## What those principles become (later, shared kit)

Do not invent a second component library in each repo. When a primitive is ready to extract, it graduates here as a name only — implementation stays in the owning repo until the kit exists.

| Principle | Future shared primitive (name only) |
| --- | --- |
| Prize first | `Threshold` — one line, one door row |
| Skippable rooms | `ChamberDoor` — named, always in the header |
| Weather not catalog | `RoomStill` — painted plate; optional volume later |
| One totem | `Totem` — one object per chamber |
| Scroll as camera | `Arrival` — camera move that yields to still type |
| Type as architecture | `ShelfRow` — numbered title, quiet vendor pair |
| No mining | `GuideAsk` — optional; never blocks the shelf |

Until that kit exists, each repo implements the local equivalent listed in its `DESIGN.md`.

---

## Sources (steal craft, not brand)

- StoryBrand / Marketing Made Simple — section order, not dentist paint.
- [landonorris.com](https://landonorris.com) — totem, rooms, speed, identity in two seconds.
- [lusion.co](https://lusion.co) — material and light ceiling. Not letter-field noise as content.
- [messenger.abeto.co](https://messenger.abeto.co) — a world that stays calm. Play optional.
- [bruno-simon.com](https://bruno-simon.com) — delight of being in a place. File the drive as both/and later.
- [immersive-g.com](https://immersive-g.com) — room-as-campaign. Sound tied to camera.
- [themonolithproject.net](https://themonolithproject.net) — 2D becoming 3D. Film pacing.
- Basement.studio — “performs” is a design value.
- Pangram Pangram — type and speed can win with no 3D.
- Refuse: Netflix rows, SaaS card grids, purple-indigo AI chrome, catalogue-archive plain-text-on-white, Noomo-style mined narrative.

---

## Visitor modes

A surface picks one primary. Secondary is allowed. A third is confusion.

| Mode | Job |
| --- | --- |
| Persuade | Prize, plan, door |
| Experience | Room, totem, still |
| Read | Type, measure, no chrome fight |
| Operate | Density, states, no atmosphere theater |

Bonfire is Experience + Persuade. Senior Schools is Persuade + Read. Quarto is Operate + Read. Elyra is Operate.

---

## What this file must not do

- Name hex, typeface, radius, or shadow for a product.
- Rewrite a BrandScript.
- License a second aesthetic (“and also dark mode luxury”).
- Treat the guide LLM as a mascot or a chat bubble on every page.
