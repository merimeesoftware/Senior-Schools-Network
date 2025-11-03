/**
 * Lightweight quotes index for programmatic display
 * Canonical long-form content remains in public/texts/QUOTES.md
 *
 * Notes:
 * - Keep quotes succinct for UI usage (QuoteCard, embeds)
 * - Use stable IDs so pages/components can reference them
 * - Source values should correspond to canonical works present in /public/texts when possible
 */

import type { Quote } from '@/lib/types/content';

// Canonical quotes for UI surfaces. All quotes should be verbatim with attribution.
export const quotesIndex: Quote[] = [
  // Wonder & beginnings
  {
    id: 'wonder-wisdom',
    quote: 'Wonder is the beginning of wisdom.',
    author: 'Aristotle',
    source: 'Metaphysics',
    category: 'philosophy',
    stage: 'poetic',
  },

  // Tolkien — Mythopoeia
  {
    id: 'mythopoeia-law',
    quote: "We make still by the law in which we're made.",
    author: 'J.R.R. Tolkien',
    source: 'Mythopoeia',
    category: 'philosophy',
    stage: 'poetic',
  },
  {
    id: 'mythopoeia-legend-makers',
    quote:
      'Blessed are the legend-makers with their rhyme of things not found within recorded time.',
    author: 'J.R.R. Tolkien',
    source: 'Mythopoeia',
    category: 'philosophy',
    stage: 'poetic',
  },
  {
    id: 'mythopoeia-sub-creator',
    quote:
      'Man, sub-creator, the refracted light through whom is splintered from a single White to many hues, and endlessly combined in living shapes that move from mind to mind.',
    author: 'J.R.R. Tolkien',
    source: 'Mythopoeia',
    category: 'philosophy',
    stage: 'poetic',
  },

  // Senior — Gymnasium & Poetic Knowledge
  {
    // keep legacy id for existing usages
    id: 'adventure-stories',
    quote:
      "The elementary school is a gymnasium (from 'gymnos', 'naked') where stripped or lightly clad boys exercise, sharpening their five senses in immediate contact with nature in the raw.",
    author: 'John Senior',
    source: 'The Restoration of Innocence',
    category: 'discipline',
    stage: 'gymnasium',
    primaryFlow: 'school',
  },
  {
    id: 'senior-poetic-knowledge',
    quote:
      'Poetic knowledge is the attempt to know the way a child knows things, or the way a lover knows the beloved. It gets inside and becomes a part of what is known.',
    author: 'John Senior',
    source: 'The Restoration of Innocence',
    category: 'philosophy',
    stage: 'poetic',
  },
  {
    id: 'senior-without-love',
    quote: 'Without love, education is nothing.',
    author: 'John Senior',
    source: 'The Restoration of Innocence',
    category: 'virtue',
  },
  {
    id: 'senior-boys-gem-like-flames',
    quote: 'Boys burn with gem-like flames.',
    author: 'John Senior',
    source: 'The Restoration of Innocence',
    category: 'stories',
    stage: 'gymnasium',
  },

  // Classical foundations
  {
    id: 'plato-beginning-chief',
    quote:
      'The beginning in every work is the chief thing, especially in the case of anything young and tender.',
    author: 'Plato',
    source: 'Republic',
    category: 'philosophy',
  },
  {
    id: 'hugh-earth-we-grasp',
    quote:
      'Earth we grasp with the earthly, fire with flame, Liquid with moisture, air with our breath.',
    author: 'Hugh of St. Victor',
    source: 'Didascalicon I.1',
    category: 'philosophy',
  },

  // Scripture anchors (Knox)
  {
    id: 'ephesians-6-4',
    quote:
      'You who are fathers, do not rouse your children to resentment; the training, the discipline in which you bring them up must come from the Lord.',
    author: 'Ephesians 6:4',
    source: 'Knox',
    category: 'scripture',
    stage: 'spiritual',
    primaryFlow: 'school',
  },
  {
    id: 'proverbs-22-6',
    quote:
      'There is a proverb; a boy will keep the course he has begun; even when he grows old, he will not leave it.',
    author: 'Proverbs 22:6',
    source: 'Knox',
    category: 'scripture',
    stage: 'spiritual',
    primaryFlow: 'home',
  },
  {
    id: 'matthew-11-28',
    quote:
      'Come to me, all you that labour and are burdened; I will give you rest.',
    author: 'Matthew 11:28',
    source: 'Knox',
    category: 'scripture',
    stage: 'spiritual',
    primaryFlow: 'founding',
  },
];

/**
 * NOTE: In Phase 4 we plan to expand this index with anchors into public/texts/QUOTES.md
 * Example: add a field like `anchor?: string` pointing to a section header in QUOTES.md
 * to enable deep links for further reading without runtime parsing.
 */

export function getAllQuotes(): Quote[] {
  return quotesIndex;
}
