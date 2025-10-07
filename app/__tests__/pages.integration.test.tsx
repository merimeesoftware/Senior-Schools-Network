import React from 'react';
import { getScriptureWaypoints } from '@/lib/content';

// Mock Next.js components
jest.mock('next/link', () => {
  const MockLink = ({ children, href }: { children: React.ReactNode; href: string }) => {
    return <a href={href}>{children}</a>;
  };
  MockLink.displayName = 'MockLink';
  return MockLink;
});

jest.mock('next/navigation', () => ({
  usePathname: () => '/',
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
  }),
  useSearchParams: () => ({
    get: () => null,
  }),
}));

describe('Page Integration Tests - StoryBrand Scripture Waypoints', () => {
  describe('Scripture Waypoint Data', () => {
    it('should load scripture waypoints from content', async () => {
      const waypoints = await getScriptureWaypoints();
      
      expect(waypoints).toBeDefined();
      expect(Array.isArray(waypoints)).toBe(true);
      expect(waypoints.length).toBeGreaterThan(0);
    });

    it('should include Ephesians 6:4 waypoint for schools flow', async () => {
      const waypoints = await getScriptureWaypoints();
      const ephesians = waypoints.find((w) => w.id === 'ephesians-6-4');
      
      expect(ephesians).toBeDefined();
      expect(ephesians?.verse).toContain('Ephesians 6:4');
      expect(ephesians?.text).toBeTruthy();
    });

    it('should include Proverbs 22:6 waypoint for home-application flow', async () => {
      const waypoints = await getScriptureWaypoints();
      const proverbs = waypoints.find((w) => w.id === 'proverbs-22-6');
      
      expect(proverbs).toBeDefined();
      expect(proverbs?.verse).toContain('Proverbs 22:6');
      expect(proverbs?.text).toBeTruthy();
    });

    it('should include Matthew 11:28 waypoint for join-found flow', async () => {
      const waypoints = await getScriptureWaypoints();
      const matthew = waypoints.find((w) => w.id === 'matthew-11-28');
      
      expect(matthew).toBeDefined();
      expect(matthew?.verse).toContain('Matthew 11:28');
      expect(matthew?.text).toBeTruthy();
    });
  });

  describe('Three-Flow System Verification', () => {
    it('should have distinct waypoints for each StoryBrand flow', async () => {
      const waypoints = await getScriptureWaypoints();
      
      const ephesians = waypoints.find((w) => w.id === 'ephesians-6-4');
      const proverbs = waypoints.find((w) => w.id === 'proverbs-22-6');
      const matthew = waypoints.find((w) => w.id === 'matthew-11-28');
      
      // All three flows should have distinct scripture waypoints
      expect(ephesians).toBeDefined();
      expect(proverbs).toBeDefined();
      expect(matthew).toBeDefined();
      
      // Verses should be unique
      const verses = [ephesians?.verse, proverbs?.verse, matthew?.verse];
      const uniqueVerses = new Set(verses);
      expect(uniqueVerses.size).toBe(3);
    });

    it('should have meaningful content for each waypoint', async () => {
      const waypoints = await getScriptureWaypoints();
      
      const flowWaypoints = waypoints.filter((w) => 
        ['ephesians-6-4', 'proverbs-22-6', 'matthew-11-28'].includes(w.id)
      );
      
      flowWaypoints.forEach((waypoint) => {
        expect(waypoint.text.length).toBeGreaterThan(20);
        expect(waypoint.verse.length).toBeGreaterThan(5);
        expect(waypoint.primaryFlow).toBeTruthy();
      });
    });
  });

  describe('Content Integration', () => {
    it('should have consistent waypoint structure', async () => {
      const waypoints = await getScriptureWaypoints();
      
      waypoints.forEach((waypoint) => {
        expect(waypoint).toHaveProperty('id');
        expect(waypoint).toHaveProperty('verse');
        expect(waypoint).toHaveProperty('text');
        expect(waypoint).toHaveProperty('primaryFlow');
        
        expect(typeof waypoint.id).toBe('string');
        expect(typeof waypoint.verse).toBe('string');
        expect(typeof waypoint.text).toBe('string');
        expect(typeof waypoint.primaryFlow).toBe('string');
      });
    });

    it('should associate waypoints with appropriate primary flows', async () => {
      const waypoints = await getScriptureWaypoints();
      
      const ephesians = waypoints.find((w) => w.id === 'ephesians-6-4');
      const proverbs = waypoints.find((w) => w.id === 'proverbs-22-6');
      const matthew = waypoints.find((w) => w.id === 'matthew-11-28');
      
      // Ephesians 6:4 - school/discipline flow
      expect(ephesians?.primaryFlow).toBe('school');
      
      // Proverbs 22:6 - home education flow  
      expect(proverbs?.primaryFlow).toBe('home');
      
      // Matthew 11:28 - founding/spiritual formation flow
      expect(matthew?.primaryFlow).toBe('founding');
    });
  });
});
