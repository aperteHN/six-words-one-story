// Six Words, One Story - make.fun entry.
//
// A Node 22 program (standard library only) that writes one complete
// story in exactly six words to /output/entry.txt (or
// $MAKEFUN_OUTPUT_DIR/entry.txt outside the grader). The story was
// written for this competition and chosen from the candidates drafted
// alongside it; the program always writes the same bytes, so both
// grader runs produce an identical entry.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const STORY = 'He practiced proposing; she practiced leaving.';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), STORY, 'utf8');
