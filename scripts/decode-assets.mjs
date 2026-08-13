#!/usr/bin/env node
/**
 * Writes public pizza photos (and the PWA icon) from ASCII sidecar files.
 * Photos are stored as split JSON: assets/photos.json.01, .02, …
 */
import { mkdirSync, readFileSync, writeFileSync, existsSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const assetsDir = join(root, "assets");

const DEST = {
  "pie-hero.jpg": "public/images/pie-hero.jpg",
  "slice-fold.jpg": "public/images/slice-fold.jpg",
  "ron-mascot.jpg": "public/images/ron-mascot.jpg",
  "porch.jpg": "public/images/porch.jpg",
  "oven.jpg": "public/images/oven.jpg",
  "tablecloth.jpg": "public/images/tablecloth.jpg",
  "og.jpg": "public/og.jpg",
  "icon-180.png": "public/__grok/icon-180.png",
};

function readJoined(prefix) {
  if (!existsSync(assetsDir)) return "";
  const names = readdirSync(assetsDir)
    .filter((n) => n === prefix || n.startsWith(`${prefix}.`))
    .sort();
  return names.map((n) => readFileSync(join(assetsDir, n), "utf8")).join("");
}

let map = {};
const jsonBlob = readJoined("photos.json");
if (jsonBlob) {
  try {
    map = JSON.parse(jsonBlob);
  } catch (err) {
    console.warn("[decode-assets] photos.json is incomplete or invalid:", err.message);
  }
}

const iconOnly = readJoined("icon-180.png.b64");
if (iconOnly && !map["icon-180.png"]) map["icon-180.png"] = iconOnly.replace(/\s+/g, "");

let wrote = 0;
for (const [name, destRel] of Object.entries(DEST)) {
  const b64 = map[name];
  if (!b64) {
    console.warn(`[decode-assets] missing ${name}`);
    continue;
  }
  const dest = join(root, destRel);
  mkdirSync(dirname(dest), { recursive: true });
  writeFileSync(dest, Buffer.from(String(b64).replace(/\s+/g, ""), "base64"));
  wrote += 1;
}
console.log(`[decode-assets] wrote ${wrote} file(s)`);
