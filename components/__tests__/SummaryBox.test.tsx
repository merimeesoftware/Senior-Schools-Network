import { render, screen } from '@testing-library/react';
import SummaryBox from '../SummaryBox';

describe('SummaryBox', () => {
  describe('Rendering', () => {
    it('renders children content', () => {
      render(
        <SummaryBox variant="major-premise">
          <p>Test content</p>
        </SummaryBox>
      );
      expect(screen.getByText('Test content')).toBeInTheDocument();
    });

    it('displays optional title', () => {
      render(
        <SummaryBox variant="major-premise" title="The Crisis:">
          <p>Content</p>
        </SummaryBox>
      );
      expect(screen.getByText('The Crisis:')).toBeInTheDocument();
    });

    it('renders without title when not provided', () => {
      const { container } = render(
        <SummaryBox variant="major-premise">
          <p>Content</p>
        </SummaryBox>
      );
      const titles = container.querySelectorAll('h3');
      expect(titles).toHaveLength(0);
    });

    it('renders complex children content', () => {
      render(
        <SummaryBox variant="major-premise">
          <div>
            <p>Paragraph one</p>
            <p>Paragraph two</p>
            <strong>Bold text</strong>
          </div>
        </SummaryBox>
      );
      expect(screen.getByText('Paragraph one')).toBeInTheDocument();
      expect(screen.getByText('Paragraph two')).toBeInTheDocument();
      expect(screen.getByText('Bold text')).toBeInTheDocument();
    });
  });

  describe('Variant Styling - Background Colors', () => {
    it('applies major-premise background color', () => {
      const { container } = render(
        <SummaryBox variant="major-premise">
          <p>Content</p>
        </SummaryBox>
      );
      const box = container.querySelector('.bg-red-100');
      expect(box).toBeInTheDocument();
    });

    it('applies minor-premise background color', () => {
      const { container } = render(
        <SummaryBox variant="minor-premise">
          <p>Content</p>
        </SummaryBox>
      );
      const box = container.querySelector('.bg-green-100');
      expect(box).toBeInTheDocument();
    });

    it('applies conclusion background color', () => {
      const { container } = render(
        <SummaryBox variant="conclusion">
          <p>Content</p>
        </SummaryBox>
      );
      const box = container.querySelector('.bg-gold\\/5');
      expect(box).toBeInTheDocument();
    });
  });

  describe('Variant Styling - Border Styles', () => {
    it('applies major-premise border style', () => {
      const { container } = render(
        <SummaryBox variant="major-premise">
          <p>Content</p>
        </SummaryBox>
      );
      const box = container.querySelector('.border-4.border-red-700');
      expect(box).toBeInTheDocument();
    });

    it('applies minor-premise border style', () => {
      const { container } = render(
        <SummaryBox variant="minor-premise">
          <p>Content</p>
        </SummaryBox>
      );
      const box = container.querySelector('.border-4.border-green-700');
      expect(box).toBeInTheDocument();
    });

    it('applies conclusion border style', () => {
      const { container } = render(
        <SummaryBox variant="conclusion">
          <p>Content</p>
        </SummaryBox>
      );
      const box = container.querySelector('.border-2.border-gold\\/40');
      expect(box).toBeInTheDocument();
    });
  });

  describe('Variant Styling - Title Colors', () => {
    it('applies major-premise title color', () => {
      const { container } = render(
        <SummaryBox variant="major-premise" title="Title">
          <p>Content</p>
        </SummaryBox>
      );
      const title = container.querySelector('.text-red-900');
      expect(title).toBeInTheDocument();
    });

    it('applies minor-premise title color', () => {
      const { container } = render(
        <SummaryBox variant="minor-premise" title="Title">
          <p>Content</p>
        </SummaryBox>
      );
      const title = container.querySelector('.text-green-900');
      expect(title).toBeInTheDocument();
    });

    it('applies conclusion title color', () => {
      const { container } = render(
        <SummaryBox variant="conclusion" title="Title">
          <p>Content</p>
        </SummaryBox>
      );
      const title = container.querySelector('.text-gold-dark');
      expect(title).toBeInTheDocument();
    });
  });

  describe('Layout and Spacing', () => {
    it('centers content', () => {
      const { container } = render(
        <SummaryBox variant="major-premise">
          <p>Content</p>
        </SummaryBox>
      );
      const box = container.querySelector('.text-center');
      expect(box).toBeInTheDocument();
    });

    it('applies max-width constraint', () => {
      const { container } = render(
        <SummaryBox variant="major-premise">
          <p>Content</p>
        </SummaryBox>
      );
      const box = container.querySelector('.max-w-4xl');
      expect(box).toBeInTheDocument();
    });

    it('centers horizontally with mx-auto', () => {
      const { container } = render(
        <SummaryBox variant="major-premise">
          <p>Content</p>
        </SummaryBox>
      );
      const box = container.querySelector('.mx-auto');
      expect(box).toBeInTheDocument();
    });

    it('applies rounded corners', () => {
      const { container } = render(
        <SummaryBox variant="major-premise">
          <p>Content</p>
        </SummaryBox>
      );
      const box = container.querySelector('.rounded-lg');
      expect(box).toBeInTheDocument();
    });

    it('applies padding', () => {
      const { container } = render(
        <SummaryBox variant="major-premise">
          <p>Content</p>
        </SummaryBox>
      );
      const box = container.querySelector('.p-8');
      expect(box).toBeInTheDocument();
    });

    it('has title margin bottom when title present', () => {
      const { container } = render(
        <SummaryBox variant="major-premise" title="Title">
          <p>Content</p>
        </SummaryBox>
      );
      const title = container.querySelector('h3');
      expect(title).toHaveClass('mb-4');
    });
  });

  describe('Typography', () => {
    it('applies Playfair font to title', () => {
      const { container } = render(
        <SummaryBox variant="major-premise" title="Title">
          <p>Content</p>
        </SummaryBox>
      );
      const title = container.querySelector('.font-playfair');
      expect(title).toBeInTheDocument();
    });

    it('applies correct title size and weight', () => {
      const { container } = render(
        <SummaryBox variant="major-premise" title="Title">
          <p>Content</p>
        </SummaryBox>
      );
      const title = container.querySelector('.text-2xl.font-bold');
      expect(title).toBeInTheDocument();
    });

    it('applies charcoal color to content', () => {
      const { container } = render(
        <SummaryBox variant="major-premise">
          <p>Content</p>
        </SummaryBox>
      );
      const content = container.querySelector('.text-charcoal\\/90');
      expect(content).toBeInTheDocument();
    });

    it('applies leading-relaxed to content', () => {
      const { container } = render(
        <SummaryBox variant="major-premise">
          <p>Content</p>
        </SummaryBox>
      );
      const content = container.querySelector('.leading-relaxed');
      expect(content).toBeInTheDocument();
    });
  });

  describe('Custom ClassName', () => {
    it('applies custom className', () => {
      const { container } = render(
        <SummaryBox variant="major-premise" className="custom-class">
          <p>Content</p>
        </SummaryBox>
      );
      const box = container.firstChild;
      expect(box).toHaveClass('custom-class');
    });
  });

  describe('Accessibility', () => {
    it('uses h3 for title heading level', () => {
      render(
        <SummaryBox variant="major-premise" title="Title">
          <p>Content</p>
        </SummaryBox>
      );
      const heading = screen.getByRole('heading', { level: 3, name: 'Title' });
      expect(heading).toBeInTheDocument();
    });

    it('has semantic HTML structure', () => {
      const { container } = render(
        <SummaryBox variant="major-premise" title="Title">
          <p>Content</p>
        </SummaryBox>
      );
      expect(container.querySelector('div')).toBeInTheDocument();
      expect(container.querySelector('h3')).toBeInTheDocument();
    });
  });

  describe('Responsive Behavior', () => {
    it('has responsive padding classes', () => {
      const { container } = render(
        <SummaryBox variant="major-premise">
          <p>Content</p>
        </SummaryBox>
      );
      const box = container.firstChild;
      expect(box).toHaveClass('md:p-8');
      expect(box).toHaveClass('sm:p-6');
    });
  });

  describe('Edge Cases', () => {
    it('handles empty children', () => {
      const { container } = render(
        <SummaryBox variant="major-premise">
          <></>
        </SummaryBox>
      );
      expect(container.firstChild).toBeInTheDocument();
    });

    it('handles long content', () => {
      const longContent = 'This is a very long piece of content that should wrap properly and maintain readability even when it extends across multiple lines in the summary box layout. '.repeat(5);
      render(
        <SummaryBox variant="major-premise">
          <p>{longContent}</p>
        </SummaryBox>
      );
      expect(screen.getByText(/This is a very long piece of content/)).toBeInTheDocument();
    });

    it('handles multiple paragraph children', () => {
      render(
        <SummaryBox variant="major-premise">
          <p>First paragraph</p>
          <p>Second paragraph</p>
          <p>Third paragraph</p>
        </SummaryBox>
      );
      expect(screen.getByText('First paragraph')).toBeInTheDocument();
      expect(screen.getByText('Second paragraph')).toBeInTheDocument();
      expect(screen.getByText('Third paragraph')).toBeInTheDocument();
    });
  });

  describe('Snapshots', () => {
    it('matches snapshot for major-premise variant', () => {
      const { container } = render(
        <SummaryBox variant="major-premise" title="The Crisis:">
          <p>Modern education has failed.</p>
        </SummaryBox>
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it('matches snapshot for minor-premise variant', () => {
      const { container } = render(
        <SummaryBox variant="minor-premise" title="The Restoration:">
          <p>Poetic knowledge restores.</p>
        </SummaryBox>
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it('matches snapshot for conclusion variant', () => {
      const { container } = render(
        <SummaryBox variant="conclusion">
          <p>Therefore, embrace the poetic path.</p>
        </SummaryBox>
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it('matches snapshot without title', () => {
      const { container } = render(
        <SummaryBox variant="major-premise">
          <p>Content without title</p>
        </SummaryBox>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
