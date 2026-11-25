// Snooze Button Roast — one line roasting an alarm clock that rings at
// 6 AM on a Saturday. The house judge picks the funnier of two lines, so
// the roast needs a setup anyone recognises, one concrete detail, and a
// sting that lands on the final words: the clock is not just early, it
// shows up like a debt collector, as if the weekend itself owed it money.
// The guard keeps the entry inside the gate (1–200 chars, one line) no
// matter how the line is edited later.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My alarm went off at 6 a.m. on a Saturday, like the weekend owed it money and it came to collect.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`line must be 1-200 chars, got ${LINE.length}`);
}
if (LINE.includes("\n")) {
  throw new Error("line must be a single line");
}

writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
