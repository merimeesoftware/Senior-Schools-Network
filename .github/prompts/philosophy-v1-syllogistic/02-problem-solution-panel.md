# Prompt 02: ProblemSolutionPanel Component

## Objective

Create a `<ProblemSolutionPanel>` component that displays problem/solution pairs in either split-view (side-by-side) or toggle mode, with distinct visual treatments for problem (muted) vs. solution (vibrant).

---

## Component Specification

### Interface

```typescript
interface ProblemSolutionPanelProps {
  problem: {
    title: string;
    description: string;
    quote: Quote;
    image?: Asset;
  };
  solution: {
    title: string;
    description: string;
    quote: Quote;
    image?: Asset;
  };
  layout?: 'split' | 'toggle';
  defaultView?: 'problem' | 'solution'; // for toggle mode
  className?: string;
}
```

### Features Required

1. **Split View Mode**
   - Desktop: Side-by-side panels (50/50)
   - Problem panel: Muted colors (grayscale filter, charcoal tones)
   - Solution panel: Vibrant colors (full saturation, spiritual tones)
   - Mobile: Stacks vertically (problem on top)

2. **Toggle View Mode**
   - Single panel with toggle button
   - Smooth fade transition between problem/solution
   - Button shows current view ("Show Solution" / "Show Problem")
   - Useful for mobile or when space constrained

3. **Visual Distinction**
   - Problem: `bg-charcoal/5`, `border-l-4 border-red-700/40`, grayscale filter
   - Solution: `bg-spiritual/5`, `border-l-4 border-green-700/40`, vibrant
   - Images: Problem images desaturated, solution images full color

4. **Quote Integration**
   - Each panel includes embedded quote as evidence
   - Uses existing QuoteCard component
   - Problem quotes in muted styling, solution quotes vibrant

---

## Implementation

**File:** `components/ProblemSolutionPanel.tsx`

```typescript
'use client';
import { useState } from 'react';
import QuoteCard from './QuoteCard';
import OptimizedImage from './OptimizedImage';
import type { Quote, Asset } from '@/lib/types/content';

interface PanelContent {
  title: string;
  description: string;
  quote: Quote;
  image?: Asset;
}

interface ProblemSolutionPanelProps {
  problem: PanelContent;
  solution: PanelContent;
  layout?: 'split' | 'toggle';
  defaultView?: 'problem' | 'solution';
  className?: string;
}

export default function ProblemSolutionPanel({
  problem,
  solution,
  layout = 'split',
  defaultView = 'problem',
  className = '',
}: ProblemSolutionPanelProps) {
  const [activeView, setActiveView] = useState<'problem' | 'solution'>(defaultView);

  if (layout === 'toggle') {
    return (
      <div className={`space-y-6 ${className}`}>
        {/* Toggle Button */}
        <div className="flex justify-center">
          <button
            onClick={() => setActiveView(activeView === 'problem' ? 'solution' : 'problem')}
            className="px-6 py-3 bg-forest text-parchment rounded-md hover:bg-forest/90 transition-colors font-lato text-lg"
            aria-label={activeView === 'problem' ? 'Show solution' : 'Show problem'}
          >
            {activeView === 'problem' ? '→ Show the Solution' : '← Show the Problem'}
          </button>
        </div>

        {/* Active Panel */}
        <div
          className="transition-opacity duration-500"
          key={activeView}
        >
          {activeView === 'problem' ? (
            <PanelContent data={problem} type="problem" />
          ) : (
            <PanelContent data={solution} type="solution" />
          )}
        </div>
      </div>
    );
  }

  // Split view mode
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${className}`}>
      <PanelContent data={problem} type="problem" />
      <PanelContent data={solution} type="solution" />
    </div>
  );
}

// Internal component for rendering panel content
function PanelContent({
  data,
  type,
}: {
  data: PanelContent;
  type: 'problem' | 'solution';
}) {
  const isProblem = type === 'problem';

  return (
    <div
      className={`
        p-8 rounded-lg space-y-6
        ${isProblem ? 'problem-panel' : 'solution-panel'}
      `}
    >
      {/* Optional Image */}
      {data.image && (
        <div className="relative aspect-video rounded-md overflow-hidden mb-6">
          <OptimizedImage
            asset={data.image}
            alt={data.title}
            fill={true}
            objectFit="cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            className={isProblem ? 'grayscale-[70%] brightness-90' : ''}
          />
        </div>
      )}

      {/* Title */}
      <h4
        className={`text-2xl font-playfair ${
          isProblem ? 'text-charcoal' : 'text-forest'
        }`}
      >
        {data.title}
      </h4>

      {/* Description */}
      <p
        className={`text-lg leading-relaxed ${
          isProblem ? 'text-charcoal/80' : 'text-charcoal/90'
        }`}
      >
        {data.description}
      </p>

      {/* Evidence Quote */}
      <div className="mt-6">
        <QuoteCard
          quote={data.quote.quote}
          author={data.quote.author}
          source={data.quote.source}
          variant="embedded"
          className={isProblem ? 'opacity-80' : ''}
        />
      </div>
    </div>
  );
}
```

---

## CSS Additions

**File:** `app/globals.css`

```css
/* Problem vs Solution Panel Styling */
.problem-panel {
  @apply bg-charcoal/5 border-l-4 border-red-700/40;
  filter: grayscale(30%) brightness(0.95);
}

