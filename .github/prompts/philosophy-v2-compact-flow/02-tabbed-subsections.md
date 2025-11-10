# Prompt 2: Create Tabbed Subsections Component

## Objective
Create a new `SubsectionTabs` component that converts the vertical A/B/C subsection stacks into horizontal tab interfaces, reducing page height by ~6,000-9,000px.

## Context
Currently, each major section (Crisis, Restoration, Vision) stacks 3 subsections (A, B, C) vertically. This creates excessive scrolling. A tab interface allows users to navigate between subsections horizontally while only displaying one at a time.

## Requirements

### 1. New Component: `components/SubsectionTabs.tsx`

**Features**:
- Client component ('use client')
- Tab list with A/B/C letter prefixes
- Keyboard navigation (Left/Right arrows, Home/End)
- Color-coded by section variant
- Active tab highlighted
- Content panel with colored left border
- Smooth panel transitions (fade-in)
- ARIA compliant (tablist, tab, tabpanel roles)

**Props**:
```typescript
interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface SubsectionTabsProps {
  tabs: Tab[];
  variant: 'crisis' | 'restoration' | 'vision';
  className?: string;
}
```

**Styling by Variant**:
- **Crisis**: Red theme (bg-red-100, text-red-900, border-red-700)
- **Restoration**: Green theme (bg-green-100, text-green-900, border-green-700)
- **Vision**: Gold theme (bg-gold/20, text-gold-dark, border-gold)

**Tab Styling**:
- Active: Variant background color, dark text, bottom border (4px)
- Inactive: Variant text with opacity, hover background, transparent border
- Padding: px-6 py-3
- Font: Lato medium, base size
- Border-radius: rounded-t-lg
- Letter prefix: Playfair font, text-lg

**Panel Styling**:
- Border-left (4px) in variant color
- Padding-left: 2rem
- Fade-in animation on tab change

### 2. Keyboard Navigation

Implement standard ARIA authoring practices:
- **Tab**: Focus tabs
- **Left Arrow**: Previous tab
- **Right Arrow**: Next tab
- **Home**: First tab
- **End**: Last tab
- **Enter/Space**: Activate focused tab

### 3. Integration into page.tsx

Wrap subsections in each `SyllogismSection`:

**PART I: Crisis**
```typescript
<SyllogismSection 
  type="major" 
  title="The Crisis: Modern Education Has Failed"
  subtitle="..."
  number="I" 
  id="major-premise"
>
  <div className="max-w-6xl mx-auto">
    <SubsectionTabs
      variant="crisis"
      tabs={[
        {
          id: 'loss-of-wonder',
          label: 'Loss of Wonder & Sensory Integration',
          content: <CrisisSubsectionA />
        },
        {
          id: 'gymnasium-crisis',
          label: 'Cultural Softness & Gymnasium Crisis',
          content: <CrisisSubsectionB />
        },
        {
          id: 'specialization',
          label: 'The Specialized Knowledge Crisis',
          content: <CrisisSubsectionC />
        }
      ]}
    />
  </div>
</SyllogismSection>
```

**PART II: Restoration**
```typescript
<SyllogismSection 
  type="minor" 
  title="The Restoration: Poetic Knowledge Is the Remedy"
  subtitle="..."
  number="II" 
  id="minor-premise"
>
  <div className="max-w-6xl mx-auto">
    <SubsectionTabs
      variant="restoration"
      tabs={[
        {
          id: 'four-stages',
          label: 'The Four Stages of Restoration',
          content: <RestorationSubsectionA />
        },
        {
          id: 'gymnasium-foundation',
          label: 'The Gymnasium Stage: Foundation for Warriors',
          content: <RestorationSubsectionB />
        },
        {
          id: 'poetic-foundation',
          label: 'The Poetic Stage: Science from Fertile Soil',
          content: <RestorationSubsectionC />
        }
      ]}
    />
  </div>
</SyllogismSection>
```

