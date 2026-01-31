import { ReactNode } from 'react';

interface ContentContainerProps {
  children: ReactNode;
  width?: 'narrow' | 'normal' | 'wide' | 'full';
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export default function ContentContainer({
  children,
  width = 'normal',
  className = '',
  padding = 'md',
}: Readonly<ContentContainerProps>) {
  const widthClasses = {
    narrow: 'max-w-content',
    normal: 'max-w-prose',
    wide: 'max-w-5xl',
    full: 'max-w-7xl',
  };

  const paddingClasses = {
    none: '',
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16 md:py-20',
  };

  return (
    <div
      className={`${widthClasses[width]} mx-auto px-4 sm:px-6 lg:px-8 ${paddingClasses[padding]} ${className}`}
    >
      {children}
    </div>
  );
}
