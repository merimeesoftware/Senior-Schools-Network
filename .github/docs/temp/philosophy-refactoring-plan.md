# Philosophy Page Refactoring Plan

**Date**: November 7, 2025  
**Status**: Planning  
**Goal**: Extract ~625 lines of inline JSX into reusable components for improved maintainability

---

## Current State Assessment

### Metrics
- **File size**: ~1,795 lines (page.tsx)
- **Inline JSX**: ~625+ lines
- **Extracted components**: 6 (SyllogismSection, ProblemSolutionPanel, EvidenceQuote, InteractiveStages, ProgressIndicator, CounterargumentAccordion)
- **Tests passing**: 268/271
- **TypeScript errors**: 3 pre-existing (acceptable)

### Visual State
✅ Layout excellent  
✅ Theming consistent (red/green/gold)  
✅ Components render correctly  
✅ Responsive design working  
❌ Code organization problematic  

---

## Architectural Problems

### 1. Massive Inline JSX Blocks
- **Part I (The Crisis)**: ~300 lines inline
  - Section A: Loss of Wonder (~100 lines)
  - Section B: Cultural Softness (~100 lines)
  - Section C: Specialized Knowledge (~100 lines)

- **Part II (The Restoration)**: ~235 lines inline
  - Section A: Four Stages (~80 lines)
  - Section B: Gymnasium Foundation (~80 lines)
  - Section C: Poetic Stage (~75 lines)

- **Part III (The Vision)**: ~90 lines inline
  - Syllogism Recap (~30 lines)
  - Warrior Poet Vision (~40 lines)
  - Call to Action (~40 lines)

### 2. Duplicated Patterns
- **Card Grids**: 4+ instances (Three Poisons, Warrior Poet, CTAs, Practical Examples)
- **Summary Boxes**: 3 instances (Crisis, Minor Premise, Syllogism Recap)
- **Evidence Quote Groups**: 9+ instances across all subsections
- **Visual Diagrams**: 2 instances (Poisoned Well, Syllogism Logic)

### 3. Missing Component Hierarchy
No subsection-level components exist. All content embedded directly in page.tsx.

---

## Refactoring Strategy

### Phase 1: Reusable Pattern Components (Highest Impact)
Extract duplicated patterns into generic components that can be reused throughout the page and potentially in other pages.

**New Components**:
1. `CardGrid.tsx` - 3-column card grids with emoji/heading/description
2. `SummaryBox.tsx` - Bordered conclusion boxes with variant theming
3. `EvidenceQuoteGroup.tsx` - Container for evidence quote sections
4. `ComparisonDiagram.tsx` - Two-column flow diagrams
5. `StudyGrid.tsx` - Two-column list comparisons

**Impact**: Eliminates ~200 lines of duplicated code, establishes pattern library

### Phase 2: Subsection Components (Part I: The Crisis)
Extract each major premise subsection into dedicated component files.

**New Components**:
6. `CrisisSubsectionA.tsx` - Loss of Wonder
7. `CrisisSubsectionB.tsx` - Cultural Softness
8. `CrisisSubsectionC.tsx` - Specialized Knowledge

**Impact**: Removes ~300 lines from page.tsx, improves readability

### Phase 3: Subsection Components (Part II: The Restoration)
Extract minor premise subsections.

**New Components**:
9. `RestorationSubsectionA.tsx` - Four Stages
10. `RestorationSubsectionB.tsx` - Gymnasium Foundation
11. `RestorationSubsectionC.tsx` - Poetic Stage

**Impact**: Removes ~235 lines from page.tsx

### Phase 4: Subsection Components (Part III: The Vision)
Extract conclusion subsections.

**New Components**:
12. `VisionSyllogismRecap.tsx` - Three-part logic display
13. `VisionWarriorPoet.tsx` - Warrior/Poet/Catholic cards
14. `VisionCallToAction.tsx` - Found/Join/Adapt CTAs

**Impact**: Removes ~90 lines from page.tsx

### Phase 5: Integration & Verification
Integrate all components into page.tsx and verify complete system.

**Tasks**:
- Update page.tsx with all new component imports
- Replace inline JSX with component calls
- Visual regression testing (screenshot comparison)
- Full test suite execution
- TypeScript compilation verification

