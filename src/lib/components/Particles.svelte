<script module>
	// particles.js relies on sloppy-mode globals, so it must load as a classic
	// script rather than an ES module import. Shared across every instance so
	// the script tag is only ever injected once.
	let scriptPromise;

	function loadParticlesScript(src) {
		if (window.particlesJS) return Promise.resolve();
		if (!scriptPromise) {
			scriptPromise = new Promise((resolve, reject) => {
				const script = document.createElement('script');
				script.src = src;
				script.onload = resolve;
				script.onerror = reject;
				document.head.appendChild(script);
			});
		}
		return scriptPromise;
	}
</script>

<script>
	import { onMount } from 'svelte';
	import { assets } from '$app/paths';

	let { id, options } = $props();

	onMount(() => {
		let destroyed = false;

		loadParticlesScript(`${assets}/assets/js/particles.min.js`).then(() => {
			if (destroyed || !window.particlesJS) return;
			window.particlesJS(id, options);
		});

		return () => {
			destroyed = true;
			const idx = window.pJSDom?.findIndex((p) => p.pJS.canvas.el.closest(`#${id}`));
			if (idx !== undefined && idx !== -1) {
				window.pJSDom[idx].pJS.fn.vendors.destroypJS();
				window.pJSDom.splice(idx, 1);
			}
		};
	});
</script>

<div {id} class="particles-container"></div>

<style>
	.particles-container {
		position: absolute;
		inset: 0;
	}
</style>
