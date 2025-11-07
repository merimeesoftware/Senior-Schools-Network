# Prompt 11: Syllogism Preview Section - 3-Card Introduction

## Objective

Create a visual preview of the syllogistic argument using three cards (Major Premise → Minor Premise → Conclusion) that introduces the logical structure before diving into full sections.

---

## Section Strategy

### Messaging

1. **Section Intro:** "The Argument: Three Steps to Restoration"
2. **Card 1 (Major Premise):** "Modern education has failed" (diagnosis)
3. **Card 2 (Minor Premise):** "Poetic knowledge is the remedy" (prescription)
4. **Card 3 (Conclusion):** "Warrior poets will restore Christendom" (vision)

### Visual Design

- Three equal-width cards in a row (desktop) / stacked (mobile)
- Roman numerals: I, II, ∴ (Therefore symbol for conclusion)
- Premise-specific border colors: red (major), green (minor), gold (conclusion)
- Icons or symbols to reinforce each step
- Hover effect: subtle lift and shadow

---

## Implementation

**File:** `app/(site)/philosophy/page.tsx`

### Syllogism Preview Section

```typescript
import { ContentContainer } from '@/components/ContentContainer';
import { SectionHeading } from '@/components/SectionHeading';
import Link from 'next/link';

export default function PhilosophyPage() {
  return (
    <main>
      {/* Hero Section (from Prompt 10) */}
      {/* ... */}

      {/* Syllogism Preview */}
      <section id="syllogism-preview" className="py-20 bg-parchment-light">
        <ContentContainer>
          <SectionHeading
            title="The Argument: Three Steps to Restoration"
            subtitle="A syllogistic case for poetic knowledge and the gymnasium stage"
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Card 1: Major Premise */}
            <Link
              href="#major-premise"
              className="group block bg-white border-l-8 border-red-700 rounded-lg p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-6xl font-playfair text-red-700/30 leading-none">I</div>
                <div className="text-4xl" aria-hidden="true">
                  ⚠️
                </div>
              </div>
              <h3 className="font-playfair text-2xl font-bold text-forest mb-3">
                Major Premise
              </h3>
              <p className="text-lg font-semibold text-red-900 mb-3">
                Modern education has failed our sons.
              </p>
              <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                Screens replace wonder. Softness replaces risk. Specialized knowledge replaces
                integrated wisdom. The gymnasium stage—ages 7-13—has been abandoned, leaving boys
                weak, distracted, and disconnected.
              </p>
              <div className="flex items-center text-forest font-medium group-hover:text-gold transition-colors">
                <span>Read the diagnosis</span>
                <svg
                  className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </Link>

            {/* Card 2: Minor Premise */}
            <Link
              href="#minor-premise"
              className="group block bg-white border-l-8 border-green-700 rounded-lg p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-6xl font-playfair text-green-700/30 leading-none">II</div>
                <div className="text-4xl" aria-hidden="true">
                  💊
                </div>
              </div>
              <h3 className="font-playfair text-2xl font-bold text-forest mb-3">
                Minor Premise
              </h3>
              <p className="text-lg font-semibold text-green-900 mb-3">
                Poetic knowledge is the remedy.
              </p>
              <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                Senior's four stages restore the natural order: nursery (wonder), gymnasium
                (physical risk), poetic (integrated learning), spiritual (liturgical wisdom). The
                gymnasium stage builds the physical and moral courage prerequisite for all higher
                learning.
              </p>
              <div className="flex items-center text-forest font-medium group-hover:text-gold transition-colors">
                <span>Read the prescription</span>
                <svg
                  className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </Link>

            {/* Card 3: Conclusion */}
            <Link
              href="#conclusion"
              className="group block bg-white border-l-8 border-gold rounded-lg p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-6xl font-playfair text-gold/50 leading-none">∴</div>
                <div className="text-4xl" aria-hidden="true">
                  🛡️
                </div>
              </div>
              <h3 className="font-playfair text-2xl font-bold text-forest mb-3">
                Conclusion
              </h3>
              <p className="text-lg font-semibold text-gold-dark mb-3">
                Warrior poets will restore Christendom.
              </p>
              <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                Boys formed in the gymnasium—physically resilient, morally courageous—and rooted in
                poetic knowledge will become the warrior poets our age desperately needs: men who
                defend truth, build families, and restore Christian culture.
              </p>
              <div className="flex items-center text-forest font-medium group-hover:text-gold transition-colors">
                <span>Read the vision</span>
                <svg
                  className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </Link>
          </div>

          {/* Optional: Logic Diagram */}
          <div className="mt-16 max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-4 text-lg font-medium text-forest">
              <span className="px-4 py-2 bg-red-100 border-2 border-red-700 rounded-lg">
                Crisis
              </span>
              <span className="text-2xl">+</span>
              <span className="px-4 py-2 bg-green-100 border-2 border-green-700 rounded-lg">
                Remedy
              </span>
              <span className="text-2xl">=</span>
              <span className="px-4 py-2 bg-gold/20 border-2 border-gold rounded-lg">
                Restoration
              </span>
            </div>
            <p className="mt-4 text-sm text-charcoal/70 italic">
              A classical argument rooted in Senior, IHP, and Scripture
            </p>
          </div>
        </ContentContainer>
      </section>

      {/* Rest of page... */}
    </main>
  );
}
```

