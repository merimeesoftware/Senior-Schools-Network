/**
 * Reading-body preparation for texts rendered under a ChamberHeader.
 *
 * The chamber plate already states the place-name (work title) and, when
 * known, the author. Many source files open with an H1 (and an italic
 * author line) restating both. These helpers drop only that restatement;
 * the markdown source on disk is never modified.
 */

export interface ReadingMeta {
  title: string;
  author?: string;
}

/** Lowercase, strip emphasis/link markup and punctuation, collapse spaces. */
function normalize(text: string): string {
  return text
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[*_~`]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function isH1(line: string): boolean {
  return /^#\s+/.test(line.trim());
}

function isHeading(line: string): boolean {
  return /^#{1,6}\s+/.test(line.trim());
}

/**
 * Remove a leading H1 that restates the chamber place-name, and an
 * immediately following author line that duplicates `meta.author`.
 * Anything else — Gutenberg headers, section headings, epigraphs — stays.
 */
export function stripRestatedTitle(content: string, meta: ReadingMeta): string {
  const titleNorm = normalize(meta.title);
  if (!titleNorm) return content;

  const lines = content.split('\n');
  let i = 0;
  while (i < lines.length && !lines[i].trim()) i++;
  if (i >= lines.length || !isH1(lines[i])) return content;

  const h1Norm = normalize(lines[i]);
  const restates =
    h1Norm.length > 0 &&
    (h1Norm.includes(titleNorm) || titleNorm.includes(h1Norm));
  if (!restates) return content;

  lines.splice(i, 1);

  if (meta.author) {
    let j = i;
    while (j < lines.length && !lines[j].trim()) j++;
    const candidate = lines[j];
    if (candidate && !isHeading(candidate)) {
      const lineNorm = normalize(candidate).replace(/^by /, '');
      if (lineNorm && lineNorm === normalize(meta.author)) {
        lines.splice(j, 1);
      }
    }
  }

  return lines.join('\n');
}
