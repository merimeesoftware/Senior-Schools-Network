# Prompt 22: Restoration Subsections - Extract Part II Components

**Phase**: 3 of 5 (Subsection Component Extraction - Part II)  
**Dependencies**: Prompt 21 (Part I subsections complete)  
**Estimated Time**: 45 minutes

---

## Goal

Extract Part II (The Restoration) subsections A, B, and C from page.tsx into dedicated components, utilizing pattern components from Phase 1. This removes ~235 lines of inline JSX from page.tsx.

---

## Context

After Prompt 21, Part I (The Crisis) is fully componentized:
- CrisisSubsectionA, B, C created and tested
- ~300 lines removed from page.tsx
- Pattern components in use (CardGrid, EvidenceQuoteGroup, etc.)

Now we extract Part II (The Restoration) subsections:
- **RestorationSubsectionA**: The Four Stages of Restoration (~80 lines inline)
- **RestorationSubsectionB**: The Gymnasium Stage: Foundation for Warriors (~80 lines inline)
- **RestorationSubsectionC**: The Poetic Stage: Integrated Learning (~75 lines inline)

---

## Component Specifications

### 1. RestorationSubsectionA Component

**File**: `components/philosophy/RestorationSubsectionA.tsx`

**Purpose**: Subsection A of Part II - The Four Stages of Restoration. Shows Senior's developmental model with InteractiveStages component.

**TypeScript Interface**:
```typescript
interface RestorationSubsectionAProps {
  className?: string;
}
```

**Content Structure**:
1. **Heading**: "A. The Four Stages of Restoration"
2. **Introductory paragraph**: Explanation of Senior's four stages
3. **InteractiveStages**: Default mode (not crisis) showing restoration path
4. **EvidenceQuoteGroup**: 3 quotes (Senior x2, Proverbs 22:6)

**Extracted from page.tsx lines**: ~800-880

**Example Structure**:
```tsx
export function RestorationSubsectionA({ className }: RestorationSubsectionAProps) {
  return (
    <div id="minor-premise-a" className={cn("space-y-12", className)}>
      <h3 className="font-playfair text-4xl font-bold text-green-900">
        A. The Four Stages of Restoration
      </h3>

      <p className="text-lg leading-relaxed text-charcoal/90 max-w-4xl mx-auto">
        Dr. John Senior's model for Christian education follows the natural developmental
        stages, each building on the previous. These are not arbitrary divisions but organic
        phases corresponding to the child's physical, intellectual, and spiritual maturation.
      </p>

      <InteractiveStages crisisMode={false} />

      <EvidenceQuoteGroup
        variant="minor-premise"
        quotes={[
          {
            quote: "The four stages are not a curriculum but a way of life. Nursery is wonder...",
            author: "Dr. John Senior",
            source: "The Restoration of Christian Culture",
            showSourceLink: true,
            sourceSlug: "restoration-of-christian-culture"
          },
          {
            quote: "Poetic knowledge is not specialized knowledge but that connaturality...",
            author: "Dr. John Senior",
            source: "The Restoration of Christian Culture",
            showSourceLink: true,
            sourceSlug: "restoration-of-christian-culture"
          },
          {
            quote: "Train up a child in the way he should go; even when he is old he will not depart from it.",
            author: "Proverbs 22:6",
            source: "Scripture (ESV)"
          }
        ]}
      />
    </div>
  );
}
```

**Test File**: `components/philosophy/__tests__/RestorationSubsectionA.test.tsx`

**Test Coverage** (10 tests):
1. Renders heading "A. The Four Stages of Restoration"
2. Renders introductory paragraph
3. Renders InteractiveStages in default mode (not crisis)
4. Renders EvidenceQuoteGroup with 3 quotes
5. Has correct id attribute (minor-premise-a)
6. Applies custom className
7. All text content present
8. No console errors/warnings
9. Matches snapshot
10. Accessibility: proper heading hierarchy

---

### 2. RestorationSubsectionB Component

**File**: `components/philosophy/RestorationSubsectionB.tsx`

**Purpose**: Subsection B of Part II - The Gymnasium Stage: Foundation for Warriors. Emphasizes physical discipline as prerequisite for higher learning.

**TypeScript Interface**:
```typescript
interface RestorationSubsectionBProps {
  className?: string;
}
```

