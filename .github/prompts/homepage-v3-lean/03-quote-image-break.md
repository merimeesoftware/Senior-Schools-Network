# 03. Quote/Image Break

**Goal**: Full-width section between Three Paths and Stages with Mission & Adventure quote + landscape

**Time**: 2 hours  
**Files**: `app/(site)/page.tsx`

---

## Code

Add between Three Paths and Stages sections:

```typescript
import { getAxiomsQuotesBySection } from '@/lib/content/axioms';

// In HomePage:
const missionQuotes = await getAxiomsQuotesBySection('Quote Bank: Mission and Adventure');

// JSX:
<section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
  {/* Background image */}
  <div className="absolute inset-0 z-0">
    <OptimizedImage
      asset={getRandomAssetFromFolder('adventure')}
      alt="Chivalric wayfarer adventure"
      fill={true}
      objectFit="cover"
      sizes="100vw"
    />
  </div>
  
  {/* Dark overlay */}
  <div className="absolute inset-0 z-[1] bg-charcoal/50"></div>
  
  {/* Quote */}
  <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
    {missionQuotes.length > 0 && (
      <RotatingQuotes 
        quotes={missionQuotes}
        autoplay={false}
        quoteClassName="text-2xl md:text-4xl font-playfair italic text-white leading-relaxed drop-shadow-2xl"
        authorClassName="text-lg md:text-xl text-parchment/90 font-lato mt-4"
      />
    )}
  </div>
</section>
```

---

## Validate

- [ ] Section appears between Three Paths and Stages
- [ ] Quote readable on image (dark overlay working)
- [ ] 50vh on desktop, 40vh on mobile
- [ ] Image from adventure folder
- [ ] Quote from Mission & Adventure axioms
