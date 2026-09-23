# PRODUCT.md

StoryBrand script for this product. Shared by UI, branding, marketing, and social.

The customer is the hero. This product is the guide. Visual direction lives in `DESIGN.md`. Stack lives in `TECH_STACK.md`. Global script law: `PRODUCT.global.md`.

Write in the hero's words. Short sentences. No cleverness that costs clarity.

If another file in this repo disagrees on words, this file wins. Update the other file.

Evidence for this fill: `.github/docs/north-star.md`, `.github/copilot-instructions.md`, `.github/docs/stages.md`, live copy in `app/(site)/page.tsx` and `components/layout/Navigation.tsx`, and the unshipped BrandScript in `docs/reviews/copy-storybrand-rewrite.md`. Lines marked `(proposed)` are not live on the threshold.

## One-liner

Public line (locked once accepted):

We help Catholic parents find and build schools that form children through sense, story, and liturgy so they can restore wonder before analysis, by seeing the vision, finding aligned schools, and engaging. `(proposed)`

Shorter line for a header, only if needed:

Schools that form the whole child — through sense, story, and liturgy. `(proposed)`

Live metadata (not a StoryBrand one-liner; do not put this on the hero as the prize):

Promoting schools aligned with John Senior's philosophy of poetic knowledge, wonder, and Catholic formation.

## Doors

Names the hero uses to enter. Not room paint (that is `DESIGN.md`). Live routes only.

- Header: Home, Philosophy, Schools & Programs, Engage
- Primary doors: `/` (home), `/network-directory` (schools), `/philosophy`
- Off the header: `/engage`, `/contact`, `/privacy`, `/texts/[slug]`

Do not invent `/join-found`, `/home-application`, or `/gallery` as current doors. Those names appear in older docs; they are not live routes.

## 1. Character

Who the hero is. One person, not a segment soup.

- Name the person: a Catholic parent seeking formation for a child, not merely schooling
- What they want, in their words: an education rooted in wonder, faith, and formation — sense, story, and liturgy
- Where they already are when they meet this: looking for a school, enriching a homeschool, or wondering whether to found one

`.github/docs/north-star.md` names three flows (parent, homeschool family, founder). This file keeps **one hero** (the parent). The other two are doors on the same want, not a second script. Human must decide whether founders get their own hero. `(proposed)`

## 2. Problem

Three layers. Fill all three or the copy will stay generic.

- External (the thing in the way): there is no clear map to faithful, wonder-based schools; the gymnastic years are especially thin
- Internal (how that feels): they watch the modern machine fragment the child's soul while they look
- Philosophical (why it is wrong that they should have to live this way): a child deserves wonder before analysis, forests before screens, story before syllabus

Villain, if there is one (a force or habit, not a competitor slogan): mechanized schooling — screens, softness, specialization — not a rival brand.

Canonical mode names for the problem and the plan live in `.github/docs/stages.md`: musical, gymnastic, poetic, romantic, virtuous. Do not say “wonder stage,” “innocent” as mode 1, or a four-stage set.

## 3. Guide

This product / brand. Empathy first, then authority. Never the hero.

- Empathy (we know what this is like): we watched schooling forget the soul too
- Authority (why they can trust the plan): John Senior's philosophy, the Integrated Humanities Program (IHP) lineage, the primary texts in `public/texts/`, and a directory of aligned schools

The philosophy page is allowed to argue. Other merimeesoftware products may only file a shelf. This one may make the case.

## 4. Plan

Three steps or fewer. Frictionless. Each step is something the hero does.

1. See the vision (`/philosophy`)
2. Find aligned schools (`/network-directory`)
3. Engage — join, adapt at home, or found (`/engage`)

## 5. Call to action

- Direct (the one thing to do now): **Find a School** → `/network-directory` `(proposed lock; live hero still says “Explore Directory”)`
- Transitional (the no-risk next look): **Explore the Philosophy** → `/philosophy` `(proposed lock; live hero still says “Our Philosophy”)`

