# Prompt 13: Major Premise Section B - Cultural Softness & Gymnasium Crisis

## Objective

Build the second subsection of the Major Premise, diagnosing the loss of physical vitality, risk, and ordered habit caused by cultural softness and the abandonment of the gymnasium stage.

---

## Section Strategy

### Messaging

1. **Diagnosis:** Modern culture has eliminated physical risk, producing soft, sedentary, morally weak boys
2. **Evidence:** Senior on gymnasium stage (7-13), Taylor on physical discipline, Scripture on training/discipline
3. **Impact:** Without physical courage, boys cannot develop moral courage—foundation collapses

### Structure

- **Continuation within SyllogismSection** (major-premise variant)
- **ProblemSolutionPanel** showing softness vs gymnasium rigor
- **EvidenceQuote** components with Senior, Taylor, Scripture
- **QuoteImageBreak** with adventure/risk imagery

---

## Implementation

**File:** `app/(site)/philosophy/page.tsx`

### Major Premise Section B

```typescript
{/* Major Premise Section A (from Prompt 12)... */}

{/* Subsection B: Cultural Softness */}
<div id="major-premise-b" className="space-y-12">
  <h3 className="font-playfair text-4xl font-bold text-red-900">
    B. Cultural Softness & the Gymnasium Crisis
  </h3>

  {/* Problem/Solution Panel */}
  <ProblemSolutionPanel
    layout="split"
    problemContent={
      <div className="space-y-6">
        <h4 className="font-playfair text-2xl font-bold text-charcoal">
          The Problem: Elimination of Risk
        </h4>
        <p className="text-lg leading-relaxed text-charcoal/90">
          Modern education has neutered boyhood. Dodgeball is banned. Tree-climbing is forbidden.
          Recess is supervised. Contact sports are replaced with "cooperative games." The result?
          Boys who have never experienced the thrill of danger or the discipline of physical
          training.
        </p>
        <p className="text-lg leading-relaxed text-charcoal/90">
          The gymnasium stage (ages 7-13) is the developmental window for physical formation:
          sport, Latin memory, ordered habit. Senior calls it "the years of discipline." Without
          this foundation, boys cannot develop the moral courage prerequisite for higher learning.
        </p>
        <div className="bg-red-50 border-l-4 border-red-700 p-6 rounded-r-lg">
          <p className="text-base font-semibold text-red-900">
            <span className="text-2xl mr-2" aria-hidden="true">
              ⚠️
            </span>
            Result: Physical softness produces moral weakness. Warrior poets cannot emerge from
            bubble-wrapped boyhood.
          </p>
        </div>
      </div>
    }
    solutionContent={
      <div className="space-y-6">
        <h4 className="font-playfair text-2xl font-bold text-charcoal">
          The Solution: Gymnasium Rigor
        </h4>
        <p className="text-lg leading-relaxed text-charcoal/90">
          Senior's gymnasium stage demands three things: <strong>Sport</strong> (rugby, boxing,
          swimming—full-contact, high-risk), <strong>Latin</strong> (memory training, ordered
          mind), and <strong>Adventure</strong> (camping, exploration, danger under benevolent
          supervision).
        </p>
        <p className="text-lg leading-relaxed text-charcoal/90">
          This is not optional enrichment. Physical courage and discipline are prerequisites for
          intellectual and spiritual formation. The boy who has never endured physical hardship
          cannot endure intellectual rigor or spiritual trial.
        </p>
        <div className="bg-green-50 border-l-4 border-green-700 p-6 rounded-r-lg">
          <p className="text-base font-semibold text-green-900">
            <span className="text-2xl mr-2" aria-hidden="true">
              ✓
            </span>
            Result: Physical resilience breeds moral courage. The warrior poet is forged in the
            gymnasium.
          </p>
        </div>
      </div>
    }
  />

  {/* Quote/Image Break */}
  <QuoteImageBreak
    quote="The gymnasium is not a luxury; it is a necessity. Without physical discipline, the soul cannot be formed."
    author="Dr. John Senior"
    source="The Death of Christian Culture"
    imagePath="/images/adventure/boys-climbing-cliff.jpg"
    imageAlt="Boys climbing a rocky cliff face together"
    imagePosition="right"
  />

  {/* Evidence Quotes */}
  <div className="space-y-8">
    <h4 className="font-playfair text-2xl font-bold text-forest text-center">
      Evidence from the Sources
    </h4>

    <EvidenceQuote
      variant="evidence"
      premiseType="major-premise"
      quote="The gymnasium stage—ages seven to thirteen—is the period of physical formation. Sport, Latin, and adventure build the ordered habits and physical courage without which higher learning is impossible. Modern education has abandoned this stage, producing boys who are intellectually precocious but morally and physically soft."
      author="Dr. John Senior"
      source="The Restoration of Christian Culture"
      sourceLink="/texts/restoration-of-christian-culture"
    />

    <EvidenceQuote
      variant="evidence"
      premiseType="major-premise"
      quote="Physical discipline is spiritual discipline. The boy who learns to endure cold water, hard ground, and aching muscles learns to endure intellectual frustration and spiritual dryness. Without the gymnasium, the poetic stage collapses—there is no soil for higher learning."
      author="James Taylor"
      source="Poetic Knowledge: The Recovery of Education"
      sourceLink="/texts/poetic-knowledge-recovery-education"
    />

    <EvidenceQuote
      variant="evidence"
      premiseType="major-premise"
      quote="Train up a child in the way he should go; even when he is old he will not depart from it."
      author="Proverbs 22:6"
      source="Scripture (ESV)"
    />

    <EvidenceQuote
      variant="evidence"
      premiseType="major-premise"
      quote="Do you not know that in a race all the runners run, but only one receives the prize? So run that you may obtain it. Every athlete exercises self-control in all things. They do it to receive a perishable wreath, but we an imperishable."
      author="1 Corinthians 9:24-25"
      source="Scripture (ESV)"
    />
  </div>

  {/* Practical Examples: Gymnasium Activities */}
  <div className="bg-parchment-light p-8 rounded-lg border-2 border-red-700/40">
    <h4 className="font-playfair text-2xl font-bold text-forest mb-6 text-center">
      What the Gymnasium Stage Looks Like
    </h4>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="space-y-2">
        <div className="text-3xl text-center" aria-hidden="true">
          ⚔️
        </div>
        <h5 className="font-playfair text-xl font-bold text-forest text-center">Sport</h5>
        <ul className="text-base text-charcoal/90 space-y-1 list-disc list-inside">
          <li>Rugby, boxing, wrestling</li>
          <li>Swimming (cold water)</li>
          <li>Long-distance running</li>
          <li>Team discipline</li>
        </ul>
      </div>

      <div className="space-y-2">
        <div className="text-3xl text-center" aria-hidden="true">
          📖
        </div>
        <h5 className="font-playfair text-xl font-bold text-forest text-center">Latin</h5>
        <ul className="text-base text-charcoal/90 space-y-1 list-disc list-inside">
          <li>Memory training</li>
          <li>Ordered syntax</li>
          <li>Declensions/conjugations</li>
          <li>Foundation for grammar</li>
        </ul>
      </div>

      <div className="space-y-2">
        <div className="text-3xl text-center" aria-hidden="true">
          🏕️
        </div>
        <h5 className="font-playfair text-xl font-bold text-forest text-center">Adventure</h5>
        <ul className="text-base text-charcoal/90 space-y-1 list-disc list-inside">
          <li>Camping (no phones)</li>
          <li>Rock climbing, hiking</li>
          <li>Survival skills</li>
          <li>Benevolent neglect</li>
        </ul>
      </div>
    </div>
    <p className="mt-6 text-center text-sm text-charcoal/70 italic">
      Ages 7-13: The window for physical and moral formation
    </p>
  </div>
</div>
```

