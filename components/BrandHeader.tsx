import Link from 'next/link';

interface BrandHeaderProps {
  variant?: 'default' | 'compact';
}

export default function BrandHeader({
  variant = 'default',
}: Readonly<BrandHeaderProps>) {
  if (variant === 'compact') {
    return (
      <div className="text-center py-8">
        <Link
          href="/"
          className="text-3xl font-playfair text-forest hover:text-forest-dark transition-colors focus-visible-ring rounded"
        >
          Senior Schools Network
        </Link>
      </div>
    );
  }

  return (
    <div className="text-center py-12 md:py-16">
      <Link
        href="/"
        className="inline-block group focus-visible-ring rounded-lg p-2"
      >
        <h1 className="text-4xl md:text-5xl font-playfair text-forest group-hover:text-forest-dark transition-colors mb-2">
          Senior Schools Network
        </h1>
        <p className="text-sm md:text-base font-lato text-charcoal/70 italic">
          Promoting schools aligned with poetic knowledge and Catholic formation
        </p>
      </Link>
    </div>
  );
}
