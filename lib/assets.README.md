# Image Asset System

## Overview

The Senior Schools Network uses a centralized asset manifest system for managing images with rich metadata, optimized delivery, and philosophical alignment.

## Architecture

### Files
- **`lib/assets.ts`** - Master manifest with all image metadata
- **`components/OptimizedImage.tsx`** - Single image component with Next.js optimization
- **`components/ImageGallery.tsx`** - Multi-image grid component with filtering

### Directory Structure
```
public/images/
├── art-sacred/          # Book of Kells, renaissance sacred art
├── beatrix-potter/      # Nursery-stage illustrations
├── landscapes/          # Hudson River School, Monet
├── nursery-illustrations/ # Generic nursery art
├── otto-of-the-silver-hand/ # Medieval chivalry
├── robin-hood/          # Adventure tales
├── winnie-the-pooh/     # Nursery-gymnasium bridge
└── adventure/           # Naval, historical adventures
```

## Asset Manifest (`lib/assets.ts`)

### ImageAsset Interface
```typescript
interface ImageAsset {
  id: string;              // Unique identifier
  src: string;             // Path relative to /public
  alt: string;             // Accessibility text
  caption?: string;        // Optional display caption
  width?: number;          // Dimensions for optimization
  height?: number;
  stage?: Stage;           // nursery | gymnasium | poetic | spiritual
  category?: ContentCategory; // beauty | discipline | stories | virtue
  tags?: string[];         // Thematic tags for filtering
  quoteRef?: string;       // Associated quote ID
  sourceRef?: string;      // Book/source reference
}
```

### Retrieval Functions

```typescript
// Get single asset by ID
const asset = getAssetById('garden-of-eden');

// Filter by stage
const nurseryImages = getAssetsByStage('nursery');
const gymnasiumImages = getAssetsByStage('gymnasium');

// Filter by category
const beautyImages = getAssetsByCategory('beauty');
const disciplineImages = getAssetsByCategory('discipline');

// Filter by tag
const bookOfKells = getAssetsByTag('book-of-kells');
const medievalArt = getAssetsByTag('medieval');

// Search by text
const results = searchAssets('robin hood');

// Random asset (great for hero images)
const randomBeauty = getRandomAsset({ category: 'beauty' });
const randomNursery = getRandomAsset({ stage: 'nursery' });
```

## Components

### OptimizedImage

Single image with Next.js `<Image>` optimization, manifest integration, and responsive sizing.

#### Basic Usage
```tsx
import OptimizedImage from '@/components/OptimizedImage';

// By ID
<OptimizedImage
  assetId="garden-of-eden"
  showCaption={true}
/>

// By asset object
import { getAssetById } from '@/lib/assets';

const asset = getAssetById('monet-japanese-footbridge');
<OptimizedImage
  asset={asset}
  showCaption={true}
  imageClassName="rounded-lg shadow-soft"
/>
```

#### Props
```typescript
interface OptimizedImageProps {
  assetId?: string;          // Lookup by ID
  asset?: ImageAsset;        // Direct asset object
  alt?: string;              // Override manifest alt
  showCaption?: boolean;     // Display caption below image
  priority?: boolean;        // LCP optimization
  className?: string;        // Wrapper className
  imageClassName?: string;   // Image element className
  sizes?: string;            // Responsive sizes attribute
  fill?: boolean;            // Fill parent container
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  width?: number;            // Explicit dimensions
  height?: number;
  loading?: 'lazy' | 'eager';
  quality?: number;          // 1-100 (default 85)
  placeholder?: 'blur' | 'empty';
}
```

#### Examples

**Hero Image with Priority**
```tsx
<OptimizedImage
  assetId="thomas-cole-niagara-falls"
  showCaption={true}
  priority={true}
  sizes="(max-width: 768px) 100vw, 90vw"
  imageClassName="rounded-lg shadow-organic"
/>
```

**Fill Container**
```tsx
<div className="relative w-full h-96">
  <OptimizedImage
    assetId="landscape-with-rainbow"
    fill={true}
    objectFit="cover"
    sizes="100vw"
  />
</div>
```

### ImageGallery

Grid layout with filtering, responsive columns, and automatic Next.js optimization.

#### Basic Usage
```tsx
import ImageGallery from '@/components/ImageGallery';

// By stage
<ImageGallery
  stage="nursery"
  showCaptions={true}
  columns={{ mobile: 1, tablet: 2, desktop: 3 }}
  gap="lg"
/>

// By category
<ImageGallery
  category="beauty"
  showCaptions={true}
/>

// By tag
<ImageGallery
  tag="book-of-kells"
  showCaptions={true}
/>

// Direct assets
import { getAssetsByStage } from '@/lib/assets';

const assets = getAssetsByStage('gymnasium').slice(0, 6);
<ImageGallery
  assets={assets}
  showCaptions={true}
/>
```

