# Prompt 09: RotatingQuotes Enhancement - Argumentative Mode

## Objective

Enhance the existing `<RotatingQuotes>` component to support an "argumentative" mode with tooltips explaining relevance, manual navigation prominence, and slower rotation.

---

## Enhancement Specification

### New Props

```typescript
interface RotatingQuotesProps {
  // Existing props...
  mode?: 'default' | 'argumentative';
  showTooltips?: boolean; // "Why this matters" tooltips
  rotationSpeed?: number; // Milliseconds (default 6000 for default, 8000 for argumentative)
}

interface Quote {
  // Existing fields...
  relevance?: string; // Explanation of why quote matters for argument
  premiseType?: 'major-premise' | 'minor-premise' | 'conclusion';
}
```

### Features to Add

1. **Argumentative Mode Styling**
   - Slower rotation (8s vs 6s)
   - More prominent manual navigation controls
   - Premise-specific color accents on active indicator
   - Larger quote text (text-xl vs text-lg)

2. **Relevance Tooltips**
   - Hover over quote to see "Why this matters"
   - Tooltip appears below quote
   - Subtle fade-in animation
   - Touch-friendly (tap to show, tap outside to hide)

3. **Enhanced Navigation**
   - Larger prev/next buttons
   - Premise-colored indicators (red for major, green for minor, gold for conclusion)
   - Pause on hover
   - Manual navigation resets timer

---

## Implementation

**File:** `components/RotatingQuotes.tsx`

### Enhanced Component

```typescript
'use client';

import { useState, useEffect, useRef } from 'react';

interface Quote {
  text: string;
  author: string;
  source?: string;
  relevance?: string;
  premiseType?: 'major-premise' | 'minor-premise' | 'conclusion';
}

interface RotatingQuotesProps {
  quotes: Quote[];
  mode?: 'default' | 'argumentative';
  showTooltips?: boolean;
  rotationSpeed?: number;
  className?: string;
}

export function RotatingQuotes({
  quotes,
  mode = 'default',
  showTooltips = false,
  rotationSpeed,
  className = '',
}: RotatingQuotesProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const isArgumentative = mode === 'argumentative';
  const defaultSpeed = isArgumentative ? 8000 : 6000;
  const speed = rotationSpeed || defaultSpeed;

  const currentQuote = quotes[currentIndex];

  // Get premise color
  const getPremiseColor = (premiseType?: string) => {
    switch (premiseType) {
      case 'major-premise':
        return 'bg-red-700';
      case 'minor-premise':
        return 'bg-green-700';
      case 'conclusion':
        return 'bg-gold';
      default:
        return 'bg-forest';
    }
  };

  // Auto-rotation
  useEffect(() => {
    if (isPaused) return;

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % quotes.length);
    }, speed);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, quotes.length, speed]);

  // Manual navigation
  const goToQuote = (index: number) => {
    setCurrentIndex(index);
    // Reset timer
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const goToPrevious = () => {
    goToQuote((currentIndex - 1 + quotes.length) % quotes.length);
  };

  const goToNext = () => {
    goToQuote((currentIndex + 1) % quotes.length);
  };

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={() => isArgumentative && setIsPaused(true)}
      onMouseLeave={() => {
        setIsPaused(false);
        setShowTooltip(false);
      }}
    >
      {/* Quote Display */}
      <div className="relative min-h-[200px] flex flex-col justify-center">
        <blockquote
          className={`
            text-center transition-opacity duration-500
            ${isArgumentative ? 'text-xl' : 'text-lg'}
          `}
          onMouseEnter={() => showTooltips && setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          <p className="font-merriweather italic text-charcoal/90 leading-relaxed px-8">
            "{currentQuote.text}"
          </p>
          <footer className="mt-4 text-forest font-medium">
            <cite className="not-italic">— {currentQuote.author}</cite>
            {currentQuote.source && (
              <span className="block text-sm text-forest/70 mt-1">{currentQuote.source}</span>
            )}
          </footer>
        </blockquote>

        {/* Relevance Tooltip */}
        {showTooltips && showTooltip && currentQuote.relevance && (
          <div
            className="absolute left-1/2 -translate-x-1/2 bottom-0 w-full max-w-md
                       bg-parchment border-2 border-forest/30 rounded-lg p-4 shadow-lg
                       animate-fade-in z-10"
            role="tooltip"
          >
            <p className="text-sm text-forest/80">
              <span className="font-semibold text-forest">Why this matters:</span>{' '}
              {currentQuote.relevance}
            </p>
          </div>
        )}
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between mt-8">
        {/* Previous Button */}
        <button
          onClick={goToPrevious}
          className={`
            rounded-full transition-all duration-200
            focus:outline-none focus:ring-2 focus:ring-forest focus:ring-offset-2
            ${
              isArgumentative
                ? 'p-3 bg-forest/10 hover:bg-forest/20 text-forest'
                : 'p-2 text-forest/60 hover:text-forest'
            }
          `}
          aria-label="Previous quote"
        >
          <svg
            className={isArgumentative ? 'w-6 h-6' : 'w-5 h-5'}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Indicators */}
        <div className="flex gap-2">
          {quotes.map((quote, index) => (
            <button
              key={index}
              onClick={() => goToQuote(index)}
              className={`
                transition-all duration-200 rounded-full
                ${
                  isArgumentative
                    ? 'h-3 w-3 focus:outline-none focus:ring-2 focus:ring-forest focus:ring-offset-2'
                    : 'h-2 w-2'
                }
                ${
                  currentIndex === index
                    ? `${getPremiseColor(quote.premiseType)} scale-125`
                    : 'bg-forest/20 hover:bg-forest/40'
                }
              `}
              aria-label={`Go to quote ${index + 1}`}
              aria-current={currentIndex === index ? 'true' : 'false'}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={goToNext}
          className={`
            rounded-full transition-all duration-200
            focus:outline-none focus:ring-2 focus:ring-forest focus:ring-offset-2
            ${
              isArgumentative
                ? 'p-3 bg-forest/10 hover:bg-forest/20 text-forest'
                : 'p-2 text-forest/60 hover:text-forest'
            }
          `}
          aria-label="Next quote"
        >
          <svg
            className={isArgumentative ? 'w-6 h-6' : 'w-5 h-5'}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Pause Indicator */}
      {isArgumentative && isPaused && (
        <div className="text-center mt-2 text-xs text-forest/60">
          <span aria-live="polite">Paused</span>
        </div>
      )}
    </div>
  );
}
```

