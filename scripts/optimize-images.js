// One-off: convert static/assets/images JPG/PNGs to WebP and remove originals.
// Keeps 2.jpg and folded.png (favicon + og:image need original formats).
import sharp from 'sharp';
import { readdir, stat, unlink } from 'node:fs/promises';
import path from 'node:path';

const ROOT = 'static/assets/images';
const KEEP_ORIGINAL = new Set([
	path.join(ROOT, '2.jpg'),
	path.join(ROOT, 'folded.png'),
	path.join(ROOT, 'favicon.png')
]);

async function* walk(dir) {
	for (const entry of await readdir(dir, { withFileTypes: true })) {
		const p = path.join(dir, entry.name);
		if (entry.isDirectory()) yield* walk(p);
		else yield p;
	}
}

let before = 0;
let after = 0;
for await (const file of walk(ROOT)) {
	if (!/\.(jpe?g|png)$/i.test(file)) continue;
	const out = file.replace(/\.(jpe?g|png)$/i, '.webp');
	const src = await stat(file);
	await sharp(file)
		.resize({ width: 1200, withoutEnlargement: true })
		.webp({ quality: 80 })
		.toFile(out);
	const dst = await stat(out);
	before += src.size;
	after += dst.size;
	if (!KEEP_ORIGINAL.has(file)) await unlink(file);
}
console.log(`images: ${(before / 1e6).toFixed(1)} MB -> ${(after / 1e6).toFixed(1)} MB webp`);
