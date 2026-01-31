import React from 'react';
import { render, screen } from '@testing-library/react';
import CTAButton from '../../ui/CTAButton';

describe('CTAButton', () => {
  describe('Rendering', () => {
    it('should render button text', () => {
      render(<CTAButton href="/test">Click Me</CTAButton>);
      expect(screen.getByRole('link', { name: /click me/i })).toBeInTheDocument();
    });

    it('should render as a link with correct href', () => {
      render(<CTAButton href="/philosophy">Learn More</CTAButton>);
      const link = screen.getByRole('link', { name: /learn more/i });
      expect(link).toHaveAttribute('href', '/philosophy');
    });
  });

  describe('Variants', () => {
    it('should apply primary variant class', () => {
      render(<CTAButton href="/test" variant="primary">Primary</CTAButton>);
      const link = screen.getByRole('link');
      expect(link).toHaveClass('btn-primary');
    });

    it('should apply secondary variant class', () => {
      render(<CTAButton href="/test" variant="secondary">Secondary</CTAButton>);
      const link = screen.getByRole('link');
      expect(link).toHaveClass('btn-secondary');
    });

    it('should apply outline variant class', () => {
      render(<CTAButton href="/test" variant="outline">Outline</CTAButton>);
      const link = screen.getByRole('link');
      expect(link).toHaveClass('btn-outline');
    });

    it('should default to primary variant when not specified', () => {
      render(<CTAButton href="/test">Default</CTAButton>);
      const link = screen.getByRole('link');
      expect(link).toHaveClass('btn-primary');
    });
  });

  describe('Sizes', () => {
    it('should apply md size class by default', () => {
      render(<CTAButton href="/test">Medium</CTAButton>);
      const link = screen.getByRole('link');
      expect(link).toHaveClass('px-6');
      expect(link).toHaveClass('py-3');
    });

    it('should apply lg size class when specified', () => {
      render(<CTAButton href="/test" size="lg">Large</CTAButton>);
      const link = screen.getByRole('link');
      expect(link).toHaveClass('px-8');
      expect(link).toHaveClass('py-4');
    });

    it('should apply sm size class when specified', () => {
      render(<CTAButton href="/test" size="sm">Small</CTAButton>);
      const link = screen.getByRole('link');
      expect(link).toHaveClass('px-4');
      expect(link).toHaveClass('py-2');
    });
  });

  describe('Full Width', () => {
    it('should apply full width class when specified', () => {
      render(<CTAButton href="/test" fullWidth>Full Width</CTAButton>);
      const link = screen.getByRole('link');
      expect(link).toHaveClass('w-full');
    });

    it('should not apply full width class by default', () => {
      render(<CTAButton href="/test">Normal Width</CTAButton>);
      const link = screen.getByRole('link');
      expect(link).not.toHaveClass('w-full');
    });
  });

  describe('Accessibility', () => {
    it('should be accessible as a link', () => {
      render(<CTAButton href="/contact">Contact Us</CTAButton>);
      const link = screen.getByRole('link', { name: /contact us/i });
      expect(link).toBeInTheDocument();
    });

    it('should support external links', () => {
      render(<CTAButton href="https://example.com">External Link</CTAButton>);
      const link = screen.getByRole('link', { name: /external link/i });
      expect(link).toHaveAttribute('href', 'https://example.com');
    });

    it('should have proper focus styles', () => {
      const { container } = render(<CTAButton href="/test">Focus Test</CTAButton>);
      const link = container.querySelector('a');
      // btn-primary class includes focus styles via Tailwind @apply
      expect(link).toHaveClass('btn-primary');
    });
  });

  describe('Content', () => {
    it('should render children text', () => {
      render(<CTAButton href="/test">Explore Schools</CTAButton>);
      expect(screen.getByText(/explore schools/i)).toBeInTheDocument();
    });

    it('should handle long button text', () => {
      render(
        <CTAButton href="/test">
          This is a very long button text that should wrap properly
        </CTAButton>
      );
      expect(screen.getByRole('link')).toHaveTextContent(
        /This is a very long button text/i
      );
    });
  });
});
