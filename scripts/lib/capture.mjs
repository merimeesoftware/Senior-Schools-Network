/**
 * Headless Chromium via pinned playwright-core. The sandbox stays on.
 */

import { chromium } from 'playwright-core';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const sharp = require('sharp');

export const CHROME_LAUNCH_ARGS = ['--disable-dev-shm-usage'];

const SINGLE_SHOT_LIMIT = 16000;
const JPEG_MAX_EDGE = 65000;

export async function launchChrome() {
  if (CHROME_LAUNCH_ARGS.includes('--no-sandbox')) {
    throw new Error('Chrome sandbox must stay on');
  }
  try {
    return await chromium.launch({
      headless: true,
      chromiumSandbox: true,
      args: CHROME_LAUNCH_ARGS,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    const failure = new Error(`Chrome failed to start: ${message}`);
    failure.code = 2;
    throw failure;
  }
}

export async function collectSurfaces(page) {
  return page.evaluate(() => {
    const hidden = [];
    const attributes = [];

    const hiddenSelf = (el) => {
      if (el.hasAttribute('hidden')) return true;
      if (el.getAttribute('aria-hidden') === 'true') return true;
      const style = getComputedStyle(el);
      if (style.display === 'none' || style.visibility === 'hidden')
        return true;
      const opacity = Number(style.opacity);
      return Number.isFinite(opacity) && opacity === 0;
    };

    for (const el of document.querySelectorAll('*')) {
      for (const attr of el.attributes) {
        attributes.push(`${attr.name}=${attr.value}`);
      }
      if (!hiddenSelf(el)) continue;
      if (el.parentElement && hiddenSelf(el.parentElement)) continue;
      hidden.push(el.textContent || '');
    }

    return {
      visible: document.body ? document.body.innerText : '',
      hidden: hidden.join('\n'),
      attributes: attributes.join('\n'),
      html: document.documentElement ? document.documentElement.outerHTML : '',
    };
  });
}

async function preparePage(page) {
  await page.evaluate(async () => {
    const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const height = () =>
      Math.max(
        document.documentElement.scrollHeight,
        document.body ? document.body.scrollHeight : 0
      );
    const step = Math.max(window.innerHeight, 1);
    const maxSteps = 500;
    let steps = 0;
    for (let y = 0; y < height() && steps < maxSteps; y += step) {
      steps += 1;
      window.scrollTo(0, y);
      await wait(20);
    }
    window.scrollTo(0, 0);
    await Promise.race([
      Promise.all(
        Array.from(document.images).map((img) => {
          if (img.complete) return null;
          return new Promise((resolve) => {
            img.addEventListener('load', () => resolve(), { once: true });
            img.addEventListener('error', () => resolve(), { once: true });
          });
        })
      ),
      new Promise((resolve) => setTimeout(resolve, 5000)),
    ]);
  });
}

async function stitchFullPage(page, dest) {
  await page.evaluate(() => {
    for (const el of document.querySelectorAll('*')) {
      const style = getComputedStyle(el);
      if (style.position === 'fixed' || style.position === 'sticky') {
        el.style.position = 'absolute';
      }
    }
  });

  const viewport = page.viewportSize();
  const total = await page.evaluate(() =>
    Math.max(
      document.documentElement.scrollHeight,
      document.body ? document.body.scrollHeight : 0
    )
  );
  const scale = Math.min(
    1,
    JPEG_MAX_EDGE / total,
    JPEG_MAX_EDGE / viewport.width
  );
  const outWidth = Math.max(1, Math.round(viewport.width * scale));
  const tiles = [];
  let top = 0;
  for (let y = 0; y < total; y += viewport.height) {
    await page.evaluate((scrollTop) => window.scrollTo(0, scrollTop), y);
    const tileHeight = Math.min(viewport.height, total - y);
    const buf = await page.screenshot({
      type: 'jpeg',
      quality: 80,
      animations: 'disabled',
      caret: 'hide',
      timeout: 120000,
      clip: { x: 0, y: 0, width: viewport.width, height: tileHeight },
    });
    const tileOutHeight = Math.max(1, Math.round(tileHeight * scale));
    const input = await sharp(buf, { limitInputPixels: false })
      .resize({ width: outWidth, height: tileOutHeight, fit: 'fill' })
      .toBuffer();
    tiles.push({ input, top, left: 0 });
    top += tileOutHeight;
  }

  await sharp({
    create: {
      width: outWidth,
      height: Math.max(top, 1),
      channels: 3,
      background: { r: 255, g: 255, b: 255 },
    },
    limitInputPixels: false,
  })
    .composite(tiles)
    .jpeg({ quality: 80 })
    .toFile(dest);

  return { scaled: scale < 1, scrollHeight: total };
}

export async function captureFullPageJpeg(page, dest) {
  await preparePage(page);
  const scrollHeight = await page.evaluate(() =>
    Math.max(
      document.documentElement.scrollHeight,
      document.body ? document.body.scrollHeight : 0
    )
  );
  if (scrollHeight <= SINGLE_SHOT_LIMIT) {
    try {
      await page.screenshot({
        path: dest,
        type: 'jpeg',
        quality: 80,
        fullPage: true,
        animations: 'disabled',
        caret: 'hide',
        timeout: 120000,
      });
      return { scaled: false, scrollHeight };
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      if (!/too large for the JPEG format/i.test(message)) throw error;
    }
  }
  return stitchFullPage(page, dest);
}
