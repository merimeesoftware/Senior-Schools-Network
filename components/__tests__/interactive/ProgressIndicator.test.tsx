import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ProgressIndicator from '../../interactive/ProgressIndicator';

// Mock IntersectionObserver
const mockIntersectionObserver = jest.fn();
mockIntersectionObserver.mockReturnValue({
  observe: jest.fn(),
  disconnect: jest.fn(),
  unobserve: jest.fn(),
});
window.IntersectionObserver = mockIntersectionObserver as any;

// Mock scrollIntoView
Element.prototype.scrollIntoView = jest.fn();

const mockSections = [
  { id: 'major-premise', label: 'Modern Education Fails', number: 'I' },
  { id: 'minor-premise', label: 'Poetic Mode Restores', number: 'II' },
  { id: 'conclusion', label: 'Embrace the Path', number: '∴' },
];

describe('ProgressIndicator Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Basic Rendering', () => {
    it('renders navigation with aria-label', () => {
      render(<ProgressIndicator sections={mockSections} />);
      const nav = screen.getByRole('navigation', { name: /argument progress/i });
      expect(nav).toBeInTheDocument();
    });

    it('renders all section buttons', () => {
      render(<ProgressIndicator sections={mockSections} />);
      const buttons = screen.getAllByRole('button');
      expect(buttons).toHaveLength(3);
    });

    it('renders section numbers', () => {
      render(<ProgressIndicator sections={mockSections} />);
      // Numbers appear twice (mobile and desktop), so use getAllByText
      expect(screen.getAllByText('I').length).toBeGreaterThan(0);
      expect(screen.getAllByText('II').length).toBeGreaterThan(0);
      expect(screen.getAllByText('∴').length).toBeGreaterThan(0);
    });

    it('renders section labels on desktop', () => {
      render(<ProgressIndicator sections={mockSections} />);
      expect(screen.getByText(/Modern Education Fails/i)).toBeInTheDocument();
      expect(screen.getByText(/Poetic Mode Restores/i)).toBeInTheDocument();
      expect(screen.getByText(/Embrace the Path/i)).toBeInTheDocument();
    });
  });

  describe('Sticky Top Position', () => {
    it('renders sticky top by default', () => {
      const { container } = render(<ProgressIndicator sections={mockSections} />);
      const nav = container.querySelector('nav');
      expect(nav).toHaveClass('sticky');
      expect(nav).toHaveClass('top-20');
    });

    it('applies parchment background with backdrop blur', () => {
      const { container } = render(<ProgressIndicator sections={mockSections} />);
      const nav = container.querySelector('nav');
      expect(nav).toHaveClass('bg-parchment/95');
      expect(nav).toHaveClass('backdrop-blur-sm');
    });

    it('has appropriate z-index', () => {
      const { container } = render(<ProgressIndicator sections={mockSections} />);
      const nav = container.querySelector('nav');
      expect(nav).toHaveClass('z-30');
    });

    it('has bottom border', () => {
      const { container } = render(<ProgressIndicator sections={mockSections} />);
      const nav = container.querySelector('nav');
      expect(nav).toHaveClass('border-b');
      expect(nav).toHaveClass('border-forest/20');
    });
  });

  describe('Sticky Side Position', () => {
    it('renders fixed sidebar when position is sticky-side', () => {
      const { container } = render(
        <ProgressIndicator sections={mockSections} position="sticky-side" />
      );
      const nav = container.querySelector('nav');
      expect(nav).toHaveClass('fixed');
      expect(nav).toHaveClass('left-8');
    });

    it('hides sidebar on mobile', () => {
      const { container } = render(
        <ProgressIndicator sections={mockSections} position="sticky-side" />
      );
      const nav = container.querySelector('nav');
      expect(nav).toHaveClass('hidden');
      expect(nav).toHaveClass('lg:block');
    });

    it('renders vertical layout with labels', () => {
      render(<ProgressIndicator sections={mockSections} position="sticky-side" />);
      
      const buttons = screen.getAllByRole('button');
      buttons.forEach((button) => {
        expect(button).toHaveClass('flex');
        expect(button).toHaveClass('items-center');
        expect(button).toHaveClass('gap-3');
      });
    });
  });

  describe('Active Section Tracking', () => {
    it('marks first section as active by default', () => {
      render(<ProgressIndicator sections={mockSections} />);
      const buttons = screen.getAllByRole('button');
      expect(buttons[0]).toHaveAttribute('aria-current', 'location');
    });

    it('applies active styling to current section', () => {
      render(<ProgressIndicator sections={mockSections} />);
      const buttons = screen.getAllByRole('button');
      expect(buttons[0]).toHaveClass('text-forest');
      expect(buttons[0]).toHaveClass('font-semibold');
      expect(buttons[0]).toHaveClass('border-gold');
    });

    it('applies inactive styling to other sections', () => {
      render(<ProgressIndicator sections={mockSections} />);
      const buttons = screen.getAllByRole('button');
      expect(buttons[1]).toHaveClass('text-charcoal/60');
      expect(buttons[1]).not.toHaveAttribute('aria-current');
    });

    it('sets up IntersectionObserver on mount', () => {
      render(<ProgressIndicator sections={mockSections} />);
      expect(mockIntersectionObserver).toHaveBeenCalledWith(
        expect.any(Function),
        expect.objectContaining({
          threshold: [0, 0.3, 0.6, 1],
          rootMargin: '-100px 0px -50% 0px',
        })
      );
    });
  });

  describe('Navigation Interaction', () => {
    it('scrolls to section when button clicked', () => {
      // Create mock elements
      const mockElement = document.createElement('section');
      mockElement.id = 'minor-premise';
      document.body.appendChild(mockElement);

      render(<ProgressIndicator sections={mockSections} />);
      
      const button = screen.getByText(/Poetic Mode Restores/i).closest('button');
      fireEvent.click(button!);

      expect(mockElement.scrollIntoView).toHaveBeenCalledWith({
        behavior: 'smooth',
        block: 'start',
      });

      document.body.removeChild(mockElement);
    });

    it('handles missing section gracefully', () => {
      render(<ProgressIndicator sections={mockSections} />);
      
      const button = screen.getAllByRole('button')[0];
      // Should not throw even if section doesn't exist
      expect(() => fireEvent.click(button)).not.toThrow();
    });
  });

  describe('Responsive Design', () => {
    it('shows number only on mobile', () => {
      const { container } = render(<ProgressIndicator sections={mockSections} />);
      const mobileSpan = container.querySelector('.md\\:hidden');
      expect(mobileSpan).toBeInTheDocument();
      expect(mobileSpan).toHaveTextContent('I');
    });

    it('shows number and label on desktop', () => {
      const { container } = render(<ProgressIndicator sections={mockSections} />);
      const desktopSpan = container.querySelector('.hidden.md\\:inline');
      expect(desktopSpan).toBeInTheDocument();
    });

    it('has touch-friendly button sizes', () => {
      render(<ProgressIndicator sections={mockSections} />);
      const buttons = screen.getAllByRole('button');
      buttons.forEach((button) => {
        expect(button.className).toMatch(/px-4/);
      });
    });
  });

  describe('Accessibility', () => {
    it('has proper navigation landmark', () => {
      render(<ProgressIndicator sections={mockSections} />);
      const nav = screen.getByRole('navigation');
      expect(nav).toHaveAttribute('aria-label', 'Argument progress');
    });

    it('uses aria-current for active section', () => {
      render(<ProgressIndicator sections={mockSections} />);
      const buttons = screen.getAllByRole('button');
      expect(buttons[0]).toHaveAttribute('aria-current', 'location');
      expect(buttons[1]).not.toHaveAttribute('aria-current');
    });

    it('all buttons are keyboard accessible', () => {
      render(<ProgressIndicator sections={mockSections} />);
      const buttons = screen.getAllByRole('button');
      buttons.forEach((button) => {
        expect(button.tagName).toBe('BUTTON');
      });
    });

    it('applies hover states for interactive feedback', () => {
      render(<ProgressIndicator sections={mockSections} />);
      const buttons = screen.getAllByRole('button');
      expect(buttons[1]).toHaveClass('hover:text-forest');
    });
  });

  describe('Cleanup', () => {
    it('disconnects observer on unmount', () => {
      const mockDisconnect = jest.fn();
      mockIntersectionObserver.mockReturnValue({
        observe: jest.fn(),
        disconnect: mockDisconnect,
        unobserve: jest.fn(),
      });

      const { unmount } = render(<ProgressIndicator sections={mockSections} />);
      unmount();

      expect(mockDisconnect).toHaveBeenCalled();
    });
  });

  describe('Custom Styling', () => {
    it('applies custom className', () => {
      const { container } = render(
        <ProgressIndicator sections={mockSections} className="custom-class" />
      );
      const nav = container.querySelector('nav');
      expect(nav).toHaveClass('custom-class');
    });

    it('sidebar applies custom className', () => {
      const { container } = render(
        <ProgressIndicator sections={mockSections} position="sticky-side" className="sidebar-custom" />
      );
      const nav = container.querySelector('nav');
      expect(nav).toHaveClass('sidebar-custom');
    });
  });
});
