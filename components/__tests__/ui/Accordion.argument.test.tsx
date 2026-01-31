import { render, screen, fireEvent } from '@testing-library/react';
import { Accordion, AccordionItem } from '../../ui/Accordion';

describe('Accordion Component - Argument Variant Enhancement', () => {
  describe('Default Variant (Existing Behavior)', () => {
    it('renders default variant without argument styling', () => {
      const { container } = render(
        <Accordion type="single">
          <AccordionItem value="item1" title="Default Item">
            <p>Content</p>
          </AccordionItem>
        </Accordion>
      );

      // The AccordionPrimitive.Item renders as a div with data-state
      const item = container.querySelector('[data-state]');
      expect(item).not.toHaveClass('argument-accordion-item');
    });

    it('does not show checkmark in default variant', () => {
      const { container } = render(
        <Accordion type="single">
          <AccordionItem value="item1" title="Default Item">
            <p>Content</p>
          </AccordionItem>
        </Accordion>
      );

      const trigger = screen.getByRole('button');
      fireEvent.click(trigger);

      const checkmark = container.querySelector('[aria-hidden="true"]');
      // Should only have the chevron, not the checkmark
      expect(checkmark?.textContent).not.toContain('✓');
    });

    it('maintains border-b class for default variant', () => {
      const { container } = render(
        <Accordion type="single">
          <AccordionItem value="item1" title="Default Item">
            <p>Content</p>
          </AccordionItem>
        </Accordion>
      );

      const item = container.querySelector('[data-state]');
      expect(item).toHaveClass('border-b');
    });

    it('applies prose styling to default variant content', () => {
      const { container } = render(
        <Accordion type="single">
          <AccordionItem value="item1" title="Default Item">
            <p>Content</p>
          </AccordionItem>
        </Accordion>
      );

      const trigger = screen.getByRole('button');
      fireEvent.click(trigger);

      const content = container.querySelector('.prose');
      expect(content).toBeInTheDocument();
    });
  });

  describe('Argument Variant (New Feature)', () => {
    it('applies argument-accordion-item class when variant is argument', () => {
      const { container } = render(
        <Accordion type="single">
          <AccordionItem value="item1" title="Argument Item" variant="argument">
            <p>Content</p>
          </AccordionItem>
        </Accordion>
      );

      const item = container.querySelector('[data-state]');
      expect(item).toHaveClass('argument-accordion-item');
    });

    it('shows checkmark when argument variant is expanded', () => {
      const { container } = render(
        <Accordion type="single" defaultValue="item1">
          <AccordionItem value="item1" title="Argument Item" variant="argument">
            <p>Content</p>
          </AccordionItem>
        </Accordion>
      );

      const checkmarks = Array.from(container.querySelectorAll('[aria-hidden="true"]')).filter(
        (el) => el.textContent === '✓'
      );
      expect(checkmarks.length).toBe(1);
    });

    it('checkmark is hidden when collapsed', () => {
      const { container } = render(
        <Accordion type="single">
          <AccordionItem value="item1" title="Argument Item" variant="argument">
            <p>Content</p>
          </AccordionItem>
        </Accordion>
      );

      const checkmark = Array.from(container.querySelectorAll('span')).find(
        (el) => el.textContent === '✓'
      );
      expect(checkmark).toHaveClass('opacity-0');
    });

    it('checkmark becomes visible when expanded', () => {
      const { container } = render(
        <Accordion type="single">
          <AccordionItem value="item1" title="Argument Item" variant="argument">
            <p>Content</p>
          </AccordionItem>
        </Accordion>
      );

      const trigger = screen.getByRole('button');
      fireEvent.click(trigger);

      const checkmark = Array.from(container.querySelectorAll('span')).find(
        (el) => el.textContent === '✓'
      );
      expect(checkmark).toHaveClass('group-data-[state=open]:opacity-100');
    });

    it('applies green tint to trigger when expanded', () => {
      render(
        <Accordion type="single">
          <AccordionItem value="item1" title="Argument Item" variant="argument">
            <p>Content</p>
          </AccordionItem>
        </Accordion>
      );

      const trigger = screen.getByRole('button');
      expect(trigger).toHaveClass('data-[state=open]:bg-green-50/30');
    });

    it('applies green tint to content when expanded', () => {
      const { container } = render(
        <Accordion type="single">
          <AccordionItem value="item1" title="Argument Item" variant="argument">
            <p>Content</p>
          </AccordionItem>
        </Accordion>
      );

      // The AccordionContent has the conditional class
      const trigger = screen.getByRole('button');
      fireEvent.click(trigger);
      
      // Check if content area exists with data-state=open
      const content = container.querySelector('[data-state="open"]')?.querySelector('div > div');
      expect(content).toHaveClass('data-[state=open]:bg-green-50/10');
    });

    it('does not apply prose styling to argument variant', () => {
      const { container } = render(
        <Accordion type="single">
          <AccordionItem value="item1" title="Argument Item" variant="argument">
            <p>Content</p>
          </AccordionItem>
        </Accordion>
      );

      const trigger = screen.getByRole('button');
      fireEvent.click(trigger);

      const content = container.querySelector('.prose');
      expect(content).not.toBeInTheDocument();
    });

    it('uses larger text sizing for argument variant', () => {
      render(
        <Accordion type="single">
          <AccordionItem value="item1" title="Argument Item" variant="argument">
            <p>Content</p>
          </AccordionItem>
        </Accordion>
      );

      const trigger = screen.getByRole('button');
      expect(trigger).toHaveClass('text-xl');
      expect(trigger).toHaveClass('md:text-2xl');
    });

    it('has rounded borders for argument variant', () => {
      const { container } = render(
        <Accordion type="single">
          <AccordionItem value="item1" title="Argument Item" variant="argument">
            <p>Content</p>
          </AccordionItem>
        </Accordion>
      );

      const item = container.querySelector('[data-state]');
      expect(item).toHaveClass('rounded-lg');
      expect(item).toHaveClass('overflow-hidden');
    });
  });

  describe('Visual Transitions', () => {
    it('has transition duration on checkmark', () => {
      const { container } = render(
        <Accordion type="single">
          <AccordionItem value="item1" title="Argument Item" variant="argument">
            <p>Content</p>
          </AccordionItem>
        </Accordion>
      );

      const checkmark = Array.from(container.querySelectorAll('span')).find(
        (el) => el.textContent === '✓'
      );
      expect(checkmark).toHaveClass('transition-opacity');
      expect(checkmark).toHaveClass('duration-300');
    });

    it('has transition on trigger', () => {
      render(
        <Accordion type="single">
          <AccordionItem value="item1" title="Argument Item" variant="argument">
            <p>Content</p>
          </AccordionItem>
        </Accordion>
      );

      const trigger = screen.getByRole('button');
      expect(trigger).toHaveClass('transition-all');
      expect(trigger).toHaveClass('duration-200');
    });

    it('chevron rotates on expand', () => {
      const { container } = render(
        <Accordion type="single">
          <AccordionItem value="item1" title="Argument Item" variant="argument">
            <p>Content</p>
          </AccordionItem>
        </Accordion>
      );

      const svg = container.querySelector('svg');
      expect(svg).toHaveClass('group-data-[state=open]:rotate-180');
    });

    it('has animation classes on content', () => {
      const { container } = render(
        <Accordion type="single">
          <AccordionItem value="item1" title="Argument Item" variant="argument">
            <p>Content</p>
          </AccordionItem>
        </Accordion>
      );

      // AccordionContent is the second child div after the header
      const item = container.querySelector('[data-state]');
      const content = item?.children[1]; // Header is 0, Content is 1
      expect(content).toHaveClass('data-[state=closed]:animate-accordion-up');
      expect(content).toHaveClass('data-[state=open]:animate-accordion-down');
    });
  });

  describe('Accessibility', () => {
    it('checkmark has aria-hidden attribute', () => {
      const { container } = render(
        <Accordion type="single">
          <AccordionItem value="item1" title="Argument Item" variant="argument">
            <p>Content</p>
          </AccordionItem>
        </Accordion>
      );

      const checkmark = Array.from(container.querySelectorAll('span')).find(
        (el) => el.textContent === '✓'
      );
      expect(checkmark).toHaveAttribute('aria-hidden', 'true');
    });

    it('chevron has aria-hidden attribute', () => {
      const { container } = render(
        <Accordion type="single">
          <AccordionItem value="item1" title="Argument Item" variant="argument">
            <p>Content</p>
          </AccordionItem>
        </Accordion>
      );

      const svg = container.querySelector('svg');
      expect(svg).toHaveAttribute('aria-hidden', 'true');
    });

    it('trigger is keyboard accessible', () => {
      render(
        <Accordion type="single">
          <AccordionItem value="item1" title="Argument Item" variant="argument">
            <p>Content</p>
          </AccordionItem>
        </Accordion>
      );

      const trigger = screen.getByRole('button');
      expect(trigger.tagName).toBe('BUTTON');
    });

    it('has focus-visible ring', () => {
      render(
        <Accordion type="single">
          <AccordionItem value="item1" title="Argument Item" variant="argument">
            <p>Content</p>
          </AccordionItem>
        </Accordion>
      );

      const trigger = screen.getByRole('button');
      expect(trigger).toHaveClass('focus-visible:ring-2');
      expect(trigger).toHaveClass('focus-visible:ring-gold');
    });

    it('maintains accessible name from title', () => {
      render(
        <Accordion type="single">
          <AccordionItem value="item1" title="Test Argument Title" variant="argument">
            <p>Content</p>
          </AccordionItem>
        </Accordion>
      );

      const trigger = screen.getByRole('button', { name: /Test Argument Title/i });
      expect(trigger).toBeInTheDocument();
    });
  });

  describe('Mixed Variants', () => {
    it('can use both variants in same accordion', () => {
      const { getAllByRole } = render(
        <Accordion type="single">
          <AccordionItem value="item1" title="Default Item">
            <p>Default content</p>
          </AccordionItem>
          <AccordionItem value="item2" title="Argument Item" variant="argument">
            <p>Argument content</p>
          </AccordionItem>
        </Accordion>
      );

      // Get buttons, navigate up to item: button -> header -> item
      const buttons = getAllByRole('button');
      const item1 = buttons[0].parentElement?.parentElement;
      const item2 = buttons[1].parentElement?.parentElement;
      
      expect(item1).not.toHaveClass('argument-accordion-item');
      expect(item2).toHaveClass('argument-accordion-item');
    });

    it('default variant not affected by argument variant in same accordion', () => {
      const { container } = render(
        <Accordion type="single" defaultValue="item1">
          <AccordionItem value="item1" title="Default Item">
            <p>Default content</p>
          </AccordionItem>
          <AccordionItem value="item2" title="Argument Item" variant="argument">
            <p>Argument content</p>
          </AccordionItem>
        </Accordion>
      );

      // Get the AccordionItem elements
      const defaultItem = container.querySelectorAll('[data-state]')[0];
      expect(defaultItem).not.toHaveClass('argument-accordion-item');
      expect(defaultItem).toHaveClass('border-b');
    });
  });

  describe('Custom Styling', () => {
    it('applies custom className to AccordionItem', () => {
      const { container } = render(
        <Accordion type="single">
          <AccordionItem
            value="item1"
            title="Custom Item"
            variant="argument"
            className="custom-class"
          >
            <p>Content</p>
          </AccordionItem>
        </Accordion>
      );

      const item = container.querySelector('[data-state]');
      expect(item).toHaveClass('custom-class');
    });

    it('preserves base classes with custom className', () => {
      const { container } = render(
        <Accordion type="single">
          <AccordionItem
            value="item1"
            title="Custom Item"
            variant="argument"
            className="my-custom"
          >
            <p>Content</p>
          </AccordionItem>
        </Accordion>
      );

      const item = container.querySelector('[data-state]');
      expect(item).toHaveClass('argument-accordion-item');
      expect(item).toHaveClass('rounded-lg');
      expect(item).toHaveClass('my-custom');
    });
  });

  describe('Interaction', () => {
    it('expands when clicked', () => {
      render(
        <Accordion type="single">
          <AccordionItem value="item1" title="Argument Item" variant="argument">
            <p>Content</p>
          </AccordionItem>
        </Accordion>
      );

      const trigger = screen.getByRole('button');
      fireEvent.click(trigger);

      expect(trigger).toHaveAttribute('data-state', 'open');
    });

    it('collapses when clicked again', () => {
      render(
        <Accordion type="single">
          <AccordionItem value="item1" title="Argument Item" variant="argument">
            <p>Content</p>
          </AccordionItem>
        </Accordion>
      );

      const trigger = screen.getByRole('button');

      fireEvent.click(trigger);
      expect(trigger).toHaveAttribute('data-state', 'open');

      fireEvent.click(trigger);
      expect(trigger).toHaveAttribute('data-state', 'closed');
    });

    it('displays content when expanded', () => {
      render(
        <Accordion type="single">
          <AccordionItem value="item1" title="Argument Item" variant="argument">
            <p>Test content</p>
          </AccordionItem>
        </Accordion>
      );

      const trigger = screen.getByRole('button');
      fireEvent.click(trigger);

      expect(screen.getByText('Test content')).toBeVisible();
    });
  });
});
