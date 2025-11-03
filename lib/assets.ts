/**
 * Asset manifest for Senior Schools Network
 * Centralized metadata for images with alt text, captions, and thematic tags
 */

import type { Stage, ContentCategory } from '@/lib/types/content';

export interface ImageAsset {
  /** Unique identifier */
  id: string;
  /** Path relative to /public */
  src: string;
  /** Descriptive alt text for accessibility */
  alt: string;
  /** Optional caption for display */
  caption?: string;
  /** Width in pixels (for Next.js Image optimization) */
  width?: number;
  /** Height in pixels (for Next.js Image optimization) */
  height?: number;
  /** Educational stage alignment */
  stage?: Stage;
  /** Content category */
  category?: ContentCategory;
  /** Thematic tags for filtering */
  tags?: string[];
  /** Associated quote ID from content library */
  quoteRef?: string;
  /** Book or source reference */
  sourceRef?: string;
}

/**
 * IMAGE MANIFEST
 * Organized by thematic collections aligned with philosophical axioms
 */

// Sacred Texts: Illuminated Manuscripts and Scripture Art
const sacredTexts: ImageAsset[] = [
  {
    id: 'sacred-book-of-kells-1',
    src: '/images/sacred-texts/book-of-kells-1.webp',
    alt: 'Illuminated manuscript page from the Book of Kells showing intricate Celtic knotwork and vivid pigments',
    caption: 'Book of Kells: Wonder made visible through sacred artistry',
    stage: 'nursery',
    category: 'beauty',
    tags: ['illuminated-manuscript', 'celtic', 'sacred-art', 'book-of-kells'],
    quoteRef: 'wonder-wisdom',
  },
  {
    id: 'sacred-book-of-kells-2',
    src: '/images/sacred-texts/book-of-kells-2.webp',
    alt: 'Book of Kells detail featuring ornate initial letter with gold leaf and intricate patterns',
    caption: 'The beauty of holiness rendered in pigment and gold',
    stage: 'nursery',
    category: 'beauty',
    tags: ['illuminated-manuscript', 'celtic', 'sacred-art', 'book-of-kells'],
  },
  {
    id: 'sacred-book-of-kells-3',
    src: '/images/sacred-texts/book-of-kells-3.webp',
    alt: 'Book of Kells page showing elaborate decorative borders and illuminated text',
    stage: 'nursery',
    category: 'beauty',
    tags: ['illuminated-manuscript', 'celtic', 'sacred-art', 'book-of-kells'],
  },
  {
    id: 'sacred-book-of-kells-illuminated',
    src: '/images/sacred-texts/book-of-kells-illuminated-manuscript.webp',
    alt: 'Full illuminated page from Book of Kells with vibrant colors and complex geometric patterns',
    stage: 'nursery',
    category: 'beauty',
    tags: ['illuminated-manuscript', 'celtic', 'sacred-art', 'book-of-kells'],
  },
  {
    id: 'sacred-book-of-kells-ireland',
    src: '/images/sacred-texts/book-of-kells-ireland.webp',
    alt: 'Book of Kells manuscript detail showcasing Irish monastic craftsmanship',
    stage: 'nursery',
    category: 'beauty',
    tags: ['illuminated-manuscript', 'celtic', 'sacred-art', 'book-of-kells', 'ireland'],
  },
];

