# Philosophy Page Components

This directory contains subsection components for the philosophy page syllogistic argument.

## Structure

### Crisis Subsections (Part I: Major Premise)
- **CrisisSubsectionA.tsx** - Loss of Wonder & Sensory Integration
  - Uses: ProblemSolutionPanel, EvidenceQuoteGroup, InteractiveStages
  - Tests: 11 passing tests
  
- **CrisisSubsectionB.tsx** - Cultural Softness & the Gymnasium Crisis
  - Uses: ProblemSolutionPanel, EvidenceQuoteGroup, CardGrid
  - Tests: 10 passing tests
  
- **CrisisSubsectionC.tsx** - The Specialized Knowledge Crisis
  - Uses: ProblemSolutionPanel, EvidenceQuoteGroup, ComparisonDiagram, CardGrid, SummaryBox
  - Tests: 14 passing tests

### Restoration Subsections (Part II: Minor Premise)
- **RestorationSubsectionA.tsx** - The Four Stages of Restoration
  - Uses: InteractiveStages, EvidenceQuoteGroup
  - Tests: 10 passing tests
  
- **RestorationSubsectionB.tsx** - The Gymnasium Stage: Foundation for Warriors
  - Uses: ProblemSolutionPanel, EvidenceQuoteGroup
  - Tests: 10 passing tests
  
- **RestorationSubsectionC.tsx** - The Poetic Stage: Integrated Learning
  - Uses: StudyGrid, EvidenceQuoteGroup, SummaryBox
  - Tests: 12 passing tests

### Vision Subsections (Part III: Conclusion)
- **VisionSyllogismRecap.tsx** - Complete argument recap (I + II = ∴ III)
  - Displays color-coded syllogism summary
  - Tests: 10 passing tests
  
- **VisionWarriorPoet.tsx** - Warrior/Poet/Catholic definition cards
  - Uses: CardGrid with 3 cards
  - Tests: 10 passing tests
  
- **VisionCallToAction.tsx** - Found/Join/Adapt CTAs
  - Uses: CardGrid with CTAButton actions
  - Tests: 12 passing tests

## Pattern Components Used

All subsections utilize pattern components from the root `/components` directory:
- **CardGrid** - Responsive 2-3 column card grids with variant theming
- **SummaryBox** - Conclusion boxes with variant-specific styling
- **EvidenceQuoteGroup** - Evidence quote containers with heading
- **ComparisonDiagram** - Two-column flow diagrams with arrows
- **StudyGrid** - Two-column list comparisons

## Barrel Exports

For cleaner imports, use barrel exports:

```typescript
// Import Crisis subsections
import { CrisisSubsectionA, CrisisSubsectionB, CrisisSubsectionC } 
  from '@/components/philosophy/CrisisSubsections';

// Import Restoration subsections
import { RestorationSubsectionA, RestorationSubsectionB, RestorationSubsectionC } 
  from '@/components/philosophy/RestorationSubsections';

// Import Vision subsections
import { VisionSyllogismRecap, VisionWarriorPoet, VisionCallToAction } 
  from '@/components/philosophy/VisionSubsections';
```

## Testing

Each component has a corresponding test file in `__tests__/` directory.

Run all subsection tests:
```bash
npm test -- CrisisSubsection RestorationSubsection Vision
```

Run specific subsection tests:
```bash
npm test -- CrisisSubsectionA
npm test -- RestorationSubsectionB
npm test -- VisionCallToAction
```

## Architecture

### Component Hierarchy
```
page.tsx (897 lines)
├── SyllogismSection (Part I: Crisis)
│   ├── CrisisSubsectionA
│   ├── CrisisSubsectionB
│   └── CrisisSubsectionC
├── SyllogismSection (Part II: Restoration)
│   ├── RestorationSubsectionA
│   ├── RestorationSubsectionB
│   └── RestorationSubsectionC
└── SyllogismSection (Part III: Vision)
    ├── VisionSyllogismRecap
    ├── VisionWarriorPoet
    ├── CounterargumentAccordion (inline)
    └── VisionCallToAction
```

### Code Reduction
- **Before refactoring**: page.tsx = 1,758 lines
- **After refactoring**: page.tsx = 897 lines
- **Reduction**: 861 lines (49%)
- **Components created**: 9 subsection components
- **Tests added**: 99 tests (all passing)

## Design Principles

1. **Single Responsibility**: Each component handles one subsection
2. **Composition**: Components compose pattern components for consistency
3. **Variant Theming**: All components accept optional `className` prop
4. **Testing**: Comprehensive test coverage with mocking
5. **TypeScript**: Full type safety with interfaces
6. **Documentation**: JSDoc comments on all components

## Maintenance

When updating subsections:
1. Edit the component file directly
2. Update corresponding test file
3. Verify visual parity with `npm run dev`
4. Run tests with `npm test -- [ComponentName]`
5. Check TypeScript with `npx tsc --noEmit`

## Future Enhancements

- Consider extracting CounterargumentAccordion objections to separate data file
- Add loading states for async content
- Implement error boundaries for resilience
- Add animation variants for subsection transitions