On every primary surface, the direct CTA is visible without hunting.

Live hero buttons today: “Explore Directory” / “Our Philosophy”. Live closing buttons: “Find a School” / “Engage with Network”. Human must pick one direct verb.

## 6. Failure

What they stay stuck in if they do nothing. Specific. Not vague FOMO.

Another stretch of screens, softness, and specialization — a bright child grown weak, distracted, disconnected, soul untended.

## 7. Success

The transformed life after the plan works. Sensory and concrete. This is the ending the UI must point toward.

A child formed through sense, story, and liturgy at each mode — musical repose, gymnastic adventure, poetic first look, romantic quest, virtuous keeping of faith. The fruit named on the philosophy page is the Chivalric Wayfarer: resilient, reverent, fully alive.

## Locked public lines

Exact strings allowed on the threshold. Do not paraphrase.

**Live today (do not rewrite until the proposed lock is accepted):**

- Header wordmark: The Senior School Network
- Header doors: Home, Philosophy, Schools & Programs, Engage
- Hero CTAs: Explore Directory, Our Philosophy
- Home section: Three Paths to Restoration
- Home cards: Senior Schools, Philosophy & Resources, Engage & Connect
- Home stages head: Stages of Development
- Closing head: Join the Restoration
- Closing CTAs: Find a School, Engage with Network

**Proposed lock** (from `docs/reviews/copy-storybrand-rewrite.md`; not shipped):

- Header CTA: Find a School
- Hero: Find a school that forms your child's soul — not just their résumé.
- Problem (one or two sentences): Modern schooling fragments learning and neglects the soul. The gymnastic years barely exist.
- Want: Formation through wonder, adventure, and faith — sense, story, and liturgy.
- Plan (three short lines): See the vision. Find a school. Engage.
- Quiet line (optional): the musical, the gymnastic, the poetic, the romantic, the virtuous

## Wireframe (Persuade surfaces)

Use this order when `/impeccable shape` is planning a marketing or informational page. Do not invent extra sections to look full.

1. Header — hero want + direct CTA
2. Stakes — problem + failure
3. Guide — empathy + authority
4. Plan — the three steps
5. Explanatory — only what the plan requires (modes, directory, texts)
6. Success — the ending
7. CTA again — same direct action

Operate / Read / Experience surfaces keep this script for voice, empty states, onboarding, and CTAs. They do not ship the seven-section marketing page unless the surface is Persuade.

`/philosophy` is a Persuade + Read argument. It may keep the syllogism. It must still end on the same direct CTA.

## Voice

- Hero-first. "You" before "we."
- One idea per sentence.
- Name the problem before the feature.
- Buttons are verbs the hero does.
- Formal yet warm. Charitable. Non-prescriptive. Treat visitors as adults pursuing truth.
- Quote only from repo sources (`public/texts/`). Never fabricate a line.
- Mode labels only from `.github/docs/stages.md`.
- Do not:
  - make the brand the hero (“Join the Restoration” as the prize)
  - stack features with no plan
  - write internal jargon onto a public surface (“Explore Directory” without saying of what)
  - dilute the direct CTA with three equals
  - rewrite the one-liner, the plan, or the direct CTA to sound clever
  - use “Engage” as the primary verb
  - prescribe a curriculum

## Operating constraints

Where it runs only as it changes what you may say or promise. No palette. No framework sermon.

- Fully static. No backend, no database, no auth, no forms that collect data.
- No analytics or tracking.
- Network promotion only. No content about prototype schools as if they were the product.
- Catholic fidelity and Western canon. Exclusionary in core tenets. Inspire and connect; never impose a schema.

## Out of scope

What this product is not. What the hero should not be asked to do here.

- Not a school CMS, LMS, or application portal
- Not a prescribed curriculum or a sixth mode
- Not a chat, login, or donation machine
- Not a second brand (do not merge another merimeesoftware product into this hero)
- The hero should not be asked to mine a spatial puzzle to find the next step