---

## Alternative: Compact Cards (Mobile-First)

If space is tight, use a more compact layout:

```typescript
<div className="space-y-6">
  {syllogismSteps.map((step) => (
    <Link
      key={step.id}
      href={step.href}
      className="flex items-start gap-6 bg-white border-l-8 rounded-lg p-6 shadow-md hover:shadow-lg transition-all"
      style={{ borderColor: step.color }}
    >
      <div className="flex-shrink-0">
        <div
          className="text-4xl font-playfair opacity-30"
          style={{ color: step.color }}
        >
          {step.numeral}
        </div>
      </div>
      <div className="flex-1">
        <h3 className="font-playfair text-xl font-bold text-forest mb-2">
          {step.title}
        </h3>
        <p className="text-base font-semibold mb-2" style={{ color: step.emphasisColor }}>
          {step.summary}
        </p>
        <p className="text-sm text-charcoal/80">{step.teaser}</p>
      </div>
      <div className="flex-shrink-0 text-2xl">{step.icon}</div>
    </Link>
  ))}
</div>
```

---

## Content Specifications

### Card 1: Major Premise

- **Numeral:** I (Roman one)
- **Icon:** ⚠️ (warning)
- **Border:** 8px red-700
- **Title:** "Major Premise"
- **Summary:** "Modern education has failed our sons."
- **Teaser:** "Screens replace wonder. Softness replaces risk. Specialized knowledge replaces integrated wisdom. The gymnasium stage—ages 7-13—has been abandoned, leaving boys weak, distracted, and disconnected."
- **CTA:** "Read the diagnosis" → `#major-premise`

### Card 2: Minor Premise

- **Numeral:** II (Roman two)
- **Icon:** 💊 (medicine/remedy)
- **Border:** 8px green-700
- **Title:** "Minor Premise"
- **Summary:** "Poetic knowledge is the remedy."
- **Teaser:** "Senior's four stages restore the natural order: nursery (wonder), gymnasium (physical risk), poetic (integrated learning), spiritual (liturgical wisdom). The gymnasium stage builds the physical and moral courage prerequisite for all higher learning."
- **CTA:** "Read the prescription" → `#minor-premise`

### Card 3: Conclusion

- **Numeral:** ∴ (Therefore symbol)
- **Icon:** 🛡️ (shield/warrior)
- **Border:** 8px gold
- **Title:** "Conclusion"
- **Summary:** "Warrior poets will restore Christendom."
- **Teaser:** "Boys formed in the gymnasium—physically resilient, morally courageous—and rooted in poetic knowledge will become the warrior poets our age desperately needs: men who defend truth, build families, and restore Christian culture."
- **CTA:** "Read the vision" → `#conclusion`

---

## Testing Checklist

### Visual Design
- [ ] Three cards equal width (desktop)
- [ ] Cards stack vertically (mobile)
- [ ] Border colors correct (red/green/gold)
- [ ] Roman numerals prominent
- [ ] Hover lift and shadow work
- [ ] Icons appropriate and accessible

### Content
- [ ] Major premise: crisis/diagnosis
- [ ] Minor premise: remedy/prescription
- [ ] Conclusion: vision/restoration
- [ ] Gymnasium stage mentioned in both major/minor
- [ ] CTAs action-oriented

### Interactivity
- [ ] Links navigate to section anchors
- [ ] Smooth scroll to sections
- [ ] Hover states on cards
- [ ] Focus visible (keyboard)
- [ ] Arrow animates on hover

### Accessibility
- [ ] Cards are links (semantic <a>)
- [ ] Icons have aria-hidden
- [ ] Color not sole indicator (text + border)
- [ ] Keyboard navigable
- [ ] Screen reader announces card purpose

---

## Acceptance Criteria

- ✅ Three cards preview the argument structure
- ✅ Premise-specific colors and numerals
- ✅ Teasers create curiosity
- ✅ CTAs drive to full sections
- ✅ Responsive and accessible

---

**Next:** Prompt 12: Major Premise Section A (Loss of Wonder)

**Estimated Time:** 2.5 hours  
**Complexity:** Medium  
**Dependencies:** ContentContainer, SectionHeading, SyllogismSection (from Prompt 01)
