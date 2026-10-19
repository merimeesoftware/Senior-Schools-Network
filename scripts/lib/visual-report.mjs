/**
 * summary.md and results.json for a Minicon review paste.
 * A missing comp is listed under "No comp" and is never a pass.
 */

function cell(value) {
  return String(value ?? '')
    .replace(/\|/g, '\\|')
    .replace(/\n/g, ' ');
}

export function describeChecks(shot) {
  const problems = [];
  if (!shot.httpOk) {
    const got = shot.http == null ? 'none' : shot.http;
    problems.push(`FAIL HTTP ${got}, expected ${shot.expect}`);
  }
  if (!shot.placeholderOk) {
    const where = shot.placeholders
      .map((finding) => `${finding.hit} in ${finding.surface}`)
      .join(', ');
    problems.push(`FAIL placeholder ${where}`);
  }
  if (shot.offOrigin) {
    problems.push('FAIL off-origin navigation');
  }
  if (shot.captureError) {
    problems.push(`FAIL capture ${shot.captureError}`);
  }
  if (!shot.file) {
    problems.push('FAIL still missing');
  }
  return problems.length === 0 ? 'ok' : problems.join('; ');
}

export function buildReport({
  sha,
  sha7,
  target,
  shots,
  generatedAt,
  exitCode,
  setupError,
}) {
  for (const shot of shots) {
    if (shot.comp === 'pass') {
      throw new Error(
        'a skipped or compared comp must not be recorded as pass'
      );
    }
  }

  const hardFailed = shots.filter((shot) => !shot.hardOk);
  const noComp = shots.filter((shot) => shot.comp === 'no-comp');
  const lines = [];
  lines.push('# Stills check');
  lines.push('');
  lines.push(`- Commit: \`${sha7}\` (\`${sha}\`)`);
  lines.push(`- Target: ${target}`);
  lines.push(`- Generated: ${generatedAt}`);
  if (setupError) {
    lines.push(`- Result: setup failed (${setupError})`);
  } else if (hardFailed.length === 0) {
    lines.push('- Result: hard checks ok');
  } else {
    lines.push(`- Result: hard checks failed (${hardFailed.length})`);
  }
  lines.push('');
  lines.push('## Failures');
  lines.push('');
  if (setupError) {
    lines.push(`- ${setupError}`);
  } else if (hardFailed.length === 0) {
    lines.push('None.');
  } else {
    for (const shot of hardFailed) {
      lines.push(
        `- \`${shot.path}\` ${shot.viewport}: ${describeChecks(shot)}`
      );
    }
  }
  lines.push('');
  lines.push('## Route × viewport');
  lines.push('');
  lines.push('| Route | Viewport | HTTP | Checks | Comp | File |');
  lines.push('| --- | --- | --- | --- | --- | --- |');
  for (const shot of shots) {
    const compCell =
      shot.comp === 'side-by-side'
        ? `side-by-side (${shot.sideBySide})`
        : 'no comp';
    const fileCell = shot.file
      ? `[${shot.file}](${shot.file})${shot.note ? ` (${cell(shot.note)})` : ''}`
      : '';
    lines.push(
      `| \`${cell(shot.path)}\` | ${cell(shot.viewport)} | ${cell(shot.http)} | ${cell(describeChecks(shot))} | ${cell(compCell)} | ${fileCell} |`
    );
  }
  lines.push('');
  lines.push('## No comp');
  lines.push('');
  lines.push(
    'A missing comp is not a pass. Every skipped target is named here.'
  );
  lines.push('');
  if (noComp.length === 0) {
    lines.push('None.');
  } else {
    lines.push('| Route | Viewport | Comp looked for |');
    lines.push('| --- | --- | --- |');
    for (const shot of noComp) {
      lines.push(
        `| \`${cell(shot.path)}\` (\`${cell(shot.key)}\`) | ${cell(shot.viewport)} | \`${cell(shot.compLookedFor)}\` |`
      );
    }
  }
  lines.push('');

  const results = {
    sha,
    sha7,
    target,
    generatedAt,
    exitCode,
    setupError: setupError || null,
    hardOk: !setupError && hardFailed.length === 0,
    shots,
    noComp: noComp.map((shot) => ({
      key: shot.key,
      path: shot.path,
      viewport: shot.viewport,
      lookedFor: shot.compLookedFor,
    })),
  };

  return { markdown: lines.join('\n'), results };
}
