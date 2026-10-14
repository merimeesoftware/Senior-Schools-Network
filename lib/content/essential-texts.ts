/**
 * Living Essential Texts for the /texts index.
 *
 * Discovers works from public/texts/ and from doors that already point at
 * them (the Essential Texts reading list and the engage catalog). Quote banks
 * stay off this shelf — PURPOSE: they never outrank a primary text.
 */

import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { getAllTextSlugs, type TextMetadata } from './teasers';

const TEXTS_DIR = path.join(process.cwd(), 'public', 'texts');
const READING_LIST = path.join(TEXTS_DIR, 'Essential-Texts-Reading-List.md');
const ENGAGE_PAGE = path.join(
  process.cwd(),
  'app',
  '(site)',
  'engage',
  'page.tsx'
);

const QUOTE_BANKS = new Set(['PHILOSOPHICAL-AXIOMS', 'QUOTES']);

function slugToTitle(slug: string): string {
  return slug.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());
}

function remember(order: string[], slug: string, living: Set<string>) {
  const decoded = decodeURIComponent(slug).split('#')[0];
  if (
    !living.has(decoded) ||
    QUOTE_BANKS.has(decoded) ||
    order.includes(decoded)
  ) {
    return;
  }
  order.push(decoded);
}

/**
 * Index order: reading-list doors, then engage doors, then any other living
 * work file. A slug with no file is dropped — a 404 door is not listed.
 */
export async function getLivingEssentialTexts(): Promise<TextMetadata[]> {
  const living = new Set(await getAllTextSlugs());
  const order: string[] = [];
  const readingTitles = new Map<string, string>();
  const engageTitles = new Map<string, string>();

  const readingList = await fs.readFile(READING_LIST, 'utf-8');
  const linkRe = /\[([^\]]+)\]\(\/texts\/([^)#]+)\)/g;
  let linkMatch: RegExpExecArray | null;
  while ((linkMatch = linkRe.exec(readingList)) !== null) {
    const slug = decodeURIComponent(linkMatch[2]);
    readingTitles.set(slug, linkMatch[1].trim());
    remember(order, slug, living);
  }

  const engage = await fs.readFile(ENGAGE_PAGE, 'utf-8');
  const blockRe = /slug:\s*['"]([^'"]+)['"][\s\S]*?title:\s*['"]([^'"]+)['"]/g;
  let blockMatch: RegExpExecArray | null;
  while ((blockMatch = blockRe.exec(engage)) !== null) {
    engageTitles.set(blockMatch[1], blockMatch[2]);
    remember(order, blockMatch[1], living);
  }
  const hrefRe = /\/texts\/([A-Za-z0-9_-]+)/g;
  let hrefMatch: RegExpExecArray | null;
  while ((hrefMatch = hrefRe.exec(engage)) !== null) {
    remember(order, hrefMatch[1], living);
  }

  const remaining = Array.from(living)
    .filter((slug) => !QUOTE_BANKS.has(slug) && !order.includes(slug))
    .sort((a, b) => a.localeCompare(b));
  order.push(...remaining);

  const texts: TextMetadata[] = [];
  for (const slug of order) {
    const raw = await fs.readFile(path.join(TEXTS_DIR, `${slug}.md`), 'utf-8');
    const { data } = matter(raw);
    const frontmatterTitle =
      typeof data.title === 'string' ? data.title : undefined;
    texts.push({
      slug,
      title:
        frontmatterTitle ||
        engageTitles.get(slug) ||
        readingTitles.get(slug) ||
        slugToTitle(slug),
      author: typeof data.author === 'string' ? data.author : undefined,
      category: typeof data.category === 'string' ? data.category : undefined,
      description:
        typeof data.description === 'string' ? data.description : undefined,
      tags: Array.isArray(data.tags)
        ? data.tags.filter((tag) => typeof tag === 'string')
        : undefined,
    });
  }

  return texts;
}
