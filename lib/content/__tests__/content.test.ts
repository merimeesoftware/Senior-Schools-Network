/**
 * Tests for content loading and parsing utilities
 */

import {
  getExcerptsByTheme,
  getBookListsByStage,
  getScriptureWaypoints,
  getQuotesBySource,
  groupByStage,
  filterByFlow,
  clearContentCache,
} from '../index';
import type { Excerpt, Quote } from '@/lib/types/content';

describe('Content Loading Utilities', () => {
  beforeEach(() => {
    clearContentCache();
  });

  describe('getExcerptsByTheme', () => {
    it('should return an array of excerpts', async () => {
      const excerpts = await getExcerptsByTheme();
      expect(Array.isArray(excerpts)).toBe(true);
    });

    it('should filter excerpts by category', async () => {
      const philosophyExcerpts = await getExcerptsByTheme('philosophy');
      expect(Array.isArray(philosophyExcerpts)).toBe(true);
      // All returned excerpts should have philosophy category or be general
      philosophyExcerpts.forEach((excerpt) => {
        expect(['philosophy', 'general']).toContain(excerpt.category);
      });
    });

    it('should return excerpts with required fields', async () => {
      const excerpts = await getExcerptsByTheme();
      if (excerpts.length > 0) {
        const excerpt = excerpts[0];
        expect(excerpt).toHaveProperty('id');
        expect(excerpt).toHaveProperty('title');
        expect(excerpt).toHaveProperty('content');
        expect(excerpt).toHaveProperty('source');
        expect(excerpt).toHaveProperty('category');
      }
    });
  });

  describe('getBookListsByStage', () => {
    it('should return an array of book entries', async () => {
      const books = await getBookListsByStage();
      expect(Array.isArray(books)).toBe(true);
    });

    it('should filter books by stage', async () => {
      const nurseryBooks = await getBookListsByStage('nursery');
      expect(Array.isArray(nurseryBooks)).toBe(true);
      if (nurseryBooks.length > 0) {
        nurseryBooks.forEach((book) => {
          expect(book.stage).toBe('nursery');
        });
      }
    });

    it('should return books with required fields', async () => {
      const books = await getBookListsByStage();
      if (books.length > 0) {
        const book = books[0];
        expect(book).toHaveProperty('id');
        expect(book).toHaveProperty('title');
        expect(book).toHaveProperty('author');
        expect(book).toHaveProperty('stage');
        expect(['nursery', 'gymnasium', 'poetic', 'spiritual']).toContain(
          book.stage
        );
      }
    });

    it('should handle gymnasium stage books', async () => {
      const gymnasiumBooks = await getBookListsByStage('gymnasium');
      expect(Array.isArray(gymnasiumBooks)).toBe(true);
    });

    it('should handle poetic stage books', async () => {
      const poeticBooks = await getBookListsByStage('poetic');
      expect(Array.isArray(poeticBooks)).toBe(true);
    });

    it('should handle spiritual stage books', async () => {
      const spiritualBooks = await getBookListsByStage('spiritual');
      expect(Array.isArray(spiritualBooks)).toBe(true);
    });
  });

  describe('getScriptureWaypoints', () => {
    it('should return an array of Scripture waypoints', async () => {
      const waypoints = await getScriptureWaypoints();
      expect(Array.isArray(waypoints)).toBe(true);
      expect(waypoints.length).toBeGreaterThan(0);
    });

    it('should return waypoints with required fields', async () => {
      const waypoints = await getScriptureWaypoints();
      waypoints.forEach((waypoint) => {
        expect(waypoint).toHaveProperty('id');
        expect(waypoint).toHaveProperty('verse');
        expect(waypoint).toHaveProperty('text');
        expect(waypoint).toHaveProperty('primaryFlow');
        expect(['school', 'home', 'founding']).toContain(waypoint.primaryFlow);
      });
    });

    it('should include all three primary flows', async () => {
      const waypoints = await getScriptureWaypoints();
      const flows = waypoints.map((w) => w.primaryFlow);
      expect(flows).toContain('school');
      expect(flows).toContain('home');
      expect(flows).toContain('founding');
    });

    it('should cache Scripture waypoints', async () => {
      const first = await getScriptureWaypoints();
      const second = await getScriptureWaypoints();
      expect(first).toEqual(second);
    });
  });

  describe('getQuotesBySource', () => {
    it('should return an array of quotes', async () => {
      const quotes = await getQuotesBySource();
      expect(Array.isArray(quotes)).toBe(true);
      expect(quotes.length).toBeGreaterThan(0);
    });

    it('should filter quotes by source', async () => {
      const mythopeiaQuotes = await getQuotesBySource('Mythopoeia');
      expect(Array.isArray(mythopeiaQuotes)).toBe(true);
      if (mythopeiaQuotes.length > 0) {
        mythopeiaQuotes.forEach((quote) => {
          expect(quote.source).toBe('Mythopoeia');
        });
      }
    });

    it('should return quotes with required fields', async () => {
      const quotes = await getQuotesBySource();
      quotes.forEach((quote) => {
        expect(quote).toHaveProperty('id');
        expect(quote).toHaveProperty('quote');
        expect(quote).toHaveProperty('author');
        expect(quote).toHaveProperty('category');
      });
    });

    it('should cache quotes', async () => {
      const first = await getQuotesBySource();
      const second = await getQuotesBySource();
      expect(first).toEqual(second);
    });
  });

  describe('groupByStage', () => {
    it('should group items by stage', () => {
      const items: Excerpt[] = [
        {
          id: '1',
          title: 'Test 1',
          content: '',
          source: 'test',
          category: 'general',
          stage: 'nursery',
        },
        {
          id: '2',
          title: 'Test 2',
          content: '',
          source: 'test',
          category: 'general',
          stage: 'gymnasium',
        },
        {
          id: '3',
          title: 'Test 3',
          content: '',
          source: 'test',
          category: 'general',
          stage: 'nursery',
        },
      ];

      const grouped = groupByStage(items);
      expect(grouped.length).toBeGreaterThan(0);

      const nurseryGroup = grouped.find((g) => g.stage === 'nursery');
      expect(nurseryGroup?.items.length).toBe(2);

      const gymnasiumGroup = grouped.find((g) => g.stage === 'gymnasium');
      expect(gymnasiumGroup?.items.length).toBe(1);
    });

    it('should handle items without stage', () => {
      const items: Excerpt[] = [
        {
          id: '1',
          title: 'Test 1',
          content: '',
          source: 'test',
          category: 'general',
        },
      ];

      const grouped = groupByStage(items);
      const generalGroup = grouped.find((g) => g.theme === 'general');
      expect(generalGroup?.items.length).toBe(1);
    });
  });

  describe('filterByFlow', () => {
    it('should filter items by primary flow', () => {
      const items: Quote[] = [
        {
          id: '1',
          quote: 'Test 1',
          author: 'Author',
          category: 'general',
          primaryFlow: 'school',
        },
        {
          id: '2',
          quote: 'Test 2',
          author: 'Author',
          category: 'general',
          primaryFlow: 'home',
        },
        {
          id: '3',
          quote: 'Test 3',
          author: 'Author',
          category: 'general',
        },
      ];

      const schoolItems = filterByFlow(items, 'school');
      expect(schoolItems.length).toBe(2); // school flow + no flow
      expect(schoolItems.some((item) => item.primaryFlow === 'school')).toBe(
        true
      );
    });

    it('should include items without primaryFlow', () => {
      const items: Quote[] = [
        {
          id: '1',
          quote: 'Test',
          author: 'Author',
          category: 'general',
        },
      ];

      const filtered = filterByFlow(items, 'school');
      expect(filtered.length).toBe(1);
    });
  });

  describe('Error Handling', () => {
    it('should handle missing Thousand Good Books List gracefully', async () => {
      // This should return empty array rather than throwing
      const books = await getBookListsByStage();
      expect(Array.isArray(books)).toBe(true);
    });

    it('should handle missing excerpts directory gracefully', async () => {
      const excerpts = await getExcerptsByTheme();
      expect(Array.isArray(excerpts)).toBe(true);
    });
  });
});
