import React from 'react';
import { render, screen } from '@testing-library/react';
import { CrisisSubsectionC } from '../CrisisSubsectionC';

// Mock child components to isolate testing
jest.mock('@/components/ProblemSolutionPanel', () => ({
  __esModule: true,
  default: ({ problem, solution }: any) => (
    <div data-testid="problem-solution-panel">
      <div data-testid="problem-title">{problem.title}</div>
      <div data-testid="solution-title">{solution.title}</div>
    </div>
  ),
}));

jest.mock('@/components/EvidenceQuoteGroup', () => ({
  __esModule: true,
  default: ({ variant, title, quotes }: any) => (
    <div data-testid="evidence-quote-group" data-variant={variant}>
      <h4>{title}</h4>
      <div data-testid="quote-count">{quotes.length} quotes</div>
    </div>
  ),
}));

jest.mock('@/components/ComparisonDiagram', () => ({
  __esModule: true,
  default: ({ title, description, leftColumn, rightColumn }: any) => (
    <div data-testid="comparison-diagram">
      <div data-testid="diagram-title">{title}</div>
      <div data-testid="diagram-description">{description}</div>
      <div data-testid="left-column-label">{leftColumn.label}</div>
      <div data-testid="right-column-label">{rightColumn.label}</div>
    </div>
  ),
}));

jest.mock('@/components/CardGrid', () => ({
  __esModule: true,
  default: ({ variant, columns, cards }: any) => (
    <div data-testid="card-grid" data-variant={variant} data-columns={columns}>
      <div data-testid="card-count">{cards.length} cards</div>
      {cards.map((card: any, index: number) => (
        <div key={index} data-testid={`card-${index}`}>
          <span data-testid={`card-heading-${index}`}>{card.heading}</span>
        </div>
      ))}
    </div>
  ),
}));

jest.mock('@/components/SummaryBox', () => ({
  __esModule: true,
  default: ({ variant, title, children }: any) => (
    <div data-testid="summary-box" data-variant={variant}>
      <div data-testid="summary-title">{title}</div>
      <div data-testid="summary-content">{children}</div>
    </div>
  ),
}));

describe('CrisisSubsectionC', () => {
  it('renders the heading correctly', () => {
    render(<CrisisSubsectionC />);
    const heading = screen.getByRole('heading', { level: 3, name: /C\. The Specialized Knowledge Crisis/i });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass('text-red-900');
  });

  it('renders ProblemSolutionPanel component', () => {
    render(<CrisisSubsectionC />);
    const panel = screen.getByTestId('problem-solution-panel');
    expect(panel).toBeInTheDocument();
    expect(screen.getByTestId('problem-title')).toHaveTextContent('The Problem: STEM-First Curriculum');
    expect(screen.getByTestId('solution-title')).toHaveTextContent('The Solution: Poetic Knowledge as Foundation');
  });

  it('renders EvidenceQuoteGroup with major-premise variant', () => {
    render(<CrisisSubsectionC />);
    const quoteGroup = screen.getByTestId('evidence-quote-group');
    expect(quoteGroup).toBeInTheDocument();
    expect(quoteGroup).toHaveAttribute('data-variant', 'major-premise');
  });

  it('renders EvidenceQuoteGroup with 4 quotes', () => {
    render(<CrisisSubsectionC />);
    const quoteCount = screen.getByTestId('quote-count');
    expect(quoteCount).toHaveTextContent('4 quotes');
  });

  it('renders ComparisonDiagram (The Poisoned Well)', () => {
    render(<CrisisSubsectionC />);
    const diagram = screen.getByTestId('comparison-diagram');
    expect(diagram).toBeInTheDocument();
    expect(screen.getByTestId('diagram-title')).toHaveTextContent('The Poisoned Well: STEM Without Poetic Soil');
    expect(screen.getByTestId('left-column-label')).toHaveTextContent('Modern Education');
    expect(screen.getByTestId('right-column-label')).toHaveTextContent('Classical Education');
  });

  it('renders Three Poisons CardGrid with 3 cards', () => {
    render(<CrisisSubsectionC />);
    const cardGrid = screen.getByTestId('card-grid');
    expect(cardGrid).toBeInTheDocument();
    expect(cardGrid).toHaveAttribute('data-variant', 'crisis');
    expect(screen.getByTestId('card-count')).toHaveTextContent('3 cards');
    expect(screen.getByTestId('card-heading-0')).toHaveTextContent('Screens');
    expect(screen.getByTestId('card-heading-1')).toHaveTextContent('Softness');
    expect(screen.getByTestId('card-heading-2')).toHaveTextContent('Specialization');
  });

  it('renders Crisis Established SummaryBox', () => {
    render(<CrisisSubsectionC />);
    const summaryBox = screen.getByTestId('summary-box');
    expect(summaryBox).toBeInTheDocument();
    expect(summaryBox).toHaveAttribute('data-variant', 'major-premise');
    expect(screen.getByTestId('summary-title')).toHaveTextContent('The Crisis Established:');
  });

  it('has correct id attribute for anchor linking', () => {
    const { container } = render(<CrisisSubsectionC />);
    const mainDiv = container.firstChild as HTMLElement;
    expect(mainDiv).toHaveAttribute('id', 'major-premise-c');
  });

  it('applies custom className when provided', () => {
    const { container } = render(<CrisisSubsectionC className="custom-class" />);
    const mainDiv = container.firstChild as HTMLElement;
    expect(mainDiv).toHaveClass('custom-class');
    expect(mainDiv).toHaveClass('space-y-12');
  });

  it('contains all required text content', () => {
    render(<CrisisSubsectionC />);
    expect(screen.getByText('Summary: The Three Poisons')).toBeInTheDocument();
    expect(screen.getByText(/Modern education has systematically destroyed/i)).toBeInTheDocument();
  });

  it('renders without console errors or warnings', () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
    const warnSpy = jest.spyOn(console, 'warn').mockImplementation();
    
    render(<CrisisSubsectionC />);
    
    expect(consoleSpy).not.toHaveBeenCalled();
    expect(warnSpy).not.toHaveBeenCalled();
    
    consoleSpy.mockRestore();
    warnSpy.mockRestore();
  });

  it('maintains proper heading hierarchy', () => {
    render(<CrisisSubsectionC />);
    
    const h3Main = screen.getByRole('heading', { level: 3, name: /Specialized Knowledge Crisis/i });
    const h3Summary = screen.getByRole('heading', { level: 3, name: /Summary: The Three Poisons/i });
    
    expect(h3Main).toBeInTheDocument();
    expect(h3Summary).toBeInTheDocument();
  });

  it('matches snapshot', () => {
    const { container } = render(<CrisisSubsectionC />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
