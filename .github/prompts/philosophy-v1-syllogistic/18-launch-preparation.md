# Prompt 18: Launch Preparation - Final Review & Deployment

## Objective

Conduct final review of the philosophy page, validate content against sources, verify philosophical alignment, and prepare deployment checklist for production launch.

---

## Tasks Overview

1. **Content Validation:** Verify quotes, sources, and arguments against repository documents
2. **Philosophical Alignment:** Ensure adherence to copilot-instructions.md tenets
3. **User Flow Testing:** Walk through all three user stories (founding, joining, adapting)
4. **SEO & Metadata:** Optimize for search and social sharing
5. **Deployment Checklist:** Pre-launch technical verification

---

## Task 1: Content Validation

### Quote Verification

**Process:**
1. Open each referenced source document in `/public/texts/`
2. Verify each quote matches source exactly (word-for-word)
3. Confirm author attribution and source title correct
4. Check Scripture references (book, chapter, verse, translation)

**Checklist:**

#### Major Premise Quotes
- [ ] Senior quote on wonder (search: "wonder is the first" in `/public/texts/`)
- [ ] IHP Quinn quote on senses (search: "senses are the gateways")
- [ ] Psalm 19:1-2 verified (ESV translation)
- [ ] Senior quote on gymnasium stage (search: "ages seven to thirteen")
- [ ] Taylor quote on physical discipline (search: "physical discipline is spiritual")
- [ ] Proverbs 22:6 verified (ESV)
- [ ] 1 Corinthians 9:24-25 verified (ESV)
- [ ] Senior quote on poetic knowledge (search: "poetic knowledge is not specialized")
- [ ] Taylor quote on alienation (search: "modern school has become a factory")
- [ ] IHP Quinn quote on IHP purpose (search: "Integrated Humanities Program exists")
- [ ] Colossians 3:17 verified (ESV)

#### Minor Premise Quotes
- [ ] Senior quote on four stages (search: "four stages are not a curriculum")
- [ ] Senior quote on poetic knowledge and Eden (search: "connaturality and right harmony")
- [ ] Proverbs 22:6 (repeat, verify)
- [ ] Senior quote on gymnasium necessity (search: "gymnasium is not a luxury")
- [ ] 1 Corinthians 9:25 (repeat, verify)
- [ ] Taylor quote on physical courage (search: "physical courage precedes moral")
- [ ] IHP Quinn quote on integrated vision (search: "restore the integrated vision")
- [ ] Taylor quote on music/art/poetry (search: "music, art, and poetry are not electives")
- [ ] Philippians 4:8 verified (ESV)

#### Conclusion Quotes
- [ ] IHP quote on warrior poets (search: "warrior poets we send forth")
- [ ] Senior quote on fight and pray (search: "men who can fight and pray")
- [ ] Taylor quote on warrior poets (search: "men who will restore Christendom")
- [ ] Senior quote on boys not fragile (search: "boys are not fragile")
- [ ] IHP Quinn quote on graduates (search: "our graduates succeed")

---

## Task 2: Philosophical Alignment

### Tenets Validation (from `.github/copilot-instructions.md`)

#### Formal, Precise Tone
- [ ] Page tone scholarly and grounded
- [ ] Language matches poetic knowledge philosophy
- [ ] No casual or flippant language
- [ ] Technical terms (gymnasium, poetic knowledge, connaturality) used correctly

#### Content Grounding
- [ ] All quotes mapped to repository sources
- [ ] No fabricated quotes or sources
- [ ] Scripture citations complete (book, chapter, verse, translation)
- [ ] Tables used for lists (if applicable)

#### Organic Focus
- [ ] Emphasizes educators over structures
- [ ] Gymnasium restoration (physical resilience, adventure) emphasized
- [ ] Home adaptations mentioned (nature walks, book lists)
- [ ] Flexibility promoted, not rigid schemas

#### Catholic Fidelity
- [ ] Explicitly Catholic (not generic "classical")
- [ ] Liturgical rhythm mentioned
- [ ] Sacramental worldview evident
- [ ] Charity maintained (no moralizing)

#### Simplicity & Efficiency
- [ ] No unnecessary complexity
- [ ] Lean, focused content
- [ ] No superfluous elements
- [ ] Elegant component architecture

### Guardrails Validation

#### Scope Adherence
- [ ] Network promotion focused (not prototype school)
- [ ] Gymnasium gaps emphasized
- [ ] Homeschool strengths highlighted without prescribing
- [ ] User flows support founding/joining/adapting

