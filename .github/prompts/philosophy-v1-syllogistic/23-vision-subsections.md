# Prompt 23: Vision Subsections - Extract Part III Components

**Phase**: 4 of 5 (Subsection Component Extraction - Part III)  
**Dependencies**: Prompt 22 (Part II subsections complete)  
**Estimated Time**: 30 minutes

---

## Goal

Extract Part III (The Vision) subsections from page.tsx into dedicated components, utilizing pattern components from Phase 1. This removes ~90 lines of inline JSX from page.tsx.

---

## Context

After Prompt 22, Parts I and II are fully componentized:
- Crisis and Restoration subsections created and tested
- ~535 lines removed from page.tsx
- Pattern components in heavy use

Now we extract Part III (The Vision) subsections:
- **VisionSyllogismRecap**: Three-part logic display (~30 lines inline)
- **VisionWarriorPoet**: Warrior/Poet/Catholic cards (~40 lines inline)
- **VisionCallToAction**: Found/Join/Adapt CTAs (~40 lines inline)

Note: VisionCounterarguments already uses CounterargumentAccordion component (created in Prompt 05), so no extraction needed.

---

## Component Specifications

### 1. VisionSyllogismRecap Component

**File**: `components/philosophy/VisionSyllogismRecap.tsx`

**Purpose**: Displays the complete syllogistic argument recap showing I + II = ∴ III with color-coded parts.

**TypeScript Interface**:
```typescript
interface VisionSyllogismRecapProps {
  className?: string;
}
```

**Content Structure**:
1. **Heading**: "The Argument Complete"
2. **SummaryBox**: Three-part logic (I. Crisis + II. Restoration = ∴ Vision)

**Extracted from page.tsx lines**: ~1040-1070

**Example Structure**:
```tsx
export function VisionSyllogismRecap({ className }: VisionSyllogismRecapProps) {
  return (
    <div className={cn("space-y-8", className)}>
      <h3 className="font-playfair text-4xl font-bold text-gold-dark text-center">
        The Argument Complete
      </h3>

      <SummaryBox variant="conclusion">
        <div className="space-y-6">
          <div className="space-y-4 text-left">
            <div className="flex items-start gap-4">
              <span className="font-bold text-red-700 flex-shrink-0">I.</span>
              <p className="text-base text-charcoal/90 leading-relaxed">
                <strong>The Crisis:</strong> Modern education has failed our sons through screens,
                softness, and specialized knowledge—poisoning the gymnasium and poetic stages.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <span className="font-bold text-green-700 flex-shrink-0">II.</span>
              <p className="text-base text-charcoal/90 leading-relaxed">
                <strong>The Restoration:</strong> Poetic knowledge—cultivated through Senior's four
                stages—is the remedy. The gymnasium stage (7-13) builds the physical and moral courage
                prerequisite for all higher learning.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <span className="font-bold text-gold-dark text-xl flex-shrink-0">∴</span>
              <p className="text-base text-charcoal/90 leading-relaxed">
                <strong>The Vision:</strong> Boys formed in the gymnasium—physically resilient,
                morally courageous—and rooted in poetic knowledge will become warrior poets: men who
                defend truth, build families, and restore Christian culture.
              </p>
            </div>
          </div>
        </div>
      </SummaryBox>
    </div>
  );
}
```

**Test File**: `components/philosophy/__tests__/VisionSyllogismRecap.test.tsx`

**Test Coverage** (10 tests):
1. Renders heading "The Argument Complete"
2. Renders SummaryBox with conclusion variant
3. Displays I. The Crisis (red text)
4. Displays II. The Restoration (green text)
5. Displays ∴ The Vision (gold text)
6. All three parts have correct content
7. Applies custom className
8. No console errors/warnings
9. Matches snapshot
10. Accessibility: proper heading hierarchy, semantic structure

---

### 2. VisionWarriorPoet Component

**File**: `components/philosophy/VisionWarriorPoet.tsx`

**Purpose**: Defines the three components of a warrior poet: Warrior (physical), Poet (intellectual), Catholic (spiritual).

**TypeScript Interface**:
```typescript
interface VisionWarriorPoetProps {
  className?: string;
}
```

**Content Structure**:
1. **Heading**: "What Is a Warrior Poet?"
2. **CardGrid**: Three cards (Warrior 🛡️, Poet 🎨, Catholic ✝️)
3. **Closing paragraph**: Natural outcome of Senior's stages

