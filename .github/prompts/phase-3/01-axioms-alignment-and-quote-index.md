---
title: Phase 3 Prompt 01 - Axioms Alignment and Quote Index
---

## Purpose

Align the application content with the philosophical axioms and consolidate the quote system to ensure every surfaced quote is sourced, complete, and thematically tagged.

## Required Context

- PHILOSOPHICAL-AXIOMS.md (axioms, canonical quotes, sources)
- public/texts/QUOTES.md (long-form quotes; if present)
- lib/types/content.ts (Quote type)
- lib/content/index.ts (content APIs)
- lib/content/quotes.ts (programmatic quotes index)
- .github/docs/current-phase.md (Phase 3 objectives)

## Prompt Loop

For each task, follow the loop:

1. Preflight: Review axioms and guardrails. Confirm Quote type and current usage points (QuoteCard, pages).
2. Implement: Make atomic edits; prefer programmatic data sources over inlining.
3. Validate: Run type checks and tests; render a page locally to confirm.
4. Document: Note changes in a short commit message.

## Tasks

- Audit PHILOSOPHICAL-AXIOMS.md for 8-12 quotes suitable for UI surfaces; ensure these match public/texts/QUOTES.md where applicable.
- Expand lib/content/quotes.ts with those quotes, including id, quote, author, optional source/stage/category/primaryFlow.
- Ensure getQuotesBySource() in lib/content/index.ts filters by source and falls back to listQuotes() for all.
- Verify components/QuoteCard.tsx displays full quotes (no paraphrases) and supports scripture variant.
- Replace any hardcoded quotes in pages with quotes from the index.

## Success Criteria

- All quotes shown on the site come from lib/content/quotes.ts.
- Each quote has author and, when applicable, source; scripture references use book:chapter:verse.
- No TODOs or lint warnings related to quotes.
- Jest tests pass and typecheck is clean.

## Hand-off

Proceed to Prompt 02 once quotes are consolidated and rendered correctly on at least one page.
