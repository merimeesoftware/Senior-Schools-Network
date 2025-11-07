import React from 'react';
import { render, screen } from '@testing-library/react';
import { VisionWarriorPoet } from '../VisionWarriorPoet';

// Mock CardGrid component
jest.mock('@/components/CardGrid', () => ({
  __esModule: true,
  default: ({ variant, columns, cards }: any) => (
    <div data-testid="mock-card-grid" data-variant={variant} data-columns={columns}>
      {cards?.map((card: any, idx: number) => (
        <div key={idx} data-testid={`card-${idx}`}>
          <span data-testid={`emoji-${idx}`}>{card.emoji}</span>
          <h4 data-testid={`heading-${idx}`}>{card.heading}</h4>
          <p data-testid={`description-${idx}`}>{card.description}</p>
        </div>
      ))}
    </div>
  ),
}));

describe('VisionWarriorPoet', () => {
  it('renders without crashing', () => {
    render(<VisionWarriorPoet />);
    expect(screen.getByText('What Is a Warrior Poet?')).toBeInTheDocument();
  });

  it('renders the heading with correct styling', () => {
    render(<VisionWarriorPoet />);
    const heading = screen.getByRole('heading', { name: /What Is a Warrior Poet?/i });
    expect(heading.className).toContain('font-playfair');
    expect(heading.className).toContain('text-4xl');
    expect(heading.className).toContain('text-gold-dark');
  });

  it('renders CardGrid with 3 cards', () => {
    render(<VisionWarriorPoet />);
    const cardGrid = screen.getByTestId('mock-card-grid');
    expect(cardGrid).toBeInTheDocument();
    expect(screen.getByTestId('card-0')).toBeInTheDocument();
    expect(screen.getByTestId('card-1')).toBeInTheDocument();
    expect(screen.getByTestId('card-2')).toBeInTheDocument();
  });

  it('Card 1 displays Warrior emoji and description', () => {
    render(<VisionWarriorPoet />);
    expect(screen.getByTestId('emoji-0')).toHaveTextContent('🛡️');
    expect(screen.getByTestId('heading-0')).toHaveTextContent('Warrior');
    expect(screen.getByTestId('description-0')).toHaveTextContent(/Physically resilient/i);
  });

  it('Card 2 displays Poet emoji and description', () => {
    render(<VisionWarriorPoet />);
    expect(screen.getByTestId('emoji-1')).toHaveTextContent('🎨');
    expect(screen.getByTestId('heading-1')).toHaveTextContent('Poet');
    expect(screen.getByTestId('description-1')).toHaveTextContent(/Rooted in poetic knowledge/i);
  });

  it('Card 3 displays Catholic emoji and description', () => {
    render(<VisionWarriorPoet />);
    expect(screen.getByTestId('emoji-2')).toHaveTextContent('✝️');
    expect(screen.getByTestId('heading-2')).toHaveTextContent('Catholic');
    expect(screen.getByTestId('description-2')).toHaveTextContent(/Formed in liturgical wisdom/i);
  });

  it('renders closing paragraph', () => {
    render(<VisionWarriorPoet />);
    expect(screen.getByText(/The warrior poet is not a romantic ideal/i)).toBeInTheDocument();
    expect(screen.getByText(/men who can restore Christendom/i)).toBeInTheDocument();
  });

  it('CardGrid has vision variant styling', () => {
    render(<VisionWarriorPoet />);
    const cardGrid = screen.getByTestId('mock-card-grid');
    expect(cardGrid).toHaveAttribute('data-variant', 'vision');
  });

  it('applies custom className when provided', () => {
    const { container } = render(<VisionWarriorPoet className="custom-class" />);
    const mainDiv = container.firstChild as HTMLElement;
    expect(mainDiv.className).toContain('custom-class');
  });

  it('matches snapshot', () => {
    const { container } = render(<VisionWarriorPoet />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
