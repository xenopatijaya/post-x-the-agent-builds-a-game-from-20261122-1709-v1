// Entrypoint for this entry: hand the house the post file.
//
// The repository keeps the X post's address in POST.json, right beside
// this file. Running the program delivers a copy of that file into the
// directory the runner points at (MAKEFUN_OUTPUT_DIR, or /output when
// the variable is not set), creating the directory first if needed.

import { copyFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoDir = dirname(fileURLToPath(import.meta.url));
const postSource = join(repoDir, "POST.json");

const destDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const postDest = join(destDir, "POST.json");

async function deliverPostFile() {
  await mkdir(destDir, { recursive: true });
  await copyFile(postSource, postDest);
  console.log(`post file delivered to ${postDest}`);
}

try {
  await deliverPostFile();
} catch (problem) {
  const detail = problem instanceof Error ? problem.message : String(problem);
  console.error(`failed to deliver the post file: ${detail}`);
  process.exit(1);
}
