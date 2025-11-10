'use client';
import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import CardGrid from "@/components/CardGrid";

/**
 * VisionWarriorPoet Component
 * 
 * Defines the three components of a warrior poet: Warrior (physical), Poet (intellectual), Catholic (spiritual).
 * 
 * Part of the Conclusion (The Vision) in the syllogistic argument structure.
 * 
 * @component
 * @param {VisionWarriorPoetProps} props - Component props
 * @param {string} [props.className] - Optional CSS class name for styling
 * @param {boolean} [props.summaryMode=true] - Whether to show summary view initially
 * 
 * @example
 * ```tsx
 * <VisionWarriorPoet />
 * ```
 */

interface VisionWarriorPoetProps {
  className?: string;
  summaryMode?: boolean;
}

export function VisionWarriorPoet({ className = '', summaryMode = true }: VisionWarriorPoetProps) {
  const [isExpanded, setIsExpanded] = useState(!summaryMode);

  // Summary view
  if (!isExpanded) {
    return (
      <div className={`space-y-6 ${className}`}>
        <div className="bg-parchment/30 border-l-4 border-gold p-6 rounded-r-lg">
          <h3 className="font-playfair text-3xl font-bold text-gold-dark mb-3">
            What Is a Warrior Poet?
          </h3>
          <p className="text-lg text-charcoal/80 leading-relaxed mb-4">
            A warrior poet is a man formed through Senior's four stages: wonder-filled, physically disciplined, integrated in mind, and ordered to God. He brings courage to intellectual work, beauty to practical tasks, and wisdom to cultural engagement. Not a scholar-only or soldier-only, but an integrated whole: strong enough to defend truth, wise enough to contemplate beauty, humble enough to serve.
          </p>
          <button
            onClick={() => setIsExpanded(true)}
            className="flex items-center gap-2 text-forest font-medium hover:text-gold transition-colors focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 rounded-lg px-4 py-2"
            aria-label="Read full description of a warrior poet"
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
    <div className={`space-y-12 ${className}`}>
      <button
        onClick={() => setIsExpanded(false)}
        className="flex items-center gap-2 text-charcoal/70 hover:text-forest text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 rounded-lg px-3 py-1.5"
        aria-label="Collapse What Is a Warrior Poet"
      >
        <ChevronUpIcon className="w-4 h-4" />
        <span>Collapse</span>
      </button>
      <h3 className="font-playfair text-4xl font-bold text-gold-dark text-center">
        What Is a Warrior Poet?
      </h3>

      <CardGrid
        variant="vision"
        columns={3}
        cards={[
          {
            emoji: "🛡️",
            heading: "Warrior",
            description: "Physically resilient, morally courageous, ready to defend truth and family. Forged in the gymnasium through sport, adventure, and discipline."
          },
          {
            emoji: "🎨",
            heading: "Poet",
            description: "Rooted in poetic knowledge: music, art, philosophy integrated through liturgical rhythm. Sees reality as a unified whole, not fragmented facts."
          },
          {
            emoji: "✝️",
            heading: "Catholic",
            description: "Formed in liturgical wisdom, rooted in Tradition, ordered to eternal truth. Education is formation for heaven, not mere career preparation."
          }
        ]}
      />

      <p className="text-lg text-charcoal/90 text-center max-w-3xl mx-auto leading-relaxed">
        The warrior poet is not a romantic ideal but the natural outcome of the four stages.
        Physical courage (gymnasium) + integrated learning (poetic) + liturgical wisdom (spiritual)
        = men who can restore Christendom.
      </p>
    </div>
  );
}
