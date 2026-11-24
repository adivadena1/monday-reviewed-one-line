// Monday, Reviewed in One Line — v1
// Writes a single 128-character review of Monday to /output/entry.txt
// (UTF-8, no trailing newline).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Monday, one star: my alarm filed for overtime, my inbox hit triple digits, and my boss scheduled a 'quick sync' for three hours.";

// The gate allows 1–200 characters; fail loudly instead of writing an
// out-of-range line.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(
    `LINE must be 1-200 characters, got ${LINE.length} characters`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
