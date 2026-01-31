import React from 'react';
import { render, screen } from '@testing-library/react';
import { VisionCallToAction } from '../VisionCallToAction';

// Mock CardGrid component
jest.mock('@/components/content/CardGrid', () => ({
  __esModule: true,
  default: ({ variant, columns, cards }: any) => (
    <div data-testid="mock-card-grid" data-variant={variant} data-columns={columns}>
      {cards?.map((card: any, idx: number) => (
        <div key={idx} data-testid={`card-${idx}`}>
          <span data-testid={`emoji-${idx}`}>{card.emoji}</span>
          <h4 data-testid={`heading-${idx}`}>{card.heading}</h4>
          <p data-testid={`description-${idx}`}>{card.description}</p>
          {card.action && <div data-testid={`action-${idx}`}>{card.action}</div>}
        </div>
      ))}
    </div>
  ),
}));

// Mock CTAButton component
jest.mock('@/components/ui/CTAButton', () => ({
  __esModule: true,
  default: ({ href, variant, size, children }: any) => (
    <a href={href} data-testid="mock-cta-button" data-variant={variant} data-size={size}>
      {children}
    </a>
  ),
}));

describe('VisionCallToAction', () => {
  it('renders without crashing', () => {
    render(<VisionCallToAction />);
    expect(screen.getByText('What You Can Do')).toBeInTheDocument();
  });

  it('renders the heading with correct styling', () => {
    render(<VisionCallToAction />);
    const heading = screen.getByRole('heading', { name: /What You Can Do/i });
    expect(heading.className).toContain('font-playfair');
    expect(heading.className).toContain('text-4xl');
    expect(heading.className).toContain('text-forest');
  });

  it('renders CardGrid with 3 cards', () => {
    render(<VisionCallToAction />);
    const cardGrid = screen.getByTestId('mock-card-grid');
    expect(cardGrid).toBeInTheDocument();
    expect(screen.getByTestId('card-0')).toBeInTheDocument();
    expect(screen.getByTestId('card-1')).toBeInTheDocument();
    expect(screen.getByTestId('card-2')).toBeInTheDocument();
  });

  it('Card 1: Found a School with primary CTA to /engage', () => {
    render(<VisionCallToAction />);
    expect(screen.getByTestId('emoji-0')).toHaveTextContent('🏫');
    expect(screen.getByTestId('heading-0')).toHaveTextContent('Found a School');
    expect(screen.getByTestId('description-0')).toHaveTextContent(/Gather families in your area/i);
    
    const ctaButtons = screen.getAllByTestId('mock-cta-button');
    expect(ctaButtons[0]).toHaveAttribute('href', '/engage');
    expect(ctaButtons[0]).toHaveAttribute('data-variant', 'primary');
  });

  it('Card 2: Join a School with secondary CTA to /schools', () => {
    render(<VisionCallToAction />);
    expect(screen.getByTestId('emoji-1')).toHaveTextContent('🤝');
    expect(screen.getByTestId('heading-1')).toHaveTextContent('Join a School');
    expect(screen.getByTestId('description-1')).toHaveTextContent(/Explore the network of schools/i);
    
    const ctaButtons = screen.getAllByTestId('mock-cta-button');
    expect(ctaButtons[1]).toHaveAttribute('href', '/schools');
    expect(ctaButtons[1]).toHaveAttribute('data-variant', 'secondary');
  });

  it('Card 3: Adapt at Home with outline CTA to /texts', () => {
    render(<VisionCallToAction />);
    expect(screen.getByTestId('emoji-2')).toHaveTextContent('🏡');
    expect(screen.getByTestId('heading-2')).toHaveTextContent('Adapt at Home');
    expect(screen.getByTestId('description-2')).toHaveTextContent(/Homeschool families/i);
    
    const ctaButtons = screen.getAllByTestId('mock-cta-button');
    expect(ctaButtons[2]).toHaveAttribute('href', '/texts');
    expect(ctaButtons[2]).toHaveAttribute('data-variant', 'outline');
  });

  it('has border-top styling (border-t-4 border-gold)', () => {
    const { container } = render(<VisionCallToAction />);
    const mainDiv = container.firstChild as HTMLElement;
    expect(mainDiv.className).toContain('border-t-4');
    expect(mainDiv.className).toContain('border-gold');
  });

  it('CardGrid has vision variant styling', () => {
    render(<VisionCallToAction />);
    const cardGrid = screen.getByTestId('mock-card-grid');
    expect(cardGrid).toHaveAttribute('data-variant', 'vision');
  });

  it('all CTAButtons render with correct size', () => {
    render(<VisionCallToAction />);
    const ctaButtons = screen.getAllByTestId('mock-cta-button');
    expect(ctaButtons).toHaveLength(3);
    ctaButtons.forEach(button => {
      expect(button).toHaveAttribute('data-size', 'md');
    });
  });

  it('applies custom className when provided', () => {
    const { container } = render(<VisionCallToAction className="custom-class" />);
    const mainDiv = container.firstChild as HTMLElement;
    expect(mainDiv.className).toContain('custom-class');
  });

  it('has proper padding and spacing', () => {
    const { container } = render(<VisionCallToAction />);
    const mainDiv = container.firstChild as HTMLElement;
    expect(mainDiv.className).toContain('pt-16');
    expect(mainDiv.className).toContain('space-y-12');
  });

  it('matches snapshot', () => {
    const { container } = render(<VisionCallToAction />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
