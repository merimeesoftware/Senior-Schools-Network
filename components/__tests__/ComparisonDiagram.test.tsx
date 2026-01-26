import { render, screen } from '@testing-library/react';
import ComparisonDiagram from '../ComparisonDiagram';

describe('ComparisonDiagram', () => {
  const mockLeftColumn = {
    label: 'Modern Education',
    steps: ['📱Screens (0-13)', '🛡️Gymnasium (skipped)', '🎨Poetic (skipped)', '🔬STEM-first'],
    result: '= Alienated Technician',
  };

  const mockRightColumn = {
    label: 'Classical Education',
    steps: ['🌿Nursery (0-7)', '🛡️Gymnasium (7-13)', '🎨Poetic (13-17)', '🔬Science (from soil)'],
    result: '= Integrated Chivalric Wayfarer',
  };

  const mockTitle = 'The Poisoned Well: STEM Without Poetic Soil';
  const mockDescription = 'Specialization must grow from poetic soil, not replace it';

  describe('Rendering', () => {
    it('renders title', () => {
      render(
        <ComparisonDiagram
          title={mockTitle}
          leftColumn={mockLeftColumn}
          rightColumn={mockRightColumn}
        />
      );
      expect(screen.getByText(mockTitle)).toBeInTheDocument();
    });

    it('renders optional description', () => {
      render(
        <ComparisonDiagram
          title={mockTitle}
          leftColumn={mockLeftColumn}
          rightColumn={mockRightColumn}
          description={mockDescription}
        />
      );
      expect(screen.getByText(mockDescription)).toBeInTheDocument();
    });

    it('renders without description when not provided', () => {
      const { container } = render(
        <ComparisonDiagram
          title={mockTitle}
          leftColumn={mockLeftColumn}
          rightColumn={mockRightColumn}
        />
      );
      const description = container.querySelector('.italic.mb-8');
      expect(description).not.toBeInTheDocument();
    });

    it('renders two columns', () => {
      const { container } = render(
        <ComparisonDiagram
          title={mockTitle}
          leftColumn={mockLeftColumn}
          rightColumn={mockRightColumn}
        />
      );
      const grid = container.querySelector('.grid');
      expect(grid?.children).toHaveLength(2);
    });
  });

  describe('Column Labels', () => {
    it('renders left column label', () => {
      render(
        <ComparisonDiagram
          title={mockTitle}
          leftColumn={mockLeftColumn}
          rightColumn={mockRightColumn}
        />
      );
      expect(screen.getByText('Modern Education')).toBeInTheDocument();
    });

    it('renders right column label', () => {
      render(
        <ComparisonDiagram
          title={mockTitle}
          leftColumn={mockLeftColumn}
          rightColumn={mockRightColumn}
        />
      );
      expect(screen.getByText('Classical Education')).toBeInTheDocument();
    });
  });

  describe('Steps Rendering', () => {
    it('renders all left column steps in correct order', () => {
      render(
        <ComparisonDiagram
          title={mockTitle}
          leftColumn={mockLeftColumn}
          rightColumn={mockRightColumn}
        />
      );
      expect(screen.getByText('📱Screens (0-13)')).toBeInTheDocument();
      expect(screen.getByText('🛡️Gymnasium (skipped)')).toBeInTheDocument();
      expect(screen.getByText('🎨Poetic (skipped)')).toBeInTheDocument();
      expect(screen.getByText('🔬STEM-first')).toBeInTheDocument();
    });

    it('renders all right column steps in correct order', () => {
      render(
        <ComparisonDiagram
          title={mockTitle}
          leftColumn={mockLeftColumn}
          rightColumn={mockRightColumn}
        />
      );
      expect(screen.getByText('🌿Nursery (0-7)')).toBeInTheDocument();
      expect(screen.getByText('🛡️Gymnasium (7-13)')).toBeInTheDocument();
      expect(screen.getByText('🎨Poetic (13-17)')).toBeInTheDocument();
      expect(screen.getByText('🔬Science (from soil)')).toBeInTheDocument();
    });

    it('renders arrows between steps', () => {
      const { container } = render(
        <ComparisonDiagram
          title={mockTitle}
          leftColumn={mockLeftColumn}
          rightColumn={mockRightColumn}
        />
      );
      const arrows = Array.from(container.querySelectorAll('.text-charcoal\\/40')).filter(
        (el) => el.textContent === '↓'
      );
      // Should have 3 arrows per column (4 steps each, minus 1)
      expect(arrows.length).toBeGreaterThanOrEqual(6);
    });
  });

  describe('Results', () => {
    it('renders left column result', () => {
      render(
        <ComparisonDiagram
          title={mockTitle}
          leftColumn={mockLeftColumn}
          rightColumn={mockRightColumn}
        />
      );
      expect(screen.getByText('= Alienated Technician')).toBeInTheDocument();
    });

    it('renders right column result', () => {
      render(
        <ComparisonDiagram
          title={mockTitle}
          leftColumn={mockLeftColumn}
          rightColumn={mockRightColumn}
        />
      );
      expect(screen.getByText('= Integrated Chivalric Wayfarer')).toBeInTheDocument();
    });

    it('left column result has red styling', () => {
      const { container } = render(
        <ComparisonDiagram
          title={mockTitle}
          leftColumn={mockLeftColumn}
          rightColumn={mockRightColumn}
        />
      );
      const leftResult = screen.getByText('= Alienated Technician');
      expect(leftResult).toHaveClass('text-red-900');
    });

    it('right column result has green styling', () => {
      const { container } = render(
        <ComparisonDiagram
          title={mockTitle}
          leftColumn={mockLeftColumn}
          rightColumn={mockRightColumn}
        />
      );
      const rightResult = screen.getByText('= Integrated Chivalric Wayfarer');
      expect(rightResult).toHaveClass('text-green-900');
    });
  });

  describe('Color Theming', () => {
    it('left column label has red color', () => {
      render(
        <ComparisonDiagram
          title={mockTitle}
          leftColumn={mockLeftColumn}
          rightColumn={mockRightColumn}
        />
      );
      const leftLabel = screen.getByText('Modern Education');
      expect(leftLabel).toHaveClass('text-red-900');
    });

    it('right column label has green color', () => {
      render(
        <ComparisonDiagram
          title={mockTitle}
          leftColumn={mockLeftColumn}
          rightColumn={mockRightColumn}
        />
      );
      const rightLabel = screen.getByText('Classical Education');
      expect(rightLabel).toHaveClass('text-green-900');
    });
  });

  describe('Layout and Styling', () => {
    it('has responsive grid layout', () => {
      const { container } = render(
        <ComparisonDiagram
          title={mockTitle}
          leftColumn={mockLeftColumn}
          rightColumn={mockRightColumn}
        />
      );
      const grid = container.querySelector('.grid');
      expect(grid).toHaveClass('grid-cols-1');
      expect(grid).toHaveClass('md:grid-cols-2');
    });

    it('title has correct styling', () => {
      const { container } = render(
        <ComparisonDiagram
          title={mockTitle}
          leftColumn={mockLeftColumn}
          rightColumn={mockRightColumn}
        />
      );
      const title = screen.getByText(mockTitle);
      expect(title).toHaveClass('font-playfair');
      expect(title).toHaveClass('text-2xl');
      expect(title).toHaveClass('font-bold');
      expect(title).toHaveClass('text-forest');
      expect(title).toHaveClass('text-center');
    });

    it('has max-width constraint', () => {
      const { container } = render(
        <ComparisonDiagram
          title={mockTitle}
          leftColumn={mockLeftColumn}
          rightColumn={mockRightColumn}
        />
      );
      const wrapper = container.firstChild;
      expect(wrapper).toHaveClass('max-w-3xl');
      expect(wrapper).toHaveClass('mx-auto');
    });

    it('has border and background styling', () => {
      const { container } = render(
        <ComparisonDiagram
          title={mockTitle}
          leftColumn={mockLeftColumn}
          rightColumn={mockRightColumn}
        />
      );
      const innerContainer = container.querySelector('.bg-parchment-light');
      expect(innerContainer).toHaveClass('border-2');
      expect(innerContainer).toHaveClass('border-red-700/40');
      expect(innerContainer).toHaveClass('rounded-lg');
    });
  });

  describe('Custom ClassName', () => {
    it('applies custom className to wrapper', () => {
      const { container } = render(
        <ComparisonDiagram
          title={mockTitle}
          leftColumn={mockLeftColumn}
          rightColumn={mockRightColumn}
          className="custom-class"
        />
      );
      const wrapper = container.firstChild;
      expect(wrapper).toHaveClass('custom-class');
    });
  });

  describe('Edge Cases', () => {
    it('handles different numbers of steps per column', () => {
      const leftWithTwoSteps = { ...mockLeftColumn, steps: ['Step 1', 'Step 2'] };
      const rightWithFiveSteps = {
        ...mockRightColumn,
        steps: ['Step A', 'Step B', 'Step C', 'Step D', 'Step E'],
      };
      render(
        <ComparisonDiagram
          title={mockTitle}
          leftColumn={leftWithTwoSteps}
          rightColumn={rightWithFiveSteps}
        />
      );
      expect(screen.getByText('Step 1')).toBeInTheDocument();
      expect(screen.getByText('Step 2')).toBeInTheDocument();
      expect(screen.getByText('Step E')).toBeInTheDocument();
    });

    it('handles single step in column', () => {
      const leftSingleStep = { ...mockLeftColumn, steps: ['Only Step'] };
      render(
        <ComparisonDiagram
          title={mockTitle}
          leftColumn={leftSingleStep}
          rightColumn={mockRightColumn}
        />
      );
      expect(screen.getByText('Only Step')).toBeInTheDocument();
    });

    it('handles long text in steps', () => {
      const longStep = 'This is a very long step description that should wrap properly';
      const leftWithLongStep = { ...mockLeftColumn, steps: [longStep] };
      render(
        <ComparisonDiagram
          title={mockTitle}
          leftColumn={leftWithLongStep}
          rightColumn={mockRightColumn}
        />
      );
      expect(screen.getByText(longStep)).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('uses h4 for title heading level', () => {
      render(
        <ComparisonDiagram
          title={mockTitle}
          leftColumn={mockLeftColumn}
          rightColumn={mockRightColumn}
        />
      );
      const heading = screen.getByRole('heading', { level: 4, name: mockTitle });
      expect(heading).toBeInTheDocument();
    });

    it('has semantic HTML structure', () => {
      const { container } = render(
        <ComparisonDiagram
          title={mockTitle}
          leftColumn={mockLeftColumn}
          rightColumn={mockRightColumn}
        />
      );
      expect(container.querySelector('div')).toBeInTheDocument();
      expect(container.querySelector('h4')).toBeInTheDocument();
    });
  });

  describe('Snapshots', () => {
    it('matches snapshot for Poisoned Well example', () => {
      const { container } = render(
        <ComparisonDiagram
          title={mockTitle}
          leftColumn={mockLeftColumn}
          rightColumn={mockRightColumn}
          description={mockDescription}
        />
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it('matches snapshot without description', () => {
      const { container } = render(
        <ComparisonDiagram
          title={mockTitle}
          leftColumn={mockLeftColumn}
          rightColumn={mockRightColumn}
        />
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