**PART III: Vision**
```typescript
<SyllogismSection 
  type="conclusion" 
  title="The Vision: Warrior Poets Will Restore Christendom"
  subtitle="..."
  number="∴" 
  id="conclusion"
>
  <div className="max-w-6xl mx-auto">
    <SubsectionTabs
      variant="vision"
      tabs={[
        {
          id: 'syllogism-recap',
          label: 'The Argument Complete',
          content: <VisionSyllogismRecap />
        },
        {
          id: 'warrior-poet',
          label: 'What Is a Warrior Poet?',
          content: <VisionWarriorPoet />
        },
        {
          id: 'objections',
          label: 'Objections & Answers',
          content: (
            <div className="space-y-8">
              <h3 className="font-playfair text-4xl font-bold text-forest text-center">
                Objections & Answers
              </h3>
              <CounterargumentAccordion objections={[...]} />
            </div>
          )
        },
        {
          id: 'call-to-action',
          label: 'Your Path Forward',
          content: <VisionCallToAction />
        }
      ]}
    />
  </div>
</SyllogismSection>
```

### 4. Remove Old Wrapper Divs

After implementing tabs, remove the old subsection wrapper divs:

```typescript
// OLD (remove this)
<div className="max-w-6xl mx-auto space-y-16">
  <CrisisSubsectionA />
  <CrisisSubsectionB />
  <CrisisSubsectionC />
</div>

// NEW (keep this)
<div className="max-w-6xl mx-auto">
  <SubsectionTabs variant="crisis" tabs={[...]} />
</div>
```

## Implementation Reference

See the full component code in `philosophy-page-restructure-plan.md` section "Phase 2.2: Tabbed Subsections".

## Success Criteria

- [ ] SubsectionTabs component created
- [ ] Crisis section has 3 working tabs (A/B/C)
- [ ] Restoration section has 3 working tabs (A/B/C)
- [ ] Vision section has 4 working tabs
- [ ] Active tab highlighted with correct color
- [ ] Content switches on tab click
- [ ] Keyboard arrow navigation works
- [ ] ARIA attributes correct (tablist, tab, tabpanel, aria-selected, aria-controls)
- [ ] Mobile responsive (tabs wrap or scroll horizontally)
- [ ] No console errors
- [ ] Page height dramatically reduced

## Testing Checklist

**Functionality**:
- [ ] Click each tab to switch content
- [ ] First tab active by default
- [ ] Content panel updates immediately
- [ ] Letter prefixes display (A., B., C.)
- [ ] Variant colors apply correctly

**Keyboard Navigation**:
- [ ] Tab key reaches tab list
- [ ] Left arrow moves to previous tab
- [ ] Right arrow moves to next tab
- [ ] Home key jumps to first tab
- [ ] End key jumps to last tab
- [ ] Enter/Space activates focused tab

**Accessibility**:
- [ ] Screen reader announces tabs correctly
- [ ] aria-selected reflects active tab
- [ ] aria-controls links tab to panel
- [ ] role="tablist" on container
- [ ] role="tab" on buttons
- [ ] role="tabpanel" on content

**Visual**:
- [ ] Active tab clearly distinguished
- [ ] Hover states visible
- [ ] Border-left on content panel matches variant
- [ ] Fade-in animation smooth
- [ ] Mobile: tabs readable and accessible
- [ ] No layout shift

**Performance**:
- [ ] Tab switching instant (<100ms)
- [ ] No excessive re-renders
- [ ] Content lazy-loaded or memoized if needed

## Mobile Considerations

For mobile/tablet, consider:
- Horizontal scrolling for tabs if they don't fit
- Smaller text/padding for tab buttons
- Stack tabs vertically as alternative
- Swipe gestures between tabs (optional enhancement)

## Alignment with Philosophy

This change maintains:
- ✅ All philosophical content preserved
- ✅ Clear argument structure (tabs labeled A/B/C)
- ✅ Source attribution intact
- ✅ Visual hierarchy (color-coding by section)
- ✅ User agency (manual navigation)

Dramatically reduces scrolling while maintaining depth and rigor.

---

**Next**: After successful implementation and testing, proceed to Prompt 3 (Collapsible Problem/Solution Panels).
