import CardGrid from "@/components/content/CardGrid";
import CTAButton from "@/components/ui/CTAButton";

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
 * 
 * @example
 * ```tsx
 * <VisionCallToAction />
 * ```
 */

interface VisionCallToActionProps {
  className?: string;
}

export function VisionCallToAction({ className = '' }: VisionCallToActionProps) {
  return (
    <div className={`space-y-12 ${className}`}>
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
              <CTAButton href="/contact" variant="primary" size="md">
                Get in Touch
              </CTAButton>
            )
          },
          {
            emoji: "🤝",
            heading: "Join a School",
            description: "Explore the network of schools already implementing Senior's philosophy.",
            action: (
              <CTAButton href="/network-directory" variant="secondary" size="md">
                Browse Directory
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
