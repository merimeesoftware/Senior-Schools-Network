# Prompt 6: Implement Progressive Disclosure

## Objective
Add summary-first mode to all subsection components with expand/collapse functionality, reducing initial visible page height by ~40-50% while preserving all content depth.

## Context
This is the final and most impactful phase. Each subsection (A/B/C) will show a compact 2-3 sentence summary initially, with a "Read Full Argument" button to expand the complete content. This dramatically reduces scrolling while maintaining scholarly rigor.

## Requirements

### 1. Add Summary Mode to All Subsection Components

**Apply to these files**:
- `components/philosophy/CrisisSubsectionA.tsx`
- `components/philosophy/CrisisSubsectionB.tsx`
- `components/philosophy/CrisisSubsectionC.tsx`
- `components/philosophy/RestorationSubsectionA.tsx`
- `components/philosophy/RestorationSubsectionB.tsx`
- `components/philosophy/RestorationSubsectionC.tsx`
- `components/philosophy/VisionSubsections.tsx` (all three: Recap, WarriorPoet, CallToAction)

**New Prop**:
```typescript
interface SubsectionProps {
  className?: string;
  summaryMode?: boolean; // NEW - default: true
}
```

**State Management**:
```typescript
const [isExpanded, setIsExpanded] = useState(!summaryMode);
```

### 2. Summary View Structure

When `!isExpanded`, render compact summary:

```typescript
if (!isExpanded) {
  return (
    <div className={`space-y-6 ${className}`}>
      <div className="bg-parchment/30 border-l-4 border-[VARIANT-COLOR] p-6 rounded-r-lg">
        {/* Heading */}
        <h3 className="font-playfair text-3xl font-bold text-[VARIANT-COLOR] mb-3">
          [Subsection Letter]. [Subsection Title]
        </h3>
        
        {/* Summary Text (2-3 sentences) */}
        <p className="text-lg text-charcoal/80 leading-relaxed mb-4">
          [Concise summary of the subsection's argument]
        </p>
        
        {/* Expand Button */}
        <button
          onClick={() => setIsExpanded(true)}
          className="flex items-center gap-2 text-forest font-medium hover:text-gold transition-colors focus-visible-ring rounded-lg px-4 py-2"
          aria-label="Read full argument for [subsection name]"
        >
          <span>Read Full Argument</span>
          <ChevronDownIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
```

**Variant Colors**:
- Crisis subsections: border-red-700, text-red-900
- Restoration subsections: border-green-700, text-green-900
- Vision subsections: border-gold, text-gold-dark

### 3. Expanded View Structure

When `isExpanded`, render full content with collapse button:

```typescript
return (
  <div id="[subsection-id]" className={`space-y-12 ${className}`}>
    {/* Collapse Button at Top */}
    <button
      onClick={() => setIsExpanded(false)}
      className="flex items-center gap-2 text-charcoal/70 hover:text-forest text-sm font-medium transition-colors focus-visible-ring rounded-lg px-3 py-1.5"
      aria-label="Collapse [subsection name]"
    >
      <ChevronUpIcon className="w-4 h-4" />
      <span>Collapse</span>
    </button>

    {/* Full Original Content */}
    <h3 className="font-playfair text-4xl font-bold text-[VARIANT-COLOR]">
      [Subsection Letter]. [Subsection Title]
    </h3>

    {/* All existing content: ProblemSolutionPanel, CollapsibleEvidenceQuotes, etc. */}
  </div>
);
```

### 4. Summary Text Guidelines

Write concise 2-3 sentence summaries that capture:
- The core problem being addressed
- The solution or restoration principle
- Key evidence or source (if applicable)

**Example for CrisisSubsectionA**:
```
Screen addiction (7 hours/day) has replaced outdoor wonder. Boys who have never climbed trees or felt physical risk cannot develop the connaturality with reality that Senior calls "poetic knowledge." The solution: nature immersion and "benevolent neglect" that restores sensory integration.
```

**Example for RestorationSubsectionB**:
```
The gymnasium stage (ages 7-13) demands sport, Latin, and adventure—building physical courage and ordered habits. Without this foundation, boys cannot develop the moral resilience prerequisite for intellectual and spiritual formation. Senior calls it "the pivot"—skip it and the whole structure collapses.
```

### 5. Implementation Pattern

**For each subsection file**:

1. Add `summaryMode` prop with default `true`
2. Add `isExpanded` state initialized to `!summaryMode`
3. Add conditional rendering:
   - If `!isExpanded`: render summary view
   - If `isExpanded`: render full view with collapse button
4. Import ChevronDownIcon and ChevronUpIcon from @heroicons/react/24/outline
5. Write concise, accurate summary text
6. Ensure all existing content preserved in expanded view

