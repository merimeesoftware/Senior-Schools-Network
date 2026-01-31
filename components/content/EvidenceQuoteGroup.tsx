'use client';

import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import EvidenceQuote from './EvidenceQuote';

/**
 * Props for a single evidence quote (derived from EvidenceQuote component)
 */
export interface EvidenceQuoteItem {
  /** The quote text */
  quote: string;
  /** Optional author name */
  author?: string;
  /** Optional source citation */
  source?: string;
  /** Optional evidence label (e.g., "From The Restoration of Innocence, Ch. 5") */
  evidenceLabel?: string;
  /** Whether to show a link to the source text */
  showSourceLink?: boolean;
  /** Slug for the source text page (required if showSourceLink is true) */
  sourceSlug?: string;
}

/**
 * Props for the EvidenceQuoteGroup component
 */
interface EvidenceQuoteGroupProps {
  /** Array of quote objects to display */
  quotes: EvidenceQuoteItem[];
  /** Visual variant matching syllogistic argument type */
  variant: 'major-premise' | 'minor-premise' | 'conclusion';
  /** Optional title (default: "Evidence from the Sources") */
  title?: string;
  /** Additional CSS classes */
  className?: string;
  /** Whether to make the component collapsible (default: false) */
  collapsible?: boolean;
  /** Initial collapsed state if collapsible (default: true) */
  defaultCollapsed?: boolean;
}

/**
 * EvidenceQuoteGroup Component
 * 
 * A container component that renders a heading and multiple EvidenceQuote components
 * with proper spacing. Can optionally render as a collapsible accordion to reduce
 * page height while preserving content accessibility.
 * 
 * @example
 * ```tsx
 * // Always expanded (default behavior)
 * <EvidenceQuoteGroup
 *   variant="major-premise"
 *   quotes={[...]}
 * />
 * 
 * // Collapsible (collapsed by default)
 * <EvidenceQuoteGroup
 *   variant="major-premise"
 *   quotes={[...]}
 *   collapsible={true}
 * />
 * 
 * // Collapsible (expanded by default)
 * <EvidenceQuoteGroup
 *   variant="major-premise"
 *   quotes={[...]}
 *   collapsible={true}
 *   defaultCollapsed={false}
 * />
 * ```
 */
export default function EvidenceQuoteGroup({
  quotes,
  variant,
  title = 'Evidence from the Sources',
  className = '',
  collapsible = false,
  defaultCollapsed = true,
}: Readonly<EvidenceQuoteGroupProps>) {
  const [isCollapsed, setIsCollapsed] = useState(collapsible ? defaultCollapsed : false);

  // Non-collapsible mode: original behavior
  if (!collapsible) {
    return (
      <div className={`space-y-8 mt-12 ${className}`}>
        {/* Heading */}
        <h4 className="font-playfair text-2xl font-bold text-forest text-center">
          {title}
        </h4>

        {/* Quotes */}
        <div className="space-y-8">
          {quotes.map((quote, index) => (
            <EvidenceQuote
              key={index}
              variant={variant}
              quote={quote.quote}
              author={quote.author}
              source={quote.source}
              evidenceLabel={quote.evidenceLabel}
              showSourceLink={quote.showSourceLink}
              sourceSlug={quote.sourceSlug}
            />
          ))}
        </div>
      </div>
    );
  }

  // Collapsible mode
  return (
    <div className={`mt-12 ${className}`}>
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsCollapsed(!isCollapsed);
          }
        }}
        aria-expanded={!isCollapsed}
        className="w-full flex items-center justify-between py-4 text-left hover:bg-parchment/30 transition-colors focus:outline-none focus:ring-2 focus:ring-forest/50 rounded-md px-2 -ml-2"
      >
        <div className="flex items-center gap-3">
          <h4 className="font-playfair text-2xl font-bold text-forest">
            {title}
          </h4>
          <span className="text-sm text-forest/60 font-opensans">
            ({quotes.length} {quotes.length === 1 ? 'source' : 'sources'})
          </span>
        </div>
        {isCollapsed ? (
          <ChevronDownIcon className="w-6 h-6 text-forest/70" />
        ) : (
          <ChevronUpIcon className="w-6 h-6 text-forest/70" />
        )}
      </button>

      {!isCollapsed && (
        <div className="space-y-8 mt-6 animate-fadeIn">
          {quotes.map((quote, index) => (
            <EvidenceQuote
              key={index}
              variant={variant}
              quote={quote.quote}
              author={quote.author}
              source={quote.source}
              evidenceLabel={quote.evidenceLabel}
              showSourceLink={quote.showSourceLink}
              sourceSlug={quote.sourceSlug}
            />
          ))}
        </div>
      )}
    </div>
  );
}
