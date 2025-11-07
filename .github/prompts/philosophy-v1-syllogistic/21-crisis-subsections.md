# Prompt 21: Crisis Subsections - Extract Part I Components

**Phase**: 2 of 5 (Subsection Component Extraction - Part I)  
**Dependencies**: Prompts 19-20 (All pattern components complete)  
**Estimated Time**: 45 minutes

---

## Goal

Extract Part I (The Crisis) subsections A, B, and C from page.tsx into dedicated components, utilizing the pattern components created in Phase 1. This removes ~300 lines of inline JSX from page.tsx.

---

## Context

After Prompts 19-20, we have a complete pattern component library:
- CardGrid (3-column card grids)
- SummaryBox (bordered conclusion boxes)
- EvidenceQuoteGroup (evidence quote containers)
- ComparisonDiagram (two-column flow diagrams)
- StudyGrid (two-column list comparisons)

These will be used to build three subsection components for Part I (The Crisis):
- **CrisisSubsectionA**: Loss of Wonder & Sensory Integration (~100 lines inline)
- **CrisisSubsectionB**: Cultural Softness & the Gymnasium Crisis (~100 lines inline)
- **CrisisSubsectionC**: The Specialized Knowledge Crisis (~100 lines inline)

---

## Component Specifications

### 1. CrisisSubsectionA Component

**File**: `components/philosophy/CrisisSubsectionA.tsx`

**Purpose**: Subsection A of Part I - Loss of Wonder & Sensory Integration. Demonstrates how screen addiction destroys wonder and proposes nature as remedy.

**TypeScript Interface**:
```typescript
interface CrisisSubsectionAProps {
  className?: string;
}
```

**Content Structure**:
1. **Heading**: "A. Loss of Wonder & Sensory Integration"
2. **ProblemSolutionPanel**: Screen Addiction vs Nature & Wonder
3. **EvidenceQuoteGroup**: 3 quotes (Senior, Quinn, Psalm 19:1-2)
4. **InteractiveStages**: Crisis mode showing nursery stage failure

**Extracted from page.tsx lines**: ~300-400

**Example Structure**:
```tsx
export function CrisisSubsectionA({ className }: CrisisSubsectionAProps) {
  return (
    <div id="major-premise-a" className={cn("space-y-12", className)}>
      <h3 className="font-playfair text-4xl font-bold text-red-900">
        A. Loss of Wonder & Sensory Integration
      </h3>

      <ProblemSolutionPanel
        problemTitle="The Problem: Screen Addiction"
        problemContent="The average American child now spends 7 hours per day on screens..."
        problemConclusion="Result: Wonder dies. The well is poisoned before age 13."
        solutionTitle="The Solution: Nature & Wonder"
        solutionContent="Poetic knowledge begins with wonder—not curiosity..."
        solutionConclusion="Result: Wonder restored. The soil is fertile for higher learning."
      />

      <EvidenceQuoteGroup
        variant="major-premise"
        quotes={[
          {
            quote: "Wonder is the first and most fundamental disposition...",
            author: "Dr. John Senior",
            source: "The Restoration of Christian Culture",
            showSourceLink: true,
            sourceSlug: "restoration-of-christian-culture"
          },
          // ... 2 more quotes
        ]}
      />

      <div className="space-y-6">
        <h4 className="font-playfair text-2xl font-bold text-forest text-center">
          Where the Crisis Hits: Nursery & Gymnasium
        </h4>
        <InteractiveStages crisisMode={true} />
        <p className="text-center text-base text-charcoal/70">
          Click each stage to see the modern failure
        </p>
      </div>
    </div>
  );
}
```

**Test File**: `components/philosophy/__tests__/CrisisSubsectionA.test.tsx`

**Test Coverage** (10 tests):
1. Renders heading "A. Loss of Wonder & Sensory Integration"
2. Renders ProblemSolutionPanel component
3. Renders EvidenceQuoteGroup with 3 quotes
4. Renders InteractiveStages in crisis mode
5. Has correct id attribute (major-premise-a)
6. Applies custom className
7. All text content present
8. No console errors/warnings
9. Matches snapshot
10. Accessibility: proper heading hierarchy

---