// Sacred Art & Illuminated Manuscripts
const sacredArt: ImageAsset[] = [
  {
    id: 'book-of-kells-1',
    src: '/images/art-sacred/book-of-kells-1.webp',
    alt: 'Illuminated manuscript page from the Book of Kells showing intricate Celtic knotwork and vivid pigments',
    caption: 'Book of Kells: Wonder made visible through sacred artistry',
    stage: 'nursery',
    category: 'beauty',
    tags: ['illuminated-manuscript', 'celtic', 'sacred-art', 'book-of-kells'],
    quoteRef: 'wonder-wisdom',
  },
  {
    id: 'book-of-kells-2',
    src: '/images/art-sacred/book-of-kells-2.webp',
    alt: 'Book of Kells detail featuring ornate initial letter with gold leaf and intricate patterns',
    caption: 'The beauty of holiness rendered in pigment and gold',
    stage: 'nursery',
    category: 'beauty',
    tags: ['illuminated-manuscript', 'celtic', 'sacred-art', 'book-of-kells'],
  },
  {
    id: 'book-of-kells-3',
    src: '/images/art-sacred/book-of-kells-3.webp',
    alt: 'Book of Kells page showing elaborate decorative borders and illuminated text',
    stage: 'nursery',
    category: 'beauty',
    tags: ['illuminated-manuscript', 'celtic', 'sacred-art', 'book-of-kells'],
  },
  {
    id: 'book-of-kells-illuminated',
    src: '/images/art-sacred/book-of-kells-illuminated-manuscript.webp',
    alt: 'Full illuminated page from Book of Kells with vibrant colors and complex geometric patterns',
    stage: 'nursery',
    category: 'beauty',
    tags: ['illuminated-manuscript', 'celtic', 'sacred-art', 'book-of-kells'],
  },
  {
    id: 'book-of-kells-ireland',
    src: '/images/art-sacred/book-of-kells-ireland.webp',
    alt: 'Book of Kells manuscript detail showcasing Irish monastic craftsmanship',
    stage: 'nursery',
    category: 'beauty',
    tags: ['illuminated-manuscript', 'celtic', 'sacred-art', 'book-of-kells', 'ireland'],
  },
  {
    id: 'garden-of-eden',
    src: '/images/art-sacred/garden-of-eden-rubens-breughel.webp',
    alt: 'The Garden of Eden by Rubens and Brueghel showing paradise before the fall with abundant flora and fauna',
    caption: 'The Enclosed Garden: innocence and wonder restored',
    stage: 'nursery',
    category: 'beauty',
    tags: ['renaissance', 'paradise', 'innocence', 'rubens', 'brueghel'],
    quoteRef: 'wonder-wisdom',
  },
  {
    id: 'seven-virtues',
    src: '/images/art-sacred/sevenvirtues.webp',
    alt: 'Medieval artistic representation of the seven virtues',
    caption: 'Virtue depicted through sacred imagery',
    stage: 'spiritual',
    category: 'virtue',
    tags: ['virtue', 'medieval', 'sacred-art', 'formation'],
  },
];

// Beatrix Potter Nursery Illustrations
const beatrixPotter: ImageAsset[] = [
  {
    id: 'benjamin-bunny',
    src: '/images/beatrix-potter/benjamin-bunny.webp',
    alt: 'Benjamin Bunny in his little jacket, illustrated by Beatrix Potter',
    caption: 'Benjamin Bunny: gentle wonder for the youngest hearts',
    stage: 'nursery',
    category: 'stories',
    tags: ['beatrix-potter', 'nursery', 'animals', 'illustration'],
    sourceRef: 'The Tale of Benjamin Bunny',
  },
  {
    id: 'flopsy-bunnies-cover',
    src: '/images/beatrix-potter/frontcover-flopsy-bunnies.webp',
    alt: 'Front cover of The Tale of the Flopsy Bunnies by Beatrix Potter',
    stage: 'nursery',
    category: 'stories',
    tags: ['beatrix-potter', 'nursery', 'cover-art'],
    sourceRef: 'The Tale of the Flopsy Bunnies',
  },
  {
    id: 'flopsy-bunnies-page-62',
    src: '/images/beatrix-potter/page-62-flopsy-bunnies.webp',
    alt: 'Interior illustration from The Flopsy Bunnies showing charming garden scene',
    stage: 'nursery',
    category: 'stories',
    tags: ['beatrix-potter', 'nursery', 'garden'],
    sourceRef: 'The Tale of the Flopsy Bunnies',
  },
  {
    id: 'rabbits-sleeping',
    src: '/images/beatrix-potter/rabbits-sleeping-flopsy-bunnies.webp',
    alt: 'The Flopsy Bunnies sleeping peacefully in the garden, illustrated by Beatrix Potter',
    caption: 'Innocence at rest in the garden',
    stage: 'nursery',
    category: 'stories',
    tags: ['beatrix-potter', 'nursery', 'rest', 'garden'],
    sourceRef: 'The Tale of the Flopsy Bunnies',
  },
  {
    id: 'simpkin-goes-out',
    src: '/images/beatrix-potter/simpkin-goes-out-1902.webp',
    alt: 'Simpkin the cat venturing out into the snow, from The Tailor of Gloucester',
    stage: 'nursery',
    category: 'stories',
    tags: ['beatrix-potter', 'nursery', 'cats', 'winter'],
    sourceRef: 'The Tailor of Gloucester',
  },
  {
    id: 'squirrel-nutkin',
    src: '/images/beatrix-potter/squirrel-nutkin-1903.webp',
    alt: 'Squirrel Nutkin sailing on a raft, illustrated by Beatrix Potter',
    stage: 'nursery',
    category: 'stories',
    tags: ['beatrix-potter', 'nursery', 'squirrels', 'adventure'],
    sourceRef: 'The Tale of Squirrel Nutkin',
  },
  {
    id: 'pigling-bland',
    src: '/images/beatrix-potter/the-tale-of-pigling-bland.webp',
    alt: 'Pigling Bland the pig in countryside setting, illustrated by Beatrix Potter',
    stage: 'nursery',
    category: 'stories',
    tags: ['beatrix-potter', 'nursery', 'pigs', 'countryside'],
    sourceRef: 'The Tale of Pigling Bland',
  },
];

