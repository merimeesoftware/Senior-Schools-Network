'use client';
import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import InteractiveStages from "@/components/InteractiveStages";
import EvidenceQuoteGroup from "@/components/EvidenceQuoteGroup";

/**
 * RestorationSubsectionA Component
 * 
 * Renders Part II, Section A: The Four Stages of Restoration.
 * Shows Senior's developmental model with InteractiveStages component.
 * 
 * Part of the Minor Premise (The Restoration) in the syllogistic argument structure.
 * 
 * @component
 * @param {RestorationSubsectionAProps} props - Component props
 * @param {string} [props.className] - Optional CSS class name for styling
 * @param {boolean} [props.summaryMode=true] - Whether to show summary view initially
 * 
 * @example
 * ```tsx
 * <RestorationSubsectionA />
 * ```
 */

interface RestorationSubsectionAProps {
  className?: string;
  summaryMode?: boolean;
}

export function RestorationSubsectionA({ className = '', summaryMode = true }: RestorationSubsectionAProps) {
  const [isExpanded, setIsExpanded] = useState(!summaryMode);

  // Summary view
  if (!isExpanded) {
    return (
      <div className={`space-y-6 ${className}`}>
        <div className="bg-parchment/30 border-l-4 border-green-700 p-6 rounded-r-lg">
          <h3 className="font-playfair text-3xl font-bold text-green-900 mb-3">
            A. The Four Stages of Restoration
          </h3>
          <p className="text-lg text-charcoal/80 leading-relaxed mb-4">
            Dr. John Senior's model follows four natural developmental stages: nursery (ages 0-7, wonder), gymnasium (7-13, discipline), poetic (13-17, integration), and spiritual (all ages, wisdom). These are not arbitrary divisions but organic phases corresponding to the child's physical, intellectual, and spiritual maturation. Skip any stage and the whole structure collapses.
          </p>
          <button
            onClick={() => setIsExpanded(true)}
            className="flex items-center gap-2 text-forest font-medium hover:text-gold transition-colors focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 rounded-lg px-4 py-2"
            aria-label="Read full argument for The Four Stages of Restoration"
          >
            <span>Read Full Argument</span>
            <ChevronDownIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    );
  }

  // Expanded view
  return (
    <div id="minor-premise-a" className={`space-y-12 ${className}`}>
      <button
        onClick={() => setIsExpanded(false)}
        className="flex items-center gap-2 text-charcoal/70 hover:text-forest text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 rounded-lg px-3 py-1.5"
        aria-label="Collapse The Four Stages of Restoration"
      >
        <ChevronUpIcon className="w-4 h-4" />
        <span>Collapse</span>
      </button>
      <h3 className="font-playfair text-4xl font-bold text-green-900">
        A. The Four Stages of Restoration
      </h3>

      <p className="text-lg leading-relaxed text-charcoal/90 max-w-4xl mx-auto">
        Dr. John Senior's model for Christian education follows the natural developmental stages,
        each building on the previous. These are not arbitrary divisions but organic phases
        corresponding to the child's physical, intellectual, and spiritual maturation.
      </p>

      <p className="text-center text-sm text-charcoal/70 italic mb-4">
        Toggle between views to see how each stage should be restored vs. how modern education fails
      </p>

      <InteractiveStages mode="default" allowModeToggle={true} />

      <EvidenceQuoteGroup
        variant="minor-premise"
        title="Evidence from the Sources"
        collapsible={true}
        quotes={[
          {
            quote: "The four stages are not a curriculum but a way of life. Nursery is wonder. Gymnasium is discipline. Poetic is integration. Spiritual is wisdom. Skip any stage and the whole structure collapses.",
            author: "Dr. John Senior",
            source: "The Restoration of Christian Culture",
            showSourceLink: true,
            sourceSlug: "restoration-of-christian-culture"
          },
          {
            quote: "Poetic knowledge is not specialized knowledge but that connaturality and right harmony with things which Adam and Eve possessed in Eden. It must be cultivated through the stages, beginning with sensory wonder and culminating in liturgical wisdom.",
            author: "Dr. John Senior",
            source: "The Restoration of Christian Culture",
            showSourceLink: true,
            sourceSlug: "restoration-of-christian-culture"
          },
          {
            quote: "Train up a child in the way he should go; even when he is old he will not depart from it.",
            author: "Proverbs 22:6",
            source: "Scripture (ESV)"
          }
        ]}
      />
    </div>
  );
}