### 2. CrisisSubsectionB Component

**File**: `components/philosophy/CrisisSubsectionB.tsx`

**Purpose**: Subsection B of Part I - Cultural Softness & the Gymnasium Crisis. Shows elimination of physical risk and proposes gymnasium rigor.

**TypeScript Interface**:
```typescript
interface CrisisSubsectionBProps {
  className?: string;
}
```

**Content Structure**:
1. **Heading**: "B. Cultural Softness & the Gymnasium Crisis"
2. **ProblemSolutionPanel**: Elimination of Risk vs Gymnasium Rigor
3. **EvidenceQuoteGroup**: 4 quotes (Senior x2, Proverbs 22:6, 1 Cor 9:24-25)
4. **CardGrid**: Practical examples (Sport, Latin, Adventure) - 3 cards, 3 columns

**Extracted from page.tsx lines**: ~400-500

**Example Structure**:
```tsx
export function CrisisSubsectionB({ className }: CrisisSubsectionBProps) {
  return (
    <div id="major-premise-b" className={cn("space-y-12", className)}>
      <h3 className="font-playfair text-4xl font-bold text-red-900">
        B. Cultural Softness & the Gymnasium Crisis
      </h3>

      <ProblemSolutionPanel
        problemTitle="The Problem: Elimination of Risk"
        problemContent="Modern education has neutered boyhood. Dodgeball is banned..."
        problemConclusion="Result: Physical softness produces moral weakness..."
        solutionTitle="The Solution: Gymnasium Rigor"
        solutionContent="Senior's gymnasium stage demands three things: Sport, Latin, Adventure..."
        solutionConclusion="Result: Physical resilience breeds moral courage..."
      />

      <EvidenceQuoteGroup
        variant="major-premise"
        quotes={[
          // 4 quotes: Senior, Senior, Proverbs, 1 Cor
        ]}
      />

      <div className="space-y-6">
        <h4 className="font-playfair text-2xl font-bold text-forest text-center">
          What the Gymnasium Stage Looks Like
        </h4>
        <CardGrid
          variant="crisis"
          columns={3}
          cards={[
            {
              emoji: "⚔️",
              heading: "Sport",
              description: "Rugby, boxing, wrestling\nSwimming (cold water)\nLong-distance running\nTeam discipline"
            },
            {
              emoji: "📖",
              heading: "Latin",
              description: "Memory training\nOrdered syntax\nDeclensions/conjugations\nFoundation for grammar"
            },
            {
              emoji: "🏕️",
              heading: "Adventure",
              description: "Camping (no phones)\nRock climbing, hiking\nSurvival skills\nBenevolent neglect"
            }
          ]}
        />
        <p className="text-center text-base text-charcoal/70">
          Ages 7-13: The window for physical and moral formation
        </p>
      </div>
    </div>
  );
}
```

**Test File**: `components/philosophy/__tests__/CrisisSubsectionB.test.tsx`

**Test Coverage** (10 tests):
1. Renders heading "B. Cultural Softness & the Gymnasium Crisis"
2. Renders ProblemSolutionPanel component
3. Renders EvidenceQuoteGroup with 4 quotes
4. Renders CardGrid with 3 cards (Sport, Latin, Adventure)
5. Has correct id attribute (major-premise-b)
6. Applies custom className
7. All text content present
8. No console errors/warnings
9. Matches snapshot
10. Accessibility: proper heading hierarchy

---

### 3. CrisisSubsectionC Component

**File**: `components/philosophy/CrisisSubsectionC.tsx`

**Purpose**: Subsection C of Part I - The Specialized Knowledge Crisis. Shows STEM-first failure and proposes poetic foundation.

**TypeScript Interface**:
```typescript
interface CrisisSubsectionCProps {
  className?: string;
}
```

**Content Structure**:
1. **Heading**: "C. The Specialized Knowledge Crisis"
2. **ProblemSolutionPanel**: STEM-First Curriculum vs Poetic Knowledge as Foundation
3. **EvidenceQuoteGroup**: 4 quotes (Senior, Taylor, Quinn, Colossians 3:17)
4. **ComparisonDiagram**: The Poisoned Well (Modern vs Classical Education)
5. **SummaryBox**: Three Poisons summary with CardGrid
6. **SummaryBox**: Crisis Established conclusion

