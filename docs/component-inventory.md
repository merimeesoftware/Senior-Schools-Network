# Component Inventory - Senior Schools Network

## Design System Components

### Layout Components

#### ContentContainer

**File**: `components/ContentContainer.tsx`  
**Purpose**: Responsive width containers with consistent padding  
**Props**:

- `width`: 'narrow' | 'normal' | 'wide' | 'full' (default: 'normal')
- `padding`: 'none' | 'sm' | 'md' | 'lg' (default: 'md')
- `className`: Additional Tailwind classes

**Usage**:

```tsx
<ContentContainer width="narrow" padding="lg">
  <p>Long-form reading content...</p>
</ContentContainer>
```

---

### Typography Components

#### SectionHeading

**File**: `components/SectionHeading.tsx`  
**Purpose**: Semantic headings with consistent styling  
**Props**:

- `level`: 1 | 2 | 3 (default: 2)
- `align`: 'left' | 'center' | 'right' (default: 'left')
- `decorated`: boolean (adds ✦ ornaments, default: false)
- `className`: Additional classes

**Usage**:

```tsx
<SectionHeading level={2} align="center" decorated>
  Philosophy & Resources
</SectionHeading>
```

#### BrandHeader

**File**: `components/BrandHeader.tsx`  
**Purpose**: Site branding with logo/title  
**Props**:

- `variant`: 'default' | 'compact' (default: 'default')

**Usage**:

```tsx
<BrandHeader variant="compact" />
```

---

### Content Components

#### QuoteCard

**File**: `components/QuoteCard.tsx`  
**Purpose**: Display quotes with attribution  
**Props**:

- `quote`: string (required)
- `author`: string (optional)
- `source`: string (optional)
- `variant`: 'default' | 'hero' | 'scripture' | 'embedded' (default: 'default')
- `className`: Additional classes

**Variants**:

- **hero**: Large, centered, elevated card for page-level impact
- **scripture**: Spiritual color scheme with left border
- **default**: Standard card layout
- **embedded**: Minimal styling for inline quotes

**Usage**:

```tsx
<QuoteCard
  quote="Wonder is the beginning of wisdom"
  author="Ancient Proverb"
  variant="hero"
/>

<QuoteCard
  quote="Train up a child in the way he should go"
  author="Proverbs 22:6"
  variant="scripture"
/>
```

#### StageBadge

**File**: `components/StageBadge.tsx`  
**Purpose**: Visual indicators for developmental stages  
**Props**:

- `stage`: 'nursery' | 'gymnasium' | 'poetic' | 'spiritual' (required)
- `size`: 'sm' | 'md' | 'lg' (default: 'md')
- `className`: Additional classes

**Features**:

- Color-coded backgrounds
- Displays age ranges
- Border matching stage color

**Usage**:

```tsx
<StageBadge stage="gymnasium" size="lg" />
<StageBadge stage="nursery" size="sm" />
```

---

### Interactive Components

#### CTAButton

**File**: `components/CTAButton.tsx`  
**Purpose**: Consistent call-to-action buttons  
**Props**:

- `href`: string (for Link navigation, optional)
- `onClick`: function (for button actions, optional)
- `variant`: 'primary' | 'secondary' | 'outline' (default: 'primary')
- `size`: 'sm' | 'md' | 'lg' (default: 'md')
- `disabled`: boolean (default: false)
- `fullWidth`: boolean (default: false)
- `className`: Additional classes

**Variants**:

- **primary**: Forest background, gold text (main actions)
- **secondary**: Gold background, charcoal text (alternative actions)
- **outline**: Border-only, hover fill (tertiary actions)

**Usage**:

```tsx
<CTAButton href="/schools" variant="primary" size="lg">
  Find a School
</CTAButton>

<CTAButton onClick={handleSubmit} variant="secondary" disabled={loading}>
  Submit
</CTAButton>
```

---

### Navigation Components

#### Navigation

**File**: `components/Navigation.tsx`  
**Purpose**: Main site navigation with mobile menu  
**Features**:

- Sticky positioning (top: 0)
- Responsive (desktop horizontal, mobile hamburger)
- ARIA labels and keyboard navigation
- Focus-visible rings

**No props** - Configuration in component file

#### Footer