.solution-panel {
  @apply bg-spiritual/5 border-l-4 border-green-700/40;
}

/* Ensure images respect filters */
.problem-panel img {
  filter: grayscale(70%) brightness(0.9);
}

.solution-panel img {
  filter: none;
}
```

---

## Usage Examples

### Split View (Desktop Side-by-Side)

```typescript
import { getAxiomsQuotesBySection } from '@/lib/content/axioms';
import { getRandomAssetFromFolder } from '@/lib/assets';

const sensoryLossQuote = {
  id: 'ihp-factory',
  quote: 'The school turned into a kind of factory, turned into a kind of machine...',
  author: 'Dr. Dennis Quinn',
  source: 'IHP Lecture I',
  category: 'modern-education-critique',
};

const hughQuote = {
  id: 'hugh-earth',
  quote: 'Earth we grasp with the earthly, fire with flame.',
  author: 'Hugh of St. Victor',
  source: 'Didascalicon I.1',
  category: 'poetic-knowledge',
};

<ProblemSolutionPanel
  layout="split"
  problem={{
    title: "Screens Replace Senses",
    description: "Boys spend 7+ hours daily on devices, their senses dulled by glowing rectangles...",
    quote: sensoryLossQuote,
    image: getRandomAssetFromFolder('problems')
  }}
  solution={{
    title: "Sensory Awakening Through Nature",
    description: "Stripped or lightly clad, boys exercise, sharpening their five senses...",
    quote: hughQuote,
    image: getRandomAssetFromFolder('landscapes')
  }}
/>
```

### Toggle View (Mobile or Space-Constrained)

```typescript
<ProblemSolutionPanel
  layout="toggle"
  defaultView="problem"
  problem={{
    title: "Cultural Softness",
    description: "Safety protocols mistake protection for formation...",
    quote: seniorPuerQuote
  }}
  solution={{
    title: "Adventure and Risk",
    description: "Wilderness survival treks where boys face real hardship...",
    quote: seniorWildernessQuote
  }}
/>
```

---

## Testing Checklist

### Visual Design
- [ ] Split view: Panels side-by-side on desktop
- [ ] Split view: Panels stack on mobile
- [ ] Problem panel has muted appearance (grayscale, red border)
- [ ] Solution panel has vibrant appearance (full color, green border)
- [ ] Images in problem panel desaturated
- [ ] Images in solution panel full color
- [ ] Toggle button centered, clear label
- [ ] Fade transition smooth (500ms)

### Accessibility
- [ ] Toggle button has descriptive aria-label
- [ ] Keyboard navigation works (Tab to button, Enter to toggle)
- [ ] Screen reader announces panel changes
- [ ] Color contrast meets WCAG AA (4.5:1+)
- [ ] Focus visible on toggle button
- [ ] Embedded quotes accessible

### Responsive Behavior
- [ ] Split view adapts to grid-cols-1 on mobile
- [ ] Images aspect-video ratio maintained
- [ ] Text remains readable at all breakpoints
- [ ] Padding consistent across views
- [ ] Toggle view works smoothly on touch devices

### Integration
- [ ] Works with Quote type from content library
- [ ] Accepts optional Asset for images
- [ ] QuoteCard variant="embedded" renders correctly
- [ ] OptimizedImage handles fill prop properly

---

## Acceptance Criteria

- ✅ Split view displays side-by-side on desktop
- ✅ Problem panel visually distinct (muted/grayscale)
- ✅ Solution panel visually distinct (vibrant/green)
- ✅ Toggle view transitions smoothly
- ✅ Accessibility audit passes
- ✅ Mobile responsive stacking works

---

## Next Steps

Once complete, proceed to **Prompt 03: EvidenceQuote Component**

---

**Estimated Time:** 2-3 hours  
**Complexity:** Medium  
**Dependencies:** QuoteCard, OptimizedImage, Quote/Asset types
