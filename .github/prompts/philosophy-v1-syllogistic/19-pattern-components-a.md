# Prompt 19: Pattern Components A - CardGrid & SummaryBox

**Phase**: 1 of 5 (Reusable Pattern Components)  
**Dependencies**: Prompts 01-16 (Syllogistic implementation complete)  
**Estimated Time**: 30 minutes

---

## Goal

Extract duplicated card grid and summary box patterns into reusable components. These are the most frequently repeated patterns in the page (~7 instances combined).

---

## Context

After completing the syllogistic transformation (Prompts 11-16), we have ~625 lines of inline JSX in page.tsx that should be extracted into components. This prompt addresses the two most duplicated patterns:

1. **CardGrid**: 3-column responsive grids with emoji/heading/description (4 instances: Three Poisons, Warrior Poet Vision, CTAs, Practical Examples)
2. **SummaryBox**: Bordered conclusion boxes with variant theming (3 instances: Crisis summary, Minor Premise summary, Syllogism recap)

These components will serve as building blocks for subsection components in later phases.

---

## Component Specifications

### 1. CardGrid Component

**File**: `components/CardGrid.tsx`

**Purpose**: Generic responsive card grid for displaying 2-3 cards with emoji, heading, description, and optional action button.

**TypeScript Interface**:
```typescript
interface Card {
  emoji: string;
  heading: string;
  description: string;
  action?: React.ReactNode; // Optional CTAButton or link
}

interface CardGridProps {
  cards: Card[];
  variant?: 'crisis' | 'restoration' | 'vision' | 'neutral';
  columns?: 2 | 3; // Default: 3
  className?: string;
}
```

**Behavior**:
- Responsive: 1 column mobile, 2-3 columns desktop (based on `columns` prop)
- Variant-specific border colors:
  - `crisis`: red-700/red (matches SyllogismSection major-premise)
  - `restoration`: green-700/green (matches SyllogismSection minor-premise)
  - `vision`: gold/gold-dark (matches SyllogismSection conclusion)
  - `neutral`: charcoal/50 (default)
- Each card: white background, rounded-lg, border-2, padding, text-center
- Emoji: text-5xl, aria-hidden="true"
- Heading: font-playfair, text-2xl, font-bold, text-forest
- Description: text-base, text-charcoal/90, leading-relaxed
- Action: Centered below description with mt-4

**Example Usage**:
```tsx
// Three Poisons (Part I Section C)
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

// Call to Action (Part III)
<CardGrid
  variant="vision"
  columns={3}
  cards={[
    {
      emoji: "🏫",
      heading: "Found a School",
      description: "Gather families in your area. Hire a headmaster. Build the gymnasium stage. We can help.",
      action: <CTAButton href="/engage" variant="primary" size="md">Get the Founder's Toolkit</CTAButton>
    },
    // ... more cards
  ]}
/>
```

**Test File**: `components/__tests__/CardGrid.test.tsx`

**Test Coverage** (20 tests):
1. Renders correct number of cards
2. Displays emoji with aria-hidden
3. Renders heading and description
4. Applies variant-specific border colors (crisis/restoration/vision/neutral)
5. Defaults to 3 columns
6. Respects columns prop (2 or 3)
7. Renders optional action button
8. Applies custom className
9. Responsive grid classes present
10. Centered text layout
11. Card spacing correct
12. White background and rounded borders
13. Font families correct (Playfair for heading)
14. Text colors correct (forest for heading, charcoal for description)
15. No console errors/warnings
16. Matches snapshot (variant="crisis")
17. Matches snapshot (variant="restoration")
18. Matches snapshot (variant="vision")
19. Matches snapshot (with action buttons)
20. Accessibility: proper heading levels, semantic HTML

---

### 2. SummaryBox Component

**File**: `components/SummaryBox.tsx`

**Purpose**: Bordered summary/conclusion box with variant-specific theming for displaying syllogistic conclusions.

**TypeScript Interface**:
```typescript
interface SummaryBoxProps {
  variant: 'major-premise' | 'minor-premise' | 'conclusion';
  title?: string;
  children: React.ReactNode;
  className?: string;
}
```

**Behavior**:
- Variant-specific styling:
  - `major-premise`: bg-red-100, border-4 border-red-700, text-red-900 (title)
  - `minor-premise`: bg-green-100, border-4 border-green-700, text-green-900 (title)
  - `conclusion`: bg-gold/5, border-2 border-gold/40, text-gold-dark (title)
- Layout: max-w-4xl, mx-auto, rounded-lg, p-8, text-center
- Title: font-playfair, text-2xl, font-bold, mb-4
- Children: text-xl (for conclusions) or text-base (for regular text), text-charcoal/90, leading-relaxed
- Responsive: Reduce padding on mobile (p-6)

