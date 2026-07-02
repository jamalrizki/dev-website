import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			// SPA fallback doubles as the GitHub Pages 404 page
			fallback: '404.html'
		}),
		prerender: {
			handleHttpError: 'warn'
		}
	}
};

export default config;