// Landscapes: Wonder Through Natural Beauty
const landscapes: ImageAsset[] = [
  {
    id: 'monet-japanese-footbridge',
    src: '/images/landscapes/claude-monet-japanese-footbridge.webp',
    alt: 'Claude Monet\'s Japanese Footbridge painting showing water lilies and lush garden',
    caption: 'Wonder discovered in contemplation of created beauty',
    stage: 'nursery',
    category: 'beauty',
    tags: ['impressionism', 'monet', 'garden', 'water'],
    quoteRef: 'wonder-wisdom',
  },
  {
    id: 'hudson-river-rocky-mountains',
    src: '/images/landscapes/hudson-river-rocky-mountains.webp',
    alt: 'Hudson River School painting of the Rocky Mountains showing sublime natural grandeur',
    caption: 'The sublime in nature: awe and wonder before creation',
    stage: 'gymnasium',
    category: 'beauty',
    tags: ['hudson-river-school', 'mountains', 'sublime', 'american-landscape'],
  },
  {
    id: 'hudson-river-school-5',
    src: '/images/landscapes/hudson-river-school-5.webp',
    alt: 'Hudson River School landscape painting with dramatic light and pristine wilderness',
    stage: 'gymnasium',
    category: 'beauty',
    tags: ['hudson-river-school', 'wilderness', 'sublime', 'american-landscape'],
  },
  {
    id: 'landscape-with-rainbow',
    src: '/images/landscapes/landscape-with-rainbow.webp',
    alt: 'Romantic landscape painting featuring a rainbow arcing over pastoral countryside',
    caption: 'The covenant of beauty: God\'s promise rendered visible',
    stage: 'nursery',
    category: 'beauty',
    tags: ['rainbow', 'pastoral', 'covenant', 'landscape'],
  },
  {
    id: 'thomas-cole-niagara-falls',
    src: '/images/landscapes/thomas-cole-niagara-falls.webp',
    alt: 'Thomas Cole\'s painting of Niagara Falls showing powerful cascading water and mist',
    caption: 'Power and majesty: the sublime meets the beautiful',
    stage: 'gymnasium',
    category: 'beauty',
    tags: ['thomas-cole', 'niagara-falls', 'waterfall', 'sublime', 'hudson-river-school'],
  },
];