---

## Expected Outcomes

### Before Refactoring
- page.tsx: ~1,795 lines
- Inline JSX: ~625+ lines
- Components: 6 extracted
- Tests: 268/271 passing
- Maintainability: Poor (long file, duplicated patterns)

### After Refactoring
- page.tsx: ~400 lines (78% reduction)
- Inline JSX: ~0 lines (100% extracted)
- Components: 20+ extracted (14 new + 6 existing)
- Tests: 350+/353 passing (80+ new tests)
- Maintainability: Excellent (clear hierarchy, reusable components)
- Reusability: High (CardGrid, SummaryBox, etc. usable elsewhere)
- DRY Principle: Achieved (no duplication)

---

## Component Specifications

### CardGrid Component
**Purpose**: Generic 3-column responsive card grid  
**Usage**: Three Poisons, Warrior Poet Vision, CTAs, Practical Examples  
**Props**: `cards[]`, `variant`, `columns`  
**Tests**: 20 tests (rendering, variants, responsive, accessibility)

### SummaryBox Component
**Purpose**: Bordered conclusion/summary boxes  
**Usage**: Crisis summary, Minor Premise summary, Syllogism recap  
**Props**: `variant`, `title`, `children`, `className`  
**Tests**: 15 tests (variants, theming, content rendering)

### EvidenceQuoteGroup Component
**Purpose**: Container for multiple evidence quotes  
**Usage**: All subsection evidence quote sections  
**Props**: `quotes[]`, `variant`, `title`  
**Tests**: 18 tests (quote rendering, variants, spacing)

### ComparisonDiagram Component
**Purpose**: Two-column flow diagram with arrows  
**Usage**: "The Poisoned Well" diagram  
**Props**: `title`, `leftColumn`, `rightColumn`  
**Tests**: 15 tests (layout, arrows, results, responsive)

### StudyGrid Component
**Purpose**: Two-column list comparison  
**Usage**: IHP Model study comparison  
**Props**: `title`, `description`, `leftColumn`, `rightColumn`, `footer`, `variant`  
**Tests**: 15 tests (columns, lists, theming)

### Subsection Components (11 total)
**Purpose**: Encapsulate each major/minor/conclusion subsection  
**Tests**: ~10 tests each (basic rendering, props, integration)  
**Total Tests**: ~110 tests

---

## Testing Strategy

### Unit Tests (New Components)
- Rendering tests (props, children, variants)
- Accessibility tests (ARIA labels, semantic HTML)
- Responsive behavior tests (mobile/desktop)
- Theme variant tests (crisis/restoration/vision)

### Integration Tests
- Page-level rendering after refactoring
- Component composition tests
- Props flow from page to subsections to patterns

### Visual Regression
- Screenshot before refactoring (baseline)
- Screenshot after refactoring (comparison)
- Manual verification of visual parity

### Verification Checklist
- [ ] TypeScript compilation clean (3 pre-existing errors only)
- [ ] All 268+ tests passing
- [ ] Visual parity maintained
- [ ] No console errors/warnings
- [ ] Accessibility preserved (ARIA, semantic HTML)
- [ ] Page performance maintained (<3s LCP)

---

## Risk Mitigation

### Risk 1: Visual Parity Breaks
**Mitigation**: Extract one component at a time, verify visual state after each extraction using dev server

### Risk 2: TypeScript Errors
**Mitigation**: Define interfaces first, use strict typing, run `tsc --noEmit` after each change

### Risk 3: Test Regressions
**Mitigation**: Run `npm test` after each component extraction, fix issues immediately before proceeding

### Risk 4: Context Loss
**Mitigation**: Use large context blocks in replace operations, verify git diffs carefully

### Risk 5: Performance Degradation
**Mitigation**: Monitor component render times, avoid unnecessary re-renders, use React.memo where appropriate

---

## Implementation Timeline

### Phase 1: Pattern Components (60 minutes)
- Prompt 19: CardGrid + SummaryBox components (30 min)
- Prompt 20: EvidenceQuoteGroup + ComparisonDiagram + StudyGrid (30 min)

### Phase 2: Crisis Subsections (45 minutes)
- Prompt 21: CrisisSubsectionA + B + C (45 min)

