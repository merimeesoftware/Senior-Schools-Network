import { render, screen } from '@testing-library/react';
import StudyGrid from '../StudyGrid';

describe('StudyGrid', () => {
  const mockLeftColumn = {
    heading: 'What They Study:',
    items: [
      'Homer, Virgil, Dante',
      'Gregorian chant, polyphony',
      'Plato, Aristotle, Aquinas',
      'Sacred art (Byzantine, medieval)',
      'Natural philosophy before modern science',
    ],
  };

  const mockRightColumn = {
    heading: "What They Don't Study (Yet):",
    items: [
      'Career-focused majors',
      'Modern political theory',
      'Specialized STEM tracks',
      'Pop culture or current events',
      'Anything divorced from liturgical context',
    ],
  };

  const mockTitle = 'The IHP Model: Integrated Humanities';
  const mockDescription =
    'The Integrated Humanities Program at the University of Kansas demonstrates poetic education in practice.';
  const mockFooter = 'First integration, then specialization. First wonder, then analysis.';

  describe('Rendering', () => {
    it('renders title', () => {
      render(
        <StudyGrid title={mockTitle} leftColumn={mockLeftColumn} rightColumn={mockRightColumn} />
      );
      expect(screen.getByText(mockTitle)).toBeInTheDocument();
    });

    it('renders optional description', () => {
      render(
        <StudyGrid
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
        <StudyGrid title={mockTitle} leftColumn={mockLeftColumn} rightColumn={mockRightColumn} />
      );
      const description = container.querySelector('.leading-relaxed');
      expect(description).not.toBeInTheDocument();
    });

    it('renders optional footer', () => {
      render(
        <StudyGrid
          title={mockTitle}
          leftColumn={mockLeftColumn}
          rightColumn={mockRightColumn}
          footer={mockFooter}
        />
      );
      expect(screen.getByText(mockFooter)).toBeInTheDocument();
    });

    it('renders without footer when not provided', () => {
      render(
        <StudyGrid title={mockTitle} leftColumn={mockLeftColumn} rightColumn={mockRightColumn} />
      );
      expect(screen.queryByText(/First integration/)).not.toBeInTheDocument();
    });

    it('renders two columns', () => {
      const { container } = render(
        <StudyGrid title={mockTitle} leftColumn={mockLeftColumn} rightColumn={mockRightColumn} />
      );
      const grid = container.querySelector('.grid');
      expect(grid?.children).toHaveLength(2);
    });
  });

  describe('Column Headings', () => {
    it('renders left column heading', () => {
      render(
        <StudyGrid title={mockTitle} leftColumn={mockLeftColumn} rightColumn={mockRightColumn} />
      );
      expect(screen.getByText('What They Study:')).toBeInTheDocument();
    });

    it('renders right column heading', () => {
      render(
        <StudyGrid title={mockTitle} leftColumn={mockLeftColumn} rightColumn={mockRightColumn} />
      );
      expect(screen.getByText("What They Don't Study (Yet):")).toBeInTheDocument();
    });
  });

  describe('List Items', () => {
    it('renders all left column items', () => {
      render(
        <StudyGrid title={mockTitle} leftColumn={mockLeftColumn} rightColumn={mockRightColumn} />
      );
      expect(screen.getByText('Homer, Virgil, Dante')).toBeInTheDocument();
      expect(screen.getByText('Gregorian chant, polyphony')).toBeInTheDocument();
      expect(screen.getByText('Plato, Aristotle, Aquinas')).toBeInTheDocument();
      expect(screen.getByText('Sacred art (Byzantine, medieval)')).toBeInTheDocument();
      expect(screen.getByText('Natural philosophy before modern science')).toBeInTheDocument();
    });

    it('renders all right column items', () => {
      render(
        <StudyGrid title={mockTitle} leftColumn={mockLeftColumn} rightColumn={mockRightColumn} />
      );
      expect(screen.getByText('Career-focused majors')).toBeInTheDocument();
      expect(screen.getByText('Modern political theory')).toBeInTheDocument();
      expect(screen.getByText('Specialized STEM tracks')).toBeInTheDocument();
      expect(screen.getByText('Pop culture or current events')).toBeInTheDocument();
      expect(screen.getByText('Anything divorced from liturgical context')).toBeInTheDocument();
    });
  });

  describe('List Styling', () => {
    it('uses proper list markup', () => {
      const { container } = render(
        <StudyGrid title={mockTitle} leftColumn={mockLeftColumn} rightColumn={mockRightColumn} />
      );
      const lists = container.querySelectorAll('ul');
      expect(lists).toHaveLength(2);
    });

    it('applies disc bullet style', () => {
      const { container } = render(
        <StudyGrid title={mockTitle} leftColumn={mockLeftColumn} rightColumn={mockRightColumn} />
      );
      const list = container.querySelector('.list-disc');
      expect(list).toBeInTheDocument();
    });

    it('applies list-inside style', () => {
      const { container } = render(
        <StudyGrid title={mockTitle} leftColumn={mockLeftColumn} rightColumn={mockRightColumn} />
      );
      const list = container.querySelector('.list-inside');
      expect(list).toBeInTheDocument();
    });
  });

  describe('Variant Styling', () => {
    it('applies restoration variant border color', () => {
      const { container } = render(
        <StudyGrid
          title={mockTitle}
          leftColumn={mockLeftColumn}
          rightColumn={mockRightColumn}
          variant="restoration"
        />
      );
      const wrapper = container.firstChild;
      expect(wrapper).toHaveClass('border-green-700/40');
    });

    it('applies restoration variant heading colors', () => {
      render(
        <StudyGrid
          title={mockTitle}
          leftColumn={mockLeftColumn}
          rightColumn={mockRightColumn}
          variant="restoration"
        />
      );
      const leftHeading = screen.getByText('What They Study:');
      expect(leftHeading).toHaveClass('text-green-900');
    });

    it('applies neutral variant border color', () => {
      const { container } = render(
        <StudyGrid
          title={mockTitle}
          leftColumn={mockLeftColumn}
          rightColumn={mockRightColumn}
          variant="neutral"
        />
      );
      const wrapper = container.firstChild;
      expect(wrapper).toHaveClass('border-charcoal/20');
    });

    it('applies neutral variant heading colors', () => {
      render(
        <StudyGrid
          title={mockTitle}
          leftColumn={mockLeftColumn}
          rightColumn={mockRightColumn}
          variant="neutral"
        />
      );
      const leftHeading = screen.getByText('What They Study:');
      expect(leftHeading).toHaveClass('text-forest');
    });

    it('defaults to neutral variant when not specified', () => {
      const { container } = render(
        <StudyGrid title={mockTitle} leftColumn={mockLeftColumn} rightColumn={mockRightColumn} />
      );
      const wrapper = container.firstChild;
      expect(wrapper).toHaveClass('border-charcoal/20');
    });
  });

  describe('Layout and Styling', () => {
    it('has responsive grid layout', () => {
      const { container } = render(
        <StudyGrid title={mockTitle} leftColumn={mockLeftColumn} rightColumn={mockRightColumn} />
      );
      const grid = container.querySelector('.grid');
      expect(grid).toHaveClass('grid-cols-1');
      expect(grid).toHaveClass('md:grid-cols-2');
    });

    it('has parchment-light background', () => {
      const { container } = render(
        <StudyGrid title={mockTitle} leftColumn={mockLeftColumn} rightColumn={mockRightColumn} />
      );
      const wrapper = container.firstChild;
      expect(wrapper).toHaveClass('bg-parchment-light');
    });

    it('has border and rounded corners', () => {
      const { container } = render(
        <StudyGrid title={mockTitle} leftColumn={mockLeftColumn} rightColumn={mockRightColumn} />
      );
      const wrapper = container.firstChild;
      expect(wrapper).toHaveClass('border-2');
      expect(wrapper).toHaveClass('rounded-lg');
    });

    it('has proper padding', () => {
      const { container } = render(
        <StudyGrid title={mockTitle} leftColumn={mockLeftColumn} rightColumn={mockRightColumn} />
      );
      const wrapper = container.firstChild;
      expect(wrapper).toHaveClass('p-8');
    });

    it('title has correct styling', () => {
      const { container } = render(
        <StudyGrid title={mockTitle} leftColumn={mockLeftColumn} rightColumn={mockRightColumn} />
      );
      const title = screen.getByText(mockTitle);
      expect(title).toHaveClass('font-playfair');
      expect(title).toHaveClass('text-2xl');
      expect(title).toHaveClass('font-bold');
      expect(title).toHaveClass('text-forest');
      expect(title).toHaveClass('text-center');
    });

    it('footer has correct styling', () => {
      render(
        <StudyGrid
          title={mockTitle}
          leftColumn={mockLeftColumn}
          rightColumn={mockRightColumn}
          footer={mockFooter}
        />
      );
      const footer = screen.getByText(mockFooter);
      expect(footer).toHaveClass('text-center');
      expect(footer).toHaveClass('text-sm');
      expect(footer).toHaveClass('text-charcoal/70');
      expect(footer).toHaveClass('italic');
    });
  });

  describe('Custom ClassName', () => {
    it('applies custom className to wrapper', () => {
      const { container } = render(
        <StudyGrid
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
    it('handles different numbers of items per column', () => {
      const leftWithTwoItems = { ...mockLeftColumn, items: ['Item 1', 'Item 2'] };
      const rightWithSevenItems = {
        ...mockRightColumn,
        items: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
      };
      render(
        <StudyGrid
          title={mockTitle}
          leftColumn={leftWithTwoItems}
          rightColumn={rightWithSevenItems}
        />
      );
      expect(screen.getByText('Item 1')).toBeInTheDocument();
      expect(screen.getByText('G')).toBeInTheDocument();
    });

    it('handles single item in column', () => {
      const leftSingleItem = { ...mockLeftColumn, items: ['Only Item'] };
      render(
        <StudyGrid title={mockTitle} leftColumn={leftSingleItem} rightColumn={mockRightColumn} />
      );
      expect(screen.getByText('Only Item')).toBeInTheDocument();
    });

    it('handles empty items array', () => {
      const leftEmpty = { ...mockLeftColumn, items: [] };
      const { container } = render(
        <StudyGrid title={mockTitle} leftColumn={leftEmpty} rightColumn={mockRightColumn} />
      );
      const lists = container.querySelectorAll('ul');
      expect(lists[0].children).toHaveLength(0);
    });

    it('handles long item text', () => {
      const longItem =
        'This is a very long item description that should wrap properly within the list layout';
      const leftWithLongItem = { ...mockLeftColumn, items: [longItem] };
      render(
        <StudyGrid title={mockTitle} leftColumn={leftWithLongItem} rightColumn={mockRightColumn} />
      );
      expect(screen.getByText(longItem)).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('uses h4 for title heading level', () => {
      render(
        <StudyGrid title={mockTitle} leftColumn={mockLeftColumn} rightColumn={mockRightColumn} />
      );
      const heading = screen.getByRole('heading', { level: 4, name: mockTitle });
      expect(heading).toBeInTheDocument();
    });

    it('uses h5 for column headings', () => {
      render(
        <StudyGrid title={mockTitle} leftColumn={mockLeftColumn} rightColumn={mockRightColumn} />
      );
      const leftHeading = screen.getByRole('heading', { level: 5, name: 'What They Study:' });
      const rightHeading = screen.getByRole('heading', {
        level: 5,
        name: "What They Don't Study (Yet):",
      });
      expect(leftHeading).toBeInTheDocument();
      expect(rightHeading).toBeInTheDocument();
    });

    it('uses proper list markup for accessibility', () => {
      render(
        <StudyGrid title={mockTitle} leftColumn={mockLeftColumn} rightColumn={mockRightColumn} />
      );
      const lists = screen.getAllByRole('list');
      expect(lists).toHaveLength(2);
    });
  });

  describe('Snapshots', () => {
    it('matches snapshot for IHP Model example', () => {
      const { container } = render(
        <StudyGrid
          title={mockTitle}
          leftColumn={mockLeftColumn}
          rightColumn={mockRightColumn}
          description={mockDescription}
          footer={mockFooter}
          variant="restoration"
        />
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it('matches snapshot without optional props', () => {
      const { container } = render(
        <StudyGrid title={mockTitle} leftColumn={mockLeftColumn} rightColumn={mockRightColumn} />
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it('matches snapshot with neutral variant', () => {
      const { container } = render(
        <StudyGrid
          title={mockTitle}
          leftColumn={mockLeftColumn}
          rightColumn={mockRightColumn}
          variant="neutral"
        />
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
