'use client';
import { useState, useEffect } from 'react';
import OptimizedImage from '../media/OptimizedImage';
import CTAButton from '../ui/CTAButton';
import RotatingQuotes from '../content/RotatingQuotes';
import { getAssetsFromFolder } from '@/lib/assets';
import type { Quote } from '@/lib/types/content';

interface CTAButtonConfig {
  text: string;
  href: string;
  variant: 'hero-primary' | 'hero-outline';
}

interface HeroSectionProps {
  imageFolder:
    | 'adventure'
    | 'landscapes'
    | 'sacred-texts'
    | 'art-sacred'
    | 'beatrix-potter'
    | 'otto-of-the-silver-hand'
    | 'robin-hood'
    | 'winnie-the-pooh';
  /** When set, the hero draws only these manifest ids from `imageFolder`, then shuffles that shortlist. */
  preferredAssetIds?: readonly string[];
  quotes: Quote[];
  imageAlt?: string;
  showButtons?: boolean;
  buttons?: CTAButtonConfig[];
  title?: string; // Optional large title overlay
  /** Locked brand sentence. Shown only when a page passes it. */
  brandLine?: string;
  /** Append quote source (work title) to the citation. */
  showQuoteSource?: boolean;
  /** Manual advance for the quote set. Autoplay stays off. */
  showQuoteRefresh?: boolean;
}

export default function HeroSection({
  imageFolder,
  preferredAssetIds,
  quotes,
  imageAlt = 'Classical landscape evoking wonder',
  showButtons = true,
  buttons = [
    {
      text: 'Find a School',
      href: '/network-directory',
      variant: 'hero-primary' as const,
    },
    {
      text: 'Explore the Philosophy',
      href: '/philosophy',
      variant: 'hero-outline' as const,
    },
  ],
  title,
  brandLine,
  showQuoteSource = false,
  showQuoteRefresh = false,
}: HeroSectionProps) {
  // Start with deterministic order so the server-rendered HTML and the
  // first client render match (prevents hydration mismatches). Shuffle after mount.
  const preferredKey = preferredAssetIds?.join('\0') ?? '';
  const [heroImages, setHeroImages] = useState(() =>
    getAssetsFromFolder(imageFolder, preferredAssetIds)
  );

  useEffect(() => {
    const ids = preferredKey.length > 0 ? preferredKey.split('\0') : undefined;
    setHeroImages(() => {
      const pool = getAssetsFromFolder(imageFolder, ids);
      if (pool.length <= 1) return pool;
      const shuffled = [...pool];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    });
  }, [imageFolder, preferredKey]);

  const [heroImageIndex] = useState(0);

  // Determine display strategy based on image aspect ratio
  const getImageStrategy = (image: (typeof heroImages)[0]) => {
    if (!image.width || !image.height) {
      return {
        objectFit: 'cover' as const,
        objectPosition: 'center',
        useBackground: false,
      };
    }

    const aspectRatio = image.width / image.height;

    // Portrait images (tall) - use contain with blurred background for full-bleed
    if (aspectRatio < 0.8) {
      return {
        objectFit: 'contain' as const,
        objectPosition: 'center',
        useBackground: true,
      };
    }

    // Landscape images (wide) - use cover with intelligent positioning
    if (aspectRatio >= 1.5) {
      return {
        objectFit: 'cover' as const,
        objectPosition: 'center',
        useBackground: false,
      };
    }

    // Medium landscape/square images - cover with slight top bias
    return {
      objectFit: 'cover' as const,
      objectPosition: '50% 40%',
      useBackground: false,
    };
  };

  const buttonGroup = showButtons && buttons && buttons.length > 0 && (
    <div
      className={`flex flex-col sm:flex-row justify-center ${
        brandLine ? 'gap-4 sm:gap-6' : 'gap-6 mt-6'
      }`}
    >
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
  );

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {heroImages[heroImageIndex] &&
        (() => {
          const strategy = getImageStrategy(heroImages[heroImageIndex]);
          return (
            <>
              <div className="absolute inset-0 z-0 overflow-hidden">
                {strategy.useBackground && (
                  <div
                    className="hero-image-pan absolute inset-0 w-full"
                    style={{ height: '140%', top: '-20%' }}
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
                  style={{ height: '140%', top: '-20%' }}
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

      <div
        className={`relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center min-h-[100svh] pb-12 ${
          brandLine ? 'justify-start pt-[22svh]' : 'justify-center pt-[14vh]'
        }`}
      >
        {/* Title overlay */}
        {title && !brandLine && (
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair text-white mb-8 hero-text-shadow">
            {title}
          </h1>
        )}

        {brandLine && (
          <h1 className="text-hero max-sm:text-[2rem] max-sm:leading-[1.15] font-heading text-parchment hero-text-shadow max-w-4xl mx-auto mb-5 sm:mb-8 text-balance">
            {brandLine}
          </h1>
        )}

        {brandLine && buttonGroup}

        {/* Quote display */}
        {quotes.length > 0 && (
          <RotatingQuotes
            quotes={quotes}
            autoplay={false}
            showRefreshButton={showQuoteRefresh}
            showSource={showQuoteSource}
            quoteClassName={
              brandLine
                ? 'text-lg sm:text-xl md:text-2xl font-heading italic text-white mb-3 leading-relaxed hero-text-shadow'
                : 'text-2xl md:text-4xl font-playfair italic text-white mb-6 leading-relaxed hero-text-shadow'
            }
            authorClassName={
              brandLine
                ? 'text-sm sm:text-base md:text-lg text-parchment/90 not-italic font-accent hero-text-shadow'
                : 'text-xl md:text-2xl text-parchment/90 not-italic font-accent hero-text-shadow'
            }
            className={
              brandLine ? 'mt-6 max-w-3xl mx-auto' : 'mb-8 max-w-4xl mx-auto'
            }
          />
        )}

        {/* CTA Buttons */}
        {!brandLine && buttonGroup}
      </div>
    </section>
  );
}