**Template**:
```typescript
'use client';
import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
// ... other imports

interface [Subsection]Props {
  className?: string;
  summaryMode?: boolean;
}

export function [Subsection]({ 
  className = '',
  summaryMode = true 
}: [Subsection]Props) {
  const [isExpanded, setIsExpanded] = useState(!summaryMode);

  // Summary view
  if (!isExpanded) {
    return (
      <div className={`space-y-6 ${className}`}>
        <div className="bg-parchment/30 border-l-4 border-[COLOR] p-6 rounded-r-lg">
          <h3 className="font-playfair text-3xl font-bold text-[COLOR] mb-3">
            [Letter]. [Title]
          </h3>
          <p className="text-lg text-charcoal/80 leading-relaxed mb-4">
            [Summary text 2-3 sentences]
          </p>
          <button
            onClick={() => setIsExpanded(true)}
            className="flex items-center gap-2 text-forest font-medium hover:text-gold transition-colors focus-visible-ring rounded-lg px-4 py-2"
          >
            <span>Read Full Argument</span>
            <ChevronDownIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    );
  }

  // Expanded view
  return (
    <div id="[id]" className={`space-y-12 ${className}`}>
      <button
        onClick={() => setIsExpanded(false)}
        className="flex items-center gap-2 text-charcoal/70 hover:text-forest text-sm font-medium transition-colors focus-visible-ring rounded-lg px-3 py-1.5"
      >
        <ChevronUpIcon className="w-4 h-4" />
        <span>Collapse</span>
      </button>

      {/* Original content here */}
    </div>
  );
}
```

### 6. Vision Subsections Special Handling

The Vision section has different subsection components:
- `VisionSyllogismRecap` - Summary of the complete argument
- `VisionWarriorPoet` - Definition and characteristics
- `VisionCallToAction` - Next steps for users

Apply the same pattern but consider shorter summaries for these (1-2 sentences).

### 7. State Persistence Across Tabs

Since subsections are now inside tabs, expansion state should persist when switching tabs:
- User expands Crisis A
- Switches to Crisis B tab
- Switches back to Crisis A tab
- Crisis A should still be expanded

This is handled automatically by React state since the component doesn't unmount.

## Summary Text Reference

### Crisis Subsections

**CrisisSubsectionA**:
```
Screen addiction (7 hours/day) has replaced outdoor wonder. Boys who have never climbed trees or felt physical risk cannot develop the connaturality with reality that Senior calls "poetic knowledge." The solution: nature immersion and "benevolent neglect" that restores sensory integration.
```

**CrisisSubsectionB**:
```
Modern education has neutered boyhood through risk elimination—dodgeball banned, tree-climbing forbidden, contact sports replaced with "cooperative games." The gymnasium stage (ages 7-13) demands sport, Latin, and adventure to build physical courage. Without this foundation, boys become morally and physically soft, unable to endure intellectual rigor or spiritual trial.
```

**CrisisSubsectionC**:
```
Rushing boys into STEM specialization by age 13—before poetic knowledge is established—produces alienated technicians, not integrated thinkers. Boys memorize biology terms but never feel wonder at creation; they solve calculus but never read poetry. Senior's solution: three years of integrated humanities (music, art, philosophy) before any specialized study, establishing poetic knowledge as the fertile soil from which all learning grows.
```

### Restoration Subsections

**RestorationSubsectionA**:
```
Dr. John Senior's model follows four natural developmental stages: nursery (ages 0-7, wonder), gymnasium (7-13, discipline), poetic (13-17, integration), and spiritual (all ages, wisdom). These are not arbitrary divisions but organic phases corresponding to the child's physical, intellectual, and spiritual maturation. Skip any stage and the whole structure collapses.
```

**RestorationSubsectionB**:
```
The gymnasium stage (ages 7-13) demands three things: sport (rugby, boxing, swimming—full-contact, high-risk), Latin (memory training, ordered mind), and adventure (camping, exploration, danger under benevolent supervision). Physical courage and discipline built here become the foundation for intellectual rigor (poetic stage) and spiritual trial (spiritual stage). Senior: "Without the gymnasium, the poetic stage collapses—there is no soil for higher learning."
```

**RestorationSubsectionC**:
```
The poetic stage (ages 13-17) is the fertile soil from which all higher learning must grow. Music, art, poetry, and philosophy—integrated through liturgical rhythm—train the boy to see reality as a whole, not as fragmented facts. The IHP model: three years of integrated humanities before any specialized study. Only after poetic knowledge is established can science and specialization be safely introduced.
```

### Vision Subsections

**VisionSyllogismRecap**:
```
The argument complete: Modern education has failed (screens, softness, specialization destroy the gymnasium). Poetic knowledge is the remedy (four stages restore the natural order). Therefore: boys formed in the gymnasium and rooted in poetic knowledge will become warrior poets—men who defend truth, build families, and restore Christian culture.
```

