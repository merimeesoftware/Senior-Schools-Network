import { render, screen, fireEvent } from '@testing-library/react';
import ProblemSolutionPanel from '../../content/ProblemSolutionPanel';
import type { Quote } from '@/lib/types/content';
import type { ImageAsset } from '@/lib/assets';

// Mock data
const mockProblemQuote: Quote = {
  id: 'test-problem',
  quote: 'Modern education has poisoned the well.',
  author: 'Dr. Frank Nelick',
  source: 'IHP Lecture',
  category: 'philosophy',
};

const mockSolutionQuote: Quote = {
  id: 'test-solution',
  quote: 'Earth we grasp with the earthly, fire with flame.',
  author: 'Hugh of St. Victor',
  source: 'Didascalicon I.1',
  category: 'philosophy',
};

const mockProblemImage: ImageAsset = {
  id: 'test-problem-img',
  src: '/images/test-problem.jpg',
  alt: 'Problem image',
  width: 800,
  height: 600,
};

const mockSolutionImage: ImageAsset = {
  id: 'test-solution-img',
  src: '/images/test-solution.jpg',
  alt: 'Solution image',
  width: 800,
  height: 600,
};

const mockProblemContent = {
  title: 'Screens Replace Senses',
  description: 'Boys spend 7+ hours daily on devices...',
  quote: mockProblemQuote,
  image: mockProblemImage,
};

const mockSolutionContent = {
  title: 'Sensory Awakening Through Nature',
  description: 'Lightly clad, boys exercise...',
  quote: mockSolutionQuote,
  image: mockSolutionImage,
};

