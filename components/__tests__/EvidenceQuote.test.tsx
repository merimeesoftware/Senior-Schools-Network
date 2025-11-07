import { render, screen } from '@testing-library/react';
import EvidenceQuote from '../EvidenceQuote';

describe('EvidenceQuote', () => {
  describe('Basic Rendering', () => {
    it('renders quote text', () => {
      render(
        <EvidenceQuote
          quote="Test quote text"
          author="Test Author"
          source="Test Source"
        />
      );

      expect(screen.getByText(/Test quote text/)).toBeInTheDocument();
    });

    it('renders author', () => {
      render(
        <EvidenceQuote
          quote="Test quote"
          author="John Doe"
        />
      );

      expect(screen.getByText('John Doe')).toBeInTheDocument();
    });

    it('renders source', () => {
      render(
        <EvidenceQuote
          quote="Test quote"
          source="Test Source"
        />
      );

      expect(screen.getByText(/Test Source/)).toBeInTheDocument();
    });

    it('renders evidence label when provided', () => {
      render(
        <EvidenceQuote
          quote="Test quote"
          evidenceLabel="From Chapter 5"
        />
      );

      expect(screen.getByText(/Evidence: From Chapter 5/)).toBeInTheDocument();
    });

    it('does not render evidence label when not provided', () => {
      render(
        <EvidenceQuote
          quote="Test quote"
        />
      );

      expect(screen.queryByText(/Evidence:/)).not.toBeInTheDocument();
    });
  });

  describe('Border Colors', () => {
    it('applies major-premise border color by default', () => {
      const { container } = render(
        <EvidenceQuote quote="Test" />
      );

      const element = container.querySelector('.border-red-800\\/40');
      expect(element).toBeInTheDocument();
    });

    it('applies minor-premise border color', () => {
      const { container } = render(
        <EvidenceQuote quote="Test" variant="minor-premise" />
      );

      const element = container.querySelector('.border-green-800\\/40');
      expect(element).toBeInTheDocument();
    });

    it('applies conclusion border color', () => {
      const { container } = render(
        <EvidenceQuote quote="Test" variant="conclusion" />
      );

      const element = container.querySelector('.border-gold\\/60');
      expect(element).toBeInTheDocument();
    });
  });

  describe('Source Linking', () => {
    it('renders source as link when showSourceLink and sourceSlug provided', () => {
      render(
        <EvidenceQuote
          quote="Test quote"
          source="Test Source"
          showSourceLink={true}
          sourceSlug="test-source"
        />
      );

      const link = screen.getByRole('link', { name: /Test Source/ });
      expect(link).toHaveAttribute('href', '/texts/test-source');
    });

    it('renders source as plain text when showSourceLink is false', () => {
      render(
        <EvidenceQuote
          quote="Test quote"
          source="Test Source"
          showSourceLink={false}
        />
      );

      expect(screen.queryByRole('link')).not.toBeInTheDocument();
    });

    it('renders source as plain text when sourceSlug not provided', () => {
      render(
        <EvidenceQuote
          quote="Test quote"
          source="Test Source"
          showSourceLink={true}
        />
      );

      expect(screen.queryByRole('link')).not.toBeInTheDocument();
    });

    it('displays external link icon when link is shown', () => {
      const { container } = render(
        <EvidenceQuote
          quote="Test quote"
          source="Test Source"
          showSourceLink={true}
          sourceSlug="test-source"
        />
      );

      const svg = container.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });
  });

  describe('Styling', () => {
    it('applies custom className', () => {
      const { container } = render(
        <EvidenceQuote quote="Test" className="custom-class" />
      );

      expect(container.firstChild).toHaveClass('custom-class');
    });

    it('has thick left border', () => {
      const { container } = render(
        <EvidenceQuote quote="Test" />
      );

      expect(container.firstChild).toHaveClass('border-l-8');
    });

    it('has background color', () => {
      const { container } = render(
        <EvidenceQuote quote="Test" />
      );

      expect(container.firstChild).toHaveClass('bg-gold/5');
    });
  });

  describe('Accessibility', () => {
    it('link has focus visible ring', () => {
      render(
        <EvidenceQuote
          quote="Test"
          source="Source"
          showSourceLink={true}
          sourceSlug="test"
        />
      );

      const link = screen.getByRole('link');
      expect(link).toHaveClass('focus-visible-ring');
    });

    it('icon has aria-hidden', () => {
      const { container } = render(
        <EvidenceQuote
          quote="Test"
          source="Source"
          showSourceLink={true}
          sourceSlug="test"
        />
      );

      const svg = container.querySelector('svg');
      expect(svg).toHaveAttribute('aria-hidden', 'true');
    });
  });
});
