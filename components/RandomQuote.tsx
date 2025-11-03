"use client";

import { useEffect, useMemo, useState } from 'react';
import type { Quote } from '@/lib/types/content';
import QuoteCard from '@/components/QuoteCard';

type QuoteVariant = 'default' | 'hero' | 'scripture' | 'embedded';

interface RandomQuoteProps {
  quotes: Quote[];
  variant?: QuoteVariant;
  className?: string;
  /** Optional stable selector. If provided, picks deterministically (seed % quotes.length). */
  seed?: number;
  /** Optional fallback when quotes is empty */
  fallbackQuote?: { quote: string; author?: string; source?: string };
}

export default function RandomQuote({
  quotes,
  variant = 'default',
  className = '',
  seed,
  fallbackQuote,
}: Readonly<RandomQuoteProps>) {
  const safeQuotes = useMemo(() => (quotes?.length ? quotes : []), [quotes]);

  // If a seed is provided, compute deterministically without state/effect
  const seededIndex = useMemo(() => {
    if (seed == null || safeQuotes.length === 0) return null;
    const mod = Math.abs(seed) % safeQuotes.length;
    return mod;
  }, [seed, safeQuotes.length]);

  const [index, setIndex] = useState<number | null>(seededIndex);

  useEffect(() => {
    // When no seed, choose randomly once on mount/update
    if (seededIndex != null) return; // already determined
    if (safeQuotes.length === 0) return;
    if (safeQuotes.length === 1) {
      setIndex(0);
      return;
    }
    setIndex(Math.floor(Math.random() * safeQuotes.length));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [safeQuotes.length, seededIndex]);

  // Nothing to show and no fallback
  if ((index == null || safeQuotes.length === 0) && !fallbackQuote) return null;

  if (index == null || safeQuotes.length === 0) {
    const f = fallbackQuote!;
    return (
      <QuoteCard
        quote={f.quote}
        author={f.author}
        source={f.source}
        variant={variant}
        className={className}
      />
    );
  }

  const q = safeQuotes[index];
  return (
    <QuoteCard
      quote={q.quote}
      author={q.author}
      source={q.source}
      variant={variant}
      className={className}
    />
  );
}
