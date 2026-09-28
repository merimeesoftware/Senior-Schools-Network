import { existsSync } from 'fs';
import { join } from 'path';
import { getAssetsFromFolder, homeHeroLandscapeIds } from '@/lib/assets';

describe('home hero landscape shortlist', () => {
  it('returns only the curated plates, in shortlist order', () => {
    const assets = getAssetsFromFolder('landscapes', homeHeroLandscapeIds);

    expect(assets.map((asset) => asset.id)).toEqual([
      'monet-japanese-footbridge',
      'thomas-cole-niagara-falls',
    ]);
    expect(getAssetsFromFolder('landscapes').length).toBeGreaterThan(assets.length);

    for (const asset of assets) {
      expect(existsSync(join(process.cwd(), 'public', asset.src))).toBe(true);
    }
  });

  it('drops ids that are not in the folder', () => {
    const assets = getAssetsFromFolder('landscapes', [
      'monet-japanese-footbridge',
      'not-a-landscape',
    ]);

    expect(assets.map((asset) => asset.id)).toEqual(['monet-japanese-footbridge']);
  });
});
