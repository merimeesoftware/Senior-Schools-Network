/**
 * Content utilities barrel export
 * Import all content helpers from a single location
 */

// Core content loading functions
export {
  getExcerptsByTheme,
  getBookListsByStage,
  getScriptureWaypoints,
  getQuotesBySource,
  groupByStage,
  filterByFlow,
  clearContentCache,
} from './content';

// Stage metadata and helpers
export {
  STAGE_METADATA,
  getStageMetadata,
  getAllStages,
  getStageLabel,
  getStageAgeRange,
  getStageFocus,
  getStageColor,
} from './content/stages';

// Asset placeholders
export {
  getHeroAssets,
  getStageAssets,
  getBookCoverPlaceholders,
  getMediaPlaceholders,
  getAllAssetPlaceholders,
  getAssetById,
} from './content/assets';

// Type exports
export type {
  Stage,
  PrimaryFlow,
  ContentCategory,
  Excerpt,
  BookListEntry,
  Quote,
  ScriptureWaypoint,
  MarkdownFile,
  ContentGroup,
  StageMetadata,
  AssetReference,
} from './types/content';
