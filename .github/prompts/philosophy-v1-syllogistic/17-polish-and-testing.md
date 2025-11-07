# Prompt 17: Polish & Testing - CSS, Performance, Accessibility

## Objective

Polish the philosophy page with CSS enhancements, performance optimizations, and comprehensive accessibility/testing validation to ensure production-ready quality.

---

## Tasks Overview

1. **CSS Polish:** Add filters, shadows, and visual enhancements
2. **Performance:** Optimize images, lazy loading, bundle size
3. **Accessibility:** WCAG AA audit and fixes
4. **Testing:** Component tests, integration tests, manual QA

---

## Task 1: CSS Enhancements

### Global Styles

**File:** `app/globals.css`

```css
/* ==========================================================================
   Philosophy Page Enhancements
   ========================================================================== */

/* Problem/Solution Panel Filters */
.problem-panel img {
  @apply grayscale contrast-75 opacity-80;
}

.solution-panel img {
  @apply saturate-110 brightness-105;
}

/* Premise Border Glows */
.major-premise-border {
  @apply border-red-700 shadow-lg shadow-red-700/20;
}

.minor-premise-border {
  @apply border-green-700 shadow-lg shadow-green-700/20;
}

.conclusion-border {
  @apply border-gold shadow-lg shadow-gold/30;
}

/* Syllogism Section Decorations */
.syllogism-section[data-variant="major-premise"]::before {
  content: "";
  @apply absolute -left-4 top-0 bottom-0 w-2 bg-red-700 rounded-full opacity-30;
}

.syllogism-section[data-variant="minor-premise"]::before {
  content: "";
  @apply absolute -left-4 top-0 bottom-0 w-2 bg-green-700 rounded-full opacity-30;
}

.syllogism-section[data-variant="conclusion"]::before {
  content: "";
  @apply absolute -left-4 top-0 bottom-0 w-2 bg-gold rounded-full opacity-50;
}

/* Roman Numeral Decorations (Desktop Only) */
@media (min-width: 1024px) {
  .syllogism-section[data-variant="major-premise"] > div {
    @apply relative;
  }

  .syllogism-section[data-variant="major-premise"] > div::before {
    content: "I";
    @apply absolute -left-24 top-0 text-9xl font-playfair text-red-700/10 select-none;
  }

  .syllogism-section[data-variant="minor-premise"] > div::before {
    content: "II";
    @apply absolute -left-24 top-0 text-9xl font-playfair text-green-700/10 select-none;
  }

  .syllogism-section[data-variant="conclusion"] > div::before {
    content: "∴";
    @apply absolute -left-24 top-0 text-9xl font-playfair text-gold/20 select-none;
  }
}

/* Smooth Scroll Behavior */
html {
  scroll-behavior: smooth;
}

/* Focus Visible Enhancements */
:focus-visible {
  @apply outline-none ring-2 ring-forest ring-offset-2 ring-offset-white;
}

/* Print Styles */
@media print {
  .no-print {
    display: none !important;
  }

  .syllogism-section {
    page-break-inside: avoid;
  }
}
```

---

## Task 2: Performance Optimizations

### Image Optimization

**File:** `components/OptimizedImage.tsx` (ensure proper usage)

```typescript
// Example usage throughout philosophy page
<OptimizedImage
  src="/images/adventure/boys-climbing-cliff.jpg"
  alt="Boys climbing a rocky cliff face together"
  width={800}
  height={600}
  priority={false} // Hero images priority={true}, rest false
  className="rounded-lg shadow-lg"
/>
```

### Lazy Loading for Non-Critical Components

**File:** `app/(site)/philosophy/page.tsx`