#### Tech Adherence
- [ ] Next.js 14+ with TypeScript
- [ ] Tailwind CSS (no inline styles)
- [ ] Accessible (WCAG AA)
- [ ] Simple, no analytics/tracking

#### Ethical Standards
- [ ] Charitable tone throughout
- [ ] No moralizing ("treat users as adults")
- [ ] Urgent yet hopeful tone
- [ ] Boys-focused without being exclusive

---

## Task 3: User Flow Testing

### User Story 1: Founding Inspiration

**Persona:** Catholic father considering founding a classical school

**Journey:**
1. Land on hero → crisis hook resonates
2. Read syllogism preview → understands argument structure
3. Dive into Major Premise → sees diagnosis (screens/softness/specialization)
4. Read Minor Premise → learns Senior's four stages, gymnasium emphasis
5. Reach Conclusion → "Found a School" CTA
6. Click CTA → lands on `/engage` with Founder's Toolkit

**Validation:**
- [ ] Hero immediately confronts with crisis
- [ ] Gymnasium stage (7-13) repeatedly emphasized
- [ ] Three poisons clear and memorable
- [ ] Evidence from Senior/IHP/Scripture builds credibility
- [ ] Founder CTA prominent and actionable

### User Story 2: School Consideration

**Persona:** Catholic mother researching schools for her sons

**Journey:**
1. Land on hero → recognizes modern education failure
2. Read syllogism preview → understands classical alternative
3. Scan Major Premise → validates her concerns
4. Read Minor Premise → learns what poetic knowledge schools offer
5. Reach Conclusion → "Join a School" CTA
6. Click CTA → lands on `/schools` with searchable directory

**Validation:**
- [ ] Page builds case for classical education
- [ ] Practical examples (sport, Latin, adventure) tangible
- [ ] Counterarguments address her objections (rigor, elitism, practicality)
- [ ] School directory CTA clear

### User Story 3: Homeschool Adaptation

**Persona:** Homeschool mom seeking to apply Senior's philosophy at home

**Journey:**
1. Land on hero → relates to crisis
2. Read syllogism preview → curious about poetic knowledge
3. Skim Major Premise → confirms her instincts about modern education
4. Focus on Minor Premise → learns gymnasium stage specifics
5. Read Conclusion → "Adapt at Home" CTA + counterargument on elitism
6. Click CTA → lands on `/texts` with reading list and resources

**Validation:**
- [ ] Gymnasium stage practical and home-adaptable
- [ ] "Not elitist" objection explicitly addressed
- [ ] Home adaptation examples (outdoor play, Latin primers, nature walks)
- [ ] Texts CTA provides resources

---

## Task 4: SEO & Metadata

### Page Metadata

**File:** `app/(site)/philosophy/page.tsx`

```typescript
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Philosophy: Warrior Poets & Poetic Knowledge | Senior Schools Network',
  description:
    'A syllogistic argument for classical Catholic education rooted in poetic knowledge and the gymnasium stage. Modern education has failed. Poetic knowledge is the remedy. Warrior poets will restore Christendom.',
  keywords: [
    'poetic knowledge',
    'John Senior',
    'gymnasium stage',
    'classical education',
    'warrior poets',
    'Catholic education',
    'integrated humanities',
    'IHP',
    'homeschool classical',
  ],
  openGraph: {
    title: 'Warrior Poets: The Case for Poetic Knowledge',
    description:
      'Modern education has poisoned the well. Discover Senior's four stages and the gymnasium stage (7-13) as the path to forming warrior poets who will restore Christendom.',
    url: 'https://seniorschoolsnetwork.org/philosophy',
    siteName: 'Senior Schools Network',
    images: [
      {
        url: '/images/og/philosophy-warrior-poets.jpg',
        width: 1200,
        height: 630,
        alt: 'Warrior Poets: Poetic Knowledge & the Gymnasium Stage',
      },
    ],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Warrior Poets: The Case for Poetic Knowledge',
    description:
      'A syllogistic argument for classical Catholic education. Modern education has failed. Poetic knowledge is the remedy. Warrior poets will restore Christendom.',
    images: ['/images/og/philosophy-warrior-poets.jpg'],
  },
};
```

### Structured Data (JSON-LD)

**Add to page:**

