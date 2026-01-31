'use client';
import { useState, useEffect, useRef } from 'react';
import OptimizedImage from '../media/OptimizedImage';
import RotatingQuotes from './RotatingQuotes';
import { getAssetsFromFolder } from '@/lib/assets';
import type { Quote } from '@/lib/types/content';

interface QuoteImageBreakProps {
  quotes: Quote[];
  imageFolder: 'adventure' | 'landscapes' | 'sacred-texts' | 'art-sacred' | 'beatrix-potter' | 'nursery-illustrations' | 'otto-of-the-silver-hand' | 'robin-hood' | 'winnie-the-pooh';
  imageAlt: string;
  quoteClassName?: string;
  authorClassName?: string;
  showRefreshButton?: boolean;
  enableParallax?: boolean;
  /**
   * Portrait image handling strategy:
   * - 'cover-crop' (default): Uses object-fit: cover to crop portrait images naturally.
   *   Positioning determined by asset focal points or smart defaults (slight upward bias).
   * - 'contain-bg': Preserves entire image with object-fit: contain, adds blurred background
   *   to maintain full-bleed look. Use when cropping would lose important content.
   */
  portraitMode?: 'cover-crop' | 'contain-bg';
}

export default function QuoteImageBreak({
  quotes,
  imageFolder,
  imageAlt,
  quoteClassName = "text-xl md:text-3xl font-playfair italic text-white leading-relaxed hero-text-shadow",
  authorClassName = "text-lg md:text-xl text-parchment/90 font-lato mt-4 hero-text-shadow",
  showRefreshButton = false,
  enableParallax = true,
  portraitMode = 'cover-crop',
}: QuoteImageBreakProps) {
  // Get all images from folder and shuffle them for rotation
  const [images] = useState(() => {
    const allImages = getAssetsFromFolder(imageFolder);
    if (allImages.length === 0) return [];
    
    // Fisher-Yates shuffle for random order
    const shuffled = [...allImages];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    
    return shuffled;
  });
  
  const [imageIndex, setImageIndex] = useState(0);
  
  // Parallax effect
  const sectionRef = useRef<HTMLDivElement>(null);
  const [parallaxOffset, setParallaxOffset] = useState(0);
  
  useEffect(() => {
    if (!enableParallax) return;
    
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Calculate progress: 0 when section enters viewport, 1 when it exits
        // When rect.top = windowHeight (section just entering), progress = 0
        // When rect.bottom = 0 (section just exiting), progress = 1
        const scrollProgress = (windowHeight - rect.top) / (windowHeight + rect.height);
        const clampedProgress = Math.max(0, Math.min(1, scrollProgress));
        
        // Image is 150vh tall, viewport is 80-90vh
        // Start at -25% (showing top portion) when section enters
        // Move to +25% (showing bottom portion) when section exits
        // This creates a 50% total movement range for strong parallax
        setParallaxOffset(-33 + (clampedProgress * 50));
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initialize on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [enableParallax]);
  
  const handleRefresh = () => {
    setImageIndex((i) => (i + 1) % images.length);
  };

  // Determine display strategy based on image aspect ratio
  const getImageStrategy = (image: typeof images[0]) => {
    if (!image.width || !image.height) {
      return { objectFit: 'cover' as const, useBackground: false };
    }
    
    const aspectRatio = image.width / image.height;
    
    // Portrait images (tall)
    if (aspectRatio < 0.8) {
      if (portraitMode === 'contain-bg') {
        // Preserve entire image with blurred background to maintain full-bleed aesthetic
        return { objectFit: 'contain' as const, useBackground: true };
      }
      // Default: crop to fill using cover - OptimizedImage handles positioning via focal points
      return { objectFit: 'cover' as const, useBackground: false };
    }
    
    // Landscape images (wide) - use cover
    if (aspectRatio >= 1.5) {
      return { objectFit: 'cover' as const, useBackground: false };
    }
    
    // Medium landscape/square images - cover
    return { objectFit: 'cover' as const, useBackground: false };
  };

  return (
    <section 
      ref={sectionRef}
      className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background image with parallax pan effect */}
      {images[imageIndex] && (() => {
        const strategy = getImageStrategy(images[imageIndex]);
        return (
          <div className="absolute inset-0 z-0 overflow-hidden" key={`image-${imageIndex}`}>
            {strategy.useBackground && (
              <div 
                className="absolute inset-0 w-full"
                style={{
                  height: '140vh',
                  transform: enableParallax ? `translateY(${parallaxOffset}%)` : undefined,
                  willChange: enableParallax ? 'transform' : undefined,
                }}
              >
                <OptimizedImage
                  asset={images[imageIndex]}
                  alt=""
                  fill={true}
                  objectFit="cover"
                  objectPosition="center"
                  sizes="100vw"
                  className="w-full h-full blur-2xl scale-110 opacity-60"
                />
              </div>
            )}
            <div 
              className="absolute inset-0 w-full"
              style={{
                height: '140vh',
                transform: enableParallax ? `translateY(${parallaxOffset}%)` : undefined,
                willChange: enableParallax ? 'transform' : undefined,
              }}
            >
              <OptimizedImage
                asset={images[imageIndex]}
                alt={imageAlt}
                fill={true}
                objectFit={strategy.objectFit}
                sizes="100vw"
                className="w-full h-full"
              />
            </div>
          </div>
        );
      })()}
      
      {/* Dark overlay */}
      <div className="absolute inset-0 z-[1] bg-charcoal/50"></div>
      
      {/* Quote with refresh button */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {quotes.length > 0 && (
          <RotatingQuotes 
            quotes={quotes}
            autoplay={false}
            showRefreshButton={showRefreshButton}
            onRefresh={handleRefresh}
            quoteClassName={quoteClassName}
            authorClassName={authorClassName}
          />
        )}
      </div>
    </section>
  );
}
