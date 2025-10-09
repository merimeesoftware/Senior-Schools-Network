# Design System Reference - Senior Schools Network

## Overview

This document consolidates the complete design system for the Senior Schools Network platform, encompassing visual philosophy, information architecture, user flows, component specifications, and asset requirements. It serves as the single source of truth for all design decisions, deriving from the north star (README.md) and technical architecture (technical.md).

The design embodies John Senior's "hortus conclusus" (enclosed garden)—a serene, organic sanctuary where poetic knowledge blooms through classical Catholic aesthetics, sensory delight, and narrative immersion.

**Last Updated**: October 7, 2025  
**Status**: Phase 2 Complete, Phase 3 Asset Integration In Progress

---

## Part 1: Visual Philosophy & Design Language

### 1.1 Core Visual Principles

**Theme**: "Enclosed Garden of Wonder" – A serene, organic sanctuary evoking timeless Catholic humanism.

**Tone**: Formal yet warm; contemplative and inviting. Classical humanism with romantic touches (Tolkien's "myth-woven and elf-patterned").

**Key Design Principles**:
- **Organic Flexibility**: Gentle asymmetry in layouts reflecting non-prescriptive education
- **Wonder and Repose**: Depth through subtle shadows, generous whitespace for reflection
- **Catholic Fidelity**: Sacred elements (cross motifs in borders) without overt proselytizing
- **Accessibility**: High contrast ratios (4.5:1+), semantic HTML, ARIA labels
- **Narrative Flow**: Layouts guide users through StoryBrand hero journey

**Visual Inspirations**:
- Illuminated manuscripts (Book of Kells) for intricate borders
- Beatrix Potter illustrations for nursery whimsy
- Howard Pyle adventure art for gymnasium vigor
- Claude Lorrain classical landscapes for serene nature
- Pre-Raphaelite paintings for spiritual depth

---

### 1.2 Color Palette

#### Primary Colors

**Parchment** (Background/Base)
- Base: `#F5F1E9` - Aged paper, promotes repose and readability
- Light: `#FDFDFD` - Off-white for cards/sections
- Dark: `#E8E2D5` - Darker variant for subtle backgrounds

**Forest** (Nature/Growth)
- Base: `#3B5A3E` - Deep forest green for headers, buttons, borders
- Dark: `#2A4129` - Darker variant for hover states
- Light: `#4A6B4D` - Lighter variant for backgrounds

**Gold** (Spiritual/Illumination)
- Base: `#CDAF6F` - Warm gold for icons, links, quotes
- Light: `#E5D4A6` - Lighter variant for highlights
- Dark: `#B89A5A` - Darker variant for accents

**Charcoal** (Text)
- `#4A4A4A` - High contrast on parchment background

#### Stage-Specific Colors

**Nursery** (Ages 0-6: Sensory Delight)
- Base: `#A8C4D4` - Soft pastel blue (calming, fable-like)
- Light: `#C5DDE8`
- Dark: `#8BAEC0`

**Gymnasium** (Ages 7-13: Adventure)
- Base: `#7A5C3E` - Rich earth brown (grounded, trails and stories)
- Light: `#9A7D5E`
- Dark: `#5A3F2A`

**Poetic** (Ages 14-18: Imagination)
- Base: `#8B4C4C` - Muted crimson (passionate yet restrained)
- Light: `#A86B6B`
- Dark: `#6A3535`

**Spiritual** (Ages 18+: Contemplation)
- Base: `#B8A8C4` - Gentle lavender (eternal repose)
- Light: `#D1C5DB`
- Dark: `#9B8AAA`

**Color Usage Guidelines**:
- Muted saturation (40-60%) to avoid overstimulation
- Colorful accents sparingly for CTAs
- Minimum 4.5:1 contrast ratio for WCAG AA compliance
- No glassy effects; prefer matte, textured feels
- Subtle paper grain via CSS overlays

---

### 1.3 Typography

#### Font Families

**Playfair Display** (Serif - Headings/Quotes)
- Source: Google Fonts
- Purpose: Classical elegance with slight flourish
- Usage: H1-H3, philosophical quotes, hero sections
- Weights: 400 (Regular), 700 (Bold), 400 Italic

**Merriweather** (Serif - Body)
- Source: Google Fonts
- Purpose: Clean, legible for long-form content
- Usage: Articles, excerpts, resources, book lists
- Weights: 300 (Light), 400 (Regular), 700 (Bold)

**Lato** (Sans-Serif - UI)
- Source: Google Fonts
- Purpose: Modern accessibility for interface elements
- Usage: Buttons, navigation, metadata, badges
- Weights: 400 (Regular), 700 (Bold)

#### Typography Scale

| Token | Size | Line Height | Usage |
|-------|------|-------------|-------|
| `text-hero` | 3rem (48px) | 1.2 | Hero sections, landing quotes |
| `text-display` | 2.5rem (40px) | 1.2 | Page titles, major headings |
| `text-heading-1` | 2rem (32px) | 1.3 | H1 headings |
| `text-heading-2` | 1.5rem (24px) | 1.4 | H2 headings, section titles |
| `text-heading-3` | 1.25rem (20px) | 1.4 | H3 headings, card titles |
| `text-body-lg` | 1.125rem (18px) | 1.6 | Lead paragraphs, introductions |
| `text-body` | 1rem (16px) | 1.6 | Standard body text |
| `text-body-sm` | 0.875rem (14px) | 1.5 | Metadata, captions, footnotes |

#### Typography Guidelines

- **Hierarchy**: Bold for key concepts (e.g., "Poetic Knowledge")
- **Emphasis**: Italics for quotes and scriptural references
- **Drop Caps**: For narrative sections mimicking manuscripts
- **Uppercase**: Sparingly for section titles only
- **Kerning**: Loose spacing for organic, breathing feel
- **Responsive Scaling**: Headings scale down 20-30% on mobile

---

### 1.4 Spacing & Layout

#### Spacing System

| Token | Value | Usage |
|-------|-------|-------|
| `py-section` | 5rem (80px) | Large section vertical padding |
| `py-section-sm` | 3rem (48px) | Compact section vertical padding |
| `gap-content` | 2rem (32px) | Content block gaps |
| `gap-card` | 1.5rem (24px) | Card grid gaps |

#### Layout Widths

| Token | Max Width | Usage |
|-------|-----------|-------|
| `narrow` | 65ch (~520px) | Long-form reading, optimal line length |
| `normal` | 75ch (~600px) | Standard content width |
| `wide` | 80rem (1280px) | Hero sections, image galleries |
| `full` | 100% | Full-width sections, backgrounds |

#### Layout Principles

- **Flexible Grids**: 12-column responsive with generous whitespace
- **Asymmetry**: Offset images/quotes for narrative flow
- **Vertical Rhythm**: Consistent spacing multiples of 8px
- **Mobile-First**: Stack elements vertically, enlarge touch targets (44x44px min)
- **Breathing Room**: Avoid crowding; embrace repose through space

---

### 1.5 Visual Elements

#### Border Radius (Organic)

| Token | Value | Usage |
|-------|-------|-------|
| `rounded-organic` | 8px | Standard cards, buttons |
| `rounded-organic-lg` | 12px | Elevated cards, images |
| `rounded-organic-xl` | 16px | Hero cards, modals |

Evokes worn book edges and natural forms—no sharp corners.

#### Box Shadows (Organic)

| Token | Value | Usage |
|-------|-------|-------|
| `shadow-organic` | `0 2px 4px rgba(0,0,0,0.1)` | Subtle card depth |
| `shadow-organic-md` | `0 4px 12px rgba(0,0,0,0.15)` | Medium elevation, hover states |
| `shadow-organic-lg` | `0 8px 20px rgba(0,0,0,0.2)` | High elevation, modals |
| `shadow-organic-inner` | `inset 0 2px 4px rgba(0,0,0,0.05)` | Recessed elements |

All use low opacity for matte, non-glossy appearance.

#### Decorative Elements

- **Ornaments**: ✦ symbol for decorated headings (opt-in via prop)
- **Borders**: 2px solid in stage colors for left-border quote accents
- **Dividers**: Subtle horizontal rules in `gold-light`
- **Backgrounds**: Parchment texture overlay via CSS pseudo-elements

---

### 1.6 Imagery Guidelines

#### Image Themes by Section

**Home/Overview**: Serene landscapes (misty valleys, White Horse Hill), subtle vine/book overlays

**Philosophy**: Illuminated manuscripts, classical art (Raphael's "School of Athens"), medieval learning scenes

**Gymnasium**: Adventure art (boys in nature, treasure hunts, liturgical hikes), Howard Pyle style

**Nursery**: Whimsical animals, Beatrix Potter style, fairy tale illustrations

**Poetic**: Classical busts, stack of books, Renaissance scholar imagery

**Spiritual**: Liturgical icons, candlelit chapels, faint cross in foliage

#### Image Style Requirements

- **Aesthetic**: Painterly (oil/ink effects), muted tones matching palette
- **Sources**: Public domain classics (Wikimedia, Met Museum) + AI-generated (Midjourney/DALL-E)
- **Processing**: Consistent color grading (forest greens, gymnasium browns, parchment neutrals)
- **Alt Text**: Descriptive, derived from context (e.g., "Illustration of poetic knowledge from Hugh of St. Victor")
- **Formats**: WebP primary, JPEG fallback, SVG for logos/icons
- **Optimization**: Lazy loading via next/image, responsive srcset

#### Image Sizing

- **Thumbnails**: 300x200px (cards, book covers)
- **Hero Images**: 3200px wide (full-width sections)
- **Profile Photos**: 800x800px (square)
- **Logos**: SVG vector + PNG exports (512x512px max)

---

## Part 2: Information Architecture & User Flows

### 2.1 Site Structure

```
Home (/)
├── About John Senior & IHP
│
├── Philosophy & Resources (/philosophy)
│   ├── Poetic Knowledge
│   ├── Physical Discipline & Adventure (Gymnasium Emphasis)
│   ├── Poetic Foundations for Scientific Pursuit
│   ├── Stages of Development
│   ├── Excerpts (Markdown-driven)
│   ├── Scripture Ties
│   └── Media Embeds (videos/podcasts)
│
├── Schools Network (/schools)
│   └── Directory (filter by stage focus: gymnasium, high school boarding)
│
├── Resources for Home Application (/home-application)
│   ├── Gymnasium Guide (downloadable PDF)
│   └── Book Lists by Stage
│
├── Join the Network / Found a School (/join-found)
│   ├── Application/Encouragement
│   ├── Founding Toolkit
│   └── "Restore Gymnasium for Chivalric Wayfarers" emphasis
│
└── Contact (/contact)
```

---

### 2.2 User Flows (StoryBrand Three-Path System)

#### Path 1: School Consideration/Affiliation (Parent of Boys)

**Hero**: Parents seeking gymnasium-stage education for sons (ages 7-13) or high school with formation emphasis

**Problem**: Gymnasium gap—lacking adventure and formation amid cultural softness

**Guide**: Senior's ideas/network as empathetic authority

**Plan**: Explore resources → View schools → Inquire about enrollment/Apply to affiliate

**Call to Action**: "Inquire About Enrollment", "Apply to Affiliate"

**Avoids Failure**: Warns of continued mechanized schooling without resilience formation

**Success**: Resilient, faith-formed sons as "Chivalric Wayfarers"

**Scripture Waypoint**: "Fathers, do not provoke your children to anger, but bring them up in the discipline and instruction of the Lord." (Ephesians 6:4)

**Flow Diagram**:
```
Home (Mythopoeia quote) → Philosophy (gymnasium emphasis) → 
Schools Directory (filter: high school boarding) → CTA: Inquire/Apply
```

---

#### Path 2: Personal/Family Application (Homeschooling Parent)

**Hero**: Homeschoolers excelling in nursery but seeking gymnasium inspiration

**Problem**: Lacking institutional gymnasium options

**Guide**: Senior's resources for home adaptation

**Plan**: Browse excerpts/book lists → Download gymnasium guide → Implement family adventures

**Call to Action**: "Download Gymnasium Guide" (non-prescriptive PDF)

**Success**: Family formation through home adventures, unpoisoning developmental soil

**Scripture Waypoint**: "Train up a child in the way he should go: and when he is old, he will not depart from it." (Proverbs 22:6)

**Flow Diagram**:
```
Home/Resources (Restoration of Innocence quote) → 
Browse excerpts (physical discipline) → Book lists (adventure) → CTA: Download Guide
```

---

#### Path 3: Founding Inspiration (Aspiring Founder)

**Hero**: Visionaries recognizing gymnasium gap, inspired to found stage-specific schools

**Problem**: Gymnasium sorely lacking amid strong nursery homeschooling and high schools

**Guide**: Senior's vision as inspiration

**Plan**: Explore encouragement → Connect via network → Access founding toolkit

**Call to Action**: "Reach Out for Guidance", "Founder's Toolkit"

**Success**: Stage-specific school founded (e.g., gymnasium for boys)

**Scripture Waypoint**: "Come unto me, all ye that labour and are heavy laden, and I will give you rest." (Matthew 11:28)

**Flow Diagram**:
```
Home (Boethius quote) → Encouragement (IHP-inspired) → 
CTA: Reach Out/Toolkit
```

---

### 2.3 Navigation Structure

#### Header Navigation

```
[Logo: Senior Schools Network]

[Desktop Menu]
- Philosophy
- Schools
- Resources
  └── For Families
  └── For Founders
- About
- Contact

[Mobile Menu: Hamburger → Dropdown]
```

#### Footer Navigation

```
[Scripture Waypoints Carousel - 3 quotes rotating]
[Social Links: If applicable]
[Copyright © 2025 Senior Schools Network]
```

---

## Part 3: Component Library

### 3.1 Layout Components

#### ContentContainer

**File**: `components/ContentContainer.tsx`

**Purpose**: Responsive width containers with consistent padding

**Props**:
- `width`: 'narrow' | 'normal' | 'wide' | 'full' (default: 'normal')
- `padding`: 'none' | 'sm' | 'md' | 'lg' (default: 'md')
- `className`: Additional Tailwind classes
- `children`: React.ReactNode

**Usage**:
```tsx
<ContentContainer width="narrow" padding="lg">
  <p>Long-form reading content...</p>
</ContentContainer>
```

**Responsive Behavior**:
- Mobile: Full width with horizontal padding
- Desktop: Centered with max-width constraints

---

### 3.2 Typography Components

#### SectionHeading

**File**: `components/SectionHeading.tsx`

**Purpose**: Semantic headings with consistent styling

**Props**:
- `level`: 1 | 2 | 3 (default: 2)
- `align`: 'left' | 'center' | 'right' (default: 'left')
- `decorated`: boolean (adds ✦ ornaments, default: false)
- `className`: Additional classes
- `children`: React.ReactNode

**Variants**:
- Level 1: h1, 2xl mobile → 4xl desktop, Playfair Display
- Level 2: h2, xl mobile → 3xl desktop
- Level 3: h3, lg mobile → 2xl desktop

**Usage**:
```tsx
<SectionHeading level={2} align="center" decorated>
  Philosophy & Resources
</SectionHeading>
```

---

#### BrandHeader

**File**: `components/BrandHeader.tsx`

**Purpose**: Site branding with logo/title

**Props**:
- `variant`: 'default' | 'compact' (default: 'default')

**Features**:
- Responsive sizing (3xl mobile → 4-5xl desktop)
- Focus-visible ring for keyboard navigation
- Playfair Display font for elegance
- Optional tagline support

**Usage**:
```tsx
<BrandHeader variant="compact" />
```

---

### 3.3 Content Components

#### QuoteCard

**File**: `components/QuoteCard.tsx`

**Purpose**: Display quotes with proper attribution

**Props**:
- `quote`: string (required)
- `author`: string (optional)
- `source`: string (optional)
- `variant`: 'default' | 'hero' | 'scripture' | 'embedded' (default: 'default')
- `className`: Additional classes

**Variants**:

**hero**: Large, centered, elevated card for page-level impact
```tsx
<QuoteCard
  quote="Wonder is the beginning of wisdom"
  author="Ancient Proverb"
  variant="hero"
/>
```

**scripture**: Spiritual color scheme with left border accent
```tsx
<QuoteCard
  quote="Train up a child in the way he should go"
  author="Proverbs 22:6"
  variant="scripture"
/>
```

**default**: Standard card layout with organic shadows

**embedded**: Minimal styling for inline prose integration

**Semantic Structure**:
```html
<blockquote>
  <p>{quote}</p>
  <footer>
    <cite>{author}, {source}</cite>
  </footer>
</blockquote>
```

---

#### StageBadge

**File**: `components/StageBadge.tsx`

**Purpose**: Visual indicators for developmental stages

**Props**:
- `stage`: 'nursery' | 'gymnasium' | 'poetic' | 'spiritual' (required)
- `size`: 'sm' | 'md' | 'lg' (default: 'md')
- `className`: Additional classes

**Features**:
- Color-coded backgrounds matching stage palette
- Displays age ranges in Lato font
- Border matching stage color for definition

**Stage Mapping**:
- Nursery: Ages 0-6, soft blue (#A8C4D4)
- Gymnasium: Ages 7-13, earth brown (#7A5C3E)
- Poetic: Ages 14-18, muted crimson (#8B4C4C)
- Spiritual: Ages 18+, gentle lavender (#B8A8C4)

**Usage**:
```tsx
<StageBadge stage="gymnasium" size="lg" />
<StageBadge stage="nursery" size="sm" />
```

---

### 3.4 Interactive Components

#### CTAButton

**File**: `components/CTAButton.tsx`

**Purpose**: Consistent call-to-action buttons

**Props**:
- `href`: string (for Link navigation, optional)
- `onClick`: () => void (for button actions, optional)
- `variant`: 'primary' | 'secondary' | 'outline' (default: 'primary')
- `size`: 'sm' | 'md' | 'lg' (default: 'md')
- `disabled`: boolean (default: false)
- `fullWidth`: boolean (default: false)
- `className`: Additional classes
- `children`: React.ReactNode

**Variants**:

**primary**: Forest background (#3B5A3E), gold text (#CDAF6F)
- Use for main actions: "Find a School", "Download Guide"

**secondary**: Gold background (#CDAF6F), charcoal text (#4A4A4A)
- Use for alternative actions: "Learn More", "Contact"

**outline**: Border-only, hover fills with forest/gold
- Use for tertiary actions: "Read Excerpts", "View Book List"

**Size Scale**:
- sm: px-4 py-2, text-sm
- md: px-6 py-3, text-base
- lg: px-8 py-4, text-lg

**Usage**:
```tsx
<CTAButton href="/schools" variant="primary" size="lg">
  Find a School
</CTAButton>

<CTAButton onClick={handleSubmit} variant="secondary" disabled={loading}>
  Submit
</CTAButton>
```

**Accessibility**:
- Focus-visible rings (4px gold/forest)
- Disabled state: reduced opacity, cursor-not-allowed
- Minimum 44x44px touch target

---

#### Accordion

**File**: `components/Accordion.tsx`

**Purpose**: Collapsible content sections with ARIA support

**Props**:
- `title`: string (required)
- `children`: React.ReactNode (required)
- `defaultOpen`: boolean (default: false)
- `className`: Additional classes

**Features**:
- Animated expand/collapse transitions
- Chevron icon rotation on state change
- ARIA attributes: aria-expanded, aria-controls, role="region"
- Keyboard navigation: Enter/Space to toggle

**Usage**:
```tsx
<Accordion title="Poetic Knowledge" defaultOpen={true}>
  <p>Content explaining poetic knowledge...</p>
</Accordion>
```

---

#### SchoolsFilter

**File**: `components/SchoolsFilter.tsx`

**Purpose**: Filter schools by stage with accessible controls

**Props**:
- `onFilterChange`: (stage: string | null) => void (required)
- `activeFilter`: string | null
- `className`: Additional classes

**Features**:
- Stage badge buttons for filtering
- "All Schools" option to clear filter
- Active state styling (ring, elevated shadow)
- ARIA labels for screen readers

**Usage**:
```tsx
<SchoolsFilter 
  onFilterChange={handleFilterChange} 
  activeFilter={currentStage} 
/>
```

---

#### ScriptureCarousel

**File**: `components/ScriptureCarousel.tsx`

**Purpose**: Display rotating Scripture waypoints

**Props**:
- `scriptures`: Array<{verse: string, reference: string}> (required)
- `autoRotate`: boolean (default: true)
- `interval`: number (ms, default: 5000)

**Features**:
- Auto-rotation with pause on hover
- Manual navigation via dots
- Fade transition between slides
- Accessible: aria-live="polite" for screen readers

**Usage**:
```tsx
<ScriptureCarousel scriptures={scriptureWaypoints} />
```

---

### 3.5 Navigation Components

#### Navigation

**File**: `components/Navigation.tsx`

**Purpose**: Main site navigation with responsive mobile menu

**Features**:
- Sticky positioning (top: 0, z-50)
- Desktop: Horizontal menu with dropdowns
- Mobile: Hamburger button → slide-out drawer
- ARIA labels: aria-label="Main navigation", aria-expanded
- Focus management: trap focus in mobile menu when open
- Keyboard navigation: Tab, Escape to close

**No props** - Configuration in component file

**Structure**:
```tsx
<nav role="navigation" aria-label="Main navigation">
  <BrandHeader variant="compact" />
  <MenuButton /> {/* Mobile only */}
  <MenuItems /> {/* Desktop visible, mobile drawer */}
</nav>
```

---

#### Footer

**File**: `components/Footer.tsx`

**Purpose**: Scripture waypoints and site information

**Features**:
- Scripture grid (1 column mobile → 3 columns desktop)
- Gold top border (4px solid)
- Semantic role="contentinfo"
- Copyright with dynamic year
- Optional social links section

**No props** - Content configured in component file

**Structure**:
```tsx
<footer role="contentinfo">
  <ScriptureCarousel scriptures={waypoints} />
  <p>&copy; {year} Senior Schools Network</p>
</footer>
```

---

### 3.6 Utility Components

#### FooterContent

**File**: `components/FooterContent.tsx`

**Purpose**: Reusable footer content wrapper

**Features**:
- Consistent footer styling
- Responsive grid for multi-column layouts
- Semantic structure with nav/section elements

---

## Part 4: Design Patterns

### 4.1 Page Hero Pattern

```tsx
<section className="bg-gradient-to-b from-parchment to-parchment-light py-section">
  <ContentContainer width="wide" padding="lg">
    <QuoteCard 
      quote="Man, sub-creator, the refracted light through whom is splintered from a single White to many hues"
      author="J.R.R. Tolkien"
      source="Mythopoeia"
      variant="hero" 
    />
    <div className="mt-8 text-center max-w-3xl mx-auto">
      <SectionHeading level={1} align="center">
        Restore Wonder Through Education
      </SectionHeading>
      <p className="text-body-lg mt-4 text-charcoal/80">
        Discover schools aligned with John Senior's philosophy of poetic knowledge.
      </p>
    </div>
  </ContentContainer>
</section>
```

---

### 4.2 Card Grid Pattern

```tsx
<section className="section-container py-section-sm bg-parchment-light">
  <ContentContainer width="normal">
    <SectionHeading level={2} align="center" decorated>
      Explore By Stage
    </SectionHeading>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
      {stages.map((stage) => (
        <Link key={stage.id} href={stage.href} className="card group">
          <StageBadge stage={stage.name} size="md" />
          <h3 className="text-heading-3 font-playfair text-forest mt-4 mb-3 group-hover:text-forest-dark transition-colors">
            {stage.title}
          </h3>
          <p className="text-body-sm text-charcoal/70">
            {stage.description}
          </p>
        </Link>
      ))}
    </div>
  </ContentContainer>
</section>
```

---

### 4.3 CTA Section Pattern

```tsx
<section className="bg-spiritual/10 py-section-sm border-t-4 border-gold">
  <ContentContainer width="narrow">
    <div className="text-center">
      <SectionHeading level={2} align="center">
        Join the Restoration
      </SectionHeading>
      <p className="text-body-lg mt-4 mb-8 text-charcoal/80">
        Affiliate your school with the network or start a gymnasium initiative.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <CTAButton href="/join-found" variant="primary" size="lg">
          Apply to Affiliate
        </CTAButton>
        <CTAButton href="/contact" variant="outline" size="lg">
          Ask a Question
        </CTAButton>
      </div>
    </div>
  </ContentContainer>
</section>
```

---

### 4.4 Accordion Content Pattern

```tsx
<ContentContainer width="normal">
  <SectionHeading level={2}>Key Concepts</SectionHeading>
  <div className="space-y-4 mt-6">
    <Accordion title="Poetic Knowledge" defaultOpen={true}>
      <div className="prose prose-lg">
        <p>Intuitive, connatural knowing through senses, emotions, and imagination...</p>
      </div>
    </Accordion>
    <Accordion title="Gymnasium Emphasis">
      <div className="prose prose-lg">
        <p>Physical discipline and adventure for ages 7-13...</p>
      </div>
    </Accordion>
  </div>
</ContentContainer>
```

---

## Part 5: Asset Requirements & Inventory

### 5.1 Asset Tracking

**Governance**:
- Maintain shared catalog mapping asset → page/section, owner, source URL, licensing
- Record alt text and caption guidance when logged
- Store master files + optimized exports (webp/jpg/png) in `public/assets/`
- Note placeholders for future swap

**File Structure**:
```
public/
├── assets/
│   ├── images/
│   │   ├── heroes/
│   │   ├── philosophy/
│   │   ├── gymnasium/
│   │   ├── stages/
│   │   └── schools/
│   ├── logos/
│   │   ├── ssn-full-color.svg
│   │   ├── ssn-reversed.svg
│   │   └── ssn-monochrome.svg
│   └── downloads/
│       ├── gymnasium-guide.pdf
│       └── founders-toolkit.pdf
└── favicon.ico
```

---

### 5.2 Required Assets by Category

#### Site-Wide Essentials

- [ ] **Logo Suite** (SVG + PNG exports)
  - Full-color lockup
  - Reversed (white on dark)
  - Monochrome
  - Simplified icon mark for favicons

- [ ] **Favicon Set**
  - 16x16, 32x32, 64x64, 128x128, 256x256, 512x512
  - apple-touch-icon.png (180x180)
  - safari-pinned-tab.svg

- [ ] **Open Graph Images**
  - Default: `og-image-enclosed-garden.jpg` (1200x630)
  - Square variants for Instagram/LinkedIn (1080x1080)

- [ ] **Background Textures**
  - Parchment/vellum grain overlay (1920x1080, seamless tile)
  - Subtle noise texture for depth

- [ ] **Decorative Elements**
  - Hortus conclusus iconography for dividers
  - Stage badge icon set (SVG + PNG)
  - Scripture waypoint accent graphics

---

#### Page-Specific Assets

**Home Page (`/`)**:
- [ ] Hero banner (3200x1800): Classical Catholic education scene
- [ ] Founders portrait (800x800): Network team or Senior himself
- [ ] Philosophy supporting art (1200x800): Classical painting detail
- [ ] Schools showcase collage (1600x900): Affiliated campus montage
- [ ] Three Paths CTA tiles (600x400 each): School, Home, Founding
- [ ] Stages background accent (subtle, 1920x400)

**Philosophy Page (`/philosophy`)**:
- [ ] Hero artwork (3200x1800): Raphael's "School of Athens" or similar
- [ ] Accordion imagery (800x600 each):
  - Poetic knowledge: Medieval manuscript illumination
  - Physical discipline: Boys in outdoor training
  - Poetic-scientific: Astronomical illustration
  - Liturgical rhythm: Church procession

**Home Application (`/home-application`)**:
- [ ] Hero image (3200x1800): Family on liturgical hike
- [ ] Gymnasium Guide cover (600x800): Portrait orientation
- [ ] Secondary vignettes (600x400 each): Benevolent neglect, family reading

**Join/Found (`/join-found`)**:
- [ ] Hero image (3200x1800): Founders collaborating
- [ ] Founder's Toolkit cover (600x800): Portrait orientation
- [ ] Network support imagery (1200x800): Educator retreat

**Schools Directory (`/schools`)**:
- [ ] Hero banner (3200x1200): Map overlay or campus montage
- [ ] Placeholder school photos (per listing):
  - Exterior facade (1200x800)
  - Interior classroom (1200x800)
  - Student activity (1200x800)
  - Headmaster portrait (600x600)
  - School crest/logo (512x512 SVG)

**Contact Page (`/contact`)**:
- [ ] Banner image (3200x1200): Letter writing desk, classical correspondence

---

#### Content Library Assets

- [ ] **Book Covers**: Thousand Good Books list thumbnails (300x450 each)
  - Robin Hood, Treasure Island, etc.
  - Prefer public domain sources

- [ ] **Featured Texts Imagery**:
  - Boethius: _Consolation of Philosophy_ illustration
  - Chesterton: _The Ballad of the White Horse_ scene
  - Tolkien: _Mythopoeia_ ethereal landscape
  - Senior: _The Restoration of Innocence_ cover

- [ ] **Pull-Quote Illustrations**: Decorative frames for blockquotes (SVG)

---

#### Downloads & Collateral

- [ ] **Gymnasium Guide PDF**:
  - Cover art (portrait, 8.5x11)
  - Section header graphics
  - Social promo tile (1200x630)

- [ ] **Founder's Toolkit PDF**:
  - Cover art (portrait, 8.5x11)
  - Inside dividers
  - Social promo tile (1200x630)

- [ ] **Email Newsletter Template**:
  - Header/footer art matching site palette
  - Inline graphics (300x200)

- [ ] **Slide Deck Template**:
  - Cover slide background
  - Section dividers
  - Logo watermark

---

### 5.3 Media Assets (Future)

**Video**:
- [ ] Home page welcome video (founder message, 2-3 min)
- [ ] School profile highlight reels (1-2 min each)
- [ ] Gymnasium action reel (B-roll, 30-60 sec)
- [ ] Branded intro/outro cards (5 sec each)

**Audio/Podcast**:
- [ ] Podcast cover art (square, 3000x3000)
- [ ] Episode thumbnails (1920x1080)

---

### 5.4 Asset Quality Standards

**Photography**:
- Resolution: 300 DPI for print, 72 DPI for web
- Color grading: Warm, matching stage palette
- Wardrobe: Align with Catholic formation ethos
- Talent releases: Secure for all recognizable individuals

**Illustrations**:
- Style: Painterly, muted tones, Pre-Raphaelite or classical
- Formats: SVG vector (preferred), PNG fallback
- AI-generated: Prompt with "Pre-Raphaelite style, soft golden light, narrative wonder"

**Licensing**:
- Public domain: Wikimedia Commons, Met Museum Open Access
- Commissioned: Full rights transfer in contract
- Stock: Extended commercial license where needed
- Documentation: Track in asset catalog with renewal dates

**Optimization**:
- WebP format for modern browsers (80% quality)
- JPEG fallback (85% quality)
- Responsive srcset: 640w, 1024w, 1920w, 3200w
- Lazy loading: Implemented via next/image
- Alt text: Descriptive, context-derived (100 chars max)

---

## Part 6: Accessibility Standards

### 6.1 WCAG 2.1 AA Compliance

**Color Contrast**:
- ✅ Text: Minimum 4.5:1 (charcoal on parchment = 8.2:1)
- ✅ Large text (18pt+): Minimum 3:1
- ✅ UI components: Minimum 3:1 (buttons, borders)

**Keyboard Navigation**:
- ✅ All interactive elements focusable via Tab
- ✅ Focus-visible rings (4px gold/forest, offset 2px)
- ✅ Skip links for main content
- ✅ Escape key closes modals/menus
- ✅ Arrow keys navigate carousels

**Screen Reader Support**:
- ✅ Semantic HTML5 (nav, main, section, article, aside, footer)
- ✅ ARIA labels on interactive components
- ✅ aria-expanded, aria-controls, aria-live="polite"
- ✅ Alt text on all images
- ✅ Form labels explicitly associated with inputs

**Responsive Design**:
- ✅ Mobile-first approach
- ✅ Touch targets: Minimum 44x44px
- ✅ Text scales with browser zoom (up to 200%)
- ✅ No horizontal scrolling at any breakpoint

**Motion Sensitivity**:
- ✅ Respect prefers-reduced-motion
- ✅ Disable auto-play animations when requested
- ✅ Provide pause controls on carousels

---

### 6.2 Testing Checklist

- [ ] Lighthouse audit: 90+ accessibility score
- [ ] axe DevTools: Zero critical violations
- [ ] Keyboard-only navigation test
- [ ] Screen reader test (NVDA/JAWS/VoiceOver)
- [ ] Color blindness simulation (deuteranopia, protanopia)
- [ ] Mobile device testing (iOS Safari, Android Chrome)

---

## Part 7: Implementation Notes

### 7.1 Tailwind Configuration

All design tokens implemented in `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      parchment: { DEFAULT: '#F5F1E9', light: '#FDFDFD', dark: '#E8E2D5' },
      forest: { DEFAULT: '#3B5A3E', light: '#4A6B4D', dark: '#2A4129' },
      gold: { DEFAULT: '#CDAF6F', light: '#E5D4A6', dark: '#B89A5A' },
      charcoal: '#4A4A4A',
      nursery: { DEFAULT: '#A8C4D4', light: '#C5DDE8', dark: '#8BAEC0' },
      gymnasium: { DEFAULT: '#7A5C3E', light: '#9A7D5E', dark: '#5A3F2A' },
      poetic: { DEFAULT: '#8B4C4C', light: '#A86B6B', dark: '#6A3535' },
      spiritual: { DEFAULT: '#B8A8C4', light: '#D1C5DB', dark: '#9B8AAA' },
    },
    fontFamily: {
      playfair: ['Playfair Display', 'serif'],
      merriweather: ['Merriweather', 'serif'],
      lato: ['Lato', 'sans-serif'],
    },
    fontSize: {
      hero: ['3rem', { lineHeight: '1.2' }],
      display: ['2.5rem', { lineHeight: '1.2' }],
      'heading-1': ['2rem', { lineHeight: '1.3' }],
      'heading-2': ['1.5rem', { lineHeight: '1.4' }],
      'heading-3': ['1.25rem', { lineHeight: '1.4' }],
      'body-lg': ['1.125rem', { lineHeight: '1.6' }],
      body: ['1rem', { lineHeight: '1.6' }],
      'body-sm': ['0.875rem', { lineHeight: '1.5' }],
    },
    spacing: {
      section: '5rem',
      'section-sm': '3rem',
    },
    boxShadow: {
      organic: '0 2px 4px rgba(0,0,0,0.1)',
      'organic-md': '0 4px 12px rgba(0,0,0,0.15)',
      'organic-lg': '0 8px 20px rgba(0,0,0,0.2)',
      'organic-inner': 'inset 0 2px 4px rgba(0,0,0,0.05)',
    },
    borderRadius: {
      organic: '8px',
      'organic-lg': '12px',
      'organic-xl': '16px',
    },
  },
}
```

---

### 7.2 Global CSS Utilities

Defined in `app/globals.css`:

```css
@layer components {
  .btn-primary {
    @apply bg-forest text-gold px-6 py-3 rounded-organic font-lato font-bold 
           hover:bg-forest-dark transition-colors focus-visible:ring-4 
           focus-visible:ring-gold/50 focus-visible:outline-none;
  }
  
  .btn-secondary {
    @apply bg-gold text-charcoal px-6 py-3 rounded-organic font-lato font-bold 
           hover:bg-gold-dark transition-colors focus-visible:ring-4 
           focus-visible:ring-forest/50 focus-visible:outline-none;
  }
  
  .btn-outline {
    @apply border-2 border-forest text-forest px-6 py-3 rounded-organic 
           font-lato font-bold hover:bg-forest hover:text-gold transition-all 
           focus-visible:ring-4 focus-visible:ring-forest/50 focus-visible:outline-none;
  }
  
  .card {
    @apply bg-parchment-light rounded-organic-lg p-6 shadow-organic 
           hover:shadow-organic-md transition-shadow border border-charcoal/10;
  }
  
  .card-elevated {
    @apply bg-parchment rounded-organic-xl p-8 shadow-organic-lg border-2 
           border-gold/30;
  }
  
  .quote-block {
    @apply border-l-4 border-gold pl-6 italic text-body-lg my-6;
  }
  
  .section-container {
    @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
  }
  
  .content-container {
    @apply max-w-prose mx-auto;
  }
  
  .focus-visible-ring {
    @apply focus-visible:ring-4 focus-visible:ring-gold/50 
           focus-visible:outline-none focus-visible:ring-offset-2;
  }
}
```

---

### 7.3 Responsive Breakpoints

```css
/* Tailwind default breakpoints */
sm: 640px   /* Small tablets */
md: 768px   /* Tablets */
lg: 1024px  /* Small laptops */
xl: 1280px  /* Desktops */
2xl: 1536px /* Large desktops */
```

**Usage Pattern**:
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
  {/* Stacks on mobile, 2 cols on tablet, 4 cols on desktop */}
</div>
```

---

## Part 8: Content Guidelines

### 8.1 Tone & Voice

**Formal Yet Warm**: Classical language without stuffiness
- ✅ "Discover schools aligned with poetic knowledge"
- ❌ "Check out our cool schools"

**Charitable & Non-Partisan**: Treats users as adults pursuing truth
- ✅ "Explore resources for your family's journey"
- ❌ "You MUST implement this approach"

**Wonder-Driven**: Evokes sensory delight and narrative immersion
- ✅ "Step into the enclosed garden where wonder blooms"
- ❌ "Access our educational database"

**Non-Prescriptive**: Inspirational, not mandated
- ✅ "Non-prescriptive guide for families"
- ❌ "Required curriculum checklist"

---

### 8.2 Quote Integration

**Full Quotes**: Always complete, never paraphrased
- Include author and source
- Use QuoteCard component for proper semantic structure
- Variants: hero (page-level), scripture (spiritual), embedded (prose)

**Scripture Waypoints**: Anchor user flows with full verses
- Ephesians 6:4 (School path)
- Proverbs 22:6 (Home path)
- Matthew 11:28 (Founding path)

**Literary References**: Draw from uploaded texts
- Tolkien's _Mythopoeia_
- Chesterton's _Ballad of the White Horse_
- Boethius's _Consolation of Philosophy_
- Aquinas's _Summa Theologica_
- Senior's _The Restoration of Innocence_

---

### 8.3 Content Derivation Chain

All content must derive from authenticated sources:

1. **North Star**: README.md (philosophical foundation)
2. **Technical**: technical.md (architecture decisions)
3. **Phase Guidance**: current-phase.md (active work)
4. **Uploaded Texts**: content/texts/*.md (quotes, excerpts)
5. **Original Synthesis**: Only when building on above

**Forbidden**:
- ❌ Fabricated quotes
- ❌ Speculative claims not grounded in sources
- ❌ Prototype school content (network focus only)

---

## Conclusion

This design system provides a complete reference for implementing the Senior Schools Network platform, ensuring visual consistency, philosophical alignment, and technical excellence across all development phases.

**Key Principles**:
- ✅ Organic, wonder-driven aesthetics
- ✅ Accessible, semantic, responsive
- ✅ Grounded in Catholic humanism
- ✅ Non-prescriptive, inspirational tone
- ✅ StoryBrand narrative structure

**For Phase 3**: Focus on asset integration, content expansion, and performance optimization while maintaining this foundational design integrity.

---

**Document Owners**: Development Team  
**Review Cycle**: End of each phase  
**Feedback**: Submit via issues or contact page