```typescript
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __json: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Warrior Poets: The Case for Poetic Knowledge',
      description:
        'A syllogistic argument for classical Catholic education rooted in John Senior's philosophy.',
      author: {
        '@type': 'Organization',
        name: 'Senior Schools Network',
      },
      datePublished: new Date().toISOString(),
      keywords: ['poetic knowledge', 'John Senior', 'classical education', 'warrior poets'],
    }),
  }}
/>
```

---

## Task 5: Deployment Checklist

### Pre-Launch Technical Verification

#### Build & Deploy
- [ ] Run `npm run build` without errors
- [ ] Run `npm run lint` with zero warnings
- [ ] Run `npm test` with all tests passing
- [ ] Verify bundle size < 500KB (First Load JS)
- [ ] No console errors in production build

#### Environment Variables
- [ ] `NEXT_PUBLIC_SITE_URL` set correctly
- [ ] No secrets exposed in client-side code
- [ ] All API routes (if any) secured

#### Content Delivery
- [ ] All images optimized (WebP format where possible)
- [ ] Fonts preloaded (Playfair, Merriweather, Lato)
- [ ] Critical CSS inlined
- [ ] Non-critical assets lazy-loaded

#### SEO & Metadata
- [ ] `robots.txt` allows crawling
- [ ] `sitemap.xml` includes `/philosophy`
- [ ] Open Graph image exists (`/images/og/philosophy-warrior-poets.jpg`)
- [ ] Canonical URL set correctly
- [ ] Meta description < 160 characters

#### Monitoring & Analytics
- [ ] Error tracking enabled (if using service like Sentry)
- [ ] No analytics/tracking scripts (per guardrails)
- [ ] Performance monitoring configured
- [ ] Uptime monitoring configured (if using service)

#### Cross-Browser Final Check
- [ ] Chrome: Test all interactions
- [ ] Firefox: Test all interactions
- [ ] Safari: Test all interactions (especially iOS)
- [ ] Edge: Test all interactions

#### Mobile Testing
- [ ] iOS Safari: All sections render correctly
- [ ] Android Chrome: All sections render correctly
- [ ] Touch interactions work (tap, swipe)
- [ ] No horizontal scroll on mobile

---

## Task 6: Final Review Walkthrough

### Content Review Checklist
- [ ] Hero crisis hook immediate and compelling
- [ ] Syllogism preview introduces structure clearly
- [ ] Major Premise: Three poisons (screens/softness/specialization) diagnosed
- [ ] Major Premise A: Wonder loss + evidence
- [ ] Major Premise B: Gymnasium crisis + evidence
- [ ] Major Premise C: Specialization crisis + evidence
- [ ] Minor Premise: Four stages explained
- [ ] Minor Premise A: Nursery/Gymnasium/Poetic/Spiritual
- [ ] Minor Premise B: Gymnasium prescription (sport/Latin/adventure)
- [ ] Minor Premise C: Poetic integration + IHP model
- [ ] Conclusion: Warrior poet vision
- [ ] Conclusion: Counterarguments addressed
- [ ] Conclusion: Three CTAs (found/join/adapt)

### Philosophical Review Checklist
- [ ] Gymnasium stage (7-13) repeatedly emphasized as pivot
- [ ] Physical courage → moral courage logic clear
- [ ] Poetic knowledge as soil for science (not replacement)
- [ ] Urgency (crisis) balanced with hope (remedy)
- [ ] Boys-focused without excluding (natural emphasis)
- [ ] Catholic fidelity evident (liturgy, Scripture, Tradition)
- [ ] Charitable tone (no moralizing or elitism)

---

## Acceptance Criteria

- ✅ All quotes verified against source documents
- ✅ Philosophical alignment with copilot-instructions.md confirmed
- ✅ User flows tested for all three personas
- ✅ SEO metadata optimized
- ✅ Deployment checklist completed
- ✅ Cross-browser and mobile testing passed
- ✅ Final content and philosophical review completed
- ✅ Page ready for production launch

---

**Status:** Ready for Launch 🚀

**Post-Launch:**
- Monitor page performance (Lighthouse scores)
- Collect user feedback (via `/engage` form)
- Iterate based on analytics and user behavior (if analytics added in Phase 2)

---

**Philosophy Page Transformation Complete!**

From neutral explainer to syllogistic argument:
- **Major Premise:** Modern education has failed (screens/softness/specialization)
- **Minor Premise:** Poetic knowledge is the remedy (four stages, gymnasium pivot)
- **Conclusion:** Warrior poets will restore Christendom

Estimated Total Implementation Time: **35-40 hours**  
Complexity: **High**  
Dependencies: **All prompts 00-17**
