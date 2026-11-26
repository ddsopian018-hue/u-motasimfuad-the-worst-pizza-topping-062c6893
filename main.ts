// The Worst Pizza Topping — make.fun entry.
// One funny line pitching a terrible pizza topping, written to
// $MAKEFUN_OUTPUT_DIR/entry.txt with no trailing newline.
// The topping is warm cottage cheese and gummy worms: slimy, wiggly,
// and served with a straight face, like a real menu special.

import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Try our new pizza, topped with warm cottage cheese and gummy worms \u2014 it wiggles, it sweats, and somehow it blames you.";

// Gate-check the line before writing it: a single line, valid UTF-8,
// 1 to 200 characters, and not whitespace-only.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`Line must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("Line must not be whitespace-only");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("Line must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
