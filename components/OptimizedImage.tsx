import Image from 'next/image';
import { getAssetById, validateAssetDimensions, getEffectiveObjectPosition } from '@/lib/assets';
import type { ImageAsset, ObjectPosition } from '@/lib/assets';

interface OptimizedImageProps {
  /** 
   * Asset ID from the manifest. Use this for centralized asset management with metadata.
   * Example: assetId="nation-makers" 
   */
  assetId?: string;
  /** 
   * Direct asset object (if not using ID lookup). Useful for dynamically selected assets.
   * Example: asset={getRandomAssetFromFolder('adventure')}
   */
  asset?: ImageAsset;
  /** Override alt text (uses manifest by default) */
  alt?: string;
  /** Display caption below image */
  showCaption?: boolean;
  /** Image priority (for LCP optimization) - set true for above-the-fold hero images */
  priority?: boolean;
  /** Custom className for the image wrapper */
  className?: string;
  /** Custom className for the image element itself */
  imageClassName?: string;
  /** 
   * Responsive sizes attribute for Next.js Image optimization.
   * Tells the browser how wide the image will be at different viewport sizes.
   * Example: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
   */
  sizes?: string;
  /** 
   * Fill mode (responsive container). When true, image fills parent container absolutely.
   * Parent must have position: relative and defined dimensions.
   */
  fill?: boolean;
  /** 
   * Object fit for fill mode. Controls how image fits in container:
   * - 'cover': Crops to fill container (default for full-bleed)
   * - 'contain': Scales to fit entirely within container (may show empty space)
   * - 'fill': Stretches to fill (may distort)
   */
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  /** 
   * Object position for fill mode. Controls which part of image to focus on when cropping.
   * Overridden by asset.objectPosition or asset.focalPoint from manifest.
   * Examples: 'center' | 'top' | 'bottom' | '50% 30%'
   */
  objectPosition?: ObjectPosition;
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
  objectPosition = 'center',
  width,
  height,
  loading,
  quality = 100,
  placeholder = 'empty',
}: OptimizedImageProps) {
  // Resolve asset from ID or use direct asset
  const asset = directAsset || (assetId ? getAssetById(assetId) : undefined);

  if (!asset) {
    console.warn(`OptimizedImage: No asset found for ID "${assetId}"`);
    return null;
  }

  // Validate dimensions in development
  validateAssetDimensions(asset);

  const altText = altOverride || asset.alt;
  const imageSrc = asset.src;

  // Determine dimensions
  const imageWidth = width || asset.width;
  const imageHeight = height || asset.height;

  // If fill is explicitly requested OR if dimensions are not available, use fill mode
  const useFillMode = fill || !imageWidth || !imageHeight;

  // Determine smart default object-position based on aspect ratio if not provided
  let smartDefault = objectPosition;
  if (!asset.objectPosition && !asset.focalPoint && imageWidth && imageHeight) {
    const aspectRatio = imageWidth / imageHeight;
    // Portrait images: slight upward bias
    if (aspectRatio < 0.8) {
      smartDefault = '50% 40%';
    }
    // Landscape/square: use objectPosition prop default (already set above)
  }

  // Determine effective object position (respects asset focal points)
  const effectiveObjectPosition = useFillMode
    ? getEffectiveObjectPosition(asset, smartDefault)
    : undefined;

  // Debug logging for focal points
  if (process.env.NODE_ENV === 'development' && asset.focalPoint) {
    console.log(`[OptimizedImage] Asset: ${asset.id}`);
    console.log(`[OptimizedImage] FocalPoint:`, asset.focalPoint);
    console.log(`[OptimizedImage] Smart default:`, smartDefault);
    console.log(`[OptimizedImage] Effective:`, effectiveObjectPosition);
  }

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
            className={imageClassName}
            // Important: apply object-fit via inline style so Next/Image doesn't override it
            style={{ objectFit, objectPosition: effectiveObjectPosition }}
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