### Phase 3: Restoration Subsections (45 minutes)
- Prompt 22: RestorationSubsectionA + B + C (45 min)

### Phase 4: Vision Subsections (30 minutes)
- Prompt 23: VisionSyllogismRecap + WarriorPoet + CallToAction (30 min)

### Phase 5: Integration (30 minutes)
- Prompt 24: Update page.tsx, integrate all components, verify (30 min)

**Total Estimated Time**: ~3.5 hours

---

## Success Criteria

### Must Have (Phase 5 Complete)
✅ page.tsx reduced to ~400 lines  
✅ All inline JSX extracted to components  
✅ 0 new TypeScript errors  
✅ All existing tests passing  
✅ Visual parity maintained  
✅ Component hierarchy clear and logical

### Should Have
✅ 350+ tests passing (80+ new tests)  
✅ All new components tested  
✅ Reusable components documented  
✅ Accessibility preserved

### Nice to Have
✅ Performance improved (fewer re-renders)  
✅ Components usable in other pages  
✅ Pattern library established for future work

---

## Prompt Structure

Each prompt follows this structure:

1. **Goal**: Clear objective for the prompt
2. **Context**: What was done previously, what this builds on
3. **Specifications**: Detailed component specs (props, behavior, tests)
4. **Acceptance Criteria**: How to verify completion
5. **Next Steps**: What follows this prompt

---

## Post-Refactoring Benefits

### Developer Experience
- **Faster debugging**: Clear component boundaries
- **Easier modifications**: Change one component, not page.tsx
- **Better testing**: Isolated unit tests per component
- **Clear ownership**: Each component has single responsibility

### Code Quality
- **DRY principle**: No duplicated patterns
- **SOLID principles**: Single responsibility, open/closed
- **Maintainability**: Smaller files, clearer hierarchy
- **Scalability**: Easy to add new sections

### Future Work
- Components reusable in other pages (e.g., /schools, /engage)
- Pattern library for consistent UI
- Easier to implement Prompts 19-22 (Resources, CSS, Performance, Accessibility)
- Foundation for design system

---

## Notes

- All refactoring maintains visual parity (no user-facing changes)
- Existing tests remain unchanged (expect 268/271 passing throughout)
- TypeScript must remain clean (3 pre-existing errors acceptable)
- Git commits after each phase for easy rollback if needed
- Development server (`npm run dev`) should run throughout for visual verification

---

## Appendix: Component Dependency Graph

```
page.tsx
├─ SyllogismSection (existing)
│  ├─ CrisisSubsectionA (new)
│  │  ├─ ProblemSolutionPanel (existing)
│  │  ├─ EvidenceQuoteGroup (new)
│  │  │  └─ EvidenceQuote (existing)
│  │  └─ InteractiveStages (existing)
│  ├─ CrisisSubsectionB (new)
│  │  ├─ ProblemSolutionPanel (existing)
│  │  ├─ EvidenceQuoteGroup (new)
│  │  └─ CardGrid (new)
│  ├─ CrisisSubsectionC (new)
│  │  ├─ ProblemSolutionPanel (existing)
│  │  ├─ EvidenceQuoteGroup (new)
│  │  ├─ ComparisonDiagram (new)
│  │  ├─ CardGrid (new)
│  │  └─ SummaryBox (new)
│  ├─ RestorationSubsectionA (new)
│  │  ├─ InteractiveStages (existing)
│  │  └─ EvidenceQuoteGroup (new)
│  ├─ RestorationSubsectionB (new)
│  │  ├─ ProblemSolutionPanel (existing)
│  │  └─ EvidenceQuoteGroup (new)
│  ├─ RestorationSubsectionC (new)
│  │  ├─ StudyGrid (new)
│  │  ├─ EvidenceQuoteGroup (new)
│  │  └─ SummaryBox (new)
│  ├─ VisionSyllogismRecap (new)
│  │  └─ SummaryBox (new)
│  ├─ VisionWarriorPoet (new)
│  │  └─ CardGrid (new)
│  └─ VisionCallToAction (new)
│     └─ CardGrid (new)
│        └─ CTAButton (existing)
└─ CounterargumentAccordion (existing)
```

---

**End of Plan Document**