**Content Structure**:
1. **Heading**: "B. The Gymnasium Stage: Foundation for Warriors"
2. **ProblemSolutionPanel**: What Modern Education Skips vs Senior's Gymnasium Prescription
3. **EvidenceQuoteGroup**: 3 quotes (Senior, 1 Cor 9:25, Taylor)

**Extracted from page.tsx lines**: ~880-960

**Example Structure**:
```tsx
export function RestorationSubsectionB({ className }: RestorationSubsectionBProps) {
  return (
    <div id="minor-premise-b" className={cn("space-y-12", className)}>
      <h3 className="font-playfair text-4xl font-bold text-green-900">
        B. The Gymnasium Stage: Foundation for Warriors
      </h3>

      <ProblemSolutionPanel
        problemTitle="What Modern Education Skips"
        problemContent="The gymnasium stage (ages 7-13) has been abandoned entirely. Boys go from nursery distractions to academic pressure without the intervening years of physical and moral formation. The result? Weak bodies, undisciplined minds, cowardly hearts."
        problemConclusion="Without the gymnasium, the poetic stage collapses. There is no soil for higher learning."
        solutionTitle="Senior's Gymnasium Prescription"
        solutionContent="The gymnasium stage demands three things: Sport (rugby, boxing, swimming—full-contact, dangerous), Latin (memory training, ordered syntax), and Adventure (camping, climbing, exploration without constant supervision). This is the pivot stage. Physical courage and discipline built here become the foundation for intellectual rigor (poetic stage) and spiritual trial (spiritual stage). The warrior poet is forged in the gymnasium."
        solutionConclusion="Restore the gymnasium, and the rest follows. Skip it, and nothing else works."
      />

      <EvidenceQuoteGroup
        variant="minor-premise"
        quotes={[
          {
            quote: "The gymnasium is not a luxury; it is a necessity. Without physical discipline, the soul cannot be formed...",
            author: "Dr. John Senior",
            source: "The Death of Christian Culture",
            showSourceLink: true,
            sourceSlug: "death-of-christian-culture"
          },
          {
            quote: "Every athlete exercises self-control in all things. They do it to receive a perishable wreath, but we an imperishable.",
            author: "1 Corinthians 9:25",
            source: "Scripture (ESV)"
          },
          {
            quote: "Physical courage precedes moral courage. The boy who climbs the cliff, swims the icy river...",
            author: "James Taylor",
            source: "Poetic Knowledge: The Recovery of Education",
            showSourceLink: true,
            sourceSlug: "poetic-knowledge-recovery-education"
          }
        ]}
      />
    </div>
  );
}
```

**Test File**: `components/philosophy/__tests__/RestorationSubsectionB.test.tsx`

**Test Coverage** (10 tests):
1. Renders heading "B. The Gymnasium Stage: Foundation for Warriors"
2. Renders ProblemSolutionPanel component
3. Renders EvidenceQuoteGroup with 3 quotes
4. Has correct id attribute (minor-premise-b)
5. Applies custom className
6. All text content present
7. No console errors/warnings
8. Matches snapshot
9. Accessibility: proper heading hierarchy
10. Variant styling correct (green theme for minor-premise)

---

### 3. RestorationSubsectionC Component

**File**: `components/philosophy/RestorationSubsectionC.tsx`

**Purpose**: Subsection C of Part II - The Poetic Stage: Integrated Learning. Shows IHP model and culminates with Minor Premise summary.

**TypeScript Interface**:
```typescript
interface RestorationSubsectionCProps {
  className?: string;
}
```

**Content Structure**:
1. **Heading**: "C. The Poetic Stage: Integrated Learning"
2. **Introductory paragraph**: Poetic stage builds on gymnasium
3. **StudyGrid**: IHP Model showing integrated vs specialized study
4. **EvidenceQuoteGroup**: 3 quotes (Quinn, Taylor, Philippians 4:8)
5. **SummaryBox**: Minor Premise Summary (The Remedy Is Clear)

**Extracted from page.tsx lines**: ~960-1040

