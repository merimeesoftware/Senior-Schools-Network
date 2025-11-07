# Homepage Optimization Plan V3
**Senior Schools Network - Implementation-Ready**

---

## Executive Summary

This V3 plan refines the V2 homepage optimization recommendations based on comprehensive assessment of the current implementation, philosophical axioms, and live site interaction. V3 **rejects contradictory proposals**, **clarifies vague specifications**, and **provides implementation-ready code patterns** for phased deployment.

**Key V3 Improvements Over V2**:
- ✅ Resolves navigation redundancy contradiction (keeps Three Paths, rejects sticky nav)
- ✅ Eliminates gamification elements that contradict "Against Method" axiom
- ✅ Specifies exact placement/quantity of visual breaks (1 strategic quote/image band)
- ✅ Clarifies hero height approach (100vh desktop, 85vh mobile)
- ✅ Rejects parallax in favor of existing vertical pan animation
- ✅ Moves liturgical seasonality to Phase 2 (proper research required)
- ✅ Provides complete component code specifications

**Philosophy**: Amplify existing strengths through simplicity, not feature bloat. Wonder through organic enhancements, not rigid systems.

**Timeline**: 3 implementation phases over 5 days

**Last Updated**: November 5, 2025  
**Status**: Approved for Implementation  
**Phase**: Post-Phase 3, Pre-Phase 4 Enhancement

---

## Table of Contents

