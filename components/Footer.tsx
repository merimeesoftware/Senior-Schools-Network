export default function Footer() {
  const scriptureWaypoints = [
    {
      verse: 'Proverbs 22:6',
      text: 'Train up a child in the way he should go',
    },
    {
      verse: 'Ephesians 6:4',
      text: 'Bring them up in the discipline and instruction of the Lord',
    },
    { verse: 'Matthew 11:28', text: 'Come to me... and I will refresh you' },
  ];

  return (
    <footer
      className="bg-forest text-parchment mt-auto border-t-4 border-gold"
      role="contentinfo"
    >
      <div className="section-container py-12">
        {/* Scripture Waypoints */}
        <div className="mb-8">
          <h2 className="text-xl font-playfair text-gold mb-6 text-center md:text-left">
            Scripture Waypoints
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {scriptureWaypoints.map((scripture) => (
              <div key={scripture.verse} className="text-sm">
                <p className="font-lato font-semibold text-gold-light mb-1">
                  {scripture.verse}
                </p>
                <p className="italic text-parchment-light">{scripture.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-forest-light pt-8 text-center text-sm font-lato text-parchment-light/80">
          <p>
            © {new Date().getFullYear()} Senior Schools Network. Promoting
            schools aligned with poetic knowledge and Catholic formation.
          </p>
        </div>
      </div>
    </footer>
  );
}
