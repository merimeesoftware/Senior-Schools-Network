import React from 'react';
import { render, screen } from '@testing-library/react';
import { RestorationSubsectionA } from '../RestorationSubsectionA';

// Mock child components
jest.mock('@/components/InteractiveStages', () => ({
  __esModule: true,
  default: ({ mode }: any) => (
    <div data-testid="mock-interactive-stages" data-mode={mode}>
      Mock InteractiveStages
    </div>
  ),
}));

jest.mock('@/components/EvidenceQuoteGroup', () => ({
  __esModule: true,
  default: ({ variant, title, quotes }: any) => (
    <div data-testid="mock-evidence-quote-group" data-variant={variant}>
      <h4>{title}</h4>
      <div data-testid="quotes-count">{quotes?.length || 0} quotes</div>
    </div>
  ),
}));

describe('RestorationSubsectionA', () => {
  it('renders without crashing', () => {
    render(<RestorationSubsectionA />);
    expect(screen.getByText('A. The Four Stages of Restoration')).toBeInTheDocument();
  });

  it('renders the correct heading', () => {
    render(<RestorationSubsectionA />);
    const heading = screen.getByRole('heading', { name: /A. The Four Stages of Restoration/i });
    expect(heading.className).toContain('font-playfair');
    expect(heading.className).toContain('text-4xl');
    expect(heading.className).toContain('text-green-900');
  });

  it('renders the introductory paragraph', () => {
    render(<RestorationSubsectionA />);
    expect(screen.getByText(/Dr. John Senior's model for Christian education/i)).toBeInTheDocument();
    expect(screen.getByText(/natural developmental stages/i)).toBeInTheDocument();
  });

  it('renders InteractiveStages component with correct mode', () => {
    render(<RestorationSubsectionA />);
    const stages = screen.getByTestId('mock-interactive-stages');
    expect(stages).toBeInTheDocument();
    expect(stages).toHaveAttribute('data-mode', 'default');
  });

  it('renders EvidenceQuoteGroup with correct variant', () => {
    render(<RestorationSubsectionA />);
    const quoteGroup = screen.getByTestId('mock-evidence-quote-group');
    expect(quoteGroup).toBeInTheDocument();
    expect(quoteGroup).toHaveAttribute('data-variant', 'minor-premise');
  });

  it('passes 3 quotes to EvidenceQuoteGroup', () => {
    render(<RestorationSubsectionA />);
    expect(screen.getByTestId('quotes-count')).toHaveTextContent('3 quotes');
  });

  it('has correct id attribute for anchor linking', () => {
    const { container } = render(<RestorationSubsectionA />);
    const mainDiv = container.firstChild;
    expect(mainDiv).toHaveAttribute('id', 'minor-premise-a');
  });

  it('applies custom className when provided', () => {
    const { container } = render(<RestorationSubsectionA className="custom-class" />);
    const mainDiv = container.firstChild as HTMLElement;
    expect(mainDiv.className).toContain('custom-class');
  });

  it('has proper semantic structure', () => {
    render(<RestorationSubsectionA />);
    expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument();
  });

  it('matches snapshot', () => {
    const { container } = render(<RestorationSubsectionA />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
