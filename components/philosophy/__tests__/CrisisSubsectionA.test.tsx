import React from 'react';
import { render, screen } from '@testing-library/react';
import { CrisisSubsectionA } from '../CrisisSubsectionA';

// Mock child components to isolate testing
jest.mock('@/components/content/ProblemSolutionPanel', () => ({
  __esModule: true,
  default: ({ problem, solution }: any) => (
    <div data-testid="problem-solution-panel">
      <div data-testid="problem-title">{problem.title}</div>
      <div data-testid="solution-title">{solution.title}</div>
    </div>
  ),
}));

jest.mock('@/components/content/EvidenceQuoteGroup', () => ({
  __esModule: true,
  default: ({ variant, title, quotes }: any) => (
    <div data-testid="evidence-quote-group" data-variant={variant}>
      <h4>{title}</h4>
      <div data-testid="quote-count">{quotes.length} quotes</div>
    </div>
  ),
}));

jest.mock('@/components/interactive/InteractiveStages', () => ({
  __esModule: true,
  default: ({ mode }: any) => (
    <div data-testid="interactive-stages" data-mode={mode}>
      Interactive Stages Component
    </div>
  ),
}));

describe('CrisisSubsectionA', () => {
  it('renders the heading correctly', () => {
    render(<CrisisSubsectionA />);
    const heading = screen.getByRole('heading', { level: 3, name: /A\. Loss of Wonder & Sensory Integration/i });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass('text-red-900');
  });

  it('renders ProblemSolutionPanel component', () => {
    render(<CrisisSubsectionA />);
    const panel = screen.getByTestId('problem-solution-panel');
    expect(panel).toBeInTheDocument();
    expect(screen.getByTestId('problem-title')).toHaveTextContent('The Problem: Screen Addiction');
    expect(screen.getByTestId('solution-title')).toHaveTextContent('The Solution: Nature & Wonder');
  });

  it('renders EvidenceQuoteGroup with major-premise variant', () => {
    render(<CrisisSubsectionA />);
    const quoteGroup = screen.getByTestId('evidence-quote-group');
    expect(quoteGroup).toBeInTheDocument();
    expect(quoteGroup).toHaveAttribute('data-variant', 'major-premise');
  });

  it('renders EvidenceQuoteGroup with 3 quotes', () => {
    render(<CrisisSubsectionA />);
    const quoteCount = screen.getByTestId('quote-count');
    expect(quoteCount).toHaveTextContent('3 quotes');
  });

  it('renders InteractiveStages in crisis mode', () => {
    render(<CrisisSubsectionA />);
    const stages = screen.getByTestId('interactive-stages');
    expect(stages).toBeInTheDocument();
    expect(stages).toHaveAttribute('data-mode', 'crisis');
  });

  it('has correct id attribute for anchor linking', () => {
    const { container } = render(<CrisisSubsectionA />);
    const mainDiv = container.firstChild as HTMLElement;
    expect(mainDiv).toHaveAttribute('id', 'major-premise-a');
  });

  it('applies custom className when provided', () => {
    const { container } = render(<CrisisSubsectionA className="custom-class" />);
    const mainDiv = container.firstChild as HTMLElement;
    expect(mainDiv).toHaveClass('custom-class');
    expect(mainDiv).toHaveClass('space-y-12');
  });

  it('contains all required text content', () => {
    render(<CrisisSubsectionA />);
    expect(screen.getByText('Where the Crisis Hits: Nursery & Gymnasium')).toBeInTheDocument();
    expect(screen.getByText('Click each stage to see the modern failure')).toBeInTheDocument();
  });

  it('renders without console errors or warnings', () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
    const warnSpy = jest.spyOn(console, 'warn').mockImplementation();
    
    render(<CrisisSubsectionA />);
    
    expect(consoleSpy).not.toHaveBeenCalled();
    expect(warnSpy).not.toHaveBeenCalled();
    
    consoleSpy.mockRestore();
    warnSpy.mockRestore();
  });

  it('maintains proper heading hierarchy', () => {
    render(<CrisisSubsectionA />);
    
    const h3 = screen.getByRole('heading', { level: 3, name: /Loss of Wonder/i });
    const h4 = screen.getByRole('heading', { level: 4, name: /Where the Crisis Hits/i });
    
    expect(h3).toBeInTheDocument();
    expect(h4).toBeInTheDocument();
  });

  it('matches snapshot', () => {
    const { container } = render(<CrisisSubsectionA />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
