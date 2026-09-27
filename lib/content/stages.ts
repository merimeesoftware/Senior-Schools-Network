/**
 * Network developmental modes.
 * Authority: MISSION.md “Five modes (taxonomy lock)”.
 *
 * Gymnastic badge age is 7–13 for compactness. The locked table says 7–12/13.
 * Restoration descriptions expand only from “What the soul is doing”,
 * the one-sentence cadence, and sense / story / liturgy.
 */

import type { Stage, StageMetadata } from '@/lib/types/content';

/**
 * Complete mode metadata in locked order.
 */
export const STAGE_METADATA: Record<Stage, StageMetadata> = {
  musical: {
    stage: 'musical',
    label: 'Musical',
    ageRange: '0–7',
    focus: 'Repose; Muses as lullaby, rhyme, picture; first delight',
    description:
      'The musical teaches repose: lullaby, rhyme, and picture — first delight — through sense, story, and liturgy.',
    color: 'musical',
  },
  gymnastic: {
    stage: 'gymnastic',
    label: 'Gymnastic',
    ageRange: '7–13',
    focus: 'Naked contact with things; rules; arranged adventure',
    description:
      'The gymnastic teaches adventure: naked contact with things, rules, and arranged adventure, through sense, story, and liturgy.',
    color: 'gymnastic',
  },
  poetic: {
    stage: 'poetic',
    label: 'Poetic',
    ageRange: '~12–15',
    focus: 'Yearning as knowing: image, song, pudor, presence',
    description:
      'The poetic teaches the first look: yearning as knowing — image, song, pudor, and presence — through sense, story, and liturgy.',
    color: 'poetic',
  },
  romantic: {
    stage: 'romantic',
    label: 'Romantic',
    ageRange: '~15–18+',
    focus: 'Quest, ordeal, vow; battles that cannot be arranged',
    description:
      'The romantic teaches the quest that look demands: quest, ordeal, and vow — battles that cannot be arranged — through sense, story, and liturgy.',
    color: 'romantic',
  },
  virtuous: {
    stage: 'virtuous',
    label: 'Virtuous',
    ageRange: 'Youth onward',
    focus: 'Justice, suffering, governing, keeping faith',
    description:
      'The virtuous teaches the cost of keeping faith with both: justice, suffering, governing, and keeping faith, through sense, story, and liturgy.',
    color: 'virtuous',
  },
};

/**
 * Public badge/filter labels. Virtuous uses lowercase “youth onward”.
 */
export const STAGE_BADGE_LABELS: Record<Stage, string> = {
  musical: 'Musical (0–7)',
  gymnastic: 'Gymnastic (7–13)',
  poetic: 'Poetic (~12–15)',
  romantic: 'Romantic (~15–18+)',
  virtuous: 'Virtuous (youth onward)',
};

/**
 * Get stage metadata by stage key
 */
export function getStageMetadata(stage: Stage): StageMetadata {
  return STAGE_METADATA[stage];
}

/**
 * Get all stages in locked order
 */
export function getAllStages(): Stage[] {
  return ['musical', 'gymnastic', 'poetic', 'romantic', 'virtuous'];
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
