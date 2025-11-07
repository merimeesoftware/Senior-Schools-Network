'use client';

import { useState } from 'react';
import StageBadge from '@/components/StageBadge';

type Stage = 'nursery' | 'gymnasium' | 'poetic' | 'spiritual';

interface StageDetail {
  stage: Stage;
  title: string;
  ageRange: string;
  description: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
  badgeBgColor: string;
}

const stageDetails: Record<Stage, StageDetail> = {
  nursery: {
    stage: 'nursery',
    title: 'Nursery',
    ageRange: '0-7',
    description:
      'Literary experience begins with someone reading aloud while children look at pictures. Emphasis on Mother Goose, Peter Rabbit, Aesop, and fairy tales that nurture wonder through sensory engagement.',
    bgColor: 'bg-nursery/10',
    borderColor: 'border-nursery',
    textColor: 'text-nursery-dark',
    badgeBgColor: 'bg-nursery',
  },
  gymnasium: {
    stage: 'gymnasium',
    title: 'Gymnasium',
    ageRange: '7-13',
    description:
      'The "Chivalric Wayfarer" stage emphasizing bodily rigor, experiential challenges, outdoor adventures, and resilient formation. Stories of Robin Hood, Treasure Island, and physical discipline integrated with liturgical rhythms.',
    bgColor: 'bg-gymnasium/10',
    borderColor: 'border-gymnasium',
    textColor: 'text-gymnasium-dark',
    badgeBgColor: 'bg-gymnasium',
  },
  poetic: {
    stage: 'poetic',
    title: 'Poetic/Youth',
    ageRange: '13-20',
    description:
      'Integration of arts and sciences through imagination. Shakespeare, Tolstoy, and the great works that prepare fertile soil for scientific pursuit. Poetic knowledge serves as prerequisite for disciplined reasoning.',
    bgColor: 'bg-poetic/10',
    borderColor: 'border-poetic',
    textColor: 'text-poetic-dark',
    badgeBgColor: 'bg-poetic',
  },
  spiritual: {
    stage: 'spiritual',
    title: 'Spiritual',
    ageRange: 'All Ages',
    description:
      "Lifelong formation in faith through Bible (Douay-Rheims), Pilgrim's Progress, and the classics of Catholic spirituality. Music and art as per Senior's vision, integrated with all other stages.",
    bgColor: 'bg-spiritual/10',
    borderColor: 'border-spiritual',
    textColor: 'text-spiritual-dark',
    badgeBgColor: 'bg-spiritual',
  },
};

export default function InteractiveStages() {
  const [selectedStage, setSelectedStage] = useState<Stage>('nursery');

  const currentStage = stageDetails[selectedStage];

  return (
    <div>
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
          className={`stage-content-enter ${currentStage.bgColor} border-2 ${currentStage.borderColor} p-8 rounded-lg transition-all duration-300 ease-in-out`}
        >
          <h3 className={`text-3xl font-playfair ${currentStage.textColor} mb-4 flex items-center gap-3`}>
            <span className={`inline-block px-4 py-2 ${currentStage.badgeBgColor} text-white rounded text-base font-lato`}>
              {currentStage.ageRange}
            </span>{' '}
            {currentStage.title}
          </h3>
          <p className="text-lg text-charcoal/80 leading-relaxed">{currentStage.description}</p>
        </div>
      </div>
    </div>
  );
}
