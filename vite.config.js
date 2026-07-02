import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import prefixSelector from 'postcss-prefix-selector';
import path from 'node:path';

// The legacy site loaded a different stylesheet per page, and several of them
// define the same CSS variables / class names with different values. In a SPA
// every stylesheet is loaded at once, so each page stylesheet in
// src/lib/styles/pages is scoped under a `.page-<name>` wrapper class that the
// layout applies per route.
const themeRule = /^html\[data-theme\s*=\s*['"]?(light|dark)['"]?\]\s*(.*)$/;

export default defineConfig({
	plugins: [sveltekit()],
	css: {
		preprocessorOptions: {
			scss: {
				// Bootstrap 4 predates modern Sass; hide its deprecation noise
				quietDeps: true,
				silenceDeprecations: ['import', 'global-builtin', 'color-functions', 'slash-div']
			}
		},
		postcss: {
			plugins: [
				prefixSelector({
					prefix: '.page-scope',
					includeFiles: [/src\/lib\/styles\/pages\//],
					transform(_prefix, selector, _prefixed, filePath) {
						const cls = `.page-${path.basename(filePath, '.css')}`;
						const sel = selector.trim();
						const theme = sel.match(themeRule);
						if (theme) {
							const rest = theme[2].trim();
							return rest
								? `html[data-theme="${theme[1]}"] ${cls} ${rest}`
								: `html[data-theme="${theme[1]}"] ${cls}`;
						}
						if (sel === 'body' || sel === 'html') return cls;
						if (sel.startsWith('body ')) return `${cls} ${sel.slice(5)}`;
						return `${cls} ${sel}`;
					}
				})
			]
		}
	}
});
