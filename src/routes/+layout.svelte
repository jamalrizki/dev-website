<script>
	// Global stylesheets (shared by every page, same as the old site)
	import '$lib/styles/bootstrap.scss';
	import '$lib/styles/animate-subset.css';
	import '$lib/styles/style.css';
	import '$lib/styles/hover-min.css';
	// Page stylesheets — each one is scoped to its `.page-<name>` wrapper
	// class at build time (see vite.config.js), mirroring the old
	// one-stylesheet-per-page setup without SPA style clashes.
	import '$lib/styles/pages/home.css';
	import '$lib/styles/pages/experience.css';
	import '$lib/styles/pages/projects.css';
	import '$lib/styles/pages/education.css';
	import '$lib/styles/pages/contact.css';
	import '$lib/styles/pages/notfound.css';

	import { page } from '$app/stores';
	import { afterNavigate, onNavigate } from '$app/navigation';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();

	const routeClasses = {
		'/': 'home',
		'/experience': 'experience',
		'/projects': 'projects',
		'/education': 'education',
		'/contact': 'contact'
	};

	let pathname = $derived(
		$page.url.pathname.length > 1 ? $page.url.pathname.replace(/\/$/, '') : $page.url.pathname
	);
	let isError = $derived(!!$page.error);
	let pageClass = $derived(isError ? 'notfound' : (routeClasses[pathname] ?? 'notfound'));

	// Smooth cross-fade between pages (View Transitions API; no-op where unsupported).
	// Navigating again before a transition settles aborts the previous one with a
	// benign InvalidStateError; swallow it so it doesn't surface as an uncaught error.
	onNavigate((navigation) => {
		if (!document.startViewTransition) return;
		return new Promise((resolve) => {
			const transition = document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
			transition.ready.catch(() => {});
			transition.finished.catch(() => {});
		});
	});

	// Track SPA navigations in Google Analytics
	afterNavigate(({ from }) => {
		if (from && typeof gtag === 'function') {
			gtag('event', 'page_view', { page_path: $page.url.pathname });
		}
	});
</script>

<div class="page-wrap page-{pageClass}">
	{#if !isError}
		<Nav />
	{/if}

	{@render children()}

	{#if !isError}
		<Footer />
	{/if}
</div>

<style>
	.page-wrap {
		min-height: 100vh;
	}

	:global(::view-transition-old(root)),
	:global(::view-transition-new(root)) {
		animation-duration: 0.25s;
	}

	@media (prefers-reduced-motion: reduce) {
		:global(::view-transition-old(root)),
		:global(::view-transition-new(root)) {
			animation: none;
		}
	}
</style>
