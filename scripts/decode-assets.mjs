#!/usr/bin/env node
/**
 * Writes public pizza photos (and the PWA icon) from ASCII sidecar files.
 * Sidecars live in assets/ so the GitHub upload path can stay text-only.
 */
import { mkdirSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const FILES = [
  ["assets/pie-hero.jpg.b64", "public/images/pie-hero.jpg"],
  ["assets/slice-fold.jpg.b64", "public/images/slice-fold.jpg"],
  ["assets/ron-mascot.jpg.b64", "public/images/ron-mascot.jpg"],
  ["assets/porch.jpg.b64", "public/images/porch.jpg"],
  ["assets/oven.jpg.b64", "public/images/oven.jpg"],
  ["assets/tablecloth.jpg.b64", "public/images/tablecloth.jpg"],
  ["assets/og.jpg.b64", "public/og.jpg"],
  ["assets/icon-180.png.b64", "public/__grok/icon-180.png"],
];

let wrote = 0;
for (const [srcRel, destRel] of FILES) {
  const src = join(root, srcRel);
  const dest = join(root, destRel);
  if (!existsSync(src)) {
    console.warn(`[decode-assets] missing ${srcRel}`);
    continue;
  }
  mkdirSync(dirname(dest), { recursive: true });
  const b64 = readFileSync(src, "utf8").replace(/\s+/g, "");
  writeFileSync(dest, Buffer.from(b64, "base64"));
  wrote += 1;
}
console.log(`[decode-assets] wrote ${wrote} file(s)`);
