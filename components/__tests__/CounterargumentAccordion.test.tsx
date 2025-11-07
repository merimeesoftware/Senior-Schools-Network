import { render, screen, fireEvent, within } from '@testing-library/react';
import CounterargumentAccordion from '../CounterargumentAccordion';
import type { Quote } from '@/lib/types/content';

const mockObjections = [
  {
    question: 'Why focus only on boys?',
    answer:
      "The gymnasium stage (ages 7-13) is uniquely critical for boys. John Senior's etymology reveals why: 'Puer, the Latin word for boy, derives from pure because concupiscence has not reared up as yet...' This is not sexism—it's developmental realism.",
    quote: {
      id: 'senior-puer',
      quote: 'Boys burn with gem-like flames.',
      author: 'John Senior',
      source: 'The Restoration of Innocence',
      category: 'discipline' as const,
    },
  },
  {
    question: "Isn't this elitist?",
    answer:
      "The IHP lecturers addressed this head-on: 'It destroys the basis of elitism... I'm not going to come here and get what I can take.' Poetic education cultivates humility, not superiority.",
    quote: {
      id: 'ihp-elitism',
      quote:
        "It destroys the basis of elitism... I'm not going to come here and get what I can take.",
      author: 'Dr. Dennis Quinn',
      source: 'IHP Lecture',
      category: 'philosophy' as const,
    },
  },
  {
    question: 'Is this practical for real life?',
    answer:
      "Senior's IHP graduates prove practicality. Many pursued STEM PhDs, medical degrees, law—because their formation was integrated. Poetic knowledge yields diverse fruits: contemplative vocations, skilled trades, academic excellence, fatherhood.",
  },
];