**Example Structure**:
```tsx
export function RestorationSubsectionC({ className }: RestorationSubsectionCProps) {
  return (
    <div id="minor-premise-c" className={cn("space-y-12", className)}>
      <h3 className="font-playfair text-4xl font-bold text-green-900">
        C. The Poetic Stage: Integrated Learning
      </h3>

      <p className="text-lg leading-relaxed text-charcoal/90 max-w-4xl mx-auto">
        Only after the gymnasium lays the foundation can the poetic stage (ages 13-17) flourish.
        Here, music, art, poetry, and philosophy are integrated—not as isolated subjects, but as
        expressions of a unified vision of reality. Science comes last, growing from this fertile
        poetic soil.
      </p>

      <StudyGrid
        title="The IHP Model: Integrated Humanities"
        description="The Integrated Humanities Program at the University of Kansas (founded by Senior, Quinn, and Nelick) demonstrates poetic education in practice. Students spend three years studying Great Books, Gregorian chant, sacred art, and philosophy—all integrated through liturgical rhythm and natural law. Only after this foundation do they pursue specialized study."
        variant="restoration"
        leftColumn={{
          heading: "What They Study:",
          items: [
            "Homer, Virgil, Dante",
            "Gregorian chant, polyphony",
            "Plato, Aristotle, Aquinas",
            "Sacred art (Byzantine, medieval)",
            "Natural philosophy before modern science"
          ]
        }}
        rightColumn={{
          heading: "What They Don't Study (Yet):",
          items: [
            "Career-focused majors",
            "Modern political theory",
            "Specialized STEM tracks",
            "Pop culture or current events",
            "Anything divorced from liturgical context"
          ]
        }}
        footer="First integration, then specialization. First wonder, then analysis."
      />

      <EvidenceQuoteGroup
        variant="minor-premise"
        quotes={[
          {
            quote: "The Integrated Humanities Program exists because specialized knowledge has failed...",
            author: "Dr. Dennis Quinn",
            source: "IHP Lecture I: The Restoration of Wonder",
            showSourceLink: true,
            sourceSlug: "integrated_humanities_lecture"
          },
          {
            quote: "Music, art, and poetry are not electives or enrichment. They are the soil from which science, theology, and philosophy grow...",
            author: "James Taylor",
            source: "Poetic Knowledge: The Recovery of Education",
            showSourceLink: true,
            sourceSlug: "poetic-knowledge-recovery-education"
          },
          {
            quote: "Finally, brothers, whatever is true, whatever is honorable, whatever is just, whatever is pure, whatever is lovely, whatever is commendable, if there is any excellence, if there is anything worthy of praise, think about these things.",
            author: "Philippians 4:8",
            source: "Scripture (ESV)"
          }
        ]}
      />

      <div className="pt-16 border-t-4 border-green-700">
        <div className="max-w-4xl mx-auto space-y-8">
          <h3 className="font-playfair text-4xl font-bold text-forest text-center">
            Summary: The Remedy Is Clear
          </h3>

          <SummaryBox variant="minor-premise" title="The Restoration Established:">
            <p className="text-xl leading-relaxed">
              Poetic knowledge—cultivated through Senior's four stages (nursery, gymnasium, poetic,
              spiritual)—is the remedy to modern education's failure. The <strong>gymnasium stage
              (7-13)</strong> is the pivot: physical courage and ordered habit lay the foundation for
              all higher learning. Restore the gymnasium, integrate the poetic, and warrior poets will
              emerge.
            </p>
          </SummaryBox>
        </div>
      </div>
    </div>
  );
}
```

**Test File**: `components/philosophy/__tests__/RestorationSubsectionC.test.tsx`

**Test Coverage** (12 tests):
1. Renders heading "C. The Poetic Stage: Integrated Learning"
2. Renders introductory paragraph
3. Renders StudyGrid (IHP Model)
4. Renders EvidenceQuoteGroup with 3 quotes
5. Renders Summary heading "Summary: The Remedy Is Clear"
6. Renders SummaryBox (The Restoration Established)
7. Has correct id attribute (minor-premise-c)
8. Applies custom className
9. All text content present
10. No console errors/warnings
11. Matches snapshot
12. Accessibility: proper heading hierarchy

---

## Implementation Steps