---

## Content Specifications

### Subsection Title

- **Format:** "B. Cultural Softness & the Gymnasium Crisis"
- **Font:** Playfair Display, 4xl, bold
- **Color:** Red-900 (major premise accent)

### Problem Panel

- **Heading:** "The Problem: Elimination of Risk"
- **Examples:** Banned dodgeball, forbidden tree-climbing, supervised recess
- **Key Point:** Gymnasium stage (7-13) abandoned
- **Warning Box:** "Physical softness produces moral weakness. Warrior poets cannot emerge from bubble-wrapped boyhood."

### Solution Panel

- **Heading:** "The Solution: Gymnasium Rigor"
- **Three Components:** Sport (rugby/boxing), Latin (memory), Adventure (camping)
- **Key Argument:** Physical courage is prerequisite for intellectual/spiritual formation
- **Success Box:** "Physical resilience breeds moral courage. The warrior poet is forged in the gymnasium."

### Evidence Quotes

1. **Senior:** Gymnasium stage (7-13) as physical formation; abandonment produces soft boys
2. **Taylor:** Physical discipline = spiritual discipline; endurance training
3. **Scripture (Proverbs 22:6):** "Train up a child"
4. **Scripture (1 Corinthians 9:24-25):** Athletic self-control as metaphor

### Visual Break

- **QuoteImageBreak:** Senior on gymnasium necessity
- **Image:** Boys climbing cliff (adventure/risk)

### Practical Examples

- **Sport:** Rugby, boxing, swimming, running
- **Latin:** Memory, syntax, declensions
- **Adventure:** Camping, climbing, survival skills
- **Age Range:** 7-13 (repeated emphasis)

---

## Testing Checklist

### Visual Design
- [ ] Subsection B follows A seamlessly
- [ ] ProblemSolutionPanel maintains red accent
- [ ] QuoteImageBreak image on right
- [ ] Practical examples box has red border
- [ ] Grid layout responsive (3 cols → 1 col mobile)
- [ ] Evidence quotes consistent 8px red border

### Content
- [ ] Diagnosis: softness via risk elimination
- [ ] Specific examples (dodgeball, recess, etc.)
- [ ] Three gymnasium components (sport/Latin/adventure)
- [ ] Physical → moral → intellectual/spiritual logic clear
- [ ] Gymnasium stage (7-13) repeatedly emphasized
- [ ] Four sources quoted (Senior, Taylor, 2x Scripture)

### Interactivity
- [ ] ProblemSolutionPanel toggle works
- [ ] QuoteImageBreak responsive
- [ ] EvidenceQuote source links navigate
- [ ] Practical examples readable on mobile
- [ ] All components keyboard accessible

### Accessibility
- [ ] Headings maintain hierarchy (H3 > H4 > H5)
- [ ] Icons have aria-hidden
- [ ] List items semantic (<ul>, <li>)
- [ ] Color contrast passes WCAG AA
- [ ] Focus visible on interactive elements

---

## Acceptance Criteria

- ✅ Subsection B diagnoses cultural softness clearly
- ✅ Gymnasium stage (7-13) central to argument
- ✅ Three components (sport/Latin/adventure) specified
- ✅ Evidence from Senior, Taylor, Scripture
- ✅ Practical examples actionable

---

**Next:** Prompt 14: Major Premise Section C (Specialized Knowledge Crisis)

**Estimated Time:** 3 hours  
**Complexity:** High  
**Dependencies:** SyllogismSection, ProblemSolutionPanel, EvidenceQuote, QuoteImageBreak
