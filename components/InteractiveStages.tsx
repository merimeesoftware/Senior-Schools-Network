'use client';

import { useState } from 'react';
import StageBadge from '@/components/StageBadge';

type Stage = 'nursery' | 'gymnasium' | 'poetic' | 'spiritual';

interface StageDetail {
  stage: Stage;
  title: string;
  ageRange: string;
  description: string;
  crisisDescription: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
  badgeBgColor: string;
  crisisBgColor: string;
  crisisBorderColor: string;
}

const stageDetails: Record<Stage, StageDetail> = {
  nursery: {
    stage: 'nursery',
    title: 'Nursery',
    ageRange: '0-7',
    description:
      'Literary experience begins with someone reading aloud while children look at pictures. Emphasis on Mother Goose, Peter Rabbit, Aesop, and fairy tales that nurture wonder through sensory engagement.',
    crisisDescription:
      'Screen babysitting replaces outdoor wonder; artificial stimulation deadens natural curiosity. iPads substitute for picture books, nature walks abandoned for controlled environments.',
    bgColor: 'bg-nursery/10',
    borderColor: 'border-nursery',
    textColor: 'text-nursery-dark',
    badgeBgColor: 'bg-nursery',
    crisisBgColor: 'bg-red-100/50',
    crisisBorderColor: 'border-red-600',
  },
  gymnasium: {
    stage: 'gymnasium',
    title: 'Gymnasium',
    ageRange: '7-13',
    description:
      'The "Chivalric Wayfarer" stage emphasizing bodily rigor, experiential challenges, outdoor adventures, and resilient formation. Stories of Robin Hood, Treasure Island, and physical discipline integrated with liturgical rhythms.',
    crisisDescription:
      '7 hrs/day screens destroy physical vitality; sedentary isolation replaces adventurous risk. Boys trapped indoors, bubble-wrapped, deprived of danger that builds courage and resilience.',
    bgColor: 'bg-gymnasium/10',
    borderColor: 'border-gymnasium',
    textColor: 'text-gymnasium-dark',
    badgeBgColor: 'bg-gymnasium',
    crisisBgColor: 'bg-red-100/50',
    crisisBorderColor: 'border-red-600',
  },
  poetic: {
    stage: 'poetic',
    title: 'Poetic/Youth',
    ageRange: '13-20',
    description:
      'Integration of arts and sciences through imagination. Shakespeare, Tolstoy, and the great works that prepare fertile soil for scientific pursuit. Poetic knowledge serves as prerequisite for disciplined reasoning.',
    crisisDescription:
      'STEM-first curriculum poisons the well; specialized knowledge without poetic roots breeds alienation. Abstract reasoning forced prematurely, wonder-less education produces technicians not scholars.',
    bgColor: 'bg-poetic/10',
    borderColor: 'border-poetic',
    textColor: 'text-poetic-dark',
    badgeBgColor: 'bg-poetic',
    crisisBgColor: 'bg-red-100/50',
    crisisBorderColor: 'border-red-600',
  },
  spiritual: {
    stage: 'spiritual',
    title: 'Spiritual',
    ageRange: 'All Ages',
    description:
      "Lifelong formation in faith through Bible (Douay-Rheims), Pilgrim's Progress, and the classics of Catholic spirituality. Music and art as per Senior's vision, integrated with all other stages.",
    crisisDescription:
      'Liturgical amnesia severs tradition; secularized education produces spiritual orphans. Sacred rhythm abandoned, sacramental life reduced to private preference, cultural memory lost.',
    bgColor: 'bg-spiritual/10',
    borderColor: 'border-spiritual',
    textColor: 'text-spiritual-dark',
    badgeBgColor: 'bg-spiritual',
    crisisBgColor: 'bg-red-100/50',
    crisisBorderColor: 'border-red-600',
  },
};

interface InteractiveStagesProps {
  mode?: 'default' | 'crisis';
  showToggle?: boolean;
  className?: string;
}

