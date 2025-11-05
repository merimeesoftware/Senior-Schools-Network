# 07. Parchment Texture

**Goal**: Add subtle background grain to Welcome section

**Time**: 1 hour  
**Files**: `app/globals.css`, `app/(site)/page.tsx`

---

## Code

### globals.css

```css
.parchment-texture {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4'%3E%3Cpath d='M0 0h1v1H0zm2 2h1v1H2z' fill='%23000' opacity='0.03'/%3E%3C/svg%3E");
}

@media (max-width: 768px) {
  .parchment-texture {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4'%3E%3Cpath d='M0 0h1v1H0zm2 2h1v1H2z' fill='%23000' opacity='0.02'/%3E%3C/svg%3E");
  }
}
```

### Usage

```typescript
<section className="py-20 bg-parchment parchment-texture">
  <ContentContainer width="narrow">
    {/* Welcome content */}
  </ContentContainer>
</section>
```

---

## Validate

- [ ] Texture barely visible (opacity 0.03)
- [ ] Even more subtle on mobile (0.02)
- [ ] Doesn't distract from text readability
- [ ] Works across all browsers
