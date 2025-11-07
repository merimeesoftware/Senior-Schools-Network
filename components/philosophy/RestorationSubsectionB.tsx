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
 * 
 * @example
 * ```tsx
 * <RestorationSubsectionB />
 * ```
 */

interface RestorationSubsectionBProps {
  className?: string;
}

export function RestorationSubsectionB({ className = '' }: RestorationSubsectionBProps) {
  return (
    <div id="minor-premise-b" className={`space-y-12 ${className}`}>
      <h3 className="font-playfair text-4xl font-bold text-green-900">
        B. The Gymnasium Stage: Foundation for Warriors
      </h3>

      <ProblemSolutionPanel
        layout="split"
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
