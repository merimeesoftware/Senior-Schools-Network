import React from 'react';
import { render, screen } from '@testing-library/react';
import { VisionSyllogismRecap } from '../VisionSyllogismRecap';

describe('VisionSyllogismRecap', () => {
  it('renders without crashing', () => {
    render(<VisionSyllogismRecap />);
    expect(screen.getByText('The Argument Complete')).toBeInTheDocument();
  });

  it('renders the heading with correct styling', () => {
    render(<VisionSyllogismRecap />);
    const heading = screen.getByRole('heading', { name: /The Argument Complete/i });
    expect(heading.className).toContain('font-playfair');
    expect(heading.className).toContain('text-3xl');
    expect(heading.className).toContain('text-forest');
  });

  it('displays I. The Crisis with red styling', () => {
    render(<VisionSyllogismRecap />);
    expect(screen.getByText('I.')).toBeInTheDocument();
    expect(screen.getByText('The Crisis:')).toBeInTheDocument();
    expect(screen.getByText(/Modern education has failed our sons/i)).toBeInTheDocument();
  });

  it('displays II. The Restoration with green styling', () => {
    render(<VisionSyllogismRecap />);
    expect(screen.getByText('II.')).toBeInTheDocument();
    expect(screen.getByText('The Restoration:')).toBeInTheDocument();
    expect(screen.getByText(/Poetic knowledge—cultivated through the four stages/i)).toBeInTheDocument();
  });

  it('displays ∴ The Vision with gold styling', () => {
    render(<VisionSyllogismRecap />);
    expect(screen.getByText('∴')).toBeInTheDocument();
    expect(screen.getByText('The Vision:')).toBeInTheDocument();
    expect(screen.getByText(/Boys formed in the gymnasium/i)).toBeInTheDocument();
  });

  it('has parchment-light background and gold border', () => {
    const { container } = render(<VisionSyllogismRecap />);
    const mainDiv = container.firstChild as HTMLElement;
    expect(mainDiv.className).toContain('bg-parchment-light');
    expect(mainDiv.className).toContain('border-gold');
  });

  it('applies custom className when provided', () => {
    const { container } = render(<VisionSyllogismRecap className="custom-class" />);
    const mainDiv = container.firstChild as HTMLElement;
    expect(mainDiv.className).toContain('custom-class');
  });

  it('has proper semantic structure', () => {
    render(<VisionSyllogismRecap />);
    expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument();
  });

  it('displays all three parts in correct order', () => {
    const { container } = render(<VisionSyllogismRecap />);
    const parts = container.querySelectorAll('.flex.items-start.gap-4');
    expect(parts).toHaveLength(3);
  });

  it('matches snapshot', () => {
    const { container } = render(<VisionSyllogismRecap />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
