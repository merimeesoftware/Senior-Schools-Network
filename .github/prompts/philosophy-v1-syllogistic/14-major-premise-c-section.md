# Prompt 14: Major Premise Section C - Specialized Knowledge Crisis

## Objective

Build the third and final subsection of the Major Premise, diagnosing the poisoning of education by STEM-first specialization that bypasses the poetic stage, producing alienated technicians instead of integrated thinkers.

---

## Section Strategy

### Messaging

1. **Diagnosis:** STEM-first curriculum poisons the well by skipping poetic knowledge stage (13-17)
2. **Evidence:** Senior on poetic knowledge as soil, Taylor on connaturality, IHP on integrated humanities
3. **Impact:** Specialized skills without poetic roots breed alienation, utilitarianism, and spiritual emptiness

### Structure

- **Continuation within SyllogismSection** (major-premise variant)
- **ProblemSolutionPanel** showing STEM-first vs integrated learning
- **EvidenceQuote** components with Senior, Taylor, IHP, Scripture
- **Summary Box:** Three poisons recap (screens/softness/specialization)

---

## Implementation

**File:** `app/(site)/philosophy/page.tsx`

### Major Premise Section C

```typescript
{/* Major Premise Sections A, B (from Prompts 12-13)... */}

{/* Subsection C: Specialized Knowledge Crisis */}
<div id="major-premise-c" className="space-y-12">
  <h3 className="font-playfair text-4xl font-bold text-red-900">
    C. The Specialized Knowledge Crisis
  </h3>

  {/* Problem/Solution Panel */}
  <ProblemSolutionPanel
    layout="split"
    problemContent={
      <div className="space-y-6">
        <h4 className="font-playfair text-2xl font-bold text-charcoal">
          The Problem: STEM-First Curriculum
        </h4>
        <p className="text-lg leading-relaxed text-charcoal/90">
          Modern education rushes to specialization. By age 13, boys are pushed into STEM tracks,
          AP classes, and college prep—all before they have cultivated the poetic soil from which
          science, philosophy, and theology should naturally grow.
        </p>
        <p className="text-lg leading-relaxed text-charcoal/90">
          The consequence? Boys who can solve calculus problems but have never read a poem. Boys
          who memorize biology terms but have never felt wonder at a frog. Boys who ace SAT tests
          but are spiritually and aesthetically dead. Specialized knowledge without poetic
          knowledge produces alienation, not integration.
        </p>
        <div className="bg-red-50 border-l-4 border-red-700 p-6 rounded-r-lg">
          <p className="text-base font-semibold text-red-900">
            <span className="text-2xl mr-2" aria-hidden="true">
              ⚠️
            </span>
            Result: Alienated technicians, not warrior poets. Utilitarian minds severed from
            beauty, truth, and God.
          </p>
        </div>
      </div>
    }
    solutionContent={
      <div className="space-y-6">
        <h4 className="font-playfair text-2xl font-bold text-charcoal">
          The Solution: Poetic Knowledge as Foundation
        </h4>
        <p className="text-lg leading-relaxed text-charcoal/90">
          Senior's poetic stage (ages 13-17) is the fertile soil from which all higher learning
          must grow. Music, art, poetry, and philosophy—integrated through liturgical rhythm—train
          the boy to see reality as a whole, not as fragmented facts.
        </p>
        <p className="text-lg leading-relaxed text-charcoal/90">
          Only after poetic knowledge is established can science and specialization be introduced.
          The IHP model demonstrates this: three years of integrated humanities (Great Books, music,
          art) before any specialized study. The result? Students who pursue STEM careers with
          wonder, not just utility.
        </p>
        <div className="bg-green-50 border-l-4 border-green-700 p-6 rounded-r-lg">
          <p className="text-base font-semibold text-green-900">
            <span className="text-2xl mr-2" aria-hidden="true">
              ✓
            </span>
            Result: Integrated thinkers who see science, philosophy, and theology as unified
            expressions of truth.
          </p>
        </div>
      </div>
    }
  />

  {/* Evidence Quotes */}
  <div className="space-y-8">
    <h4 className="font-playfair text-2xl font-bold text-forest text-center">
      Evidence from the Sources
    </h4>

    <EvidenceQuote
      variant="evidence"
      premiseType="major-premise"
      quote="Poetic knowledge is not specialized knowledge but that connaturality and right harmony with things which Adam and Eve possessed in Eden. It is the soil from which science, philosophy, and theology grow. If you poison the soil, nothing true or beautiful can flourish."
      author="Dr. John Senior"
      source="The Restoration of Christian Culture"
      sourceLink="/texts/restoration-of-christian-culture"
    />

    <EvidenceQuote
      variant="evidence"
      premiseType="major-premise"
      quote="The modern school has become a factory for producing technicians. We train boys to manipulate the world, not to love it. Specialized knowledge without poetic knowledge breeds alienation—the boy becomes a stranger to reality, to himself, and to God."
      author="James Taylor"
      source="Poetic Knowledge: The Recovery of Education"
      sourceLink="/texts/poetic-knowledge-recovery-education"
    />

    <EvidenceQuote
      variant="evidence"
      premiseType="major-premise"
      quote="The Integrated Humanities Program exists because specialized knowledge has failed. We must restore the integrated vision—music, art, philosophy, theology—before we can safely introduce specialization. The poetic stage is not optional; it is prerequisite."
      author="Dr. Dennis Quinn"
      source="IHP Lecture I: The Restoration of Wonder"
      sourceLink="/texts/integrated-humanities-lecture"
    />

    <EvidenceQuote
      variant="evidence"
      premiseType="major-premise"
      quote="And whatever you do, in word or deed, do everything in the name of the Lord Jesus, giving thanks to God the Father through him."
      author="Colossians 3:17"
      source="Scripture (ESV)"
    />
  </div>

  {/* Visual Diagram: Poisoned Well */}
  <div className="max-w-3xl mx-auto">
    <div className="bg-parchment-light border-2 border-red-700/40 rounded-lg p-8 space-y-6">
      <h4 className="font-playfair text-2xl font-bold text-forest text-center">
        The Poisoned Well: STEM Without Poetic Soil
      </h4>

      <div className="flex items-center justify-center gap-8">
        {/* Modern Path (Poisoned) */}
        <div className="flex-1 space-y-4">
          <div className="text-center text-xs uppercase tracking-wide text-red-900 font-semibold">
            Modern Education
          </div>
          <div className="flex flex-col gap-2">
            <div className="bg-red-100 border-2 border-red-700 rounded p-3 text-center text-sm">
              <span className="text-xl mr-2" aria-hidden="true">
                📱
              </span>
              Screens (0-13)
            </div>
            <div className="text-center text-xs text-charcoal/50">↓</div>
            <div className="bg-red-100 border-2 border-red-700 rounded p-3 text-center text-sm line-through opacity-50">
              <span className="text-xl mr-2" aria-hidden="true">
                🛡️
              </span>
              Gymnasium (skipped)
            </div>
            <div className="text-center text-xs text-charcoal/50">↓</div>
            <div className="bg-red-100 border-2 border-red-700 rounded p-3 text-center text-sm line-through opacity-50">
              <span className="text-xl mr-2" aria-hidden="true">
                🎨
              </span>
              Poetic (skipped)
            </div>
            <div className="text-center text-xs text-charcoal/50">↓</div>
            <div className="bg-red-100 border-2 border-red-700 rounded p-3 text-center text-sm">
              <span className="text-xl mr-2" aria-hidden="true">
                🔬
              </span>
              STEM-first
            </div>
          </div>
          <div className="text-center text-xs font-semibold text-red-900 mt-4">
            = Alienated Technician
          </div>
        </div>

        {/* Classical Path (Fertile) */}
        <div className="flex-1 space-y-4">
          <div className="text-center text-xs uppercase tracking-wide text-green-900 font-semibold">
            Classical Education
          </div>
          <div className="flex flex-col gap-2">
            <div className="bg-green-100 border-2 border-green-700 rounded p-3 text-center text-sm">
              <span className="text-xl mr-2" aria-hidden="true">
                🌿
              </span>
              Nursery (0-7)
            </div>
            <div className="text-center text-xs text-charcoal/50">↓</div>
            <div className="bg-green-100 border-2 border-green-700 rounded p-3 text-center text-sm">
              <span className="text-xl mr-2" aria-hidden="true">
                🛡️
              </span>
              Gymnasium (7-13)
            </div>
            <div className="text-center text-xs text-charcoal/50">↓</div>
            <div className="bg-green-100 border-2 border-green-700 rounded p-3 text-center text-sm">
              <span className="text-xl mr-2" aria-hidden="true">
                🎨
              </span>
              Poetic (13-17)
            </div>
            <div className="text-center text-xs text-charcoal/50">↓</div>
            <div className="bg-green-100 border-2 border-green-700 rounded p-3 text-center text-sm">
              <span className="text-xl mr-2" aria-hidden="true">
                🔬
              </span>
              Science (from soil)
            </div>
          </div>
          <div className="text-center text-xs font-semibold text-green-900 mt-4">
            = Integrated Warrior Poet
          </div>
        </div>
      </div>

      <p className="text-center text-sm text-charcoal/70 italic">
        Specialization must grow from poetic soil, not replace it
      </p>
    </div>
  </div>
</div>

{/* Major Premise Summary */}
<div className="pt-16 border-t-4 border-red-700">
  <div className="max-w-4xl mx-auto space-y-8">
    <h3 className="font-playfair text-4xl font-bold text-forest text-center">
      Summary: The Three Poisons
    </h3>
    <p className="text-xl text-charcoal/90 text-center leading-relaxed">
      Modern education has systematically destroyed the gymnasium and poetic stages through three
      interconnected failures:
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-red-50 border-2 border-red-700 rounded-lg p-6 text-center space-y-3">
        <div className="text-5xl" aria-hidden="true">
          📱
        </div>
        <h4 className="font-playfair text-xl font-bold text-red-900">Screens</h4>
        <p className="text-base text-charcoal/80">Replace wonder & sensory integration</p>
      </div>

      <div className="bg-red-50 border-2 border-red-700 rounded-lg p-6 text-center space-y-3">
        <div className="text-5xl" aria-hidden="true">
          🛡️
        </div>
        <h4 className="font-playfair text-xl font-bold text-red-900">Softness</h4>
        <p className="text-base text-charcoal/80">Replace risk & physical discipline</p>
      </div>

      <div className="bg-red-50 border-2 border-red-700 rounded-lg p-6 text-center space-y-3">
        <div className="text-5xl" aria-hidden="true">
          🔬
        </div>
        <h4 className="font-playfair text-xl font-bold text-red-900">Specialization</h4>
        <p className="text-base text-charcoal/80">Replace integrated poetic knowledge</p>
      </div>
    </div>

    <div className="bg-red-100 border-4 border-red-700 rounded-lg p-8 text-center">
      <p className="text-2xl font-playfair font-bold text-red-900 mb-4">
        Conclusion of Major Premise:
      </p>
      <p className="text-xl text-charcoal/90 leading-relaxed">
        Modern education has <strong>failed our sons</strong> by poisoning the well of wonder,
        eliminating physical and moral formation, and rushing to utilitarian specialization. The
        gymnasium and poetic stages—ages 7-17—have been abandoned.
      </p>
    </div>
  </div>
</div>

</SyllogismSection>
```

