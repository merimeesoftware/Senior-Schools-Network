import React from 'react';
import { render, screen } from '@testing-library/react';
import { RestorationSubsectionB } from '../RestorationSubsectionB';

// Mock child components
jest.mock('@/components/content/ProblemSolutionPanel', () => ({
  __esModule: true,
  default: ({ layout, problem, solution }: any) => (
    <div data-testid="mock-problem-solution-panel" data-layout={layout}>
      <div data-testid="problem-title">{problem?.title}</div>
      <div data-testid="solution-title">{solution?.title}</div>
    </div>
  ),
}));

jest.mock('@/components/content/EvidenceQuoteGroup', () => ({
  __esModule: true,
  default: ({ variant, title, quotes }: any) => (
    <div data-testid="mock-evidence-quote-group" data-variant={variant}>
      <h4>{title}</h4>
      <div data-testid="quotes-count">{quotes?.length || 0} quotes</div>
    </div>
  ),
}));

describe('RestorationSubsectionB', () => {
  it('renders without crashing', () => {
    render(<RestorationSubsectionB />);
    expect(screen.getByText('B. The Gymnasium Stage: Foundation for Warriors')).toBeInTheDocument();
  });

  it('renders the correct heading', () => {
    render(<RestorationSubsectionB />);
    const heading = screen.getByRole('heading', { name: /B. The Gymnasium Stage: Foundation for Warriors/i });
    expect(heading.className).toContain('font-playfair');
    expect(heading.className).toContain('text-4xl');
    expect(heading.className).toContain('text-green-900');
  });

  it('renders ProblemSolutionPanel with split layout', () => {
    render(<RestorationSubsectionB />);
    const panel = screen.getByTestId('mock-problem-solution-panel');
    expect(panel).toBeInTheDocument();
    expect(panel).toHaveAttribute('data-layout', 'split');
  });

  it('renders ProblemSolutionPanel with correct problem title', () => {
    render(<RestorationSubsectionB />);
    expect(screen.getByTestId('problem-title')).toHaveTextContent('What Modern Education Skips');
  });

  it('renders ProblemSolutionPanel with correct solution title', () => {
    render(<RestorationSubsectionB />);
    expect(screen.getByTestId('solution-title')).toHaveTextContent("Senior's Gymnasium Prescription");
  });

  it('renders EvidenceQuoteGroup with correct variant', () => {
    render(<RestorationSubsectionB />);
    const quoteGroup = screen.getByTestId('mock-evidence-quote-group');
    expect(quoteGroup).toBeInTheDocument();
    expect(quoteGroup).toHaveAttribute('data-variant', 'minor-premise');
  });

  it('passes 3 quotes to EvidenceQuoteGroup', () => {
    render(<RestorationSubsectionB />);
    expect(screen.getByTestId('quotes-count')).toHaveTextContent('3 quotes');
  });

  it('has correct id attribute for anchor linking', () => {
    const { container } = render(<RestorationSubsectionB />);
    const mainDiv = container.firstChild;
    expect(mainDiv).toHaveAttribute('id', 'minor-premise-b');
  });

  it('applies custom className when provided', () => {
    const { container } = render(<RestorationSubsectionB className="custom-class" />);
    const mainDiv = container.firstChild as HTMLElement;
    expect(mainDiv.className).toContain('custom-class');
  });

  it('matches snapshot', () => {
    const { container } = render(<RestorationSubsectionB />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
