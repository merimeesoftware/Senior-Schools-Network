import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export interface MarkdownContent {
  frontmatter: Record<string, unknown>;
  content: string;
  slug: string;
}

export async function getMarkdownFile(
  filePath: string
): Promise<MarkdownContent | null> {
  try {
    const fullPath = path.join(contentDirectory, filePath);
    const fileContents = await fs.readFile(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      frontmatter: data,
      content,
      slug: path.basename(filePath, path.extname(filePath)),
    };
  } catch (error) {
    console.error(`Error reading markdown file ${filePath}:`, error);
    return null;
  }
}

export async function getAllMarkdownFiles(
  directory: string
): Promise<MarkdownContent[]> {
  try {
    const fullPath = path.join(contentDirectory, directory);
    const files = await fs.readdir(fullPath);
    const markdownFiles = files.filter((file) => file.endsWith('.md'));

    const contents = await Promise.all(
      markdownFiles.map((file) => getMarkdownFile(path.join(directory, file)))
    );

    return contents.filter(
      (content): content is MarkdownContent => content !== null
    );
  } catch (error) {
    console.error(`Error reading directory ${directory}:`, error);
    return [];
  }
}

export async function fileExists(filePath: string): Promise<boolean> {
  try {
    const fullPath = path.join(contentDirectory, filePath);
    await fs.access(fullPath);
    return true;
  } catch {
    return false;
  }
}
