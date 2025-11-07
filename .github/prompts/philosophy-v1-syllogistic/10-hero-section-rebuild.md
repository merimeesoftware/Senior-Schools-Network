# Prompt 10: Hero Section Rebuild - Crisis Hook

## Objective

Rebuild the philosophy page hero section to immediately confront visitors with the education crisis and promise a solution rooted in poetic knowledge.

---

## Section Strategy

### Messaging Hierarchy

1. **Crisis Hook** (H1): "Modern Education Has Failed Our Sons"
2. **Diagnosis** (Subheading): "Screens, softness, specialization—three poisons destroying boyhood vitality"
3. **Promise** (CTA): "Discover the classical antidote: gymnasium + poetic knowledge = warrior poets"

### Visual Design

- Background: Landscape image (grayscale filter for problem, vibrant for solution split)
- Layout: Text overlay with semi-transparent dark background
- Typography: Large, bold Playfair for H1; Merriweather for subheading
- CTA: Prominent gold button with arrow icon

---

## Implementation

**File:** `app/(site)/philosophy/page.tsx`

### Hero Section

```typescript
import { HeroSection } from '@/components/HeroSection';
import { CTAButton } from '@/components/CTAButton';

export default function PhilosophyPage() {
  return (
    <main>
      {/* Hero Section */}
      <HeroSection
        backgroundImage="/images/landscapes/misty-mountain-path.jpg"
        overlayOpacity={0.6}
        height="tall" // Use 'tall' variant for impact
        className="relative"
      >
        {/* Crisis Hook */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white leading-tight">
            Modern Education Has Failed Our Sons
          </h1>

          <p className="text-xl md:text-2xl text-white/90 font-merriweather leading-relaxed max-w-3xl mx-auto">
            Screens replace wonder. Softness replaces risk. Specialized skills replace integrated
            wisdom. Three poisons are destroying boyhood vitality—and with it, Christendom's future.
          </p>

          {/* Promise */}
          <div className="pt-4">
            <p className="text-lg text-gold font-semibold mb-4">
              But the antidote exists.
            </p>
            <CTAButton
              href="#syllogism-preview"
              variant="primary"
              size="large"
              showArrow={true}
            >
              Discover the Classical Solution
            </CTAButton>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2 text-white/70">
            <span className="text-sm font-lato uppercase tracking-wide">Scroll for the argument</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </HeroSection>

      {/* Rest of page... */}
    </main>
  );
}
```

---

## Alternative: Split Hero (Problem/Solution)

If you want to visually split the hero into problem (left) and solution (right):

```typescript
<section className="relative h-screen flex items-center overflow-hidden">
  {/* Problem Side (Grayscale) */}
  <div className="absolute inset-0 w-1/2 left-0">
    <div
      className="absolute inset-0 bg-cover bg-center filter grayscale"
      style={{ backgroundImage: "url('/images/landscapes/barren-field.jpg')" }}
    />
    <div className="absolute inset-0 bg-charcoal/70" />
  </div>

  {/* Solution Side (Vibrant) */}
  <div className="absolute inset-0 w-1/2 right-0">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/landscapes/lush-meadow.jpg')" }}
    />
    <div className="absolute inset-0 bg-forest/40" />
  </div>

  {/* Content Overlay */}
  <div className="relative z-10 w-full">
    <div className="max-w-5xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Problem Text */}
      <div className="text-white space-y-4">
        <h2 className="font-playfair text-3xl font-bold">The Crisis</h2>
        <p className="text-lg">
          Modern education has poisoned the well with screens, softness, and specialization.
        </p>
      </div>

      {/* Solution Text */}
      <div className="text-white space-y-4">
        <h2 className="font-playfair text-3xl font-bold">The Antidote</h2>
        <p className="text-lg">
          Poetic knowledge restores wonder, gymnasium builds warriors, and liturgy crowns all.
        </p>
      </div>
    </div>

    {/* Central CTA */}
    <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
      <CTAButton href="#syllogism-preview" variant="primary" size="large" showArrow={true}>
        See the Full Argument
      </CTAButton>
    </div>
  </div>
</section>
```

---

## Content Specifications

### Required Elements

1. **H1 Headline:** "Modern Education Has Failed Our Sons"
   - Font: Playfair Display, 5xl/7xl, bold
   - Color: White with subtle text-shadow
   - Max-width: 4xl for readability

2. **Subheading:** Crisis diagnosis (screens/softness/specialization)
   - Font: Merriweather, xl/2xl
   - Color: White/90% opacity
   - Max-width: 3xl

3. **Promise Line:** "But the antidote exists."
   - Font: Lato, lg, semibold
   - Color: Gold (brand accent)
   - Position: Above CTA

4. **Primary CTA:** "Discover the Classical Solution"
   - Variant: Primary (gold background)
   - Size: Large
   - Icon: Arrow (→)
   - Link: `#syllogism-preview` (anchor to next section)

5. **Scroll Indicator:** Animated arrow pointing down
   - Text: "Scroll for the argument"
   - Animation: Bounce (Tailwind utility)
   - Position: Absolute bottom-8

---

## Image Selection

**Primary Option:**
- File: `/images/landscapes/misty-mountain-path.jpg`
- Symbolism: Journey, ascent, challenge ahead
- Treatment: 60% dark overlay for text contrast

**Alternative Options:**
- `/images/landscapes/sunrise-over-fields.jpg` (hope, new beginning)
- `/images/landscapes/ancient-forest-path.jpg` (tradition, depth)
- `/images/landscapes/stormy-coast.jpg` (urgency, crisis)

**Split Hero Images:**
- Problem: `/images/landscapes/barren-field.jpg` (grayscale)
- Solution: `/images/landscapes/lush-meadow.jpg` (vibrant)

---

## Testing Checklist

### Visual Design
- [ ] H1 readable on background (contrast ratio ≥ 4.5:1)
- [ ] Overlay opacity balances image/text
- [ ] CTA button prominent and accessible
- [ ] Scroll indicator visible and animated
- [ ] Responsive on mobile (text scales, layout stacks)

### Content
- [ ] Crisis hook confronts immediately
- [ ] Three poisons clearly stated (screens/softness/specialization)
- [ ] Promise provides hope
- [ ] CTA text action-oriented
- [ ] Boys-focus evident ("our sons")

### Interactivity
- [ ] CTA navigates to #syllogism-preview
- [ ] Smooth scroll to anchor
- [ ] Scroll indicator clickable (optional)
- [ ] Hover states on CTA
- [ ] Focus visible on CTA (keyboard)

### Accessibility
- [ ] H1 is page title (semantic hierarchy)
- [ ] Alt text for background image (decorative, can be empty)
- [ ] Color contrast passes WCAG AA
- [ ] CTA has clear focus indicator
- [ ] Scroll indicator aria-label

---

## Acceptance Criteria

- ✅ Hero immediately confronts with crisis
- ✅ Three poisons clearly articulated
- ✅ Promise of solution creates hope
- ✅ CTA drives to syllogism preview
- ✅ Visual design urgent yet beautiful

---

**Next:** Prompt 11: Syllogism Preview Section (3-card intro)

**Estimated Time:** 2 hours  
**Complexity:** Medium  
**Dependencies:** HeroSection, CTAButton
