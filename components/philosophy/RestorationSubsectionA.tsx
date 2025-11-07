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
  return (
    <div id="minor-premise-a" className={`space-y-12 ${className}`}>
      <h3 className="font-playfair text-4xl font-bold text-green-900">
        A. The Four Stages of Restoration
      </h3>

      <p className="text-lg leading-relaxed text-charcoal/90 max-w-4xl mx-auto">
        Dr. John Senior's model for Christian education follows the natural developmental stages,
        each building on the previous. These are not arbitrary divisions but organic phases
        corresponding to the child's physical, intellectual, and spiritual maturation.
      </p>

      <InteractiveStages mode="default" />

      <EvidenceQuoteGroup
        variant="minor-premise"
        title="Evidence from the Sources"
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
