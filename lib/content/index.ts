/**
 * Content loading and parsing utilities for Senior Schools Network
 * Loads markdown files at build time for static generation
 */

import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import type {
  Excerpt,
  BookListEntry,
  Quote,
  ScriptureWaypoint,
  MarkdownFile,
  ContentGroup,
  Stage,
  PrimaryFlow,
  ContentCategory,
} from '@/lib/types/content';
import { getAllQuotes } from '@/lib/content/quotes';

// Paths
const CONTENT_DIR = path.join(process.cwd(), 'content');
const TEXTS_DIR = path.join(CONTENT_DIR, 'texts');

// Cache for memoization
const cache = new Map<string, unknown>();

/**
 * Read and parse a markdown file with frontmatter
 */
async function readMarkdownFile(filePath: string): Promise<MarkdownFile> {
  const cacheKey = `md:${filePath}`;
  if (cache.has(cacheKey)) {
    return cache.get(cacheKey) as MarkdownFile;
  }

  const fileContent = await fs.readFile(filePath, 'utf-8');
  const { data, content } = matter(fileContent);
  const slug = path.basename(filePath, '.md');

  const result: MarkdownFile = {
    frontmatter: data as MarkdownFile['frontmatter'],
    content,
    slug,
  };

  cache.set(cacheKey, result);
  return result;
}

/**
 * Read all markdown files from a directory
 */
async function readMarkdownFiles(dir: string): Promise<MarkdownFile[]> {
  const cacheKey = `dir:${dir}`;
  if (cache.has(cacheKey)) {
    return cache.get(cacheKey) as MarkdownFile[];
  }

  try {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    const files = entries
      .filter((entry) => entry.isFile() && entry.name.endsWith('.md'))
      .map((entry) => path.join(dir, entry.name));

    const results = await Promise.all(files.map(readMarkdownFile));
    cache.set(cacheKey, results);
    return results;
  } catch (error: unknown) {
    console.warn(`Directory not found or empty: ${dir}`, error);
    return [];
  }
}

/**
 * Get excerpts filtered by theme/category
 */
export async function getExcerptsByTheme(
  theme?: ContentCategory
): Promise<Excerpt[]> {
  const files = await readMarkdownFiles(TEXTS_DIR);
  const phaseExcerptsPath = path.join(CONTENT_DIR, 'phase-1-excerpts.md');

  // Add phase-1-excerpts.md if it exists and has content
  try {
    const phaseExcerpts = await readMarkdownFile(phaseExcerptsPath);
    if (phaseExcerpts.content.trim()) {
      files.push(phaseExcerpts);
    }
  } catch {
    // File doesn't exist or is empty, skip
  }

  const excerpts: Excerpt[] = files.map((file, index) => ({
    id: file.slug || `excerpt-${index}`,
    title: file.frontmatter.title || file.slug || 'Untitled',
    content: file.content,
    source: file.slug,
    category: file.frontmatter.category || 'general',
    stage: file.frontmatter.stage,
    primaryFlow: file.frontmatter.primaryFlow,
    scriptureRefs: file.frontmatter.scriptureRefs,
    tags: file.frontmatter.tags,
    author: file.frontmatter.author,
  }));

  if (theme) {
    return excerpts.filter((excerpt) => excerpt.category === theme);
  }

  return excerpts;
}

/**
 * Get book list entries filtered by stage
 */
export async function getBookListsByStage(
  stage?: Stage
): Promise<BookListEntry[]> {
  const booksPath = path.join(TEXTS_DIR, 'Thousand Good Books List.md');

  try {
    const file = await readMarkdownFile(booksPath);
    const books = parseBookList(file.content);

    if (stage) {
      return books.filter((book) => book.stage === stage);
    }

    return books;
  } catch (error: unknown) {
    console.warn('Thousand Good Books List not found', error);
    return [];
  }
}

/**
 * Parse Thousand Good Books List markdown into structured data
 */
