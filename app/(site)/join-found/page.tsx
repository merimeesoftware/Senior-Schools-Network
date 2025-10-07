export default function JoinFoundPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-playfair text-forest mb-6">
        Join the Network / Found a School
      </h1>

      <div className="quote-block">
        <p className="text-xl">"Restore the gymnasium for warrior poets"</p>
      </div>

      <div className="prose max-w-none mt-8">
        <h2 className="text-2xl font-playfair text-forest mb-4">
          For Existing Schools
        </h2>
        <p className="text-lg leading-relaxed mb-6">
          If your school embodies John Senior's philosophy — poetic knowledge,
          wonder-based learning, physical discipline, and Catholic formation —
          we invite you to apply for affiliation with the Senior Schools
          Network.
        </p>

        <div className="card mb-12">
          <h3 className="text-xl font-playfair text-forest mb-3">
            Application Process
          </h3>
          <p className="text-sm mb-4">
            Details coming soon. The application will focus on your school's
            alignment with core principles, not prescriptive curricula.
          </p>
        </div>

        <h2 className="text-2xl font-playfair text-forest mb-4">
          For Aspiring Founders
        </h2>
        <p className="text-lg leading-relaxed mb-6">
          Do you recognize the gymnasium gap in modern education? Are you
          inspired to start a stage-specific school for boys (ages 7-13) or
          another aligned initiative? We offer informal guidance and connection
          to the network.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="card">
            <h3 className="text-xl font-playfair text-forest mb-3">
              Founder's Toolkit
            </h3>
            <p className="text-sm mb-4">
              Informal checklist and resources for launching a school — not a
              rigid curriculum, but inspiration from the network's experience.
            </p>
            <button className="btn-primary text-sm" disabled>
              Download (Coming Soon)
            </button>
          </div>

          <div className="card">
            <h3 className="text-xl font-playfair text-forest mb-3">
              Reach Out for Guidance
            </h3>
            <p className="text-sm mb-4">
              Connect with existing network schools and mentors for informal
              support in your founding journey.
            </p>
            <button className="btn-secondary text-sm" disabled>
              Contact (Coming Soon)
            </button>
          </div>
        </div>

        <div className="card bg-spiritual/10">
          <blockquote>
            <p className="text-lg font-playfair italic mb-2">
              "Come to me, all you that labor, and are burdened, and I will
              refresh you"
            </p>
            <footer className="text-sm font-lato text-charcoal/70">
              — Matthew 11:28
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
}
