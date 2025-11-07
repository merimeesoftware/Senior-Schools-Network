# Prompt 08: InteractiveStages Enhancement - Crisis Overlay

## Objective

Enhance the existing `<InteractiveStages>` component to add a "crisis" mode that shows modern education failures for each developmental stage.

---

## Enhancement Specification

### New Props

```typescript
interface InteractiveStagesProps {
  // Existing props...
  mode?: 'default' | 'crisis';
  showToggle?: boolean; // Allow user to switch between views
}
```

### Features to Add

1. **Crisis Overlay Mode**
   - Red/warning visual style
   - Show modern failures per stage:
     - **Nursery (0-7):** "Screen babysitting replaces outdoor wonder"
     - **Gymnasium (7-13):** "7 hrs/day screens destroy physical vitality"
     - **Poetic (13-17):** "STEM-first curriculum poisons the well"
     - **Spiritual (17+):** "Liturgical amnesia severs tradition"

2. **Toggle Between Views**
   - Optional toggle button: "View Crisis" / "View Solution"
   - Smooth transition between normal and crisis modes
   - Crisis mode uses muted red tones
   - Normal mode uses vibrant colors

3. **Visual Indicators**
   - Crisis icon (⚠️) for crisis mode
   - Shield icon (🛡️) for solution mode
   - Border color shifts red in crisis mode

---

## Implementation

**File:** `components/InteractiveStages.tsx`

### Enhanced Component

```typescript
'use client';

import { useState } from 'react';
import { StageBadge } from './StageBadge';

interface Stage {
  name: string;
  ageRange: string;
  description: string;
  crisisDescription?: string;
  color: string;
  crisisColor?: string;
}

interface InteractiveStagesProps {
  stages?: Stage[];
  mode?: 'default' | 'crisis';
  showToggle?: boolean;
  className?: string;
}

const defaultStages: Stage[] = [
  {
    name: 'Nursery',
    ageRange: '0-7',
    description: 'Wonder & sensory integration through nature, fairy tales, and song.',
    crisisDescription: 'Screen babysitting replaces outdoor wonder; artificial stimulation deadens natural curiosity.',
    color: 'bg-blue-100 border-blue-400',
    crisisColor: 'bg-red-100/50 border-red-600',
  },
  {
    name: 'Gymnasium',
    ageRange: '7-13',
    description: 'Physical vitality, adventure, and ordered habit through sport, Latin, and danger.',
    crisisDescription: '7 hrs/day screens destroy physical vitality; sedentary isolation replaces adventurous risk.',
    color: 'bg-green-100 border-green-400',
    crisisColor: 'bg-red-100/50 border-red-600',
  },
  {
    name: 'Poetic',
    ageRange: '13-17',
    description: 'Integrated learning: music, art, science rise from poetic soil.',
    crisisDescription: 'STEM-first curriculum poisons the well; specialized knowledge without poetic roots breeds alienation.',
    color: 'bg-purple-100 border-purple-400',
    crisisColor: 'bg-red-100/50 border-red-600',
  },
  {
    name: 'Spiritual',
    ageRange: '17+',
    description: 'Theological wisdom, liturgical rhythm, and lifelong restoration.',
    crisisDescription: 'Liturgical amnesia severs tradition; secularized education produces spiritual orphans.',
    color: 'bg-gold/20 border-gold',
    crisisColor: 'bg-red-100/50 border-red-600',
  },
];

export function InteractiveStages({
  stages = defaultStages,
  mode: initialMode = 'default',
  showToggle = false,
  className = '',
}: InteractiveStagesProps) {
  const [activeStage, setActiveStage] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<'default' | 'crisis'>(initialMode);

  const currentMode = showToggle ? viewMode : initialMode;

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Toggle Button */}
      {showToggle && (
        <div className="flex justify-center">
          <button
            onClick={() => setViewMode(viewMode === 'default' ? 'crisis' : 'default')}
            className={`
              px-6 py-3 rounded-lg font-semibold transition-all duration-300
              ${
                viewMode === 'crisis'
                  ? 'bg-red-100 text-red-900 border-2 border-red-600 hover:bg-red-200'
                  : 'bg-green-100 text-green-900 border-2 border-green-600 hover:bg-green-200'
              }
            `}
            aria-pressed={viewMode === 'crisis'}
          >
            <span className="inline-flex items-center gap-2">
              <span aria-hidden="true">{viewMode === 'crisis' ? '🛡️' : '⚠️'}</span>
              <span>{viewMode === 'crisis' ? 'View Solution' : 'View Crisis'}</span>
            </span>
          </button>
        </div>
      )}

      {/* Stage Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stages.map((stage, index) => {
          const isActive = activeStage === index;
          const colorClass = currentMode === 'crisis' ? stage.crisisColor : stage.color;
          const description =
            currentMode === 'crisis' && stage.crisisDescription
              ? stage.crisisDescription
              : stage.description;

          return (
            <button
              key={stage.name}
              onClick={() => setActiveStage(isActive ? null : index)}
              className={`
                p-6 rounded-lg border-2 text-left transition-all duration-300
                ${colorClass}
                ${isActive ? 'shadow-lg scale-105' : 'shadow hover:shadow-md'}
                focus:outline-none focus:ring-2 focus:ring-forest focus:ring-offset-2
              `}
              aria-expanded={isActive}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-playfair text-xl font-bold text-forest mb-1">
                    {stage.name}
                  </h3>
                  <StageBadge stage={stage.name} className="inline-block" />
                </div>
                <span
                  className="text-2xl"
                  aria-hidden="true"
                >
                  {currentMode === 'crisis' ? '⚠️' : '🛡️'}
                </span>
              </div>
              <p className="text-sm text-forest/70 mb-3">Ages {stage.ageRange}</p>
              <p
                className={`
                  text-base leading-relaxed text-charcoal/90
                  ${isActive ? 'block' : 'line-clamp-2'}
                `}
              >
                {description}
              </p>
            </button>
          );
        })}
      </div>

      {/* Mode Indicator */}
      {currentMode === 'crisis' && (
        <div className="text-center text-sm text-red-900 font-medium">
          <span aria-hidden="true">⚠️</span> Crisis Mode: Showing modern education failures
        </div>
      )}
    </div>
  );
}
```

