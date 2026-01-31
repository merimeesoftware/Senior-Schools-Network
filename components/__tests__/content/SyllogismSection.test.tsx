import { render, screen } from '@testing-library/react';
import SyllogismSection from '../../content/SyllogismSection';

describe('SyllogismSection', () => {
  describe('Accessibility', () => {
    it('renders section element with semantic structure', () => {
      const { container } = render(
        <SyllogismSection type="major" title="Test Title">
          <p>Content</p>
        </SyllogismSection>
      );
      
      const section = container.querySelector('section');
      expect(section).toBeInTheDocument();
    });

    it('has aria-labelledby pointing to title', () => {
      const { container } = render(
        <SyllogismSection type="major" title="Test Title" id="test-section">
          <p>Content</p>
        </SyllogismSection>
      );
      
      const section = container.querySelector('section');
      expect(section).toHaveAttribute('aria-labelledby', 'test-section-title');
    });

    it('title has proper heading level (h2)', () => {
      render(
        <SyllogismSection type="major" title="Test Title">
          <p>Content</p>
        </SyllogismSection>
      );
      
      const heading = screen.getByRole('heading', { level: 2, name: 'Test Title' });
      expect(heading).toBeInTheDocument();
    });

    it('subtitle has proper heading level (h3)', () => {
      render(
        <SyllogismSection type="major" title="Test Title" subtitle="Test Subtitle">
          <p>Content</p>
        </SyllogismSection>
      );
      
      const subtitle = screen.getByRole('heading', { level: 3, name: 'Test Subtitle' });
      expect(subtitle).toBeInTheDocument();
    });

    it('decorative numeral has aria-hidden="true"', () => {
      const { container } = render(
        <SyllogismSection type="major" title="Test Title">
          <p>Content</p>
        </SyllogismSection>
      );
      
      const numeral = container.querySelector('[aria-hidden="true"]');
      expect(numeral).toBeInTheDocument();
      expect(numeral).toHaveTextContent('I');
    });
  });

  describe('Visual Design', () => {
    it('renders major premise with correct border color', () => {
      const { container } = render(
        <SyllogismSection type="major" title="Major Premise">
          <p>Content</p>
        </SyllogismSection>
      );
      
      const border = container.querySelector('.border-poetic\\/30');
      expect(border).toBeInTheDocument();
    });

    it('renders minor premise with correct border color', () => {
      const { container } = render(
        <SyllogismSection type="minor" title="Minor Premise">
          <p>Content</p>
        </SyllogismSection>
      );
      
      const border = container.querySelector('.border-forest\\/30');
      expect(border).toBeInTheDocument();
    });

    it('renders conclusion with correct border color', () => {
      const { container } = render(
        <SyllogismSection type="conclusion" title="Conclusion">
          <p>Content</p>
        </SyllogismSection>
      );
      
      const border = container.querySelector('.border-gold\\/60');
      expect(border).toBeInTheDocument();
    });

    it('displays correct default numeral for major premise', () => {
      const { container } = render(
        <SyllogismSection type="major" title="Test">
          <p>Content</p>
        </SyllogismSection>
      );
      
      const numeral = container.querySelector('[aria-hidden="true"]');
      expect(numeral).toHaveTextContent('I');
    });

    it('displays correct default numeral for minor premise', () => {
      const { container } = render(
        <SyllogismSection type="minor" title="Test">
          <p>Content</p>
        </SyllogismSection>
      );
      
      const numeral = container.querySelector('[aria-hidden="true"]');
      expect(numeral).toHaveTextContent('II');
    });

    it('displays correct default numeral for conclusion', () => {
      const { container } = render(
        <SyllogismSection type="conclusion" title="Test">
          <p>Content</p>
        </SyllogismSection>
      );
      
      const numeral = container.querySelector('[aria-hidden="true"]');
      expect(numeral).toHaveTextContent('∴');
    });

    it('accepts custom numeral', () => {
      const { container } = render(
        <SyllogismSection type="major" title="Test" number="III">
          <p>Content</p>
        </SyllogismSection>
      );
      
      const numeral = container.querySelector('[aria-hidden="true"]');
      expect(numeral).toHaveTextContent('III');
    });

    it('accepts custom border color', () => {
      const { container } = render(
        <SyllogismSection type="major" title="Test" borderColor="border-red-500">
          <p>Content</p>
        </SyllogismSection>
      );
      
      const border = container.querySelector('.border-red-500');
      expect(border).toBeInTheDocument();
    });

    it('accepts custom background color', () => {
      const { container } = render(
        <SyllogismSection type="major" title="Test" bgColor="bg-gradient-to-b from-spiritual/10 to-spiritual/20">
          <p>Content</p>
        </SyllogismSection>
      );
      
      const section = container.querySelector('section');
      expect(section).toHaveClass('from-spiritual/10');
    });
  });

  describe('Content Rendering', () => {
    it('renders children content', () => {
      render(
        <SyllogismSection type="major" title="Test">
          <p>Test content paragraph</p>
          <div>Test content div</div>
        </SyllogismSection>
      );
      
      expect(screen.getByText('Test content paragraph')).toBeInTheDocument();
      expect(screen.getByText('Test content div')).toBeInTheDocument();
    });

    it('renders without subtitle when not provided', () => {
      render(
        <SyllogismSection type="major" title="Test Title">
          <p>Content</p>
        </SyllogismSection>
      );
      
      const headings = screen.getAllByRole('heading');
      expect(headings).toHaveLength(1); // Only h2 title, no h3 subtitle
    });

    it('accepts custom className', () => {
      const { container } = render(
        <SyllogismSection type="major" title="Test" className="custom-class">
          <p>Content</p>
        </SyllogismSection>
      );
      
      const section = container.querySelector('section');
      expect(section).toHaveClass('custom-class');
    });

    it('accepts custom id', () => {
      const { container } = render(
        <SyllogismSection type="major" title="Test" id="custom-id">
          <p>Content</p>
        </SyllogismSection>
      );
      
      const section = container.querySelector('section');
      expect(section).toHaveAttribute('id', 'custom-id');
    });
  });

  describe('Responsive Behavior', () => {
    it('numeral is hidden on mobile with hidden lg:block classes', () => {
      const { container } = render(
        <SyllogismSection type="major" title="Test">
          <p>Content</p>
        </SyllogismSection>
      );
      
      const numeral = container.querySelector('[aria-hidden="true"]');
      expect(numeral).toHaveClass('hidden');
      expect(numeral).toHaveClass('lg:block');
    });

    it('applies responsive padding to content', () => {
      const { container } = render(
        <SyllogismSection type="major" title="Test">
          <p>Content</p>
        </SyllogismSection>
      );
      
      const contentDiv = container.querySelector('.border-l-8');
      expect(contentDiv).toHaveClass('pl-8');
      expect(contentDiv).toHaveClass('md:pl-12');
    });
  });
});
