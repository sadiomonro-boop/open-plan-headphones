import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "HR said our open-plan office builds collaboration, which explains why I now collaborate mostly with noise-cancelling headphones and a fake meeting on my calendar.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke);
