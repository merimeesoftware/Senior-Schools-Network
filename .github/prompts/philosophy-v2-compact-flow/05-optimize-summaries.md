# Prompt 5: Optimize Summary Components

## Objective
Move "Summary: The Three Poisons" section to the top of the Crisis section as a compact TL;DR and remove the duplicate from CrisisSubsectionC, saving ~200-300px.

## Context
Currently, CrisisSubsectionC includes a large "Summary: The Three Poisons" section with a CardGrid displaying the three poisons (screens, softness, specialization). Moving this to the top of the entire Crisis section provides a clear overview before diving into subsections, and eliminates redundancy.

## Requirements

### 1. Add Summary to Top of Crisis Section

**Location**: `app/(site)/philosophy/page.tsx`

**Placement**: Inside the Crisis `SyllogismSection`, before the `SubsectionTabs`

**Structure**:
```typescript
<SyllogismSection 
  type="major" 
  title="The Crisis: Modern Education Has Failed"
  subtitle="Three poisons—screens, softness, specialization—have destroyed the gymnasium stage and with it, the foundation for all higher learning."
  number="I" 
  id="major-premise"
>
  <div className="max-w-6xl mx-auto space-y-8">
    
    {/* NEW: Summary Section - Add This */}
    <div className="bg-red-50 border-l-4 border-red-700 p-6 rounded-r-lg">
      <h3 className="font-playfair text-2xl font-bold text-red-900 mb-4">
        Summary: The Three Poisons
      </h3>
      <p className="text-base text-charcoal/90 leading-relaxed mb-6">
        Modern education has systematically destroyed the gymnasium and poetic stages through three interconnected failures:
      </p>
      
      {/* Compact 3-column card grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="text-center p-4 bg-white rounded-lg shadow-sm">
          <div className="text-4xl mb-2">📱</div>
          <div className="font-playfair font-bold text-red-900 mb-1 text-lg">Screens</div>
          <div className="text-sm text-charcoal/70 leading-snug">
            Replace wonder & sensory integration
          </div>
        </div>
        
        <div className="text-center p-4 bg-white rounded-lg shadow-sm">
          <div className="text-4xl mb-2">🛡️</div>
          <div className="font-playfair font-bold text-red-900 mb-1 text-lg">Softness</div>
          <div className="text-sm text-charcoal/70 leading-snug">
            Replace risk & physical discipline
          </div>
        </div>
        
        <div className="text-center p-4 bg-white rounded-lg shadow-sm">
          <div className="text-4xl mb-2">🔬</div>
          <div className="font-playfair font-bold text-red-900 mb-1 text-lg">Specialization</div>
          <div className="text-sm text-charcoal/70 leading-snug">
            Replace integrated poetic knowledge
          </div>
        </div>
      </div>
    </div>

    {/* Existing: Tabbed subsections */}
    <SubsectionTabs variant="crisis" tabs={[...]} />
    
  </div>
</SyllogismSection>
```

**Styling Details**:
- Container: bg-red-50, border-l-4 border-red-700, padding 1.5rem, rounded-r-lg
- Heading: font-playfair, text-2xl, font-bold, text-red-900
- Description: text-base, text-charcoal/90, margin-bottom 1.5rem
- Grid: 1 column mobile, 3 columns desktop, gap-4
- Cards: padding 1rem, bg-white, rounded-lg, shadow-sm
- Emoji: text-4xl, margin-bottom 0.5rem
- Card heading: font-playfair, font-bold, text-red-900, text-lg
- Card description: text-sm, text-charcoal/70, leading-snug

### 2. Remove Duplicate from CrisisSubsectionC

**Location**: `components/philosophy/CrisisSubsectionC.tsx`

**Remove these sections**:

```typescript
// DELETE THIS ENTIRE SECTION:
<div className="space-y-8">
  <h3 className="font-playfair text-3xl font-bold text-forest text-center">
    Summary: The Three Poisons
  </h3>
  <p className="text-center text-lg text-charcoal/90 max-w-3xl mx-auto">
    Modern education has systematically destroyed the gymnasium and poetic stages through three
    interconnected failures:
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
```

**Keep these sections**:
- ProblemSolutionPanel (STEM-First Curriculum vs. Poetic Knowledge as Foundation)
- CollapsibleEvidenceQuotes (Evidence from the Sources)
- ComparisonDiagram (The Poisoned Well: STEM Without Poetic Soil)
- SummaryBox (The Crisis Established)

