'use client';
import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import QuoteCard from './QuoteCard';
import OptimizedImage from '../media/OptimizedImage';
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
  collapsible?: boolean;
}

export default function ProblemSolutionPanel({
  problem,
  solution,
  layout = 'split',
  defaultView = 'problem',
  className = '',
  collapsible = false,
}: Readonly<ProblemSolutionPanelProps>) {
  const [activeView, setActiveView] = useState<'problem' | 'solution'>(defaultView);
  const [isProblemExpanded, setIsProblemExpanded] = useState(false);
  const [isSolutionExpanded, setIsSolutionExpanded] = useState(false);

  // Collapsible accordion mode
  if (collapsible) {
    return (
      <div className={`space-y-6 ${className}`}>
        {/* Problem Accordion */}
        <div className="bg-red-50/50 rounded-lg overflow-hidden">
          <button
            onClick={() => setIsProblemExpanded(!isProblemExpanded)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setIsProblemExpanded(!isProblemExpanded);
              }
            }}
            aria-expanded={isProblemExpanded}
            className="w-full flex items-center justify-between p-6 text-left hover:bg-red-100/50 transition-colors focus:outline-none focus:ring-2 focus:ring-red-700/50 focus:ring-inset"
          >
            <h4 className="text-2xl font-playfair font-bold text-red-900">
              {problem.title}
            </h4>
            {isProblemExpanded ? (
              <ChevronUpIcon className="w-6 h-6 text-red-700 flex-shrink-0 ml-4" />
            ) : (
              <ChevronDownIcon className="w-6 h-6 text-red-700 flex-shrink-0 ml-4" />
            )}
          </button>

          {isProblemExpanded && (
            <div className="px-6 pb-6 space-y-6 animate-fadeIn">
              {/* Optional Image */}
              {problem.image && (
                <div className="relative aspect-video rounded-md overflow-hidden">
                  <OptimizedImage
                    asset={problem.image}
                    alt={problem.title}
                    fill={true}
                    objectFit="cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="grayscale-[70%] brightness-90"
                  />
                </div>
              )}

              {/* Description */}
              <p className="text-lg leading-relaxed text-charcoal/80">
                {problem.description}
              </p>

              {/* Quote */}
              <QuoteCard
                quote={problem.quote.quote}
                author={problem.quote.author}
                source={problem.quote.source}
                variant="embedded"
                className="opacity-80"
              />
            </div>
          )}
        </div>

        {/* Solution Accordion */}
        <div className="bg-green-50/50 rounded-lg overflow-hidden">
          <button
            onClick={() => setIsSolutionExpanded(!isSolutionExpanded)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setIsSolutionExpanded(!isSolutionExpanded);
              }
            }}
            aria-expanded={isSolutionExpanded}
            className="w-full flex items-center justify-between p-6 text-left hover:bg-green-100/50 transition-colors focus:outline-none focus:ring-2 focus:ring-green-700/50 focus:ring-inset"
          >
            <h4 className="text-2xl font-playfair font-bold text-green-900">
              {solution.title}
            </h4>
            {isSolutionExpanded ? (
              <ChevronUpIcon className="w-6 h-6 text-green-700 flex-shrink-0 ml-4" />
            ) : (
              <ChevronDownIcon className="w-6 h-6 text-green-700 flex-shrink-0 ml-4" />
            )}
          </button>

          {isSolutionExpanded && (
            <div className="px-6 pb-6 space-y-6 animate-fadeIn">
              {/* Optional Image */}
              {solution.image && (
                <div className="relative aspect-video rounded-md overflow-hidden">
                  <OptimizedImage
                    asset={solution.image}
                    alt={solution.title}
                    fill={true}
                    objectFit="cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              )}

              {/* Description */}
              <p className="text-lg leading-relaxed text-charcoal/90">
                {solution.description}
              </p>

              {/* Quote */}
              <QuoteCard
                quote={solution.quote.quote}
                author={solution.quote.author}
                source={solution.quote.source}
                variant="embedded"
              />
            </div>
          )}
        </div>
      </div>
    );
  }

  // Toggle mode
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
