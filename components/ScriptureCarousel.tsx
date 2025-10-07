'use client';

import { useState, useEffect, useRef } from 'react';
import type { ScriptureWaypoint } from '@/lib/types/content';

interface ScriptureCarouselProps {
  waypoints: ScriptureWaypoint[];
  autoplayInterval?: number;
}

export default function ScriptureCarousel({
  waypoints,
  autoplayInterval = 5000,
}: ScriptureCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Auto-advance carousel
  useEffect(() => {
    if (isPaused || prefersReducedMotion) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      return;
    }

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % waypoints.length);
    }, autoplayInterval);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, waypoints.length, autoplayInterval, prefersReducedMotion]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + waypoints.length) % waypoints.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % waypoints.length);
  };

  const currentWaypoint = waypoints[currentIndex];

  return (
    <div className="bg-spiritual/10 py-8 px-6 rounded-organic">
      <div className="max-w-3xl mx-auto">
        {/* Scripture Text */}
        <div className="text-center mb-6">
          <blockquote
            className="text-body-lg italic font-playfair text-forest mb-4"
            aria-live="polite"
            aria-atomic="true"
          >
            "{currentWaypoint.text}"
          </blockquote>
          <cite className="text-body-sm font-lato text-charcoal/70">
            — {currentWaypoint.verse}
          </cite>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={goToPrevious}
            className="p-2 rounded-organic bg-parchment hover:bg-gold/20 transition-colors focus-visible-ring"
            aria-label="Previous scripture"
          >
            <svg
              className="w-5 h-5 text-forest"
              fill="none"
              strokeWidth={2}
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Pause/Play */}
          {!prefersReducedMotion && (
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="p-2 rounded-organic bg-parchment hover:bg-gold/20 transition-colors focus-visible-ring"
              aria-label={isPaused ? 'Resume autoplay' : 'Pause autoplay'}
            >
              {isPaused ? (
                <svg
                  className="w-5 h-5 text-forest"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 text-forest"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                </svg>
              )}
            </button>
          )}

          <button
            onClick={goToNext}
            className="p-2 rounded-organic bg-parchment hover:bg-gold/20 transition-colors focus-visible-ring"
            aria-label="Next scripture"
          >
            <svg
              className="w-5 h-5 text-forest"
              fill="none"
              strokeWidth={2}
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-6" role="tablist" aria-label="Scripture waypoints">
          {waypoints.map((waypoint, index) => (
            <button
              key={waypoint.id}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all focus-visible-ring ${
                index === currentIndex
                  ? 'bg-gold w-8'
                  : 'bg-charcoal/30 hover:bg-charcoal/50'
              }`}
              aria-label={`View ${waypoint.verse}`}
              aria-selected={index === currentIndex}
              role="tab"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
