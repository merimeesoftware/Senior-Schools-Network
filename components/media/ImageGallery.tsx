import OptimizedImage from './OptimizedImage';
import type { ImageAsset } from '@/lib/assets';
import type { Stage, ContentCategory } from '@/lib/types/content';
import {
  getAssetsByStage,
  getAssetsByCategory,
  getAssetsByTag,
} from '@/lib/assets';

interface ImageGalleryProps {
  /** Array of asset IDs or ImageAsset objects */
  assets?: ImageAsset[];
  /** Filter by stage */
  stage?: Stage;
  /** Filter by category */
  category?: ContentCategory;
  /** Filter by tag */
  tag?: string;
  /** Show captions */
  showCaptions?: boolean;
  /** Grid columns (responsive) */
  columns?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
  };
  /** Gap between images */
  gap?: 'sm' | 'md' | 'lg';
  /** Custom className */
  className?: string;
}

export default function ImageGallery({
  assets: directAssets,
  stage,
  category,
  tag,
  showCaptions = true,
  columns = { mobile: 1, tablet: 2, desktop: 3 },
  gap = 'md',
  className = '',
}: ImageGalleryProps) {
  // Resolve assets from filters or use direct assets
  let assets = directAssets;

  if (!assets) {
    if (stage) {
      assets = getAssetsByStage(stage);
    } else if (category) {
      assets = getAssetsByCategory(category);
    } else if (tag) {
      assets = getAssetsByTag(tag);
    } else {
      console.warn('ImageGallery: No assets or filters provided');
      return null;
    }
  }

  if (assets.length === 0) {
    return null;
  }

  const gapClasses = {
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
  };

  const gridClasses = `
    grid
    grid-cols-${columns.mobile || 1}
    md:grid-cols-${columns.tablet || 2}
    lg:grid-cols-${columns.desktop || 3}
    ${gapClasses[gap]}
  `.trim();

  return (
    <div className={`image-gallery ${gridClasses} ${className}`}>
      {assets.map((asset) => (
        <OptimizedImage
          key={asset.id}
          asset={asset}
          showCaption={showCaptions}
          className="w-full"
          imageClassName="rounded-md shadow-soft"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      ))}
    </div>
  );
}
