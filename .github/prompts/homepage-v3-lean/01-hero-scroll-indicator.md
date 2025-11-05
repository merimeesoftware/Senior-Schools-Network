# 01. Hero Scroll Indicator

**Goal**: Chevron + "Discover More" text that fades in after 3s, fades out on scroll past 80vh

**Time**: 1 hour  
**Files**: `components/ScrollIndicator.tsx` (new), `app/(site)/page.tsx`, `app/globals.css`

---

## Code

### ScrollIndicator.tsx

```typescript
'use client';
import { useEffect, useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

export default function ScrollIndicator() {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3000);
    
    const handleScroll = () => {
      setVisible(window.scrollY < window.innerHeight * 0.8);
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

### page.tsx Usage

```typescript
import ScrollIndicator from '@/components/ScrollIndicator';

// Inside hero section:
<section className="relative min-h-[85vh] lg:min-h-screen ...">
  {/* existing hero content */}
  <ScrollIndicator />
</section>
```

### globals.css Addition

```css
@media (prefers-reduced-motion: reduce) {
  .animate-bounce {
    animation: none;
  }
}
```

---

## Validate

- [ ] Appears after 3s
- [ ] Disappears when scrolling past 80vh
- [ ] No bounce animation if `prefers-reduced-motion`
- [ ] Centered, visible on parchment background
- [ ] No console errors
