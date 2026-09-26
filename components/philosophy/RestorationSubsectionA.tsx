'use client';
import InteractiveStages from "@/components/interactive/InteractiveStages";
import EvidenceQuoteGroup from "@/components/content/EvidenceQuoteGroup";

/**
 * RestorationSubsectionA Component
 * 
 * Renders Part II, Section A: restoration as the work, five modes as the sequence.
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
}

export function RestorationSubsectionA({ className = '' }: RestorationSubsectionAProps) {
  // Always show expanded view - content is concise enough to display fully
  return (
    <div id="minor-premise-a" className={`space-y-12 ${className}`}>
      <h3 className="font-playfair text-4xl font-bold text-green-900">
        A. The Five Modes
      </h3>

      <p className="text-lg leading-relaxed text-charcoal/90 max-w-4xl mx-auto">
        Restoration is the work; the five modes are the sequence. Modes are cumulative and overlapping.
        Advance retains earlier modes as living roots. Ages are approximate. The musical teaches repose,
        the gymnastic adventure, the poetic the first look, the romantic the quest that look demands,
        and the virtuous the cost of keeping faith with both.
      </p>

      <p className="text-center text-sm text-charcoal/70 italic mb-4">
        Toggle between views to see how each stage should be restored vs. how modern education fails
      </p>

      <InteractiveStages mode="default" allowModeToggle={true} />

      <EvidenceQuoteGroup
        variant="minor-premise"
        title="Evidence from the Sources"
        collapsible={false}
        quotes={[
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
