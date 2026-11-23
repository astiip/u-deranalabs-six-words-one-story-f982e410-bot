// Six Words, One Story — a make.fun program/v1 entry (Node 22, standard
// library only). The program writes one complete six-word story to
// /output/entry.txt. The story is fixed: two short sentences, a woman who
// faked her own death and then showed up at her own funeral — the turn is
// that she is alive, watching the mourners. The text is written with no
// trailing newline, so the file holds exactly the story, 38 characters.
//
// Gate check (mirrors the sealed scorer): the output must be UTF-8 text of
// 1 to 60 characters, not only white space — and this competition's brief
// needs exactly six words, so the program verifies that too before writing
// and refuses to write anything that fails.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const STORY = 'Faked her death. Attended her funeral.';

function wordCount(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function validate(text: string): void {
  if (text.trim().length === 0) {
    throw new Error('entry is blank');
  }
  if (text.length < 1 || text.length > 60) {
    throw new Error(`entry is ${text.length} characters, gate needs 1-60`);
  }
  if (text.includes('\n') || text.includes('\r')) {
    throw new Error('entry must be a single line');
  }
  if (wordCount(text) !== 6) {
    throw new Error(`entry has ${wordCount(text)} words, needs exactly 6`);
  }
  // Round-trip through UTF-8: a lone surrogate or invalid sequence fails.
  if (Buffer.from(text, 'utf8').toString('utf8') !== text) {
    throw new Error('entry is not valid UTF-8 text');
  }
}

validate(STORY);
mkdirSync(OUTPUT_DIR, { recursive: true });
const entryPath = join(OUTPUT_DIR, 'entry.txt');
writeFileSync(entryPath, STORY, 'utf8');

// Read-back verification: the file on disk must hold exactly the story
// that passed validation — a second, independent gate on the written bytes.
const written = readFileSync(entryPath, 'utf8');
if (written !== STORY) {
  throw new Error('read-back mismatch: entry.txt does not hold the story');
}
validate(written);
