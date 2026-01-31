'use client';

import React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import QuoteCard from '../content/QuoteCard';
import type { Quote } from '@/lib/types/content';

interface Objection {
  question: string;
  answer: string;
  quote?: Quote;
  icon?: React.ReactNode;
}

interface CounterargumentAccordionProps {
  objections: Objection[];
  className?: string;
}

export default function CounterargumentAccordion({
  objections,
  className = '',
}: Readonly<CounterargumentAccordionProps>) {
  return (
    <AccordionPrimitive.Root
      type="single"
      collapsible
      className={`space-y-4 ${className}`}
    >
      {objections.map((objection, index) => (
        <AccordionPrimitive.Item
          key={objection.quote?.id || `objection-${index}`}
          value={`objection-${index}`}
          className="counterargument-item border-l-4 border-spiritual/40 bg-spiritual/5 rounded-lg overflow-hidden transition-all"
        >
          <AccordionPrimitive.Header>
            <AccordionPrimitive.Trigger className="w-full px-6 py-4 hover:bg-spiritual/10 transition-colors data-[state=open]:bg-spiritual/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-spiritual focus-visible:ring-offset-2">
              <div className="flex items-center gap-3 text-left">
                <span className="text-2xl flex-shrink-0" aria-hidden="true">
                  {objection.icon || '❓'}
                </span>
                <span className="text-lg md:text-xl font-playfair text-charcoal">
                  {objection.question}
                </span>
              </div>
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionPrimitive.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
            <div className="px-6 pb-6 space-y-4">
              <div className="text-base md:text-lg leading-relaxed text-charcoal/90 font-lato">
                {objection.answer}
              </div>
              {objection.quote && (
                <QuoteCard
                  quote={objection.quote.quote}
                  author={objection.quote.author}
                  source={objection.quote.source}
                  variant="embedded"
                  className="mt-4"
                />
              )}
            </div>
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  );
}
