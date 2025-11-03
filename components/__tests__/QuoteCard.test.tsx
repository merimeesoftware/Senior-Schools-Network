import React from 'react';
import { render, screen } from '@testing-library/react';
import QuoteCard from '../QuoteCard';

describe('QuoteCard', () => {
  const mockQuote = {
    quote: 'Wonder is the beginning of wisdom',
    author: 'Greek Proverb',
    source: 'Ancient Wisdom',
  };

  describe('Rendering', () => {
    it('should render quote text', () => {
      render(<QuoteCard {...mockQuote} />);
      expect(screen.getByText(/Wonder is the beginning of wisdom/i)).toBeInTheDocument();
    });

    it('should render author attribution', () => {
      render(<QuoteCard {...mockQuote} />);
      expect(screen.getByText(/Greek Proverb/i)).toBeInTheDocument();
    });

    it('should render source when provided', () => {
      render(<QuoteCard {...mockQuote} />);
      expect(screen.getByText(/Ancient Wisdom/i)).toBeInTheDocument();
    });

    it('should not render source section when source is omitted', () => {
      const quoteWithoutSource = {
        quote: 'Test quote',
        author: 'Test Author',
      };
      render(<QuoteCard {...quoteWithoutSource} />);
      expect(screen.queryByText(/Test Author/i)).toBeInTheDocument();
    });
  });

  describe('Variants', () => {
    it('should apply default variant styles', () => {
      const { container } = render(<QuoteCard {...mockQuote} variant="default" />);
      const blockquote = container.querySelector('blockquote');
      expect(blockquote).toHaveClass('card');
    });

    it('should apply hero variant styles', () => {
      const { container } = render(<QuoteCard {...mockQuote} variant="hero" />);
      const blockquote = container.querySelector('blockquote');
      expect(blockquote).toHaveClass('card-elevated');
      expect(blockquote).toHaveClass('text-center');
    });

    it('should apply scripture variant styles', () => {
      const scriptureQuote = {
        quote: 'Train up a child in the way he should go',
        author: 'Proverbs 22:6',
      };
      const { container } = render(<QuoteCard {...scriptureQuote} variant="scripture" />);
      const blockquote = container.querySelector('blockquote');
      expect(blockquote).toHaveClass('card');
      expect(blockquote).toHaveClass('bg-spiritual/10');
    });

    it('should apply embedded variant styles', () => {
      const { container } = render(<QuoteCard {...mockQuote} variant="embedded" />);
      const blockquote = container.querySelector('blockquote');
      expect(blockquote).toHaveClass('quote-block');
    });
  });

  describe('Accessibility', () => {
    it('should use semantic blockquote element', () => {
      const { container } = render(<QuoteCard {...mockQuote} />);
      expect(container.querySelector('blockquote')).toBeInTheDocument();
    });

    it('should use cite element for attribution', () => {
      const { container } = render(<QuoteCard {...mockQuote} />);
      expect(container.querySelector('cite')).toBeInTheDocument();
    });

    it('should have proper semantic structure', () => {
      const { container } = render(<QuoteCard {...mockQuote} />);
      const blockquote = container.querySelector('blockquote');
      const cite = container.querySelector('cite');
      
      expect(blockquote).toContainElement(cite);
    });
  });

  describe('Content Safety', () => {
    it('should handle quotes with special characters', () => {
      const quoteWithSpecialChars = {
        quote: 'Test "quoted" text & symbols',
        author: 'Test Author',
      };
      render(<QuoteCard {...quoteWithSpecialChars} />);
      expect(screen.getByText(/Test "quoted" text & symbols/i)).toBeInTheDocument();
    });

    it('should handle long quotes', () => {
      const longQuote = {
        quote: 'This is a very long quote that might span multiple lines and should be rendered properly without breaking the layout or causing accessibility issues for screen reader users.',
        author: 'Long Author Name',
      };
      render(<QuoteCard {...longQuote} />);
      expect(screen.getByText(/This is a very long quote/i)).toBeInTheDocument();
    });
  });
});
