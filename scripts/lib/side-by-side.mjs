/**
 * Labeled side-by-side of a Dean comp and a build still.
 * Ported from marriages-of-grace `sideBySide`, without pixel deltas.
 */

import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const sharp = require('sharp');

function xml(text) {
  return String(text).replace(/[&<>]/g, (char) => {
    if (char === '&') return '&amp;';
    if (char === '<') return '&lt;';
    return '&gt;';
  });
}

export async function writeSideBySide({ compPath, shotPath, dest, sha7 }) {
  const compMeta = await sharp(compPath).metadata();
  const shotMeta = await sharp(shotPath).metadata();
  const leftW = compMeta.width || 1;
  const rightW = shotMeta.width || 1;
  const leftH = compMeta.height || 1;
  const rightH = shotMeta.height || 1;
  const gap = 24;
  const pad = 16;
  const header = 48;
  const bodyH = Math.max(leftH, rightH);
  const width = pad + leftW + gap + rightW + pad;
  const height = header + bodyH + pad;
  const rightX = pad + leftW + gap;

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
  <rect width="100%" height="100%" fill="#f4f1ea"/>
  <text x="${pad}" y="30" font-family="DejaVu Sans, sans-serif" font-size="18" fill="#1c1915">Comp (Dean)</text>
  <text x="${rightX}" y="30" font-family="DejaVu Sans, sans-serif" font-size="18" fill="#1c1915">Build ${xml(sha7)}</text>
  <line x1="${pad + leftW + gap / 2}" y1="${header}" x2="${pad + leftW + gap / 2}" y2="${height - pad}" stroke="#d9d3c7"/>
</svg>`;

  await sharp({
    create: {
      width,
      height,
      channels: 3,
      background: { r: 244, g: 241, b: 234 },
    },
    limitInputPixels: false,
  })
    .composite([
      { input: Buffer.from(svg), top: 0, left: 0 },
      {
        input: await sharp(compPath, { limitInputPixels: false }).toBuffer(),
        top: header,
        left: pad,
      },
      {
        input: await sharp(shotPath, { limitInputPixels: false }).toBuffer(),
        top: header,
        left: rightX,
      },
    ])
    .jpeg({ quality: 80 })
    .toFile(dest);
}
