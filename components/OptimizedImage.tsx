import Image from 'next/image';
import { getAssetById } from '@/lib/assets';
import type { ImageAsset } from '@/lib/assets';

interface OptimizedImageProps {
  /** Asset ID from the manifest */
  assetId?: string;
  /** Direct asset object (if not using ID lookup) */
  asset?: ImageAsset;
  /** Override alt text (uses manifest by default) */
  alt?: string;
  /** Display caption below image */
  showCaption?: boolean;
  /** Image priority (for LCP optimization) */
  priority?: boolean;
  /** Custom className for the image wrapper */
  className?: string;
  /** Custom className for the image element itself */
  imageClassName?: string;
  /** Responsive sizes attribute for Next.js Image */
  sizes?: string;
  /** Fill mode (responsive container) */
  fill?: boolean;
  /** Object fit for fill mode */
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  /** Explicit width (if not using fill) */
  width?: number;
  /** Explicit height (if not using fill) */
  height?: number;
  /** Loading strategy */
  loading?: 'lazy' | 'eager';
  /** Quality (1-100) */
  quality?: number;
  /** Placeholder blur */
  placeholder?: 'blur' | 'empty';
}

export default function OptimizedImage({
  assetId,
  asset: directAsset,
  alt: altOverride,
  showCaption = false,
  priority = false,
  className = '',
  imageClassName = '',
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  fill = false,
  objectFit = 'cover',
  width,
  height,
  loading,
  quality = 85,
  placeholder = 'empty',
}: OptimizedImageProps) {
  // Resolve asset from ID or use direct asset
  const asset = directAsset || (assetId ? getAssetById(assetId) : undefined);

  if (!asset) {
    console.warn(`OptimizedImage: No asset found for ID "${assetId}"`);
    return null;
  }

  const altText = altOverride || asset.alt;
  const imageSrc = asset.src;

  // Determine dimensions
  const imageWidth = width || asset.width;
  const imageHeight = height || asset.height;

  // If fill is explicitly requested OR if dimensions are not available, use fill mode
  const useFillMode = fill || !imageWidth || !imageHeight;

  return (
    <figure className={`optimized-image-wrapper ${className}`}>
      <div className={useFillMode ? 'relative w-full h-full' : 'relative'}>
        {useFillMode ? (
          <Image
            src={imageSrc}
            alt={altText}
            fill
            sizes={sizes}
            priority={priority}
            loading={loading}
            quality={quality}
            placeholder={placeholder}
            className={`object-${objectFit} ${imageClassName}`}
          />
        ) : (
          <Image
            src={imageSrc}
            alt={altText}
            width={imageWidth}
            height={imageHeight}
            sizes={sizes}
            priority={priority}
            loading={loading}
            quality={quality}
            placeholder={placeholder}
            className={imageClassName}
          />
        )}
      </div>
      {showCaption && asset.caption && (
        <figcaption className="text-sm italic text-charcoal/70 mt-2 text-center font-lato">
          {asset.caption}
        </figcaption>
      )}
    </figure>
  );
}