// Nursery Illustrations (Generic)
const nurseryIllustrations: ImageAsset[] = [
  {
    id: 'nursery-ill-008',
    src: '/images/nursery-illustrations/ill_pg_008_sml.webp',
    alt: 'Charming nursery illustration showing whimsical characters in gentle setting',
    stage: 'nursery',
    category: 'stories',
    tags: ['nursery', 'illustration', 'children'],
  },
  {
    id: 'nursery-ill-028',
    src: '/images/nursery-illustrations/ill_pg_028_sml.webp',
    alt: 'Delicate nursery illustration with soft colors and innocent subject matter',
    stage: 'nursery',
    category: 'stories',
    tags: ['nursery', 'illustration', 'children'],
  },
  {
    id: 'nursery-ill-052',
    src: '/images/nursery-illustrations/ill_pg_052_sml.webp',
    alt: 'Nursery illustration depicting playful scene for young children',
    stage: 'nursery',
    category: 'stories',
    tags: ['nursery', 'illustration', 'children'],
  },
  {
    id: 'nursery-ill-064',
    src: '/images/nursery-illustrations/ill_pg_064_sml.webp',
    alt: 'Gentle nursery illustration with soothing composition',
    stage: 'nursery',
    category: 'stories',
    tags: ['nursery', 'illustration', 'children'],
  },
  {
    id: 'nursery-ill-iv',
    src: '/images/nursery-illustrations/ill_pg_iv_sml.webp',
    alt: 'Classic nursery illustration frontispiece',
    stage: 'nursery',
    category: 'stories',
    tags: ['nursery', 'illustration', 'children'],
  },
];

// Otto of the Silver Hand: Medieval Chivalry
const ottoOfTheSilverHand: ImageAsset[] = [
  {
    id: 'otto-11',
    src: '/images/otto-of-the-silver-hand/otto-of-the-silver-hand-11.webp',
    alt: 'Illustration from Otto of the Silver Hand showing medieval castle scene',
    caption: 'Chivalric formation through story and image',
    stage: 'gymnasium',
    category: 'discipline',
    tags: ['otto', 'medieval', 'chivalry', 'gymnasium'],
    sourceRef: 'Otto of the Silver Hand',
    quoteRef: 'adventure-stories',
  },
  {
    id: 'otto-13',
    src: '/images/otto-of-the-silver-hand/otto-of-the-silver-hand-13.webp',
    alt: 'Otto of the Silver Hand illustration depicting monastery life',
    stage: 'gymnasium',
    category: 'discipline',
    tags: ['otto', 'medieval', 'monastery', 'gymnasium'],
    sourceRef: 'Otto of the Silver Hand',
  },
  {
    id: 'otto-14',
    src: '/images/otto-of-the-silver-hand/otto-of-the-silver-hand-14.webp',
    alt: 'Dramatic scene from Otto of the Silver Hand with knights and conflict',
    stage: 'gymnasium',
    category: 'discipline',
    tags: ['otto', 'medieval', 'knights', 'conflict', 'gymnasium'],
    sourceRef: 'Otto of the Silver Hand',
  },
  {
    id: 'otto-17',
    src: '/images/otto-of-the-silver-hand/otto-of-the-silver-hand-17.webp',
    alt: 'Otto of the Silver Hand scene showing medieval architecture',
    stage: 'gymnasium',
    category: 'discipline',
    tags: ['otto', 'medieval', 'architecture', 'gymnasium'],
    sourceRef: 'Otto of the Silver Hand',
  },
  {
    id: 'otto-21',
    src: '/images/otto-of-the-silver-hand/otto-of-the-silver-hand-21.webp',
    alt: 'Otto of the Silver Hand illustration with character in contemplation',
    stage: 'gymnasium',
    category: 'discipline',
    tags: ['otto', 'medieval', 'contemplation', 'gymnasium'],
    sourceRef: 'Otto of the Silver Hand',
  },
  {
    id: 'otto-38',
    src: '/images/otto-of-the-silver-hand/otto-of-the-silver-hand-38.webp',
    alt: 'Otto of the Silver Hand depicting medieval hall scene',
    stage: 'gymnasium',
    category: 'discipline',
    tags: ['otto', 'medieval', 'hall', 'gymnasium'],
    sourceRef: 'Otto of the Silver Hand',
  },
  {
    id: 'otto-42',
    src: '/images/otto-of-the-silver-hand/otto-of-the-silver-hand-42.webp',
    alt: 'Otto of the Silver Hand final scene illustration',
    stage: 'gymnasium',
    category: 'discipline',
    tags: ['otto', 'medieval', 'resolution', 'gymnasium'],
    sourceRef: 'Otto of the Silver Hand',
  },
  {
    id: 'otto-8',
    src: '/images/otto-of-the-silver-hand/otto-of-the-silver-hand-8.webp',
    alt: 'Otto of the Silver Hand early chapter illustration',
    stage: 'gymnasium',
    category: 'discipline',
    tags: ['otto', 'medieval', 'beginning', 'gymnasium'],
    sourceRef: 'Otto of the Silver Hand',
  },
];