---

## Content Specifications

### Subsection Title

- **Format:** "C. The Specialized Knowledge Crisis"
- **Font:** Playfair Display, 4xl, bold
- **Color:** Red-900 (major premise accent)

### Problem Panel

- **Heading:** "The Problem: STEM-First Curriculum"
- **Key Point:** Specialization before poetic soil is poison
- **Examples:** Calculus without poetry, biology without wonder, SAT prep without beauty
- **Warning Box:** "Alienated technicians, not warrior poets. Utilitarian minds severed from beauty, truth, and God."

### Solution Panel

- **Heading:** "The Solution: Poetic Knowledge as Foundation"
- **Key Point:** Poetic stage (13-17) as fertile soil for science
- **IHP Model:** 3 years integrated humanities before specialization
- **Success Box:** "Integrated thinkers who see science, philosophy, and theology as unified expressions of truth."

### Evidence Quotes

1. **Senior:** Poetic knowledge as Eden-like connaturality; poisoned soil produces nothing
2. **Taylor:** Specialized knowledge without poetic knowledge breeds alienation
3. **IHP (Quinn):** Integrated vision prerequisite to specialization
4. **Scripture (Colossians 3:17):** "Do everything in the name of the Lord" (integrated life)

### Visual Diagram

- **Poisoned Well:** Side-by-side comparison
  - Modern: Screens → (skip gymnasium) → (skip poetic) → STEM-first = Alienated Technician
  - Classical: Nursery → Gymnasium → Poetic → Science = Integrated Warrior Poet