---

## Usage Examples

### Default Mode (Existing)

```typescript
<InteractiveStages />
```

### Crisis Mode (Static)

```typescript
<InteractiveStages mode="crisis" />
```

### With Toggle (Interactive)

```typescript
<section className="py-16 bg-parchment-light">
  <ContentContainer>
    <SectionHeading
      title="The Education Crisis"
      subtitle="Modern schools have abandoned the developmental stages"
    />
    <InteractiveStages showToggle={true} />
  </ContentContainer>
</section>
```

### Within Major Premise Section

```typescript
<SyllogismSection variant="major-premise" number="I">
  <h2 className="font-playfair text-4xl font-bold text-forest mb-8">
    Major Premise: Modern Education Has Failed
  </h2>

  <ProblemSolutionPanel
    problemContent={
      <div className="space-y-6">
        <p className="text-lg leading-relaxed">
          The evidence is overwhelming. Across every developmental stage, modern education
          has poisoned the well...
        </p>
        <InteractiveStages mode="crisis" />
      </div>
    }
    solutionContent={
      <div className="space-y-6">
        <p className="text-lg leading-relaxed">
          But the antidote exists: Senior's four stages restore the natural order...
        </p>
        <InteractiveStages mode="default" />
      </div>
    }
    layout="split"
  />
</SyllogismSection>
```

---

## Testing Checklist

### Visual Design
- [ ] Crisis mode shows red borders/backgrounds
- [ ] Default mode shows vibrant colors
- [ ] Icons change based on mode (⚠️ vs 🛡️)
- [ ] Toggle button changes color/text
- [ ] Smooth transitions between modes
- [ ] Crisis descriptions display correctly

### Interactivity
- [ ] Toggle switches between modes
- [ ] Click expands/collapses stage cards
- [ ] Only one card expanded at a time
- [ ] Hover states work
- [ ] Focus visible on cards and toggle

### Accessibility
- [ ] Toggle button has aria-pressed
- [ ] Stage cards have aria-expanded
- [ ] Icons have aria-hidden
- [ ] Mode indicator visible to screen readers
- [ ] Keyboard navigation works (Tab, Enter, Space)

### Integration
- [ ] Works with existing InteractiveStages usage
- [ ] Crisis mode can be static or toggleable
- [ ] Integrates with SyllogismSection
- [ ] Works inside ProblemSolutionPanel
- [ ] Stage colors match brand palette

---

## Acceptance Criteria

- ✅ Crisis mode shows red-tinted warnings
- ✅ Toggle switches between crisis/solution views
- ✅ Crisis descriptions accurate per stage
- ✅ Default behavior unchanged
- ✅ Accessible and keyboard-navigable

---

**Next:** Prompt 09: RotatingQuotes Enhancement (argumentative mode)

**Estimated Time:** 2 hours  
**Complexity:** Medium  
**Dependencies:** InteractiveStages (existing), StageBadge
