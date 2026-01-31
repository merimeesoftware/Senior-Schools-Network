import React from 'react';
import { render, screen } from '@testing-library/react';
import { Accordion, AccordionItem } from '../../ui/Accordion';

describe('Accordion', () => {
  describe('Rendering', () => {
    it('should render accordion items', () => {
      render(
        <Accordion type="single">
          <AccordionItem value="item-1" title="Test Title">
            Test Content
          </AccordionItem>
        </Accordion>
      );
      
      expect(screen.getByText('Test Title')).toBeInTheDocument();
    });

    it('should render multiple accordion items', () => {
      render(
        <Accordion type="multiple">
          <AccordionItem value="item-1" title="First Item">
            First Content
          </AccordionItem>
          <AccordionItem value="item-2" title="Second Item">
            Second Content
          </AccordionItem>
        </Accordion>
      );
      
      expect(screen.getByText('First Item')).toBeInTheDocument();
      expect(screen.getByText('Second Item')).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('should use button elements for triggers', () => {
      render(
        <Accordion type="single">
          <AccordionItem value="item-1" title="Test Title">
            Content
          </AccordionItem>
        </Accordion>
      );
      
      const trigger = screen.getByRole('button', { name: /test title/i });
      expect(trigger).toBeInTheDocument();
    });

    it('should have keyboard focus styles', () => {
      const { container } = render(
        <Accordion type="single">
          <AccordionItem value="item-1" title="Test">Content</AccordionItem>
        </Accordion>
      );
      
      const trigger = container.querySelector('button');
      expect(trigger).toHaveClass('focus-visible:outline-none');
      expect(trigger).toHaveClass('focus-visible:ring-2');
    });
  });

  describe('Content Expansion', () => {
    it('should show chevron icon in trigger', () => {
      const { container } = render(
        <Accordion type="single">
          <AccordionItem value="item-1" title="Test">Content</AccordionItem>
        </Accordion>
      );
      
      const svg = container.querySelector('svg');
      expect(svg).toBeInTheDocument();
      expect(svg).toHaveAttribute('aria-hidden', 'true');
    });

    it('should render content within prose styling', () => {
      const { container } = render(
        <Accordion type="single" defaultValue="item-1">
          <AccordionItem value="item-1" title="Test">
            <p>Test paragraph</p>
          </AccordionItem>
        </Accordion>
      );
      
      // Content is wrapped in a div with prose classes
      const contentContainer = container.querySelector('.prose');
      expect(contentContainer).toBeInTheDocument();
    });
  });

  describe('Single vs Multiple Mode', () => {
    it('should accept single type', () => {
      const { container } = render(
        <Accordion type="single">
          <AccordionItem value="item-1" title="Test">Content</AccordionItem>
        </Accordion>
      );
      
      expect(container.querySelector('[data-orientation]')).toBeInTheDocument();
    });

    it('should accept multiple type', () => {
      const { container } = render(
        <Accordion type="multiple">
          <AccordionItem value="item-1" title="Test 1">Content 1</AccordionItem>
          <AccordionItem value="item-2" title="Test 2">Content 2</AccordionItem>
        </Accordion>
      );
      
      expect(container.querySelector('[data-orientation]')).toBeInTheDocument();
    });
  });

  describe('Styling', () => {
    it('should apply border styling to items', () => {
      const { container } = render(
        <Accordion type="single">
          <AccordionItem value="item-1" title="Test">Content</AccordionItem>
        </Accordion>
      );
      
      // AccordionItem has border-b class
      const item = container.querySelector('[data-orientation]')?.firstChild;
      expect(item).toHaveClass('border-b');
    });

    it('should apply custom className to Accordion root', () => {
      const { container } = render(
        <Accordion type="single" className="custom-class">
          <AccordionItem value="item-1" title="Test">Content</AccordionItem>
        </Accordion>
      );
      
      const root = container.firstChild;
      expect(root).toHaveClass('custom-class');
    });
  });
});