---

## CSS Additions

**File:** `app/globals.css`

```css
/* Tooltip fade-in animation */
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.3s ease-out;
}
```

---

## Usage Examples

### Default Mode (Existing)

```typescript
<RotatingQuotes
  quotes={[
    {
      text: "The soul is dyed the color of its leisure thoughts.",
      author: "Marcus Aurelius",
      source: "Meditations"
    }
  ]}
/>
```

### Argumentative Mode with Tooltips

```typescript
<RotatingQuotes
  mode="argumentative"
  showTooltips={true}
  quotes={[
    {
      text: "Modern education has become a factory system producing cogs, not cultivating souls.",
      author: "Dr. John Senior",
      source: "The Restoration of Christian Culture",
      premiseType: "major-premise",
      relevance: "This diagnosis exposes the utilitarian mindset that has corrupted education—treating children as raw material rather than image-bearers of God."
    },
    {
      text: "Poetic knowledge is not specialized knowledge but that connaturality and right harmony with things which Adam and Eve possessed in Eden.",
      author: "Dr. John Senior",
      source: "The Restoration of Christian Culture",
      premiseType: "minor-premise",
      relevance: "Senior points to Eden as the model—education must restore prelapsarian wonder, not pile on specialized skills."
    },
    {
      text: "The warrior poets we send forth will restore wonder, defend truth, and build anew.",
      author: "IHP Program",
      source: "Integrated Humanities Lecture I",
      premiseType: "conclusion",
      relevance: "This vision unites physical courage (warrior) with intellectual beauty (poet)—the gymnasium and poetic stages working together."
    }
  ]}
/>
```

### Within Syllogism Section

```typescript
<SyllogismSection variant="conclusion" number="∴">
  <h2 className="font-playfair text-4xl font-bold text-forest mb-8">
    Conclusion: Warrior Poets Will Restore Christendom
  </h2>

  <div className="max-w-3xl mx-auto">
    <RotatingQuotes
      mode="argumentative"
      showTooltips={true}
      rotationSpeed={10000}
      quotes={conclusionQuotes}
    />
  </div>
</SyllogismSection>
```

---

## Testing Checklist

### Visual Design
- [ ] Larger text in argumentative mode (text-xl)
- [ ] Slower rotation (8s vs 6s)
- [ ] Larger navigation buttons
- [ ] Premise-colored indicators
- [ ] Tooltip appears with smooth animation
- [ ] Pause indicator shows when hovered

### Interactivity
- [ ] Manual navigation works (prev/next)
- [ ] Click indicator jumps to quote
- [ ] Hover pauses rotation (argumentative mode)
- [ ] Tooltip shows on hover
- [ ] Timer resets on manual navigation
- [ ] Touch-friendly tooltip toggle

### Accessibility
- [ ] Navigation buttons have aria-labels
- [ ] Indicators have aria-current
- [ ] Tooltip has role="tooltip"
- [ ] Pause state announced (aria-live)
- [ ] Keyboard navigation works (Tab, Enter, Space)
- [ ] Focus visible on all controls

### Integration
- [ ] Works with existing RotatingQuotes usage
- [ ] Default mode behavior unchanged
- [ ] Premise colors match other components
- [ ] Quotes array includes relevance field
- [ ] Integrates with SyllogismSection

---

## Acceptance Criteria

- ✅ Argumentative mode has slower rotation
- ✅ Tooltips explain quote relevance
- ✅ Manual navigation prominent and functional
- ✅ Premise-colored indicators work
- ✅ Default behavior unchanged

---

**Next:** Prompt 10: Hero Section Rebuild (crisis hook)

**Estimated Time:** 2.5 hours  
**Complexity:** Medium  
**Dependencies:** RotatingQuotes (existing)
