/**
 * Utilities for extracting teasers and previews from markdown content
 */

import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

const TEXTS_DIR = path.join(process.cwd(), 'public', 'texts');

export interface TextMetadata {
  title: string;
  author?: string;
  category?: string;
  description?: string;
  tags?: string[];
  slug: string;
}

/**
 * Get all available text file slugs for static generation
 */
export async function getAllTextSlugs(): Promise<string[]> {
  try {
    const files = await fs.readdir(TEXTS_DIR);
    return files
      .filter((file) => file.endsWith('.md'))
      .map((file) => file.replace(/\.md$/, ''));
  } catch (error) {
    console.error('Error reading texts directory:', error);
    return [];
  }
}

/**
 * Get metadata for a specific text file
 */
export async function getTextMetadata(slug: string): Promise<TextMetadata | null> {
  try {
    // Decode the slug in case it comes URL-encoded
    const decodedSlug = decodeURIComponent(slug);
    const filePath = path.join(TEXTS_DIR, `${decodedSlug}.md`);
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const { data } = matter(fileContent);

    return {
      title: data.title || slugToTitle(decodedSlug),
      author: data.author,
      category: data.category,
      description: data.description,
      tags: data.tags,
      slug: decodedSlug,
    };
  } catch (error) {
    console.error(`Error reading text metadata for ${slug}:`, error);
    return null;
  }
}

/**
 * Get full text content with frontmatter
 */
export async function getTextContent(slug: string): Promise<{
  metadata: TextMetadata;
  content: string;
} | null> {
  try {
    // Decode the slug in case it comes URL-encoded
    const decodedSlug = decodeURIComponent(slug);
    const filePath = path.join(TEXTS_DIR, `${decodedSlug}.md`);
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    return {
      metadata: {
        title: data.title || slugToTitle(decodedSlug),
        author: data.author,
        category: data.category,
        description: data.description,
        tags: data.tags,
        slug: decodedSlug,
      },
      content,
    };
  } catch (error) {
    console.error(`Error reading text content for ${slug}:`, error);
    return null;
  }
}

/**
 * Extract first N list items from markdown content
 * Supports both bullet (-) and asterisk (*) lists
 */
export function extractListItems(markdown: string, count: number = 5): string[] {
  const lines = markdown.split('\n');
  const items: string[] = [];
  
  // Match lines that start with - or * (with optional whitespace)
  const listItemRegex = /^\s*[-*]\s+(.+)$/;
  
  for (const line of lines) {
    const match = listItemRegex.exec(line);
    if (match) {
      // Get the content after the bullet, remove any markdown formatting
      let item = match[1].trim();
      
      // Remove markdown bold/italic markers for cleaner display
      item = item
        .replace(/\*\*(.+?)\*\*/g, '$1') // Remove **bold**
        .replace(/\*(.+?)\*/g, '$1')     // Remove *italic*
        .replace(/\[(.+?)\]\(.+?\)/g, '$1'); // Extract text from [links](url)
      
      items.push(item);
      
      if (items.length >= count) {
        break;
      }
    }
  }
  
  return items;
}

/**
 * Get a teaser (first N items) from a specific section of a markdown file
 */
export async function getTextTeaser(
  slug: string,
  sectionHeading?: string,
  itemCount: number = 5
): Promise<{ title: string; items: string[] } | null> {
  const textContent = await getTextContent(slug);
  if (!textContent) {
    return null;
  }

  let contentToSearch = textContent.content;

  // If a section heading is specified, extract that section
  if (sectionHeading) {
    const sectionRegex = new RegExp(
      `##\\s+${sectionHeading}[\\s\\S]*?(?=##|$)`,
      'i'
    );
    const match = sectionRegex.exec(contentToSearch);
    if (match) {
      contentToSearch = match[0];
    }
  }

  const items = extractListItems(contentToSearch, itemCount);

  return {
    title: textContent.metadata.title,
    items,
  };
}

/**
 * Get all texts with a specific category
 */
export async function getTextsByCategory(category: string): Promise<TextMetadata[]> {
  const slugs = await getAllTextSlugs();
  const texts: TextMetadata[] = [];

  for (const slug of slugs) {
    const metadata = await getTextMetadata(slug);
    if (metadata && metadata.category === category) {
      texts.push(metadata);
    }
  }

  return texts;
}

/**
 * Convert slug to readable title (fallback if no frontmatter title)
 */
function slugToTitle(slug: string): string {
  return slug
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

/**
 * Check if a text file exists
 */
export async function textExists(slug: string): Promise<boolean> {
  try {
    // Decode the slug in case it comes URL-encoded
    const decodedSlug = decodeURIComponent(slug);
    const filePath = path.join(TEXTS_DIR, `${decodedSlug}.md`);
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}
