// Capture full-page screenshots of every page using the system Chrome.
// Output: design-export/<name>.png  (assembled into PDFs by a separate step)
import puppeteer from 'puppeteer-core';
import { mkdirSync } from 'node:fs';

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const BASE = process.env.BASE || 'http://localhost:4180';
const OUT = 'design-export';
mkdirSync(OUT, { recursive: true });

const routes = [
	['1-home', '/'],
	['2-experience', '/experience'],
	['3-projects', '/projects'],
	['4-education', '/education'],
	['5-contact', '/contact']
];

const browser = await puppeteer.launch({
	executablePath: CHROME,
	headless: 'new',
	args: ['--no-sandbox', '--force-color-profile=srgb', '--hide-scrollbars']
});

const page = await browser.newPage();
const WIDTH = 1440;

for (const [name, route] of routes) {
	await page.setViewport({ width: WIDTH, height: 900, deviceScaleFactor: 2 });
	await page.goto(BASE + route, { waitUntil: 'load', timeout: 30000 });
	// Force any scroll/observer-driven animations into their final visible state
	await page.addStyleTag({
		content: `
			[data-aos]{opacity:1!important;transform:none!important;}
			.skill-chip{opacity:1!important;transform:none!important;}
			.animate__animated{opacity:1!important;transform:none!important;animation:none!important;}
		`
	});
	// Grow the viewport to the full page height so every lazy image is "in view"
	// and actually loads (fullPage screenshots don't trigger lazy loading).
	const fullHeight = await page.evaluate(() => document.body.scrollHeight);
	await page.setViewport({ width: WIDTH, height: Math.min(fullHeight + 100, 20000), deviceScaleFactor: 2 });
	// Wait for all images to finish — bounded so it never hangs.
	await page.evaluate(async () => {
		await Promise.race([
			Promise.all(
				[...document.images]
					.filter((img) => !img.complete)
					.map((img) => new Promise((res) => { img.onload = img.onerror = res; }))
			),
			new Promise((res) => setTimeout(res, 10000))
		]);
	});
	// let particles/anime paint
	await new Promise((r) => setTimeout(r, 2500));
	await page.screenshot({ path: `${OUT}/${name}.png` });
	console.log('captured', name);
}

await browser.close();
console.log('done');
