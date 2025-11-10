'use client';
import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

/**
 * VisionSyllogismRecap Component
 * 
 * Renders the complete syllogistic argument recap showing I + II = ∴ III with color-coded parts.
 * 
 * Part of the Conclusion (The Vision) in the syllogistic argument structure.
 * 
 * @component
 * @param {VisionSyllogismRecapProps} props - Component props
 * @param {string} [props.className] - Optional CSS class name for styling
 * @param {boolean} [props.summaryMode=true] - Whether to show summary view initially
 * 
 * @example
 * ```tsx
 * <VisionSyllogismRecap />
 * ```
 */

interface VisionSyllogismRecapProps {
  className?: string;
  summaryMode?: boolean;
}

export function VisionSyllogismRecap({ className = '', summaryMode = true }: VisionSyllogismRecapProps) {
  const [isExpanded, setIsExpanded] = useState(!summaryMode);

  // Summary view
  if (!isExpanded) {
    return (
      <div className={`space-y-6 ${className}`}>
        <div className="bg-parchment/30 border-l-4 border-gold p-6 rounded-r-lg">
          <h3 className="font-playfair text-3xl font-bold text-gold-dark mb-3">
            The Argument Complete
          </h3>
          <p className="text-lg text-charcoal/80 leading-relaxed mb-4">
            The syllogism complete: Modern education has failed (screens, softness, specialization destroy the gymnasium). Poetic knowledge is the remedy (four stages restore the natural order). Therefore: boys formed in the gymnasium and rooted in poetic knowledge will become warrior poets—men who defend truth, build families, and restore Christian culture.
          </p>
          <button
            onClick={() => setIsExpanded(true)}
            className="flex items-center gap-2 text-forest font-medium hover:text-gold transition-colors focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 rounded-lg px-4 py-2"
            aria-label="Read full syllogistic recap"
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
    <div className={`space-y-8 ${className}`}>
      <button
        onClick={() => setIsExpanded(false)}
        className="flex items-center gap-2 text-charcoal/70 hover:text-forest text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 rounded-lg px-3 py-1.5"
        aria-label="Collapse The Argument Complete"
      >
        <ChevronUpIcon className="w-4 h-4" />
        <span>Collapse</span>
      </button>

      <div className={`max-w-3xl mx-auto bg-parchment-light border-2 border-gold rounded-lg p-8 space-y-6`}>
        <h3 className="font-playfair text-3xl font-bold text-forest text-center">
          The Argument Complete
        </h3>

        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-16 text-center">
              <span className="text-4xl font-playfair text-red-700/50">I.</span>
            </div>
            <div className="flex-1">
              <p className="text-lg text-charcoal/90">
                <strong className="text-red-900">The Crisis:</strong> Modern education has failed
                our sons through screens, softness, and specialized knowledge—poisoning the gymnasium
                and poetic stages.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-16 text-center">
              <span className="text-4xl font-playfair text-green-700/50">II.</span>
            </div>
            <div className="flex-1">
              <p className="text-lg text-charcoal/90">
                <strong className="text-green-900">The Restoration:</strong> Poetic knowledge—cultivated
                through the four stages—is the remedy. The gymnasium stage (7-13) builds the
                physical and moral courage prerequisite for all higher learning.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-16 text-center">
              <span className="text-4xl font-playfair text-gold">∴</span>
            </div>
            <div className="flex-1">
              <p className="text-lg text-charcoal/90">
                <strong className="text-gold-dark">The Vision:</strong> Boys formed in the
                gymnasium—physically resilient, morally courageous—and rooted in poetic knowledge will
                become warrior poets: men who defend truth, build families, and restore Christian
                culture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
