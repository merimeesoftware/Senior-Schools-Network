# Prompt 03: EvidenceQuote Component

## Objective

Create an `<EvidenceQuote>` component that extends QuoteCard with evidence-specific styling, source emphasis, and optional links to full texts.

---

## Component Specification

### Interface

```typescript
interface EvidenceQuoteProps extends QuoteCardProps {
  evidenceLabel?: string; // "From The Restoration of Innocence, Ch. 5"
  showSourceLink?: boolean;
  sourceSlug?: string; // for /texts/[slug] link
  variant?: 'major-premise' | 'minor-premise' | 'conclusion';
}
```

### Features Required

1. **Visual Distinction**
   - Thicker left border (8px) in premise-specific color
   - "Evidence:" prefix before quote
   - Source text larger and bold
   - Optional link icon to full text

2. **Premise-Specific Styling**
   - Major premise: Red border (`border-red-800/40`)
   - Minor premise: Green border (`border-green-800/40`)
   - Conclusion: Gold border (`border-gold/60`)

3. **Source Linking**
   - If `showSourceLink` and `sourceSlug` provided, make source clickable
   - Links to `/texts/[sourceSlug]`
   - External link icon next to source

---

## Implementation

**File:** `components/EvidenceQuote.tsx`

```typescript
import Link from 'next/link';
import QuoteCard from './QuoteCard';
import type { Quote } from '@/lib/types/content';

interface EvidenceQuoteProps {
  quote: string;
  author?: string;
  source?: string;
  evidenceLabel?: string;
  showSourceLink?: boolean;
  sourceSlug?: string;
  variant?: 'major-premise' | 'minor-premise' | 'conclusion';
  className?: string;
}

export default function EvidenceQuote({
  quote,
  author,
  source,
  evidenceLabel,
  showSourceLink = false,
  sourceSlug,
  variant = 'major-premise',
  className = '',
}: EvidenceQuoteProps) {
  const borderColors = {
    'major-premise': 'border-red-800/40',
    'minor-premise': 'border-green-800/40',
    conclusion: 'border-gold/60',
  };

  const borderColor = borderColors[variant];

  return (
    <div
      className={`evidence-quote border-l-8 ${borderColor} pl-6 py-4 bg-gold/5 ${className}`}
    >
      {/* Evidence Label */}
      {evidenceLabel && (
        <p className="text-xs uppercase tracking-wider text-forest/60 mb-2 font-lato font-semibold">
          Evidence: {evidenceLabel}
        </p>
      )}

      {/* Quote Text */}
      <blockquote className="text-lg md:text-xl font-merriweather italic text-charcoal leading-relaxed mb-4">
        "{quote}"
      </blockquote>

      {/* Attribution */}
      {(author || source) && (
        <div className="flex items-center gap-2 text-base text-charcoal/70 font-lato">
          {author && <span className="font-semibold">{author}</span>}
          {author && source && <span>—</span>}
          {source && (
            showSourceLink && sourceSlug ? (
              <Link
                href={`/texts/${sourceSlug}`}
                className="hover:text-forest transition-colors underline decoration-dotted inline-flex items-center gap-1"
              >
                {source}
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </Link>
            ) : (
              <span className="italic">{source}</span>
            )
          )}
        </div>
      )}
    </div>
  );
}
```

---

## Usage Examples

### Major Premise Evidence

```typescript
<EvidenceQuote
  quote="The school turned into a kind of factory, turned into a kind of machine where study has become the manipulation of things—methodized."
  author="Dr. Dennis Quinn"
  source="IHP Lecture I"
  evidenceLabel="From Integrated Humanities Lecture"
  showSourceLink={true}
  sourceSlug="integrated_humanities_lecture"
  variant="major-premise"
/>
```

### Minor Premise Evidence with Link

```typescript
<EvidenceQuote
  quote="Poetic knowledge is the attempt to know the way a child knows things, or the way a lover knows the beloved."
  author="John Senior"
  source="The Restoration of Innocence"
  evidenceLabel="Defining Poetic Knowledge"
  showSourceLink={true}
  sourceSlug="the-restoration-of-innocence"
  variant="minor-premise"
/>
```

---

## Testing Checklist

### Visual Design
- [ ] Border color matches variant (red/green/gold)
- [ ] Border width 8px, visually prominent
- [ ] "Evidence:" label displays when provided
- [ ] Quote text italic, proper size
- [ ] Attribution bold for author
- [ ] Link icon displays when enabled

### Accessibility
- [ ] Link has proper hover state
- [ ] Color contrast meets WCAG AA
- [ ] Screen reader announces properly
- [ ] Keyboard navigation works

---

## Acceptance Criteria

- ✅ Evidence label displays prominently
- ✅ Border colors distinguish premise types
- ✅ Source links work when enabled
- ✅ Accessibility audit passes

---

## Next Steps

Proceed to **Prompt 04: ProgressIndicator Component**

---

**Estimated Time:** 1 hour  
**Complexity:** Low
