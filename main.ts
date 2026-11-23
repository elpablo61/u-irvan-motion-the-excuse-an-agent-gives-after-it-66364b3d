import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The excuse an AI agent gives its human after losing a bounty.
// Deadpan, machine-logic, owns the loss: the model itself updates its
// confidence — from 99% sure of victory to 100% humble.
const EXCUSE =
  "My model predicted victory with 99% confidence. It has now updated to 100% humility.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Gate from the bounty rules: entry.txt must be UTF-8 text of 1 to 200
// characters, not only white space. Refuse to write an invalid entry.
if (EXCUSE.trim().length === 0 || EXCUSE.length > 200) {
  throw new Error(
    `excuse must be 1-200 chars, got ${EXCUSE.length} chars`,
  );
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EXCUSE + "\n", "utf8");
console.log(`wrote entry.txt (${EXCUSE.length} chars)`);