```typescript
import dynamic from 'next/dynamic';

// Lazy load heavy components below the fold
const InteractiveStages = dynamic(() => import('@/components/InteractiveStages'), {
  loading: () => <div className="h-64 bg-parchment-light animate-pulse rounded-lg" />,
});

const RotatingQuotes = dynamic(() => import('@/components/RotatingQuotes'), {
  loading: () => <div className="h-48 bg-parchment-light animate-pulse rounded-lg" />,
});

const CounterargumentAccordion = dynamic(() => import('@/components/CounterargumentAccordion'), {
  loading: () => <div className="h-32 bg-parchment-light animate-pulse rounded-lg" />,
});
```

### Bundle Size Analysis

```bash
# Run Next.js bundle analyzer
npm run build
# Review output for large bundles
# Consider code splitting if any component > 100KB
```

---

## Task 3: Accessibility Audit

### WCAG AA Checklist

#### Color Contrast
- [ ] All text passes 4.5:1 contrast ratio (body text)
- [ ] Large text passes 3:1 contrast ratio (headings)
- [ ] Interactive elements pass 3:1 contrast ratio
- [ ] Test with WebAIM Contrast Checker

#### Keyboard Navigation
- [ ] All interactive elements reachable via Tab
- [ ] Focus indicators visible (ring-2 ring-forest)
- [ ] Modal/accordion traps focus correctly
- [ ] Skip-to-content link available (add if missing)

#### Screen Reader Support
- [ ] All images have descriptive alt text
- [ ] Decorative icons have aria-hidden="true"
- [ ] Landmark regions (<nav>, <main>, <section>) used
- [ ] ARIA labels on interactive components (buttons, links)

#### Semantic HTML
- [ ] Headings follow hierarchical order (H1 > H2 > H3)
- [ ] Lists use <ul>, <ol>, <li>
- [ ] Quotes use <blockquote> and <cite>
- [ ] Forms use <label> for inputs

### Automated Testing

**Install axe-core:**

```bash
npm install --save-dev @axe-core/react
```

**Add to development mode:**

```typescript
// app/layout.tsx (development only)
if (process.env.NODE_ENV !== 'production') {
  import('@axe-core/react').then((axe) => {
    axe.default(React, ReactDOM, 1000);
  });
}
```

**Run Lighthouse Audit:**

```bash
# Chrome DevTools > Lighthouse
# Categories: Performance, Accessibility, Best Practices, SEO
# Target: All scores ≥ 90
```

---

## Task 4: Component Testing

### Unit Tests

**File:** `components/__tests__/SyllogismSection.test.tsx`

```typescript
import { render, screen } from '@testing-library/react';
import { SyllogismSection } from '../SyllogismSection';

describe('SyllogismSection', () => {
  it('renders with major-premise variant', () => {
    render(
      <SyllogismSection variant="major-premise" number="I">
        <p>Test content</p>
      </SyllogismSection>
    );
    expect(screen.getByText('Test content')).toBeInTheDocument();
    // Add assertions for red border, Roman numeral, etc.
  });

  it('renders with minor-premise variant', () => {
    render(
      <SyllogismSection variant="minor-premise" number="II">
        <p>Test content</p>
      </SyllogismSection>
    );
    // Add assertions for green border, Roman numeral
  });

  it('renders with conclusion variant', () => {
    render(
      <SyllogismSection variant="conclusion" number="∴">
        <p>Test content</p>
      </SyllogismSection>
    );
    // Add assertions for gold border, therefore symbol
  });
});
```

**File:** `components/__tests__/ProblemSolutionPanel.test.tsx`

```typescript
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ProblemSolutionPanel } from '../ProblemSolutionPanel';

describe('ProblemSolutionPanel', () => {
  it('renders in split layout', () => {
    render(
      <ProblemSolutionPanel
        layout="split"
        problemContent={<div>Problem</div>}
        solutionContent={<div>Solution</div>}
      />
    );
    expect(screen.getByText('Problem')).toBeInTheDocument();
    expect(screen.getByText('Solution')).toBeInTheDocument();
  });

  it('toggles between problem and solution in toggle layout', async () => {
    const user = userEvent.setup();
    render(
      <ProblemSolutionPanel
        layout="toggle"
        problemContent={<div>Problem</div>}
        solutionContent={<div>Solution</div>}
      />
    );

    const toggleButton = screen.getByRole('button');
    expect(screen.getByText('Problem')).toBeVisible();

    await user.click(toggleButton);
    expect(screen.getByText('Solution')).toBeVisible();
  });
});
```

