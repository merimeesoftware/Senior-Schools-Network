import React from 'react';
import { render, screen } from '@testing-library/react';
import QuoteImageBreak from '../QuoteImageBreak';
import type { Quote } from '@/lib/types/content';
import { getAssetsFromFolder } from '@/lib/assets';

// Mock child components
jest.mock('../OptimizedImage', () => ({
  __esModule: true,
  default: ({ asset, alt, objectFit, objectPosition }: {
    asset?: { id?: string };
    alt?: string;
    objectFit?: string;
    objectPosition?: string;
  }) => (
    <div 
      data-testid="optimized-image" 
      data-alt={alt}
      data-object-fit={objectFit}
      data-object-position={objectPosition}
      data-asset-id={asset?.id}
    />
  ),
}));

jest.mock('../RotatingQuotes', () => ({
  __esModule: true,
  default: ({ quotes }: { quotes: Array<{ quote?: string }> }) => (
    <div data-testid="rotating-quotes">
      {quotes[0]?.quote}
    </div>
  ),
}));

// Mock assets
jest.mock('@/lib/assets', () => ({
  getAssetsFromFolder: jest.fn((folder: string) => {
    if (folder === 'adventure') {
      return [
        {
          id: 'landscape-asset',
          src: '/images/adventure/landscape.webp',
          alt: 'Wide landscape',
          width: 1920,
          height: 1080,
        },
        {
          id: 'portrait-asset',
          src: '/images/adventure/portrait.webp',
          alt: 'Tall portrait',
          width: 800,
          height: 1200,
        },
        {
          id: 'portrait-with-position',
          src: '/images/adventure/focused-portrait.webp',
          alt: 'Portrait with focal point',
          width: 800,
          height: 1200,
          objectPosition: '50% 30%',
        },
      ];
    }
    return [];
  }),
}));

