# 08. Footer Utility Links

**Goal**: Add Privacy Policy and Contact links above Scripture Carousel

**Time**: 2 hours  
**Files**: `components/Footer.tsx`, `app/(site)/privacy/page.tsx`, `app/(site)/contact/page.tsx`

---

## Code

### Footer.tsx

Add above Scripture Carousel:

```typescript
<footer className="bg-forest text-parchment mt-auto border-t-4 border-gold">
  <div className="section-container py-12">
    {/* NEW: Utility links */}
    <div className="flex justify-center gap-8 mb-8 text-sm border-b border-parchment/20 pb-8">
      <Link 
        href="/privacy" 
        className="hover:text-gold transition-colors focus-visible-ring"
      >
        Privacy Policy
      </Link>
      <Link 
        href="/contact" 
        className="hover:text-gold transition-colors focus-visible-ring"
      >
        Contact
      </Link>
    </div>

    {/* Existing Scripture Carousel */}
    <Suspense fallback={<div>Loading...</div>}>
      <ScriptureCarousel />
    </Suspense>
  </div>
</footer>
```

### privacy/page.tsx (Minimal)

```typescript
import ContentContainer from '@/components/ContentContainer';
import SectionHeading from '@/components/SectionHeading';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-parchment">
      <ContentContainer width="narrow" padding="lg">
        <SectionHeading level={1}>Privacy Policy</SectionHeading>
        <p className="text-body mt-6">
          Senior Schools Network collects minimal data. We do not track users
          beyond basic analytics. Contact forms collect only name/email for
          correspondence. No data is sold or shared with third parties.
        </p>
      </ContentContainer>
    </main>
  );
}
```

### contact/page.tsx (Minimal)

```typescript
import ContentContainer from '@/components/ContentContainer';
import SectionHeading from '@/components/SectionHeading';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-parchment">
      <ContentContainer width="narrow" padding="lg">
        <SectionHeading level={1}>Contact</SectionHeading>
        <p className="text-body mt-6">
          For inquiries about the Senior Schools Network, please email:  
          <a href="mailto:info@seniorschools.org" className="text-gold hover:underline">
            info@seniorschools.org
          </a>
        </p>
      </ContentContainer>
    </main>
  );
}
```

---

## Validate

- [ ] Links appear in footer
- [ ] Hover shows gold color
- [ ] Focus ring visible
- [ ] Privacy page loads
- [ ] Contact page loads
- [ ] Links accessible via keyboard
