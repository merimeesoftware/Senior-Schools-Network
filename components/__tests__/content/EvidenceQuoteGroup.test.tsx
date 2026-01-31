import { render, screen } from '@testing-library/react';
import EvidenceQuoteGroup from '../../content/EvidenceQuoteGroup';

// Mock EvidenceQuote to isolate testing
jest.mock('../../content/EvidenceQuote', () => {
  return function MockEvidenceQuote({ quote, author, source, variant }: any) {
    return (
      <div data-testid="evidence-quote" data-variant={variant}>
        <p>{quote}</p>
        {author && <span>{author}</span>}
        {source && <span>{source}</span>}
      </div>
    );
  };
});

describe('EvidenceQuoteGroup', () => {
  const mockQuotes = [
    {
      quote: 'Wonder is the first disposition of the soul.',
      author: 'Dr. John Senior',
      source: 'The Restoration of Christian Culture',
      showSourceLink: true,
      sourceSlug: 'restoration-of-christian-culture',
    },
    {
      quote: 'The senses are gateways to the soul.',
      author: 'Dr. Dennis Quinn',
      source: 'IHP Lecture I',
    },
    {
      quote: 'The heavens declare the glory of God.',
      author: 'Psalm 19:1-2',
      source: 'Scripture (ESV)',
    },
  ];

  describe('Rendering', () => {
    it('renders default title "Evidence from the Sources"', () => {
      render(<EvidenceQuoteGroup variant="major-premise" quotes={mockQuotes} />);
      expect(screen.getByText('Evidence from the Sources')).toBeInTheDocument();
    });

    it('renders custom title when provided', () => {
      render(
        <EvidenceQuoteGroup
          variant="major-premise"
          quotes={mockQuotes}
          title="Custom Evidence Title"
        />
      );
      expect(screen.getByText('Custom Evidence Title')).toBeInTheDocument();
    });

    it('renders correct number of quotes', () => {
      render(<EvidenceQuoteGroup variant="major-premise" quotes={mockQuotes} />);
      const quotes = screen.getAllByTestId('evidence-quote');
      expect(quotes).toHaveLength(3);
    });

    it('renders quote content correctly', () => {
      render(<EvidenceQuoteGroup variant="major-premise" quotes={mockQuotes} />);
      expect(screen.getByText('Wonder is the first disposition of the soul.')).toBeInTheDocument();
      expect(screen.getByText('The senses are gateways to the soul.')).toBeInTheDocument();
      expect(screen.getByText('The heavens declare the glory of God.')).toBeInTheDocument();
    });
  });

  describe('Variant Passing', () => {
    it('passes major-premise variant to all child quotes', () => {
      render(<EvidenceQuoteGroup variant="major-premise" quotes={mockQuotes} />);
      const quotes = screen.getAllByTestId('evidence-quote');
      quotes.forEach((quote) => {
        expect(quote).toHaveAttribute('data-variant', 'major-premise');
      });
    });

    it('passes minor-premise variant to all child quotes', () => {
      render(<EvidenceQuoteGroup variant="minor-premise" quotes={mockQuotes} />);
      const quotes = screen.getAllByTestId('evidence-quote');
      quotes.forEach((quote) => {
        expect(quote).toHaveAttribute('data-variant', 'minor-premise');
      });
    });

    it('passes conclusion variant to all child quotes', () => {
      render(<EvidenceQuoteGroup variant="conclusion" quotes={mockQuotes} />);
      const quotes = screen.getAllByTestId('evidence-quote');
      quotes.forEach((quote) => {
        expect(quote).toHaveAttribute('data-variant', 'conclusion');
      });
    });
  });

  describe('Layout and Spacing', () => {
    it('applies space-y-8 for spacing between quotes', () => {
      const { container } = render(
        <EvidenceQuoteGroup variant="major-premise" quotes={mockQuotes} />
      );
      const quotesContainer = container.querySelector('.space-y-8:last-child');
      expect(quotesContainer).toBeInTheDocument();
    });

    it('applies mt-12 for margin-top from previous content', () => {
      const { container } = render(
        <EvidenceQuoteGroup variant="major-premise" quotes={mockQuotes} />
      );
      const mainContainer = container.firstChild;
      expect(mainContainer).toHaveClass('mt-12');
    });

    it('applies outer space-y-8 container', () => {
      const { container } = render(
        <EvidenceQuoteGroup variant="major-premise" quotes={mockQuotes} />
      );
      const mainContainer = container.firstChild;
      expect(mainContainer).toHaveClass('space-y-8');
    });
  });

  describe('Title Styling', () => {
    it('applies Playfair font to title', () => {
      const { container } = render(
        <EvidenceQuoteGroup variant="major-premise" quotes={mockQuotes} />
      );
      const title = container.querySelector('.font-playfair');
      expect(title).toBeInTheDocument();
    });

    it('applies correct title size and weight', () => {
      const { container } = render(
        <EvidenceQuoteGroup variant="major-premise" quotes={mockQuotes} />
      );
      const title = container.querySelector('.text-2xl.font-bold');
      expect(title).toBeInTheDocument();
    });

    it('applies forest color to title', () => {
      const { container } = render(
        <EvidenceQuoteGroup variant="major-premise" quotes={mockQuotes} />
      );
      const title = container.querySelector('.text-forest');
      expect(title).toBeInTheDocument();
    });

    it('centers title', () => {
      const { container } = render(
        <EvidenceQuoteGroup variant="major-premise" quotes={mockQuotes} />
      );
      const title = container.querySelector('.text-center');
      expect(title).toBeInTheDocument();
    });
  });

  describe('Props Passing to Children', () => {
    it('passes quote text correctly', () => {
      render(<EvidenceQuoteGroup variant="major-premise" quotes={mockQuotes} />);
      expect(screen.getByText('Wonder is the first disposition of the soul.')).toBeInTheDocument();
    });

    it('passes author correctly', () => {
      render(<EvidenceQuoteGroup variant="major-premise" quotes={mockQuotes} />);
      expect(screen.getByText('Dr. John Senior')).toBeInTheDocument();
      expect(screen.getByText('Dr. Dennis Quinn')).toBeInTheDocument();
    });

    it('passes source correctly', () => {
      render(<EvidenceQuoteGroup variant="major-premise" quotes={mockQuotes} />);
      expect(screen.getByText('The Restoration of Christian Culture')).toBeInTheDocument();
      expect(screen.getByText('IHP Lecture I')).toBeInTheDocument();
    });
  });

  describe('Custom ClassName', () => {
    it('applies custom className to container', () => {
      const { container } = render(
        <EvidenceQuoteGroup variant="major-premise" quotes={mockQuotes} className="custom-class" />
      );
      const mainContainer = container.firstChild;
      expect(mainContainer).toHaveClass('custom-class');
    });
  });

  describe('Edge Cases', () => {
    it('handles empty quotes array gracefully', () => {
      const { container } = render(<EvidenceQuoteGroup variant="major-premise" quotes={[]} />);
      const quotes = screen.queryAllByTestId('evidence-quote');
      expect(quotes).toHaveLength(0);
      // Title should still render
      expect(screen.getByText('Evidence from the Sources')).toBeInTheDocument();
    });

    it('handles single quote', () => {
      const singleQuote = [mockQuotes[0]];
      render(<EvidenceQuoteGroup variant="major-premise" quotes={singleQuote} />);
      const quotes = screen.getAllByTestId('evidence-quote');
      expect(quotes).toHaveLength(1);
    });

    it('handles quotes without author or source', () => {
      const minimalQuote = [{ quote: 'A simple quote without attribution.' }];
      render(<EvidenceQuoteGroup variant="major-premise" quotes={minimalQuote} />);
      expect(screen.getByText('A simple quote without attribution.')).toBeInTheDocument();
    });

    it('handles long quote arrays', () => {
      const manyQuotes = Array(10)
        .fill(null)
        .map((_, i) => ({
          quote: `Quote number ${i + 1}`,
          author: `Author ${i + 1}`,
          source: `Source ${i + 1}`,
        }));
      render(<EvidenceQuoteGroup variant="major-premise" quotes={manyQuotes} />);
      const quotes = screen.getAllByTestId('evidence-quote');
      expect(quotes).toHaveLength(10);
    });
  });

  describe('Accessibility', () => {
    it('uses h4 for title heading level', () => {
      render(<EvidenceQuoteGroup variant="major-premise" quotes={mockQuotes} />);
      const heading = screen.getByRole('heading', { level: 4, name: 'Evidence from the Sources' });
      expect(heading).toBeInTheDocument();
    });

    it('has semantic HTML structure', () => {
      const { container } = render(
        <EvidenceQuoteGroup variant="major-premise" quotes={mockQuotes} />
      );
      expect(container.querySelector('div')).toBeInTheDocument();
      expect(container.querySelector('h4')).toBeInTheDocument();
    });
  });

  describe('Snapshots', () => {
    it('matches snapshot for major-premise with 3 quotes', () => {
      const { container } = render(
        <EvidenceQuoteGroup variant="major-premise" quotes={mockQuotes} />
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it('matches snapshot for minor-premise with 2 quotes', () => {
      const { container } = render(
        <EvidenceQuoteGroup variant="minor-premise" quotes={mockQuotes.slice(0, 2)} />
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it('matches snapshot for conclusion variant', () => {
      const { container } = render(
        <EvidenceQuoteGroup variant="conclusion" quotes={mockQuotes} />
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it('matches snapshot with custom title', () => {
      const { container } = render(
        <EvidenceQuoteGroup
          variant="major-premise"
          quotes={mockQuotes}
          title="Custom Evidence"
        />
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
