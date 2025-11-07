# Prompt 05: CounterargumentAccordion Component

## Objective

Create a specialized `<CounterargumentAccordion>` component for FAQ-style objection handling with visual cues and embedded quote support.

---

## Component Specification

### Interface

```typescript
interface CounterargumentAccordionProps {
  objections: Array<{
    question: string;
    answer: string;
    quote?: Quote;
    icon?: ReactNode;
  }>;
  className?: string;
}
```

### Features Required

1. **Pre-styled for Objections**
   - Question mark icon (❓) when collapsed
   - Checkmark icon (✓) when expanded
   - Spiritual color accent (border-spiritual)
   - Background tint on expand

2. **Quote Integration**
   - Optional embedded quote within answer
   - Uses EvidenceQuote or QuoteCard
   - Seamless visual integration

3. **Accessibility**
   - Built on Radix UI Accordion primitives
   - Keyboard navigation (Tab, Enter/Space, Arrow keys)
   - Screen reader announcements

---

## Implementation

**File:** `components/CounterargumentAccordion.tsx`

```typescript
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import QuoteCard from './QuoteCard';
import type { Quote } from '@/lib/types/content';

interface Objection {
  question: string;
  answer: string;
  quote?: Quote;
  icon?: React.ReactNode;
}

interface CounterargumentAccordionProps {
  objections: Objection[];
  className?: string;
}

export default function CounterargumentAccordion({
  objections,
  className = '',
}: CounterargumentAccordionProps) {
  return (
    <Accordion type="single" collapsible className={`space-y-4 ${className}`}>
      {objections.map((objection, index) => (
        <AccordionItem
          key={index}
          value={`objection-${index}`}
          className="counterargument-item border-l-4 border-spiritual/40 bg-spiritual/5 rounded-lg overflow-hidden"
        >
          <AccordionTrigger className="px-6 py-4 hover:bg-spiritual/10 transition-colors [&[data-state=open]]:bg-spiritual/15">
            <div className="flex items-center gap-3 text-left">
              <span className="text-2xl" aria-hidden="true">
                {objection.icon || '❓'}
              </span>
              <span className="text-lg md:text-xl font-playfair text-charcoal">
                {objection.question}
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6 space-y-4">
            <div className="text-base md:text-lg leading-relaxed text-charcoal/90 font-lato">
              {objection.answer}
            </div>
            {objection.quote && (
              <QuoteCard
                quote={objection.quote.quote}
                author={objection.quote.author}
                source={objection.quote.source}
                variant="embedded"
                className="mt-4"
              />
            )}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
```

---

## CSS Additions

**File:** `app/globals.css`

```css
/* Counterargument Accordion Styling */
.counterargument-item {
  @apply border-l-4 border-spiritual/40 bg-spiritual/5;
}

.counterargument-item[data-state="open"] {
  @apply border-spiritual bg-spiritual/10;
}

.counterargument-item[data-state="open"]::before {
  content: "✓";
  @apply absolute -left-10 top-4 text-2xl text-spiritual;
}
```

---

## Usage Example

```typescript
import CounterargumentAccordion from '@/components/CounterargumentAccordion';

const objections = [
  {
    question: "Why focus only on boys?",
    answer: "The gymnasium stage (ages 7-13) is uniquely critical for boys. John Senior's etymology reveals why: 'Puer, the Latin word for boy, derives from pure because concupiscence has not reared up as yet...' This is not sexism—it's developmental realism.",
    quote: {
      id: 'senior-puer',
      quote: 'Boys burn with gem-like flames.',
      author: 'John Senior',
      source: 'The Restoration of Innocence',
      category: 'gymnasium',
    },
  },
  {
    question: "Isn't this elitist?",
    answer: "The IHP lecturers addressed this head-on: 'It destroys the basis of elitism... I'm not going to come here and get what I can take.' Poetic education cultivates humility, not superiority.",
    quote: {
      id: 'ihp-elitism',
      quote: "It destroys the basis of elitism... I'm not going to come here and get what I can take.",
      author: 'Dr. Dennis Quinn',
      source: 'IHP Lecture',
      category: 'philosophy',
    },
  },
  {
    question: "Is this practical for real life?",
    answer: "Senior's IHP graduates prove practicality. Many pursued STEM PhDs, medical degrees, law—because their formation was integrated. Poetic knowledge yields diverse fruits: contemplative vocations, skilled trades, academic excellence, fatherhood.",
  },
];

<CounterargumentAccordion objections={objections} />
```

---

## Testing Checklist

### Visual Design
- [ ] Border color spiritual (purple accent)
- [ ] Question mark icon displays when collapsed
- [ ] Checkmark appears on left when expanded
- [ ] Background tint changes on expand
- [ ] Embedded quotes render properly
- [ ] Hover state visible

### Accessibility
- [ ] Keyboard navigation works (Tab, Enter, Arrows)
- [ ] Screen reader announces expand/collapse
- [ ] Focus visible on trigger
- [ ] aria-expanded states correct
- [ ] Question text fully accessible

### Functionality
- [ ] Accordion expands/collapses smoothly
- [ ] Only one item open at a time (single mode)
- [ ] Optional quote renders correctly
- [ ] Answer text wraps properly
- [ ] Icons display correctly

---

## Acceptance Criteria

- ✅ Visual distinction for objection/response format
- ✅ Icons provide visual cues (❓/✓)
- ✅ Embedded quotes integrate seamlessly
- ✅ Accessibility audit passes
- ✅ Keyboard navigation functional

---

**Next:** Prompt 06: Accordion Enhancement (argument variant)

**Estimated Time:** 1.5 hours  
**Complexity:** Medium  
**Dependencies:** Accordion (existing), QuoteCard