#### Props
```typescript
interface ImageGalleryProps {
  assets?: ImageAsset[];     // Direct asset array
  stage?: Stage;             // Filter by stage
  category?: ContentCategory; // Filter by category
  tag?: string;              // Filter by tag
  showCaptions?: boolean;    // Show captions (default true)
  columns?: {
    mobile?: number;         // Default 1
    tablet?: number;         // Default 2
    desktop?: number;        // Default 3
  };
  gap?: 'sm' | 'md' | 'lg';  // Grid gap
  className?: string;        // Custom className
}
```

## Adding New Images

### 1. Add WebP File
Place in appropriate subfolder under `public/images/`.

### 2. Update Manifest
Add entry to `lib/assets.ts`:

```typescript
const newCollection: ImageAsset[] = [
  {
    id: 'unique-kebab-case-id',
    src: '/images/subfolder/filename.webp',
    alt: 'Descriptive accessibility text',
    caption: 'Optional display caption with philosophical context',
    stage: 'gymnasium',
    category: 'discipline',
    tags: ['medieval', 'chivalry', 'adventure'],
    quoteRef: 'adventure-stories', // Optional quote link
    sourceRef: 'Book Title',        // Optional source
  },
];

// Add to master registry
export const imageAssets: ImageAsset[] = [
  ...existingCollections,
  ...newCollection,
];
```

### 3. Use in Components
```tsx
<OptimizedImage assetId="unique-kebab-case-id" showCaption={true} />
```

## Performance Best Practices

### Responsive Sizes
Always provide `sizes` attribute for proper responsive behavior:

```tsx
// Full-width hero
sizes="100vw"

// Content area (max-width container)
sizes="(max-width: 768px) 100vw, 90vw"

// Grid columns
sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
```

### Priority Loading
Use `priority={true}` for above-the-fold images (LCP optimization):

```tsx
<OptimizedImage
  assetId="hero-image"
  priority={true}
  sizes="100vw"
/>
```

### Lazy Loading
Default behavior is lazy loading. Only set `loading="eager"` for critical images.

### Quality Settings
- Default: `85` (good balance)
- High detail: `90-95`
- Lower bandwidth: `70-80`

## Metadata Philosophy

### Alt Text Guidelines
- **Descriptive** - What's visually depicted
- **Context-aware** - Relate to educational stage/theme
- **Accessible** - Clear for screen readers

**Good**: "Benjamin Bunny in his little jacket, illustrated by Beatrix Potter"  
**Poor**: "Rabbit picture"

### Captions
Link to philosophical themes when possible:

```typescript
caption: 'Wonder discovered in contemplation of created beauty'
caption: 'Adventure, courage, and merry fellowship in the greenwood'
caption: 'The beauty of holiness rendered in pigment and gold'
```

### Tags
Use consistent, lowercase, kebab-case tags:
- `book-of-kells`
- `hudson-river-school`
- `beatrix-potter`
- `medieval`
- `adventure`

## Integration with Content System

### Quote References
Link images to quotes from `lib/content/index.ts`:

```typescript
{
  id: 'otto-11',
  quoteRef: 'adventure-stories', // Links to quote with same ID
  // ...
}
```

### Source References
Connect to book list entries:

```typescript
{
  id: 'robin-hood-2',
  sourceRef: 'The Merry Adventures of Robin Hood',
  // ...
}
```

## Examples in Pages

See these files for implementation examples:
- **`app/(site)/philosophy/page.tsx`** - ImageGallery by category
- **`app/(site)/gallery/page.tsx`** - Full showcase with multiple filters
- **`components/OptimizedImage.tsx`** - Component source
- **`components/ImageGallery.tsx`** - Gallery component source

## Future Enhancements

### Planned Features
- [ ] Lightbox/modal for full-size viewing
- [ ] Image preloading hints for galleries
- [ ] Blur placeholder generation
- [ ] Automated width/height detection
- [ ] Integration with CMS for dynamic updates
- [ ] Image optimization pipeline (WebP conversion, resizing)

### Potential Filters
- Multiple tag filtering (AND/OR logic)
- Date ranges (if historical context added)
- Artist/illustrator filtering
- Color palette filtering

---

**Last Updated**: October 10, 2025  
**Maintainer**: Senior Schools Network Development Team