1. [Assessment Findings](#assessment-findings)
2. [V2 Critiques & V3 Corrections](#v2-critiques--v3-corrections)
3. [Implementation Roadmap](#implementation-roadmap)
4. [Phase 1: Core Enhancements](#phase-1-core-enhancements)
5. [Phase 2: Polish & Animation](#phase-2-polish--animation)
6. [Phase 3: Liturgical Seasonality (Future)](#phase-3-liturgical-seasonality-future)
7. [Rejected V2 Proposals](#rejected-v2-proposals)
8. [Testing & Validation](#testing--validation)
9. [Component Specifications](#component-specifications)

---

## Assessment Findings

### Current Implementation Strengths

**Already Working Well** (No Changes Needed):
1. ✅ **Hero Section**: Rotating quotes from axioms + vertical pan animation perfectly embodies "tributaries of wisdom"
2. ✅ **Typography Hierarchy**: Playfair/Merriweather/Lato combination creates classical elegance
3. ✅ **Three Paths Cards**: Substantively different from navigation (full descriptions + scripture + visual design)
4. ✅ **Interactive Stages**: Clean badge system with smooth transitions and color-coded content panels
5. ✅ **Scripture Carousel**: Footer waypoints with auto-rotation and accessible controls
6. ✅ **Color Palette**: "Enclosed Garden" theme with stage-specific colors maintains consistency
7. ✅ **Mobile Responsiveness**: Stack patterns and touch targets meet accessibility standards
8. ✅ **Performance**: Next.js optimization + lazy loading already efficient

### Identified Opportunities

**High-Impact Enhancements**:
1. 🎯 **Hero Scroll Indicator**: Add subtle visual cue to encourage scrolling (addresses potential overwhelm)
2. 🎯 **Click-to-Refresh Hero**: Manual agency for users wanting fresh inspiration
3. 🎯 **Quote/Image Break Section**: Single strategic visual break between Three Paths and Stages
4. 🎯 **Enhanced Stage Interactions**: Better selected state (gold ring vs. white), improved unselected opacity
5. 🎯 **Three Paths Visual Tie**: Subtle stage-colored borders connecting cards to developmental stages

**Medium-Impact Polish**:
6. ✨ **Scroll-Triggered Reveals**: Fade-ins for sections entering viewport (respects reduced-motion)
7. ✨ **Welcome Texture Overlay**: Subtle parchment grain for organic feel
8. ✨ **Footer Utility Links**: Privacy/Contact row above scripture carousel

**Future Enhancement**:
9. 🔮 **Liturgical Seasonality**: Tridentine calendar theming (requires proper research, Phase 2)

---

## V2 Critiques & V3 Corrections

### Issue 1: Navigation Redundancy Contradiction

**V2 Claim**: "Make nav sticky to reduce Three Paths redundancy"

**V3 Assessment**:
- ❌ Navigation is **absolute positioned**, not sticky currently
- ❌ Three Paths cards provide **substantive value** beyond navigation:
  - Full philosophical descriptions (160+ chars each)
  - Scripture waypoints anchoring each path
  - Visual hierarchy with hover states
  - Stage-specific content alignment
- ❌ Sticky nav would **cover hero content** and break full-screen aesthetic

**V3 Verdict**:
- ✅ **KEEP** Three Paths section as-is (essential mission statement in card form)
- ✅ **REJECT** sticky navigation proposal
- ✅ **ADD** subtle stage-colored left borders to Three Paths cards for visual tie-in

---

### Issue 2: Hero Height Contradiction

**V2 Proposal**: "Keep full hero (modern UI consistency)" BUT ALSO "Reduce to 85vh for content peek"

**V3 Clarification**:
- Desktop: `min-h-screen` (100vh) maintains dramatic impact
- Mobile/Tablet: `min-h-[85vh]` provides content peek on smaller screens
- Scroll indicator (at 90vh) provides visual cue without reducing height
- Implementation: Responsive Tailwind classes `min-h-[85vh] lg:min-h-screen`

**V3 Verdict**:
- ✅ Best of both worlds via responsive design
- ❌ No need to choose between full hero and peek

---

### Issue 3: Parallax vs. Vertical Pan

**V2 Proposal**: "Test parallax as alternative/enhancement to pan. If it fits better, swap; else revert."

**V3 Assessment**:
- Current vertical pan animation **already provides motion**
- Parallax risks:
  - Motion sickness for some users
  - Performance concerns (additional paint layers)
  - Redundant with existing pan effect
- No clear user benefit over existing solution

**V3 Verdict**:
- ❌ **REJECT** parallax testing (unnecessary complexity)
- ✅ **KEEP** existing vertical pan animation (already philosophically aligned)

---

### Issue 4: Gamification Misalignment

**V2 Proposal**: 
- Progress tracker: "Explore the Journey: 2/4 Stages Discovered"
- Unlockable insights after viewing all stages
- Achievement-oriented mechanics

**Philosophical Problem**: Contradicts Senior's "Against Method" (Ch. VII):
- Gamification implies **rigid completion tracking**
- "Achievement unlocked" mentality vs. **contemplative exploration**
- Points/progress systems vs. **wonder-based discovery**

**V3 Verdict**:
- ❌ **REJECT** all gamification (progress bars, unlock mechanics, counters)
- ✅ **KEEP** enhanced interactivity (hover scale, gold glow, smooth transitions)
- ✅ **ADD** organic discovery reward: After naturally viewing all 4 stages, show single bonus quote/image (no fanfare, quiet contemplation)

---

### Issue 5: Visual Breaks Under-Specification

**V2 Proposal**: "Rotating quote/image bands", "margin images", "quote-less visuals"

**Implementation Gap**: No clear specification of WHERE or HOW MANY

**V3 Specification**:
- ✅ **ONE** full-width quote/image band between Three Paths and Welcome sections
- 50vh desktop, 40vh mobile
- Random landscape + quote from "Mission and Adventure" axiom section
- Rotates on page load only (no scroll triggers for simplicity)
- ❌ **REJECT** margin images (clutters clean typography)
- ❌ **REJECT** multiple breaks (one strategic break is sufficient)

---

### Issue 6: Seasonal Implementation Timing

**V2 Proposal**: "High Priority: Seasonal color/date logic"

**V3 Reassessment**:
- Liturgical calendar is **complex** (Tridentine rubrics for movable feasts)
- Requires research: Advent dates, Lenten seasons, Ordinary Time calculations
- Better as **Phase 2** after core enhancements proven

**V3 Verdict**:
- ✅ **Move to Future/Phase 2** (proper research required)
- ✅ Start with **November Requiem proof-of-concept** when time permits
- ✅ Ship core improvements first, layer seasonal theming later

---

## Implementation Roadmap

### Phase 1: Core Enhancements (High Priority - 2 Days)

**Effort**: Medium  
**Impact**: High  
**Risk**: Low

**Deliverables**:
1. Hero scroll indicator component (3s delay, fade on scroll)
2. Click-to-refresh button for hero quote/image
3. Quote/image break section (Mission & Adventure quotes)
4. Enhanced stage badge interactions (gold ring, better opacity)
5. Three Paths subtle stage-colored borders

**Success Criteria**:
- ✅ Scroll indicator animates smoothly, respects reduced-motion
- ✅ Quote refresh changes both text AND image in hero
- ✅ New section integrates seamlessly with existing design
- ✅ Stage interactions feel polished, gold ring visible on selection
- ✅ Three Paths borders subtle but meaningful

---

### Phase 2: Polish & Animation (Medium Priority - 2 Days)

**Effort**: Medium  
**Impact**: Medium  
**Risk**: Low

**Deliverables**:
1. Scroll-triggered fade-ins for all sections (IntersectionObserver)
2. Subtle parchment texture on Welcome section
3. Footer utility links (Privacy, Contact)
4. Stage content panel slide-up animation

**Success Criteria**:
- ✅ Fade-ins trigger at proper viewport intersection (threshold: 0.2)
- ✅ Texture barely visible (opacity: 0.03), enhances without distracting
- ✅ Footer links accessible, properly styled
- ✅ Stage transitions smooth (300ms ease-out)

---

### Phase 3: Liturgical Seasonality (Future - Deferred)

**Effort**: High  
**Impact**: High (when done right)  
**Risk**: Medium (requires research)

**Research Required**:
- Tridentine calendar rubrics and date calculations
- Color palette adjustments per season
- Quote selection criteria (e.g., Requiem themes for November)
- Image selection guidelines (e.g., somber landscapes for penitential seasons)

**Proof-of-Concept**:
- Start with **November Requiem** (current month)
- Muted color palette (grays, dimmed gold)
- "Memento Mori" quotes from axioms
- Autumn landscape images (fading leaves, somber forests)

**Full Implementation** (Future Phase):
- Date detection utility (`lib/utils/liturgical.ts`)
- Theme JSON with seasonal variations
- Body class application (`data-season="advent"`)
- CSS custom property overrides per season

---

## Phase 1: Core Enhancements

### 1.1 Hero Scroll Indicator

**Component**: `components/ScrollIndicator.tsx` (New)

**Features**:
- Absolute positioned at bottom-8 of hero
- Chevron down icon + "Discover More" text
- Fade-in after 3s delay
- Fade-out when user scrolls past 80vh
- Gentle bounce animation (4px translateY range)
- Respects `prefers-reduced-motion` (no animation, always visible)

**Implementation**:

```typescript
'use client';
import { useEffect, useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

export default function ScrollIndicator() {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3000);
    
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.8) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div 
      className={`
        absolute bottom-8 left-1/2 -translate-x-1/2 z-20
        transition-opacity duration-500
        ${visible ? 'opacity-100' : 'opacity-0'}
      `}
      aria-hidden={!visible}
    >
      <div className="flex flex-col items-center text-parchment/90 animate-bounce">
        <span className="text-sm font-lato mb-2">Discover More</span>
        <ChevronDownIcon className="w-6 h-6" />
      </div>
    </div>
  );
}
```

**Usage in page.tsx**:
```typescript
<section className="relative min-h-[85vh] lg:min-h-screen ...">
  {/* Existing hero content */}
  <ScrollIndicator />
</section>
```

**CSS Addition** (globals.css):
```css
/* Respect reduced motion for scroll indicator */
@media (prefers-reduced-motion: reduce) {
  .animate-bounce {
    animation: none;
  }
}
```

---

### 1.2 Hero Click-to-Refresh

**Component**: `components/RotatingQuotes.tsx` (Enhancement)

**New Features**:
- Manual refresh button below quote
- Circular gold icon (refresh arrow)
- Tooltip: "New Inspiration" on hover
- Click triggers new random quote + signals parent to change image

**Implementation**:

```typescript
// Add new props
interface RotatingQuotesProps {
  quotes: Quote[];
  intervalMs?: number;
  autoplay?: boolean;
  className?: string;
  quoteClassName?: string;
  authorClassName?: string;
  showRefreshButton?: boolean; // NEW
  onRefresh?: () => void; // NEW - signals parent to change image
}

export default function RotatingQuotes({
  quotes,
  intervalMs = 6000,
  autoplay = true,
  className = '',
  quoteClassName = '...',
  authorClassName = '...',
  showRefreshButton = false, // NEW
  onRefresh, // NEW
}: Readonly<RotatingQuotesProps>) {
  const safeQuotes = useMemo(() => (quotes?.length ? quotes : []), [quotes]);
  const [index, setIndex] = useState(0);

  // Existing auto-rotation logic...

  const handleManualRefresh = () => {
    setIndex((i) => (i + 1) % safeQuotes.length);
    onRefresh?.(); // Signal parent to change image
  };

  return (
    <div className={`transition-opacity duration-700 ${className}`}>
      <blockquote className="mb-12">
        <p className={quoteClassName}>&quot;{current.quote}&quot;</p>
        <cite className={authorClassName}>— {current.author}</cite>
      </blockquote>
      
      {/* NEW: Refresh button */}
      {showRefreshButton && (
        <button
          onClick={handleManualRefresh}
          className="mt-4 group flex items-center gap-2 mx-auto text-gold/80 hover:text-gold transition-colors focus-visible-ring rounded-full p-2"
          aria-label="New Inspiration"
          title="New Inspiration"
        >
          <svg 
            className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </button>
      )}
    </div>
  );
}
```

**Usage in page.tsx**:
```typescript
'use client';
import { useState } from 'react';

export default function HomePage() {
  const [heroImageIndex, setHeroImageIndex] = useState(0);
  const heroAssets = [
    getRandomAssetFromFolder('landscapes'),
    // ... more landscape assets pre-loaded
  ];
  
  const handleHeroRefresh = () => {
    setHeroImageIndex((i) => (i + 1) % heroAssets.length);
  };
  
  return (
    <section className="relative min-h-[85vh] lg:min-h-screen ...">
      <OptimizedImage asset={heroAssets[heroImageIndex]} ... />
      
      <div className="relative z-10 ...">
        <RotatingQuotes 
          quotes={heroQuotesDisplayed}
          autoplay={false}
          showRefreshButton={true}
          onRefresh={handleHeroRefresh}
        />
      </div>
      
      <ScrollIndicator />
    </section>
  );
}
```

---

### 1.3 Quote/Image Break Section

**Location**: Between Three Paths and Stages sections

**Purpose**: Visual break + thematic emphasis on gymnasium/adventure

**Quotes Source**: PHILOSOPHICAL-AXIOMS.md → "Mission and Adventure" section

**Implementation**:

```typescript
// In page.tsx, add new section:

import { getAxiomsQuotesBySection } from '@/lib/content/axioms';

export default async function HomePage() {
  // ... existing code ...
  
  const missionQuotes = await getAxiomsQuotesBySection('Quote Bank: Mission and Adventure');
  
  return (
    <>
      {/* ... existing hero, welcome, three paths ... */}
      
      {/* NEW: Mission & Adventure Visual Break */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        {/* Random adventure/landscape image */}
        <div className="absolute inset-0 z-0">
          <OptimizedImage
            asset={getRandomAssetFromFolder('adventure')}
            alt="Chivalric wayfarer adventure"
            fill={true}
            objectFit="cover"
            sizes="100vw"
            className="w-full h-full"
          />
        </div>
        
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 z-[1] bg-charcoal/50"></div>
        
        {/* Quote overlay */}
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          {missionQuotes.length > 0 && (
            <RotatingQuotes 
              quotes={missionQuotes}
              autoplay={false} // Random pick on load only
              quoteClassName="text-2xl md:text-4xl font-playfair italic text-white leading-relaxed drop-shadow-2xl"
              authorClassName="text-lg md:text-xl text-parchment/90 font-lato mt-4"
            />
          )}
        </div>
      </section>
      
      {/* ... existing stages section ... */}
    </>
  );
}
```

**Curated Quotes** (from axioms):
- "Boys burn with gem-like flames" — John Senior
- "Stripped or lightly clad boys exercise, sharpening their five senses in immediate contact with nature in the raw" — Senior
- "Blessed are the legend-makers with their rhyme of things not found within recorded time" — Tolkien
- "And I thought, 'I will go with you, As man with God has gone, And wander with a wandering star...'" — Chesterton

---

### 1.4 Enhanced Stage Badge Interactions

**Component**: `components/InteractiveStages.tsx` (Enhancement)

**Changes**:

```typescript
// Updated button styling for badges
<button
  onClick={() => setSelectedStage('nursery')}
  className="
    focus:outline-none 
    focus:ring-4 focus:ring-offset-2 focus:ring-nursery 
    transition-all duration-300 
    hover:scale-105
  "
>
  <StageBadge
    stage="nursery"
    size="lg"
    whiteText
    className={
      selectedStage === 'nursery' 
        ? 'ring-4 ring-gold/70 shadow-2xl scale-105' // ENHANCED: gold ring instead of white
        : 'opacity-60 hover:opacity-85' // ENHANCED: better opacity range
    }
  />
</button>
```

**Content Panel Slide Animation**:

```typescript
// Add Framer Motion or CSS transition
import { motion } from 'framer-motion';

<motion.div
  key={selectedStage}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3, ease: 'easeOut' }}
  className={`${currentStage.bgColor} border-2 ${currentStage.borderColor} ...`}
>
  {/* content */}
</motion.div>
```

**Alternative (CSS-only, no Framer Motion)**:

```css
/* globals.css */
@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.stage-content-enter {
  animation: slideInUp 0.3s ease-out;
}
```

```typescript
// In component
<div 
  key={selectedStage}
  className={`stage-content-enter ${currentStage.bgColor} ...`}
>
```

---

### 1.5 Three Paths Stage-Colored Borders

**Component**: `app/(site)/page.tsx` (Enhancement)

**Changes**:

```typescript
{/* Senior Schools - Gymnasium border */}
<Link href="/schools" className="group block">
  <div className="
    text-center space-y-6 p-8 
    hover:bg-parchment/30 
    transition-all duration-300 
    rounded-lg
    border-l-4 border-gymnasium  {/* NEW */}
  ">
    {/* ... existing content ... */}
  </div>
</Link>

{/* Philosophy & Resources - Poetic border */}
<Link href="/philosophy" className="group block">
  <div className="
    ... 
    border-l-4 border-poetic  {/* NEW */}
  ">
    {/* ... existing content ... */}
  </div>
</Link>

{/* Engage & Connect - Spiritual border */}
<Link href="/engage" className="group block">
  <div className="
    ... 
    border-l-4 border-spiritual  {/* NEW */}
  ">
    {/* ... existing content ... */}
  </div>
</Link>
```

**Reasoning**: Subtle visual tie connecting each path to its corresponding developmental stage, without being heavy-handed.

---

## Phase 2: Polish & Animation

### 2.1 Scroll-Triggered Fade-Ins

**Component**: `components/FadeIn.tsx` (New)

**Implementation**:

```typescript
'use client';
import { useEffect, useRef, useState } from 'react';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number; // milliseconds
  threshold?: number; // 0-1, how much visible before trigger
  className?: string;
}

export default function FadeIn({ 
  children, 
  delay = 0, 
  threshold = 0.2,
  className = '' 
}: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay, threshold]);

  return (
    <div
      ref={ref}
      className={`
        transition-all duration-700
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
```

**Usage Examples**:

```typescript
// Welcome section - stagger paragraphs
<section className="py-20 bg-parchment">
  <ContentContainer width="narrow">
    <FadeIn delay={0}>
      <p className="text-xl ...">
        The educational vision of Dr. John Senior begins with wonder...
      </p>
    </FadeIn>
  </ContentContainer>
</section>

// Three Paths - stagger cards
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
  <FadeIn delay={0}>
    <Link href="/schools">...</Link>
  </FadeIn>
  
  <FadeIn delay={150}>
    <Link href="/philosophy">...</Link>
  </FadeIn>
  
  <FadeIn delay={300}>
    <Link href="/engage">...</Link>
  </FadeIn>
</div>

// Stages section
<FadeIn threshold={0.3}>
  <h2>Stages of Development</h2>
  <p>Each stage builds upon wonder...</p>
</FadeIn>
```

---

### 2.2 Welcome Section Parchment Texture

**Implementation** (CSS-only):

```css
/* globals.css */
.parchment-texture {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4'%3E%3Cpath d='M0 0h1v1H0zm2 2h1v1H2z' fill='%23000' opacity='0.03'/%3E%3C/svg%3E");
}

/* Mobile: reduce opacity for performance */
@media (max-width: 768px) {
  .parchment-texture {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4'%3E%3Cpath d='M0 0h1v1H0zm2 2h1v1H2z' fill='%23000' opacity='0.02'/%3E%3C/svg%3E");
  }
}
```

**Usage in page.tsx**:

```typescript
<section className="py-20 bg-parchment parchment-texture">
  <ContentContainer width="narrow">
    {/* Welcome content */}
  </ContentContainer>
</section>
```

**Alternative** (Tailwind gradient):

```typescript
<section className="py-20 bg-gradient-to-br from-parchment via-parchment to-parchment-dark">
```

---

### 2.3 Footer Utility Links

**Component**: `components/Footer.tsx` (Enhancement)

**Changes**:

```typescript
export default function Footer() {
  return (
    <footer className="bg-forest text-parchment mt-auto border-t-4 border-gold" role="contentinfo">
      <div className="section-container py-12">
        {/* NEW: Utility links row */}
        <div className="flex justify-center gap-8 mb-8 text-sm border-b border-parchment/20 pb-8">
          <Link 
            href="/privacy" 
            className="text-parchment/70 hover:text-gold transition-colors focus-visible-ring"
          >
            Privacy
          </Link>
          <Link 
            href="/contact" 
            className="text-parchment/70 hover:text-gold transition-colors focus-visible-ring"
          >
            Contact
          </Link>
          {/* No social media links per philosophy */}
        </div>
        
        {/* Existing scripture carousel */}
        <Suspense fallback={...}>
          <FooterContent />
        </Suspense>
      </div>
    </footer>
  );
}
```

---

### 2.4 Stage Content Panel Animation

**See Section 1.4** for Framer Motion or CSS-only implementation.

---

## Phase 3: Liturgical Seasonality (Future)

### Research Requirements

**Tridentine Calendar Rubrics**:
- Advent: 4 Sundays before Christmas (varies by year)
- Christmastide: Dec 25 - Epiphany (Jan 6)
- Septuagesima: ~3 weeks before Lent
- Lent: Ash Wednesday to Holy Saturday (movable, tied to Easter)
- Eastertide: Easter Sunday to Pentecost (50 days)
- Ordinary Time: All other periods
- Special Seasons: November (Requiem/All Souls), Ember Days

**Implementation Strategy**:
1. Create `lib/utils/liturgical.ts` with date calculation functions
2. Store seasonal themes in JSON config
3. Apply via body `data-season` attribute
4. CSS custom properties for color overrides

### November Requiem Proof-of-Concept

**Theme**:
- Colors: Muted charcoal backgrounds, dimmed gold (#B89A5A), subtle grays
- Quotes: Memento mori, "eternal rest", contemplative themes
- Images: Autumn landscapes, fading light, somber forests (NO skull/rose motifs - too heavy)

**Quote Examples** (from axioms):
- "Come to me, all you that labour and are burdened; I will give you rest." — Matthew 11:28
- "The soul, freed from the body, returns to the pureness of its simplicity." — Hugh of St. Victor
- "Unless you become like little children again, you shall not enter the kingdom of heaven." — Matthew 18:3

**Implementation Sketch**:

```typescript
// lib/utils/liturgical.ts
export type LiturgicalSeason = 'requiem' | 'advent' | 'christmas' | 'ordinary' | 'lent' | 'easter';

export function getCurrentLiturgicalSeason(): LiturgicalSeason {
  const now = new Date();
  const month = now.getMonth(); // 0-indexed
  
  // November = Requiem
  if (month === 10) return 'requiem';
  
  // Add other seasons with proper calculations
  // TODO: Research movable feast calculations
  
  return 'ordinary';
}

// lib/liturgical-themes.json
{
  "requiem": {
    "colors": {
      "gold": "#B89A5A",
      "background": "from-charcoal/10 to-charcoal/5"
    },
    "quotes": [
      "matthew-11-28",
      "hugh-soul-simplicity"
    ],
    "images": ["autumn-forest", "fading-light"]
  }
}
```

```typescript
// app/layout.tsx
const season = getCurrentLiturgicalSeason();

<body data-season={season}>
  {children}
</body>
```

```css
/* globals.css */
[data-season="requiem"] {
  --color-gold: #B89A5A;
  --bg-gradient: linear-gradient(to bottom, rgba(74,74,74,0.1), rgba(74,74,74,0.05));
}

[data-season="advent"] {
  --color-primary: #7B2D8E; /* Purple */
}
```

---

## Rejected V2 Proposals

### ❌ Sticky Navigation
**Reason**: Breaks full-screen hero aesthetic, covers content, not necessary

### ❌ Parallax Background
**Reason**: Redundant with vertical pan, performance concern, motion-sickness risk

### ❌ Gamification (Progress Bars, Unlocks)
**Reason**: Contradicts "Against Method" axiom, achievement-oriented vs. contemplative

### ❌ Multiple Quote/Image Bands
**Reason**: One strategic break is sufficient; more clutters clean typography

### ❌ Margin Images
**Reason**: Clutters clean typography-first design

### ❌ Touch-Swipe Hero Refresh
**Reason**: Gesture conflicts with scrolling; button provides clearer UX

### ❌ A/B Testing Parallax
**Reason**: Existing vertical pan works well; no clear user benefit to test alternative

---

## Testing & Validation

### Phase 1 Testing Checklist

**Hero Enhancements**:
- [ ] Scroll indicator appears after 3s
- [ ] Scroll indicator fades when scrolling past 80vh
- [ ] Bounce animation respects `prefers-reduced-motion`
- [ ] Click-to-refresh changes BOTH quote AND image
- [ ] Refresh button has visible focus state
- [ ] Mobile: Hero is 85vh, desktop is 100vh

**Quote/Image Break**:
- [ ] Section renders between Three Paths and Stages
- [ ] Image loads from `adventure` or `landscapes` folder
- [ ] Quote pulls from Mission & Adventure axiom section
- [ ] Overlay provides sufficient contrast for readability
- [ ] Mobile: 40vh height, desktop: 50vh

**Stage Interactions**:
- [ ] Selected badge has gold ring (4px, 70% opacity)
- [ ] Unselected badges at 60% opacity
- [ ] Hover transitions smooth (300ms)
- [ ] Content panel animates on stage change
- [ ] Keyboard navigation works (Tab, Enter/Space)

**Three Paths Borders**:
- [ ] Schools card has gymnasium-colored left border
- [ ] Philosophy card has poetic-colored left border
- [ ] Engage card has spiritual-colored left border
- [ ] Borders 4px width, subtle but visible

### Phase 2 Testing Checklist

**Scroll-Triggered Animations**:
- [ ] Sections fade in when entering viewport
- [ ] Threshold triggers at 20% visibility
- [ ] Delays stagger properly (0ms, 150ms, 300ms)
- [ ] `prefers-reduced-motion` users see instant visibility
- [ ] No layout shifts during fade-in

**Texture & Polish**:
- [ ] Parchment texture barely visible (opacity 0.03)
- [ ] Mobile texture reduced for performance
- [ ] Footer links accessible, proper focus states
- [ ] All animations respect reduced-motion

### Accessibility Validation

- [ ] Lighthouse Accessibility: 95+ score
- [ ] axe DevTools: Zero critical violations
- [ ] Keyboard navigation: All new features accessible
- [ ] Screen reader: ARIA labels correct, announcements clear
- [ ] Color contrast: All text meets WCAG AA (4.5:1+)
- [ ] Touch targets: Minimum 44x44px

### Performance Validation

- [ ] Lighthouse Performance: 90+ score
- [ ] First Contentful Paint (FCP): <1.8s
- [ ] Largest Contentful Paint (LCP): <2.5s
- [ ] Cumulative Layout Shift (CLS): <0.1
- [ ] Total Blocking Time (TBT): <200ms
- [ ] New assets optimized (WebP, lazy loading)

---

## Component Specifications

### ScrollIndicator.tsx
- **File**: `components/ScrollIndicator.tsx`
- **Dependencies**: `@heroicons/react/24/outline`
- **Size**: ~50 lines
- **Exports**: `ScrollIndicator` (default)

### RotatingQuotes.tsx (Enhanced)
- **File**: `components/RotatingQuotes.tsx`
- **New Props**: `showRefreshButton`, `onRefresh`
- **Changes**: ~30 lines added
- **Exports**: `RotatingQuotes` (default)

### FadeIn.tsx
- **File**: `components/FadeIn.tsx`
- **Dependencies**: React hooks only
- **Size**: ~60 lines
- **Exports**: `FadeIn` (default)

### InteractiveStages.tsx (Enhanced)
- **File**: `components/InteractiveStages.tsx`
- **Option 1**: Add Framer Motion dependency
- **Option 2**: CSS-only animation (preferred for simplicity)
- **Changes**: ~20 lines modified

---

## Priority Matrix

| Enhancement | Priority | Effort | Impact | Phil. Fit | Status |
|-------------|----------|--------|--------|-----------|--------|
| Hero scroll indicator | High | Low | Medium | ✅ Perfect | Ready |
| Click-to-refresh hero | High | Medium | High | ✅ Perfect | Ready |
| Quote/image break | High | Medium | High | ✅ Perfect | Ready |
| Stage badge polish | High | Low | Medium | ✅ Perfect | Ready |
| Three Paths borders | High | Low | Low | ✅ Subtle | Ready |
| Scroll-triggered fades | Medium | Medium | Medium | ✅ Good | Ready |
| Welcome texture | Medium | Low | Low | ✅ Subtle | Ready |
| Footer utility links | Medium | Low | Low | ⚪ Neutral | Ready |
| November Requiem | Low | High | Medium | ✅ Perfect | Research |
| Full liturgical calendar | Deferred | Very High | High | ✅ Perfect | Future |

---

## Why V3 > V2

**V2 Weaknesses**:
- Contradictory proposals (sticky nav vs. keep Three Paths)
- Vague specifications (how many visual breaks?)
- Some ideas contradict philosophy (gamification)
- Unclear prioritization (seasonal as high priority despite complexity)

**V3 Strengths**:
- ✅ Resolves all contradictions with clear decisions
- ✅ Specifies exact implementation details
- ✅ Rejects anti-philosophical proposals
- ✅ Realistic prioritization (research-heavy items deferred)
- ✅ Implementation-ready code patterns
- ✅ Preserves existing strengths, amplifies strategically

**Key Insight**: The site already embodies poetic knowledge beautifully. V3 enhancements **amplify existing strengths** through simplicity, not feature bloat. Less is more—wonder through organic polish, not rigid systems.

---

## Next Steps

1. ✅ **Review & Approve V3**: Confirm all changes align with vision
2. 🛠️ **Implement Phase 1**: Core enhancements (2 days)
3. ✅ **Test Phase 1**: Validate accessibility, performance, UX
4. 🛠️ **Implement Phase 2**: Polish & animation (2 days)
5. ✅ **Test Phase 2**: Final validation before deployment
6. 📅 **Plan Phase 3**: Research liturgical calendar, schedule future work

**Timeline**: 5 days total (2 + 2 + 1 testing/buffer)

**Deployment**: Incremental via Vercel previews, merge to main when validated

---

**Document Status**: Approved for Implementation  
**Owner**: Development Team  
**Created**: November 5, 2025  
**Last Updated**: November 5, 2025  
**Version**: 3.0 (Final)

---

*This document will be deleted after successful implementation of all approved changes.*
