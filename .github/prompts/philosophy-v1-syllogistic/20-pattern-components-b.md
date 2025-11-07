# Prompt 20: Pattern Components B - EvidenceQuoteGroup, ComparisonDiagram, StudyGrid

**Phase**: 1 of 5 (Reusable Pattern Components - Continued)  
**Dependencies**: Prompt 19 (CardGrid & SummaryBox complete)  
**Estimated Time**: 30 minutes

---

## Goal

Complete the pattern component library by creating three specialized components:
1. **EvidenceQuoteGroup**: Container for multiple evidence quotes (9+ instances)
2. **ComparisonDiagram**: Two-column flow diagrams (1 instance, complex)
3. **StudyGrid**: Two-column list comparisons (1 instance)

---

## Context

After Prompt 19, we have CardGrid and SummaryBox components. This prompt completes Phase 1 by extracting the remaining duplicated patterns. These components will be used extensively in subsection components (Phases 2-4).

Current state:
- CardGrid and SummaryBox components created with tests
- EvidenceQuote component exists (created in Prompt 03)
- Need containers and specialized layouts for remaining patterns

---

## Component Specifications

### 1. EvidenceQuoteGroup Component

**File**: `components/EvidenceQuoteGroup.tsx`

**Purpose**: Container component that renders a heading and multiple EvidenceQuote components with proper spacing. Eliminates repetitive "Evidence from the Sources" sections throughout the page.

**TypeScript Interface**:
```typescript
import { EvidenceQuoteProps } from './EvidenceQuote';

interface EvidenceQuoteGroupProps {
  quotes: Array<Omit<EvidenceQuoteProps, 'variant'>>; // Variant inherited from group
  variant: 'major-premise' | 'minor-premise' | 'conclusion';
  title?: string; // Default: "Evidence from the Sources"
  className?: string;
}
```

**Behavior**:
- Renders heading with title (default: "Evidence from the Sources")
- Heading: font-playfair, text-2xl, font-bold, text-forest, text-center
- Container: space-y-8, mt-12 (spacing between quotes and from previous content)
- Maps over quotes array, rendering EvidenceQuote for each
- Passes variant to all child EvidenceQuote components
- Space between quotes: space-y-8

**Example Usage**:
```tsx
// Part I Section A: Loss of Wonder
<EvidenceQuoteGroup
  variant="major-premise"
  quotes={[
    {
      quote: "Wonder is the first and most fundamental disposition of the soul...",
      author: "Dr. John Senior",
      source: "The Restoration of Christian Culture",
      showSourceLink: true,
      sourceSlug: "restoration-of-christian-culture"
    },
    {
      quote: "The senses are the gateways to the soul...",
      author: "Dr. Dennis Quinn",
      source: "IHP Lecture I: The Loss of the Senses",
      showSourceLink: true,
      sourceSlug: "integrated_humanities_lecture"
    },
    {
      quote: "The heavens declare the glory of God...",
      author: "Psalm 19:1-2",
      source: "Scripture (ESV)"
    }
  ]}
/>

// Part II Section B: Gymnasium Foundation
<EvidenceQuoteGroup
  variant="minor-premise"
  title="Evidence from the Sources" // Can customize
  quotes={[
    // ... quote objects
  ]}
/>
```

**Test File**: `components/__tests__/EvidenceQuoteGroup.test.tsx`

**Test Coverage** (18 tests):
1. Renders default title "Evidence from the Sources"
2. Renders custom title when provided
3. Renders correct number of quotes
4. Passes variant to all child EvidenceQuote components
5. Applies major-premise variant correctly
6. Applies minor-premise variant correctly
7. Applies conclusion variant correctly
8. Proper spacing between quotes (space-y-8)
9. Heading styles correct (font-playfair, text-2xl, bold, centered)
10. Container margin-top applied (mt-12)
11. Custom className applied
12. Handles empty quotes array gracefully
13. Handles single quote
14. Quote props passed through correctly (quote, author, source, etc.)
15. showSourceLink prop respected
16. sourceSlug prop passed correctly
17. No console errors/warnings
18. Matches snapshot (major-premise with 3 quotes)
19. Matches snapshot (minor-premise with 2 quotes)
20. Accessibility: proper heading level (h4)

---

### 2. ComparisonDiagram Component

**File**: `components/ComparisonDiagram.tsx`

**Purpose**: Two-column flow diagram showing contrasting paths with steps, arrows, and results. Used for "The Poisoned Well" diagram in Part I Section C.

**TypeScript Interface**:
```typescript
interface ComparisonColumn {
  label: string; // e.g., "Modern Education"
  steps: string[]; // e.g., ["📱Screens (0-13)", "🛡️Gymnasium (skipped)", ...]
  result: string; // e.g., "= Alienated Technician"
}

interface ComparisonDiagramProps {
  title: string;
  leftColumn: ComparisonColumn;
  rightColumn: ComparisonColumn;
  description?: string; // Optional subtitle/description
  className?: string;
}
```

