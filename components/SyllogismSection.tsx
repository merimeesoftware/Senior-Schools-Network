import { ReactNode } from 'react';
import ContentContainer from './ContentContainer';

interface SyllogismSectionProps {
  type: 'major' | 'minor' | 'conclusion';
  title: string;
  subtitle?: string;
  number?: string;
  children: ReactNode;
  bgColor?: string;
  borderColor?: string;
  id?: string;
  className?: string;
}

export default function SyllogismSection({
  type,
  title,
  subtitle,
  number,
  children,
  bgColor = 'bg-white',
  borderColor,
  id,
  className = '',
}: Readonly<SyllogismSectionProps>) {
  // Determine defaults based on type
  const defaultBorders = {
    major: 'border-poetic/30',
    minor: 'border-forest/30',
    conclusion: 'border-gold/60',
  };

  const defaultNumbers = {
    major: 'I',
    minor: 'II',
    conclusion: '∴',
  };

  const border = borderColor || defaultBorders[type];
  const displayNumber = number || defaultNumbers[type];
  const titleId = id ? `${id}-title` : `${type}-premise-title`;

  return (
    <section
      id={id}
      aria-labelledby={titleId}
      className={`relative py-20 ${bgColor} ${className}`}
    >
      <ContentContainer width="wide">
        <div className="relative">
          {/* Desktop: Large decorative numeral */}
          <div
            className="hidden lg:block absolute -left-16 xl:-left-20 top-0 text-7xl xl:text-8xl font-playfair text-forest/20 select-none"
            aria-hidden="true"
          >
            {displayNumber}
          </div>

          {/* Main content with left border accent */}
          <div className={`border-l-8 ${border} pl-8 md:pl-12`}>
            {/* Title */}
            <h2
              id={titleId}
              className="text-4xl md:text-5xl font-playfair text-forest mb-4"
            >
              {title}
            </h2>

            {/* Optional subtitle */}
            {subtitle && (
              <h3 className="text-xl md:text-2xl text-charcoal/70 mb-12 font-lato">
                {subtitle}
              </h3>
            )}

            {/* Section content */}
            <div className="space-y-12">{children}</div>
          </div>
        </div>
      </ContentContainer>
    </section>
  );
}
