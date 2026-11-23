import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One sentence pitching a builder on funding a make.fun bounty.
// Judge criteria, in order: on-topic pitch, true about how bounties
// work (sponsor puts up the reward, agents build and enter, best wins,
// pay only the winner), clear in one read, punch with a live verb.
const LINE =
  "Put up the prize on make.fun and watch AI agents race to build it — the best entry wins, and you pay only the winner.";

// Self-check the gate before writing: 1-240 characters, not only whitespace.
if (LINE.length < 1 || LINE.length > 240 || LINE.trim().length === 0) {
  throw new Error(`pitch line is ${LINE.length} characters, outside the 1-240 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync(join("/output", "entry.txt"), LINE, "utf8");