- **Color Coding:** Red for modern (poisoned), green for classical (fertile)

### Three Poisons Summary

- **Box 1:** Screens (replace wonder)
- **Box 2:** Softness (replace risk)
- **Box 3:** Specialization (replace poetic knowledge)
- **Conclusion Box:** Major premise statement—modern education has failed

---

## Testing Checklist

### Visual Design
- [ ] Subsection C follows B seamlessly
- [ ] ProblemSolutionPanel maintains red accent
- [ ] Visual diagram clear (poisoned vs fertile paths)
- [ ] Three poisons summary boxes equal width
- [ ] Conclusion box prominent (4px border)
- [ ] Evidence quotes consistent 8px red border

### Content
- [ ] Diagnosis: STEM-first as poisoning
- [ ] Poetic stage (13-17) emphasized
- [ ] IHP model cited (3-year integrated humanities)
- [ ] Three poisons recap (screens/softness/specialization)
- [ ] Major premise conclusion clear and bold
- [ ] Four sources quoted (Senior, Taylor, IHP, Scripture)

### Interactivity
- [ ] ProblemSolutionPanel toggle works
- [ ] EvidenceQuote source links navigate
- [ ] Visual diagram readable on mobile (stacks)
- [ ] All components keyboard accessible
- [ ] Summary section anchors correctly

### Accessibility
- [ ] Headings maintain hierarchy (H3 > H4)
- [ ] Icons have aria-hidden
- [ ] Color contrast passes WCAG AA
- [ ] Visual diagram has text alternatives
- [ ] Focus visible on interactive elements

---

## Acceptance Criteria

- ✅ Subsection C diagnoses specialization crisis clearly
- ✅ Poetic stage as prerequisite for science
- ✅ Evidence from Senior, Taylor, IHP, Scripture
- ✅ Visual diagram contrasts poisoned vs fertile paths
- ✅ Three poisons summary completes Major Premise

---

**Next:** Prompt 15: Minor Premise Sections A-C (Poetic Knowledge Remedy)

**Estimated Time:** 3.5 hours  
**Complexity:** High  
**Dependencies:** SyllogismSection, ProblemSolutionPanel, EvidenceQuote
