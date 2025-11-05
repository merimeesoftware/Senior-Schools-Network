# 02. Hero Click-to-Refresh

**Goal**: Add button below hero quote that refreshes both quote AND image

**Time**: 2 hours  
**Files**: `components/RotatingQuotes.tsx`, `app/(site)/page.tsx`

---

## Code

### RotatingQuotes.tsx Changes

Add props:
```typescript
interface RotatingQuotesProps {
  // ... existing props
  showRefreshButton?: boolean;
  onRefresh?: () => void;
}
```

Add refresh handler:
```typescript
const handleManualRefresh = () => {
  setIndex((i) => (i + 1) % safeQuotes.length);
  onRefresh?.();
};
```

Add button after quote:
```tsx
{showRefreshButton && (
  <button
    onClick={handleManualRefresh}
    className="mt-4 group flex items-center gap-2 mx-auto text-gold/80 hover:text-gold transition-colors focus-visible-ring rounded-full p-2"
    aria-label="New Inspiration"
  >
    <svg className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  </button>
)}
```

### page.tsx Changes

Convert to client component, add state:
```typescript
'use client';
import { useState } from 'react';

export default function HomePage() {
  const [heroImageIndex, setHeroImageIndex] = useState(0);
  
  const heroImages = [
    getRandomAssetFromFolder('landscapes'),
    getRandomAssetFromFolder('landscapes'),
    getRandomAssetFromFolder('landscapes'),
  ];
  
  const handleHeroRefresh = () => {
    setHeroImageIndex((i) => (i + 1) % heroImages.length);
  };
  
  return (
    <section className="relative min-h-[85vh] lg:min-h-screen ...">
      <OptimizedImage asset={heroImages[heroImageIndex]} ... />
      
      <div className="relative z-10 ...">
        <RotatingQuotes 
          quotes={heroQuotes}
          autoplay={false}
          showRefreshButton={true}
          onRefresh={handleHeroRefresh}
        />
      </div>
    </section>
  );
}
```

---

## Validate

- [ ] Button appears below quote
- [ ] Click changes BOTH quote and image
- [ ] Icon rotates on hover
- [ ] Focus ring visible
- [ ] Works on mobile (touchable)
