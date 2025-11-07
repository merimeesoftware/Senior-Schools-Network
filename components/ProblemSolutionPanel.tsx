'use client';
import { useState } from 'react';
import QuoteCard from './QuoteCard';
import OptimizedImage from './OptimizedImage';
import type { Quote } from '@/lib/types/content';
import type { ImageAsset } from '@/lib/assets';

interface PanelContent {
  title: string;
  description: string;
  quote: Quote;
  image?: ImageAsset;
}

interface ProblemSolutionPanelProps {
  problem: PanelContent;
  solution: PanelContent;
  layout?: 'split' | 'toggle';
  defaultView?: 'problem' | 'solution';
  className?: string;
}

export default function ProblemSolutionPanel({
  problem,
  solution,
  layout = 'split',
  defaultView = 'problem',
  className = '',
}: Readonly<ProblemSolutionPanelProps>) {
  const [activeView, setActiveView] = useState<'problem' | 'solution'>(defaultView);

  if (layout === 'toggle') {
    return (
      <div className={`space-y-6 ${className}`}>
        {/* Toggle Button */}
        <div className="flex justify-center">
          <button
            onClick={() => setActiveView(activeView === 'problem' ? 'solution' : 'problem')}
            className="px-6 py-3 bg-forest text-parchment rounded-md hover:bg-forest/90 transition-colors font-lato text-lg focus-visible-ring"
            aria-label={activeView === 'problem' ? 'Show solution' : 'Show problem'}
          >
            {activeView === 'problem' ? '→ Show the Solution' : '← Show the Problem'}
          </button>
        </div>

        {/* Active Panel */}
        <div
          className="transition-opacity duration-500"
          key={activeView}
        >
          {activeView === 'problem' ? (
            <PanelContent data={problem} type="problem" />
          ) : (
            <PanelContent data={solution} type="solution" />
          )}
        </div>
      </div>
    );
  }

  // Split view mode
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${className}`}>
      <PanelContent data={problem} type="problem" />
      <PanelContent data={solution} type="solution" />
    </div>
  );
}

// Internal component for rendering panel content
function PanelContent({
  data,
  type,
}: Readonly<{
  data: PanelContent;
  type: 'problem' | 'solution';
}>) {
  const isProblem = type === 'problem';

  return (
    <div
      className={`
        p-8 rounded-lg space-y-6
        ${isProblem ? 'problem-panel' : 'solution-panel'}
      `}
    >
      {/* Optional Image */}
      {data.image && (
        <div className="relative aspect-video rounded-md overflow-hidden mb-6">
          <OptimizedImage
            asset={data.image}
            alt={data.title}
            fill={true}
            objectFit="cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            className={isProblem ? 'grayscale-[70%] brightness-90' : ''}
          />
        </div>
      )}

      {/* Title */}
      <h4
        className={`text-2xl font-playfair ${
          isProblem ? 'text-charcoal' : 'text-forest'
        }`}
      >
        {data.title}
      </h4>

      {/* Description */}
      <p
        className={`text-lg leading-relaxed ${
          isProblem ? 'text-charcoal/80' : 'text-charcoal/90'
        }`}
      >
        {data.description}
      </p>

      {/* Evidence Quote */}
      <div className="mt-6">
        <QuoteCard
          quote={data.quote.quote}
          author={data.quote.author}
          source={data.quote.source}
          variant="embedded"
          className={isProblem ? 'opacity-80' : ''}
        />
      </div>
    </div>
  );
}
