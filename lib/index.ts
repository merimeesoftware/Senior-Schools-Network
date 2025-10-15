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

// Asset placeholders (legacy - kept for backwards compatibility)
export {
  getHeroAssets,
  getStageAssets,
  getBookCoverPlaceholders,
  getMediaPlaceholders,
  getAllAssetPlaceholders,
} from './content/assets';

// Image asset manifest and utilities
export {
  imageAssets,
  getAssetById,
  getAssetsByStage,
  getAssetsByCategory,
  getAssetsByTag,
  getAssetsBySource,
  searchAssets,
  getRandomAsset,
} from './assets';

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

export type { ImageAsset } from './assets';
