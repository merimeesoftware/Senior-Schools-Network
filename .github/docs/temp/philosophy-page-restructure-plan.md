# Philosophy Page Restructure Plan
**Senior Schools Network - Compact Flow Implementation**

---

## Executive Summary

The Philosophy page presents a compelling syllogistic argument for poetic knowledge and the gymnasium stage, but suffers from excessive vertical scrolling that creates user fatigue. This plan implements **content density optimization** and **progressive disclosure** to reduce page height by ~50-60% while preserving all philosophical content.

**Approved Changes**:
- ✅ Phase 2: Content Density Optimization (All approved)
- ✅ Phase 3: Smart Component Consolidation (All approved except quote optimization)
- ✅ Phase 4: Progressive Disclosure (Option B approved)
- ❌ Phase 1: Vertical Spacing Reduction (All rejected)

**Rejected**:
- ❌ Hero section height reduction
- ❌ Padding/spacing reductions
- ❌ Quote display optimizations

**Timeline**: 3 implementation phases over 4-6 hours

**Last Updated**: November 10, 2025  
**Status**: Ready for Implementation  

---

## Table of Contents

1. [Current State Assessment](#current-state-assessment)
2. [Approved Changes Summary](#approved-changes-summary)
3. [Phase 2: Content Density Optimization](#phase-2-content-density-optimization)
4. [Phase 3: Smart Component Consolidation](#phase-3-smart-component-consolidation)
5. [Phase 4: Progressive Disclosure](#phase-4-progressive-disclosure)
6. [Implementation Prompts](#implementation-prompts)
7. [Testing & Validation](#testing--validation)
8. [Success Metrics](#success-metrics)

---

## Current State Assessment

### Page Structure (Current)

```
├── Hero Section (min-h-screen = ~100vh)
│   └── Title + Rotating Quotes
│
├── Syllogism Preview Cards (py-20 = ~20vh)
│   ├── Card 1: Crisis
│   ├── Card 2: Restoration
│   └── Card 3: Vision
│
├── Progress Indicator (sticky-side)
│
├── PART I: CRISIS (py-20 per section)
│   ├── SyllogismSection wrapper (~10vh)
│   ├── Subsection A: Loss of Wonder (~60vh)
│   │   ├── ProblemSolutionPanel (split layout)
│   │   ├── EvidenceQuoteGroup (3-4 quotes)
│   │   └── InteractiveStages (crisis mode)
│   ├── Subsection B: Gymnasium Crisis (~60vh)
│   │   ├── ProblemSolutionPanel
│   │   └── EvidenceQuoteGroup
│   └── Subsection C: Specialization (~80vh)
│       ├── ProblemSolutionPanel
│       ├── EvidenceQuoteGroup
│       ├── ComparisonDiagram
│       ├── CardGrid (3 poisons)
│       └── SummaryBox
│
├── PART II: RESTORATION (py-20 per section)
│   ├── SyllogismSection wrapper
│   ├── Subsection A: Four Stages (~50vh)
│   │   ├── InteractiveStages (default mode)
│   │   └── EvidenceQuoteGroup
│   ├── Subsection B: Gymnasium Foundation (~60vh)
│   │   ├── ProblemSolutionPanel
│   │   └── EvidenceQuoteGroup
│   └── Subsection C: Poetic Foundation (~60vh)
│       ├── Content descriptions
│       └── EvidenceQuoteGroup
│
├── PART III: VISION (py-20 per section)
│   ├── SyllogismSection wrapper
│   ├── VisionSyllogismRecap
│   ├── VisionWarriorPoet
│   ├── CounterargumentAccordion (3 objections)
│   └── VisionCallToAction
│
└── Scripture Waypoints (py-16)
    └── 3 Quote Cards
```

**Estimated Current Height**: 15,000-18,000px

### Content Strengths (Preserve)
- ✅ Clear syllogistic argument structure (I, II, ∴)
- ✅ Problem/Solution framework in each subsection
- ✅ Source attribution and evidence grounding
- ✅ Visual hierarchy with color-coding (red/green/gold)
- ✅ Progress indicator navigation
- ✅ Philosophical depth and scholarly tone

### Pain Points (Fix)
- ❌ 9 subsections stacked vertically (A/B/C × 3 sections)
- ❌ Repetitive EvidenceQuoteGroup pattern (appears 8 times)
- ❌ InteractiveStages appears twice with slight variations
- ❌ ProblemSolutionPanel split layout pushes content vertically
- ❌ Long scroll creates fatigue before reaching conclusion

---

## Approved Changes Summary

### Phase 2: Content Density Optimization ✅

1. **Collapsible Evidence Sections** ✅
   - Convert all `EvidenceQuoteGroup` components to accordion format
   - Default: collapsed with "View Evidence from Sources" button
   - Saves ~400-600px per subsection (8 instances = 3,200-4,800px saved)

2. **Tabbed Subsections** ✅
   - Replace vertical stack of A/B/C subsections with tab interface
   - One tab per subsection within each major section (Crisis, Restoration, Vision)
   - Saves ~2,000-3,000px per major section (6,000-9,000px total)

3. **Compact ProblemSolutionPanel** ✅
   - Convert from always-visible split to accordion/expandable format
   - Show headline + CTA, expand for full content
   - Saves ~200-300px per instance (5 instances = 1,000-1,500px saved)

### Phase 3: Smart Component Consolidation ✅

4. **Merge Duplicate InteractiveStages** ✅
   - Show once with mode toggle (crisis/restoration tabs)
   - Remove duplicate from CrisisSubsectionA
   - Saves ~400-500px

5. **Summary Components Optimization** ✅
   - Move "Summary: The Three Poisons" to top of Crisis section as TL;DR
   - Convert to compact callout instead of full-width section
   - Reduce CardGrid spacing
   - Saves ~200-300px

6. **Quote Display Consolidation** ❌ REJECTED
   - User explicitly rejected optimizing quote displays
   - Keep all existing quote formatting

### Phase 4: Progressive Disclosure (Option B) ✅

7. **Summary/Headline First Approach**
   - Show section summaries and key headlines initially
   - "Read Full Argument" button expands detailed content
   - Collapsible sections preserve scanability
   - Saves ~40-50% of initial visible height

---

## Phase 2: Content Density Optimization

### 2.1 Collapsible Evidence Sections

**Component**: New `components/CollapsibleEvidenceQuotes.tsx`

**Features**:
- Collapsed by default with count indicator
- Smooth expand/collapse animation
- Accessible keyboard navigation
- Preserves all quote content

**Implementation**:

```typescript
'use client';
import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import EvidenceQuoteGroup from './EvidenceQuoteGroup';

interface CollapsibleEvidenceQuotesProps {
  title?: string;
  quotes: Array<{
    quote: string;
    author: string;
    source: string;
    showSourceLink?: boolean;
    sourceSlug?: string;
  }>;
  variant?: 'major-premise' | 'minor-premise' | 'conclusion';
}

export default function CollapsibleEvidenceQuotes({
  title = "Evidence from the Sources",
  quotes,
  variant = 'major-premise'
}: CollapsibleEvidenceQuotesProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border-l-4 border-forest/20 pl-6 py-4">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-between w-full text-left group focus-visible-ring rounded-lg p-2 hover:bg-parchment/30 transition-colors"
        aria-expanded={isExpanded}
      >
        <div className="flex items-center gap-3">
          <span className="text-lg font-playfair font-semibold text-forest">
            {title}
          </span>
          <span className="text-sm text-charcoal/60">
            ({quotes.length} {quotes.length === 1 ? 'source' : 'sources'})
          </span>
        </div>
        {isExpanded ? (
          <ChevronUpIcon className="w-5 h-5 text-forest" />
        ) : (
          <ChevronDownIcon className="w-5 h-5 text-forest group-hover:translate-y-0.5 transition-transform" />
        )}
      </button>

      {isExpanded && (
        <div className="mt-6 animate-fadeIn">
          <EvidenceQuoteGroup
            variant={variant}
            title="" // Already shown in button
            quotes={quotes}
          />
        </div>
      )}
    </div>
  );
}
```

**Usage** (Replace all `EvidenceQuoteGroup` instances):

```typescript
// Before:
<EvidenceQuoteGroup
  variant="major-premise"
  title="Evidence from the Sources"
  quotes={[...]}
/>

// After:
<CollapsibleEvidenceQuotes
  variant="major-premise"
  quotes={[...]}
/>
```

**CSS Addition** (globals.css):

```css
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.3s ease-out;
}
```

---

### 2.2 Tabbed Subsections

**Component**: New `components/SubsectionTabs.tsx`

**Features**:
- Tab interface for A/B/C subsections
- Keyboard navigation (arrow keys)
- Color-coded by section type (crisis/restoration/vision)
- Preserves all subsection content

**Implementation**:

```typescript
'use client';
import { useState } from 'react';

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface SubsectionTabsProps {
  tabs: Tab[];
  variant: 'crisis' | 'restoration' | 'vision';
  className?: string;
}

export default function SubsectionTabs({
  tabs,
  variant,
  className = ''
}: SubsectionTabsProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || '');

  const variantStyles = {
    crisis: {
      tabActive: 'bg-red-100 text-red-900 border-red-700',
      tabInactive: 'text-red-700/70 hover:bg-red-50',
      contentBorder: 'border-red-700/30'
    },
    restoration: {
      tabActive: 'bg-green-100 text-green-900 border-green-700',
      tabInactive: 'text-green-700/70 hover:bg-green-50',
      contentBorder: 'border-green-700/30'
    },
    vision: {
      tabActive: 'bg-gold/20 text-gold-dark border-gold',
      tabInactive: 'text-gold-dark/70 hover:bg-gold/10',
      contentBorder: 'border-gold/60'
    }
  };

  const styles = variantStyles[variant];
  const currentTab = tabs.find(t => t.id === activeTab);

  return (
    <div className={className}>
      {/* Tab List */}
      <div 
        role="tablist" 
        className="flex flex-wrap gap-2 mb-8 border-b-2 pb-2"
        style={{ borderColor: 'var(--tw-border-opacity)' }}
      >
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls={`panel-${tab.id}`}
            id={`tab-${tab.id}`}
            onClick={() => setActiveTab(tab.id)}
            className={`
              px-6 py-3 rounded-t-lg font-lato font-medium text-base
              transition-all duration-200 focus-visible-ring
              border-b-4
              ${activeTab === tab.id ? styles.tabActive : `${styles.tabInactive} border-transparent`}
            `}
          >
            <span className="mr-2 font-playfair text-lg">
              {String.fromCharCode(65 + index)}.
            </span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Panel */}
      <div
        role="tabpanel"
        id={`panel-${activeTab}`}
        aria-labelledby={`tab-${activeTab}`}
        className={`border-l-4 ${styles.contentBorder} pl-8 animate-fadeIn`}
      >
        {currentTab?.content}
      </div>
    </div>
  );
}
```

**Usage** (Wrap subsections in each SyllogismSection):

```typescript
// In page.tsx - PART I: CRISIS
<SyllogismSection 
  type="major" 
  title="The Crisis: Modern Education Has Failed"
  subtitle="Three poisons—screens, softness, specialization—have destroyed the gymnasium stage and with it, the foundation for all higher learning."
  number="I" 
  id="major-premise"
>
  <div className="max-w-6xl mx-auto">
    <SubsectionTabs
      variant="crisis"
      tabs={[
        {
          id: 'loss-of-wonder',
          label: 'Loss of Wonder & Sensory Integration',
          content: <CrisisSubsectionA />
        },
        {
          id: 'gymnasium-crisis',
          label: 'Cultural Softness & Gymnasium Crisis',
          content: <CrisisSubsectionB />
        },
        {
          id: 'specialization',
          label: 'The Specialized Knowledge Crisis',
          content: <CrisisSubsectionC />
        }
      ]}
    />
  </div>
</SyllogismSection>
```

---

### 2.3 Compact ProblemSolutionPanel

**Component**: Enhance existing `components/ProblemSolutionPanel.tsx`

**New Prop**: `collapsible?: boolean`

**Implementation**:

```typescript
'use client';
import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import EvidenceQuote from './EvidenceQuote';

interface ProblemSolutionPanelProps {
  layout: 'split' | 'stacked';
  problem: {
    title: string;
    description: string;
    quote?: QuoteData;
  };
  solution: {
    title: string;
    description: string;
    quote?: QuoteData;
  };
  className?: string;
  collapsible?: boolean; // NEW PROP
}

export default function ProblemSolutionPanel({
  layout = 'split',
  problem,
  solution,
  className = '',
  collapsible = false
}: ProblemSolutionPanelProps) {
  const [isProblemExpanded, setIsProblemExpanded] = useState(!collapsible);
  const [isSolutionExpanded, setIsSolutionExpanded] = useState(!collapsible);

  // If not collapsible, render original split layout
  if (!collapsible) {
    return (
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${className}`}>
        {/* Original implementation */}
      </div>
    );
  }

  // Collapsible version
  return (
    <div className={`space-y-6 ${className}`}>
      {/* Problem - Collapsible */}
      <div className="border-l-4 border-red-700 pl-6 bg-red-50/50 rounded-r-lg">
        <button
          onClick={() => setIsProblemExpanded(!isProblemExpanded)}
          className="flex items-center justify-between w-full text-left py-4 group focus-visible-ring rounded-lg"
          aria-expanded={isProblemExpanded}
        >
          <h4 className="text-2xl font-playfair font-bold text-red-900">
            {problem.title}
          </h4>
          {isProblemExpanded ? (
            <ChevronUpIcon className="w-6 h-6 text-red-700 flex-shrink-0" />
          ) : (
            <ChevronDownIcon className="w-6 h-6 text-red-700 flex-shrink-0 group-hover:translate-y-0.5 transition-transform" />
          )}
        </button>

        {isProblemExpanded && (
          <div className="pb-4 animate-fadeIn">
            <p className="text-base text-charcoal/90 leading-relaxed mb-6">
              {problem.description}
            </p>
            {problem.quote && (
              <EvidenceQuote
                quote={problem.quote.quote}
                author={problem.quote.author}
                source={problem.quote.source}
                category={problem.quote.category}
                variant="inline"
              />
            )}
          </div>
        )}
      </div>

      {/* Solution - Collapsible */}
      <div className="border-l-4 border-green-700 pl-6 bg-green-50/50 rounded-r-lg">
        <button
          onClick={() => setIsSolutionExpanded(!isSolutionExpanded)}
          className="flex items-center justify-between w-full text-left py-4 group focus-visible-ring rounded-lg"
          aria-expanded={isSolutionExpanded}
        >
          <h4 className="text-2xl font-playfair font-bold text-green-900">
            {solution.title}
          </h4>
          {isSolutionExpanded ? (
            <ChevronUpIcon className="w-6 h-6 text-green-700 flex-shrink-0" />
          ) : (
            <ChevronDownIcon className="w-6 h-6 text-green-700 flex-shrink-0 group-hover:translate-y-0.5 transition-transform" />
          )}
        </button>

        {isSolutionExpanded && (
          <div className="pb-4 animate-fadeIn">
            <p className="text-base text-charcoal/90 leading-relaxed mb-6">
              {solution.description}
            </p>
            {solution.quote && (
              <EvidenceQuote
                quote={solution.quote.quote}
                author={solution.quote.author}
                source={solution.quote.source}
                category={solution.quote.category}
                variant="inline"
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
```

**Usage** (Add collapsible prop):

```typescript
<ProblemSolutionPanel
  layout="split"
  collapsible={true} // NEW
  problem={{...}}
  solution={{...}}
/>
```

---

## Phase 3: Smart Component Consolidation

### 3.1 Merge Duplicate InteractiveStages

**Component**: Enhance existing `components/InteractiveStages.tsx`

**New Feature**: Mode toggle within single instance

**Implementation**:

```typescript
'use client';
import { useState } from 'react';
import StageBadge from './StageBadge';

type ViewMode = 'default' | 'crisis';

interface InteractiveStagesProps {
  mode?: ViewMode;
  allowModeToggle?: boolean; // NEW PROP
  className?: string;
}

export default function InteractiveStages({
  mode: initialMode = 'default',
  allowModeToggle = false,
  className = ''
}: InteractiveStagesProps) {
  const [selectedStage, setSelectedStage] = useState<StageKey>('nursery');
  const [viewMode, setViewMode] = useState<ViewMode>(initialMode);

  // Stage data for both modes...
  const stageData = viewMode === 'crisis' ? crisisStageData : defaultStageData;

  return (
    <div className={`space-y-8 ${className}`}>
      {/* Mode Toggle (if enabled) */}
      {allowModeToggle && (
        <div className="flex justify-center mb-6">
          <div className="inline-flex rounded-lg border-2 border-forest/20 p-1 bg-parchment/50">
            <button
              onClick={() => setViewMode('default')}
              className={`
                px-6 py-2 rounded-md font-lato font-medium text-sm transition-all
                ${viewMode === 'default' 
                  ? 'bg-green-700 text-white shadow-md' 
                  : 'text-charcoal/70 hover:text-forest'
                }
              `}
            >
              <span className="mr-2">✨</span>
              Restoration View
            </button>
            <button
              onClick={() => setViewMode('crisis')}
              className={`
                px-6 py-2 rounded-md font-lato font-medium text-sm transition-all
                ${viewMode === 'crisis' 
                  ? 'bg-red-700 text-white shadow-md' 
                  : 'text-charcoal/70 hover:text-forest'
                }
              `}
            >
              <span className="mr-2">⚠️</span>
              Crisis View
            </button>
          </div>
        </div>
      )}

      {/* Existing stage badges and content panel */}
      <div className="flex flex-wrap justify-center gap-4">
        {/* ... existing badge rendering ... */}
      </div>

      <div className={`${currentStage.bgColor} ...`}>
        {/* ... existing content panel ... */}
      </div>
    </div>
  );
}
```

**Usage**:

```typescript
// In RestorationSubsectionA - keep with toggle
<InteractiveStages 
  mode="default" 
  allowModeToggle={true} 
/>

// In CrisisSubsectionA - REMOVE entirely
// (Content moved to toggle in RestorationSubsectionA)
```

---

### 3.2 Summary Components Optimization

**Change 1**: Move "Summary: The Three Poisons" to top of Crisis section

```typescript
// In page.tsx - PART I: CRISIS
<SyllogismSection 
  type="major" 
  title="The Crisis: Modern Education Has Failed"
  subtitle="Three poisons—screens, softness, specialization—have destroyed the gymnasium stage and with it, the foundation for all higher learning."
  number="I" 
  id="major-premise"
>
  <div className="max-w-6xl mx-auto space-y-8">
    {/* MOVE THIS FROM CrisisSubsectionC to top */}
    <div className="bg-red-50 border-l-4 border-red-700 p-6 rounded-r-lg">
      <h3 className="font-playfair text-2xl font-bold text-red-900 mb-4">
        Summary: The Three Poisons
      </h3>
      <p className="text-base text-charcoal/90 mb-6">
        Modern education has systematically destroyed the gymnasium and poetic stages through three interconnected failures:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="text-center p-4 bg-white rounded-lg">
          <div className="text-4xl mb-2">📱</div>
          <div className="font-playfair font-bold text-red-900 mb-1">Screens</div>
          <div className="text-sm text-charcoal/70">Replace wonder & sensory integration</div>
        </div>
        <div className="text-center p-4 bg-white rounded-lg">
          <div className="text-4xl mb-2">🛡️</div>
          <div className="font-playfair font-bold text-red-900 mb-1">Softness</div>
          <div className="text-sm text-charcoal/70">Replace risk & physical discipline</div>
        </div>
        <div className="text-center p-4 bg-white rounded-lg">
          <div className="text-4xl mb-2">🔬</div>
          <div className="font-playfair font-bold text-red-900 mb-1">Specialization</div>
          <div className="text-sm text-charcoal/70">Replace integrated poetic knowledge</div>
        </div>
      </div>
    </div>

    {/* Then tabbed subsections */}
    <SubsectionTabs variant="crisis" tabs={[...]} />
  </div>
</SyllogismSection>
```

**Change 2**: Reduce CardGrid spacing in CrisisSubsectionC

```typescript
// In CrisisSubsectionC.tsx - REMOVE the CardGrid entirely since moved to summary
// Keep only the ComparisonDiagram and final SummaryBox
```

---

## Phase 4: Progressive Disclosure (Option B)

### 4.1 Summary-First Approach

**Implementation Strategy**:
- Each subsection shows a compact summary initially
- "Read Full Argument" button expands to show full ProblemSolutionPanel
- Evidence quotes remain collapsible
- Tab interface preserved for navigation

**Component**: Enhance subsection components with summary mode

**Example - CrisisSubsectionA.tsx**:

```typescript
'use client';
import { useState } from 'react';
import ProblemSolutionPanel from "@/components/ProblemSolutionPanel";
import CollapsibleEvidenceQuotes from "@/components/CollapsibleEvidenceQuotes";
import InteractiveStages from "@/components/InteractiveStages";

interface CrisisSubsectionAProps {
  className?: string;
  summaryMode?: boolean; // NEW PROP
}

export function CrisisSubsectionA({ 
  className = '',
  summaryMode = true // Default to summary
}: CrisisSubsectionAProps) {
  const [isExpanded, setIsExpanded] = useState(!summaryMode);

  if (!isExpanded) {
    return (
      <div className={`space-y-6 ${className}`}>
        {/* Compact Summary */}
        <div className="bg-parchment/30 border-l-4 border-red-700 p-6 rounded-r-lg">
          <h3 className="font-playfair text-3xl font-bold text-red-900 mb-3">
            A. Loss of Wonder & Sensory Integration
          </h3>
          <p className="text-lg text-charcoal/80 leading-relaxed mb-4">
            Screen addiction (7 hours/day) has replaced outdoor wonder. Boys who have never climbed trees or felt physical risk cannot develop the connaturality with reality that Senior calls "poetic knowledge." The solution: nature immersion and "benevolent neglect" that restores sensory integration.
          </p>
          <button
            onClick={() => setIsExpanded(true)}
            className="flex items-center gap-2 text-forest font-medium hover:text-gold transition-colors focus-visible-ring rounded-lg px-4 py-2"
          >
            <span>Read Full Argument</span>
            <ChevronDownIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    );
  }

  // Full expanded version
  return (
    <div id="major-premise-a" className={`space-y-12 ${className}`}>
      {/* Collapse button at top */}
      <button
        onClick={() => setIsExpanded(false)}
        className="flex items-center gap-2 text-charcoal/70 hover:text-forest text-sm font-medium transition-colors focus-visible-ring rounded-lg px-3 py-1.5"
      >
        <ChevronUpIcon className="w-4 h-4" />
        <span>Collapse</span>
      </button>

      <h3 className="font-playfair text-4xl font-bold text-red-900">
        A. Loss of Wonder & Sensory Integration
      </h3>

      <ProblemSolutionPanel
        layout="split"
        collapsible={false} // Already using progressive disclosure
        problem={{...}}
        solution={{...}}
      />

      <CollapsibleEvidenceQuotes
        variant="major-premise"
        quotes={[...]}
      />

      <div className="space-y-6">
        <h4 className="font-playfair text-2xl font-bold text-forest text-center">
          Where the Crisis Hits
        </h4>
        <InteractiveStages mode="crisis" />
        <p className="text-center text-sm text-charcoal/70 italic">
          Click each stage to see the modern failure
        </p>
      </div>
    </div>
  );
}
```

**Apply to all subsection components**:
- CrisisSubsectionA, B, C
- RestorationSubsectionA, B, C
- Vision subsections (VisionSyllogismRecap, VisionWarriorPoet)

---

## Implementation Prompts

### Prompt 1: Create Collapsible Evidence Component

**File**: `c:\Users\micha\DevProjects\Senior-Schools-Network\.github\prompts\philosophy-v1-syllogistic\01-collapsible-evidence.md`

```markdown
# Prompt 1: Create Collapsible Evidence Component

## Objective
Create a new `CollapsibleEvidenceQuotes` component that wraps the existing `EvidenceQuoteGroup` in a collapsible accordion interface.

## Requirements

1. **New Component**: `components/CollapsibleEvidenceQuotes.tsx`
   - Client component ('use client')
   - Accepts same props as EvidenceQuoteGroup
   - Collapsed by default
   - Shows quote count in collapsed state
   - Smooth expand/collapse animation
   - Accessible keyboard navigation

2. **Implementation Details**:
   - Use useState for collapse state
   - Chevron icon indicates expand/collapse state
   - Focus ring for accessibility
   - Fade-in animation on expand
   - Border-left accent matching section variant

3. **CSS Addition** to `app/globals.css`:
   - @keyframes fadeIn animation
   - .animate-fadeIn class

4. **Replace All Instances**:
   - Find all `<EvidenceQuoteGroup />` in philosophy subsection files
   - Replace with `<CollapsibleEvidenceQuotes />`
   - Update imports

## Files to Modify
- [ ] Create: `components/CollapsibleEvidenceQuotes.tsx`
- [ ] Update: `app/globals.css` (add fadeIn animation)
- [ ] Update: `components/philosophy/CrisisSubsectionA.tsx`
- [ ] Update: `components/philosophy/CrisisSubsectionB.tsx`
- [ ] Update: `components/philosophy/CrisisSubsectionC.tsx`
- [ ] Update: `components/philosophy/RestorationSubsectionA.tsx`
- [ ] Update: `components/philosophy/RestorationSubsectionB.tsx`
- [ ] Update: `components/philosophy/RestorationSubsectionC.tsx`

## Success Criteria
- [ ] All EvidenceQuoteGroup instances wrapped in collapsible
- [ ] Smooth animations work
- [ ] Keyboard accessible
- [ ] Page height reduced by ~3,200-4,800px

## Code Reference
See "Phase 2.1: Collapsible Evidence Sections" in philosophy-page-restructure-plan.md
```

### Prompt 2: Create Tabbed Subsections Component

**File**: `c:\Users\micha\DevProjects\Senior-Schools-Network\.github\prompts\philosophy-v1-syllogistic\02-tabbed-subsections.md`

```markdown
# Prompt 2: Create Tabbed Subsections Component

## Objective
Create a new `SubsectionTabs` component that converts vertical A/B/C subsection stacks into horizontal tab interfaces.

## Requirements

1. **New Component**: `components/SubsectionTabs.tsx`
   - Client component ('use client')
   - Tab list with A/B/C labels
   - Keyboard navigation (arrow keys)
   - Color-coded by variant (crisis/restoration/vision)
   - Smooth panel transitions

2. **Implementation Details**:
   - ARIA roles: tablist, tab, tabpanel
   - Letter prefix (A., B., C.) for each tab
   - Active tab highlighted with color-specific styling
   - Content panel has colored left border
   - Fade-in animation on tab change

3. **Integration**:
   - Wrap subsections in each SyllogismSection
   - Create tabs array with id/label/content
   - Pass subsection components as tab content
   - Apply correct variant prop

## Files to Modify
- [ ] Create: `components/SubsectionTabs.tsx`
- [ ] Update: `app/(site)/philosophy/page.tsx` (3 SyllogismSection wrappers)

## Success Criteria
- [ ] Crisis section has 3 tabs (A/B/C)
- [ ] Restoration section has 3 tabs (A/B/C)
- [ ] Vision section tabs work (if applicable)
- [ ] Keyboard navigation functional
- [ ] Page height reduced by ~6,000-9,000px

## Code Reference
See "Phase 2.2: Tabbed Subsections" in philosophy-page-restructure-plan.md
```

### Prompt 3: Add Collapsible Mode to ProblemSolutionPanel

**File**: `c:\Users\micha\DevProjects\Senior-Schools-Network\.github\prompts\philosophy-v1-syllogistic\03-collapsible-problem-solution.md`

```markdown
# Prompt 3: Add Collapsible Mode to ProblemSolutionPanel

## Objective
Enhance the existing `ProblemSolutionPanel` component with an optional collapsible mode.

## Requirements

1. **Enhance Component**: `components/ProblemSolutionPanel.tsx`
   - Add new prop: `collapsible?: boolean` (default: false)
   - When false: render original split/stacked layout
   - When true: render collapsible accordion layout
   - Separate collapse state for Problem and Solution

2. **Implementation Details**:
   - Problem section: red border, red heading, red chevron
   - Solution section: green border, green heading, green chevron
   - Collapsed by default when collapsible=true
   - Smooth expand/collapse animations
   - Preserve all existing quote display

3. **Update Usage**:
   - Add `collapsible={true}` to all ProblemSolutionPanel instances
   - Keep all other props unchanged

## Files to Modify
- [ ] Update: `components/ProblemSolutionPanel.tsx`
- [ ] Update: All subsection files using ProblemSolutionPanel (add collapsible prop)

## Success Criteria
- [ ] Collapsible mode works without breaking non-collapsible
- [ ] Problem and Solution independently collapsible
- [ ] Animations smooth
- [ ] Page height reduced by ~1,000-1,500px

## Code Reference
See "Phase 2.3: Compact ProblemSolutionPanel" in philosophy-page-restructure-plan.md
```

### Prompt 4: Merge Duplicate InteractiveStages

**File**: `c:\Users\micha\DevProjects\Senior-Schools-Network\.github\prompts\philosophy-v1-syllogistic\04-merge-interactive-stages.md`

```markdown
# Prompt 4: Merge Duplicate InteractiveStages

## Objective
Add mode toggle to InteractiveStages component and consolidate two instances into one.

## Requirements

1. **Enhance Component**: `components/InteractiveStages.tsx`
   - Add new prop: `allowModeToggle?: boolean` (default: false)
   - Add viewMode state: 'default' | 'crisis'
   - Render toggle buttons when allowModeToggle=true
   - Switch between crisis/restoration data based on viewMode

2. **Implementation Details**:
   - Toggle buttons: "Restoration View" (green) and "Crisis View" (red)
   - Emoji icons: ✨ for restoration, ⚠️ for crisis
   - Active button highlighted with color background
   - viewMode switches stage data displayed

3. **Update Usage**:
   - Keep InteractiveStages in RestorationSubsectionA with `allowModeToggle={true}`
   - Remove InteractiveStages from CrisisSubsectionA entirely

## Files to Modify
- [ ] Update: `components/InteractiveStages.tsx`
- [ ] Update: `components/philosophy/RestorationSubsectionA.tsx` (add allowModeToggle prop)
- [ ] Update: `components/philosophy/CrisisSubsectionA.tsx` (remove InteractiveStages)

## Success Criteria
- [ ] Single InteractiveStages instance with mode toggle
- [ ] Toggle switches between crisis/restoration views
- [ ] No duplicate component instances
- [ ] Page height reduced by ~400-500px

## Code Reference
See "Phase 3.1: Merge Duplicate InteractiveStages" in philosophy-page-restructure-plan.md
```

### Prompt 5: Optimize Summary Components

**File**: `c:\Users\micha\DevProjects\Senior-Schools-Network\.github\prompts\philosophy-v1-syllogistic\05-optimize-summaries.md`

```markdown
# Prompt 5: Optimize Summary Components

## Objective
Move "Summary: The Three Poisons" to top of Crisis section and remove from CrisisSubsectionC.

## Requirements

1. **Move Summary to Top**:
   - Extract "Summary: The Three Poisons" section from CrisisSubsectionC
   - Place at top of Crisis SyllogismSection, before SubsectionTabs
   - Compact card-based layout (3 columns on desktop)
   - Red theme consistent with Crisis section

2. **Clean Up CrisisSubsectionC**:
   - Remove CardGrid displaying three poisons
   - Keep ProblemSolutionPanel
   - Keep CollapsibleEvidenceQuotes
   - Keep ComparisonDiagram
   - Keep final SummaryBox

## Files to Modify
- [ ] Update: `app/(site)/philosophy/page.tsx` (add summary to Crisis section)
- [ ] Update: `components/philosophy/CrisisSubsectionC.tsx` (remove duplicate CardGrid)

## Success Criteria
- [ ] Summary appears at top of Crisis section
- [ ] No duplicate content in subsection C
- [ ] Visual hierarchy clear
- [ ] Page height reduced by ~200-300px

## Code Reference
See "Phase 3.2: Summary Components Optimization" in philosophy-page-restructure-plan.md
```

### Prompt 6: Implement Progressive Disclosure

**File**: `c:\Users\micha\DevProjects\Senior-Schools-Network\.github\prompts\philosophy-v1-syllogistic\06-progressive-disclosure.md`

```markdown
# Prompt 6: Implement Progressive Disclosure

## Objective
Add summary-first mode to all subsection components with expand/collapse functionality.

## Requirements

1. **Enhance All Subsection Components**:
   - Add `summaryMode?: boolean` prop (default: true)
   - Add isExpanded state
   - Render compact summary when collapsed
   - Show "Read Full Argument" button in summary
   - Render full content when expanded
   - Show "Collapse" button in expanded view

2. **Summary Format**:
   - Parchment background with colored left border
   - H3 heading with subsection title
   - 2-3 sentence summary paragraph
   - Prominent expand button

3. **Apply To**:
   - CrisisSubsectionA, B, C
   - RestorationSubsectionA, B, C
   - VisionSyllogismRecap, VisionWarriorPoet

## Files to Modify
- [ ] Update: `components/philosophy/CrisisSubsectionA.tsx`
- [ ] Update: `components/philosophy/CrisisSubsectionB.tsx`
- [ ] Update: `components/philosophy/CrisisSubsectionC.tsx`
- [ ] Update: `components/philosophy/RestorationSubsectionA.tsx`
- [ ] Update: `components/philosophy/RestorationSubsectionB.tsx`
- [ ] Update: `components/philosophy/RestorationSubsectionC.tsx`
- [ ] Update: `components/philosophy/VisionSubsections.tsx`

## Success Criteria
- [ ] All subsections have summary mode
- [ ] Expand/collapse works smoothly
- [ ] Full content preserved when expanded
- [ ] Initial page load shows compact summaries
- [ ] Page height reduced by ~40-50% initially

## Code Reference
See "Phase 4.1: Summary-First Approach" in philosophy-page-restructure-plan.md
```

---

## Testing & Validation

### Phase 2 Testing Checklist

**Collapsible Evidence**:
- [ ] All 8 EvidenceQuoteGroup instances wrapped
- [ ] Collapsed by default
- [ ] Quote count displayed correctly
- [ ] Expand/collapse smooth
- [ ] Keyboard accessible (Enter/Space to toggle)
- [ ] Focus visible

**Tabbed Subsections**:
- [ ] Crisis section has 3 working tabs
- [ ] Restoration section has 3 working tabs
- [ ] Vision section tabs work
- [ ] Active tab highlighted correctly
- [ ] Content switches on tab click
- [ ] Arrow key navigation works
- [ ] ARIA attributes correct

**Collapsible Panels**:
- [ ] Problem and Solution independently collapsible
- [ ] Collapse state preserved when switching tabs
- [ ] Animations smooth
- [ ] No layout shift on expand/collapse

### Phase 3 Testing Checklist

**Merged InteractiveStages**:
- [ ] Mode toggle visible
- [ ] Restoration view shows correct data
- [ ] Crisis view shows correct data
- [ ] Stage badges update correctly
- [ ] Content panel switches appropriately
- [ ] No duplicate instances on page

**Summary Optimization**:
- [ ] Three Poisons summary at top of Crisis
- [ ] No duplicate in subsection C
- [ ] Cards display correctly
- [ ] Mobile responsive

### Phase 4 Testing Checklist

**Progressive Disclosure**:
- [ ] All subsections show summaries initially
- [ ] Summaries concise and accurate
- [ ] Expand button visible and accessible
- [ ] Full content loads on expand
- [ ] Collapse button returns to summary
- [ ] State preserved when switching tabs

### Accessibility Validation

- [ ] Lighthouse Accessibility: 95+ score
- [ ] axe DevTools: Zero critical violations
- [ ] Keyboard navigation: All features accessible
- [ ] Screen reader: ARIA labels correct
- [ ] Focus management: Logical tab order
- [ ] Color contrast: WCAG AA compliance

### Performance Validation

- [ ] Lighthouse Performance: 90+ score
- [ ] LCP: <2.5s
- [ ] CLS: <0.1
- [ ] No excessive re-renders
- [ ] Smooth animations (60fps)

---

## Success Metrics

### Height Reduction Goals

**Before**: 15,000-18,000px total height

**After Phase 2**:
- Collapsible Evidence: -3,200 to -4,800px
- Tabbed Subsections: -6,000 to -9,000px
- Collapsible Panels: -1,000 to -1,500px
- **Subtotal**: 10,200-15,300px saved
- **Estimated Remaining**: 4,500-7,700px

**After Phase 3**:
- Merged Stages: -400 to -500px
- Summary Optimization: -200 to -300px
- **Subtotal**: 600-800px additional saved
- **Estimated Remaining**: 3,900-7,100px

**After Phase 4**:
- Progressive Disclosure: -40% to -50% of initial visible height
- **Initial Page Load**: ~4,000-5,000px visible
- **Full Expanded**: ~6,000-8,000px total

**Total Reduction**: ~50-60% of original height when collapsed, ~60% when fully expanded

### User Experience Goals

- [ ] Reduced scrolling fatigue
- [ ] Improved scanability (summaries provide overview)
- [ ] Preserve all content depth
- [ ] Maintain philosophical tone
- [ ] No loss of source attribution
- [ ] Enhanced navigation (tabs + progress indicator)

---

## Implementation Timeline

**Total Estimated Time**: 4-6 hours

### Hour 1: Collapsible Components (Prompt 1)
- Create CollapsibleEvidenceQuotes component
- Add CSS animations
- Replace all instances
- Test expand/collapse

### Hour 2: Tabbed Interface (Prompt 2)
- Create SubsectionTabs component
- Integrate into page.tsx
- Test tab switching
- Verify keyboard navigation

### Hour 3: Collapsible Panels (Prompt 3)
- Enhance ProblemSolutionPanel
- Add collapsible prop to all instances
- Test Problem/Solution independence
- Verify animations

### Hour 4: Component Consolidation (Prompts 4 & 5)
- Add mode toggle to InteractiveStages
- Remove duplicate instance
- Move Three Poisons summary
- Clean up subsection C

### Hours 5-6: Progressive Disclosure (Prompt 6)
- Add summaryMode to all subsections
- Write concise summaries
- Implement expand/collapse
- Test state management across tabs
- Final validation and testing

---

## Next Steps

1. ✅ **Review & Approve Plan**: Confirm all changes align with vision
2. 🛠️ **Execute Prompts Sequentially**: Follow prompt 1-6 order
3. ✅ **Test After Each Prompt**: Validate before moving to next
4. 🛠️ **Final Integration**: Ensure all components work together
5. ✅ **Performance Check**: Lighthouse audit
6. 🚀 **Deploy**: Merge to main after validation

---

**Document Status**: Ready for Implementation  
**Owner**: Development Team  
**Created**: November 10, 2025  
**Version**: 1.0

---

*This document guides the sequential implementation of Philosophy page restructuring. Follow prompts 1-6 in order for best results.*
