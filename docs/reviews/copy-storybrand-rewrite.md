# Copy Rewrite Proposal — StoryBrand (SB7) + Grunt Test

**Site:** Senior Schools Network (seniorschoolsnetwork.com)
**Method:** Donald Miller's StoryBrand SB7 framework + the "grunt test" (a caveman / 5‑second test: *What do you offer? How does it make my life better? What do I do to buy/get it?*)
**Scope:** Every user‑facing page and the section components each renders.
**Constraint honored:** No source files were edited. This is a copy proposal only. Every recommendation is grounded in `/.github/docs/north-star.md`, `/.github/copilot-instructions.md`, `/.github/docs/design-system.md` (Part 8), and the primary texts in `/public/texts/`.

> **How to read the "After" copy.** Each page leads with a plain, grunt‑test‑passing hook — a parent skimming for five seconds must instantly know *what this is, what it offers them, and what to do next* — and then opens into richer, poetic prose. **Clarity is the doorway; wonder is the room.** Poetic lines are drawn only from repo sources and are marked with their attribution. Any headline or body sentence not in quotation marks is original synthesis in the site owner's meat‑and‑potatoes register.

---

## 1. Executive Summary — The Site BrandScript

StoryBrand's cardinal rule: **the customer is the hero, not the brand.** The network is the *guide*. Today the site too often casts *itself* and *its philosophy* as the hero ("Three Paths to Restoration," "Join the Restoration"), and it leads with abstraction (a Tolkien couplet) before it ever tells the parent what this is. The BrandScript below re‑centers the parent, educator, and founder as heroes and positions the network as the guide who has a plan.

| SB7 Element | The Senior Schools Network BrandScript |
|---|---|
| **1. A Character (Hero)** | A Catholic parent, homeschooler, teacher, or aspiring founder who wants their child (especially their sons) to be *formed* — not merely schooled — through wonder, adventure, and faith. |
| **2. Problem** | **External:** There is no map to faithful, wonder‑based schools — and the gymnasium stage (ages 7–13) barely exists. **Internal:** They fear the modern machine is fragmenting their child's soul while they watch. **Philosophical:** A child deserves wonder before analysis, forests before screens, story before syllabus. |
| **3. Guide** | The network + John Senior's philosophy — **empathy** ("we watched schooling fragment the soul too") + **authority** (the IHP legacy, the primary texts, a real directory of aligned schools). |
| **4. Plan** | Three plain steps: **(1) See the vision** (Philosophy) → **(2) Find aligned schools** (Directory) → **(3) Engage** (join, adapt at home, or found one). |
| **5. Call to Action** | **Primary:** *Find a School.* **Transitional:** *Explore the Philosophy.* |
| **6. Failure** | Another decade of screens, softness, and specialization — a bright child grown "weak, distracted, disconnected," soul untended. |
| **7. Success** | A child formed through **sense, story, and liturgy** — a son who becomes a **Chivalric Wayfarer**: resilient, reverent, fully alive, anchored in divine order. |

**Site one‑liner (grunt test):**
> **We help Catholic families find and build schools that form children through wonder, adventure, and faith — starting with the years everyone else forgets.**

Shorter tagline variant for the logo lockup / hero:
> **Schools that form the whole child — through sense, story, and liturgy.**

### The three audience paths (restated crisply from north-star.md)

1. **Parents (School path).** *Want:* an education that forms my child in wonder and faith. *Problem:* modern schooling fragments learning and neglects the soul; the gymnasium stage is missing. *Guide→Plan:* explore the philosophy → filter the directory by stage → inquire or apply. *CTA:* **Find a School.** *Waypoint:* Ephesians 6:4.
2. **Homeschoolers / families (Home path).** *Want:* to enrich my child's formation at home. *Problem:* few resources grounded in this tradition. *Guide→Plan:* read the sources → adapt by stage (nature walks, adventure, great books). *CTA:* **Read the Sources.** *Waypoint:* Proverbs 22:6.
3. **Founders / educators (Founding path).** *Want:* to start or teach in a faithful, wonder‑based school. *Problem:* isolation, no models, no map. *Guide→Plan:* see the vision → connect with people already doing it. *CTA:* **Connect with the Network.** *Waypoint:* Matthew 11:28.

---

## 2. Grunt Test Audit — Current Home Hero

**What a visitor actually sees first** (`app/(site)/page.tsx` → `HeroSection`): a full‑screen image with a *rotating* set of **"Sense and Story"** quotes — e.g. Tolkien's *"Man, sub‑creator, the refracted light through whom is splintered from a single White to many hues…"* — plus two buttons, **Explore Directory** and **Our Philosophy**. There is no plain statement of what the site is.