**Example Usage**:
```tsx
// Crisis Conclusion (Part I Section C)
<SummaryBox variant="major-premise" title="The Crisis Established:">
  <p className="text-xl leading-relaxed">
    Modern education has <strong>failed our sons</strong> by poisoning the well of wonder,
    eliminating physical and moral formation, and rushing to utilitarian specialization.
    The gymnasium and poetic stages—ages 7-17—have been abandoned.
  </p>
</SummaryBox>

// Minor Premise Summary (Part II)
<SummaryBox variant="minor-premise" title="The Restoration Established:">
  <p className="text-xl leading-relaxed">
    Poetic knowledge—cultivated through Senior's four stages (nursery, gymnasium, poetic,
    spiritual)—is the remedy to modern education's failure. The <strong>gymnasium stage
    (7-13)</strong> is the pivot: physical courage and ordered habit lay the foundation for
    all higher learning.
  </p>
</SummaryBox>

// Syllogism Recap (Part III)
<SummaryBox variant="conclusion">
  <div className="space-y-6">
    <div className="flex items-center justify-center gap-4 text-lg">
      <span className="font-bold">I. Crisis</span>
      <span>+</span>
      <span className="font-bold">II. Restoration</span>
      <span>=</span>
      <span className="font-bold text-2xl">∴ Vision</span>
    </div>
    <p className="text-base text-charcoal/90">
      A classical argument rooted in Senior, IHP, and Scripture
    </p>
  </div>
</SummaryBox>
```

**Test File**: `components/__tests__/SummaryBox.test.tsx`

**Test Coverage** (15 tests):
1. Renders children content
2. Displays optional title
3. Applies variant-specific background colors (major-premise/minor-premise/conclusion)
4. Applies variant-specific border styles
5. Applies variant-specific title colors
6. Centers content
7. Max-width constraint applied
8. Rounded corners present
9. Padding correct (p-8 desktop, p-6 mobile via responsive)
10. Custom className applied
11. Font families correct (Playfair for title)
12. Text sizes correct (title text-2xl, content varies)
13. No console errors/warnings
14. Matches snapshot (variant="major-premise")
15. Matches snapshot (variant="minor-premise")
16. Matches snapshot (variant="conclusion")
17. Works without title prop
18. Semantic HTML structure (div container, proper nesting)

---

## Implementation Steps

### Step 1: Create CardGrid Component
1. Create `components/CardGrid.tsx`
2. Implement TypeScript interface
3. Implement component logic with variant theming
4. Add responsive grid classes (grid-cols-1 md:grid-cols-2/3)
5. Style cards with borders, padding, centering
6. Handle optional action prop
7. Add JSDoc comments

### Step 2: Create CardGrid Tests
1. Create `components/__tests__/CardGrid.test.tsx`
2. Implement 20 test cases covering:
   - Rendering (cards, emoji, heading, description, action)
   - Variants (crisis, restoration, vision, neutral)
   - Responsive behavior (columns prop)
   - Styling (colors, fonts, spacing)
   - Accessibility (aria-hidden, semantic HTML)
   - Snapshots (all variants)

### Step 3: Create SummaryBox Component
1. Create `components/SummaryBox.tsx`
2. Implement TypeScript interface
3. Implement component logic with variant theming
4. Add responsive padding classes
5. Style borders, backgrounds, text colors
6. Add JSDoc comments

### Step 4: Create SummaryBox Tests
1. Create `components/__tests__/SummaryBox.test.tsx`
2. Implement 15+ test cases covering:
   - Rendering (children, title)
   - Variants (major-premise, minor-premise, conclusion)
   - Styling (colors, fonts, spacing, borders)
   - Responsive behavior
   - Snapshots (all variants)

### Step 5: Verification
1. Run TypeScript compilation: `npx tsc --noEmit --skipLibCheck`
   - Expect: 3 pre-existing errors only (acceptable)
2. Run tests: `npm test CardGrid SummaryBox`
   - Expect: All new tests passing (~35 total)
3. Visual check: Import components in page.tsx temporarily to verify rendering
4. Git commit: "feat(components): add CardGrid and SummaryBox pattern components"

---

## Acceptance Criteria

### Must Have
- [x] CardGrid.tsx created with correct TypeScript interface
- [x] CardGrid renders 2-3 column responsive grids
- [x] CardGrid applies variant-specific border colors
- [x] CardGrid handles optional action prop
- [x] CardGrid.test.tsx with 20+ tests passing
- [x] SummaryBox.tsx created with correct TypeScript interface
- [x] SummaryBox renders variant-specific theming
- [x] SummaryBox centers content with max-width
- [x] SummaryBox.test.tsx with 15+ tests passing
- [x] TypeScript compiles clean (3 pre-existing errors only)
- [x] All tests passing (268 existing + 35 new = 303/306)

### Should Have
- [x] JSDoc comments on all public interfaces
- [x] Snapshot tests for all variants
- [x] Accessibility attributes (aria-hidden on emoji)
- [x] Responsive classes verified
- [x] Git commit created

### Nice to Have
- [x] Storybook stories (if Storybook configured)
- [x] Visual regression baseline screenshots
- [x] Performance profiling (should be minimal - stateless components)

---

## Verification Commands

```bash
# TypeScript check
npx tsc --noEmit --skipLibCheck

# Run new component tests only
npm test -- CardGrid SummaryBox

# Run all tests to verify no regressions
npm test -- --passWithNoTests

# Visual check (start dev server)
npm run dev
```

---

## Next Steps

After completing this prompt:
1. **Prompt 20**: Create EvidenceQuoteGroup, ComparisonDiagram, and StudyGrid components
2. These pattern components will be used by subsection components in Phases 2-4

---

## Notes

- Do NOT modify page.tsx in this prompt - only create new components
- These components are foundational for all subsection extractions
- Test snapshots should be committed to establish baseline
- Variant theming must match existing SyllogismSection colors exactly
- Keep components pure/stateless for maximum reusability

---

**End of Prompt 19**