**Extracted from page.tsx lines**: ~1070-1110

**Example Structure**:
```tsx
export function VisionWarriorPoet({ className }: VisionWarriorPoetProps) {
  return (
    <div className={cn("space-y-12", className)}>
      <h3 className="font-playfair text-4xl font-bold text-gold-dark text-center">
        What Is a Warrior Poet?
      </h3>

      <CardGrid
        variant="vision"
        columns={3}
        cards={[
          {
            emoji: "🛡️",
            heading: "Warrior",
            description: "Physically resilient, morally courageous, ready to defend truth and family. Forged in the gymnasium through sport, adventure, and discipline."
          },
          {
            emoji: "🎨",
            heading: "Poet",
            description: "Rooted in poetic knowledge: music, art, philosophy integrated through liturgical rhythm. Sees reality as a unified whole, not fragmented facts."
          },
          {
            emoji: "✝️",
            heading: "Catholic",
            description: "Formed in liturgical wisdom, rooted in Tradition, ordered to eternal truth. Education is formation for heaven, not mere career preparation."
          }
        ]}
      />

      <p className="text-lg text-charcoal/90 text-center max-w-3xl mx-auto leading-relaxed">
        The warrior poet is not a romantic ideal but the natural outcome of Senior's four stages.
        Physical courage (gymnasium) + integrated learning (poetic) + liturgical wisdom (spiritual)
        = men who can restore Christendom.
      </p>
    </div>
  );
}
```

**Test File**: `components/philosophy/__tests__/VisionWarriorPoet.test.tsx`

**Test Coverage** (10 tests):
1. Renders heading "What Is a Warrior Poet?"
2. Renders CardGrid with 3 cards
3. Card 1: Warrior emoji and description
4. Card 2: Poet emoji and description
5. Card 3: Catholic emoji and description
6. Renders closing paragraph
7. CardGrid has vision variant styling
8. Applies custom className
9. No console errors/warnings
10. Matches snapshot

---

### 3. VisionCallToAction Component

**File**: `components/philosophy/VisionCallToAction.tsx`

**Purpose**: Three actionable paths for users - founding schools, joining schools, or adapting at home.

**TypeScript Interface**:
```typescript
interface VisionCallToActionProps {
  className?: string;
}
```

**Content Structure**:
1. **Heading**: "What You Can Do"
2. **CardGrid**: Three cards with CTAButtons (Found 🏫, Join 🤝, Adapt 🏡)

**Extracted from page.tsx lines**: ~1180-1240

**Example Structure**:
```tsx
import { CTAButton } from '../CTAButton';

export function VisionCallToAction({ className }: VisionCallToActionProps) {
  return (
    <div className={cn("pt-16 border-t-4 border-gold space-y-12", className)}>
      <h3 className="font-playfair text-4xl font-bold text-forest text-center">
        What You Can Do
      </h3>

      <CardGrid
        variant="vision"
        columns={3}
        cards={[
          {
            emoji: "🏫",
            heading: "Found a School",
            description: "Gather families in your area. Hire a headmaster. Build the gymnasium stage. We can help.",
            action: (
              <CTAButton href="/engage" variant="primary" size="md">
                Get the Founder's Toolkit
              </CTAButton>
            )
          },
          {
            emoji: "🤝",
            heading: "Join a School",
            description: "Explore the network of schools already implementing Senior's philosophy.",
            action: (
              <CTAButton href="/schools" variant="secondary" size="md">
                Browse Schools
              </CTAButton>
            )
          },
          {
            emoji: "🏡",
            heading: "Adapt at Home",
            description: "Homeschool families: outdoor play, Latin primers, adventure. The gymnasium is accessible.",
            action: (
              <CTAButton href="/texts" variant="outline" size="md">
                Read the Sources
              </CTAButton>
            )
          }
        ]}
      />
    </div>
  );
}
```

**Test File**: `components/philosophy/__tests__/VisionCallToAction.test.tsx`

**Test Coverage** (12 tests):
1. Renders heading "What You Can Do"
2. Renders CardGrid with 3 cards
3. Card 1: Found a School with primary CTA to /engage
4. Card 2: Join a School with secondary CTA to /schools
5. Card 3: Adapt at Home with outline CTA to /texts
6. Border-top styling present (border-t-4 border-gold)
7. CardGrid has vision variant styling
8. All CTAButtons render with correct props
9. Applies custom className
10. No console errors/warnings
11. Matches snapshot
12. Accessibility: CTA buttons have proper aria labels