export default function InteractiveStages({
  mode: initialMode = 'default',
  showToggle = false,
  className = '',
}: InteractiveStagesProps) {
  const [selectedStage, setSelectedStage] = useState<Stage>('nursery');
  const [viewMode, setViewMode] = useState<'default' | 'crisis'>(initialMode);

  const currentMode = showToggle ? viewMode : initialMode;
  const currentStage = stageDetails[selectedStage];
  
  const displayBgColor = currentMode === 'crisis' ? currentStage.crisisBgColor : currentStage.bgColor;
  const displayBorderColor = currentMode === 'crisis' ? currentStage.crisisBorderColor : currentStage.borderColor;
  const displayDescription = currentMode === 'crisis' ? currentStage.crisisDescription : currentStage.description;

  return (
    <div className={className}>
      {/* Toggle Button */}
      {showToggle && (
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setViewMode(viewMode === 'default' ? 'crisis' : 'default')}
            className={`
              px-6 py-3 rounded-lg font-semibold transition-all duration-300
              focus:outline-none focus:ring-4 focus:ring-offset-2
              ${
                viewMode === 'crisis'
                  ? 'bg-green-100 text-green-900 border-2 border-green-600 hover:bg-green-200 focus:ring-green-600'
                  : 'bg-red-100 text-red-900 border-2 border-red-600 hover:bg-red-200 focus:ring-red-600'
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

      {/* Stage Badges */}
      <div className="flex flex-wrap justify-center gap-6 mb-12">
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
                ? 'ring-4 ring-gold/70 shadow-2xl scale-105'
                : 'opacity-60 hover:opacity-85'
            }
          />
        </button>
        <button
          onClick={() => setSelectedStage('gymnasium')}
          className="focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-gymnasium transition-all duration-300 hover:scale-105"
        >
          <StageBadge
            stage="gymnasium"
            size="lg"
            whiteText
            className={
              selectedStage === 'gymnasium'
                ? 'ring-4 ring-gold/70 shadow-2xl scale-105'
                : 'opacity-60 hover:opacity-85'
            }
          />
        </button>
        <button
          onClick={() => setSelectedStage('poetic')}
          className="focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-poetic transition-all duration-300 hover:scale-105"
        >
          <StageBadge
            stage="poetic"
            size="lg"
            whiteText
            className={
              selectedStage === 'poetic'
                ? 'ring-4 ring-gold/70 shadow-2xl scale-105'
                : 'opacity-60 hover:opacity-85'
            }
          />
        </button>
        <button
          onClick={() => setSelectedStage('spiritual')}
          className="focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-spiritual transition-all duration-300 hover:scale-105"
        >
          <StageBadge
            stage="spiritual"
            size="lg"
            whiteText
            className={
              selectedStage === 'spiritual'
                ? 'ring-4 ring-gold/70 shadow-2xl scale-105'
                : 'opacity-60 hover:opacity-85'
            }
          />
        </button>
      </div>

      {/* Selected Stage Description */}
      <div className="max-w-3xl mx-auto">
        <div
          key={selectedStage}
          className={`stage-content-enter ${displayBgColor} border-2 ${displayBorderColor} p-8 rounded-lg transition-all duration-300 ease-in-out relative`}
        >
          {/* Mode Indicator Icon */}
          <div className="absolute top-4 right-4 text-3xl" aria-hidden="true">
            {currentMode === 'crisis' ? '⚠️' : '🛡️'}
          </div>
          
          <h3 className={`text-3xl font-playfair ${currentStage.textColor} mb-4 flex items-center gap-3`}>
            <span className={`inline-block px-4 py-2 ${currentStage.badgeBgColor} text-white rounded text-base font-lato`}>
              {currentStage.ageRange}
            </span>{' '}
            {currentStage.title}
          </h3>
          <p className="text-lg text-charcoal/80 leading-relaxed pr-12">{displayDescription}</p>
        </div>
      </div>

      {/* Mode Indicator Text */}
      {currentMode === 'crisis' && (
        <div className="text-center text-sm text-red-900 font-medium mt-6">
          <span aria-hidden="true">⚠️</span> Crisis Mode: Showing modern education failures
        </div>
      )}
    </div>
  );
}
