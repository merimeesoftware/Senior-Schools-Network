'use client';

import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ReactNode } from 'react';

interface AccordionItemProps {
  value: string;
  title: string;
  children: ReactNode;
}

export function AccordionItem({ value, title, children }: AccordionItemProps) {
  return (
    <AccordionPrimitive.Item 
      value={value}
      className="border-b border-forest-200 transition-colors hover:border-forest-300"
    >
      <AccordionPrimitive.Header>
        <AccordionPrimitive.Trigger className="group flex w-full items-center justify-between py-4 text-left font-serif text-lg font-semibold text-forest-800 transition-colors hover:text-forest-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2">
          {title}
          <svg
            className="h-5 w-5 transition-transform duration-200 ease-in-out group-data-[state=open]:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>
      <AccordionPrimitive.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
        <div className="pb-6 text-forest-700 prose prose-forest max-w-none">
          {children}
        </div>
      </AccordionPrimitive.Content>
    </AccordionPrimitive.Item>
  );
}

interface AccordionProps {
  type?: 'single' | 'multiple';
  defaultValue?: string | string[];
  children: ReactNode;
  className?: string;
}

export function Accordion({ 
  type = 'single', 
  defaultValue, 
  children,
  className = ''
}: AccordionProps) {
  if (type === 'multiple') {
    return (
      <AccordionPrimitive.Root 
        type="multiple"
        defaultValue={defaultValue as string[]}
        className={`rounded-lg border border-forest-200 bg-white ${className}`}
      >
        {children}
      </AccordionPrimitive.Root>
    );
  }

  return (
    <AccordionPrimitive.Root 
      type="single"
      defaultValue={defaultValue as string}
      collapsible
      className={`rounded-lg border border-forest-200 bg-white ${className}`}
    >
      {children}
    </AccordionPrimitive.Root>
  );
}