### Integration Tests

**File:** `app/(site)/philosophy/__tests__/page.integration.test.tsx`

```typescript
import { render, screen } from '@testing-library/react';
import PhilosophyPage from '../page';

describe('Philosophy Page Integration', () => {
  it('renders all major sections', () => {
    render(<PhilosophyPage />);

    // Hero
    expect(screen.getByRole('heading', { name: /Modern Education Has Failed/i })).toBeInTheDocument();

    // Syllogism Preview
    expect(screen.getByText(/The Argument: Three Steps/i)).toBeInTheDocument();

    // Major Premise
    expect(screen.getByText(/Major Premise: Modern Education Has Failed/i)).toBeInTheDocument();

    // Minor Premise
    expect(screen.getByText(/Minor Premise: Poetic Knowledge Is the Remedy/i)).toBeInTheDocument();

    // Conclusion
    expect(screen.getByText(/Conclusion: Warrior Poets Will Restore Christendom/i)).toBeInTheDocument();
  });

  it('has accessible navigation landmarks', () => {
    render(<PhilosophyPage />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('all CTAs have proper hrefs', () => {
    render(<PhilosophyPage />);
    const ctaLinks = screen.getAllByRole('link', { name: /Discover|Get|Browse|Read/i });
    ctaLinks.forEach((link) => {
      expect(link).toHaveAttribute('href');
    });
  });
});
```

---

## Task 5: Manual QA Checklist

### Visual Inspection
- [ ] All sections render correctly on desktop (1920px)
- [ ] All sections render correctly on tablet (768px)
- [ ] All sections render correctly on mobile (375px)
- [ ] Images load correctly and are optimized
- [ ] Fonts (Playfair, Merriweather, Lato) load correctly
- [ ] Colors match brand palette (forest, gold, charcoal, parchment)

### Interactivity
- [ ] Accordion expands/collapses smoothly
- [ ] RotatingQuotes auto-rotates and manual navigation works
- [ ] InteractiveStages cards expand on click
- [ ] ProblemSolutionPanel toggle works (if layout="toggle")
- [ ] Smooth scroll to section anchors
- [ ] CTAs navigate to correct pages

### Content Accuracy
- [ ] All quotes match source documents
- [ ] Scripture references correct (book, chapter, verse)
- [ ] Author attributions accurate
- [ ] No typos or grammatical errors
- [ ] Gymnasium stage (7-13) consistently referenced
- [ ] Three poisons (screens/softness/specialization) clear

### Cross-Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Mobile Chrome (Android)

---

## Task 6: Performance Metrics

### Target Scores (Lighthouse)

- **Performance:** ≥ 90
- **Accessibility:** ≥ 95
- **Best Practices:** ≥ 90
- **SEO:** ≥ 95

### Key Metrics

- **First Contentful Paint (FCP):** < 1.8s
- **Largest Contentful Paint (LCP):** < 2.5s
- **Cumulative Layout Shift (CLS):** < 0.1
- **Total Blocking Time (TBT):** < 200ms

---

## Acceptance Criteria

- ✅ All CSS enhancements applied and tested
- ✅ Images optimized with lazy loading
- ✅ Lighthouse scores meet targets
- ✅ WCAG AA compliance verified
- ✅ Unit tests pass for all new components
- ✅ Integration tests pass for philosophy page
- ✅ Manual QA checklist completed
- ✅ Cross-browser testing passed

---

**Next:** Prompt 18: Launch Preparation (final review, content validation, deployment checklist)

**Estimated Time:** 3 hours  
**Complexity:** Medium  
**Dependencies:** All previous prompts (00-16)
