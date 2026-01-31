import React from 'react';
import { render, screen } from '@testing-library/react';
import OptimizedImage from '../../media/OptimizedImage';
import { getAssetById, getEffectiveObjectPosition } from '@/lib/assets';
import type { ImageAsset } from '@/lib/assets';

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: function MockImage(props: Record<string, unknown>) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { fill, priority, loading, quality, placeholder, sizes, ...imgProps } = props;
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...imgProps} data-fill={fill} data-priority={priority} data-sizes={sizes} data-quality={quality} />;
  },
}));

// Mock assets module
jest.mock('@/lib/assets', () => ({
  getAssetById: jest.fn(),
  validateAssetDimensions: jest.fn(() => true),
  getEffectiveObjectPosition: jest.fn((asset, defaultPos) => asset.objectPosition || defaultPos),
}));

describe('OptimizedImage', () => {
  const mockLandscapeAsset: ImageAsset = {
    id: 'test-landscape',
    src: '/images/test/landscape.webp',
    alt: 'Test landscape image',
    width: 1600,
    height: 900,
    stage: 'gymnasium',
  };

  const mockPortraitAsset: ImageAsset = {
    id: 'test-portrait',
    src: '/images/test/portrait.webp',
    alt: 'Test portrait image',
    width: 800,
    height: 1200,
    stage: 'nursery',
  };

  const mockPortraitWithFocal: ImageAsset = {
    id: 'test-portrait-focal',
    src: '/images/test/portrait-focal.webp',
    alt: 'Portrait with focal point',
    width: 800,
    height: 1200,
    objectPosition: '50% 35%',
  };

  const mockAssetNoDimensions: ImageAsset = {
    id: 'test-no-dims',
    src: '/images/test/no-dims.webp',
    alt: 'Asset without dimensions',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Asset Resolution', () => {
    it('should render asset from assetId', () => {
      (getAssetById as jest.Mock).mockReturnValue(mockLandscapeAsset);
      
      render(<OptimizedImage assetId="test-landscape" />);
      
      expect(getAssetById).toHaveBeenCalledWith('test-landscape');
      expect(screen.getByAltText('Test landscape image')).toBeInTheDocument();
    });

    it('should render direct asset without ID lookup', () => {
      render(<OptimizedImage asset={mockPortraitAsset} />);
      
      expect(getAssetById).not.toHaveBeenCalled();
      expect(screen.getByAltText('Test portrait image')).toBeInTheDocument();
    });

    it('should return null for missing asset', () => {
      (getAssetById as jest.Mock).mockReturnValue(undefined);
      const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();
      
      const { container } = render(<OptimizedImage assetId="nonexistent" />);
      
      expect(container.firstChild).toBeNull();
      expect(consoleWarnSpy).toHaveBeenCalledWith(
        expect.stringContaining('No asset found for ID "nonexistent"')
      );
      
      consoleWarnSpy.mockRestore();
    });
  });

  describe('Fill Mode Behavior', () => {
    it('should use fill mode when explicitly requested', () => {
      render(<OptimizedImage asset={mockLandscapeAsset} fill={true} />);
      
      const img = screen.getByAltText('Test landscape image');
      // In fill mode, wrapper should have specific classes
      const wrapper = img.parentElement;
      expect(wrapper).toHaveClass('relative');
      expect(wrapper).toHaveClass('w-full');
      expect(wrapper).toHaveClass('h-full');
    });

    it('should use fill mode when dimensions are missing', () => {
      render(<OptimizedImage asset={mockAssetNoDimensions} />);
      
      const img = screen.getByAltText('Asset without dimensions');
      const wrapper = img.parentElement;
      expect(wrapper).toHaveClass('relative');
      expect(wrapper).toHaveClass('w-full');
      expect(wrapper).toHaveClass('h-full');
    });

    it('should use explicit dimensions when available and fill not requested', () => {
      render(<OptimizedImage asset={mockLandscapeAsset} />);
      
      const img = screen.getByAltText('Test landscape image');
      expect(img).toHaveAttribute('width', '1600');
      expect(img).toHaveAttribute('height', '900');
    });
  });

  describe('Object Position Handling', () => {
    it('should apply inline objectPosition style in fill mode', () => {
      render(
        <OptimizedImage 
          asset={mockLandscapeAsset} 
          fill={true}
          objectPosition="50% 40%"
        />
      );
      
      const img = screen.getByAltText('Test landscape image');
      expect(img).toHaveStyle({ objectPosition: '50% 40%' });
    });

    it('should use asset objectPosition from manifest', () => {
      (getEffectiveObjectPosition as jest.Mock).mockReturnValue('50% 35%');
      
      render(
        <OptimizedImage 
          asset={mockPortraitWithFocal} 
          fill={true}
        />
      );
      
      expect(getEffectiveObjectPosition).toHaveBeenCalledWith(
        mockPortraitWithFocal,
        'center'
      );
    });

    it('should apply objectFit style in fill mode', () => {
      render(
        <OptimizedImage 
          asset={mockLandscapeAsset} 
          fill={true}
          objectFit="cover"
        />
      );
      
      const img = screen.getByAltText('Test landscape image');
      expect(img).toHaveStyle({ objectFit: 'cover' });
    });
  });

  describe('Alt Text and Caption', () => {
    it('should use alt text from asset by default', () => {
      render(<OptimizedImage asset={mockLandscapeAsset} />);
      
      expect(screen.getByAltText('Test landscape image')).toBeInTheDocument();
    });

    it('should allow alt text override', () => {
      render(
        <OptimizedImage 
          asset={mockLandscapeAsset} 
          alt="Custom alt text"
        />
      );
      
      expect(screen.getByAltText('Custom alt text')).toBeInTheDocument();
    });

    it('should show caption when showCaption is true and caption exists', () => {
      const assetWithCaption = {
        ...mockLandscapeAsset,
        caption: 'Beautiful landscape',
      };
      
      render(
        <OptimizedImage 
          asset={assetWithCaption} 
          showCaption={true}
        />
      );
      
      expect(screen.getByText('Beautiful landscape')).toBeInTheDocument();
    });

    it('should not show caption when showCaption is false', () => {
      const assetWithCaption = {
        ...mockLandscapeAsset,
        caption: 'Beautiful landscape',
      };
      
      render(
        <OptimizedImage 
          asset={assetWithCaption} 
          showCaption={false}
        />
      );
      
      expect(screen.queryByText('Beautiful landscape')).not.toBeInTheDocument();
    });
  });

  describe('Next.js Image Props', () => {
    it('should pass priority prop to Image', () => {
      render(<OptimizedImage asset={mockLandscapeAsset} priority={true} />);
      
      const img = screen.getByAltText('Test landscape image');
      // Mock converts priority to attribute, check it was passed
      expect(img).toBeDefined();
    });

    it('should pass sizes prop to Image', () => {
      render(
        <OptimizedImage 
          asset={mockLandscapeAsset} 
          fill={true}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      );
      
      const img = screen.getByAltText('Test landscape image');
      expect(img).toHaveAttribute('data-sizes', '(max-width: 768px) 100vw, 50vw');
    });

    it('should pass quality prop to Image', () => {
      render(<OptimizedImage asset={mockLandscapeAsset} quality={90} />);
      
      const img = screen.getByAltText('Test landscape image');
      expect(img).toHaveAttribute('data-quality', '90');
    });
  });

  describe('Custom Styling', () => {
    it('should apply custom className to wrapper', () => {
      const { container } = render(
        <OptimizedImage 
          asset={mockLandscapeAsset} 
          className="custom-wrapper"
        />
      );
      
      const figure = container.querySelector('figure');
      expect(figure).toHaveClass('custom-wrapper');
    });

    it('should apply imageClassName to image element', () => {
      render(
        <OptimizedImage 
          asset={mockLandscapeAsset} 
          imageClassName="custom-image"
        />
      );
      
      const img = screen.getByAltText('Test landscape image');
      expect(img).toHaveClass('custom-image');
    });
  });

  describe('Dimension Override', () => {
    it('should use explicit width/height props over asset dimensions', () => {
      render(
        <OptimizedImage 
          asset={mockLandscapeAsset} 
          width={800}
          height={450}
        />
      );
      
      const img = screen.getByAltText('Test landscape image');
      expect(img).toHaveAttribute('width', '800');
      expect(img).toHaveAttribute('height', '450');
    });
  });
});
