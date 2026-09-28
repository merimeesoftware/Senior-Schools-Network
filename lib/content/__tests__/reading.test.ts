import { stripRestatedTitle } from '../reading';

describe('stripRestatedTitle', () => {
  it('drops a leading H1 that restates the title and a matching author line', () => {
    // Mythopoeia shape: caps H1 + italic author line, both duplicating meta.
    const content = [
      '# MYTHOPOEIA',
      '',
      '_J.R.R. Tolkien_',
      '',
      "_To one who said that myths were lies and therefore worthless, even though 'breathed through silver'._",
      '',
      '**Philomythus to Misomythus**',
    ].join('\n');

    const result = stripRestatedTitle(content, {
      title: 'Mythopoeia',
      author: 'J.R.R. Tolkien',
    });

    expect(result).not.toContain('# MYTHOPOEIA');
    expect(result).not.toContain('_J.R.R. Tolkien_');
    expect(result).toContain('myths were lies');
    expect(result).toContain('**Philomythus to Misomythus**');
  });

  it('drops an H1 that contains the title alongside extra words', () => {
    // the-restoration-of-innocence shape: author name inside the H1.
    const content = [
      '# DR. JOHN SENIOR The Restoration of Innocence',
      '',
      '_An Idea of a School_',
      '',
      '### Contents',
    ].join('\n');

    const result = stripRestatedTitle(content, {
      title: 'The Restoration Of Innocence',
    });

    expect(result).not.toContain('DR. JOHN SENIOR');
    // Subtitle is not an author line and meta has no author: it stays.
    expect(result).toContain('_An Idea of a School_');
    expect(result).toContain('### Contents');
  });

  it('keeps a following "By …" line when meta has no author to duplicate', () => {
    const content = [
      '# THE BALLAD OF THE WHITE HORSE',
      '',
      'By G.K. Chesterton',
    ].join('\n');

    const result = stripRestatedTitle(content, {
      title: 'The Ballad Of The White Horse',
    });

    expect(result).not.toContain('# THE BALLAD OF THE WHITE HORSE');
    expect(result).toContain('By G.K. Chesterton');
  });

  it('keeps a leading H1 that is not the place-name', () => {
    // Boethius shape: Project Gutenberg header is content, not the chamber name.
    const content = [
      '# The Project Gutenberg eBook of The Consolation of Philosophy',
      '',
      'This ebook is for the use of anyone anywhere.',
    ].join('\n');

    const result = stripRestatedTitle(content, {
      title: 'Boethius The Consolation Of Philosophy',
    });

    expect(result).toContain('# The Project Gutenberg eBook');
  });

  it('keeps a leading H1 unrelated to the title', () => {
    const content = [
      '# Index of Textual Excerpts',
      '',
      '- [link](#anchor)',
    ].join('\n');

    const result = stripRestatedTitle(content, {
      title: 'Other Textual Excerpts',
    });

    expect(result).toContain('# Index of Textual Excerpts');
  });

  it('does nothing when the body does not open with an H1', () => {
    const content = [
      '## Scripture Passages Aligned with Core Philosophy',
      '',
      'Text.',
    ].join('\n');

    const result = stripRestatedTitle(content, {
      title: 'Scripture and Quote Collection',
    });

    expect(result).toBe(content);
  });

  it('does not strip an author line that merely contains the author name', () => {
    const content = [
      '# Mythopoeia',
      '',
      '_J.R.R. Tolkien wrote this poem in 1931 to defend myth-making._',
    ].join('\n');

    const result = stripRestatedTitle(content, {
      title: 'Mythopoeia',
      author: 'J.R.R. Tolkien',
    });

    expect(result).not.toContain('# Mythopoeia');
    expect(result).toContain('wrote this poem in 1931');
  });

  it('returns the content untouched when the title is blank', () => {
    const content = '# Anything';
    expect(stripRestatedTitle(content, { title: '' })).toBe(content);
  });
});
