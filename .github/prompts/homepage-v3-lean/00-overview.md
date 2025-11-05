# Homepage V3 - Implementation Guide

**Total Time**: 4-5 days | **Outcome**: Enhanced homepage with animations, visual breaks, stage polish, liturgical theming

---

## Prompt Sequence

### Phase 1: Core (2 days)
1. **Hero Scroll Indicator** (1h) - Chevron fade-in/out
2. **Hero Refresh** (2h) - Click to change quote/image
3. **Quote/Image Break** (2h) - Full-width band with Mission quotes
4. **Stage Polish** (2h) - Gold rings, slide animations
5. **Three Paths Borders** (1h) - Stage-colored left borders

### Phase 2: Polish (2 days)
6. **Fade-Ins** (3h) - Scroll-triggered reveals
7. **Parchment Texture** (1h) - Subtle background grain
8. **Footer Links** (2h) - Privacy/Contact row

### Phase 3: Liturgical (1 day)
9. **Seasonal Theming** (6-8h) - Tridentine calendar, color shifts

---

## Execution

**Workflow**:
```
Day 1: Prompts 01-03
Day 2: Prompts 04-05 → Phase 1 PR
Day 3: Prompts 06-07
Day 4: Prompt 08 → Phase 2 PR
Day 5: Prompt 09 → Phase 3 PR
```

**Per Prompt**:
1. Implement code changes
2. Visual check (mobile/desktop)
3. Test accessibility (Axe DevTools)
4. Commit: `git commit -m "feat(homepage): [prompt-XX] description"`

**Validation**:
- No console errors
- Lighthouse Performance ≥90, Accessibility =100
- Smooth animations, no jarring transitions

---

## Rollback

If validation fails:
```bash
git revert HEAD  # or fix inline if minor
```

---

## Success Criteria

**Phase 1**: Scroll indicator smooth, hero refresh works, break integrates, stages polished, borders subtle  
**Phase 2**: Fade-ins trigger properly, texture visible but subtle, footer accessible  
**Phase 3**: Liturgical calculator accurate, November theme working, smooth color transitions

---

**Reference Docs**: homepage-optimization-v3.md, design-system.md, technical.md  
**Start**: Prompt 01
