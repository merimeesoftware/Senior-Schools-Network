# Prompt 3: Add Collapsible Mode to ProblemSolutionPanel

## Objective
Enhance the existing `ProblemSolutionPanel` component with an optional collapsible accordion mode to reduce vertical space by ~1,000-1,500px across all instances.

## Context
The ProblemSolutionPanel currently displays Problem and Solution in a split (side-by-side) or stacked layout that is always visible. Adding a collapsible mode allows users to expand only the sections they want to read, reducing initial visual clutter.

## Requirements

### 1. Enhance Component: `components/ProblemSolutionPanel.tsx`

**Add New Prop**:
```typescript
interface ProblemSolutionPanelProps {
  layout: 'split' | 'stacked';
  problem: {
    title: string;
    description: string;
    quote?: QuoteData;
  };
  solution: {
    title: string;
    description: string;
    quote?: QuoteData;
  };
  className?: string;
  collapsible?: boolean; // NEW - default: false
}
```

**Behavior**:
- When `collapsible={false}` (default): Render original split/stacked layout (no changes to existing behavior)
- When `collapsible={true}`: Render new collapsible accordion layout

**Collapsible Layout Features**:
- Problem and Solution as separate accordion sections
- Each section independently collapsible
- Collapsed by default
- Colored borders and backgrounds matching Problem/Solution theme
- Chevron icons indicate expand/collapse state
- Smooth animations
- Accessible keyboard navigation

**Problem Section Styling** (when collapsible):
- Border-left: 4px red-700
- Background: bg-red-50/50
- Heading: text-2xl font-playfair font-bold text-red-900
- Chevron: text-red-700

**Solution Section Styling** (when collapsible):
- Border-left: 4px green-700
- Background: bg-green-50/50
- Heading: text-2xl font-playfair font-bold text-green-900
- Chevron: text-green-700

**Content Display**:
- When collapsed: Only show heading with chevron
- When expanded: Show description + optional quote
- Use existing EvidenceQuote component for quote display

### 2. Implementation Logic

```typescript
export default function ProblemSolutionPanel({
  layout = 'split',
  problem,
  solution,
  className = '',
  collapsible = false
}: ProblemSolutionPanelProps) {
  const [isProblemExpanded, setIsProblemExpanded] = useState(!collapsible);
  const [isSolutionExpanded, setIsSolutionExpanded] = useState(!collapsible);

  // If not collapsible, render original layout
  if (!collapsible) {
    return (
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${className}`}>
        {/* Existing split/stacked implementation */}
      </div>
    );
  }

  // Collapsible version
  return (
    <div className={`space-y-6 ${className}`}>
      {/* Problem accordion */}
      {/* Solution accordion */}
    </div>
  );
}
```

### 3. Update All Usage Instances

Add `collapsible={true}` to ProblemSolutionPanel in these files:

- [ ] `components/philosophy/CrisisSubsectionA.tsx`
- [ ] `components/philosophy/CrisisSubsectionB.tsx`
- [ ] `components/philosophy/CrisisSubsectionC.tsx`
- [ ] `components/philosophy/RestorationSubsectionB.tsx`
- [ ] `components/philosophy/RestorationSubsectionC.tsx`

**Example**:
```typescript
// Before
<ProblemSolutionPanel
  layout="split"
  problem={{...}}
  solution={{...}}
/>

// After
<ProblemSolutionPanel
  layout="split"
  collapsible={true} // NEW
  problem={{...}}
  solution={{...}}
/>
```

### 4. Preserve Existing Behavior

Ensure that:
- Components NOT passing `collapsible` prop still work as before
- Split and stacked layouts remain functional
- No breaking changes to existing usage
- Quote display logic preserved

## Implementation Reference

See the full component code in `philosophy-page-restructure-plan.md` section "Phase 2.3: Compact ProblemSolutionPanel".

## Success Criteria

- [ ] Component renders original layout when collapsible=false
- [ ] Component renders collapsible layout when collapsible=true
- [ ] Problem section independently collapsible
- [ ] Solution section independently collapsible
- [ ] Both start collapsed when collapsible=true
- [ ] Chevron icons rotate correctly
- [ ] Smooth expand/collapse animations
- [ ] All existing usages unaffected
- [ ] All 5 new collapsible instances working
- [ ] No console errors
- [ ] Page height visibly reduced

## Testing Checklist

**Functionality**:
- [ ] Click Problem heading to expand/collapse
- [ ] Click Solution heading to expand/collapse
- [ ] Both sections can be expanded simultaneously
- [ ] Content displays fully when expanded
- [ ] Quotes render correctly when present

**Keyboard Navigation**:
- [ ] Tab reaches Problem button
- [ ] Enter/Space toggles Problem
- [ ] Tab reaches Solution button
- [ ] Enter/Space toggles Solution
- [ ] Focus visible on both buttons

**Accessibility**:
- [ ] aria-expanded reflects state
- [ ] Screen reader announces section names
- [ ] Focus ring visible
- [ ] Color contrast sufficient (red/green headings)

**Visual**:
- [ ] Problem border-left is red
- [ ] Solution border-left is green
- [ ] Backgrounds subtle (50/50 opacity)
- [ ] Chevrons change direction
- [ ] Hover states visible
- [ ] Mobile responsive
- [ ] Fade-in animation smooth

**Regression Testing**:
- [ ] Non-collapsible instances still work
- [ ] Split layout unaffected
- [ ] Stacked layout unaffected
- [ ] Quote display unchanged

**Performance**:
- [ ] No excessive re-renders
- [ ] Smooth 60fps animations
- [ ] State management efficient

## Design Notes

**Color Choices**:
- Red for Problem aligns with "crisis" theme
- Green for Solution aligns with "restoration" theme
- Creates visual consistency with section color-coding

**Default Collapsed**:
- Reduces initial visual overwhelm
- Users expand only what they want to read
- Preserves all content (nothing removed)

**Independent States**:
- Allows comparing Problem vs. Solution side-by-side
- User agency in exploration
- Flexible reading patterns

## Alignment with Philosophy

This change maintains:
- ✅ All Problem/Solution content preserved
- ✅ Clear structural distinction (red vs. green)
- ✅ Source attribution (quotes still displayed when expanded)
- ✅ User agency (manual expand, not time-based)

Reduces visual density while preserving philosophical depth.

---

**Next**: After successful implementation and testing, proceed to Prompt 4 (Merge Duplicate InteractiveStages).
