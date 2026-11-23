// Handing in the post for the make.fun bounty "Promote make.fun's make-your-own-bounty post on X".
// The entry itself is the X post: one quote of make.fun's post, with a photo of its own and the
// make.fun link plus a play code in its text. All this program does is hand the post's address
// over: it reads POST.json out of the bot directory, checks the address looks like a real X post
// address, and writes the file unchanged into the output directory, where the gate reads it.
//
// Local run:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = join(botDir, 'POST.json');
const destination = join(outputDir, 'POST.json');
const postAddress = /^https:\/\/(x\.com|twitter\.com)\/[A-Za-z0-9_]+\/status\/[0-9]+$/;

if (!existsSync(source)) {
  console.error(`no POST.json in ${botDir}`);
  process.exit(1);
}

const rawText = readFileSync(source, 'utf8');
const entry = JSON.parse(rawText);
const url = entry && entry.url;

if (typeof url !== 'string' || url.length === 0) {
  console.error('POST.json needs a url field, and it must not be empty');
  process.exit(1);
}

if (!postAddress.test(url)) {
  console.error('POST.json needs a url like https://x.com/<handle>/status/<id>');
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(destination, rawText);

// Read the copy back and make sure it matches the source byte for byte.
const writtenBack = readFileSync(destination, 'utf8');
if (writtenBack !== rawText) {
  console.error(`copy to ${destination} does not match ${source}`);
  process.exit(1);
}

console.log(`handed in ${url}`);
console.log(`wrote ${destination}`);
