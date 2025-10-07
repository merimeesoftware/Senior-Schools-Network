/**
 * Asset reference placeholders for future imagery integration
 * Maps content to Pre-Raphaelite/classical artwork per visual site plan
 */

import type { AssetReference, Stage } from '@/lib/types/content';

/**
 * Get placeholder asset references for hero sections
 */
export function getHeroAssets(): AssetReference[] {
  return [
    {
      id: 'hero-enclosed-garden',
      type: 'image',
      placeholder: '/assets/placeholders/hero-garden.jpg',
      alt: 'Pre-Raphaelite garden illustration evoking the "hortus conclusus" (enclosed garden) of innocence',
      caption: 'The Enclosed Garden - Symbol of Protected Innocence',
    },
    {
      id: 'hero-nursery',
      type: 'image',
      placeholder: '/assets/placeholders/nursery-wonder.jpg',
      alt: 'Classical artwork depicting children in sensory delight and wonder',
      caption: 'Nursery Stage: Sensory Delight and Wonder (Ages 0-7)',
      contentId: 'nursery',
    },
    {
      id: 'hero-gymnasium',
      type: 'image',
      placeholder: '/assets/placeholders/gymnasium-adventure.jpg',
      alt: 'Classical artwork showing boys in outdoor adventure and physical discipline',
      caption: 'Gymnasium Stage: Adventure and Warrior Poets (Ages 7-13)',
      contentId: 'gymnasium',
    },
  ];
}

/**
 * Get placeholder asset references for stage-specific content
 */
export function getStageAssets(stage: Stage): AssetReference[] {
  const stageAssets: Record<Stage, AssetReference[]> = {
    nursery: [
      {
        id: 'nursery-fables',
        type: 'image',
        placeholder: '/assets/placeholders/nursery-fables.jpg',
        alt: 'Randolph Caldecott illustration from Mother Goose',
        caption: 'Nursery literature: Mother Goose, Peter Rabbit, and fables',
      },
      {
        id: 'nursery-sensory',
        type: 'image',
        placeholder: '/assets/placeholders/nursery-sensory.jpg',
        alt: 'Classical painting of children engaged in sensory exploration',
        caption: 'Sensory delight: The foundation of poetic knowledge',
      },
    ],
    gymnasium: [
      {
        id: 'gymnasium-adventure',
        type: 'image',
        placeholder: '/assets/placeholders/gymnasium-outdoor.jpg',
        alt: 'Pre-Raphaelite artwork depicting boys in outdoor adventure',
        caption:
          'Physical discipline and adventure: Forming resilient warrior poets',
      },
      {
        id: 'gymnasium-liturgical',
        type: 'image',
        placeholder: '/assets/placeholders/gymnasium-liturgy.jpg',
        alt: 'Classical religious art showing boys in liturgical formation',
        caption: 'Liturgical rhythms integrated with physical formation',
      },
    ],
    poetic: [
      {
        id: 'poetic-classics',
        type: 'image',
        placeholder: '/assets/placeholders/poetic-classics.jpg',
        alt: 'Pre-Raphaelite illustration of youth reading classical literature',
        caption: 'Poetic stage: Shakespeare, Tolstoy, and imaginative classics',
      },
      {
        id: 'poetic-science',
        type: 'image',
        placeholder: '/assets/placeholders/poetic-soil.jpg',
        alt: 'Classical artwork depicting fertile soil and growth',
        caption: 'Poetic foundations: Fertile soil for scientific excellence',
      },
    ],
    spiritual: [
      {
        id: 'spiritual-prayer',
        type: 'image',
        placeholder: '/assets/placeholders/spiritual-prayer.jpg',
        alt: 'Classical religious art depicting contemplative prayer',
        caption: 'Spiritual formation: Devout life across all ages',
      },
      {
        id: 'spiritual-scripture',
        type: 'image',
        placeholder: '/assets/placeholders/spiritual-bible.jpg',
        alt: 'Illuminated manuscript page from Douay-Rheims Bible',
        caption: 'Sacred Scripture: Douay-Rheims and Catholic classics',
      },
    ],
  };

  return stageAssets[stage] || [];
}

/**
 * Get placeholder asset references for book list sections
 */
export function getBookCoverPlaceholders(): AssetReference[] {
  return [
    {
      id: 'book-mother-goose',
      type: 'image',
      placeholder: '/assets/placeholders/books/mother-goose.jpg',
      alt: 'Mother Goose illustrated by Kate Greenaway',
    },
    {
      id: 'book-treasure-island',
      type: 'image',
      placeholder: '/assets/placeholders/books/treasure-island.jpg',
      alt: 'Treasure Island illustrated by N.C. Wyeth',
    },
    {
      id: 'book-robin-hood',
      type: 'image',
      placeholder: '/assets/placeholders/books/robin-hood.jpg',
      alt: 'Robin Hood illustrated by Howard Pyle',
    },
  ];
}

/**
 * Get placeholder media embeds from assets-inventory.md
 */
export function getMediaPlaceholders(): AssetReference[] {
  return [
    {
      id: 'video-senior-philosophy',
      type: 'video',
      placeholder: 'https://www.youtube.com/embed/placeholder',
      alt: "Video introduction to John Senior's philosophy of poetic knowledge",
      caption: 'Understanding Poetic Knowledge with Dr. John Senior',
    },
    {
      id: 'podcast-gymnasium',
      type: 'audio',
      placeholder: 'https://example.com/podcast/gymnasium-episode.mp3',
      alt: 'Podcast episode discussing the gymnasium stage and physical formation',
      caption: 'The Gymnasium Stage: Forming Warrior Poets Through Adventure',
    },
  ];
}

/**
 * Get all placeholder assets
 */
export function getAllAssetPlaceholders(): AssetReference[] {
  return [
    ...getHeroAssets(),
    ...getStageAssets('nursery'),
    ...getStageAssets('gymnasium'),
    ...getStageAssets('poetic'),
    ...getStageAssets('spiritual'),
    ...getBookCoverPlaceholders(),
    ...getMediaPlaceholders(),
  ];
}

/**
 * Get asset by ID
 */
export function getAssetById(id: string): AssetReference | undefined {
  return getAllAssetPlaceholders().find((asset) => asset.id === id);
}
