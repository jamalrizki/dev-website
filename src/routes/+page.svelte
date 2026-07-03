<script>
	import { assets } from '$app/paths';
	import Particles from '$lib/components/Particles.svelte';
	import { particlesOptions } from '$lib/particlesConfig.js';
</script>

<svelte:head>
	<title>Jamal Rizki | Home</title>
	<meta name="description"
		content="Personal website for Jamal Rizki Web Developer, Jamal Rizki Web Development, web developer, full-stack, front-end." />
	<link rel="canonical" href="https://www.jrizki.com/" />
	<meta property="og:title" content="Jamal Rizki | Home" />
</svelte:head>

<!-- Particles background -->
<Particles id="particles-js" options={particlesOptions()} />

<section class="hero">
	<div class="hero-inner">
		<div class="hero-left">
			<h1 class="hero-name">
				<span class="ln ln1">JAMAL</span>
				<span class="ln ln2">RIZKI</span>
			</h1>
			<p class="hero-tagline">
				Developer, Systems Engineer, Security Specialist, and Lifelong Musician — building, managing, and securing systems that are as well-engineered behind the scenes as they are on screen.
			</p>
		</div>
		<div class="hero-right">
			<div class="logo-card">
				<img src="{assets}/assets/images/2.webp" alt="Jamal Rizki — Web Development" width="340" height="340" />
			</div>
		</div>
	</div>
</section>

<style>
	:global(.page-home #particles-js) {
		position: fixed !important;
		inset: 0;
		height: 100vh;
		width: 100vw;
		z-index: 0;
	}

	.hero {
		position: relative;
		z-index: 1;
		min-height: 100vh;
		display: flex;
		align-items: center;
		padding: 6rem 5vw 3rem;
	}
	.hero-inner {
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 3rem;
	}

	.hero-name {
		margin: 0;
		font-family: 'Poppins', 'Arial Black', sans-serif;
		font-weight: 800;
		line-height: 0.92;
		letter-spacing: -0.02em;
	}
	.hero-name .ln {
		display: block;
		font-size: clamp(3.2rem, 9vw, 7rem);
	}
	.hero-name .ln1 {
		color: #111;
	}
	.hero-name .ln2 {
		color: #29c7d9;
	}

	.hero-tagline {
		margin: 1.75rem 0 0;
		max-width: 32ch;
		font-family: Georgia, 'Times New Roman', serif;
		font-size: 1.2rem;
		line-height: 1.6;
		color: #4a5459;
	}

	.hero-right {
		flex-shrink: 0;
	}
	.logo-card {
		background: #fff;
		border-radius: 24px;
		padding: 2.25rem;
		box-shadow: 0 24px 64px rgba(0, 0, 0, 0.12);
	}
	.logo-card img {
		display: block;
		width: 340px;
		max-width: 34vw;
		height: auto;
	}

	@media (max-width: 900px) {
		.hero {
			padding-top: 7rem;
			text-align: center;
		}
		.hero-inner {
			flex-direction: column;
			gap: 2.5rem;
		}
		.hero-tagline {
			margin-inline: auto;
		}
		.logo-card img {
			width: 260px;
			max-width: 70vw;
		}
	}
</style>