---

## Implementation Steps

### Step 1: Extract VisionSyllogismRecap
1. Create `components/philosophy/VisionSyllogismRecap.tsx`
2. Copy content from page.tsx lines ~1040-1070
3. Wrap three-part logic in SummaryBox component
4. Color-code part numbers (I=red, II=green, ∴=gold)
5. Add TypeScript interface and exports
6. Add JSDoc comments

### Step 2: Create VisionSyllogismRecap Tests
1. Create `components/philosophy/__tests__/VisionSyllogismRecap.test.tsx`
2. Implement 10 test cases
3. Run tests: `npm test VisionSyllogismRecap`

### Step 3: Extract VisionWarriorPoet
1. Create `components/philosophy/VisionWarriorPoet.tsx`
2. Copy content from page.tsx lines ~1070-1110
3. Replace warrior poet cards with CardGrid component
4. Add TypeScript interface and exports
5. Add JSDoc comments

### Step 4: Create VisionWarriorPoet Tests
1. Create `components/philosophy/__tests__/VisionWarriorPoet.test.tsx`
2. Implement 10 test cases
3. Run tests: `npm test VisionWarriorPoet`

### Step 5: Extract VisionCallToAction
1. Create `components/philosophy/VisionCallToAction.tsx`
2. Copy content from page.tsx lines ~1180-1240
3. Replace CTA cards with CardGrid component (with action prop using CTAButton)
4. Import CTAButton component
5. Add TypeScript interface and exports
6. Add JSDoc comments

### Step 6: Create VisionCallToAction Tests
1. Create `components/philosophy/__tests__/VisionCallToAction.test.tsx`
2. Implement 12 test cases
3. Run tests: `npm test VisionCallToAction`

### Step 7: Update page.tsx
1. Import new subsection components at top of file
2. Replace Part III inline JSX (lines ~1040-1240) with:
```tsx
<SyllogismSection type="conclusion" title="..." number="∴">
  <VisionSyllogismRecap />
  <VisionWarriorPoet />
  <div className="space-y-8">
    <h3 className="font-playfair text-4xl font-bold text-forest text-center">
      Objections & Answers
    </h3>
    <CounterargumentAccordion objections={[...]} />
  </div>
  <VisionCallToAction />
</SyllogismSection>
```
3. Note: CounterargumentAccordion stays in page.tsx (already componentized)
4. Verify spacing and border styling

### Step 8: Verification
1. Run TypeScript: `npx tsc --noEmit --skipLibCheck`
   - Expect: 3 pre-existing errors only
2. Run all tests: `npm test -- --passWithNoTests`
   - Expect: 415 + 32 = 447/450 passing
3. Visual check: `npm run dev` - verify Part III renders identically
4. Screenshot comparison (before/after)
5. Git commit: "refactor(philosophy): extract Part III subsections into components"

---

## Acceptance Criteria

### Must Have
- [x] VisionSyllogismRecap.tsx created and tested (10 tests)
- [x] VisionWarriorPoet.tsx created and tested (10 tests)
- [x] VisionCallToAction.tsx created and tested (12 tests)
- [x] page.tsx updated to use new components
- [x] Visual parity maintained (no UI changes)
- [x] TypeScript compiles clean (3 pre-existing errors only)
- [x] All tests passing (447/450 total)
- [x] ~90 lines removed from page.tsx

### Should Have
- [x] JSDoc comments on all components
- [x] Snapshot tests for all subsections
- [x] Accessibility verified (heading hierarchy, CTAs)
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
npm test -- Vision

# Run all tests
npm test -- --passWithNoTests

# Visual check
npm run dev
# Navigate to http://localhost:3000/philosophy
# Verify Part III renders correctly
```

---

## Next Steps

After completing this prompt:
1. **Prompt 24**: Final integration - clean up page.tsx, verify all components integrated, final testing
2. All three parts fully componentized, ~625 lines removed from page.tsx

---

## Notes

- Maintain exact visual parity - no styling changes
- VisionCallToAction has border-top styling that must be preserved
- CounterargumentAccordion stays in page.tsx (already a component)
- All CTAButton props must match exactly (href, variant, size)
- Use cn() utility for className merging
- Export components as named exports for easier testing

---

**End of Prompt 23**
