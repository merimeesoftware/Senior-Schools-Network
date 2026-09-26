import type { Stage } from '@/lib/types/content';
import { STAGE_BADGE_LABELS } from '@/lib/content/stages';

interface StageBadgeProps {
  stage: Stage;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  whiteText?: boolean;
}

// Visible labels for each mode. Exported so interactive controls (e.g. filters)
// can build accessible names that contain the visible text (WCAG 2.5.3 Label in Name).
export const STAGE_LABELS: Record<Stage, string> = STAGE_BADGE_LABELS;

export default function StageBadge({
  stage,
  size = 'md',
  className = '',
  whiteText = true, // Default to white text for better contrast
}: Readonly<StageBadgeProps>) {
  const stageConfig = {
    musical: {
      label: STAGE_LABELS.musical,
      bg: 'bg-musical',
      text: 'text-musical-dark',
      border: 'border-musical-dark/50',
    },
    gymnastic: {
      label: STAGE_LABELS.gymnastic,
      bg: 'bg-gymnastic',
      text: 'text-gymnastic-dark',
      border: 'border-gymnastic-dark/50',
    },
    poetic: {
      label: STAGE_LABELS.poetic,
      bg: 'bg-poetic',
      text: 'text-poetic-dark',
      border: 'border-poetic-dark/50',
    },
    romantic: {
      label: STAGE_LABELS.romantic,
      bg: 'bg-romantic',
      text: 'text-romantic-dark',
      border: 'border-romantic-dark/50',
    },
    virtuous: {
      label: STAGE_LABELS.virtuous,
      bg: 'bg-virtuous',
      text: 'text-virtuous-dark',
      border: 'border-virtuous-dark/50',
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