**Simplified Structure**:
```typescript
export function CrisisSubsectionC({ className = '' }: CrisisSubsectionCProps) {
  return (
    <div id="major-premise-c" className={`space-y-12 ${className}`}>
      <h3 className="font-playfair text-4xl font-bold text-red-900">
        C. The Specialized Knowledge Crisis
      </h3>

      <ProblemSolutionPanel
        layout="split"
        collapsible={true}
        problem={{...}}
        solution={{...}}
      />

      <CollapsibleEvidenceQuotes
        variant="major-premise"
        quotes={[...]}
      />

      <ComparisonDiagram
        title="The Poisoned Well: STEM Without Poetic Soil"
        description="Specialization must grow from poetic soil, not replace it"
        leftColumn={{...}}
        rightColumn={{...}}
      />

      <SummaryBox variant="major-premise" title="The Crisis Established:">
        <p className="text-xl leading-relaxed">
          Modern education has <strong>failed us and our children</strong> by poisoning the well of wonder,
          eliminating physical and moral formation, and rushing to utilitarian specialization.
        </p>
      </SummaryBox>
    </div>
  );
}
```

### 3. Optional: Remove CardGrid Import

If CardGrid is no longer used in CrisisSubsectionC, remove the import:

```typescript
// DELETE IF NO LONGER NEEDED:
import CardGrid from "@/components/CardGrid";
```

## Implementation Steps

1. **Open** `app/(site)/philosophy/page.tsx`
2. **Find** the Crisis SyllogismSection
3. **Add** the new summary section before SubsectionTabs
4. **Save** and verify it displays correctly
5. **Open** `components/philosophy/CrisisSubsectionC.tsx`
6. **Delete** the duplicate summary section
7. **Remove** CardGrid import if unused elsewhere
8. **Save** and verify subsection C still displays correctly

## Success Criteria

- [ ] Summary appears at top of Crisis section (before tabs)
- [ ] Three poison cards display in 3-column grid
- [ ] Mobile: cards stack to 1 column
- [ ] Desktop: cards in 3 columns with gap-4
- [ ] No duplicate summary in subsection C
- [ ] CrisisSubsectionC still displays ProblemSolutionPanel, Evidence, ComparisonDiagram, SummaryBox
- [ ] No console errors
- [ ] Page height reduced

## Testing Checklist

**Visual Hierarchy**:
- [ ] Summary is first thing seen after Crisis section heading
- [ ] Red border and background clearly indicate Crisis theme
- [ ] Cards visually balanced and readable
- [ ] Emoji icons render correctly
- [ ] Text contrast sufficient (WCAG AA)

**Content**:
- [ ] Summary text accurate and concise
- [ ] Card headings match the three poisons
- [ ] Card descriptions clear
- [ ] No duplicate content elsewhere

**Responsive**:
- [ ] Mobile: cards stack vertically
- [ ] Tablet: 2-3 columns depending on width
- [ ] Desktop: 3 columns with even spacing
- [ ] No overflow or horizontal scroll

**Integration**:
- [ ] Summary appears before tabs
- [ ] Tabs still functional
- [ ] SubsectionC displays correctly without duplicate
- [ ] Progress indicator not affected

## Design Notes

**Why Move to Top**:
- Provides TL;DR before detailed exploration
- Users see the framework immediately
- Reduces need to scroll to end of section for summary
- Aligns with inverted pyramid writing style (important info first)

**Compact Card Design**:
- Smaller than original CardGrid
- White cards on red background create good contrast
- Emoji provides visual interest and memory hook
- Short descriptions fit on one line

**What's Preserved**:
- All three poison concepts
- Visual hierarchy (emoji + heading + description)
- Red color coding
- Mobile responsiveness

## Alignment with Philosophy

This change maintains:
- ✅ All philosophical content preserved (no information lost)
- ✅ Clear structural overview (summary before detail)
- ✅ Visual consistency (red theme for crisis)
- ✅ Logical flow (overview → exploration → conclusion)

Reduces redundancy and improves information architecture.

---

**Next**: After successful implementation and testing, proceed to Prompt 6 (Implement Progressive Disclosure).