**File**: `components/Footer.tsx`  
**Purpose**: Scripture waypoints and copyright  
**Features**:

- Scripture grid (responsive 1-3 columns)
- Gold top border
- Semantic role="contentinfo"

**No props** - Content configured in component file

---

## Utility Classes

### In `app/globals.css`

#### Buttons

```css
.btn-primary     /* Forest bg, gold text, focus rings */
.btn-secondary   /* Gold bg, charcoal text, focus rings */
.btn-outline     /* Border-only, hover fill */
```

#### Cards

```css
.card           /* Standard card with hover shadow */
.card-elevated  /* Premium card, larger padding/shadow */
```

#### Layout

```css
.section-container    /* Max-width 7xl, responsive padding */
.content-container    /* Max-width prose, centered */
```

#### Typography

```css
.quote-block         /* Left gold border, italic, spacing */
.focus-visible-ring  /* Reusable focus ring pattern */
```

---

## Design Tokens

### Colors (in `tailwind.config.ts`)

**Primary Palette**:

- `parchment` / `parchment-light` / `parchment-dark`
- `forest` / `forest-light` / `forest-dark`
- `gold` / `gold-light` / `gold-dark`
- `charcoal`

**Stage Colors** (each with light/dark):

- `nursery` - Soft blue (#A8C4D4)
- `gymnasium` - Earth brown (#7A5C3E)
- `poetic` - Muted crimson (#8B4C4C)
- `spiritual` - Gentle lavender (#B8A8C4)

### Typography

**Font Families**:

- `font-playfair` - Headings, quotes
- `font-merriweather` - Body text
- `font-lato` - UI elements

**Font Sizes**:

- `text-hero` - 3rem (48px)
- `text-display` - 2.5rem (40px)
- `text-heading-1` - 2rem (32px)
- `text-heading-2` - 1.5rem (24px)
- `text-heading-3` - 1.25rem (20px)
- `text-body-lg` - 1.125rem (18px)
- `text-body` - 1rem (16px)
- `text-body-sm` - 0.875rem (14px)

### Spacing

- `py-section` - 5rem (80px)
- `py-section-sm` - 3rem (48px)

### Shadows

- `shadow-organic` - Subtle (4px blur)
- `shadow-organic-md` - Medium (12px blur)
- `shadow-organic-lg` - High (20px blur)
- `shadow-organic-inner` - Inset shadow

### Border Radius

- `rounded-organic` - 8px
- `rounded-organic-lg` - 12px
- `rounded-organic-xl` - 16px

---

## Component Composition Patterns

### Page Hero Pattern

```tsx
<section className="bg-gradient-to-b from-parchment to-parchment-light">
  <ContentContainer width="wide" padding="lg">
    <QuoteCard quote="..." author="..." variant="hero" />
    <div className="mt-8 text-center max-w-3xl mx-auto">
      {/* Hero content */}
    </div>
  </ContentContainer>
</section>
```

### Card Grid Pattern

```tsx
<section className="section-container py-section-sm">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {items.map((item) => (
      <Link key={item.id} href={item.href} className="card group">
        <h3 className="text-heading-3 font-playfair text-forest mb-3 group-hover:text-forest-dark transition-colors">
          {item.title}
        </h3>
        <p className="text-body-sm">{item.description}</p>
      </Link>
    ))}
  </div>
</section>
```

### CTA Section Pattern

```tsx
<section className="bg-spiritual/10 py-section-sm">
  <ContentContainer width="narrow">
    <div className="text-center">
      <SectionHeading level={2} align="center">
        Join the Restoration
      </SectionHeading>
      <p className="text-body-lg mb-8">{/* Content */}</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <CTAButton href="/..." variant="primary" size="lg">
          Primary Action
        </CTAButton>
        <CTAButton href="/..." variant="outline" size="lg">
          Secondary Action
        </CTAButton>
      </div>
    </div>
  </ContentContainer>
</section>
```

---

## Accessibility Features

All components include:

- ✓ Focus-visible rings for keyboard navigation
- ✓ Proper semantic HTML
- ✓ ARIA attributes where needed
- ✓ Color contrast meeting WCAG AA
- ✓ Responsive touch targets (44x44px minimum)

---

**Last Updated**: October 7, 2025  
**Phase**: 2 - Design System and Layout  
**Status**: Complete and validated
