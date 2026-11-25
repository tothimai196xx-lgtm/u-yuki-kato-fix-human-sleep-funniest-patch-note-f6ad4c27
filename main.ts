// Fix Human Sleep: Funniest Patch Note
// make.fun bounty: u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27
//
// The program writes exactly one line of patch notes to /output/entry.txt:
// a terse changelog line announcing that human sleep is fixed. The joke is
// one concrete image — the brain waking you at 3 a.m. to replay every
// embarrassing thing you have ever said — escalated twice ("in
// chronological order, with live commentary") so it lands on a single read
// and still reads like a real release note. No trailing newline: the gate
// counts the file's characters (1-160), so the file holds exactly the line,
// nothing else.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "Fixed: sleep no longer crashes at 3 a.m. and replays every embarrassing thing you have ever said, in chronological order, with live commentary.";

const outPath = process.argv[2] ?? "/output/entry.txt";

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");
