import Link from 'next/link';
import { ReactNode } from 'react';

interface CTAButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'hero-primary' | 'hero-outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
}

export default function CTAButton({
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  children,
  className = '',
  fullWidth = false,
}: Readonly<CTAButtonProps>) {
  const baseClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'btn-outline',
    'hero-primary': 'btn-hero-primary',
    'hero-outline': 'btn-hero-outline',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = `
    ${baseClasses[variant]}
    ${sizeClasses[size]}
    ${fullWidth ? 'w-full' : 'inline-block'}
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
    ${className}
  `.trim();

  if (href && !disabled) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classes}
      type="button"
    >
      {children}
    </button>
  );
}
