# Prompt 4: Merge Duplicate InteractiveStages

## Objective
Add a mode toggle to the `InteractiveStages` component and consolidate two instances (crisis and restoration modes) into a single component with a toggle, saving ~400-500px of page height.

## Context
Currently, InteractiveStages appears twice:
1. In **CrisisSubsectionA** - showing crisis/failure view of each stage
2. In **RestorationSubsectionA** - showing restoration/proper view of each stage

This duplication is unnecessary. A single instance with a mode toggle allows users to compare both views without scrolling between sections.

## Requirements

### 1. Enhance Component: `components/InteractiveStages.tsx`

**Add New Props**:
```typescript
interface InteractiveStagesProps {
  mode?: 'default' | 'crisis'; // existing
  allowModeToggle?: boolean; // NEW - default: false
  className?: string;
}
```

**Add State**:
```typescript
const [viewMode, setViewMode] = useState<'default' | 'crisis'>(initialMode);
```

**Mode Toggle UI** (when `allowModeToggle={true}`):
- Two buttons: "Restoration View" and "Crisis View"
- Inline-flex container with border and background
- Active button highlighted with color background
- Emoji icons: ✨ for restoration, ⚠️ for crisis
- Positioned above stage badges

**Styling for Toggle**:
```typescript
<div className="flex justify-center mb-6">
  <div className="inline-flex rounded-lg border-2 border-forest/20 p-1 bg-parchment/50">
    <button
      onClick={() => setViewMode('default')}
      className={`
        px-6 py-2 rounded-md font-lato font-medium text-sm transition-all
        ${viewMode === 'default' 
          ? 'bg-green-700 text-white shadow-md' 
          : 'text-charcoal/70 hover:text-forest'
        }
      `}
    >
      <span className="mr-2">✨</span>
      Restoration View
    </button>
    
    <button
      onClick={() => setViewMode('crisis')}
      className={`
        px-6 py-2 rounded-md font-lato font-medium text-sm transition-all
        ${viewMode === 'crisis' 
          ? 'bg-red-700 text-white shadow-md' 
          : 'text-charcoal/70 hover:text-forest'
        }
      `}
    >
      <span className="mr-2">⚠️</span>
      Crisis View
    </button>
  </div>
</div>
```

**Data Switching**:
- Use `viewMode` state to determine which data set to display
- Switch between `defaultStageData` and `crisisStageData`
- Stage badges remain same, only content panel changes

### 2. Update RestorationSubsectionA

**Add mode toggle prop**:
```typescript
// In components/philosophy/RestorationSubsectionA.tsx

<InteractiveStages 
  mode="default" 
  allowModeToggle={true} // NEW
/>
```

**Update context text** (optional):
Add explanatory text about the toggle:
```typescript
<p className="text-center text-sm text-charcoal/70 italic mb-4">
  Toggle between views to see how each stage should be restored vs. how modern education fails
</p>
```

### 3. Remove from CrisisSubsectionA

**Delete this entire section** from `components/philosophy/CrisisSubsectionA.tsx`:

```typescript
// DELETE THIS:
<div className="space-y-6">
  <h4 className="font-playfair text-2xl font-bold text-forest text-center">
    Where the Crisis Hits
  </h4>
  <InteractiveStages mode="crisis" />
  <p className="text-center text-sm text-charcoal/70 italic">
    Click each stage to see the modern failure
  </p>
</div>
```

**Explanation**: This content is now accessible via the mode toggle in RestorationSubsectionA, so the duplicate is unnecessary.

### 4. Implementation Logic

```typescript
export default function InteractiveStages({
  mode: initialMode = 'default',
  allowModeToggle = false,
  className = ''
}: InteractiveStagesProps) {
  const [selectedStage, setSelectedStage] = useState<StageKey>('nursery');
  const [viewMode, setViewMode] = useState<ViewMode>(initialMode);

  // Determine which data set to use
  const stageData = viewMode === 'crisis' ? crisisStageData : defaultStageData;
  const currentStage = stageData[selectedStage];

  return (
    <div className={`space-y-8 ${className}`}>
      {/* Conditionally render mode toggle */}
      {allowModeToggle && (
        <div className="flex justify-center mb-6">
          {/* Toggle buttons */}
        </div>
      )}

      {/* Existing stage badges */}
      <div className="flex flex-wrap justify-center gap-4">
        {/* ... existing badge rendering ... */}
      </div>

      {/* Content panel - data switches based on viewMode */}
      <div className={`${currentStage.bgColor} ...`}>
        {/* ... existing content rendering ... */}
      </div>
    </div>
  );
}
```

## Implementation Reference

See the full component code in `philosophy-page-restructure-plan.md` section "Phase 3.1: Merge Duplicate InteractiveStages".

## Success Criteria

- [ ] Mode toggle renders when allowModeToggle=true
- [ ] Mode toggle hidden when allowModeToggle=false
- [ ] Restoration View button switches to default data
- [ ] Crisis View button switches to crisis data
- [ ] Active button highlighted correctly
- [ ] Stage badges work in both modes
- [ ] Content panel updates when switching modes
- [ ] No InteractiveStages instance in CrisisSubsectionA
- [ ] Single instance in RestorationSubsectionA with toggle
- [ ] No console errors
- [ ] Page height reduced

## Testing Checklist

**Functionality**:
- [ ] Click Restoration View button
- [ ] Content panel shows restoration descriptions
- [ ] Click Crisis View button
- [ ] Content panel shows crisis descriptions
- [ ] Stage selection persists across mode changes
- [ ] Badges work identically in both modes

**Visual**:
- [ ] Active button has green/red background
- [ ] Inactive button has gray text
- [ ] Hover states visible
- [ ] Emoji icons display correctly
- [ ] Toggle centered above badges
- [ ] Mobile responsive

**Accessibility**:
- [ ] Tab reaches toggle buttons
- [ ] Enter/Space activates buttons
- [ ] Focus visible
- [ ] Screen reader announces mode
- [ ] aria-pressed or similar attribute indicates active state

**Regression**:
- [ ] Components without allowModeToggle unaffected
- [ ] Existing stage badge functionality intact
- [ ] Content panel styling preserved

**User Experience**:
- [ ] Toggle provides clear value (compare views)
- [ ] Mode switching feels instant (<100ms)
- [ ] No layout shift on mode change
- [ ] Explanation text (if added) is helpful

## Design Notes

**Why Merge**:
- Reduces duplication (DRY principle)
- Allows direct comparison without scrolling
- Single source of truth for stage data
- Clearer user flow (toggle vs. separate sections)

**Mode Names**:
- "Restoration View" emphasizes positive/correct approach
- "Crisis View" emphasizes problems/failures
- Aligns with overall syllogistic structure

**Icon Choices**:
- ✨ (sparkles) = wonder, restoration, hope
- ⚠️ (warning) = crisis, failure, danger
- Provides quick visual cue without reading text

## Alignment with Philosophy

This change maintains:
- ✅ All stage content preserved (both crisis and restoration)
- ✅ Clear pedagogical structure (compare/contrast)
- ✅ User agency (manual toggle, not automatic)
- ✅ Visual clarity (emoji + color coding)

Reduces page length while enhancing educational value through direct comparison.

---

**Next**: After successful implementation and testing, proceed to Prompt 5 (Optimize Summary Components).
