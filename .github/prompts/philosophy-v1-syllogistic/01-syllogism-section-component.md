# Prompt 01: SyllogismSection Component

## Objective

Create a reusable `<SyllogismSection>` component that provides consistent visual hierarchy and styling for Major Premise, Minor Premise, and Conclusion sections throughout the philosophy page.

---

## Component Specification

### Interface

```typescript
interface SyllogismSectionProps {
  type: 'major' | 'minor' | 'conclusion';
  title: string;
  subtitle?: string;
  number?: string; // "I", "II", "∴"
  children: ReactNode;
  bgColor?: string;
  borderColor?: string;
  id?: string; // for scroll anchoring
  className?: string;
}
```

### Features Required

1. **Roman Numeral Decoration**
   - Large decorative numeral positioned to the left on desktop
   - "I" for major, "II" for minor, "∴" for conclusion
   - Semi-transparent, classical Playfair font
   - Hidden on mobile (< 768px)

2. **Border Accent**
   - Left border (8px) with configurable color
   - Major: `border-red-800/30`
   - Minor: `border-green-800/30`
   - Conclusion: `border-gold/60`

3. **ARIA Landmarks**
   - Semantic `<section>` with `role="region"`
   - `aria-labelledby` pointing to title ID
   - Proper heading hierarchy (h2 for title, h3 for subtitle)

4. **Responsive Layout**
   - Desktop: Side numeral + bordered content container
   - Mobile: No numeral, full-width bordered container
   - Consistent padding across breakpoints

---

## Implementation

**File:** `components/SyllogismSection.tsx`

```typescript
import { ReactNode } from 'react';
import ContentContainer from './ContentContainer';

interface SyllogismSectionProps {
  type: 'major' | 'minor' | 'conclusion';
  title: string;
  subtitle?: string;
  number?: string;
  children: ReactNode;
  bgColor?: string;
  borderColor?: string;
  id?: string;
  className?: string;
}

export default function SyllogismSection({
  type,
  title,
  subtitle,
  number,
  children,
  bgColor = 'bg-white',
  borderColor,
  id,
  className = '',
}: SyllogismSectionProps) {
  // Determine defaults based on type
  const defaultBorders = {
    major: 'border-red-800/30',
    minor: 'border-green-800/30',
    conclusion: 'border-gold/60',
  };

  const defaultNumbers = {
    major: 'I',
    minor: 'II',
    conclusion: '∴',
  };

  const border = borderColor || defaultBorders[type];
  const displayNumber = number || defaultNumbers[type];
  const titleId = id ? `${id}-title` : `${type}-premise-title`;

  return (
    <section
      id={id}
      role="region"
      aria-labelledby={titleId}
      className={`relative py-20 ${bgColor} ${className}`}
    >
      <ContentContainer width="wide">
        <div className="relative">
          {/* Desktop: Large decorative numeral */}
          <div
            className="hidden lg:block absolute -left-16 xl:-left-20 top-0 text-7xl xl:text-8xl font-playfair text-forest/20 select-none"
            aria-hidden="true"
          >
            {displayNumber}
          </div>

          {/* Main content with left border accent */}
          <div className={`border-l-8 ${border} pl-8 md:pl-12`}>
            {/* Title */}
            <h2
              id={titleId}
              className="text-4xl md:text-5xl font-playfair text-forest mb-4"
            >
              {title}
            </h2>

            {/* Optional subtitle */}
            {subtitle && (
              <h3 className="text-xl md:text-2xl text-charcoal/70 mb-12 font-lato">
                {subtitle}
              </h3>
            )}

            {/* Section content */}
            <div className="space-y-12">{children}</div>
          </div>
        </div>
      </ContentContainer>
    </section>
  );
}
```

---

## Usage Examples

### Major Premise

```typescript
<SyllogismSection
  type="major"
  title="Modern Education Fails Boys"
  subtitle="Three crises demand our attention"
  id="major-premise"
>
  {/* Subsection A: Sensory Loss */}
  <div className="space-y-6">
    <h3 className="text-2xl font-playfair text-charcoal">
      The Death of Wonder: Screens Replace Senses
    </h3>
    <p className="text-lg leading-relaxed text-charcoal/90">
      Modern education has poisoned the well...
    </p>
  </div>

  {/* Subsection B: Gymnasium Crisis */}
  {/* Subsection C: Fragmentation */}
</SyllogismSection>
```

### Minor Premise

```typescript
<SyllogismSection
  type="minor"
  title="The Poetic Mode Restores"
  subtitle="Senses, adventure, and liturgical rhythm offer remedy"
  id="minor-premise"
>
  {/* Content */}
</SyllogismSection>
```

### Conclusion

```typescript
<SyllogismSection
  type="conclusion"
  title="Embrace the Poetic Path"
  subtitle="Therefore, warrior poets rise"
  id="conclusion"
  bgColor="bg-gradient-to-b from-spiritual/10 to-spiritual/20"
>
  {/* Content */}
</SyllogismSection>
```

---

## CSS Additions

**File:** `app/globals.css`

```css
/* Syllogism Section Decorations */
.syllogism-number {
  @apply absolute -left-16 top-0 text-6xl font-playfair text-forest/20;
}

.major-premise-border {
  @apply border-l-8 border-red-800/30;
}

.minor-premise-border {
  @apply border-l-8 border-green-800/30;
}

.conclusion-border {
  @apply border-l-8 border-gold/60;
}

/* Responsive numeral sizing */
@media (min-width: 1280px) {
  .syllogism-number {
    @apply text-8xl -left-20;
  }
}
```

---

## Testing Checklist

### Accessibility
- [ ] Section has `role="region"`
- [ ] Title has unique ID and `aria-labelledby` reference
- [ ] Heading hierarchy is logical (h2 → h3)
- [ ] Decorative numeral has `aria-hidden="true"`
- [ ] Keyboard navigation works (Tab through content)
- [ ] Screen reader announces section properly

### Visual Design
- [ ] Border colors match specification (major: red, minor: green, conclusion: gold)
- [ ] Decorative numeral visible on desktop (>= 1024px)
- [ ] Numeral hidden on mobile (< 768px)
- [ ] Left padding sufficient (pl-8 mobile, pl-12 desktop)
- [ ] Title and subtitle legible, proper hierarchy
- [ ] Content spacing consistent (space-y-12)

### Responsive Behavior
- [ ] Mobile: Full-width bordered container, no numeral
- [ ] Tablet: Bordered container, numeral appears
- [ ] Desktop: Large numeral, spacious layout
- [ ] Text remains readable at all breakpoints

### Integration
- [ ] Works with ContentContainer width="wide"
- [ ] Accepts custom bgColor (gradients, solid colors)
- [ ] Optional className prop for additional styling
- [ ] Children render correctly in space-y-12 container

---

## Acceptance Criteria

- ✅ Component renders with proper ARIA landmarks
- ✅ Decorative numeral displays correctly on desktop
- ✅ Border colors distinguish premise types
- ✅ Responsive layout works across breakpoints
- ✅ Accessibility audit passes (axe DevTools)
- ✅ Usage examples integrate without errors

---

## Next Steps

Once this component is complete and tested:
1. Proceed to **Prompt 02: ProblemSolutionPanel Component**
2. This component will be used in Prompt 12 (Major Premise) and Prompt 13 (Minor Premise)

---

**Estimated Time:** 1-2 hours  
**Complexity:** Medium  
**Dependencies:** ContentContainer (existing)
