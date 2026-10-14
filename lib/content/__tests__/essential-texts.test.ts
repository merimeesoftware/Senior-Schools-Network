import { getLivingEssentialTexts } from '../essential-texts';

describe('getLivingEssentialTexts', () => {
  it('lists living essential works and drops quote banks and missing doors', async () => {
    const texts = await getLivingEssentialTexts();
    const slugs = texts.map((text) => text.slug);

    expect(slugs).toEqual(
      expect.arrayContaining([
        'integrated_humanities_lecture',
        '1927-GK-Chesterton-The-Outline-of-Sanity',
        'Boethius-the-Consolation-of-Philosophy',
        'summa-1084-1088',
        'Mythopoeia',
        'The-Ballad-of-the-White-Horse',
        'The-Preventative-System',
        'other-textual-excerpts',
        'Essential-Texts-Reading-List',
        'the-restoration-of-innocence',
      ])
    );
    expect(slugs).not.toContain('PHILOSOPHICAL-AXIOMS');
    expect(slugs).not.toContain('QUOTES');
    expect(slugs).not.toContain('restoration-of-christian-culture');
    expect(slugs).not.toContain('poetic-knowledge-recovery-education');
    expect(new Set(slugs).size).toBe(slugs.length);

    const lecture = texts.find(
      (text) => text.slug === 'integrated_humanities_lecture'
    );
    expect(lecture?.title).toBe('Integrated Humanities Lecture');
    const myth = texts.find((text) => text.slug === 'Mythopoeia');
    expect(myth?.title).toBe('Mythopoeia');
    expect(myth?.author).toBe('J.R.R. Tolkien');
  });
});
