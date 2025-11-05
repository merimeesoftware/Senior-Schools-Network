'use client';
import { useState, useEffect, useRef } from 'react';
import OptimizedImage from './OptimizedImage';
import RotatingQuotes from './RotatingQuotes';
import { getRandomAssetFromFolder } from '@/lib/assets';
import type { Quote } from '@/lib/types/content';

interface QuoteImageBreakProps {
  quotes: Quote[];
  imageFolder: 'adventure' | 'landscapes' | 'sacred-texts' | 'art-sacred' | 'beatrix-potter' | 'nursery-illustrations' | 'otto-of-the-silver-hand' | 'robin-hood' | 'winnie-the-pooh';
  imageAlt: string;
  quoteClassName?: string;
  authorClassName?: string;
  showRefreshButton?: boolean;
  enableParallax?: boolean;
}

export default function QuoteImageBreak({
  quotes,
  imageFolder,
  imageAlt,
  quoteClassName = "text-xl md:text-3xl font-playfair italic text-white leading-relaxed drop-shadow-2xl",
  authorClassName = "text-lg md:text-xl text-parchment/90 font-lato mt-4",
  showRefreshButton = true,
  enableParallax = true,
}: QuoteImageBreakProps) {
  // Pre-load 3 random images for rotation
  const [images] = useState(() => [
    getRandomAssetFromFolder(imageFolder),
    getRandomAssetFromFolder(imageFolder),
    getRandomAssetFromFolder(imageFolder),
  ]);
  
  const [imageIndex, setImageIndex] = useState(0);
  
  // Parallax effect
  const sectionRef = useRef<HTMLDivElement>(null);
  const [parallaxOffset, setParallaxOffset] = useState(0);
  
  useEffect(() => {
    if (!enableParallax) return;
    
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        const clampedProgress = Math.max(0, Math.min(1, scrollProgress));
        setParallaxOffset(clampedProgress * 20); // Move 20% over scroll range
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initialize on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [enableParallax]);
  
  const handleRefresh = () => {
    setImageIndex((i) => (i + 1) % images.length);
  };

  return (
    <section 
      ref={sectionRef}
      className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background image with parallax pan effect */}
      {images[imageIndex] && (
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div 
            className="absolute inset-0 w-full"
            style={{
              height: '120vh',
              transform: enableParallax ? `translateY(${parallaxOffset}%)` : undefined,
              willChange: enableParallax ? 'transform' : undefined,
            }}
          >
            <OptimizedImage
              asset={images[imageIndex]}
              alt={imageAlt}
              fill={true}
              objectFit="cover"
              sizes="100vw"
              className="w-full h-full"
            />
          </div>
        </div>
      )}
      
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