**Behavior**:
- Title: font-playfair, text-2xl, font-bold, text-forest, text-center, mb-6
- Description: text-center, text-base, text-charcoal/70, italic, mb-8
- Two-column layout: grid grid-cols-1 md:grid-cols-2 gap-8
- Each column:
  - Label: font-playfair, text-lg, font-bold, text-center, mb-4
  - Steps container: space-y-2, flex flex-col items-center
  - Each step: text-base, text-charcoal/90
  - Arrow between steps: "↓" centered, text-charcoal/40
  - Result: text-center, font-bold, text-lg, mt-4
- Left column: Red tint (text-red-900 for result, indicating problem)
- Right column: Green tint (text-green-900 for result, indicating solution)

**Example Usage**:
```tsx
// Part I Section C: The Poisoned Well
<ComparisonDiagram
  title="The Poisoned Well: STEM Without Poetic Soil"
  description="Specialization must grow from poetic soil, not replace it"
  leftColumn={{
    label: "Modern Education",
    steps: [
      "📱Screens (0-13)",
      "🛡️Gymnasium (skipped)",
      "🎨Poetic (skipped)",
      "🔬STEM-first"
    ],
    result: "= Alienated Technician"
  }}
  rightColumn={{
    label: "Classical Education",
    steps: [
      "🌿Nursery (0-7)",
      "🛡️Gymnasium (7-13)",
      "🎨Poetic (13-17)",
      "🔬Science (from soil)"
    ],
    result: "= Integrated Warrior Poet"
  }}
/>
```

**Test File**: `components/__tests__/ComparisonDiagram.test.tsx`

**Test Coverage** (15 tests):
1. Renders title
2. Renders optional description
3. Renders two columns (left and right)
4. Renders column labels
5. Renders all steps in correct order
6. Renders arrows between steps (↓)
7. Renders results at bottom of each column
8. Left column result has red styling (text-red-900)
9. Right column result has green styling (text-green-900)
10. Responsive grid layout (1 col mobile, 2 cols desktop)
11. Title styling correct (font-playfair, bold, centered)
12. Custom className applied
13. Handles different numbers of steps per column
14. No console errors/warnings
15. Matches snapshot (Poisoned Well example)
16. Accessibility: semantic HTML, proper heading level

---

### 3. StudyGrid Component

**File**: `components/StudyGrid.tsx`

**Purpose**: Two-column list comparison showing contrasting categories. Used for IHP Model "What They Study" vs "What They Don't Study Yet" in Part II Section C.

**TypeScript Interface**:
```typescript
interface StudyColumn {
  heading: string; // e.g., "What They Study:"
  items: string[]; // e.g., ["Homer, Virgil, Dante", "Gregorian chant, polyphony", ...]
}

interface StudyGridProps {
  title: string;
  description?: string;
  leftColumn: StudyColumn;
  rightColumn: StudyColumn;
  footer?: string;
  variant?: 'restoration' | 'neutral'; // For border/background theming
  className?: string;
}
```

**Behavior**:
- Container: bg-parchment-light, border-2 border-green-700/40 (if variant="restoration"), rounded-lg, p-8, space-y-6
- Title: font-playfair, text-2xl, font-bold, text-forest, text-center
- Description: text-base, text-charcoal/90, leading-relaxed, mb-6
- Two-column grid: grid grid-cols-1 md:grid-cols-2 gap-6
- Each column:
  - Heading: font-playfair, text-lg, font-bold, text-green-900 (if restoration variant)
  - List: space-y-1, list-disc, list-inside, text-base, text-charcoal/90
- Footer: text-center, text-sm, text-charcoal/70, italic, mt-4

**Example Usage**:
```tsx
// Part II Section C: IHP Model
<StudyGrid
  title="The IHP Model: Integrated Humanities"
  description="The Integrated Humanities Program at the University of Kansas (founded by Senior, Quinn, and Nelick) demonstrates poetic education in practice. Students spend three years studying Great Books, Gregorian chant, sacred art, and philosophy—all integrated through liturgical rhythm and natural law."
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
```

**Test File**: `components/__tests__/StudyGrid.test.tsx`

**Test Coverage** (15 tests):
1. Renders title
2. Renders optional description
3. Renders two columns (left and right)
4. Renders column headings
5. Renders all items in correct order
6. List styling correct (disc bullets, inside)
7. Renders optional footer
8. Applies restoration variant styling (green borders/colors)
9. Applies neutral variant styling (no borders)
10. Responsive grid layout (1 col mobile, 2 cols desktop)
11. Background color correct (parchment-light)
12. Custom className applied
13. Handles different numbers of items per column
14. No console errors/warnings
15. Matches snapshot (IHP Model example)
16. Accessibility: semantic HTML, proper list markup

