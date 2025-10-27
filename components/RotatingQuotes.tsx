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
}

export default function RotatingQuotes({
  quotes,
  intervalMs = 6000,
  autoplay = true,
  className = '',
  quoteClassName = 'text-3xl md:text-5xl font-playfair italic text-white mb-6 leading-tight drop-shadow-lg',
  authorClassName = 'text-xl md:text-2xl text-parchment/90 not-italic font-lato',
}: Readonly<RotatingQuotesProps>) {
  const safeQuotes = useMemo(() => (quotes?.length ? quotes : []), [quotes]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!autoplay) return;
    if (safeQuotes.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % safeQuotes.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [safeQuotes.length, intervalMs, autoplay]);

  // When not autoplaying, pick a random quote on mount or when quotes change
  useEffect(() => {
    if (autoplay) return;
    if (safeQuotes.length <= 1) return;
    setIndex(Math.floor(Math.random() * safeQuotes.length));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [safeQuotes.length, autoplay]);

  if (!safeQuotes.length) return null;
  const current = safeQuotes[index];

  return (
    <div className={`transition-opacity duration-700 ${className}`} key={current.id}>
      <blockquote className="mb-12">
        <p className={quoteClassName}>&quot;{current.quote}&quot;</p>
        <cite className={authorClassName}>— {current.author}</cite>
      </blockquote>
    </div>
  );
}
