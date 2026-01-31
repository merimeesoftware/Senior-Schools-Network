/**
 * Utilities to extract quotes directly from PHILOSOPHICAL-AXIOMS.md
 * so curated thematic sections can drive rotating quotes on pages.
 */

import fs from 'fs/promises';
import path from 'path';
import type { Quote } from '@/lib/types/content';

const AXIOMS_PATH = path.join(process.cwd(), 'public', 'texts', 'PHILOSOPHICAL-AXIOMS.md');

async function readAxioms(): Promise<string[]> {
  const content = await fs.readFile(AXIOMS_PATH, 'utf-8');
  const lines = content.split(/\r?\n/);
  return lines;
}

function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '')
    .slice(0, 60);
}

/**
 * Parse markdown bullet like:
 * - "Quote text" — Author, Source
 * - "Quote text" — Author (Source)
 * - "Quote text" — Author
 * Handles multi-line input (e.g., poetry) by preserving newlines in quote text.
 */
function parseBullet(input: string): Quote | null {
  // Remove bullet marker from first line only
  const lines = input.split('\n');
  if (lines.length === 0) return null;
  
  const firstLine = lines[0].trim().replace(/^[-*]\s+/, '');
  const restLines = lines.slice(1).map(l => l.trim());
  const fullText = [firstLine, ...restLines].join('\n');
  
  // Normalize md smart quotes & em dash variants
  const norm = fullText
    .replace(/[""]/g, '"')
    .replace(/—/g, '—')
    .replace(/--/g, '—');

  // Match: "Quote" — Author [ , Source | (Source) ]
  // Use DOTALL flag to match across newlines
  const quoteMatch = /^"([\s\S]+?)"\s+—\s+(.+?)(?:\s*[,(]\s*(.+))?$/.exec(norm);
  if (!quoteMatch) return null;

  const [, quoteText, authorPart, sourceRaw] = quoteMatch;
  const author = authorPart.trim();
  let source = sourceRaw?.trim();
  if (source) {
    // normalize optional surrounding parentheses
    if (source.startsWith('(')) source = source.slice(1);
    if (source.endsWith(')')) source = source.slice(0, -1);
    source = source.trim();
  }

  return {
    id: slugify(`${author}-${quoteText.slice(0, 24)}`),
    quote: quoteText.trim(),
    author,
    source,
    category: 'philosophy',
  };
}

/**
 * Extract quotes under a markdown heading (e.g., 'On Wonder & Beginnings').
 * We search for a line starting with '### <title>' and capture bullet list items
 * until the next heading of level >= 3.
 * Handles multi-line bullets (e.g., poetry) by accumulating continuation lines.
 */
export async function getAxiomsQuotesBySection(title: string): Promise<Quote[]> {
  const lines = await readAxioms();
  const headingRegex = new RegExp(`^#{3,}\\s+${title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*$`, 'i');
  const nextHeadingRegex = /^#{1,6}\s+/;

  const startIdx = lines.findIndex((l) => headingRegex.test(l));
  if (startIdx === -1) return [];

  const collected: Quote[] = [];
  let currentBullet: string[] = [];
  
  for (let i = startIdx + 1; i < lines.length; i++) {
    const line = lines[i];
    
    // If we hit another heading, process any pending bullet and stop
    if (nextHeadingRegex.test(line)) {
      if (currentBullet.length > 0) {
        const q = parseBullet(currentBullet.join('\n'));
        if (q) collected.push(q);
      }
      break;
    }
    
    // Start of new bullet
    if (/^\s*[-*]\s+/.test(line)) {
      // Process previous bullet if exists
      if (currentBullet.length > 0) {
        const q = parseBullet(currentBullet.join('\n'));
        if (q) collected.push(q);
      }
      // Start new bullet
      currentBullet = [line];
    }
    // Continuation line (non-empty, non-bullet)
    else if (currentBullet.length > 0 && line.trim()) {
      currentBullet.push(line);
    }
    // Empty line ends current bullet
    else if (!line.trim() && currentBullet.length > 0) {
      const q = parseBullet(currentBullet.join('\n'));
      if (q) collected.push(q);
      currentBullet = [];
    }
  }
  
  // Process final bullet if exists
  if (currentBullet.length > 0) {
    const q = parseBullet(currentBullet.join('\n'));
    if (q) collected.push(q);
  }
  
  return collected;
}

/**
 * Extract quotes by explicit 1-based line range in PHILOSOPHICAL-AXIOMS.md
 * e.g., getAxiomsQuotesByLineRange(610, 617)
 * Handles multi-line bullets by accumulating continuation lines.
 */
export async function getAxiomsQuotesByLineRange(
  startLine: number,
  endLine: number
): Promise<Quote[]> {
  const lines = await readAxioms();
  const start = Math.max(1, startLine) - 1;
  const end = Math.min(lines.length, endLine);
  const slice = lines.slice(start, end);
  const quotes: Quote[] = [];
  let currentBullet: string[] = [];
  
  for (const line of slice) {
    // Start of new bullet
    if (/^\s*[-*]\s+/.test(line)) {
      // Process previous bullet if exists
      if (currentBullet.length > 0) {
        const q = parseBullet(currentBullet.join('\n'));
        if (q) quotes.push(q);
      }
      // Start new bullet
      currentBullet = [line];
    }
    // Continuation line (non-empty, non-bullet)
    else if (currentBullet.length > 0 && line.trim()) {
      currentBullet.push(line);
    }
    // Empty line ends current bullet
    else if (!line.trim() && currentBullet.length > 0) {
      const q = parseBullet(currentBullet.join('\n'));
      if (q) quotes.push(q);
      currentBullet = [];
    }
  }
  
  // Process final bullet if exists
  if (currentBullet.length > 0) {
    const q = parseBullet(currentBullet.join('\n'));
    if (q) quotes.push(q);
  }
  
  return quotes;
}

// No caching: always read from source file so updates and randomness reflect immediately
