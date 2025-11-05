# 05. Three Paths Stage Borders

**Goal**: Add subtle stage-colored left borders (4px) to Three Paths cards

**Time**: 30 minutes  
**Files**: `app/(site)/page.tsx`

---

## Code

Update each Three Paths card:

```typescript
{/* Senior Schools - Gymnasium */}
<Link href="/schools" className="group block">
  <div className="
    text-center space-y-6 p-8 
    hover:bg-parchment/30 
    transition-all duration-300 
    rounded-lg
    border-l-4 border-gymnasium
  ">
    {/* existing content */}
  </div>
</Link>

{/* Philosophy - Poetic */}
<Link href="/philosophy" className="group block">
  <div className="... border-l-4 border-poetic">
    {/* existing content */}
  </div>
</Link>

{/* Engage - Spiritual */}
<Link href="/engage" className="group block">
  <div className="... border-l-4 border-spiritual">
    {/* existing content */}
  </div>
</Link>
```

---

## Validate

- [ ] Gymnasium card has brown left border
- [ ] Poetic card has crimson left border
- [ ] Spiritual card has lavender left border
- [ ] Borders 4px wide, subtle but visible
- [ ] Works on mobile
