import StudyGrid from "@/components/StudyGrid";
import EvidenceQuoteGroup from "@/components/EvidenceQuoteGroup";
import SummaryBox from "@/components/SummaryBox";

/**
 * RestorationSubsectionC Component
 * 
 * Renders Part II, Section C: The Poetic Stage: Integrated Learning.
 * Shows IHP model and culminates with Minor Premise summary.
 * 
 * Part of the Minor Premise (The Restoration) in the syllogistic argument structure.
 * 
 * @component
 * @param {RestorationSubsectionCProps} props - Component props
 * @param {string} [props.className] - Optional CSS class name for styling
 * 
 * @example
 * ```tsx
 * <RestorationSubsectionC />
 * ```
 */

interface RestorationSubsectionCProps {
  className?: string;
}

export function RestorationSubsectionC({ className = '' }: RestorationSubsectionCProps) {
  return (
    <div id="minor-premise-c" className={`space-y-12 ${className}`}>
      <h3 className="font-playfair text-4xl font-bold text-green-900">
        C. The Poetic Stage: Integrated Learning
      </h3>

      <p className="text-lg leading-relaxed text-charcoal/90 max-w-4xl mx-auto">
        Only after the gymnasium lays the foundation can the poetic stage (ages 13-17) flourish.
        Here, music, art, poetry, and philosophy are integrated—not as isolated subjects, but as
        expressions of a unified vision of reality. Science comes last, growing from this fertile
        poetic soil.
      </p>

      <StudyGrid
        title="The IHP Model: Integrated Humanities"
        description="The Integrated Humanities Program at the University of Kansas (founded by Senior, Quinn, and Nelick) demonstrates poetic education in practice. Students spend three years studying Great Books, Gregorian chant, sacred art, and philosophy—all integrated through liturgical rhythm and natural law. Only after this foundation do they pursue specialized study."
        variant="restoration"
        leftColumn={{
          heading: "What They Study:",
          items: [
            "Homer, Virgil, Dante",
            "Gregorian chant, polyphony",
            "Plato, Aristotle, Aquinas",
            "Sacred art (Byzantine, medieval)",
            "Natural philosophy before modern science"
          ]
        }}
        rightColumn={{
          heading: "What They Don't Study (Yet):",
          items: [
            "Career-focused majors",
            "Modern political theory",
            "Specialized STEM tracks",
            "Pop culture or current events",
            "Anything divorced from liturgical context"
          ]
        }}
        footer="First integration, then specialization. First wonder, then analysis."
      />

      <EvidenceQuoteGroup
        variant="minor-premise"
        title="Evidence from the Sources"
        quotes={[
          {
            quote: "The Integrated Humanities Program exists because specialized knowledge has failed. We restore the integrated vision—music, art, philosophy, theology—before we introduce specialization. The poetic stage is not optional; it is prerequisite.",
            author: "Dr. Dennis Quinn",
            source: "IHP Lecture I: The Restoration of Wonder",
            showSourceLink: true,
            sourceSlug: "integrated_humanities_lecture"
          },
          {
            quote: "Music, art, and poetry are not electives or enrichment. They are the soil from which science, theology, and philosophy grow. If the soil is poisoned, nothing true or beautiful can flourish.",
            author: "James Taylor",
            source: "Poetic Knowledge: The Recovery of Education",
            showSourceLink: true,
            sourceSlug: "poetic-knowledge-recovery-education"
          },
          {
            quote: "Finally, brothers, whatever is true, whatever is honorable, whatever is just, whatever is pure, whatever is lovely, whatever is commendable, if there is any excellence, if there is anything worthy of praise, think about these things.",
            author: "Philippians 4:8",
            source: "Scripture (ESV)"
          }
        ]}
      />

      <div className="pt-16 border-t-4 border-green-700">
        <div className="max-w-4xl mx-auto space-y-8">
          <h3 className="font-playfair text-4xl font-bold text-forest text-center">
            Summary: The Remedy Is Clear
          </h3>

          <SummaryBox variant="minor-premise" title="The Restoration Established:">
            <p className="text-xl leading-relaxed">
              Poetic knowledge—cultivated through the four stages (nursery, gymnasium, poetic,
              spiritual)—is the remedy to modern education's failure. The <strong>gymnasium stage
              (7-13)</strong> is the pivot: physical courage and ordered habit lay the foundation for
              all higher learning. Restore the gymnasium, integrate the poetic, and warrior poets will
              emerge.
            </p>
          </SummaryBox>
        </div>
      </div>
    </div>
  );
}
