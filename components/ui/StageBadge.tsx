interface StageBadgeProps {
  stage: 'nursery' | 'gymnasium' | 'poetic' | 'spiritual';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  whiteText?: boolean;
}

export default function StageBadge({
  stage,
  size = 'md',
  className = '',
  whiteText = true, // Default to white text for better contrast
}: Readonly<StageBadgeProps>) {
  const stageConfig = {
    nursery: {
      label: 'Nursery (0-7)',
      bg: 'bg-nursery',
      text: 'text-nursery-dark',
      border: 'border-nursery-dark/50',
    },
    gymnasium: {
      label: 'Gymnasium (7-13)',
      bg: 'bg-gymnasium',
      text: 'text-gymnasium-dark',
      border: 'border-gymnasium-dark/50',
    },
    poetic: {
      label: 'Poetic (13-20)',
      bg: 'bg-poetic',
      text: 'text-poetic-dark',
      border: 'border-poetic-dark/50',
    },
    spiritual: {
      label: 'Spiritual (All Ages)',
      bg: 'bg-spiritual',
      text: 'text-spiritual-dark',
      border: 'border-spiritual-dark/50',
    },
  };

  const sizeClasses = {
    sm: 'text-xs px-2 py-1',
    md: 'text-sm px-3 py-1.5',
    lg: 'text-base px-4 py-2',
  };

  const config = stageConfig[stage];
  const textColor = whiteText ? 'text-white' : config.text;

  return (
    <span
      className={`
        inline-flex items-center
        ${config.bg} ${textColor}
        border ${config.border}
        ${sizeClasses[size]}
        rounded-organic
        font-lato font-semibold
        ${className}
      `.trim()}
    >
      {config.label}
    </span>
  );
}