| Grunt‑test question | Can a visitor answer in 5s? | Verdict |
|---|---|---|
| **What do you offer?** | No. The first words are a Tolkien metaphysical couplet. Nothing says "schools" or "network." The logo wordmark ("The Senior School Network") is the only clue, and it's ambiguous (a school named "Senior"? schools for seniors?). | ❌ **Fail** |
| **How does it make my life better?** | No. Beauty is present, benefit is absent. Nothing names the parent's stakes or the transformation offered. | ❌ **Fail** |
| **What do I do next?** | Partial. Two buttons exist, but "Explore Directory" is jargon (directory of *what?*) and neither is an obvious primary action. | ⚠️ **Weak pass** |

**Root cause:** the hero opens into the *room* (wonder) before building the *doorway* (clarity). StoryBrand's fix is not to delete the poetry — it is to put one plain line *above* it. The poetry then lands as reward, not riddle.

**Minimum fix (highest impact change on the site):** add a spoken‑plain headline + subhead + one primary CTA above the rotating quote. See the Home section below.

---

## 3. CTA / Label Consistency Table (recommend one verb set site‑wide)

The site currently uses many near‑synonym CTAs for the same actions: *Explore Directory, Find a School, Browse the Directory, Browse Directory, Review Philosophy, Our Philosophy, Explore Resources, Engage & Connect, Get Involved, Connect & Get Inspired, Engage with Network, Submit for Inclusion, Get in Touch, Contact Us.* StoryBrand asks for **one repeated primary CTA** and **one repeated transitional CTA** so the hero is never confused about the next step.

Recommended canonical verb set (use these exact labels everywhere):

| Intent | **Primary label (use everywhere)** | Retire these variants |
|---|---|---|
| Go to the directory (main conversion) | **Find a School** | Explore Directory, Browse the Directory, Browse Directory, Explore Schools |
| See the philosophy (transitional) | **Explore the Philosophy** | Our Philosophy, Review Philosophy, See the Vision |
| Read primary texts (home path) | **Read the Sources** | View All Texts, View Complete Reading List, Explore Resources |
| Get on the school directory (org‑facing) | **Add Your School** | Submit for Inclusion, Is Your School Aligned?, Apply to Affiliate |
| Reach a human (founding path) | **Connect with the Network** | Engage & Connect, Get Involved, Connect & Get Inspired, Engage with Network, Get in Touch |

**Rule of thumb:** every page shows **exactly one primary button (`Find a School`)** and **one transitional button** appropriate to that page's path. Keep verbs concrete and directional; drop the abstract "Engage."

> **Voice note on CTAs:** "Engage" fails the grunt test — it names *your* activity, not the hero's gain. "Find a School," "Read the Sources," and "Connect with the Network" tell the hero exactly what they get. This is the meat‑and‑potatoes discipline the owner asks for.

---

## 4. Page‑by‑Page Rewrite

Pages covered: **Home**, **Philosophy**, **Schools & Programs (Network Directory)**, **Engage**, **Contact**, **Privacy**, and the **Text reader (`/texts/[slug]`)**. Site‑wide **Navigation** and **Footer** are addressed at the end.

---

### 4.1 Home — `app/(site)/page.tsx`

**Purpose & primary hero/CTA.** The site's front door for all three heroes. Primary CTA: **Find a School.** Transitional CTA: **Explore the Philosophy.**
**One‑liner (grunt test):** *We help Catholic families find and build schools that form children through wonder, adventure, and faith.*
**Controlling idea:** *Modern schooling forgets the soul; here is where you find — or build — schools that don't.*

#### Before (verbatim key strings)
- Hero: (rotating) *"Man, sub‑creator, the refracted light through whom is splintered from a single White to many hues…"* — J.R.R. Tolkien. Buttons: **Explore Directory** / **Our Philosophy**.
- Welcome: *"The educational vision of Dr. John Senior begins with wonder, progresses through physical discipline and adventure, and nurtures the soul's ascent to wisdom, — all rooted in a liturgical rhythm and the poetic mode of knowing."*
- Section head: **Three Paths to Restoration**; cards "Senior Schools," "Philosophy & Resources," "Engage & Connect."
- Final CTA: **Join the Restoration** → buttons **Find a School** / **Engage with Network**.

#### After

**Hero (add a plain layer above the rotating quote):**
- **Eyebrow:** A network of Catholic schools
- **Headline (H1):** **Find a school that forms your child's soul — not just their résumé.**
- **Subhead:** Discover Catholic schools and programs built on wonder, adventure, and faith — following the vision of Dr. John Senior. Start where modern schooling forgets: the years that form a child for life.
- **Primary CTA:** **Find a School** → `/network-directory`
- **Transitional CTA:** **Explore the Philosophy** → `/philosophy`
- *Keep the rotating source quote directly beneath, as the "reward" line* (e.g. the Tolkien *sub‑creator* passage) — now framed, not naked.