**VisionWarriorPoet**:
```
A warrior poet is a man formed through Senior's four stages: wonder-filled, physically disciplined, integrated in mind, and ordered to God. He brings courage to intellectual work, beauty to practical tasks, and wisdom to cultural engagement. Not a scholar-only or soldier-only, but an integrated whole: strong enough to defend truth, wise enough to contemplate beauty, humble enough to serve.
```

**VisionCallToAction**:
```
Your path forward depends on your role: Parents/Educators—restore the gymnasium at home or school. Founders—start a network school embodying this vision. Supporters—pray, donate, connect. The restoration begins with you. Explore the network, study the texts, and take the next step toward warrior-poet formation.
```

## Implementation Steps

1. **Start with one subsection** (e.g., CrisisSubsectionA) to establish pattern
2. **Test thoroughly** before applying to others
3. **Apply pattern to remaining Crisis subsections**
4. **Test Crisis section** with all tabs and expand/collapse
5. **Apply to Restoration subsections**
6. **Test Restoration section**
7. **Apply to Vision subsections**
8. **Final testing** of entire page

## Success Criteria

- [ ] All subsections have summary mode
- [ ] Summary text concise (2-3 sentences) and accurate
- [ ] Expand button visible and accessible
- [ ] Full content loads on expand (all components present)
- [ ] Collapse button returns to summary
- [ ] State persists when switching tabs
- [ ] Chevron icons import correctly
- [ ] Focus visible on buttons
- [ ] Keyboard accessible (Tab + Enter)
- [ ] Mobile responsive
- [ ] Initial page load shows compact summaries only
- [ ] Page height dramatically reduced (~40-50%)

## Testing Checklist

**Functionality Per Subsection**:
- [ ] Renders collapsed initially
- [ ] Summary text displays
- [ ] "Read Full Argument" button works
- [ ] Full content loads with all components
- [ ] "Collapse" button returns to summary
- [ ] No console errors

**State Management**:
- [ ] Expand subsection A
- [ ] Switch to tab B
- [ ] Switch back to tab A
- [ ] Subsection A still expanded

**Accessibility**:
- [ ] Tab key reaches expand button
- [ ] Enter/Space activates expand
- [ ] Tab key reaches collapse button
- [ ] Enter/Space activates collapse
- [ ] Focus ring visible
- [ ] aria-label on buttons
- [ ] Screen reader announces correctly

**Visual**:
- [ ] Summary container styled correctly
- [ ] Border color matches subsection variant
- [ ] Heading hierarchy clear
- [ ] Button hover states visible
- [ ] Icons render correctly
- [ ] Mobile: summary readable, button accessible
- [ ] No layout shift on expand/collapse

**Integration**:
- [ ] Works within tabbed interface
- [ ] Progress indicator not affected
- [ ] Other components (CollapsibleEvidenceQuotes, etc.) still work
- [ ] Page scrolling smooth

**Performance**:
- [ ] Expand/collapse feels instant (<100ms)
- [ ] No excessive re-renders
- [ ] Smooth animations
- [ ] Initial load faster (less content rendered)

## Design Notes

**Summary Quality**:
- Must be accurate (no misleading simplifications)
- Must be concise (fit on 2-3 lines)
- Must entice readers to expand (hint at depth)
- Must use philosophical terminology appropriately

**Button Placement**:
- Expand: At bottom of summary (natural reading flow)
- Collapse: At top of expanded view (quick access to close)
- Both: Clear visual affordance (icons + text)

**State Default**:
- Summary mode: true (collapsed by default)
- Allows override: summaryMode={false} for always-expanded

**Progressive Enhancement**:
- If JavaScript fails: summaryMode={false} fallback
- All content still accessible
- No functionality lost

## Alignment with Philosophy

This change maintains:
- ✅ All philosophical content preserved (zero information loss)
- ✅ Scholarly depth accessible on demand
- ✅ User agency (manual expand, not time-based or automatic)
- ✅ Clear argument structure (summaries provide roadmap)
- ✅ Source attribution intact (in expanded view)

Dramatically reduces scrolling fatigue while respecting reader intelligence and preserving complete philosophical rigor.

---

## Final Validation

After implementing all 6 prompts:

1. **Visual Inspection**: Scroll through entire Philosophy page
2. **Height Measurement**: Compare before/after page heights
3. **Content Audit**: Verify all original content still accessible
4. **Accessibility Check**: Lighthouse + axe DevTools
5. **Performance Check**: Lighthouse Performance score
6. **User Testing**: Ask someone to navigate the page

**Expected Results**:
- Initial visible height: ~4,000-5,000px (down from 15,000-18,000px)
- Full expanded height: ~6,000-8,000px (down from 15,000-18,000px)
- All content accessible via expand buttons
- Smooth interactions throughout
- No accessibility regressions
- Improved Lighthouse scores

---

**This completes the 6-prompt implementation plan for Philosophy page restructuring.**
