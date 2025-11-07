import React from 'react';
import { render, screen } from '@testing-library/react';
import { RestorationSubsectionC } from '../RestorationSubsectionC';

// Mock child components
jest.mock('@/components/StudyGrid', () => ({
  __esModule: true,
  default: ({ title, description, variant, leftColumn, rightColumn, footer }: any) => (
    <div data-testid="mock-study-grid" data-variant={variant}>
      <h4>{title}</h4>
      <p>{description}</p>
      <div data-testid="left-heading">{leftColumn?.heading}</div>
      <div data-testid="right-heading">{rightColumn?.heading}</div>
      {footer && <div data-testid="footer">{footer}</div>}
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

jest.mock('@/components/SummaryBox', () => ({
  __esModule: true,
  default: ({ variant, title, children }: any) => (
    <div data-testid="mock-summary-box" data-variant={variant}>
      <h5>{title}</h5>
      {children}
    </div>
  ),
}));

describe('RestorationSubsectionC', () => {
  it('renders without crashing', () => {
    render(<RestorationSubsectionC />);
    expect(screen.getByText('C. The Poetic Stage: Integrated Learning')).toBeInTheDocument();
  });

  it('renders the correct heading', () => {
    render(<RestorationSubsectionC />);
    const heading = screen.getByRole('heading', { name: /C. The Poetic Stage: Integrated Learning/i });
    expect(heading.className).toContain('font-playfair');
    expect(heading.className).toContain('text-4xl');
    expect(heading.className).toContain('text-green-900');
  });

  it('renders the introductory paragraph', () => {
    render(<RestorationSubsectionC />);
    expect(screen.getByText(/Only after the gymnasium lays the foundation/i)).toBeInTheDocument();
    expect(screen.getByText(/poetic stage \(ages 13-17\)/i)).toBeInTheDocument();
  });

  it('renders StudyGrid with correct variant', () => {
    render(<RestorationSubsectionC />);
    const studyGrid = screen.getByTestId('mock-study-grid');
    expect(studyGrid).toBeInTheDocument();
    expect(studyGrid).toHaveAttribute('data-variant', 'restoration');
  });

  it('renders StudyGrid with correct title', () => {
    render(<RestorationSubsectionC />);
    expect(screen.getByText('The IHP Model: Integrated Humanities')).toBeInTheDocument();
  });

  it('renders StudyGrid with correct column headings', () => {
    render(<RestorationSubsectionC />);
    expect(screen.getByTestId('left-heading')).toHaveTextContent('What They Study:');
    expect(screen.getByTestId('right-heading')).toHaveTextContent("What They Don't Study (Yet):");
  });

  it('renders StudyGrid footer', () => {
    render(<RestorationSubsectionC />);
    const footer = screen.getByTestId('footer');
    expect(footer).toHaveTextContent('First integration, then specialization');
  });

  it('renders EvidenceQuoteGroup with correct variant', () => {
    render(<RestorationSubsectionC />);
    const quoteGroup = screen.getByTestId('mock-evidence-quote-group');
    expect(quoteGroup).toBeInTheDocument();
    expect(quoteGroup).toHaveAttribute('data-variant', 'minor-premise');
  });

  it('passes 3 quotes to EvidenceQuoteGroup', () => {
    render(<RestorationSubsectionC />);
    expect(screen.getByTestId('quotes-count')).toHaveTextContent('3 quotes');
  });

  it('renders Summary section heading', () => {
    render(<RestorationSubsectionC />);
    expect(screen.getByText('Summary: The Remedy Is Clear')).toBeInTheDocument();
  });

  it('renders SummaryBox with correct variant', () => {
    render(<RestorationSubsectionC />);
    const summaryBox = screen.getByTestId('mock-summary-box');
    expect(summaryBox).toBeInTheDocument();
    expect(summaryBox).toHaveAttribute('data-variant', 'minor-premise');
  });

  it('renders SummaryBox with correct title', () => {
    render(<RestorationSubsectionC />);
    expect(screen.getByText('The Restoration Established:')).toBeInTheDocument();
  });

  it('has correct id attribute for anchor linking', () => {
    const { container } = render(<RestorationSubsectionC />);
    const mainDiv = container.firstChild;
    expect(mainDiv).toHaveAttribute('id', 'minor-premise-c');
  });

  it('applies custom className when provided', () => {
    const { container } = render(<RestorationSubsectionC className="custom-class" />);
    const mainDiv = container.firstChild as HTMLElement;
    expect(mainDiv.className).toContain('custom-class');
  });

  it('matches snapshot', () => {
    const { container } = render(<RestorationSubsectionC />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
