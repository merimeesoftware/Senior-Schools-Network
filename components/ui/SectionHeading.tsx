import { ReactNode } from 'react';

interface SectionHeadingProps {
  level?: 1 | 2 | 3;
  children: ReactNode;
  align?: 'left' | 'center' | 'right';
  className?: string;
  decorated?: boolean;
}

export default function SectionHeading({
  level = 2,
  children,
  align = 'left',
  className = '',
  decorated = false,
}: Readonly<SectionHeadingProps>) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  const sizeClasses = {
    1: 'text-4xl md:text-5xl mb-6',
    2: 'text-3xl md:text-4xl mb-5',
    3: 'text-2xl md:text-3xl mb-4',
  };

  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <Tag
      className={`font-playfair text-forest ${sizeClasses[level]} ${alignClasses[align]} ${className}`}
    >
      {decorated && align === 'center' && (
        <span className="block text-gold text-lg mb-2">✦</span>
      )}
      {children}
      {decorated && align === 'center' && (
        <span className="block text-gold text-lg mt-2">✦</span>
      )}
    </Tag>
  );
}
