'use client';

import { useState } from 'react';
import StageBadge from '@/components/ui/StageBadge';

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
  allowModeToggle?: boolean;
  className?: string;
}

export default function InteractiveStages({
  mode: initialMode = 'default',
  allowModeToggle = false,
  className = '',
}: InteractiveStagesProps) {
  const [selectedStage, setSelectedStage] = useState<Stage>('nursery');
  const [viewMode, setViewMode] = useState<'default' | 'crisis'>(initialMode);

  const currentMode = allowModeToggle ? viewMode : initialMode;
  const currentStage = stageDetails[selectedStage];
  
  const displayBgColor = currentMode === 'crisis' ? currentStage.crisisBgColor : currentStage.bgColor;
  const displayDescription = currentMode === 'crisis' ? currentStage.crisisDescription : currentStage.description;

  return (
    <div className={className}>
      {/* Mode Toggle - Two Button Design */}
      {allowModeToggle && (
        <div className="flex justify-center mb-6">
          <div className="inline-flex rounded-lg border-2 border-forest/20 p-1 bg-parchment/50">
            <button
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

      {/* Stage Badges */}
      <div className="flex flex-wrap justify-center gap-6 mb-12">
        <button
          onClick={() => setSelectedStage('nursery')}
          className="focus:outline-none transition-all duration-300 hover:scale-105"
        >
          <StageBadge
            stage="nursery"
            size="lg"
            whiteText
            className={
              selectedStage === 'nursery'
                ? 'shadow-lg scale-105'
                : 'opacity-60 hover:opacity-85'
            }
          />
        </button>
        <button
          onClick={() => setSelectedStage('gymnasium')}
          className="focus:outline-none transition-all duration-300 hover:scale-105"
        >
          <StageBadge
            stage="gymnasium"
            size="lg"
            whiteText
            className={
              selectedStage === 'gymnasium'
                ? 'shadow-lg scale-105'
                : 'opacity-60 hover:opacity-85'
            }
          />
        </button>
        <button
          onClick={() => setSelectedStage('poetic')}
          className="focus:outline-none transition-all duration-300 hover:scale-105"
        >
          <StageBadge
            stage="poetic"
            size="lg"
            whiteText
            className={
              selectedStage === 'poetic'
                ? 'shadow-lg scale-105'
                : 'opacity-60 hover:opacity-85'
            }
          />
        </button>
        <button
          onClick={() => setSelectedStage('spiritual')}
          className="focus:outline-none transition-all duration-300 hover:scale-105"
        >
          <StageBadge
            stage="spiritual"
            size="lg"
            whiteText
            className={
              selectedStage === 'spiritual'
                ? 'shadow-lg scale-105'
                : 'opacity-60 hover:opacity-85'
            }
          />
        </button>
      </div>

      {/* Selected Stage Description */}
      <div className="max-w-3xl mx-auto">
        <div
          key={selectedStage}
          className={`stage-content-enter ${displayBgColor} p-8 rounded-lg transition-all duration-300 ease-in-out`}
        >
          <h3 className={`text-3xl font-playfair ${currentStage.textColor} mb-4 flex items-center gap-3`}>
            <span className={`inline-block px-4 py-2 ${currentStage.badgeBgColor} text-white rounded text-base font-lato`}>
              {currentStage.ageRange}
            </span>{' '}
            {currentStage.title}
          </h3>
          <p className="text-lg text-charcoal/80 leading-relaxed">{displayDescription}</p>
        </div>
      </div>
    </div>
  );
}
