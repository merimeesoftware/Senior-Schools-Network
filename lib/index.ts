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
} from './types/content';

export type { ImageAsset } from './assets';