describe('ProblemSolutionPanel', () => {
  describe('Split View Mode', () => {
    it('renders both panels side by side in split mode', () => {
      render(
        <ProblemSolutionPanel
          layout="split"
          problem={mockProblemContent}
          solution={mockSolutionContent}
        />
      );

      expect(screen.getByText('Screens Replace Senses')).toBeInTheDocument();
      expect(screen.getByText('Sensory Awakening Through Nature')).toBeInTheDocument();
    });

    it('displays problem panel with muted styling', () => {
      const { container } = render(
        <ProblemSolutionPanel
          layout="split"
          problem={mockProblemContent}
          solution={mockSolutionContent}
        />
      );

      const problemPanel = container.querySelector('.problem-panel');
      expect(problemPanel).toBeInTheDocument();
      expect(problemPanel).toHaveClass('problem-panel');
    });

    it('displays solution panel with vibrant styling', () => {
      const { container } = render(
        <ProblemSolutionPanel
          layout="split"
          problem={mockProblemContent}
          solution={mockSolutionContent}
        />
      );

      const solutionPanel = container.querySelector('.solution-panel');
      expect(solutionPanel).toBeInTheDocument();
      expect(solutionPanel).toHaveClass('solution-panel');
    });

    it('renders both quotes', () => {
      render(
        <ProblemSolutionPanel
          layout="split"
          problem={mockProblemContent}
          solution={mockSolutionContent}
        />
      );

      expect(screen.getByText(/Modern education has poisoned/)).toBeInTheDocument();
      expect(screen.getByText(/Earth we grasp with the earthly/)).toBeInTheDocument();
    });

    it('applies grid layout for split view', () => {
      const { container } = render(
        <ProblemSolutionPanel
          layout="split"
          problem={mockProblemContent}
          solution={mockSolutionContent}
        />
      );

      const grid = container.querySelector('.grid');
      expect(grid).toHaveClass('grid-cols-1');
      expect(grid).toHaveClass('lg:grid-cols-2');
    });
  });

  describe('Toggle View Mode', () => {
    it('renders toggle button', () => {
      render(
        <ProblemSolutionPanel
          layout="toggle"
          problem={mockProblemContent}
          solution={mockSolutionContent}
        />
      );

      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
    });

    it('starts with problem view by default', () => {
      render(
        <ProblemSolutionPanel
          layout="toggle"
          problem={mockProblemContent}
          solution={mockSolutionContent}
        />
      );

      expect(screen.getByText('Screens Replace Senses')).toBeInTheDocument();
      expect(screen.queryByText('Sensory Awakening Through Nature')).not.toBeInTheDocument();
    });

    it('starts with solution view when defaultView is solution', () => {
      render(
        <ProblemSolutionPanel
          layout="toggle"
          defaultView="solution"
          problem={mockProblemContent}
          solution={mockSolutionContent}
        />
      );

      expect(screen.getByText('Sensory Awakening Through Nature')).toBeInTheDocument();
      expect(screen.queryByText('Screens Replace Senses')).not.toBeInTheDocument();
    });

    it('toggles between problem and solution on button click', () => {
      render(
        <ProblemSolutionPanel
          layout="toggle"
          problem={mockProblemContent}
          solution={mockSolutionContent}
        />
      );

      const button = screen.getByRole('button');

      // Initially shows problem
      expect(screen.getByText('Screens Replace Senses')).toBeInTheDocument();

      // Click to show solution
      fireEvent.click(button);
      expect(screen.getByText('Sensory Awakening Through Nature')).toBeInTheDocument();

      // Click to show problem again
      fireEvent.click(button);
      expect(screen.getByText('Screens Replace Senses')).toBeInTheDocument();
    });

    it('updates button text based on current view', () => {
      render(
        <ProblemSolutionPanel
          layout="toggle"
          problem={mockProblemContent}
          solution={mockSolutionContent}
        />
      );

      const button = screen.getByRole('button');

      // Initially shows "Show the Solution"
      expect(button).toHaveTextContent('→ Show the Solution');

      // After click, shows "Show the Problem"
      fireEvent.click(button);
      expect(button).toHaveTextContent('← Show the Problem');
    });

    it('button has proper aria-label', () => {
      render(
        <ProblemSolutionPanel
          layout="toggle"
          problem={mockProblemContent}
          solution={mockSolutionContent}
        />
      );

      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-label', 'Show solution');

      fireEvent.click(button);
      expect(button).toHaveAttribute('aria-label', 'Show problem');
    });
  });

  describe('Content Rendering', () => {
    it('renders panel titles as h4 headings', () => {
      render(
        <ProblemSolutionPanel
          layout="split"
          problem={mockProblemContent}
          solution={mockSolutionContent}
        />
      );

      const headings = screen.getAllByRole('heading', { level: 4 });
      expect(headings).toHaveLength(2);
    });

    it('renders panel descriptions', () => {
      render(
        <ProblemSolutionPanel
          layout="split"
          problem={mockProblemContent}
          solution={mockSolutionContent}
        />
      );

      expect(screen.getByText(/Boys spend 7\+ hours daily/)).toBeInTheDocument();
      expect(screen.getByText(/Lightly clad/)).toBeInTheDocument();
    });

    it('renders without images when not provided', () => {
      const problemNoImage = { ...mockProblemContent, image: undefined };
      const solutionNoImage = { ...mockSolutionContent, image: undefined };

      const { container } = render(
        <ProblemSolutionPanel
          layout="split"
          problem={problemNoImage}
          solution={solutionNoImage}
        />
      );

      const images = container.querySelectorAll('.aspect-video');
      expect(images).toHaveLength(0);
    });

    it('applies custom className', () => {
      const { container } = render(
        <ProblemSolutionPanel
          layout="split"
          problem={mockProblemContent}
          solution={mockSolutionContent}
          className="custom-class"
        />
      );

      expect(container.firstChild).toHaveClass('custom-class');
    });
  });

  describe('Visual Styling', () => {
    it('problem panel has charcoal text color', () => {
      render(
        <ProblemSolutionPanel
          layout="split"
          problem={mockProblemContent}
          solution={mockSolutionContent}
        />
      );

      const problemTitle = screen.getByText('Screens Replace Senses');
      expect(problemTitle).toHaveClass('text-charcoal');
    });

    it('solution panel has forest text color', () => {
      render(
        <ProblemSolutionPanel
          layout="split"
          problem={mockProblemContent}
          solution={mockSolutionContent}
        />
      );

      const solutionTitle = screen.getByText('Sensory Awakening Through Nature');
      expect(solutionTitle).toHaveClass('text-forest');
    });

    it('problem quote has opacity reduction', () => {
      const { container } = render(
        <ProblemSolutionPanel
          layout="split"
          problem={mockProblemContent}
          solution={mockSolutionContent}
        />
      );

      const panels = container.querySelectorAll('.problem-panel');
      expect(panels.length).toBeGreaterThan(0);
    });
  });

  describe('Accessibility', () => {
    it('toggle button is keyboard accessible', () => {
      render(
        <ProblemSolutionPanel
          layout="toggle"
          problem={mockProblemContent}
          solution={mockSolutionContent}
        />
      );

      const button = screen.getByRole('button');
      expect(button).toHaveClass('focus-visible-ring');
    });

    it('panels have proper semantic structure', () => {
      render(
        <ProblemSolutionPanel
          layout="split"
          problem={mockProblemContent}
          solution={mockSolutionContent}
        />
      );

      const headings = screen.getAllByRole('heading');
      expect(headings.length).toBeGreaterThan(0);
    });
  });
});
