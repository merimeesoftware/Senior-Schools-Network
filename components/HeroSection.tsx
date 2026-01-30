'use client';
import { useState } from 'react';
import OptimizedImage from './OptimizedImage';
import CTAButton from './CTAButton';
import RotatingQuotes from './RotatingQuotes';
import { getAssetsFromFolder } from '@/lib/assets';
import type { Quote } from '@/lib/types/content';

interface CTAButtonConfig {
  text: string;
  href: string;
  variant: 'hero-primary' | 'hero-outline';
}

interface HeroSectionProps {
  imageFolder: 'adventure' | 'landscapes' | 'sacred-texts' | 'art-sacred' | 'beatrix-potter' | 'nursery-illustrations' | 'otto-of-the-silver-hand' | 'robin-hood' | 'winnie-the-pooh';
  quotes: Quote[];
  imageAlt?: string;
  showButtons?: boolean;
  buttons?: CTAButtonConfig[];
  title?: string; // Optional large title overlay
}

export default function HeroSection({
  imageFolder,
  quotes,
  imageAlt = "Classical landscape evoking wonder",
  showButtons = true,
  buttons = [
    { text: 'Explore Directory', href: '/network-directory', variant: 'hero-primary' as const },
    { text: 'Our Philosophy', href: '/philosophy', variant: 'hero-outline' as const },
  ],
  title,
}: HeroSectionProps) {
  // Get all images from folder and shuffle them
  const [heroImages] = useState(() => {
    const allImages = getAssetsFromFolder(imageFolder);
    if (allImages.length === 0) return [];
    
    // Fisher-Yates shuffle
    const shuffled = [...allImages];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    
    return shuffled;
  });
  
  const [heroImageIndex] = useState(0);

  // Determine display strategy based on image aspect ratio
  const getImageStrategy = (image: typeof heroImages[0]) => {
    if (!image.width || !image.height) {
      return { objectFit: 'cover' as const, objectPosition: 'center', useBackground: false };
    }
    
    const aspectRatio = image.width / image.height;
    
    // Portrait images (tall) - use contain with blurred background for full-bleed
    if (aspectRatio < 0.8) {
      return { objectFit: 'contain' as const, objectPosition: 'center', useBackground: true };
    }
    
    // Landscape images (wide) - use cover with intelligent positioning
    if (aspectRatio >= 1.5) {
      return { objectFit: 'cover' as const, objectPosition: 'center', useBackground: false };
    }
    
    // Medium landscape/square images - cover with slight top bias
    return { objectFit: 'cover' as const, objectPosition: '50% 40%', useBackground: false };
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {heroImages[heroImageIndex] && (() => {
        const strategy = getImageStrategy(heroImages[heroImageIndex]);
        return (
          <>
            <div className="absolute inset-0 z-0 overflow-hidden">
              {strategy.useBackground && (
                <div 
                  className="hero-image-pan absolute inset-0 w-full" 
                  style={{ height: '120vh' }}
                >
                  <OptimizedImage
                    asset={heroImages[heroImageIndex]}
                    alt=""
                    showCaption={false}
                    fill={true}
                    objectFit="cover"
                    objectPosition="center"
                    sizes="100vw"
                    priority
                    className="w-full h-full blur-2xl scale-110 opacity-60"
                  />
                </div>
              )}
              <div 
                className="hero-image-pan absolute inset-0 w-full" 
                style={{ height: '120vh' }}
              >
                <OptimizedImage
                  asset={heroImages[heroImageIndex]}
                  alt={imageAlt}
                  showCaption={false}
                  fill={true}
                  objectFit={strategy.objectFit}
                  objectPosition={strategy.objectPosition}
                  sizes="100vw"
                  priority
                  className="w-full h-full"
                />
              </div>
            </div>
            <div className="absolute inset-0 z-[1] hero-gradient"></div>
          </>
        );
      })()}

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center justify-center min-h-screen pt-24 pb-12">
        {/* Title overlay */}
        {title && (
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair text-white mb-8 hero-text-shadow">
            {title}
          </h1>
        )}
        
        {/* Quote display */}
        {quotes.length > 0 && (
          <RotatingQuotes 
            quotes={quotes}
            autoplay={false}
            showRefreshButton={false}
            quoteClassName="text-2xl md:text-4xl font-playfair italic text-white mb-6 leading-relaxed hero-text-shadow"
            authorClassName="text-xl md:text-2xl text-parchment/90 not-italic font-lato hero-text-shadow"
            className="mb-8 max-w-4xl mx-auto"
          />
        )}
        
        {/* CTA Buttons */}
        {showButtons && buttons && buttons.length > 0 && (
          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-6">
            {buttons.map((button, index) => (
              <CTAButton 
                key={index} 
                href={button.href} 
                variant={button.variant} 
                size="lg"
              >
                {button.text}
              </CTAButton>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
