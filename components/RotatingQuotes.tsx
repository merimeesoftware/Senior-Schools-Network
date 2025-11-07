"use client";

import { useEffect, useMemo, useState } from 'react';
import type { Quote } from '@/lib/types/content';

interface RotatingQuotesProps {
  quotes: Quote[];
  intervalMs?: number;
  autoplay?: boolean;
  className?: string;
  quoteClassName?: string;
  authorClassName?: string;
  showRefreshButton?: boolean;
  onRefresh?: () => void;
}

export default function RotatingQuotes({
  quotes,
  intervalMs = 6000,
  autoplay = true,
  className = '',
  quoteClassName = 'text-3xl md:text-5xl font-playfair italic text-white mb-6 leading-tight drop-shadow-lg',
  authorClassName = 'text-xl md:text-2xl text-parchment/90 not-italic font-lato',
  showRefreshButton = false,
  onRefresh,
}: Readonly<RotatingQuotesProps>) {
  const safeQuotes = useMemo(() => (quotes?.length ? quotes : []), [quotes]);
  const [shuffledQuotes, setShuffledQuotes] = useState<Quote[]>([]);
  const [index, setIndex] = useState(0);

  // Shuffle quotes on client-side mount only (prevents hydration mismatch)
  useEffect(() => {
    if (!safeQuotes.length) return;
    const shuffled = [...safeQuotes];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setShuffledQuotes(shuffled);
  }, [safeQuotes]);

  const displayQuotes = shuffledQuotes.length > 0 ? shuffledQuotes : safeQuotes;

  useEffect(() => {
    if (!autoplay) return;
    if (displayQuotes.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % displayQuotes.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [displayQuotes.length, intervalMs, autoplay]);

  const handleManualRefresh = () => {
    setIndex((i) => (i + 1) % displayQuotes.length);
    onRefresh?.();
  };

  if (!displayQuotes.length) return null;
  const current = displayQuotes[index];

  return (
    <div className={`transition-opacity duration-700 ${className}`} key={current.id}>
      <blockquote className="mb-12">
        <p className={quoteClassName}>
          &quot;{current.quote.split('\n').map((line, i, arr) => (
            <span key={i}>
              {line}
              {i < arr.length - 1 && <br />}
            </span>
          ))}&quot;
        </p>
        <cite className={authorClassName}>— {current.author}</cite>
      </blockquote>
      {showRefreshButton && (
        <button
          onClick={handleManualRefresh}
          className="mt-4 group flex items-center gap-2 mx-auto text-gold/80 hover:text-gold transition-colors focus-visible-ring rounded-full p-2"
          aria-label="New Inspiration"
        >
          <svg
            className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
