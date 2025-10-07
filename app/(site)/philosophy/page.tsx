export default function PhilosophyPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-playfair text-forest mb-6">
        Philosophy & Resources
      </h1>

      <div className="quote-block">
        <p className="text-xl">
          "The poetic mode begins with wonder, sensory delight, and imagination
          — a foundation for all later knowledge"
        </p>
        <p className="text-sm mt-2 not-italic text-charcoal/70">
          — Inspired by John Senior and James Taylor
        </p>
      </div>

      <div className="prose max-w-none mt-8">
        <h2 className="text-2xl font-playfair text-forest mb-4">
          Core Concepts
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="card">
            <h3 className="text-xl font-playfair text-forest mb-3">
              Poetic Knowledge
            </h3>
            <p className="text-sm">
              Intuitive, connatural knowing through senses, emotions, and
              imagination — contrasting with purely rational modes.
            </p>
          </div>

          <div className="card">
            <h3 className="text-xl font-playfair text-forest mb-3">
              Physical Discipline & Adventure
            </h3>
            <p className="text-sm">
              Gymnasium stage (ages 7-13): Bodily rigor, outdoor challenges, and
              experiential learning forming "warrior poets."
            </p>
          </div>

          <div className="card">
            <h3 className="text-xl font-playfair text-forest mb-3">
              Poetic Foundations for Science
            </h3>
            <p className="text-sm">
              Wonder and imagination as fertile soil for disciplined inquiry —
              countering premature STEM fragmentation.
            </p>
          </div>

          <div className="card">
            <h3 className="text-xl font-playfair text-forest mb-3">
              Liturgical Rhythm
            </h3>
            <p className="text-sm">
              Daily prayer, sacraments, and seasonal feasts integrated
              organically with learning and adventure.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-playfair text-forest mb-4">
          Stages of Development
        </h2>
        <p className="mb-4">
          Content coming soon: Detailed tables of book lists by developmental
          stage, with special emphasis on gymnasium adventures.
        </p>
      </div>
    </div>
  );
}