---

## Implementation Steps

### Step 1: Create EvidenceQuoteGroup Component
1. Create `components/EvidenceQuoteGroup.tsx`
2. Import EvidenceQuote and its props type
3. Implement TypeScript interface
4. Implement component logic (map over quotes, pass variant)
5. Add default title logic
6. Style heading and container spacing
7. Add JSDoc comments

### Step 2: Create EvidenceQuoteGroup Tests
1. Create `components/__tests__/EvidenceQuoteGroup.test.tsx`
2. Implement 18+ test cases covering:
   - Rendering (title, quotes, variant)
   - Props passing (to EvidenceQuote children)
   - Spacing and layout
   - Edge cases (empty array, single quote)
   - Snapshots (all variants)

### Step 3: Create ComparisonDiagram Component
1. Create `components/ComparisonDiagram.tsx`
2. Implement TypeScript interface
3. Implement two-column layout with steps and arrows
4. Add color theming (red for left/problem, green for right/solution)
5. Style title, labels, steps, results
6. Add JSDoc comments

### Step 4: Create ComparisonDiagram Tests
1. Create `components/__tests__/ComparisonDiagram.test.tsx`
2. Implement 15+ test cases covering:
   - Rendering (title, columns, steps, arrows, results)
   - Color theming (red/green results)
   - Responsive layout
   - Edge cases (different step counts)
   - Snapshot (Poisoned Well example)

### Step 5: Create StudyGrid Component
1. Create `components/StudyGrid.tsx`
2. Implement TypeScript interface
3. Implement two-column list grid
4. Add variant theming (restoration vs neutral)
5. Style title, description, columns, footer
6. Add JSDoc comments

### Step 6: Create StudyGrid Tests
1. Create `components/__tests__/StudyGrid.test.tsx`
2. Implement 15+ test cases covering:
   - Rendering (title, description, columns, items, footer)
   - Variant theming (restoration borders/colors)
   - Responsive layout
   - List markup (bullets, semantic HTML)
   - Snapshot (IHP Model example)

### Step 7: Verification
1. Run TypeScript compilation: `npx tsc --noEmit --skipLibCheck`
   - Expect: 3 pre-existing errors only
2. Run tests: `npm test EvidenceQuoteGroup ComparisonDiagram StudyGrid`
   - Expect: All new tests passing (~48 total)
3. Run all tests: `npm test -- --passWithNoTests`
   - Expect: 303 existing + 48 new = 351/354 passing
4. Git commit: "feat(components): add EvidenceQuoteGroup, ComparisonDiagram, and StudyGrid"

---

## Acceptance Criteria

### Must Have
- [x] EvidenceQuoteGroup.tsx created with correct TypeScript interface
- [x] EvidenceQuoteGroup maps over quotes array correctly
- [x] EvidenceQuoteGroup passes variant to child components
- [x] EvidenceQuoteGroup.test.tsx with 18+ tests passing
- [x] ComparisonDiagram.tsx created with correct TypeScript interface
- [x] ComparisonDiagram renders two-column flow with arrows
- [x] ComparisonDiagram applies color theming (red/green results)
- [x] ComparisonDiagram.test.tsx with 15+ tests passing
- [x] StudyGrid.tsx created with correct TypeScript interface
- [x] StudyGrid renders two-column lists with variant theming
- [x] StudyGrid.test.tsx with 15+ tests passing
- [x] TypeScript compiles clean (3 pre-existing errors only)
- [x] All tests passing (351/354 total)

### Should Have
- [x] JSDoc comments on all public interfaces
- [x] Snapshot tests for all components
- [x] Accessibility attributes (proper heading levels, semantic lists)
- [x] Responsive classes verified
- [x] Git commit created

### Nice to Have
- [x] Visual regression baseline screenshots
- [x] Performance profiling
- [x] Storybook stories

---

## Verification Commands

```bash
# TypeScript check
npx tsc --noEmit --skipLibCheck

# Run new component tests only
npm test -- EvidenceQuoteGroup ComparisonDiagram StudyGrid

# Run all tests to verify no regressions
npm test -- --passWithNoTests

# Visual check (start dev server)
npm run dev
```

---

## Next Steps

After completing this prompt:
1. **Phase 1 Complete**: All 5 pattern components created (CardGrid, SummaryBox, EvidenceQuoteGroup, ComparisonDiagram, StudyGrid)
2. **Prompt 21**: Extract Part I subsections (CrisisSubsectionA, B, C) using pattern components

---

## Notes

- Do NOT modify page.tsx in this prompt - only create new components
- EvidenceQuote component already exists (Prompt 03) - import and reuse it
- ComparisonDiagram is most complex - take care with responsive layout and color theming
- These components complete the pattern library for subsection extraction
- All components should be pure/stateless for maximum reusability

---

**End of Prompt 20**
