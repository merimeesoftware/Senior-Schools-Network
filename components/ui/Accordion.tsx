'use client';

import React, { ReactNode } from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';

interface AccordionItemProps {
  value: string;
  title: string;
  children: ReactNode;
  variant?: 'default' | 'argument';
  className?: string;
}

export function AccordionItem({
  value,
  title,
  children,
  variant = 'default',
  className = '',
}: Readonly<AccordionItemProps>) {
  return (
    <AccordionPrimitive.Item
      value={value}
      className={`
        border border-forest/20 rounded-lg overflow-hidden transition-all duration-300
        ${variant === 'argument' ? 'argument-accordion-item' : 'border-b'}
        ${className}
      `}
    >
      <AccordionPrimitive.Header className="flex">
        <AccordionPrimitive.Trigger
          className={`
            flex flex-1 items-center justify-between p-6 text-left
            font-playfair text-xl md:text-2xl text-forest
            hover:bg-parchment/30 transition-all duration-200
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2
            group
            ${variant === 'argument' ? 'data-[state=open]:bg-green-50/30' : 'py-4 text-lg font-semibold hover:text-forest/80'}
          `}
        >
          <span className="pr-4">{title}</span>
          <div className="flex items-center gap-2">
            {variant === 'argument' && (
              <span
                className="text-2xl text-green-700 opacity-0 group-data-[state=open]:opacity-100 transition-opacity duration-300"
                aria-hidden="true"
              >
                ✓
              </span>
            )}
            <svg
              className="h-6 w-6 text-forest transition-transform duration-200 group-data-[state=open]:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>
      <AccordionPrimitive.Content
        className={`
          overflow-hidden
          data-[state=closed]:animate-accordion-up
          data-[state=open]:animate-accordion-down
          ${variant === 'argument' ? 'data-[state=open]:bg-green-50/10' : ''}
        `}
      >
        <div className={`p-6 pt-0 ${variant === 'default' ? 'text-forest-700 prose prose-forest max-w-none' : ''}`}>
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
