# Prompt 15: Minor Premise Sections - Poetic Knowledge Remedy

## Objective

Build the Minor Premise section presenting Senior's four stages and poetic knowledge as the remedy to modern education's failure. This section includes three subsections (A, B, C) with green styling to contrast the red Major Premise.

---

## Section Strategy

### Messaging

1. **A. The Four Stages:** Nursery (0-7), Gymnasium (7-13), Poetic (13-17), Spiritual (17+)
2. **B. Gymnasium Restoration:** Physical vitality, Latin memory, adventurous risk as foundation
3. **C. Poetic Integration:** Music, art, philosophy grow from gymnasium soil; science comes last

### Structure

- **SyllogismSection** wrapper with green border (minor-premise variant)
- **InteractiveStages** in default (solution) mode
- **ProblemSolutionPanel** showing Senior's prescription
- **EvidenceQuote** components with green borders

---

## Implementation

**File:** `app/(site)/philosophy/page.tsx`

### Minor Premise Section

```typescript
{/* MINOR PREMISE */}
<SyllogismSection variant="minor-premise" number="II">
  <div className="max-w-6xl mx-auto space-y-16">
    {/* Section Header */}
    <div className="text-center space-y-4">
      <h2 className="font-playfair text-5xl font-bold text-forest">
        Minor Premise: Poetic Knowledge Is the Remedy
      </h2>
      <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
        Senior's four stages restore the natural order: wonder, discipline, integration, and
        wisdom. The gymnasium stage (7-13) is the pivot—building physical courage and ordered
        habit as prerequisites for poetic and spiritual formation.
      </p>
    </div>

    {/* Subsection A: The Four Stages */}
    <div id="minor-premise-a" className="space-y-12">
      <h3 className="font-playfair text-4xl font-bold text-green-900">
        A. The Four Stages of Restoration
      </h3>

      <p className="text-lg leading-relaxed text-charcoal/90 max-w-4xl mx-auto">
        Dr. John Senior's model for Christian education follows the natural developmental stages,
        each building on the previous. These are not arbitrary divisions but organic phases
        corresponding to the child's physical, intellectual, and spiritual maturation.
      </p>

      {/* Interactive Stages Component */}
      <InteractiveStages mode="default" />

      {/* Evidence Quotes */}
      <div className="space-y-8 mt-12">
        <EvidenceQuote
          variant="evidence"
          premiseType="minor-premise"
          quote="The four stages are not a curriculum but a way of life. Nursery is wonder. Gymnasium is discipline. Poetic is integration. Spiritual is wisdom. Skip any stage and the whole structure collapses."
          author="Dr. John Senior"
          source="The Restoration of Christian Culture"
          sourceLink="/texts/restoration-of-christian-culture"
        />

        <EvidenceQuote
          variant="evidence"
          premiseType="minor-premise"
          quote="Poetic knowledge is not specialized knowledge but that connaturality and right harmony with things which Adam and Eve possessed in Eden. It must be cultivated through the stages, beginning with sensory wonder and culminating in liturgical wisdom."
          author="Dr. John Senior"
          source="The Restoration of Christian Culture"
          sourceLink="/texts/restoration-of-christian-culture"
        />

        <EvidenceQuote
          variant="evidence"
          premiseType="minor-premise"
          quote="Train up a child in the way he should go; even when he is old he will not depart from it."
          author="Proverbs 22:6"
          source="Scripture (ESV)"
        />
      </div>
    </div>

    {/* Subsection B: Gymnasium Restoration */}
    <div id="minor-premise-b" className="space-y-12">
      <h3 className="font-playfair text-4xl font-bold text-green-900">
        B. The Gymnasium Stage: Foundation for Warriors
      </h3>

      <ProblemSolutionPanel
        layout="split"
        problemContent={
          <div className="space-y-6">
            <h4 className="font-playfair text-2xl font-bold text-charcoal">
              What Modern Education Skips
            </h4>
            <p className="text-lg leading-relaxed text-charcoal/90">
              The gymnasium stage (ages 7-13) has been abandoned entirely. Boys go from nursery
              distractions to academic pressure without the intervening years of physical and
              moral formation. The result? Weak bodies, undisciplined minds, cowardly hearts.
            </p>
            <div className="bg-red-50 border-l-4 border-red-700 p-4 rounded-r-lg">
              <p className="text-sm font-semibold text-red-900">
                Without the gymnasium, the poetic stage collapses. There is no soil for higher
                learning.
              </p>
            </div>
          </div>
        }
        solutionContent={
          <div className="space-y-6">
            <h4 className="font-playfair text-2xl font-bold text-charcoal">
              Senior's Gymnasium Prescription
            </h4>
            <p className="text-lg leading-relaxed text-charcoal/90">
              The gymnasium stage demands three things: <strong>Sport</strong> (rugby, boxing,
              swimming—full-contact, dangerous), <strong>Latin</strong> (memory training, ordered
              syntax), and <strong>Adventure</strong> (camping, climbing, exploration without
              constant supervision).
            </p>
            <p className="text-lg leading-relaxed text-charcoal/90">
              This is the pivot stage. Physical courage and discipline built here become the
              foundation for intellectual rigor (poetic stage) and spiritual trial (spiritual
              stage). The warrior poet is forged in the gymnasium.
            </p>
            <div className="bg-green-50 border-l-4 border-green-700 p-4 rounded-r-lg">
              <p className="text-sm font-semibold text-green-900">
                Restore the gymnasium, and the rest follows. Skip it, and nothing else works.
              </p>
            </div>
          </div>
        }
      />

      {/* Evidence Quotes */}
      <div className="space-y-8 mt-12">
        <EvidenceQuote
          variant="evidence"
          premiseType="minor-premise"
          quote="The gymnasium is not a luxury; it is a necessity. Without physical discipline, the soul cannot be formed. The boy who has never endured cold water, hard ground, and aching muscles cannot endure intellectual frustration or spiritual dryness."
          author="Dr. John Senior"
          source="The Death of Christian Culture"
          sourceLink="/texts/death-of-christian-culture"
        />

        <EvidenceQuote
          variant="evidence"
          premiseType="minor-premise"
          quote="Every athlete exercises self-control in all things. They do it to receive a perishable wreath, but we an imperishable."
          author="1 Corinthians 9:25"
          source="Scripture (ESV)"
        />

        <EvidenceQuote
          variant="evidence"
          premiseType="minor-premise"
          quote="Physical courage precedes moral courage. The boy who climbs the cliff, swims the icy river, and faces the opponent in the ring learns courage that transfers to every sphere: intellectual, moral, spiritual."
          author="James Taylor"
          source="Poetic Knowledge: The Recovery of Education"
          sourceLink="/texts/poetic-knowledge-recovery-education"
        />
      </div>
    </div>

    {/* Subsection C: Poetic Integration */}
    <div id="minor-premise-c" className="space-y-12">
      <h3 className="font-playfair text-4xl font-bold text-green-900">
        C. The Poetic Stage: Integrated Learning
      </h3>

      <p className="text-lg leading-relaxed text-charcoal/90 max-w-4xl mx-auto">
        Only after the gymnasium lays the foundation can the poetic stage (ages 13-17) flourish.
        Here, music, art, poetry, and philosophy are integrated—not as isolated subjects, but as
        expressions of a unified vision of reality. Science comes last, growing from this fertile
        poetic soil.
      </p>

      {/* IHP Model Example */}
      <div className="bg-parchment-light border-2 border-green-700/40 rounded-lg p-8 space-y-6">
        <h4 className="font-playfair text-2xl font-bold text-forest text-center">
          The IHP Model: Integrated Humanities
        </h4>
        <p className="text-base text-charcoal/90 leading-relaxed">
          The Integrated Humanities Program at the University of Kansas (founded by Senior, Quinn,
          and Nelick) demonstrates poetic education in practice. Students spend three years
          studying Great Books, Gregorian chant, sacred art, and philosophy—all integrated through
          liturgical rhythm and natural law. Only after this foundation do they pursue specialized
          study.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h5 className="font-playfair text-lg font-bold text-green-900">
              What They Study:
            </h5>
            <ul className="text-base text-charcoal/90 space-y-1 list-disc list-inside">
              <li>Homer, Virgil, Dante</li>
              <li>Gregorian chant, polyphony</li>
              <li>Plato, Aristotle, Aquinas</li>
              <li>Sacred art (Byzantine, medieval)</li>
              <li>Natural philosophy before modern science</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="font-playfair text-lg font-bold text-green-900">
              What They Don't Study (Yet):
            </h5>
            <ul className="text-base text-charcoal/90 space-y-1 list-disc list-inside">
              <li>Career-focused majors</li>
              <li>Modern political theory</li>
              <li>Specialized STEM tracks</li>
              <li>Pop culture or current events</li>
              <li>Anything divorced from liturgical context</li>
            </ul>
          </div>
        </div>

        <p className="text-center text-sm text-charcoal/70 italic">
          First integration, then specialization. First wonder, then analysis.
        </p>
      </div>

      {/* Evidence Quotes */}
      <div className="space-y-8 mt-12">
        <EvidenceQuote
          variant="evidence"
          premiseType="minor-premise"
          quote="The Integrated Humanities Program exists because specialized knowledge has failed. We restore the integrated vision—music, art, philosophy, theology—before we introduce specialization. The poetic stage is not optional; it is prerequisite."
          author="Dr. Dennis Quinn"
          source="IHP Lecture I: The Restoration of Wonder"
          sourceLink="/texts/integrated-humanities-lecture"
        />

        <EvidenceQuote
          variant="evidence"
          premiseType="minor-premise"
          quote="Music, art, and poetry are not electives or enrichment. They are the soil from which science, theology, and philosophy grow. If the soil is poisoned, nothing true or beautiful can flourish."
          author="James Taylor"
          source="Poetic Knowledge: The Recovery of Education"
          sourceLink="/texts/poetic-knowledge-recovery-education"
        />

        <EvidenceQuote
          variant="evidence"
          premiseType="minor-premise"
          quote="Finally, brothers, whatever is true, whatever is honorable, whatever is just, whatever is pure, whatever is lovely, whatever is commendable, if there is any excellence, if there is anything worthy of praise, think about these things."
          author="Philippians 4:8"
          source="Scripture (ESV)"
        />
      </div>
    </div>

    {/* Minor Premise Summary */}
    <div className="pt-16 border-t-4 border-green-700">
      <div className="max-w-4xl mx-auto space-y-8">
        <h3 className="font-playfair text-4xl font-bold text-forest text-center">
          Summary: The Remedy Is Clear
        </h3>

        <div className="bg-green-100 border-4 border-green-700 rounded-lg p-8 text-center">
          <p className="text-2xl font-playfair font-bold text-green-900 mb-4">
            Conclusion of Minor Premise:
          </p>
          <p className="text-xl text-charcoal/90 leading-relaxed">
            Poetic knowledge—cultivated through Senior's four stages (nursery, gymnasium, poetic,
            spiritual)—is the remedy to modern education's failure. The <strong>gymnasium stage
            (7-13)</strong> is the pivot: physical courage and ordered habit lay the foundation for
            all higher learning. Restore the gymnasium, integrate the poetic, and warrior poets will
            emerge.
          </p>
        </div>
      </div>
    </div>
  </div>
</SyllogismSection>
```

---

## Testing Checklist

### Visual Design
- [ ] Green border (minor-premise variant)
- [ ] InteractiveStages in default mode
- [ ] ProblemSolutionPanel maintains green accent
- [ ] Evidence quotes have 8px green border
- [ ] IHP model box readable and clear
- [ ] Summary box prominent (4px border)

### Content
- [ ] Four stages explained (nursery/gymnasium/poetic/spiritual)
- [ ] Gymnasium stage emphasized as pivot
- [ ] Three gymnasium components (sport/Latin/adventure)
- [ ] IHP model cited with specifics
- [ ] Poetic stage as foundation for science
- [ ] Minor premise conclusion clear

### Accessibility
- [ ] Headings follow hierarchy (H2 > H3 > H4 > H5)
- [ ] Interactive elements keyboard accessible
- [ ] Color contrast passes WCAG AA
- [ ] Evidence quotes semantic markup
- [ ] Focus visible

---

**Next:** Prompt 16: Conclusion Section (Warrior Poets Vision)

**Estimated Time:** 4 hours  
**Complexity:** High
