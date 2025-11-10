# Philosophy Page Restructure - Implementation Guide

## Overview

This folder contains 6 sequential prompts for restructuring the Philosophy page to reduce scrolling while preserving all philosophical content.

## Prompt Sequence

Execute in order:

1. **01-collapsible-evidence.md** - Create CollapsibleEvidenceQuotes component
2. **02-tabbed-subsections.md** - Create SubsectionTabs component
3. **03-collapsible-problem-solution.md** - Enhance ProblemSolutionPanel
4. **04-merge-interactive-stages.md** - Add mode toggle to InteractiveStages
5. **05-optimize-summaries.md** - Move Three Poisons summary
6. **06-progressive-disclosure.md** - Add summary mode to all subsections

## Expected Impact

**Before**: ~15,000-18,000px page height
**After**: ~6,000-8,000px total height, ~4,000-5,000px initial visible height

## Implementation Timeline

- Prompt 1: 1 hour
- Prompt 2: 1 hour
- Prompt 3: 1 hour
- Prompt 4: 30 minutes
- Prompt 5: 30 minutes
- Prompt 6: 2 hours

**Total**: 6 hours

## Testing Between Prompts

After each prompt:
1. Run `npm run dev`
2. Navigate to http://localhost:3000/philosophy
3. Verify changes work as expected
4. Run `npm run build` to check for TypeScript errors
5. Proceed to next prompt only if current changes validated

## Reference Documents

- **Implementation Plan**: `.github/docs/temp/philosophy-page-restructure-plan.md`
- **Source Page**: `app/(site)/philosophy/page.tsx`
- **Subsection Components**: `components/philosophy/*.tsx`

## Key Principles

- ✅ Preserve all philosophical content (zero information loss)
- ✅ Maintain scholarly tone and rigor
- ✅ Enhance user experience through progressive disclosure
- ✅ Ensure accessibility (keyboard navigation, screen readers, WCAG AA)
- ✅ Maintain visual hierarchy and color-coding

## Success Metrics

- [ ] Page height reduced by ~50-60%
- [ ] All content accessible
- [ ] Lighthouse Accessibility: 95+
- [ ] Lighthouse Performance: 90+
- [ ] No TypeScript errors
- [ ] No console errors
- [ ] Smooth animations (60fps)
- [ ] Mobile responsive

---

**Start with Prompt 1 and proceed sequentially.**