// Robin Hood: Adventure and Justice
const robinHood: ImageAsset[] = [
  {
    id: 'robin-hood-2',
    src: '/images/robin-hood/the-merry-adventures-of-robin-hood-2.webp',
    alt: 'The Merry Adventures of Robin Hood illustration showing Sherwood Forest scene',
    caption: 'Adventure, courage, and merry fellowship in the greenwood',
    stage: 'gymnasium',
    category: 'discipline',
    tags: ['robin-hood', 'adventure', 'medieval', 'england', 'gymnasium'],
    sourceRef: 'The Merry Adventures of Robin Hood',
    quoteRef: 'adventure-stories',
  },
  {
    id: 'robin-hood-4',
    src: '/images/robin-hood/the-merry-adventures-of-robin-hood-4.webp',
    alt: 'Robin Hood and his men in action, from The Merry Adventures of Robin Hood',
    stage: 'gymnasium',
    category: 'discipline',
    tags: ['robin-hood', 'adventure', 'action', 'gymnasium'],
    sourceRef: 'The Merry Adventures of Robin Hood',
  },
  {
    id: 'robin-hood-7',
    src: '/images/robin-hood/the-merry-adventures-of-robin-hood-7.webp',
    alt: 'Illustration from The Merry Adventures of Robin Hood depicting forest adventure',
    stage: 'gymnasium',
    category: 'discipline',
    tags: ['robin-hood', 'adventure', 'forest', 'gymnasium'],
    sourceRef: 'The Merry Adventures of Robin Hood',
  },
];

// Winnie-the-Pooh: Nursery to Gymnasium Bridge
const winnieThePooh: ImageAsset[] = [
  {
    id: 'heffalump-today',
    src: '/images/winnie-the-pooh/i-saw-a-heffalump-today-piglet_3065949751_o-1200x686.webp',
    alt: 'Piglet and Pooh discussing heffalumps in the Hundred Acre Wood',
    caption: 'Friendship, imagination, and gentle adventures',
    stage: 'nursery',
    category: 'stories',
    tags: ['winnie-the-pooh', 'friendship', 'imagination', 'nursery'],
    sourceRef: 'Winnie-the-Pooh',
  },
  {
    id: 'poohsticks',
    src: '/images/winnie-the-pooh/pooh-and-robin-playing-poohsticks.webp',
    alt: 'Pooh and Christopher Robin playing Poohsticks on the wooden bridge',
    caption: 'Simple joys and contemplative play',
    stage: 'nursery',
    category: 'stories',
    tags: ['winnie-the-pooh', 'play', 'friendship', 'nursery'],
    sourceRef: 'Winnie-the-Pooh',
  },
];

// Adventure Illustrations: Gymnasium Formation
const adventure: ImageAsset[] = [
  {
    id: 'attack-on-galleon',
    src: '/images/adventure/an-attack-on-a-galleon.webp',
    alt: 'Dramatic naval battle scene showing attack on a Spanish galleon with billowing sails',
    caption: 'Adventure on the high seas: courage and physical daring',
    stage: 'gymnasium',
    category: 'discipline',
    tags: ['naval', 'battle', 'adventure', 'gymnasium', 'ships'],
    quoteRef: 'adventure-stories',
  },
  {
    id: 'general-lee-army',
    src: '/images/adventure/his-army-broke-up-and-followed-him-weeping-and-sobbing-from-general-lee-as-i-knew-him-by-a-r-h.webp',
    alt: 'Illustration of General Lee and his army showing emotional farewell scene',
    caption: 'Discipline, loyalty, and the pathos of honorable defeat',
    stage: 'gymnasium',
    category: 'discipline',
    tags: ['history', 'american', 'civil-war', 'honor', 'gymnasium'],
    sourceRef: 'General Lee As I Knew Him',
  },
  {
    id: 'nation-makers',
    src: '/images/adventure/the-nation-makers.webp',
    alt: 'Historical illustration depicting pioneers and nation-builders in formative American scene',
    caption: 'The formation of character through historical narrative',
    stage: 'gymnasium',
    category: 'discipline',
    tags: ['history', 'american', 'pioneers', 'formation', 'gymnasium'],
  },
];

