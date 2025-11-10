# Prompt 1: Create Collapsible Evidence Component

## Objective
Create a new `CollapsibleEvidenceQuotes` component that wraps the existing `EvidenceQuoteGroup` in a collapsible accordion interface to reduce page height.

## Context
The Philosophy page currently has 8 instances of `EvidenceQuoteGroup` displaying source quotes. Each takes ~400-600px of vertical space. Making these collapsible by default will save 3,200-4,800px of initial page height while preserving all content.

## Requirements

### 1. New Component: `components/CollapsibleEvidenceQuotes.tsx`

**Features**:
- Client component ('use client')
- Accepts same quote array as EvidenceQuoteGroup
- Collapsed by default with count indicator
- Shows "Evidence from the Sources (N sources)"
- Chevron icon indicates state (down = collapsed, up = expanded)
- Smooth expand/collapse animation
- Accessible keyboard navigation (Enter/Space to toggle)
- Focus ring on button
- Border-left accent matching section variant

**Props**:
```typescript
interface CollapsibleEvidenceQuotesProps {
  title?: string; // Default: "Evidence from the Sources"
  quotes: Array<{
    quote: string;
    author: string;
    source: string;
    showSourceLink?: boolean;
    sourceSlug?: string;
  }>;
  variant?: 'major-premise' | 'minor-premise' | 'conclusion';
}
```

**Styling**:
- Collapsed: Border-left (4px forest/20), padding-left (1.5rem), padding-y (1rem)
- Button: Full width, flex justify-between, hover:bg-parchment/30
- Icon: Chevron from @heroicons/react/24/outline
- Expanded content: Fade-in animation (300ms), margin-top (1.5rem)

### 2. CSS Addition: `app/globals.css`

Add fade-in animation:

```css
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.3s ease-out;
}

/* Respect reduced motion */
@media (prefers-reduced-motion: reduce) {
  .animate-fadeIn {
    animation: none;
    opacity: 1;
    transform: none;
  }
}
```

### 3. Replace All Instances

Find and replace `<EvidenceQuoteGroup />` with `<CollapsibleEvidenceQuotes />` in:

- [ ] `components/philosophy/CrisisSubsectionA.tsx`
- [ ] `components/philosophy/CrisisSubsectionB.tsx`
- [ ] `components/philosophy/CrisisSubsectionC.tsx`
- [ ] `components/philosophy/RestorationSubsectionA.tsx`
- [ ] `components/philosophy/RestorationSubsectionB.tsx`
- [ ] `components/philosophy/RestorationSubsectionC.tsx`
- [ ] Any other philosophy subsection files using EvidenceQuoteGroup

**Update imports**:
```typescript
// Old
import EvidenceQuoteGroup from '@/components/EvidenceQuoteGroup';

// New
import CollapsibleEvidenceQuotes from '@/components/CollapsibleEvidenceQuotes';
```

**Update usage**:
```typescript
// Old
<EvidenceQuoteGroup
  variant="major-premise"
  title="Evidence from the Sources"
  quotes={[...]}
/>

// New
<CollapsibleEvidenceQuotes
  variant="major-premise"
  quotes={[...]}
/>
```

## Implementation Reference

See the full component code in `philosophy-page-restructure-plan.md` section "Phase 2.1: Collapsible Evidence Sections".

## Success Criteria

- [ ] CollapsibleEvidenceQuotes component created
- [ ] Collapsed by default showing quote count
- [ ] Expand/collapse works smoothly
- [ ] Keyboard accessible (Tab to button, Enter/Space to toggle)
- [ ] Focus visible with ring
- [ ] All 8 instances replaced
- [ ] No console errors
- [ ] Page height visibly reduced
- [ ] All quotes still accessible when expanded
- [ ] Animations respect prefers-reduced-motion

## Testing Checklist

**Functionality**:
- [ ] Component renders collapsed initially
- [ ] Click button expands to show quotes
- [ ] Click again collapses back
- [ ] Count displays correct number of quotes
- [ ] Chevron icon rotates correctly

**Accessibility**:
- [ ] Keyboard Tab reaches button
- [ ] Enter/Space toggles state
- [ ] Focus ring visible
- [ ] aria-expanded attribute correct
- [ ] Screen reader announces state

**Visual**:
- [ ] Border color matches variant (red/green/gold tones)
- [ ] Hover state visible on button
- [ ] Fade-in animation smooth
- [ ] Mobile responsive
- [ ] No layout shift on expand

**Performance**:
- [ ] No excessive re-renders
- [ ] Smooth 60fps animation
- [ ] Initial page load faster

## Alignment with Philosophy

This change maintains:
- ✅ All source attribution (no content removed)
- ✅ Scholarly depth (quotes accessible on demand)
- ✅ Visual hierarchy (border-left accent preserved)
- ✅ User agency (manual expand, not auto-collapse)

Reduces scrolling fatigue while preserving complete philosophical grounding.

---

**Next**: After successful implementation and testing, proceed to Prompt 2 (Tabbed Subsections).