**Extracted from page.tsx lines**: ~500-600

**Example Structure**:
```tsx
export function CrisisSubsectionC({ className }: CrisisSubsectionCProps) {
  return (
    <div id="major-premise-c" className={cn("space-y-12", className)}>
      <h3 className="font-playfair text-4xl font-bold text-red-900">
        C. The Specialized Knowledge Crisis
      </h3>

      <ProblemSolutionPanel
        problemTitle="The Problem: STEM-First Curriculum"
        problemContent="Modern education rushes to specialization..."
        problemConclusion="Result: Alienated technicians, not warrior poets..."
        solutionTitle="The Solution: Poetic Knowledge as Foundation"
        solutionContent="Senior's poetic stage (ages 13-17) is the fertile soil..."
        solutionConclusion="Result: Integrated thinkers who see science, philosophy, and theology as unified..."
      />

      <EvidenceQuoteGroup
        variant="major-premise"
        quotes={[
          // 4 quotes: Senior, Taylor, Quinn, Colossians
        ]}
      />

      <ComparisonDiagram
        title="The Poisoned Well: STEM Without Poetic Soil"
        description="Specialization must grow from poetic soil, not replace it"
        leftColumn={{
          label: "Modern Education",
          steps: ["📱Screens (0-13)", "🛡️Gymnasium (skipped)", "🎨Poetic (skipped)", "🔬STEM-first"],
          result: "= Alienated Technician"
        }}
        rightColumn={{
          label: "Classical Education",
          steps: ["🌿Nursery (0-7)", "🛡️Gymnasium (7-13)", "🎨Poetic (13-17)", "🔬Science (from soil)"],
          result: "= Integrated Warrior Poet"
        }}
      />

      <div className="space-y-8">
        <h3 className="font-playfair text-3xl font-bold text-forest text-center">
          Summary: The Three Poisons
        </h3>
        <p className="text-center text-lg text-charcoal/90 max-w-3xl mx-auto">
          Modern education has systematically destroyed the gymnasium and poetic stages
          through three interconnected failures:
        </p>
        <CardGrid
          variant="crisis"
          columns={3}
          cards={[
            {
              emoji: "📱",
              heading: "Screens",
              description: "Replace wonder & sensory integration"
            },
            {
              emoji: "🛡️",
              heading: "Softness",
              description: "Replace risk & physical discipline"
            },
            {
              emoji: "🔬",
              heading: "Specialization",
              description: "Replace integrated poetic knowledge"
            }
          ]}
        />
      </div>

      <SummaryBox variant="major-premise" title="The Crisis Established:">
        <p className="text-xl leading-relaxed">
          Modern education has <strong>failed our sons</strong> by poisoning the well of wonder,
          eliminating physical and moral formation, and rushing to utilitarian specialization.
          The gymnasium and poetic stages—ages 7-17—have been abandoned.
        </p>
      </SummaryBox>
    </div>
  );
}
```

**Test File**: `components/philosophy/__tests__/CrisisSubsectionC.test.tsx`

**Test Coverage** (12 tests):
1. Renders heading "C. The Specialized Knowledge Crisis"
2. Renders ProblemSolutionPanel component
3. Renders EvidenceQuoteGroup with 4 quotes
4. Renders ComparisonDiagram (Poisoned Well)
5. Renders Three Poisons CardGrid with 3 cards
6. Renders Crisis Established SummaryBox
7. Has correct id attribute (major-premise-c)
8. Applies custom className
9. All text content present
10. No console errors/warnings
11. Matches snapshot
12. Accessibility: proper heading hierarchy

---

## Implementation Steps

### Step 1: Create Directory Structure
```bash
mkdir -p components/philosophy
mkdir -p components/philosophy/__tests__
```

### Step 2: Extract CrisisSubsectionA
1. Create `components/philosophy/CrisisSubsectionA.tsx`
2. Copy content from page.tsx lines ~300-400 (Section A)
3. Replace inline evidence quotes with EvidenceQuoteGroup
4. Keep ProblemSolutionPanel and InteractiveStages as-is
5. Add TypeScript interface and exports
6. Add JSDoc comments