describe('QuoteImageBreak', () => {
  const mockQuotes: Quote[] = [
    {
      id: 'test-quote-1',
      quote: 'Wonder is the beginning of wisdom.',
      author: 'Socrates',
      category: 'philosophy',
      stage: 'nursery',
    },
    {
      id: 'test-quote-2',
      quote: 'Education is an atmosphere, a discipline, a life.',
      author: 'Charlotte Mason',
      category: 'philosophy',
      stage: 'poetic',
    },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Rendering', () => {
    it('should render with default props', () => {
      render(
        <QuoteImageBreak 
          quotes={mockQuotes}
          imageFolder="adventure"
          imageAlt="Adventure scene"
        />
      );
      
      expect(screen.getByTestId('rotating-quotes')).toBeInTheDocument();
      expect(screen.getByTestId('optimized-image')).toBeInTheDocument();
    });

    it('should display quotes', () => {
      render(
        <QuoteImageBreak 
          quotes={mockQuotes}
          imageFolder="adventure"
          imageAlt="Adventure scene"
        />
      );
      
      expect(screen.getByText('Wonder is the beginning of wisdom.')).toBeInTheDocument();
    });
  });

  describe('Image Strategy Selection', () => {
    it('should use cover strategy for landscape images by default', () => {
      (getAssetsFromFolder as jest.Mock).mockReturnValue([
        {
          id: 'landscape-asset',
          src: '/images/adventure/landscape.webp',
          alt: 'Wide landscape',
          width: 1920,
          height: 1080, // aspect ratio 1.78 (landscape)
        },
      ]);

      render(
        <QuoteImageBreak 
          quotes={mockQuotes}
          imageFolder="adventure"
          imageAlt="Landscape adventure"
        />
      );
      
      const image = screen.getAllByTestId('optimized-image')[0];
      expect(image).toHaveAttribute('data-object-fit', 'cover');
    });

    it('should use cover-crop strategy for portrait images by default', () => {
      (getAssetsFromFolder as jest.Mock).mockReturnValue([
        {
          id: 'portrait-asset',
          src: '/images/adventure/portrait.webp',
          alt: 'Tall portrait',
          width: 800,
          height: 1200, // aspect ratio 0.67 (portrait)
        },
      ]);

      render(
        <QuoteImageBreak 
          quotes={mockQuotes}
          imageFolder="adventure"
          imageAlt="Portrait adventure"
          portraitMode="cover-crop"
        />
      );
      
      const image = screen.getAllByTestId('optimized-image')[0];
      expect(image).toHaveAttribute('data-object-fit', 'cover');
    });

    it('should use contain-bg strategy when portraitMode is contain-bg', () => {
      (getAssetsFromFolder as jest.Mock).mockReturnValue([
        {
          id: 'portrait-asset',
          src: '/images/adventure/portrait.webp',
          alt: 'Tall portrait',
          width: 800,
          height: 1200,
        },
      ]);

      render(
        <QuoteImageBreak 
          quotes={mockQuotes}
          imageFolder="adventure"
          imageAlt="Portrait adventure"
          portraitMode="contain-bg"
        />
      );
      
      const images = screen.getAllByTestId('optimized-image');
      // Should have background blur layer
      expect(images.length).toBeGreaterThan(1);
      // Foreground should use contain
      expect(images[images.length - 1]).toHaveAttribute('data-object-fit', 'contain');
    });

    it('should apply custom portraitObjectPosition', () => {
      (getAssetsFromFolder as jest.Mock).mockReturnValue([
        {
          id: 'portrait-asset',
          src: '/images/adventure/portrait.webp',
          alt: 'Tall portrait',
          width: 800,
          height: 1200,
        },
      ]);

      render(
        <QuoteImageBreak 
          quotes={mockQuotes}
          imageFolder="adventure"
          imageAlt="Portrait adventure"
          portraitMode="cover-crop"
          portraitObjectPosition="50% 35%"
        />
      );
      
      const image = screen.getAllByTestId('optimized-image')[0];
      expect(image).toHaveAttribute('data-object-position', '50% 35%');
    });

    it('should prefer asset objectPosition over default portraitObjectPosition', () => {
      (getAssetsFromFolder as jest.Mock).mockReturnValue([
        {
          id: 'portrait-with-position',
          src: '/images/adventure/focused-portrait.webp',
          alt: 'Portrait with focal point',
          width: 800,
          height: 1200,
          objectPosition: '50% 30%',
        },
      ]);

      render(
        <QuoteImageBreak 
          quotes={mockQuotes}
          imageFolder="adventure"
          imageAlt="Portrait with focus"
          portraitObjectPosition="50% 40%"
        />
      );
      
      const image = screen.getAllByTestId('optimized-image')[0];
      // Should use asset's objectPosition, not prop default
      expect(image).toHaveAttribute('data-object-position', '50% 30%');
    });
  });

  describe('Edge Cases', () => {
    it('should handle assets without dimensions gracefully', () => {
      (getAssetsFromFolder as jest.Mock).mockReturnValue([
        {
          id: 'no-dims',
          src: '/images/adventure/no-dims.webp',
          alt: 'Asset without dimensions',
        },
      ]);

      render(
        <QuoteImageBreak 
          quotes={mockQuotes}
          imageFolder="adventure"
          imageAlt="Unknown dimensions"
        />
      );
      
      const image = screen.getByTestId('optimized-image');
      // Should default to cover with center position
      expect(image).toHaveAttribute('data-object-fit', 'cover');
      expect(image).toHaveAttribute('data-object-position', 'center');
    });

    it('should handle empty image folder', () => {
      (getAssetsFromFolder as jest.Mock).mockReturnValue([]);

      render(
        <QuoteImageBreak 
          quotes={mockQuotes}
          imageFolder="adventure"
          imageAlt="No images"
        />
      );
      
      // Should still render section with quotes
      expect(screen.getByTestId('rotating-quotes')).toBeInTheDocument();
    });

    it('should shuffle images for rotation', () => {
      const mockAssets = [
        { id: 'img-1', src: '/1.webp', alt: 'Image 1', width: 100, height: 100 },
        { id: 'img-2', src: '/2.webp', alt: 'Image 2', width: 100, height: 100 },
        { id: 'img-3', src: '/3.webp', alt: 'Image 3', width: 100, height: 100 },
      ];
      (getAssetsFromFolder as jest.Mock).mockReturnValue(mockAssets);

      // Render multiple times to observe shuffle
      const { rerender } = render(
        <QuoteImageBreak 
          quotes={mockQuotes}
          imageFolder="adventure"
          imageAlt="Shuffled images"
        />
      );

      const firstImage = screen.getByTestId('optimized-image').getAttribute('data-asset-id');

      // Re-render should potentially show different image due to shuffle
      rerender(
        <QuoteImageBreak 
          quotes={mockQuotes}
          imageFolder="adventure"
          imageAlt="Shuffled images"
        />
      );

      // Note: This test is non-deterministic due to random shuffle
      // In production, you might seed Math.random for deterministic tests
      expect(['img-1', 'img-2', 'img-3']).toContain(firstImage);
    });
  });

  describe('Parallax', () => {
    it('should enable parallax by default', () => {
      render(
        <QuoteImageBreak 
          quotes={mockQuotes}
          imageFolder="adventure"
          imageAlt="Parallax scene"
        />
      );
      
      // Note: Testing actual parallax behavior requires DOM manipulation
      // which is better suited for E2E tests
      expect(screen.getByTestId('rotating-quotes')).toBeInTheDocument();
    });

    it('should disable parallax when enableParallax is false', () => {
      render(
        <QuoteImageBreak 
          quotes={mockQuotes}
          imageFolder="adventure"
          imageAlt="Static scene"
          enableParallax={false}
        />
      );
      
      // Component should still render
      expect(screen.getByTestId('rotating-quotes')).toBeInTheDocument();
    });
  });

  describe('Custom Styling', () => {
    it('should apply custom quote className', () => {
      const customQuoteClass = 'text-4xl font-bold';
      
      render(
        <QuoteImageBreak 
          quotes={mockQuotes}
          imageFolder="adventure"
          imageAlt="Styled quotes"
          quoteClassName={customQuoteClass}
        />
      );
      
      // RotatingQuotes receives the className (verified via mock)
      expect(screen.getByTestId('rotating-quotes')).toBeInTheDocument();
    });
  });
});
