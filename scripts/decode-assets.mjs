#!/usr/bin/env node
/**
 * Writes public pizza photos (and the PWA icon) from ASCII sidecar files.
 * Sidecars live in assets/: either `name` or split `name.01` `name.02` …
 */
import { mkdirSync, readFileSync, writeFileSync, existsSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const assetsDir = join(root, "assets");

const FILES = [
  ["pie-hero.jpg.b64", "public/images/pie-hero.jpg"],
  ["slice-fold.jpg.b64", "public/images/slice-fold.jpg"],
  ["ron-mascot.jpg.b64", "public/images/ron-mascot.jpg"],
  ["porch.jpg.b64", "public/images/porch.jpg"],
  ["oven.jpg.b64", "public/images/oven.jpg"],
  ["tablecloth.jpg.b64", "public/images/tablecloth.jpg"],
  ["og.jpg.b64", "public/og.jpg"],
  ["icon-180.png.b64", "public/__grok/icon-180.png"],
];

function readSidecar(baseName) {
  if (!existsSync(assetsDir)) return null;
  const names = readdirSync(assetsDir).filter(
    (n) => n === baseName || n.startsWith(`${baseName}.`),
  );
  names.sort();
  if (names.length === 0) return null;
  return names.map((n) => readFileSync(join(assetsDir, n), "utf8")).join("");
}

let wrote = 0;
for (const [srcName, destRel] of FILES) {
  const dest = join(root, destRel);
  const raw = readSidecar(srcName);
  if (!raw) {
    console.warn(`[decode-assets] missing ${srcName}`);
    continue;
  }
  mkdirSync(dirname(dest), { recursive: true });
  writeFileSync(dest, Buffer.from(raw.replace(/\s+/g, ""), "base64"));
  wrote += 1;
}
console.log(`[decode-assets] wrote ${wrote} file(s)`);