*Rationale — SB7 #1/#2/#5:* installs the missing plain hero that answers all three grunt‑test questions in one glance, while preserving the poetic quote as the second beat (doorway → room). Names the hero ("your child"), the stakes ("soul, not just résumé"), and one clear action.

**Welcome (keep, tighten the punctuation and add a forward pull):**
> The vision of Dr. John Senior begins in **wonder**, is tempered by **physical discipline and adventure**, and rises toward **wisdom** — all carried on a liturgical rhythm and the poetic way of knowing. *A child does not need to be filled like a jar. He needs to be kindled like a fire.*

*Rationale — voice blend:* the first sentence is the plain thesis; the closing line is the poetic promise. (The "kindled" image is original synthesis, not a quotation — flagged, not attributed. If a sourced line is preferred, substitute Senior's *"Boys burn with gem‑like flames"* — grounded in `PHILOSOPHICAL-AXIOMS.md` / `quotes.ts`.)

**"Three Paths" section — rename around the hero, not the brand:**
- **Section head (was "Three Paths to Restoration"):** **Where do you want to begin?**
- **Card 1 — Parents (was "Senior Schools"):** **Find a school for your child.** *Body:* Browse Catholic schools and programs that form children through poetic knowledge, physical discipline, and authentic faith. *Link label:* **Find a School →**
- **Card 2 — Families (was "Philosophy & Resources"):** **Bring this home.** *Body:* Read the sources behind the vision and adapt them for your family — nature walks for the young, adventure for the middle years, great books for the older. *Link label:* **Read the Sources →**
- **Card 3 — Founders (was "Engage & Connect"):** **Start or strengthen a school.** *Body:* The gymnasium stage is missing almost everywhere. Add your school to the network, or connect with people already building one. *Link label:* **Connect with the Network →**
- *Keep the Scripture line on each card, but use one consistent translation (see §5 — Fidelity flags).* Recommended verses per north‑star flows: Ephesians 6:4 (parents), Proverbs 22:6 (families), Matthew 11:28 (founders).

*Rationale — SB7 #1/#4:* "Three Paths to Restoration" makes *restoration* the hero. "Where do you want to begin?" makes the *visitor* the hero and turns the three cards into a **plan** (three simple, self‑selecting steps). Card headings now lead with the hero's verb.

**Stages section (keep; add a benefit lead‑in):**
- **Head:** **Every age has its own door to wonder.**
- **Lead:** Formation isn't one‑size‑fits‑all. Each stage builds on the last — sensory wonder, then physical adventure, then imaginative depth, then spiritual wisdom. See what each stage looks like when it's done right (and what's lost when it isn't).

*Rationale — SB7 #6/#7:* frames the interactive stages around stakes and success, not just description.

**Final CTA (re‑center from "Join the Restoration" to the hero's next step):**
- **Head (was "Join the Restoration"):** **Your child's formation starts with the next click.**
- **Body:** Whether you're seeking a school, forming your children at home, or dreaming of founding one — begin here.
- **Primary:** **Find a School** → `/network-directory`
- **Transitional:** **Explore the Philosophy** → `/philosophy` *(replaces "Engage with Network," which is vaguer)*

*Rationale — SB7 #5:* closes with the same primary CTA as the hero (repetition builds conversion) and a low‑commitment transitional CTA.

---

### 4.2 Philosophy — `app/(site)/philosophy/page.tsx`

**Purpose & primary hero/CTA.** The authority‑building page: proves the guide knows what he's talking about. It is *long and argumentative* (a three‑part syllogism). Its job in SB7 is to move a convinced reader to an action. Primary CTA: **Find a School.** Transitional CTA: **Connect with the Network.**
**One‑liner (grunt test):** *Why children need wonder before analysis — and what happens when schools get the order wrong.*
**Controlling idea:** *Modern education fragments the soul; poetic knowledge restores it; the fruit is a Chivalric Wayfarer.*

#### Before (verbatim key strings)
- Hero: H1 **"Philosophy"** over a rotating *Foundational Wisdom* quote. No subhead, no orientation.
- **"The Argument: Three Steps to Restoration"** with cards **"Modern education fragments the soul."**, **"Poetic knowledge is the remedy."**, **"Chivalric Wayfarers restore Christendom."**
- Objections accordion, incl. quote *"Boys are not fragile. They are designed for hardship… anxiety is the result of too little discipline, not too much."* — Dr. John Senior, *The Death of Christian Culture*.
- Objection answer: *"'Wonder is the beginning of wisdom' (Aristotle)."*
- `VisionCallToAction`: **"What You Can Do"** → Found a School / Join a School / Adapt at Home.

#### After

**Hero (add orientation beneath the one‑word title):**
- **H1:** **Philosophy** *(keep)*
- **Subhead (new):** Why wonder must come before analysis — and how modern schooling gets the order backwards. The case for forming children through sense, story, and liturgy.
- *Keep the rotating Foundational Wisdom quote as the reward beat.*

*Rationale — grunt test:* a lone word "Philosophy" over a poem tells a skimmer nothing. One plain subhead lets them decide to keep reading in five seconds.

**Argument intro (keep the structure; make the promise plainer):**
- **Head (was "The Argument: Three Steps to Restoration"):** keep, but add lead: **In three steps: what's broken, what heals it, and what it grows.**
- The three cards are strong and already grunt‑test friendly (**problem → solution → success** = SB7 #2, #4, #7). Keep their bold claims. Two edits:
  - Card III currently: *"'The farther you go… you really don't know very much at all' (Socrates via lecture)."* — **verify or drop** (see §5).
  - Trim the em‑dash pile‑ups so each card's final sentence lands cleanly.

**Objections & Answers (the copy is good and on‑voice; the *sourcing* is the problem):**
- Keep the five Q&As — anticipating objections is exactly right for a guide establishing authority.
- **Replace the two quotes that cannot be found in any repo source** (see §5 for detail):
  - *Instead of* the fabricated Senior quote *"Boys are not fragile…"*, use a grounded line: **"Boys burn with gem‑like flames."** — John Senior, *The Restoration of Innocence* (in `quotes.ts` / `PHILOSOPHICAL-AXIOMS.md`), or Senior's etymology of *puer/pyros* ("power… like the energy in atoms") from the axioms. Both make the same "boys are designed for vigor" point from a real source.
  - *Instead of* the fabricated Quinn quote attributed to an *"IHP Alumni Survey,"* either drop the pull‑quote or replace it with a real one and reframe the answer as network synthesis ("Graduates of the IHP became doctors, lawyers, and teachers…") **without** a quotation‑marked, sourced sentence that isn't in the texts.
  - In the "anti‑modern" answer, *"'Wonder is the beginning of wisdom' (Aristotle)"* should be attributed to **James S. Taylor, _Poetic Knowledge_** (the axioms explicitly note Aristotle's actual line is *"all men by nature desire to know"*). Fix or drop the "(Aristotle)."

*Rationale — copilot‑instructions.md "never fabricate quotes":* the argument's persuasive force *depends* on its citations being real. One discoverable fabrication undermines the whole authority play. The rewritten answers keep every rhetorical beat while swapping in grounded sources.

**"What You Can Do" (`VisionCallToAction`) — align labels and add a lead:**
- **Head:** keep **What You Can Do** (good — hero‑centered, action‑forward).
- **Lead (new):** You've seen the vision. Here's how to act on it.
- Card actions → standardize labels: **Find a School** (Join a School card), **Read the Sources** (Adapt at Home card), **Connect with the Network** (Found a School card, currently "Get in Touch"). Keep the emoji + one‑line descriptions; they're tight and concrete.

*Rationale — SB7 #4/#5:* a long argument must resolve into a **plan** and **one clear action**; the label standardization removes the "which button is the real one?" friction.

---

### 4.3 Schools & Programs (Directory) — `app/(site)/network-directory/page.tsx` + `NetworkFilter`

**Purpose & primary hero/CTA.** The conversion page — the actual "product." For parents the CTA is *use the filter + visit a school's site*; for orgs it's **Add Your School.**
**One‑liner (grunt test):** *Find Catholic schools and programs near you, filtered by your child's stage.*
**Controlling idea:** *Here is the map you couldn't find anywhere else.*

#### Before (verbatim key strings)
- Hero: title **"Schools & Programs"** over a rotating adventure quote; no buttons, no orientation line.
- Results status: *"Showing all N organizations (X schools, Y programs)."*
- Founding CTA (in filter): **"Don't See a School or Program Near You?"** → **Connect & Get Inspired.**
- Application CTA (page): **"Is Your School or Program Aligned?"** → **Engage & Connect** / **Review Philosophy.**

#### After

**Hero (add a subhead + a real action under the title):**
- **Title:** **Schools & Programs** *(keep)*
- **Subhead (new):** Browse the network of Catholic schools and programs formed on poetic knowledge, physical discipline, and faith. Filter by developmental stage to find the right fit for your child.
- **Primary CTA (new, jump link):** **Browse the Directory ↓** → `#filters`

*Rationale — grunt test:* right now the first screen is a beautiful image + a quote, and the parent must scroll blindly to discover there's a filterable list. One subhead + a scroll CTA tells them what's here and how to use it.

**Filter helper text (small but high‑value):**
- Add a one‑line orientation above the filters: **Pick a stage to see schools that specialize in it. Not sure? Start with "All."**
- Empty state (keep, tighten): *"No matches yet. Try fewer filters — or, if there's a gap near you, help fill it."* → button **Connect with the Network.**

**Founding block inside the filter (`NetworkFilter`):**
- **Head:** keep **"Don't see a school near you?"** (excellent — this *is* the internal problem spoken aloud).
- **Body (tighten):** The gymnasium stage (ages 7–13) is missing almost everywhere. If there's a gap in your area, you don't have to fill it alone.
- **CTA:** **Connect with the Network** (replaces "Connect & Get Inspired").

**Application CTA section (page):**
- **Head (was "Is Your School or Program Aligned?"):** **Run a school that fits this vision?**
- **Body:** If your school or program forms children through wonder, discipline, and faith, add it to the network. Listing raises your visibility and connects you with families and educators who are looking for exactly what you do.
- **Primary:** **Add Your School** → `/engage#contact`
- **Transitional:** **Explore the Philosophy** → `/philosophy` (replaces "Review Philosophy").

*Rationale — SB7 #2/#5:* the directory serves two heroes; each now gets a plainly named action ("Find a School" for parents via the filter; "Add Your School" for orgs). Naming the gymnasium gap connects the tool to the visitor's felt problem.

---

### 4.4 Engage — `app/(site)/engage/page.tsx`

**Purpose & primary hero/CTA.** The founding/family path hub: submit a school, understand the gymnasium gap, start small, connect, read the texts. Currently it tries to do *everything*, which blurs its grunt test. Give it one spine: **the gymnasium gap and what you can do about it.** Primary CTA: **Connect with the Network.** Transitional: **Find a School.**
**One‑liner (grunt test):** *Start, strengthen, or join a school that forms children the way modern schooling won't.*
**Controlling idea:** *The most important years are the ones no one is serving — and you can help.*

#### Before (verbatim key strings)
- Hero: title **"Engage"** over rotating inspiration quotes; no subhead.
- **"Submit a School or Program"** → **Submit for Inclusion.**
- **"The Gymnasium Gap"** … *"The gymnasium stage (ages 7‑13) is critically underserved in modern education."*
- **"Starting in Your Community"**, **"Connect with the Network"** → **Contact Us** / **Browse Directory.**
- **"Essential Texts for Further Study"** → **View Complete Reading List.**
- Final CTA **"Explore the Network"** → **Browse the Directory.**

#### After

**Rename the page for clarity.** "Engage" fails the grunt test (nav label included). Recommend **"Get Involved"** or **"Join the Network"** as the nav + page title. (Copy below assumes the page title becomes a spoken phrase; the route can stay `/engage`.)

**Hero:**
- **Title (was "Engage"):** **Get Involved**
- **Subhead (new):** Add your school to the network, bring these ideas to your parish or home, or connect with people already doing the work. Start with the years everyone else skips.
- *Keep the rotating inspiration quotes beneath.*

**"Submit a School or Program" (keep first — it's the strongest single action):**
- **Head:** keep, or **Add your school to the network.**
- **Body (tighten):** If your school or program forms children through poetic knowledge, physical discipline, and Catholic faith, join this loose network. It's free, it raises your visibility, and it connects you with like‑minded educators and families.
- **CTA:** **Add Your School** (replaces "Submit for Inclusion").

**"The Gymnasium Gap" (this is the emotional core — lead with it more boldly):**
- **Head:** keep.
- **Lead (tighten and sharpen the stakes):** The gymnasium years — ages 7 to 13 — are where boys and girls are meant to be forged through adventure, physical challenge, liturgy, and heroic stories. It's also the stage almost no one is serving. Homeschooling covers the nursery. High schools and colleges take it from there. The middle is missing.
- *Keep the embedded Senior quote (`adventure-stories`: "…lightly clad boys play, sharpening their five senses in immediate contact with nature.") — it is grounded.*

**"Starting in Your Community" (keep — it's the *plan*, concrete and non‑prescriptive):**
- **Lead (tighten):** You don't need a building or a charter to begin. These principles take root wherever children gather — a parish, a neighborhood, a kitchen table. Here's how to start small.
- Keep the two cards (Parish‑Based / Home & Neighborhood) and their bullet lists — they are exactly the concrete, meat‑and‑potatoes "plan" SB7 wants.

**"Connect with the Network" section:**
- **Body (tighten):** Want to start something? We don't hand out formal founding kits — we connect you with educators and founders who've already done it.
- **Primary:** **Connect with the Network** → `/contact` (replaces "Contact Us").
- **Transitional:** **Find a School** → `/network-directory` (replaces "Browse Directory").

**"Essential Texts" (keep; align label):**
- Lead is good. Change the button to **Read the Sources** (replaces "View Complete Reading List") for site‑wide consistency; keep the individual text cards.

**Final CTA (dedupe — the page already has a directory CTA above; make the closer the founding path):**
- **Head (was "Explore the Network"):** **Ready to begin?**
- **Body:** Find a school that already lives this — or reach out and start building one.
- **Primary:** **Find a School** → `/network-directory`
- **Transitional:** **Connect with the Network** → `/contact`

*Rationale — SB7 #4/#5:* Engage currently offers ~6 competing CTAs. The rewrite gives the page one spine (the gymnasium gap → what you can do) and a repeated pair of actions, so the founder‑hero always knows the next step.

---

### 4.5 Contact — `app/(site)/contact/page.tsx`

**Purpose & primary hero/CTA.** The human‑connection endpoint (founding path). Primary CTA: call/text the founder. Transitional: **Find a School.**
**One‑liner (grunt test):** *Talk to a real person about the network, the philosophy, or starting something.*
**Controlling idea:** *A real person built this and wants to hear from you.*

#### Before (verbatim key strings)
- H1 **"Contact"**; intro *"Questions about the network, the philosophy, or interested in connecting with others pursuing this vision? Reach out directly."*
- **Phone** block (real number), **"About the Creator of this Site: Michael Merimee"** (long first‑person bio), **"Contact Schools Directly"** → **Browse the Directory.** Closing Matthew 11:28.

#### After

The page is warm and mostly works. Small StoryBrand tweaks:

- **H1:** **Contact** → **Let's talk.** *(A spoken phrase passes the grunt test better than a label.)*
- **Intro (tighten):** Questions about the network, the philosophy, or how to begin? Reach out — you'll reach a person, not a form.
- **Phone block:** keep (a direct number is high‑trust and rare — a real authority signal for the guide).
- **"About the Creator" bio:** keep, but **lead with empathy, then authority** (SB7 #3). Suggested first sentence: *"I built this because I've lived the fragmentation — homeschooled, boarding academy, classical schools, and finally Gregory the Great Academy, where I first saw Senior's vision actually work."* Then the current bio continues. Consider trimming ~20% for skimmability; the current single paragraph is dense.
- **"Contact Schools Directly":** keep; change button to **Find a School** for consistency (currently "Browse the Directory").
- **Closing Scripture:** keep Matthew 11:28 — but **match the translation used site‑wide** (see §5): the footer/`quotes.ts` use Knox *"…I will give you rest,"* which this page already matches. Good; make the home card match *this*.

*Rationale — SB7 #3:* a guide wins trust through **empathy + authority**. The bio has authority (impressive path) but buries the empathy; leading with "I've lived the fragmentation" makes the reader feel understood first.

---

### 4.6 Privacy — `app/(site)/privacy/page.tsx`

**Purpose.** Legal/trust utility page. Not a conversion page — but StoryBrand still cares because **inaccurate copy erodes trust**, and here the copy contradicts the project's own rules.

#### Before (verbatim key strings)
- *"This website collects minimal data and does not track users beyond **basic analytics** necessary for site improvement."*
- *"Contact forms collect only name and email address…"*
- *"We may use **basic web analytics** to understand how visitors use our site."*

#### After (accuracy fix — flagged, not just stylistic)

`copilot-instructions.md` explicitly says **"Do not add analytics, tracking, or data collection"** and **"never collect user data."** The current privacy copy *claims analytics and contact‑form collection that the guardrails forbid* (and the site is a static export with no described backend). Recommend:

- **Lead:** The Senior Schools Network is a static website. We don't run analytics, we don't set tracking cookies, and we don't collect personal data.
- **Contact:** We don't host a contact form. To reach us, use the phone number on the Contact page or a school's own website — those exchanges happen directly, off this site.
- **Third parties:** We don't sell, trade, or share information, because we don't collect any.
- Keep a short **Questions** block linking to Contact.

*Rationale — Fidelity/accuracy:* this is the clearest case on the site where **current copy overreaches vs. the sources** (guardrails). Fixing it is both a trust win and a compliance fix. **Owner action required:** confirm whether any analytics/contact form actually exists before finalizing this wording.

---

### 4.7 Text Reader — `app/(site)/texts/[slug]/page.tsx` + `MarkdownContent`

**Purpose & primary hero/CTA.** The reading room (home path — "Read the Sources"). Primary CTA at the foot: **Read the Sources** (all texts). Transitional: **Explore the Philosophy.**
**One‑liner (grunt test):** *Read the primary texts behind the vision — and see why they matter for your child.*
**Controlling idea:** *These aren't dusty books; they're the blueprint for forming a child.*

#### Before (verbatim key strings)
- Title + author + description (from front‑matter); tip: *"💡 Tip: Use your browser's print function (Ctrl+P / Cmd+P) to save this as a PDF."*
- Footer: *"Explore more resources and philosophy"* → **← Back to Philosophy** / **View All Texts.**

#### After

Largely fine — it's a reader. Improvements:

- **Add a one‑line "why this matters" slot** beneath the description (optional, per‑text): a single sentence connecting the text to formation, e.g. for *Mythopoeia*: *"Why it matters: Tolkien's defense of myth is the clearest case for story before syllabus."* (Only where a grounded line exists; otherwise omit.)
- **Print tip:** keep, but move it to the *foot* of the article (a skimmer at the top doesn't need it yet) or make it smaller. It currently sits above the content and competes with the title.
- **Footer CTAs:** relabel for consistency — **Explore the Philosophy** (replaces "← Back to Philosophy") and **Read the Sources** (replaces "View All Texts"). Keep both; they close the loop back into the two main paths.

*Rationale — SB7 #7:* a reader page should still point somewhere. Framing each text with a "why it matters" line ties abstract sources to the parent's concrete success (a well‑formed child), and consistent labels keep the plan legible.

---

### 4.8 Site‑wide — Navigation & Footer

**Navigation (`components/layout/Navigation.tsx`).** Current items: *Home · Philosophy · Schools & Programs · Engage.*
- Rename **"Engage" → "Get Involved"** (grunt test; "Engage" is brand‑speak).
- Consider **"Schools & Programs" → "Find a School"** to make the primary conversion path a top‑level, spoken CTA. (Optional; "Schools" alone also works.)
- The wordmark reads **"The Senior School Network"** in the nav but **"Senior Schools Network"** in the footer/metadata. **Standardize** (recommend "Senior Schools Network," matching the domain and docs) — a mismatched brand name hurts the grunt test.
- Consider adding a **tagline** near the wordmark on the home hero so the brand name is self‑explaining: *"Senior Schools Network — schools that form the whole child."*

**Footer (`FooterContent.tsx`).** Copyright line is good and on‑message: *"…Promoting schools aligned with poetic knowledge and Catholic formation."* Keep. Ensure the **Scripture Waypoints** use the **Knox** translations from `quotes.ts` consistently (they do); the *page‑level* Scripture snippets are the ones that drift (see §5).

---

## 5. Fidelity & Verification Flags (grounded in copilot-instructions.md)

`copilot-instructions.md`: *"Quote only from repo sources… Never fabricate quotes—attribute all citations."* The following are the concrete places the current site **fabricates, mis‑attributes, or drifts** — each should be corrected before or during any copy update.

### A. Quotes not found in any `/public/texts/` source (treat as fabricated — remove or replace)

| Quote (current) | Attributed to | Where | Finding |
|---|---|---|---|
| *"Boys are not fragile. They are designed for hardship. The modern epidemic of anxiety is the result of too little discipline, not too much."* | Dr. John Senior, *The Death of Christian Culture* | Philosophy → Objections (`philosophy/page.tsx`) | **Not found in repo.** No such text is in `/public/texts/`. Replace with a grounded Senior line (e.g. *"Boys burn with gem‑like flames,"* or the *puer/pyros* etymology). |
| *"Our graduates succeed in every field because they bring integrated minds to specialized work. They are not cogs; they are men."* | Dr. Dennis Quinn, *IHP Alumni Survey* | Philosophy → Objections | **Not found; source "IHP Alumni Survey" does not exist in repo.** Drop the quotation or reframe as network synthesis (no quotation marks, no invented source). |
| *"The four stages are not a curriculum but a way of life. Nursery is wonder. Gymnasium is discipline…"* | Dr. John Senior, *The Restoration of Christian Culture* | `RestorationSubsectionA.tsx` | **Not found.** Also links `sourceSlug="restoration-of-christian-culture"`, which is **not a text in the repo** (repo has `the-restoration-of-innocence.md`). Replace with grounded axiom lines. |
| *"Poetic knowledge is not specialized knowledge but that connaturality and right harmony with things which Adam and Eve possessed in Eden…"* | Dr. John Senior, *The Restoration of Christian Culture* | `RestorationSubsectionA.tsx` | **Not found** in repo texts. Replace or attribute to a real source (the axioms' Maritain/Taylor lines on connaturality are grounded alternatives). |

### B. Mis‑attribution / overreach (fix the attribution, keep the idea)

- **"Wonder is the beginning of wisdom" → attributed to *Aristotle***, in the Philosophy objections and in `lib/content/quotes.ts` (`wonder-wisdom`, source "Metaphysics"). The repo's own `PHILOSOPHICAL-AXIOMS.md` frames this as **James S. Taylor's** synthesis and notes Aristotle's actual words are *"all men by nature desire to know."* **Attribute to Taylor, _Poetic Knowledge_**, or drop the "(Aristotle)."
- **"The farther you go… you really don't know very much at all" — "Socrates via lecture"** (Philosophy card III; also echoed in `VisionArchetypes`). **Verify against `integrated_humanities_lecture.md`** before publishing; the "via lecture" hedge suggests it isn't a clean verbatim citation.
- **"It has a hold on you… the hold of love." — "From the Integrated Humanities Lecture"** (`VisionArchetypes`). **Verify** the exact wording exists in `integrated_humanities_lecture.md`; if not, remove the quotation marks.

### C. Scripture translation inconsistency (pick one translation per verse, site‑wide)

The design system and axioms use **Knox**; several page‑level snippets drift to KJV/ESV/Douay. Same verse, three faces = a small but real credibility ding.

| Verse | Home card (`page.tsx`) | Contact / `quotes.ts` (canonical) | Elsewhere |
|---|---|---|---|
| **Ephesians 6:4** | *"Bring them up in the discipline and instruction of the Lord"* (ESV/RSV) | Knox: *"…do not rouse your children to resentment; the training… must come from the Lord."* | — |
| **Proverbs 22:6** | *"Train up a child in the way he should go"* (KJV) | Knox: *"…a boy will keep the course he has begun; even when he grows old, he will not leave it."* | `RestorationSubsectionA.tsx` uses *"…he will not depart from it"* labeled **"Scripture (ESV)"** |
| **Matthew 11:28** | *"Come to me… and I will refresh you"* (Douay) | Knox: *"…I will give you rest."* (Contact page matches this) | — |

**Recommendation:** adopt **Knox** everywhere (matches `quotes.ts` + axioms + design system §8.2), and make the home cards and `RestorationSubsectionA` conform.

### D. Other accuracy notes

- **Privacy page** claims analytics + contact‑form data collection that `copilot-instructions.md` forbids and the static architecture doesn't support (see §4.6). Fix to reflect reality.
- **OpenGraph URLs** in page metadata point to `seniorschoolsnetwork.org`, but the live site is `seniorschoolsnetwork.com`. Not user‑facing copy, but worth aligning for share cards/SEO. *(Flagged for the owner; outside the copy scope.)*
- **Brand name mismatch:** nav wordmark "The Senior School Network" vs. footer/docs "Senior Schools Network." Standardize (see §4.8).
- **No prototype‑school claims** appear in the reviewed copy — the directory is populated from `lib/content/network.ts` data and the pages speak network‑wide. This is compliant with the "network‑focused only" rule; keep it that way in any rewrite.

---

## 6. Controlling Idea & One‑Liner Quick Reference

| Page | One‑liner (grunt test) | Primary CTA | Transitional CTA |
|---|---|---|---|
| **Home** | We help Catholic families find and build schools that form children through wonder, adventure, and faith. | Find a School | Explore the Philosophy |
| **Philosophy** | Why children need wonder before analysis — and what happens when schools get the order wrong. | Find a School | Connect with the Network |
| **Directory** | Find Catholic schools and programs near you, filtered by your child's stage. | Find a School / Add Your School | Explore the Philosophy |
| **Engage (Get Involved)** | Start, strengthen, or join a school that forms children the way modern schooling won't. | Connect with the Network | Find a School |
| **Contact** | Talk to a real person about the network, the philosophy, or starting something. | Call / Text | Find a School |
| **Privacy** | We're static, and we don't collect your data. | — | Contact |
| **Text reader** | Read the primary texts behind the vision — and why they matter for your child. | Read the Sources | Explore the Philosophy |

---

## 7. Highest‑Impact Changes (ranked)

1. **Give the home hero a plain headline + subhead + one primary CTA above the rotating quote.** This is the single biggest conversion lever: it turns three grunt‑test failures into passes without deleting the poetry. (§2, §4.1)
2. **Standardize CTAs to one verb set** (`Find a School` / `Explore the Philosophy` / `Read the Sources` / `Add Your School` / `Connect with the Network`) and show one primary + one transitional per page. Removes decision friction everywhere. (§3)
3. **Remove/replace the fabricated quotes** (the two Philosophy objection quotes and the two `RestorationSubsectionA` quotes) and fix the "Wonder is the beginning of wisdom" → Aristotle mis‑attribution. Protects the guide's authority — the whole persuasion strategy rests on citations being real. (§5.A, §5.B)
4. **Re‑center brand‑led headings on the hero:** "Three Paths to Restoration" → "Where do you want to begin?"; "Join the Restoration" → "Your child's formation starts with the next click." Makes the parent the hero, not the network. (§4.1)
5. **Fix the Privacy page and Scripture‑translation drift.** Correct the analytics/data claims to match the project's own no‑tracking rule, and adopt Knox for all three waypoint verses site‑wide. Small effort, real trust and fidelity gains. (§4.6, §5.C)
