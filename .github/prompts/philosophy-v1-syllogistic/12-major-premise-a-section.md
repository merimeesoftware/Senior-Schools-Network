# Prompt 12: Major Premise Section A - Loss of Wonder & Sensory Integration

## Objective

Build the first subsection of the Major Premise, diagnosing the loss of wonder and sensory integration caused by modern education's screen addiction and indoor confinement.

---

## Section Strategy

### Messaging

1. **Diagnosis:** Screens and indoor confinement have replaced outdoor wonder and sensory integration
2. **Evidence:** Senior on wonder, IHP on senses, Scripture on nature as revelation
3. **Impact:** Boys lose the foundational capacity for awe—prerequisite for all learning

### Structure

- **SyllogismSection** wrapper with red border (major-premise variant)
- **ProblemSolutionPanel** showing problem (screens) vs solution (nature/wonder)
- **EvidenceQuote** components with Senior, IHP, Scripture quotes
- **InteractiveStages** in crisis mode showing nursery/gymnasium failures

---

## Implementation

**File:** `app/(site)/philosophy/page.tsx`

### Major Premise Section A

```typescript
import { SyllogismSection } from '@/components/SyllogismSection';
import { ProblemSolutionPanel } from '@/components/ProblemSolutionPanel';
import { EvidenceQuote } from '@/components/EvidenceQuote';
import { InteractiveStages } from '@/components/InteractiveStages';
import { QuoteImageBreak } from '@/components/QuoteImageBreak';

export default function PhilosophyPage() {
  return (
    <main>
      {/* Hero, Preview sections... */}

      {/* MAJOR PREMISE */}
      <SyllogismSection variant="major-premise" number="I">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="font-playfair text-5xl font-bold text-forest">
              Major Premise: Modern Education Has Failed
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Three poisons—screens, softness, specialization—have destroyed the gymnasium stage
              and with it, the foundation for all higher learning.
            </p>
          </div>

          {/* Subsection A: Loss of Wonder */}
          <div id="major-premise-a" className="space-y-12">
            <h3 className="font-playfair text-4xl font-bold text-red-900">
              A. Loss of Wonder & Sensory Integration
            </h3>

            {/* Problem/Solution Panel */}
            <ProblemSolutionPanel
              layout="split"
              problemContent={
                <div className="space-y-6">
                  <h4 className="font-playfair text-2xl font-bold text-charcoal">
                    The Problem: Screen Addiction
                  </h4>
                  <p className="text-lg leading-relaxed text-charcoal/90">
                    The average American child now spends 7 hours per day on screens. Outdoor play
                    has declined by 50% in a single generation. The consequence? A generation of
                    boys who have never climbed a tree, caught a frog, or felt the terror and
                    thrill of real physical risk.
                  </p>
                  <p className="text-lg leading-relaxed text-charcoal/90">
                    Indoor confinement has replaced the gymnasium stage's natural habitat: fields,
                    forests, rivers. Without sensory integration—touch, smell, movement—boys cannot
                    develop the connaturality with reality that Senior calls "poetic knowledge."
                  </p>
                  <div className="bg-red-50 border-l-4 border-red-700 p-6 rounded-r-lg">
                    <p className="text-base font-semibold text-red-900">
                      <span className="text-2xl mr-2" aria-hidden="true">
                        ⚠️
                      </span>
                      Result: Wonder dies. The well is poisoned before age 13.
                    </p>
                  </div>
                </div>
              }
              solutionContent={
                <div className="space-y-6">
                  <h4 className="font-playfair text-2xl font-bold text-charcoal">
                    The Solution: Nature & Wonder
                  </h4>
                  <p className="text-lg leading-relaxed text-charcoal/90">
                    Poetic knowledge begins with wonder—not curiosity (which seeks explanations),
                    but awe before the sheer existence of things. Nature is the gymnasium for this
                    wonder: the forest, the field, the night sky.
                  </p>
                  <p className="text-lg leading-relaxed text-charcoal/90">
                    Senior's nursery and gymnasium stages demand outdoor immersion: "benevolent
                    neglect" where boys explore, risk, and discover without constant adult
                    mediation. Latin, sport, and adventure—not worksheets—form the curriculum.
                  </p>
                  <div className="bg-green-50 border-l-4 border-green-700 p-6 rounded-r-lg">
                    <p className="text-base font-semibold text-green-900">
                      <span className="text-2xl mr-2" aria-hidden="true">
                        ✓
                      </span>
                      Result: Wonder restored. The soil is fertile for higher learning.
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
                quote="Wonder is the first and most fundamental disposition of the soul, the beginning of all philosophy and all poetry. The child who has never felt wonder is already dead."
                author="Dr. John Senior"
                source="The Restoration of Christian Culture"
                sourceLink="/texts/restoration-of-christian-culture"
              />

              <EvidenceQuote
                variant="evidence"
                premiseType="major-premise"
                quote="The senses are the gateways to the soul. Without sensory integration—touch, taste, smell, sound, sight—the child cannot achieve connaturality with reality. Modern education isolates the mind from the body and both from the world."
                author="Dr. Dennis Quinn"
                source="IHP Lecture I: The Loss of the Senses"
                sourceLink="/texts/integrated-humanities-lecture"
              />

              <EvidenceQuote
                variant="evidence"
                premiseType="major-premise"
                quote="The heavens declare the glory of God, and the sky above proclaims his handiwork. Day to day pours out speech, and night to night reveals knowledge."
                author="Psalm 19:1-2"
                source="Scripture (ESV)"
              />
            </div>

            {/* Crisis Stages */}
            <div className="space-y-6">
              <h4 className="font-playfair text-2xl font-bold text-forest text-center">
                Where the Crisis Hits: Nursery & Gymnasium
              </h4>
              <InteractiveStages mode="crisis" />
              <p className="text-center text-sm text-charcoal/70 italic">
                Click each stage to see the modern failure
              </p>
            </div>
          </div>
        </div>
      </SyllogismSection>

      {/* Continue with Subsections B, C... */}
    </main>
  );
}
```