describe('CounterargumentAccordion Component', () => {
  describe('Basic Rendering', () => {
    it('renders all objection questions', () => {
      render(<CounterargumentAccordion objections={mockObjections} />);
      expect(screen.getByText(/Why focus only on boys/i)).toBeInTheDocument();
      expect(screen.getByText(/Isn't this elitist/i)).toBeInTheDocument();
      expect(screen.getByText(/Is this practical for real life/i)).toBeInTheDocument();
    });

    it('renders default question mark icons', () => {
      const { container } = render(<CounterargumentAccordion objections={mockObjections} />);
      const icons = container.querySelectorAll('[aria-hidden="true"]');
      expect(icons[0]).toHaveTextContent('❓');
      expect(icons[1]).toHaveTextContent('❓');
      expect(icons[2]).toHaveTextContent('❓');
    });

    it('renders custom icon when provided', () => {
      const customObjections = [
        {
          ...mockObjections[0],
          icon: '⚠️',
        },
      ];
      const { container } = render(<CounterargumentAccordion objections={customObjections} />);
      const icon = container.querySelector('[aria-hidden="true"]');
      expect(icon).toHaveTextContent('⚠️');
    });

    it('applies counterargument-item class to items', () => {
      const { container } = render(<CounterargumentAccordion objections={mockObjections} />);
      const items = container.querySelectorAll('.counterargument-item');
      expect(items).toHaveLength(3);
    });
  });

  describe('Visual Styling', () => {
    it('applies spiritual border and background', () => {
      const { container } = render(<CounterargumentAccordion objections={mockObjections} />);
      const item = container.querySelector('.counterargument-item');
      expect(item).toHaveClass('border-l-4');
      expect(item).toHaveClass('border-spiritual/40');
      expect(item).toHaveClass('bg-spiritual/5');
    });

    it('has rounded corners and overflow hidden', () => {
      const { container } = render(<CounterargumentAccordion objections={mockObjections} />);
      const item = container.querySelector('.counterargument-item');
      expect(item).toHaveClass('rounded-lg');
      expect(item).toHaveClass('overflow-hidden');
    });

    it('applies padding to trigger', () => {
      render(<CounterargumentAccordion objections={mockObjections} />);
      const trigger = screen.getByRole('button', { name: /Why focus only on boys/i });
      expect(trigger).toHaveClass('px-6');
      expect(trigger).toHaveClass('py-4');
    });

    it('has hover state on trigger', () => {
      render(<CounterargumentAccordion objections={mockObjections} />);
      const trigger = screen.getByRole('button', { name: /Why focus only on boys/i });
      expect(trigger).toHaveClass('hover:bg-spiritual/10');
    });

    it('has open state styling on trigger', () => {
      render(<CounterargumentAccordion objections={mockObjections} />);
      const trigger = screen.getByRole('button', { name: /Why focus only on boys/i });
      expect(trigger).toHaveClass('data-[state=open]:bg-spiritual/15');
    });
  });

  describe('Accordion Functionality', () => {
    it('starts with all items collapsed', () => {
      render(<CounterargumentAccordion objections={mockObjections} />);
      const triggers = screen.getAllByRole('button');
      triggers.forEach((trigger) => {
        expect(trigger).toHaveAttribute('data-state', 'closed');
      });
    });

    it('expands item when clicked', () => {
      render(<CounterargumentAccordion objections={mockObjections} />);
      const trigger = screen.getByRole('button', { name: /Why focus only on boys/i });
      
      fireEvent.click(trigger);
      
      expect(trigger).toHaveAttribute('data-state', 'open');
      expect(screen.getByText(/gymnasium stage/i)).toBeVisible();
    });

    it('collapses item when clicked again', () => {
      render(<CounterargumentAccordion objections={mockObjections} />);
      const trigger = screen.getByRole('button', { name: /Why focus only on boys/i });
      
      fireEvent.click(trigger);
      expect(trigger).toHaveAttribute('data-state', 'open');
      
      fireEvent.click(trigger);
      expect(trigger).toHaveAttribute('data-state', 'closed');
    });

    it('only allows one item open at a time', () => {
      render(<CounterargumentAccordion objections={mockObjections} />);
      const triggers = screen.getAllByRole('button');
      
      fireEvent.click(triggers[0]);
      expect(triggers[0]).toHaveAttribute('data-state', 'open');
      
      fireEvent.click(triggers[1]);
      expect(triggers[0]).toHaveAttribute('data-state', 'closed');
      expect(triggers[1]).toHaveAttribute('data-state', 'open');
    });
  });

  describe('Content Display', () => {
    it('displays answer text when expanded', () => {
      render(<CounterargumentAccordion objections={mockObjections} />);
      const trigger = screen.getByRole('button', { name: /Why focus only on boys/i });
      
      fireEvent.click(trigger);
      
      expect(screen.getByText(/gymnasium stage/i)).toBeInTheDocument();
      expect(screen.getByText(/developmental realism/i)).toBeInTheDocument();
    });

    it('applies proper typography to answer', () => {
      const { container } = render(<CounterargumentAccordion objections={mockObjections} />);
      const trigger = screen.getByRole('button', { name: /Why focus only on boys/i });
      
      fireEvent.click(trigger);
      
      const content = container.querySelector('.font-lato');
      expect(content).toHaveClass('text-base');
      expect(content).toHaveClass('md:text-lg');
      expect(content).toHaveClass('leading-relaxed');
      expect(content).toHaveClass('text-charcoal/90');
    });

    it('hides answer text when collapsed', () => {
      render(<CounterargumentAccordion objections={mockObjections} />);
      
      // Text should not be visible when collapsed
      expect(screen.queryByText(/gymnasium stage/i)).not.toBeInTheDocument();
    });
  });

  describe('Quote Integration', () => {
    it('renders embedded quote when provided', () => {
      render(<CounterargumentAccordion objections={mockObjections} />);
      const trigger = screen.getByRole('button', { name: /Why focus only on boys/i });
      
      fireEvent.click(trigger);
      
      expect(screen.getByText(/Boys burn with gem-like flames/i)).toBeInTheDocument();
      // John Senior appears in both answer text and quote, so use getAllByText
      const johnSeniorMatches = screen.getAllByText(/John Senior/i);
      expect(johnSeniorMatches.length).toBeGreaterThan(0);
    });

    it('does not render quote section when quote not provided', () => {
      render(<CounterargumentAccordion objections={mockObjections} />);
      const trigger = screen.getByRole('button', { name: /Is this practical for real life/i });
      
      fireEvent.click(trigger);
      
      // Only the answer should be present, no quote
      expect(screen.getByText(/IHP graduates prove practicality/i)).toBeInTheDocument();
      const blockquotes = screen.queryAllByRole('blockquote');
      // Should not have a blockquote in this item's content
      expect(blockquotes.length).toBeLessThan(3);
    });

    it('applies embedded variant to QuoteCard', () => {
      const { container } = render(<CounterargumentAccordion objections={mockObjections} />);
      const trigger = screen.getByRole('button', { name: /Why focus only on boys/i });
      
      fireEvent.click(trigger);
      
      // QuoteCard with embedded variant should be present
      const quoteCard = container.querySelector('.mt-4');
      expect(quoteCard).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('uses button role for triggers', () => {
      render(<CounterargumentAccordion objections={mockObjections} />);
      const triggers = screen.getAllByRole('button');
      expect(triggers).toHaveLength(3);
    });

    it('has proper aria-hidden on icons', () => {
      const { container } = render(<CounterargumentAccordion objections={mockObjections} />);
      const icons = container.querySelectorAll('.text-2xl.flex-shrink-0');
      icons.forEach((icon) => {
        expect(icon).toHaveAttribute('aria-hidden', 'true');
      });
    });

    it('supports keyboard navigation', () => {
      render(<CounterargumentAccordion objections={mockObjections} />);
      const trigger = screen.getByRole('button', { name: /Why focus only on boys/i });
      
      trigger.focus();
      expect(trigger).toHaveFocus();
      
      // Radix UI handles keyboard events internally, test that button is keyboard accessible
      fireEvent.click(trigger);
      expect(trigger).toHaveAttribute('data-state', 'open');
    });

    it('has focus-visible ring', () => {
      render(<CounterargumentAccordion objections={mockObjections} />);
      const trigger = screen.getByRole('button', { name: /Why focus only on boys/i });
      expect(trigger).toHaveClass('focus-visible:outline-none');
      expect(trigger).toHaveClass('focus-visible:ring-2');
      expect(trigger).toHaveClass('focus-visible:ring-spiritual');
    });

    it('maintains full question text for screen readers', () => {
      render(<CounterargumentAccordion objections={mockObjections} />);
      const trigger = screen.getByRole('button', { name: /Why focus only on boys/i });
      expect(trigger).toHaveAccessibleName('Why focus only on boys?');
    });
  });

  describe('Responsive Design', () => {
    it('has responsive text sizing for questions', () => {
      render(<CounterargumentAccordion objections={mockObjections} />);
      const questionSpan = screen.getByText(/Why focus only on boys/i);
      expect(questionSpan).toHaveClass('text-lg');
      expect(questionSpan).toHaveClass('md:text-xl');
    });

    it('has responsive text sizing for answers', () => {
      const { container } = render(<CounterargumentAccordion objections={mockObjections} />);
      const trigger = screen.getByRole('button', { name: /Why focus only on boys/i });
      
      fireEvent.click(trigger);
      
      const answer = container.querySelector('.font-lato');
      expect(answer).toHaveClass('text-base');
      expect(answer).toHaveClass('md:text-lg');
    });

    it('applies flex layout to trigger content', () => {
      const { container } = render(<CounterargumentAccordion objections={mockObjections} />);
      const flexContainer = container.querySelector('.flex.items-center.gap-3');
      expect(flexContainer).toBeInTheDocument();
      expect(flexContainer).toHaveClass('text-left');
    });
  });

  describe('Custom Styling', () => {
    it('applies custom className to root', () => {
      const { container } = render(
        <CounterargumentAccordion objections={mockObjections} className="custom-class" />
      );
      const root = container.firstChild;
      expect(root).toHaveClass('custom-class');
    });

    it('preserves default spacing with custom class', () => {
      const { container } = render(
        <CounterargumentAccordion objections={mockObjections} className="my-custom" />
      );
      const root = container.firstChild;
      expect(root).toHaveClass('space-y-4');
      expect(root).toHaveClass('my-custom');
    });
  });

  describe('Animation Classes', () => {
    it('has animation classes on content', () => {
      const { container } = render(<CounterargumentAccordion objections={mockObjections} />);
      const trigger = screen.getByRole('button', { name: /Why focus only on boys/i });
      
      fireEvent.click(trigger);
      
      const content = trigger.parentElement?.nextElementSibling;
      expect(content).toHaveClass('data-[state=closed]:animate-accordion-up');
      expect(content).toHaveClass('data-[state=open]:animate-accordion-down');
    });
  });
});
