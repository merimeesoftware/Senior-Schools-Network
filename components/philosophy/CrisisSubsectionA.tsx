import ProblemSolutionPanel from "@/components/ProblemSolutionPanel";
import EvidenceQuoteGroup from "@/components/EvidenceQuoteGroup";
import InteractiveStages from "@/components/InteractiveStages";

/**
 * CrisisSubsectionA Component
 * 
 * Renders Part I, Section A: Loss of Wonder & Sensory Integration.
 * Demonstrates how screen addiction destroys wonder and proposes nature as remedy.
 * 
 * Part of the Major Premise (The Crisis) in the syllogistic argument structure.
 * 
 * @component
 * @param {CrisisSubsectionAProps} props - Component props
 * @param {string} [props.className] - Optional CSS class name for styling
 * 
 * @example
 * ```tsx
 * <CrisisSubsectionA />
 * ```
 */

interface CrisisSubsectionAProps {
  className?: string;
}

export function CrisisSubsectionA({ className = '' }: CrisisSubsectionAProps) {
  return (
    <div id="major-premise-a" className={`space-y-12 ${className}`}>
      <h3 className="font-playfair text-4xl font-bold text-red-900">
        A. Loss of Wonder & Sensory Integration
      </h3>

      <ProblemSolutionPanel
        layout="split"
        problem={{
          title: "The Problem: Screen Addiction",
          description: "The average American child now spends 7 hours per day on screens. Outdoor play has declined by 50% in a single generation. The consequence? A generation of boys who have never climbed a tree, caught a frog, or felt the terror and thrill of real physical risk.\n\nIndoor confinement has replaced the gymnasium stage's natural habitat: fields, forests, rivers. Without sensory integration—touch, smell, movement—boys cannot develop the connaturality with reality that Senior calls \"poetic knowledge.\"",
          quote: {
            id: "wonder-dies",
            quote: "Result: Wonder dies. The well is poisoned before age 13.",
            author: "",
            source: "",
            category: "discipline" as const,
          }
        }}
        solution={{
          title: "The Solution: Nature & Wonder",
          description: "Poetic knowledge begins with wonder—not curiosity (which seeks explanations), but awe before the sheer existence of things. Nature is the gymnasium for this wonder: the forest, the field, the night sky.\n\nSenior's nursery and gymnasium stages demand outdoor immersion: \"benevolent neglect\" where boys explore, risk, and discover without constant adult mediation. Latin, sport, and adventure—not worksheets—form the curriculum.",
          quote: {
            id: "wonder-restored",
            quote: "Result: Wonder restored. The soil is fertile for higher learning.",
            author: "",
            source: "",
            category: "philosophy" as const,
          }
        }}
      />

      <EvidenceQuoteGroup
        variant="major-premise"
        title="Evidence from the Sources"
        quotes={[
          {
            quote: "Wonder is the first and most fundamental disposition of the soul, the beginning of all philosophy and all poetry. The child who has never felt wonder is already dead.",
            author: "Dr. John Senior",
            source: "The Restoration of Christian Culture",
            showSourceLink: true,
            sourceSlug: "restoration-of-christian-culture"
          },
          {
            quote: "The senses are the gateways to the soul. Without sensory integration—touch, taste, smell, sound, sight—the child cannot achieve connaturality with reality. Modern education isolates the mind from the body and both from the world.",
            author: "Dr. Dennis Quinn",
            source: "IHP Lecture I: The Loss of the Senses",
            showSourceLink: true,
            sourceSlug: "integrated_humanities_lecture"
          },
          {
            quote: "The heavens declare the glory of God, and the sky above proclaims his handiwork. Day to day pours out speech, and night to night reveals knowledge.",
            author: "Psalm 19:1-2",
            source: "Scripture (ESV)"
          }
        ]}
      />

      <div className="space-y-6">
        <h4 className="font-playfair text-2xl font-bold text-forest text-center">
          Where the Crisis Hits
        </h4>
        <InteractiveStages mode="crisis" />
        <p className="text-center text-sm text-charcoal/70 italic">
          Click each stage to see the modern failure
        </p>
      </div>
    </div>
  );
}
