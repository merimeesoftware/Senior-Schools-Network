interface StageBadgeProps {
  stage: 'nursery' | 'gymnasium' | 'poetic' | 'spiritual';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  whiteText?: boolean;
}

// Visible labels for each stage. Exported so interactive controls (e.g. filters)
// can build accessible names that contain the visible text (WCAG 2.5.3 Label in Name).
export const STAGE_LABELS: Record<StageBadgeProps['stage'], string> = {
  nursery: 'Nursery (0-7)',
  gymnasium: 'Gymnasium (7-13)',
  poetic: 'Poetic (13-20)',
  spiritual: 'Spiritual (All Ages)',
};

export default function StageBadge({
  stage,
  size = 'md',
  className = '',
  whiteText = true, // Default to white text for better contrast
}: Readonly<StageBadgeProps>) {
  const stageConfig = {
    nursery: {
      label: STAGE_LABELS.nursery,
      bg: 'bg-nursery',
      text: 'text-nursery-dark',
      border: 'border-nursery-dark/50',
    },
    gymnasium: {
      label: STAGE_LABELS.gymnasium,
      bg: 'bg-gymnasium',
      text: 'text-gymnasium-dark',
      border: 'border-gymnasium-dark/50',
    },
    poetic: {
      label: STAGE_LABELS.poetic,
      bg: 'bg-poetic',
      text: 'text-poetic-dark',
      border: 'border-poetic-dark/50',
    },
    spiritual: {
      label: STAGE_LABELS.spiritual,
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
