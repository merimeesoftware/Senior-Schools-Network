# Prompt 07: QuoteCard Enhancement - Evidence Variant

## Objective

Enhance the existing `<QuoteCard>` component to support an "evidence" variant with thicker border, premise-specific colors, and source emphasis.

---

## Enhancement Specification

### New Props

```typescript
interface QuoteCardProps {
  // Existing props...
  variant?: 'default' | 'evidence';
  premiseType?: 'major-premise' | 'minor-premise' | 'conclusion';
  sourceLink?: string; // Link to /texts/[slug]
}
```

### Features to Add

1. **Evidence Variant Styling**
   - Thicker 8px left border (vs 4px default)
   - Premise-specific border colors:
     - Major premise: Red (`border-red-700`)
     - Minor premise: Green (`border-green-700`)
     - Conclusion: Gold (`border-gold`)
   - "Evidence:" prefix label

2. **Source Link**
   - Optional link to `/texts/[slug]`
   - External link icon (📖)
   - Hover underline effect

3. **Enhanced Emphasis**
   - Bolder author attribution
   - Slightly larger quote text (text-lg vs text-base)
   - More prominent quote marks

---

## Implementation

**File:** `components/QuoteCard.tsx`

### Enhanced Component

```typescript
import Link from 'next/link';

interface QuoteCardProps {
  quote: string;
  author: string;
  source?: string;
  variant?: 'default' | 'evidence';
  premiseType?: 'major-premise' | 'minor-premise' | 'conclusion';
  sourceLink?: string;
  className?: string;
}

export function QuoteCard({
  quote,
  author,
  source,
  variant = 'default',
  premiseType,
  sourceLink,
  className = '',
}: QuoteCardProps) {
  const isEvidence = variant === 'evidence';

  // Determine border color based on premise type
  const getBorderColor = () => {
    if (!isEvidence || !premiseType) return 'border-forest/30';

    switch (premiseType) {
      case 'major-premise':
        return 'border-red-700';
      case 'minor-premise':
        return 'border-green-700';
      case 'conclusion':
        return 'border-gold';
      default:
        return 'border-forest/30';
    }
  };

  const borderWidth = isEvidence ? 'border-l-[8px]' : 'border-l-4';
  const borderColor = getBorderColor();
  const textSize = isEvidence ? 'text-lg' : 'text-base';

  return (
    <blockquote
      className={`
        ${borderWidth} ${borderColor}
        bg-parchment/40 p-6 rounded-r-lg
        ${className}
      `}
    >
      {isEvidence && (
        <span className="block text-sm font-semibold text-forest/70 mb-2">
          Evidence:
        </span>
      )}
      <p
        className={`
          ${textSize} leading-relaxed text-charcoal/90
          font-merriweather italic
          before:content-['"'] after:content-['"']
          before:text-forest/50 after:text-forest/50
          ${isEvidence ? 'before:text-2xl after:text-2xl' : 'before:text-xl after:text-xl'}
        `}
      >
        {quote}
      </p>
      <footer className="mt-4 space-y-1">
        <cite
          className={`
            not-italic text-forest
            ${isEvidence ? 'font-bold' : 'font-medium'}
          `}
        >
          — {author}
        </cite>
        {source && (
          <div className="text-sm text-forest/70">
            {sourceLink ? (
              <Link
                href={sourceLink}
                className="inline-flex items-center gap-1 hover:underline hover:text-forest transition-colors"
              >
                <span>{source}</span>
                <span aria-hidden="true">📖</span>
                <span className="sr-only">(Read full text)</span>
              </Link>
            ) : (
              <span>{source}</span>
            )}
          </div>
        )}
      </footer>
    </blockquote>
  );
}
```

---

## Usage Examples

### Default Variant (Existing)

```typescript
<QuoteCard
  quote="The soul is dyed the color of its leisure thoughts."
  author="Marcus Aurelius"
  source="Meditations"
/>
```

### Evidence Variant - Major Premise

```typescript
<QuoteCard
  variant="evidence"
  premiseType="major-premise"
  quote="Modern education has become a factory system producing cogs, not cultivating souls."
  author="Dr. John Senior"
  source="The Restoration of Christian Culture"
  sourceLink="/texts/restoration-of-christian-culture"
/>
```

### Evidence Variant - Minor Premise

```typescript
<QuoteCard
  variant="evidence"
  premiseType="minor-premise"
  quote="Poetic knowledge is not specialized knowledge but that connaturality and right harmony with things which Adam and Eve possessed in Eden."
  author="Dr. John Senior"
  source="The Restoration of Christian Culture"
  sourceLink="/texts/restoration-of-christian-culture"
/>
```

### Evidence Variant - Conclusion

```typescript
<QuoteCard
  variant="evidence"
  premiseType="conclusion"
  quote="The warrior poets we send forth will restore wonder, defend truth, and build anew."
  author="IHP Program"
  source="Integrated Humanities Lecture I"
  sourceLink="/texts/integrated-humanities-lecture"
/>
```

---

## CSS Additions

**File:** `app/globals.css`

```css
/* Evidence Quote Card Enhancements */
.quote-card-evidence {
  @apply shadow-md shadow-forest/5;
}

.quote-card-evidence:hover {
  @apply shadow-lg shadow-forest/10 transition-shadow duration-200;
}

/* Premise-specific border glow effects */
.quote-card-major-premise {
  @apply shadow-red-700/10;
}

.quote-card-minor-premise {
  @apply shadow-green-700/10;
}

.quote-card-conclusion {
  @apply shadow-gold/20;
}
```

---

## Testing Checklist

### Visual Design
- [ ] 8px border width for evidence variant
- [ ] Correct border colors for each premise type
- [ ] "Evidence:" label appears
- [ ] Quote marks larger (text-2xl)
- [ ] Author name bold
- [ ] Source link with book icon

### Interactivity
- [ ] Source link navigates to /texts/[slug]
- [ ] Hover underline on source link
- [ ] Link accessible via keyboard
- [ ] Icon has aria-hidden
- [ ] Screen reader text for link

### Accessibility
- [ ] blockquote semantic element
- [ ] cite element for attribution
- [ ] Color contrast passes WCAG AA
- [ ] Focus visible on link
- [ ] Screen reader announces "Evidence" label

### Integration
- [ ] Default variant behavior unchanged
- [ ] Works with existing QuoteCard usage
- [ ] Evidence variant applies correctly
- [ ] Premise colors match borders elsewhere
- [ ] Source link optional

---

## Acceptance Criteria

- ✅ Evidence variant has 8px border
- ✅ Premise-specific colors match design
- ✅ Source link works and is accessible
- ✅ Default variant unchanged
- ✅ "Evidence:" label visible

---

**Next:** Prompt 08: InteractiveStages Enhancement (crisis overlay)

**Estimated Time:** 1.5 hours  
**Complexity:** Low  
**Dependencies:** QuoteCard (existing)
