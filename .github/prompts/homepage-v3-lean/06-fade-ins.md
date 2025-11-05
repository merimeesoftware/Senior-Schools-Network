# 06. Scroll Fade-Ins

**Goal**: Sections fade in when entering viewport using IntersectionObserver

**Time**: 3 hours  
**Files**: `components/FadeIn.tsx` (new), `app/(site)/page.tsx`

---

## Code

### FadeIn.tsx

```typescript
'use client';
import { useEffect, useRef, useState } from 'react';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  threshold?: number;
  className?: string;
}

export default function FadeIn({ children, delay = 0, threshold = 0.2, className = '' }: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
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

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay, threshold]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} ${className}`}
    >
      {children}
    </div>
  );
}
```

### Usage Examples

```typescript
// Welcome section
<section className="py-20 bg-parchment">
  <FadeIn>
    <SectionHeading>Welcome</SectionHeading>
    <p>...</p>
  </FadeIn>
</section>

// Three Paths - stagger cards
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
  <FadeIn delay={0}><Link href="/schools">...</Link></FadeIn>
  <FadeIn delay={150}><Link href="/philosophy">...</Link></FadeIn>
  <FadeIn delay={300}><Link href="/engage">...</Link></FadeIn>
</div>

// Stages
<FadeIn threshold={0.3}>
  <h2>Stages of Development</h2>
</FadeIn>
```

---

## Validate

- [ ] Sections fade in when 20% visible
- [ ] Stagger delays work (0ms, 150ms, 300ms)
- [ ] No animation if `prefers-reduced-motion`
- [ ] Smooth 700ms transition
- [ ] Disconnect observer after triggering
