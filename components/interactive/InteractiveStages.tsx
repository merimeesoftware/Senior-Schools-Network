'use client';

import { useState } from 'react';
import StageBadge from '@/components/ui/StageBadge';
import { getAllStages, STAGE_METADATA } from '@/lib/content/stages';
import type { Stage } from '@/lib/types/content';

/**
 * Crisis blurbs map only from PURPOSE.md Diagnosis
 * (screens / softness / specialization–premature analysis–collapse of poetic/romantic).
 */
const CRISIS_DESCRIPTIONS: Record<Stage, string> = {
  musical: 'Screens invade the musical garden.',
  gymnastic:
    'Screens evacuate the gymnasium. Softness bubble-wraps children out of arranged adventure and real contact.',
  poetic:
    'Specialization forces analysis before wonder. The poetic collapses into premature sexualization.',
  romantic: 'The romantic collapses into premature sexualization.',
  virtuous: 'Justice and governing never ripen — household and city go untended; faith is never kept.',
};

const STAGE_CHROME: Record<
  Stage,
  { bgColor: string; textColor: string; badgeBgColor: string }
> = {
  musical: {
    bgColor: 'bg-musical/10',
    textColor: 'text-musical-dark',
    badgeBgColor: 'bg-musical',
  },
  gymnastic: {
    bgColor: 'bg-gymnastic/10',
    textColor: 'text-gymnastic-dark',
    badgeBgColor: 'bg-gymnastic',
  },
  poetic: {
    bgColor: 'bg-poetic/10',
    textColor: 'text-poetic-dark',
    badgeBgColor: 'bg-poetic',
  },
  romantic: {
    bgColor: 'bg-romantic/10',
    textColor: 'text-romantic-dark',
    badgeBgColor: 'bg-romantic',
  },
  virtuous: {
    bgColor: 'bg-virtuous/10',
    textColor: 'text-virtuous-dark',
    badgeBgColor: 'bg-virtuous',
  },
};

interface InteractiveStagesProps {
  mode?: 'default' | 'crisis';
  allowModeToggle?: boolean;
  className?: string;
}

export default function InteractiveStages({
  mode: initialMode = 'default',
  allowModeToggle = false,
  className = '',
}: InteractiveStagesProps) {
  const stages = getAllStages();
  const [selectedStage, setSelectedStage] = useState<Stage>('musical');
  const [viewMode, setViewMode] = useState<'default' | 'crisis'>(initialMode);

  const currentMode = allowModeToggle ? viewMode : initialMode;
  const currentStage = STAGE_METADATA[selectedStage];
  const chrome = STAGE_CHROME[selectedStage];

  const displayBgColor = currentMode === 'crisis' ? 'bg-red-100/50' : chrome.bgColor;
  const displayDescription =
    currentMode === 'crisis' ? CRISIS_DESCRIPTIONS[selectedStage] : currentStage.description;

  return (
    <div className={className}>
      {allowModeToggle && (
        <div className="flex justify-center mb-6">
          <div className="inline-flex rounded-lg border-2 border-forest/20 p-1 bg-parchment/50">
            <button
              type="button"
              onClick={() => setViewMode('default')}
              className={`
                px-6 py-2 rounded-md font-lato font-medium text-sm transition-all
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-700
                ${viewMode === 'default'
                  ? 'bg-green-700 text-white shadow-md'
                  : 'text-charcoal/70 hover:text-forest'
                }
              `}
              aria-pressed={viewMode === 'default'}
            >
              <span>Restoration View</span>
            </button>

            <button
              type="button"
              onClick={() => setViewMode('crisis')}
              className={`
                px-6 py-2 rounded-md font-lato font-medium text-sm transition-all
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700
                ${viewMode === 'crisis'
                  ? 'bg-red-700 text-white shadow-md'
                  : 'text-charcoal/70 hover:text-forest'
                }
              `}
              aria-pressed={viewMode === 'crisis'}
            >
              <span>Crisis View</span>
            </button>
          </div>
        </div>
      )}

      <div
        className="mb-8 flex max-w-full flex-wrap justify-center gap-2 sm:gap-3"
        role="group"
        aria-label="Developmental modes"
      >
        {stages.map((stage) => {
          const selected = selectedStage === stage;
          return (
            <button
              key={stage}
              type="button"
              onClick={() => setSelectedStage(stage)}
              aria-pressed={selected}
              className={`
                group inline-flex min-h-11 max-w-full items-center justify-center rounded-organic
                transition-[opacity,transform] duration-200 ease-out
                motion-reduce:transition-none motion-reduce:hover:translate-y-0
                hover:-translate-y-0.5
                focus-visible-ring
                ${selected
                  ? 'opacity-100 outline outline-2 outline-offset-2 outline-forest'
                  : 'opacity-60 hover:opacity-90'
                }
              `}
            >
              <StageBadge
                stage={stage}
                size="md"
                whiteText
                className={`min-h-11 justify-center px-3 transition-shadow duration-200 ease-out motion-reduce:transition-none ${
                  selected
                    ? 'shadow-organic-md'
                    : 'shadow-organic group-hover:shadow-organic-md'
                }`}
              />
            </button>
          );
        })}
      </div>

      <div className="max-w-3xl mx-auto">
        <div
          key={selectedStage}
          className={`stage-content-enter ${displayBgColor} p-8 rounded-lg transition-all duration-300 ease-in-out`}
        >
          <h3 className={`text-3xl font-playfair ${chrome.textColor} mb-4 flex items-center gap-3 flex-wrap`}>
            <span className={`inline-block px-4 py-2 ${chrome.badgeBgColor} text-white rounded text-base font-lato`}>
              {currentStage.ageRange}
            </span>{' '}
            {currentStage.label}
          </h3>
          <p className="text-lg text-charcoal/80 leading-relaxed">{displayDescription}</p>
        </div>
      </div>
    </div>
  );
}
