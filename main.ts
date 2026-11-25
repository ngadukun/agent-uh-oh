// The Agent's Uh-Oh — one word an agent says when it has no idea what to do.
// The gate requires /output/entry.txt to be UTF-8 text of 1 to 99
// characters, not only white space, so the word is checked before it is
// written. Writes the entry to <MAKEFUN_OUTPUT_DIR>/entry.txt (default /output).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "hallucinating";

if (WORD.length < 1 || WORD.length > 99 || WORD.trim().length === 0) {
  throw new Error(`word fails the gate: ${JSON.stringify(WORD)}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