---

## Content Specifications

### Subsection Title

- **Format:** "A. Loss of Wonder & Sensory Integration"
- **Font:** Playfair Display, 4xl, bold
- **Color:** Red-900 (major premise accent)

### Problem Panel

- **Heading:** "The Problem: Screen Addiction"
- **Statistics:** 7 hrs/day screens, 50% decline in outdoor play
- **Key Point:** Indoor confinement replaces natural gymnasium habitat
- **Warning Box:** "Result: Wonder dies. The well is poisoned before age 13."

### Solution Panel

- **Heading:** "The Solution: Nature & Wonder"
- **Key Point:** Wonder (awe) vs curiosity (explanation-seeking)
- **Senior's Method:** Benevolent neglect, outdoor immersion, Latin/sport
- **Success Box:** "Result: Wonder restored. The soil is fertile for higher learning."

### Evidence Quotes

1. **Senior:** Wonder as first disposition of the soul
2. **IHP (Quinn):** Senses as gateways; sensory integration prerequisite
3. **Scripture:** Psalm 19 on nature as revelation

### Interactive Element

- **InteractiveStages** in crisis mode
- Focus on Nursery (0-7) and Gymnasium (7-13)
- Show screen replacement and outdoor decline

---

## Testing Checklist

### Visual Design
- [ ] SyllogismSection has red border (major-premise)
- [ ] ProblemSolutionPanel split view works
- [ ] Problem side grayscale/muted
- [ ] Solution side vibrant/green
- [ ] Evidence quotes have 8px red border
- [ ] InteractiveStages shows crisis mode

### Content
- [ ] Diagnosis clear: screens/indoor confinement
- [ ] Statistics cited (7 hrs/day, 50% decline)
- [ ] Wonder vs curiosity distinction explained
- [ ] Senior's "benevolent neglect" referenced
- [ ] Gymnasium stage (7-13) emphasized
- [ ] Three sources quoted (Senior, IHP, Scripture)

### Interactivity
- [ ] ProblemSolutionPanel toggle works (if layout="toggle")
- [ ] InteractiveStages clickable
- [ ] EvidenceQuote source links navigate
- [ ] Smooth scroll to subsection anchor
- [ ] All components keyboard accessible

### Accessibility
- [ ] Headings follow semantic hierarchy (H2 > H3 > H4)
- [ ] Warning/success icons have aria-hidden
- [ ] Color contrast passes WCAG AA
- [ ] Evidence quotes use <blockquote> and <cite>
- [ ] Focus visible on interactive elements

---

## Acceptance Criteria

- ✅ Subsection A diagnoses wonder loss clearly
- ✅ Problem/solution contrast visual and compelling
- ✅ Evidence from Senior, IHP, Scripture
- ✅ Gymnasium stage emphasized as crisis point
- ✅ Interactive elements enhance argument

---

**Next:** Prompt 13: Major Premise Section B (Cultural Softness)

**Estimated Time:** 3 hours  
**Complexity:** High  
**Dependencies:** SyllogismSection, ProblemSolutionPanel, EvidenceQuote, InteractiveStages
