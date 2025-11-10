'use client';
import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import ProblemSolutionPanel from "@/components/ProblemSolutionPanel";
import EvidenceQuoteGroup from "@/components/EvidenceQuoteGroup";

/**
 * RestorationSubsectionB Component
 * 
 * Renders Part II, Section B: The Gymnasium Stage: Foundation for Warriors.
 * Emphasizes physical discipline as prerequisite for higher learning.
 * 
 * Part of the Minor Premise (The Restoration) in the syllogistic argument structure.
 * 
 * @component
 * @param {RestorationSubsectionBProps} props - Component props
 * @param {string} [props.className] - Optional CSS class name for styling
 * @param {boolean} [props.summaryMode=true] - Whether to show summary view initially
 * 
 * @example
 * ```tsx
 * <RestorationSubsectionB />
 * ```
 */

interface RestorationSubsectionBProps {
  className?: string;
  summaryMode?: boolean;
}

export function RestorationSubsectionB({ className = '', summaryMode = true }: RestorationSubsectionBProps) {
  const [isExpanded, setIsExpanded] = useState(!summaryMode);

  // Summary view
  if (!isExpanded) {
    return (
      <div className={`space-y-6 ${className}`}>
        <div className="bg-parchment/30 border-l-4 border-green-700 p-6 rounded-r-lg">
          <h3 className="font-playfair text-3xl font-bold text-green-900 mb-3">
            B. The Gymnasium Stage: Foundation for Warriors
          </h3>
          <p className="text-lg text-charcoal/80 leading-relaxed mb-4">
            The gymnasium stage (ages 7-13) demands three things: sport (rugby, boxing, swimming—full-contact, high-risk), Latin (memory training, ordered mind), and adventure (camping, exploration, danger under benevolent supervision). Physical courage and discipline built here become the foundation for intellectual rigor (poetic stage) and spiritual trial (spiritual stage). Senior: "Without the gymnasium, the poetic stage collapses—there is no soil for higher learning."
          </p>
          <button
            onClick={() => setIsExpanded(true)}
            className="flex items-center gap-2 text-forest font-medium hover:text-gold transition-colors focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 rounded-lg px-4 py-2"
            aria-label="Read full argument for The Gymnasium Stage: Foundation for Warriors"
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
    <div id="minor-premise-b" className={`space-y-12 ${className}`}>
      <button
        onClick={() => setIsExpanded(false)}
        className="flex items-center gap-2 text-charcoal/70 hover:text-forest text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 rounded-lg px-3 py-1.5"
        aria-label="Collapse The Gymnasium Stage: Foundation for Warriors"
      >
        <ChevronUpIcon className="w-4 h-4" />
        <span>Collapse</span>
      </button>
      <h3 className="font-playfair text-4xl font-bold text-green-900">
        B. The Gymnasium Stage: Foundation for Warriors
      </h3>

      <ProblemSolutionPanel
        layout="split"
        collapsible={true}
        problem={{
          title: "What Modern Education Skips",
          description: "The gymnasium stage (ages 7-13) has been abandoned entirely. Boys go from nursery distractions to academic pressure without the intervening years of physical and moral formation. The result? Weak bodies, undisciplined minds, cowardly hearts.",
          quote: {
            id: "gymnasium-skipped",
            quote: "Without the gymnasium, the poetic stage collapses. There is no soil for higher learning.",
            author: "",
            source: "",
            category: "discipline" as const,
          }
        }}
        solution={{
          title: "Senior's Gymnasium Prescription",
          description: "The gymnasium stage demands three things: Sport (rugby, boxing, swimming—full-contact, dangerous), Latin (memory training, ordered syntax), and Adventure (camping, climbing, exploration without constant supervision).\n\nThis is the pivot stage. Physical courage and discipline built here become the foundation for intellectual rigor (poetic stage) and spiritual trial (spiritual stage). The warrior poet is forged in the gymnasium.",
          quote: {
            id: "gymnasium-restored",
            quote: "Restore the gymnasium, and the rest follows. Skip it, and nothing else works.",
            author: "",
            source: "",
            category: "philosophy" as const,
          }
        }}
      />

      <EvidenceQuoteGroup
        variant="minor-premise"
        title="Evidence from the Sources"
        collapsible={true}
        quotes={[
          {
            quote: "The gymnasium is not a luxury; it is a necessity. Without physical discipline, the soul cannot be formed. The boy who has never endured cold water, hard ground, and aching muscles cannot endure intellectual frustration or spiritual dryness.",
            author: "Dr. John Senior",
            source: "The Death of Christian Culture",
            showSourceLink: true,
            sourceSlug: "death-of-christian-culture"
          },
          {
            quote: "Every athlete exercises self-control in all things. They do it to receive a perishable wreath, but we an imperishable.",
            author: "1 Corinthians 9:25",
            source: "Scripture (ESV)"
          },
          {
            quote: "Physical courage precedes moral courage. The boy who climbs the cliff, swims the icy river, and faces the opponent in the ring learns courage that transfers to every sphere: intellectual, moral, spiritual.",
            author: "James Taylor",
            source: "Poetic Knowledge: The Recovery of Education",
            showSourceLink: true,
            sourceSlug: "poetic-knowledge-recovery-education"
          }
        ]}
      />
    </div>
  );
}
