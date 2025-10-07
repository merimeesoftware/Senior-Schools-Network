/**
 * Type definitions for content data structures
 * Aligned with Senior Schools Network philosophy and README.md stage definitions
 */

/**
 * Developmental stages from README.md
 */
export type Stage = 'nursery' | 'gymnasium' | 'poetic' | 'spiritual';

/**
 * User flow categories from StoryBrand framework
 */
export type PrimaryFlow = 'school' | 'home' | 'founding';

/**
 * Content categories for organization
 */
export type ContentCategory =
  | 'philosophy'
  | 'adventure'
  | 'discipline'
  | 'scripture'
  | 'books'
  | 'media'
  | 'general';

/**
 * Excerpt from markdown files (philosophy, texts, etc.)
 */
export interface Excerpt {
  id: string;
  title: string;
  content: string;
  source: string;
  category: ContentCategory;
  stage?: Stage;
  primaryFlow?: PrimaryFlow;
  scriptureRefs?: string[];
  tags?: string[];
  author?: string;
}

/**
 * Book list entry from Thousand Good Books List
 */
export interface BookListEntry {
  id: string;
  title: string;
  author: string;
  stage: Stage;
  notes?: string;
  illustrator?: string;
  publisher?: string;
  ageRange?: string;
  tags?: string[];
}

/**
 * Quote for display in QuoteCard components
 */
export interface Quote {
  id: string;
  quote: string;
  author: string;
  source?: string;
  category: ContentCategory;
  stage?: Stage;
  primaryFlow?: PrimaryFlow;
}

/**
 * Scripture waypoint for user flow guidance
 */
export interface ScriptureWaypoint {
  id: string;
  verse: string;
  text: string;
  primaryFlow: PrimaryFlow;
  description?: string;
}

/**
 * Markdown file with frontmatter
 */
export interface MarkdownFile {
  frontmatter: {
    title?: string;
    author?: string;
    category?: ContentCategory;
    stage?: Stage;
    primaryFlow?: PrimaryFlow;
    scriptureRefs?: string[];
    tags?: string[];
    [key: string]: unknown;
  };
  content: string;
  slug: string;
}

/**
 * Grouped content by theme or stage
 */
export interface ContentGroup<T> {
  stage?: Stage;
  theme?: string;
  items: T[];
}

/**
 * Stage metadata for display
 */
export interface StageMetadata {
  stage: Stage;
  label: string;
  ageRange: string;
  focus: string;
  description: string;
  color: string;
}

/**
 * Asset reference placeholder for future imagery
 */
export interface AssetReference {
  id: string;
  type: 'image' | 'video' | 'audio';
  placeholder: string;
  alt: string;
  caption?: string;
  contentId?: string;
}
