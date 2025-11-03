/**
 * Stage metadata and constants
 * Defines the four developmental stages from README.md
 */

import type { Stage, StageMetadata } from '@/lib/types/content';

/**
 * Complete stage metadata aligned with README.md definitions
 */
export const STAGE_METADATA: Record<Stage, StageMetadata> = {
  nursery: {
    stage: 'nursery',
    label: 'Nursery',
    ageRange: '0-7',
    focus: 'Sensory delight, fables',
    description:
      'Literary experience begins with someone reading aloud while children look at pictures. Emphasis on Mother Goose, Peter Rabbit, Aesop, and fairy tales that nurture wonder through sensory engagement.',
    color: 'nursery',
  },
  gymnasium: {
    stage: 'gymnasium',
    label: 'Gymnasium',
    ageRange: '7-13',
    focus: 'Adventure, stories, physical discipline',
    description:
      'The "Chivalric Wayfarer" stage emphasizing bodily rigor, experiential challenges, outdoor adventures, and resilient formation. Stories of Robin Hood, Treasure Island, and physical discipline integrated with liturgical rhythms.',
    color: 'gymnasium',
  },
  poetic: {
    stage: 'poetic',
    label: 'Poetic/Youth',
    ageRange: '13-20',
    focus: 'Imagination, classics, foundational for science',
    description:
      'Integration of arts and sciences through imagination. Shakespeare, Tolstoy, and the great works that prepare fertile soil for scientific pursuit. Poetic knowledge serves as prerequisite for disciplined reasoning.',
    color: 'poetic',
  },
  spiritual: {
    stage: 'spiritual',
    label: 'Spiritual',
    ageRange: 'All Ages',
    focus: 'Devout life',
    description:
      "Lifelong formation in faith through Bible (Douay-Rheims), Pilgrim's Progress, and the classics of Catholic spirituality. Music and art as per Senior's vision, integrated with all other stages.",
    color: 'spiritual',
  },
};

/**
 * Get stage metadata by stage key
 */
export function getStageMetadata(stage: Stage): StageMetadata {
  return STAGE_METADATA[stage];
}

/**
 * Get all stages in order
 */
export function getAllStages(): Stage[] {
  return ['nursery', 'gymnasium', 'poetic', 'spiritual'];
}

/**
 * Get stage label for display
 */
export function getStageLabel(stage: Stage): string {
  return STAGE_METADATA[stage].label;
}

/**
 * Get stage age range
 */
export function getStageAgeRange(stage: Stage): string {
  return STAGE_METADATA[stage].ageRange;
}

/**
 * Get stage focus description
 */
export function getStageFocus(stage: Stage): string {
  return STAGE_METADATA[stage].focus;
}

/**
 * Get stage color (for badge components)
 */
export function getStageColor(stage: Stage): string {
  return STAGE_METADATA[stage].color;
}
