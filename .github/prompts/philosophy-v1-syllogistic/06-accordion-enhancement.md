# Prompt 06: Accordion Enhancement - Argument Variant

## Objective

Enhance the existing `<Accordion>` component to support an "argument" variant with checkmark icons when expanded and subtle visual feedback.

---

## Enhancement Specification

### New Props

```typescript
interface AccordionItemProps {
  // Existing props...
  variant?: 'default' | 'argument';
}
```

### Features to Add

1. **Argument Variant Styling**
   - Checkmark icon (✓) when expanded
   - Subtle green tint on expanded state
   - "Point proven" visual feedback
   - More prominent expand/collapse animation

2. **Visual Indicators**
   - Collapsed: Normal state with arrow
   - Expanded: Gold/green glow + checkmark
   - Smooth transition (300ms ease-out)

---

## Implementation

**File:** `components/Accordion.tsx`

### Modify AccordionItem

```typescript
interface AccordionItemProps {
  value: string;
  title: string;
  children: React.ReactNode;
  variant?: 'default' | 'argument';
  className?: string;
}

export function AccordionItem({
  value,
  title,
  children,
  variant = 'default',
  className = '',
}: AccordionItemProps) {
  return (
    <RadixAccordion.Item
      value={value}
      className={`
        border border-forest/20 rounded-lg overflow-hidden
        ${variant === 'argument' ? 'argument-accordion-item' : ''}
        ${className}
      `}
    >
      <RadixAccordion.Header className="flex">
        <RadixAccordion.Trigger
          className={`
            flex flex-1 items-center justify-between p-6 text-left
            font-playfair text-xl md:text-2xl text-forest
            hover:bg-parchment-dark/30 transition-all duration-200
            group
            ${variant === 'argument' ? '[&[data-state=open]]:bg-green-50/30' : ''}
          `}
        >
          <span className="pr-4">{title}</span>
          <div className="flex items-center gap-2">
            {variant === 'argument' && (
              <span
                className="text-2xl text-green-700 opacity-0 group-data-[state=open]:opacity-100 transition-opacity"
                aria-hidden="true"
              >
                ✓
              </span>
            )}
            <ChevronDownIcon
              className="h-6 w-6 text-forest transition-transform duration-200 group-data-[state=open]:rotate-180"
              aria-hidden="true"
            />
          </div>
        </RadixAccordion.Trigger>
      </RadixAccordion.Header>
      <RadixAccordion.Content
        className={`
          overflow-hidden
          data-[state=closed]:animate-accordion-up
          data-[state=open]:animate-accordion-down
          ${variant === 'argument' ? 'data-[state=open]:bg-green-50/10' : ''}
        `}
      >
        <div className="p-6 pt-0">{children}</div>
      </RadixAccordion.Content>
    </RadixAccordion.Item>
  );
}
```

---

## CSS Additions

**File:** `app/globals.css`

```css
/* Argument Accordion Variant */
.argument-accordion-item[data-state="open"] {
  @apply border-green-700/40 shadow-lg shadow-green-700/10;
}

.argument-accordion-item[data-state="open"] .accordion-trigger {
  @apply bg-green-50/30;
}

/* Enhanced animation for argument variant */
.argument-accordion-item .accordion-content {
  @apply transition-all duration-300;
}

.argument-accordion-item[data-state="open"]::before {
  content: "";
  @apply absolute -left-1 top-0 bottom-0 w-1 bg-green-700;
}
```

---

## Usage Examples

### Default Variant (Existing Behavior)

```typescript
<Accordion type="single" defaultValue="poetic-knowledge">
  <AccordionItem value="poetic-knowledge" title="Poetic Knowledge">
    <p>Content about poetic knowledge...</p>
  </AccordionItem>
</Accordion>
```

### Argument Variant (New)

```typescript
<Accordion type="single" defaultValue="major-premise-a">
  <AccordionItem
    value="major-premise-a"
    title="A. Loss of Wonder & Sensory Integration"
    variant="argument"
  >
    <div className="space-y-6">
      <p className="text-lg leading-relaxed text-charcoal/90">
        Modern education has poisoned the well...
      </p>
      <EvidenceQuote
        quote="The school turned into a kind of factory..."
        author="Dr. Dennis Quinn"
        source="IHP Lecture I"
        variant="major-premise"
      />
    </div>
  </AccordionItem>

  <AccordionItem
    value="major-premise-b"
    title="B. Cultural Softness & Gymnasium Crisis"
    variant="argument"
  >
    {/* Content */}
  </AccordionItem>
</Accordion>
```

---

## Testing Checklist

### Visual Design
- [ ] Checkmark appears when expanded
- [ ] Checkmark hidden when collapsed
- [ ] Green tint on expanded state
- [ ] Border color changes to green
- [ ] Shadow effect visible on expand
- [ ] Smooth transitions (300ms)

### Accessibility
- [ ] Checkmark has aria-hidden="true"
- [ ] Expand/collapse still keyboard accessible
- [ ] Screen reader announces state changes
- [ ] Focus visible on trigger
- [ ] No breaking changes to default variant

### Integration
- [ ] Works with existing Accordion component
- [ ] Default variant unchanged
- [ ] Argument variant applies correctly
- [ ] Can mix variants in same Accordion
- [ ] AccordionItem accepts variant prop

---

## Acceptance Criteria

- ✅ Argument variant adds checkmark on expand
- ✅ Visual feedback (green tint, shadow) works
- ✅ Default variant behavior unchanged
- ✅ Accessibility maintained
- ✅ Smooth animations

---

**Next:** Prompt 07: QuoteCard Enhancement (evidence variant)

**Estimated Time:** 1 hour  
**Complexity:** Low  
**Dependencies:** Accordion (existing)
