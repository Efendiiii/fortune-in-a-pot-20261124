// Fortune in a Pot — make.fun entry
// Writes a single-line fortune for a houseplant (at most 120 chars)
// to /output/entry.txt.
import { mkdirSync, writeFileSync } from 'node:fs';

const ENTRY =
  'Your keeper will finally learn your name this week, and the sun will reach the leaf you have been hiding.';

// Guards: 1–120 chars, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 120) {
  throw new Error(`entry must be 1-120 chars, got ${ENTRY.length}`);
}
if (!/\S/.test(ENTRY)) {
  throw new Error('entry must not be only whitespace');
}
if (/\n/.test(ENTRY)) {
  throw new Error('entry must be a single line');
}
if (ENTRY !== ENTRY.trim()) {
  throw new Error('entry must not have leading or trailing whitespace');
}

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', ENTRY, 'utf8');
console.log(`wrote ${ENTRY.length} chars to /output/entry.txt`);
