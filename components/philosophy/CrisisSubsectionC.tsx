'use client';
import ProblemSolutionPanel from "@/components/ProblemSolutionPanel";
import EvidenceQuoteGroup from "@/components/EvidenceQuoteGroup";
import ComparisonDiagram from "@/components/ComparisonDiagram";
import SummaryBox from "@/components/SummaryBox";

/**
 * CrisisSubsectionC Component
 * 
 * Renders Part I, Section C: The Specialized Knowledge Crisis.
 * Shows STEM-first failure and proposes poetic foundation.
 * 
 * Part of the Major Premise (The Crisis) in the syllogistic argument structure.
 * 
 * @component
 * @param {CrisisSubsectionCProps} props - Component props
 * @param {string} [props.className] - Optional CSS class name for styling
 * 
 * @example
 * ```tsx
 * <CrisisSubsectionC />
 * ```
 */

interface CrisisSubsectionCProps {
  className?: string;
}

export function CrisisSubsectionC({ className = '' }: CrisisSubsectionCProps) {
  // Always show full content
  return (
    <div id="major-premise-c" className={`space-y-8 ${className}`}>
      <h3 className="font-playfair text-4xl font-bold text-red-900">
        C. The Specialized Knowledge Crisis
      </h3>

      <p className="text-lg text-charcoal/80 leading-relaxed">
        Rushing boys into STEM specialization by age 13—before poetic knowledge is established—produces alienated technicians, not integrated thinkers. Boys memorize biology terms but never feel wonder at creation; they solve calculus but never read poetry. Senior's solution: three years of integrated humanities (music, art, philosophy) before any specialized study, establishing poetic knowledge as the fertile soil from which all learning grows.
      </p>

      <ProblemSolutionPanel
        layout="split"
        collapsible={false}
        problem={{
          title: "The Problem: STEM-First Curriculum",
          description: "Modern education rushes to specialization. By age 13, boys are pushed into STEM tracks, AP classes, and college prep—all before they have cultivated the poetic soil from which science, philosophy, and theology should naturally grow.\n\nThe consequence? Boys who can solve calculus problems but have never read a poem. Boys who memorize biology terms but have never felt wonder at a frog. Boys who ace SAT tests but are spiritually and aesthetically dead. Specialized knowledge without poetic knowledge produces alienation, not integration.",
          quote: {
            id: "alienated-technicians",
            quote: "Result: Alienated technicians, not Poetic Guardians. Utilitarian minds severed from beauty, truth, and God.",
            author: "",
            source: "",
            category: "discipline" as const,
          }
        }}
        solution={{
          title: "The Solution: Poetic Knowledge as Foundation",
          description: "Senior's poetic stage (ages 13-17) is the fertile soil from which all higher learning must grow. Music, art, poetry, and philosophy—integrated through liturgical rhythm—train the boy to see reality as a whole, not as fragmented facts.\n\nOnly after poetic knowledge is established can science and specialization be introduced. The IHP model demonstrates this: three years of integrated humanities (Great Books, music, art) before any specialized study. The result? Students who pursue STEM careers with wonder, not just utility.",
          quote: {
            id: "integrated-thinkers",
            quote: "Result: Integrated thinkers who see science, philosophy, and theology as unified expressions of truth.",
            author: "",
            source: "",
            category: "philosophy" as const,
          }
        }}
      />

      <EvidenceQuoteGroup
        variant="major-premise"
        title="Evidence from the Sources"
        collapsible={false}
        quotes={[
          {
            quote: "Poetic knowledge is not specialized knowledge but that connaturality and right harmony with things which Adam and Eve possessed in Eden. It is the soil from which science, philosophy, and theology grow. If you poison the soil, nothing true or beautiful can flourish.",
            author: "Dr. John Senior",
            source: "The Restoration of Christian Culture",
            showSourceLink: true,
            sourceSlug: "restoration-of-christian-culture"
          },
          {
            quote: "The modern school has become a factory for producing technicians. We train boys to manipulate the world, not to love it. Specialized knowledge without poetic knowledge breeds alienation—the boy becomes a stranger to reality, to himself, and to God.",
            author: "James Taylor",
            source: "Poetic Knowledge: The Recovery of Education",
            showSourceLink: true,
            sourceSlug: "poetic-knowledge-recovery-education"
          },
          {
            quote: "The Integrated Humanities Program exists because specialized knowledge has failed. We must restore the integrated vision—music, art, philosophy, theology—before we can safely introduce specialization. The poetic stage is not optional; it is prerequisite.",
            author: "Dr. Dennis Quinn",
            source: "IHP Lecture I: The Restoration of Wonder",
            showSourceLink: true,
            sourceSlug: "integrated_humanities_lecture"
          },
          {
            quote: "And whatever you do, in word or deed, do everything in the name of the Lord Jesus, giving thanks to God the Father through him.",
            author: "Colossians 3:17",
            source: "Scripture (ESV)"
          }
        ]}
      />

      <ComparisonDiagram
        title="The Poisoned Well: STEM Without Poetic Soil"
        description="Specialization must grow from poetic soil, not replace it"
        leftColumn={{
          label: "Modern Education",
          steps: ["Screens (0-13)", "Gymnasium (skipped)", "Poetic (skipped)", "STEM-first"],
          result: "= Alienated Technician"
        }}
        rightColumn={{
          label: "Classical Education",
          steps: ["Nursery (0-7)", "Gymnasium (7-13)", "Poetic (13-17)", "Science (from soil)"],
          result: "= Integrated Chivalric Wayfarer"
        }}
      />

      <SummaryBox variant="major-premise" title="The Crisis Established:">
        <p className="text-xl leading-relaxed">
          Modern education has <strong>failed us and our children</strong> by poisoning the well of wonder,
          eliminating physical and moral formation, and rushing to utilitarian specialization.
        </p>
      </SummaryBox>
    </div>
  );
}