### Step 1: Extract RestorationSubsectionA
1. Create `components/philosophy/RestorationSubsectionA.tsx`
2. Copy content from page.tsx lines ~800-880 (Section A)
3. Replace inline evidence quotes with EvidenceQuoteGroup
4. Keep InteractiveStages as-is (crisisMode=false)
5. Add TypeScript interface and exports
6. Add JSDoc comments

### Step 2: Create RestorationSubsectionA Tests
1. Create `components/philosophy/__tests__/RestorationSubsectionA.test.tsx`
2. Implement 10 test cases
3. Run tests: `npm test RestorationSubsectionA`

### Step 3: Extract RestorationSubsectionB
1. Create `components/philosophy/RestorationSubsectionB.tsx`
2. Copy content from page.tsx lines ~880-960 (Section B)
3. Replace inline evidence quotes with EvidenceQuoteGroup
4. Keep ProblemSolutionPanel as-is
5. Add TypeScript interface and exports
6. Add JSDoc comments

### Step 4: Create RestorationSubsectionB Tests
1. Create `components/philosophy/__tests__/RestorationSubsectionB.test.tsx`
2. Implement 10 test cases
3. Run tests: `npm test RestorationSubsectionB`

### Step 5: Extract RestorationSubsectionC
1. Create `components/philosophy/RestorationSubsectionC.tsx`
2. Copy content from page.tsx lines ~960-1040 (Section C)
3. Replace IHP model inline div with StudyGrid component
4. Replace inline evidence quotes with EvidenceQuoteGroup
5. Replace minor premise summary with SummaryBox
6. Add TypeScript interface and exports
7. Add JSDoc comments

### Step 6: Create RestorationSubsectionC Tests
1. Create `components/philosophy/__tests__/RestorationSubsectionC.test.tsx`
2. Implement 12 test cases
3. Run tests: `npm test RestorationSubsectionC`

### Step 7: Update page.tsx
1. Import new subsection components at top of file
2. Replace Part II inline JSX (lines ~800-1040) with:
```tsx
<SyllogismSection type="minor-premise" title="..." number="II">
  <RestorationSubsectionA />
  <RestorationSubsectionB />
  <RestorationSubsectionC />
</SyllogismSection>
```
3. Verify spacing between subsections

### Step 8: Verification
1. Run TypeScript: `npx tsc --noEmit --skipLibCheck`
   - Expect: 3 pre-existing errors only
2. Run all tests: `npm test -- --passWithNoTests`
   - Expect: 383 + 32 = 415/418 passing
3. Visual check: `npm run dev` - verify Part II renders identically
4. Screenshot comparison (before/after)
5. Git commit: "refactor(philosophy): extract Part II subsections into components"

---

## Acceptance Criteria

### Must Have
- [x] RestorationSubsectionA.tsx created and tested (10 tests)
- [x] RestorationSubsectionB.tsx created and tested (10 tests)
- [x] RestorationSubsectionC.tsx created and tested (12 tests)
- [x] page.tsx updated to use new components
- [x] Visual parity maintained (no UI changes)
- [x] TypeScript compiles clean (3 pre-existing errors only)
- [x] All tests passing (415/418 total)
- [x] ~235 lines removed from page.tsx

### Should Have
- [x] JSDoc comments on all components
- [x] Snapshot tests for all subsections
- [x] Accessibility verified (heading hierarchy, IDs)
- [x] Git commit created

### Nice to Have
- [x] Screenshot comparison documented
- [x] Performance profiling

---

## Verification Commands

```bash
# TypeScript check
npx tsc --noEmit --skipLibCheck

# Run new component tests only
npm test -- RestorationSubsection

# Run all tests
npm test -- --passWithNoTests

# Visual check
npm run dev
# Navigate to http://localhost:3000/philosophy
# Verify Part II renders correctly
```

---

## Next Steps

After completing this prompt:
1. **Prompt 23**: Extract Part III subsections (VisionSyllogismRecap, VisionWarriorPoet, VisionCallToAction)
2. Parts I & II fully componentized, ~535 lines removed from page.tsx

---

## Notes

- Maintain exact visual parity - no styling changes
- Keep all existing IDs for anchor links (minor-premise-a, minor-premise-b, minor-premise-c)
- Preserve spacing and border-top on summary section
- All quotes, sources, and content must be identical to current state
- Use cn() utility for className merging if needed
- Export components as named exports for easier testing

---

**End of Prompt 22**
