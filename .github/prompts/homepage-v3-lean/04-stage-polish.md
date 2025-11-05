# 04. Stage Interactions Polish

**Goal**: Gold ring on selected badge, better opacity, slide animation on content panel

**Time**: 2 hours  
**Files**: `components/InteractiveStages.tsx`

---

## Code

### Updated Button Styling

```typescript
<button
  onClick={() => setSelectedStage('nursery')}
  className="focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-nursery transition-all duration-300 hover:scale-105"
>
  <StageBadge
    stage="nursery"
    size="lg"
    whiteText
    className={
      selectedStage === 'nursery' 
        ? 'ring-4 ring-gold/70 shadow-2xl scale-105' // GOLD ring
        : 'opacity-60 hover:opacity-85' // Better opacity
    }
  />
</button>
```

### Slide Animation (CSS-only)

In `globals.css`:
```css
@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.stage-content-enter {
  animation: slideInUp 0.3s ease-out;
}
```

In component:
```typescript
<div 
  key={selectedStage}
  className={`stage-content-enter ${currentStage.bgColor} border-2 ${currentStage.borderColor} ...`}
>
  {/* content */}
</div>
```

---

## Validate

- [ ] Selected badge has gold ring (not white)
- [ ] Unselected badges at 60% opacity
- [ ] Hover brings unselected to 85% opacity
- [ ] Content panel slides up smoothly (300ms)
- [ ] Animations work on mobile
