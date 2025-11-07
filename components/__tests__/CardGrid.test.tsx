import { render, screen } from '@testing-library/react';
import CardGrid from '../CardGrid';

describe('CardGrid', () => {
  const mockCards = [
    {
      emoji: '📱',
      heading: 'Screen Time',
      description: 'Replace wonder with digital distractions',
    },
    {
      emoji: '🛡️',
      heading: 'Safety Culture',
      description: 'Replace risk with bubble-wrapped childhood',
    },
    {
      emoji: '🔬',
      heading: 'Specialization',
      description: 'Replace integration with fragmentation',
    },
  ];

  describe('Rendering', () => {
    it('renders correct number of cards', () => {
      const { container } = render(<CardGrid cards={mockCards} />);
      const cards = container.querySelectorAll('.bg-white.border-2');
      expect(cards).toHaveLength(3);
    });

    it('displays emoji with aria-hidden', () => {
      const { container } = render(<CardGrid cards={mockCards} />);
      const emojis = container.querySelectorAll('[aria-hidden="true"]');
      expect(emojis).toHaveLength(3);
      expect(emojis[0]).toHaveTextContent('📱');
    });

    it('renders heading text', () => {
      render(<CardGrid cards={mockCards} />);
      expect(screen.getByText('Screen Time')).toBeInTheDocument();
      expect(screen.getByText('Safety Culture')).toBeInTheDocument();
      expect(screen.getByText('Specialization')).toBeInTheDocument();
    });

    it('renders description text', () => {
      render(<CardGrid cards={mockCards} />);
      expect(screen.getByText(/Replace wonder with digital/)).toBeInTheDocument();
      expect(screen.getByText(/Replace risk with bubble-wrapped/)).toBeInTheDocument();
      expect(screen.getByText(/Replace integration with fragmentation/)).toBeInTheDocument();
    });

    it('renders optional action button', () => {
      const cardsWithAction = [
        {
          ...mockCards[0],
          action: <button>Learn More</button>,
        },
      ];
      render(<CardGrid cards={cardsWithAction} />);
      expect(screen.getByRole('button', { name: 'Learn More' })).toBeInTheDocument();
    });

    it('works without action button', () => {
      render(<CardGrid cards={mockCards} />);
      expect(screen.queryByRole('button')).not.toBeInTheDocument();
    });
  });

  describe('Variant Styling', () => {
    it('applies crisis variant border color', () => {
      const { container } = render(<CardGrid cards={mockCards} variant="crisis" />);
      const card = container.querySelector('.border-red-700');
      expect(card).toBeInTheDocument();
    });

    it('applies restoration variant border color', () => {
      const { container } = render(<CardGrid cards={mockCards} variant="restoration" />);
      const card = container.querySelector('.border-green-700');
      expect(card).toBeInTheDocument();
    });

    it('applies vision variant border color', () => {
      const { container } = render(<CardGrid cards={mockCards} variant="vision" />);
      const card = container.querySelector('.border-gold');
      expect(card).toBeInTheDocument();
    });

    it('applies neutral variant border color', () => {
      const { container } = render(<CardGrid cards={mockCards} variant="neutral" />);
      const card = container.querySelector('.border-charcoal\\/50');
      expect(card).toBeInTheDocument();
    });

    it('defaults to neutral variant when not specified', () => {
      const { container } = render(<CardGrid cards={mockCards} />);
      const card = container.querySelector('.border-charcoal\\/50');
      expect(card).toBeInTheDocument();
    });
  });

  describe('Column Layout', () => {
    it('defaults to 3 columns', () => {
      const { container } = render(<CardGrid cards={mockCards} />);
      const grid = container.querySelector('.grid');
      expect(grid).toHaveClass('md:grid-cols-3');
    });

    it('respects columns prop set to 2', () => {
      const { container } = render(<CardGrid cards={mockCards} columns={2} />);
      const grid = container.querySelector('.grid');
      expect(grid).toHaveClass('md:grid-cols-2');
    });

    it('respects columns prop set to 3', () => {
      const { container } = render(<CardGrid cards={mockCards} columns={3} />);
      const grid = container.querySelector('.grid');
      expect(grid).toHaveClass('md:grid-cols-3');
    });
  });

  describe('Responsive Grid Classes', () => {
    it('has grid-cols-1 for mobile', () => {
      const { container } = render(<CardGrid cards={mockCards} />);
      const grid = container.querySelector('.grid');
      expect(grid).toHaveClass('grid-cols-1');
    });

    it('has gap-6 for spacing', () => {
      const { container } = render(<CardGrid cards={mockCards} />);
      const grid = container.querySelector('.grid');
      expect(grid).toHaveClass('gap-6');
    });
  });

  describe('Card Styling', () => {
    it('applies white background to cards', () => {
      const { container } = render(<CardGrid cards={mockCards} />);
      const card = container.querySelector('.bg-white');
      expect(card).toBeInTheDocument();
    });

    it('applies rounded corners to cards', () => {
      const { container } = render(<CardGrid cards={mockCards} />);
      const card = container.querySelector('.rounded-lg');
      expect(card).toBeInTheDocument();
    });

    it('applies border-2 to cards', () => {
      const { container } = render(<CardGrid cards={mockCards} />);
      const card = container.querySelector('.border-2');
      expect(card).toBeInTheDocument();
    });

    it('applies padding to cards', () => {
      const { container } = render(<CardGrid cards={mockCards} />);
      const card = container.querySelector('.p-6');
      expect(card).toBeInTheDocument();
    });

    it('centers text in cards', () => {
      const { container } = render(<CardGrid cards={mockCards} />);
      const card = container.querySelector('.text-center');
      expect(card).toBeInTheDocument();
    });
  });

  describe('Typography', () => {
    it('applies correct emoji size', () => {
      const { container } = render(<CardGrid cards={mockCards} />);
      const emoji = container.querySelector('.text-5xl');
      expect(emoji).toBeInTheDocument();
    });

    it('applies Playfair font to headings', () => {
      const { container } = render(<CardGrid cards={mockCards} />);
      const heading = container.querySelector('.font-playfair');
      expect(heading).toBeInTheDocument();
    });

    it('applies correct heading size and weight', () => {
      const { container } = render(<CardGrid cards={mockCards} />);
      const heading = container.querySelector('.text-2xl.font-bold');
      expect(heading).toBeInTheDocument();
    });

    it('applies forest color to headings', () => {
      const { container } = render(<CardGrid cards={mockCards} />);
      const heading = container.querySelector('.text-forest');
      expect(heading).toBeInTheDocument();
    });

    it('applies charcoal color to descriptions', () => {
      const { container } = render(<CardGrid cards={mockCards} />);
      const description = container.querySelector('.text-charcoal\\/90');
      expect(description).toBeInTheDocument();
    });

    it('applies leading-relaxed to descriptions', () => {
      const { container } = render(<CardGrid cards={mockCards} />);
      const description = container.querySelector('.leading-relaxed');
      expect(description).toBeInTheDocument();
    });
  });

  describe('Custom ClassName', () => {
    it('applies custom className to grid', () => {
      const { container } = render(<CardGrid cards={mockCards} className="custom-class" />);
      const grid = container.querySelector('.grid');
      expect(grid).toHaveClass('custom-class');
    });
  });

  describe('Accessibility', () => {
    it('uses h4 for card headings', () => {
      const { container } = render(<CardGrid cards={mockCards} />);
      const headings = container.querySelectorAll('h4');
      expect(headings).toHaveLength(3);
    });

    it('hides decorative emojis from screen readers', () => {
      const { container } = render(<CardGrid cards={mockCards} />);
      const emojis = container.querySelectorAll('[aria-hidden="true"]');
      expect(emojis).toHaveLength(3);
    });
  });

  describe('Edge Cases', () => {
    it('renders empty array of cards without error', () => {
      const { container } = render(<CardGrid cards={[]} />);
      const grid = container.querySelector('.grid');
      expect(grid).toBeInTheDocument();
      expect(grid?.children).toHaveLength(0);
    });

    it('handles single card', () => {
      const { container } = render(<CardGrid cards={[mockCards[0]]} />);
      const cards = container.querySelectorAll('.bg-white.border-2');
      expect(cards).toHaveLength(1);
    });

    it('handles long descriptions', () => {
      const longCard = [
        {
          emoji: '📚',
          heading: 'Long Description',
          description: 'This is a very long description that should wrap properly and maintain readability even when the text extends across multiple lines in the card layout.',
        },
      ];
      render(<CardGrid cards={longCard} />);
      expect(screen.getByText(/This is a very long description/)).toBeInTheDocument();
    });
  });

  describe('Snapshots', () => {
    it('matches snapshot for crisis variant', () => {
      const { container } = render(<CardGrid cards={mockCards} variant="crisis" />);
      expect(container.firstChild).toMatchSnapshot();
    });

    it('matches snapshot for restoration variant', () => {
      const { container } = render(<CardGrid cards={mockCards} variant="restoration" />);
      expect(container.firstChild).toMatchSnapshot();
    });

    it('matches snapshot for vision variant', () => {
      const { container } = render(<CardGrid cards={mockCards} variant="vision" />);
      expect(container.firstChild).toMatchSnapshot();
    });

    it('matches snapshot with action buttons', () => {
      const cardsWithActions = mockCards.map((card) => ({
        ...card,
        action: <button>Action</button>,
      }));
      const { container } = render(<CardGrid cards={cardsWithActions} />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