function parseBookList(content: string): BookListEntry[] {
  const books: BookListEntry[] = [];
  const lines = content.split('\n');

  let currentStage: Stage | null = null;
  let currentAgeRange = '';

  const stageMapping: Record<string, Stage> = {
    nursery: 'nursery',
    'school days': 'gymnasium',
    adolescence: 'poetic',
    youth: 'poetic',
    spiritual: 'spiritual',
  };

  const stageRegex = /^###\s+(.+?)\s*\(Ages?\s*(.+?)\)/i;
  const bookRegex =
    /^[-*]\s+(.+?),\s+(.+?)\.\s+(.+?)(?:\s+Illustrated by\s+(.+?))?\.?$/i;
  const simpleRegex = /^[-*]\s+(.+?)\.\s+(.+?)\.?$/;

  for (const line of lines) {
    const trimmed = line.trim();

    // Detect stage headings
    const stageMatch = stageRegex.exec(trimmed);
    if (stageMatch) {
      const stageName = stageMatch[1].toLowerCase();
      currentAgeRange = stageMatch[2];
      currentStage = stageMapping[stageName] || null;
      continue;
    }

    // Parse book entries (list items with author)
    const bookMatch = bookRegex.exec(trimmed);
    if (bookMatch && currentStage) {
      const [, author, title, notes, illustrator] = bookMatch;
      books.push({
        id: `${currentStage}-${books.length}`,
        title: title.trim(),
        author: author.trim(),
        stage: currentStage,
        notes: notes?.trim(),
        illustrator: illustrator?.trim(),
        ageRange: currentAgeRange,
      });
      continue;
    }

    // Simpler pattern: Author. Title (and variations)
    const simpleMatch = simpleRegex.exec(trimmed);
    if (simpleMatch && currentStage) {
      const [, author, rest] = simpleMatch;
      const parts = rest.split('Illustrated by');
      const title = parts[0].trim();
      const illustrator = parts[1]?.trim();

      books.push({
        id: `${currentStage}-${books.length}`,
        title,
        author: author.trim(),
        stage: currentStage,
        illustrator,
        ageRange: currentAgeRange,
      });
    }
  }

  return books;
}

/**
 * Get Scripture waypoints mapped to user flows
 */
export async function getScriptureWaypoints(): Promise<ScriptureWaypoint[]> {
  const cacheKey = 'scripture-waypoints';
  if (cache.has(cacheKey)) {
    return cache.get(cacheKey) as ScriptureWaypoint[];
  }

  // Hardcoded Scripture waypoints from site-blueprint.md and README.md
  const waypoints: ScriptureWaypoint[] = [
    {
      id: 'proverbs-22-6',
      verse: 'Proverbs 22:6',
      text: 'Train up a child in the way he should go',
      primaryFlow: 'home',
      description: 'Guidance for homeschooling parents',
    },
    {
      id: 'ephesians-6-4',
      verse: 'Ephesians 6:4',
      text: 'Bring them up in the discipline and instruction of the Lord',
      primaryFlow: 'school',
      description: 'Discipline and formation for gymnasium stage',
    },
    {
      id: 'matthew-11-28',
      verse: 'Matthew 11:28',
      text: 'Come to me... and I will refresh you',
      primaryFlow: 'founding',
      description: 'Encouragement for aspiring founders',
    },
    {
      id: 'ephesians-5-15-16',
      verse: 'Ephesians 5:15-16',
      text: 'Redeeming the time, because the days are evil',
      primaryFlow: 'school',
      description: 'Urgency of restoration',
    },
  ];

  cache.set(cacheKey, waypoints);
  return waypoints;
}

/**
 * Get quotes filtered by source
 */
export async function getQuotesBySource(source?: string): Promise<Quote[]> {
  const cacheKey = source ? `quotes:${source}` : 'quotes:all';
  if (cache.has(cacheKey)) {
    return cache.get(cacheKey) as Quote[];
  }

  // Load from lightweight quotes index (canonical long-form in public/texts/QUOTES.md)
  const quotes = getAllQuotes();
  const filtered = source ? quotes.filter((q) => q.source === source) : quotes;

  cache.set(cacheKey, filtered);
  return filtered;
}

/**
 * Group content items by stage
 */
export function groupByStage<T extends { stage?: Stage }>(
  items: T[]
): ContentGroup<T>[] {
  const stages: Stage[] = ['nursery', 'gymnasium', 'poetic', 'spiritual'];
  const groups: ContentGroup<T>[] = [];

  for (const stage of stages) {
    const stageItems = items.filter((item) => item.stage === stage);
    if (stageItems.length > 0) {
      groups.push({ stage, items: stageItems });
    }
  }

  // Add items without stage
  const unstaged = items.filter((item) => !item.stage);
  if (unstaged.length > 0) {
    groups.push({ theme: 'general', items: unstaged });
  }

  return groups;
}

/**
 * Filter content by primary flow
 */
export function filterByFlow<T extends { primaryFlow?: PrimaryFlow }>(
  items: T[],
  flow: PrimaryFlow
): T[] {
  return items.filter((item) => item.primaryFlow === flow || !item.primaryFlow);
}

/**
 * Clear the content cache (useful for development)
 */
export function clearContentCache(): void {
  cache.clear();
}