// Logos and Branding
const logos: ImageAsset[] = [
  {
    id: 'ssn-logo',
    src: '/assets/logos/Senior School Network Logo.png',
    alt: 'Senior Schools Network logo',
    width: 400, // Placeholder, adjust as needed
    height: 100, // Placeholder, adjust as needed
    tags: ['logo', 'branding'],
  },
  {
    id: 'ssn-favicon',
    src: '/assets/logos/Senior School Network Favicon.png',
    alt: 'Senior Schools Network favicon',
    width: 32, // Placeholder
    height: 32, // Placeholder
    tags: ['favicon', 'branding'],
  },
];

/**
 * MASTER IMAGE REGISTRY
 */
export const imageAssets: ImageAsset[] = [
  ...sacredTexts,
  ...sacredArt,
  ...beatrixPotter,
  ...landscapes,
  ...nurseryIllustrations,
  ...ottoOfTheSilverHand,
  ...robinHood,
  ...winnieThePooh,
  ...adventure,
  ...logos,
];

/**
 * ASSET RETRIEVAL UTILITIES
 */

export function getAssetById(id: string): ImageAsset | undefined {
  return imageAssets.find((asset) => asset.id === id);
}

export function getAssetsByStage(stage: Stage): ImageAsset[] {
  return imageAssets.filter((asset) => asset.stage === stage);
}

export function getAssetsByCategory(category: ContentCategory): ImageAsset[] {
  return imageAssets.filter((asset) => asset.category === category);
}

export function getAssetsByTag(tag: string): ImageAsset[] {
  return imageAssets.filter((asset) => asset.tags?.includes(tag));
}

export function getAssetsBySource(sourceRef: string): ImageAsset[] {
  return imageAssets.filter((asset) => asset.sourceRef === sourceRef);
}

export function searchAssets(query: string): ImageAsset[] {
  const lowerQuery = query.toLowerCase();
  return imageAssets.filter(
    (asset) =>
      asset.id.toLowerCase().includes(lowerQuery) ||
      asset.alt.toLowerCase().includes(lowerQuery) ||
      asset.caption?.toLowerCase().includes(lowerQuery) ||
      asset.tags?.some((tag) => tag.toLowerCase().includes(lowerQuery))
  );
}

/**
 * Get random asset from a collection (useful for dynamic hero images)
 */
export function getRandomAsset(
  filter?: {
    stage?: Stage;
    category?: ContentCategory;
    tags?: string[];
  }
): ImageAsset | undefined {
  let pool = imageAssets;

  if (filter?.stage) {
    pool = pool.filter((asset) => asset.stage === filter.stage);
  }
  if (filter?.category) {
    pool = pool.filter((asset) => asset.category === filter.category);
  }
  if (filter?.tags?.length) {
    pool = pool.filter((asset) =>
      filter.tags!.some((tag) => asset.tags?.includes(tag))
    );
  }

  if (pool.length === 0) return undefined;
  return pool[Math.floor(Math.random() * pool.length)];
}

/**
 * Get random asset from a specific folder (simplest approach for page-level image selection)
 * @param folderName - The folder name under /public/images/ (e.g., 'landscapes', 'art-sacred')
 */
export function getRandomAssetFromFolder(folderName: string): ImageAsset | undefined {
  const folderPath = `/images/${folderName}/`;
  const pool = imageAssets.filter((asset) => asset.src.startsWith(folderPath));
  
  if (pool.length === 0) return undefined;
  return pool[Math.floor(Math.random() * pool.length)];
}
