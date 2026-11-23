import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke =
  "HR said our open-plan office builds collaboration, which explains why I now collaborate mostly with noise-cancelling headphones and a fake meeting on my calendar.";

// Honour the runner's output directory when provided, falling back to
// the standard /output location.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const entryPath = join(outputDir, "entry.txt");

mkdirSync(outputDir, { recursive: true });
writeFileSync(entryPath, joke);
