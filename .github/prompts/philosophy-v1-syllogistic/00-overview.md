# Philosophy Page Syllogistic Transformation - Overview

## Project Goal

Transform the philosophy page from a neutral **explainer** into a compelling **syllogistic argument** that:
1. **Diagnoses** modern education's failure (Major Premise)
2. **Prescribes** poetic knowledge as remedy (Minor Premise)
3. **Envisions** warrior poets as outcome (Conclusion)

**Primary Audience:** Parents of boys (ages 7-13) seeking alternatives to cultural softness and mechanized education.

**Tone Shift:** From academic/explanatory → Urgent yet hopeful, unapologetically classical, vivid over abstract.

---

## Implementation Phases

### Week 1: Content & Quote Curation (User-Driven)
**Status:** In Progress  
**Owner:** User curates quotes from PHILOSOPHICAL-AXIOMS.md

**Deliverables:**
- Hero section quotes (crisis + remedy)
- Major Premise quotes (A: sensory loss, B: gymnasium crisis, C: fragmentation)
- Minor Premise quotes (A: poetic foundation, B: adventure, C: liturgy)
- Conclusion quotes (warrior poets vision)
- Counterarguments quotes (elitism, boys-focus, practicality)

---

### Week 2: Component Development
**Status:** Ready for Implementation  
**Prompts:** 01-08

**New Components:**
1. `<SyllogismSection>` - Container for Major/Minor/Conclusion
2. `<ProblemSolutionPanel>` - Dual-column problem/solution display
3. `<EvidenceQuote>` - Enhanced QuoteCard for evidence
4. `<ProgressIndicator>` - Sticky scroll tracker
5. `<CounterargumentAccordion>` - FAQ-style objection handling

**Component Enhancements:**
6. `<Accordion>` - Add "argument" variant (✅ Complete)

**Note:** RotatingQuotes and InteractiveStages will remain unchanged - components are good as-is.

---

### Week 3: Page Rebuild & Integration
**Status:** Ready for Implementation  
**Prompts:** 07-10

**Page Sections:**
1. Hero section (use existing HeroSection component with curated quotes)
2. Major Premise (3 subsections: A, B, C)
3. Minor Premise (3 subsections: A, B, C)
4. Conclusion (vision + counterarguments)
5. QuoteImageBreak sections (optional, wire up as needed)
6. Resources (existing, repositioned)

---

### Week 4: Polish, Testing & Launch
**Status:** Ready for Implementation  
**Prompts:** 16-18

**Deliverables:**
1. Tone/voice pass on all copy
2. Image sourcing/CSS filters for "problem" sections
3. CSS styling refinements
4. Performance audit
5. Accessibility audit
6. Cross-browser testing
7. SEO structured data

---

## Prompt Sequence

| # | Prompt | Component/Section | Effort | Dependencies |
|---|--------|------------------|--------|--------------|
| 01 | SyllogismSection Component | New component | Medium | None |
| 02 | ProblemSolutionPanel Component | New component | Medium | None |
| 03 | EvidenceQuote Component | New component | Low | QuoteCard |
| 04 | ProgressIndicator Component | New component | Medium | None |
| 05 | CounterargumentAccordion Component | New component | Medium | Accordion |
| 06 | Accordion Enhancement | Variant addition | Low | None |
| 07 | Major Premise Section | Page section | High | All components |
| 08 | Minor Premise Section | Page section | High | All components |
| 09 | Conclusion Section | Page section | Medium | CounterargumentAccordion |
| 10 | Resources Section Reposition | Page section | Low | None |
| 11 | CSS Styling & Filters | Styling | Medium | All sections |
| 12 | Performance & Accessibility | Testing | Medium | All complete |
| 13 | Final Integration & Launch | Deployment | Low | All validated |

---

## Key Principles

### Philosophical Alignment
- ✅ **Urgent yet hopeful** - Crisis diagnosis balanced with remedy
- ✅ **Unapologetically classical** - Latin terms, patristic quotes, Catholic fidelity
- ✅ **Vivid over abstract** - Concrete imagery ("gem-like flames") not edu-speak
- ✅ **Boys-focused** - Explicit emphasis on gymnasium stage crisis
- ✅ **Evidence-driven** - Every claim anchored in Senior, IHP, Chesterton, Scripture

### Technical Constraints
- ✅ **Accessibility first** - WCAG AA compliance, ARIA landmarks
- ✅ **Performance conscious** - Lazy loading, optimized images
- ✅ **Mobile responsive** - Touch targets, readable text, appropriate stacking
- ✅ **SEO optimized** - Structured data, semantic HTML, meta tags

### Content Guidelines
- ✅ **Active voice dominates** - "Modern education poisons" not "is poisoned by"
- ✅ **Rhetorical questions sparingly** - "Where are the forests?" for urgency
- ✅ **Quote extensively** - Senior, Chesterton, Tolkien, Scripture as authorities
- ✅ **No fabrication** - All quotes from uploaded texts, properly attributed

---

## Success Metrics

### Quantitative
- **Engagement:** Avg time on page increases to 5+ minutes (baseline: ~2 min)
- **Conversion:** Click-through to `/schools` or `/engage` increases 30%
- **Completion:** 60%+ visitors scroll to Conclusion section
- **Return:** Bounce rate decreases to <40% (baseline: ~55%)

### Qualitative
- User testimonials mention "compelling argument" or "convinced me"
- Educators cite philosophy page in discussions/social media
- Reduced confusion about "what is Senior philosophy?" in inquiries
- Positive sentiment in email feedback re: clarity and urgency

---

## Implementation Notes

### Each Prompt Should Include:
1. **Component/section specification** - TypeScript interfaces, props, features
2. **Implementation code** - Complete, tested, ready-to-use
3. **Usage examples** - How to integrate with existing code
4. **Testing checklist** - Accessibility, performance, UX validation
5. **Acceptance criteria** - Clear definition of "done"

### Iteration Process:
1. User reads prompt
2. AI implements component/section
3. User tests in browser
4. User provides feedback
5. AI adjusts if needed
6. Move to next prompt

---

## Current Status

**Week 1:** Complete - Components 01-06 implemented and tested (✅)

**Next Action:** Proceed to Prompt 07 (Major Premise Section - Page Rebuild)

---

## Reference Documents

- **Master Plan:** `.github/docs/temp/philosophy-page-optimization-plan.md`
- **Quote Source:** `PHILOSOPHICAL-AXIOMS.md`
- **Current Page:** `app/(site)/philosophy/page.tsx`
- **Component Library:** `components/` directory
- **Content Functions:** `lib/content/` directory

---

**Last Updated:** November 7, 2025  
**Phase:** Week 1 - Content Curation  
**Next Prompt:** 01-syllogism-section-component.md (when quotes ready)