### Step 3: Create CrisisSubsectionA Tests
1. Create `components/philosophy/__tests__/CrisisSubsectionA.test.tsx`
2. Implement 10 test cases
3. Run tests: `npm test CrisisSubsectionA`

### Step 4: Extract CrisisSubsectionB
1. Create `components/philosophy/CrisisSubsectionB.tsx`
2. Copy content from page.tsx lines ~400-500 (Section B)
3. Replace inline evidence quotes with EvidenceQuoteGroup
4. Replace practical examples grid with CardGrid
5. Add TypeScript interface and exports
6. Add JSDoc comments

### Step 5: Create CrisisSubsectionB Tests
1. Create `components/philosophy/__tests__/CrisisSubsectionB.test.tsx`
2. Implement 10 test cases
3. Run tests: `npm test CrisisSubsectionB`

### Step 6: Extract CrisisSubsectionC
1. Create `components/philosophy/CrisisSubsectionC.tsx`
2. Copy content from page.tsx lines ~500-600 (Section C)
3. Replace inline evidence quotes with EvidenceQuoteGroup
4. Replace poisoned well diagram with ComparisonDiagram
5. Replace three poisons grid with CardGrid
6. Replace crisis summary with SummaryBox
7. Add TypeScript interface and exports
8. Add JSDoc comments

### Step 7: Create CrisisSubsectionC Tests
1. Create `components/philosophy/__tests__/CrisisSubsectionC.test.tsx`
2. Implement 12 test cases
3. Run tests: `npm test CrisisSubsectionC`

### Step 8: Update page.tsx
1. Import new subsection components at top of file
2. Replace Part I inline JSX (lines ~300-600) with:
```tsx
<SyllogismSection type="major-premise" title="..." number="I">
  <CrisisSubsectionA />
  <CrisisSubsectionB />
  <CrisisSubsectionC />
</SyllogismSection>
```
3. Verify spacing between subsections (space-y-24 or similar on parent)

### Step 9: Verification
1. Run TypeScript: `npx tsc --noEmit --skipLibCheck`
   - Expect: 3 pre-existing errors only
2. Run all tests: `npm test -- --passWithNoTests`
   - Expect: 351 + 32 = 383/386 passing
3. Visual check: `npm run dev` - verify Part I renders identically
4. Screenshot comparison (before/after)
5. Git commit: "refactor(philosophy): extract Part I subsections into components"

---

## Acceptance Criteria

### Must Have
- [x] CrisisSubsectionA.tsx created and tested (10 tests)
- [x] CrisisSubsectionB.tsx created and tested (10 tests)
- [x] CrisisSubsectionC.tsx created and tested (12 tests)
- [x] page.tsx updated to use new components
- [x] Visual parity maintained (no UI changes)
- [x] TypeScript compiles clean (3 pre-existing errors only)
- [x] All tests passing (383/386 total)
- [x] ~300 lines removed from page.tsx

### Should Have
- [x] JSDoc comments on all components
- [x] Snapshot tests for all subsections
- [x] Accessibility verified (heading hierarchy, IDs)
- [x] Git commit created

### Nice to Have
- [x] Screenshot comparison documented
- [x] Performance profiling (should be equivalent or better)

---

## Verification Commands

```bash
# TypeScript check
npx tsc --noEmit --skipLibCheck

# Run new component tests only
npm test -- CrisisSubsection

# Run all tests
npm test -- --passWithNoTests

# Visual check
npm run dev
# Navigate to http://localhost:3000/philosophy
# Verify Part I renders correctly
```

---

## Next Steps

After completing this prompt:
1. **Prompt 22**: Extract Part II subsections (RestorationSubsectionA, B, C)
2. Part I fully componentized, ~300 lines removed from page.tsx

---

## Notes

- Maintain exact visual parity - no styling changes
- Keep all existing IDs for anchor links (major-premise-a, major-premise-b, major-premise-c)
- Preserve spacing between subsections
- All quotes, sources, and content must be identical to current state
- Use cn() utility for className merging if needed
- Export components as named exports for easier testing

---

**End of Prompt 21**
