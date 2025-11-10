'use client';
import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import CardGrid from "@/components/CardGrid";
import CTAButton from "@/components/CTAButton";

/**
 * VisionCallToAction Component
 * 
 * Three actionable paths for users - founding schools, joining schools, or adapting at home.
 * 
 * Part of the Conclusion (The Vision) in the syllogistic argument structure.
 * 
 * @component
 * @param {VisionCallToActionProps} props - Component props
 * @param {string} [props.className] - Optional CSS class name for styling
 * @param {boolean} [props.summaryMode=true] - Whether to show summary view initially
 * 
 * @example
 * ```tsx
 * <VisionCallToAction />
 * ```
 */

interface VisionCallToActionProps {
  className?: string;
  summaryMode?: boolean;
}

export function VisionCallToAction({ className = '', summaryMode = true }: VisionCallToActionProps) {
  const [isExpanded, setIsExpanded] = useState(!summaryMode);

  // Summary view
  if (!isExpanded) {
    return (
      <div className={`space-y-6 ${className}`}>
        <div className="bg-parchment/30 border-l-4 border-gold p-6 rounded-r-lg">
          <h3 className="font-playfair text-3xl font-bold text-gold-dark mb-3">
            What You Can Do
          </h3>
          <p className="text-lg text-charcoal/80 leading-relaxed mb-4">
            Your path forward depends on your role: Parents/Educators—restore the gymnasium at home or school. Founders—start a network school embodying this vision. Supporters—pray, donate, connect. The restoration begins with you. Explore the network, study the texts, and take the next step toward warrior-poet formation.
          </p>
          <button
            onClick={() => setIsExpanded(true)}
            className="flex items-center gap-2 text-forest font-medium hover:text-gold transition-colors focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 rounded-lg px-4 py-2"
            aria-label="Read full call to action"
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
    <div className={`pt-16 border-t-4 border-gold space-y-12 ${className}`}>
      <button
        onClick={() => setIsExpanded(false)}
        className="flex items-center gap-2 text-charcoal/70 hover:text-forest text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 rounded-lg px-3 py-1.5"
        aria-label="Collapse What You Can Do"
      >
        <ChevronUpIcon className="w-4 h-4" />
        <span>Collapse</span>
      </button>
      <h3 className="font-playfair text-4xl font-bold text-forest text-center">
        What You Can Do
      </h3>

      <CardGrid
        variant="vision"
        columns={3}
        cards={[
          {
            emoji: "🏫",
            heading: "Found a School",
            description: "Gather families in your area. Hire a headmaster. Build the gymnasium stage. We can help.",
            action: (
              <CTAButton href="/engage" variant="primary" size="md">
                Get the Founder's Toolkit
              </CTAButton>
            )
          },
          {
            emoji: "🤝",
            heading: "Join a School",
            description: "Explore the network of schools already implementing Senior's philosophy.",
            action: (
              <CTAButton href="/schools" variant="secondary" size="md">
                Browse Schools
              </CTAButton>
            )
          },
          {
            emoji: "🏡",
            heading: "Adapt at Home",
            description: "Homeschool families: outdoor play, Latin primers, adventure. The gymnasium is accessible.",
            action: (
              <CTAButton href="/texts" variant="outline" size="md">
                Read the Sources
              </CTAButton>
            )
          }
        ]}
      />
    </div>
  );
}
