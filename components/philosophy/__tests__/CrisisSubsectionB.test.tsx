import React from 'react';
import { render, screen } from '@testing-library/react';
import { CrisisSubsectionB } from '../CrisisSubsectionB';

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

jest.mock('@/components/CardGrid', () => ({
  __esModule: true,
  default: ({ variant, columns, cards }: any) => (
    <div data-testid="card-grid" data-variant={variant} data-columns={columns}>
      <div data-testid="card-count">{cards.length} cards</div>
      {cards.map((card: any, index: number) => (
        <div key={index} data-testid={`card-${index}`}>
          <span data-testid={`card-emoji-${index}`}>{card.emoji}</span>
          <span data-testid={`card-heading-${index}`}>{card.heading}</span>
        </div>
      ))}
    </div>
  ),
}));

describe('CrisisSubsectionB', () => {
  it('renders the heading correctly', () => {
    render(<CrisisSubsectionB />);
    const heading = screen.getByRole('heading', { level: 3, name: /B\. Cultural Softness & the Gymnasium Crisis/i });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass('text-red-900');
  });

  it('renders ProblemSolutionPanel component', () => {
    render(<CrisisSubsectionB />);
    const panel = screen.getByTestId('problem-solution-panel');
    expect(panel).toBeInTheDocument();
    expect(screen.getByTestId('problem-title')).toHaveTextContent('The Problem: Elimination of Risk');
    expect(screen.getByTestId('solution-title')).toHaveTextContent('The Solution: Gymnasium Rigor');
  });

  it('renders EvidenceQuoteGroup with major-premise variant', () => {
    render(<CrisisSubsectionB />);
    const quoteGroup = screen.getByTestId('evidence-quote-group');
    expect(quoteGroup).toBeInTheDocument();
    expect(quoteGroup).toHaveAttribute('data-variant', 'major-premise');
  });

  it('renders EvidenceQuoteGroup with 4 quotes', () => {
    render(<CrisisSubsectionB />);
    const quoteCount = screen.getByTestId('quote-count');
    expect(quoteCount).toHaveTextContent('4 quotes');
  });

  it('renders CardGrid with crisis variant and 3 columns', () => {
    render(<CrisisSubsectionB />);
    const cardGrid = screen.getByTestId('card-grid');
    expect(cardGrid).toBeInTheDocument();
    expect(cardGrid).toHaveAttribute('data-variant', 'crisis');
    expect(cardGrid).toHaveAttribute('data-columns', '3');
  });

  it('renders CardGrid with 3 cards (Sport, Latin, Adventure)', () => {
    render(<CrisisSubsectionB />);
    expect(screen.getByTestId('card-count')).toHaveTextContent('3 cards');
    expect(screen.getByTestId('card-heading-0')).toHaveTextContent('Sport');
    expect(screen.getByTestId('card-heading-1')).toHaveTextContent('Latin');
    expect(screen.getByTestId('card-heading-2')).toHaveTextContent('Adventure');
  });

  it('has correct id attribute for anchor linking', () => {
    const { container } = render(<CrisisSubsectionB />);
    const mainDiv = container.firstChild as HTMLElement;
    expect(mainDiv).toHaveAttribute('id', 'major-premise-b');
  });

  it('applies custom className when provided', () => {
    const { container } = render(<CrisisSubsectionB className="custom-class" />);
    const mainDiv = container.firstChild as HTMLElement;
    expect(mainDiv).toHaveClass('custom-class');
    expect(mainDiv).toHaveClass('space-y-12');
  });

  it('contains all required text content', () => {
    render(<CrisisSubsectionB />);
    expect(screen.getByText('What the Gymnasium Stage Looks Like')).toBeInTheDocument();
    expect(screen.getByText('Ages 7-13: The window for physical and moral formation')).toBeInTheDocument();
  });

  it('renders without console errors or warnings', () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
    const warnSpy = jest.spyOn(console, 'warn').mockImplementation();
    
    render(<CrisisSubsectionB />);
    
    expect(consoleSpy).not.toHaveBeenCalled();
    expect(warnSpy).not.toHaveBeenCalled();
    
    consoleSpy.mockRestore();
    warnSpy.mockRestore();
  });

  it('matches snapshot', () => {
    const { container } = render(<CrisisSubsectionB />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
