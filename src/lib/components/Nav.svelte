<script>
	import { page } from '$app/stores';
	import { assets } from '$app/paths';

	let menuOpen = $state(false);

	const links = [
		{ href: '/', label: 'Home' },
		{ href: '/experience', label: 'Experience' },
		{ href: '/projects', label: 'Projects' },
		{ href: '/education', label: 'Education' },
		{ href: `${assets}/assets/images/Jamal_Rizki_Resume.pdf`, label: 'Resume', external: true },
		{ href: '/contact', label: 'Contact' }
	];

	const isCurrent = (href) => $page.url.pathname === href;

	function toggleMenu() {
		menuOpen = !menuOpen;
	}

	function closeMenu() {
		menuOpen = false;
	}
</script>

<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
	<a class="navbar-brand p-0" href="/" aria-label="Jamal Rizki — home">
		<img src="{assets}/assets/images/2.webp" alt="Jamal Rizki" class="brand-logo" />
	</a>
	<div
		class="hamburger_wrapper navbar-toggler {menuOpen ? 'open' : ''}"
		role="button"
		tabindex="0"
		aria-controls="navbarSupportedContent"
		aria-expanded={menuOpen}
		aria-label="Toggle navigation"
		onclick={toggleMenu}
		onkeydown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleMenu()}
	>
		<div id="js-hamburger" class="hamburger {menuOpen ? 'is-active' : ''}">
			<span class="first"></span>
			<span class="second"></span>
			<span class="third"></span>
		</div>
	</div>

	<div class="collapse navbar-collapse {menuOpen ? 'show' : ''}" id="navbarSupportedContent">
		<ul class="navbar-nav ml-auto" id="navbar-content">
			{#each links as link}
				<li class="nav-item">
					{#if link.external}
						<a class="nav-link" href={link.href} target="_blank" rel="noopener noreferrer">{link.label}</a>
					{:else}
						<a
							class="nav-link {isCurrent(link.href) ? 'current-link' : ''}"
							href={link.href}
							onclick={closeMenu}>{link.label}</a
						>
					{/if}
				</li>
			{/each}
		</ul>
	</div>
</nav>

<style>
	.brand-logo {
		height: 46px;
		width: auto;
		display: block;
	}

	/* The old site removed .current-link while hovering it (jQuery); same effect in CSS */
	:global(a.nav-link.current-link:hover) {
		font-weight: normal;
	}
	:global(a.nav-link.current-link:hover::after) {
		display: none;
	}
</style>
