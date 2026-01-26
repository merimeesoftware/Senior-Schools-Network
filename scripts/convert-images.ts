/**
 * WebP Image Conversion Script
 *
 * Converts PNG and JPG images to WebP format for better compression.
 * Preserves original files and creates .webp versions alongside them.
 *
 * Usage:
 *   bun run images:convert              # Convert all images
 *   bun run images:convert --dry-run    # Preview what would be converted
 *   bun run images:convert --clean      # Remove original files after conversion
 */

import sharp from 'sharp';
import { readdir, stat, unlink } from 'fs/promises';
import { join, extname, basename, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = join(__dirname, '..', 'public');
const SUPPORTED_EXTENSIONS = ['.png', '.jpg', '.jpeg'];
const WEBP_QUALITY = 85;

interface ConversionResult {
  source: string;
  output: string;
  originalSize: number;
  newSize: number;
  savings: number;
}

async function findImages(dir: string): Promise<string[]> {
  const images: string[] = [];

  async function walk(currentDir: string) {
    const entries = await readdir(currentDir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = join(currentDir, entry.name);

      if (entry.isDirectory()) {
        await walk(fullPath);
      } else if (entry.isFile()) {
        const ext = extname(entry.name).toLowerCase();
        if (SUPPORTED_EXTENSIONS.includes(ext)) {
          images.push(fullPath);
        }
      }
    }
  }

  await walk(dir);
  return images;
}

async function convertImage(
  sourcePath: string,
  dryRun: boolean
): Promise<ConversionResult | null> {
  const ext = extname(sourcePath);
  const outputPath = sourcePath.replace(ext, '.webp');
  const originalStats = await stat(sourcePath);

  if (dryRun) {
    console.log(`[DRY RUN] Would convert: ${sourcePath}`);
    return null;
  }

  try {
    await sharp(sourcePath).webp({ quality: WEBP_QUALITY }).toFile(outputPath);

    const newStats = await stat(outputPath);
    const savings = Math.round(
      ((originalStats.size - newStats.size) / originalStats.size) * 100
    );

    return {
      source: sourcePath,
      output: outputPath,
      originalSize: originalStats.size,
      newSize: newStats.size,
      savings,
    };
  } catch (error) {
    console.error(`Failed to convert ${sourcePath}:`, error);
    return null;
  }
}

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

async function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry-run');
  const clean = args.includes('--clean');

  console.log('🖼️  WebP Image Converter');
  console.log('========================');
  console.log(`Mode: ${dryRun ? 'Dry Run (no changes)' : clean ? 'Convert + Clean' : 'Convert (keep originals)'}`);
  console.log(`Quality: ${WEBP_QUALITY}%`);
  console.log(`Scanning: ${PUBLIC_DIR}\n`);

  const images = await findImages(PUBLIC_DIR);

  if (images.length === 0) {
    console.log('✅ No PNG/JPG images found. All images are already optimized!');
    return;
  }

  console.log(`Found ${images.length} image(s) to convert:\n`);

  const results: ConversionResult[] = [];

  for (const imagePath of images) {
    const relativePath = imagePath.replace(PUBLIC_DIR, '');
    const result = await convertImage(imagePath, dryRun);

    if (result) {
      results.push(result);
      console.log(
        `✅ ${basename(result.source)} → ${basename(result.output)} ` +
          `(${formatBytes(result.originalSize)} → ${formatBytes(result.newSize)}, ` +
          `${result.savings}% smaller)`
      );

      if (clean) {
        await unlink(imagePath);
        console.log(`   🗑️  Removed original: ${basename(imagePath)}`);
      }
    }
  }

  if (!dryRun && results.length > 0) {
    const totalOriginal = results.reduce((sum, r) => sum + r.originalSize, 0);
    const totalNew = results.reduce((sum, r) => sum + r.newSize, 0);
    const totalSavings = Math.round(
      ((totalOriginal - totalNew) / totalOriginal) * 100
    );

    console.log('\n========================');
    console.log('📊 Summary:');
    console.log(`   Converted: ${results.length} file(s)`);
    console.log(`   Original total: ${formatBytes(totalOriginal)}`);
    console.log(`   New total: ${formatBytes(totalNew)}`);
    console.log(`   Total savings: ${totalSavings}% (${formatBytes(totalOriginal - totalNew)})`);

    if (!clean) {
      console.log('\n💡 Tip: Run with --clean to remove original files after conversion');
    }
  }
}

main().catch(console.error);
