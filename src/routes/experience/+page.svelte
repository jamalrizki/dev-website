<script>
	import { onMount } from 'svelte';
	import { assets } from '$app/paths';
	import { exp, languages, skillGroups } from '$lib/data/experience.js';

	const icons = {
		cloud: 'M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z',
		shield: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
		briefcase:
			'M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2',
		code: 'M16 18l6-6-6-6M8 6l-6 6 6 6',
		globe:
			'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z',
		palette:
			'M12 22a10 10 0 1 1 10-10c0 2.2-1.8 3-3 3h-2.5a2.5 2.5 0 0 0-1.7 4.3c.4.4.7 1 .7 1.5 0 .7-.5 1.2-1.2 1.2H12zM7.5 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm4-4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm5 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z',
		activity: 'M22 12h-4l-3 9L9 3l-3 9H2',
		alert: 'M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0zM12 9v4M12 17h.01',
		monitor: 'M20 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM8 21h8M12 17v4'
	};

	// stagger-in chips once the skills section scrolls into view
	let skillsSection;
	let skillsVisible = $state(false);

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					skillsVisible = true;
					observer.disconnect();
				}
			},
			{ threshold: 0.15 }
		);
		observer.observe(skillsSection);
		return () => observer.disconnect();
	});
</script>

<svelte:head>
	<title>Jamal Rizki | Experience</title>
	<meta name="description"
		content="Personal website for Jamal Rizki Web Developer, Jamal Rizki Web Development, web developer, full-stack, front-end." />
	<link rel="canonical" href="https://www.jrizki.com/experience" />
	<meta property="og:title" content="Jamal Rizki | Experience" />
</svelte:head>

<div class="main pt-5 mt-4">
	<section class="sp-2">
		<div class="container px-3 pt-5">
			<div class="row">
				<div class="col-md-6">
					<img src="{assets}/assets/illustrations/experience.svg" alt="" style="width: 100%; height: 100%;" />
				</div>
				<div
					class="px-md-5 col-md-6 d-flex flex-column align-items-center justify-content-center animate__animated animate__fadeInUp animate__delay-1s">
					<h2 class="main-heading mb-0">Experience</h2>
					<div>
						<p class="pre-heading font-weight-bolder text-center animate__animated animate__fadeInUp animate__delay-2s">
							Highlighting My Professional Path and Contributions.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- work experience Card -->
	<main class="experience-cards">
		{#each exp as item}
			<ul>
				<li class="card card1">
					<img
						src={item.cardImage}
						class="featured-image"
						style="--card-bg: {item.bg || '#ffffff'}"
						alt={item.place}
						loading="lazy"
						decoding="async"
					/>
					<article class="card-body">
						<header>
							<div class="title">
								<h3>{item.title}</h3>
							</div>
							<p class="meta">
								<span class="pre-heading">{item.place}</span><br />
								<!--<span class="author">{item.time}</span> -->
							</p>
							{#if item.about}
								<p class="about-text">{item.about}</p>
							{/if}
							<ol>
								{@html item.desp}
							</ol>
						</header>
					</article>
				</li>
			</ul>
		{/each}
	</main>

	<h4 class="text-center heading1">LANGUAGES | FRAMEWORKS</h4>

	<!-- Languages -->
	<dl class="skills-diagram">
		{#each languages as lang}
			<dt class="skill-{lang.skill}">{lang.name}</dt>
			<dd>{lang.value}</dd>
		{/each}
	</dl>

	<!-- Skills -->
	<h4 class="text-center heading1">SKILLS</h4>
	<div class="skill-groups" bind:this={skillsSection} class:visible={skillsVisible}>
		{#each skillGroups as group, g}
			<div class="skill-group">
				<p class="skill-group-label">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
						stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
						<path d={icons[group.icon]} />
					</svg>
					{group.name}
				</p>
				<div class="skill-chips">
					{#each group.skills as skill, s}
						<span class="skill-chip" >{skill}</span>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	/* Every card image is a full-height panel: the logo is centred (never
	   cropped) on a background that matches the logo's own colour, so a red 2K
	   panel reads like the navy C13 panel. --card-bg is set per card in markup.
	   object-fit:contain !important beats the legacy `object-fit:cover`. */
	.featured-image {
		object-fit: contain !important;
		object-position: center;
		background: var(--card-bg, #fff);
		padding: 2rem;
	}

	/* company "about" line on each experience card */
	.about-text {
		margin: 0 0 0.9rem;
		font-size: 0.9rem;
		line-height: 1.5;
		font-style: italic;
		color: #6c757d;
	}

	.skill-groups {
		max-width: 760px;
		margin: 0 auto;
		padding: 10px 24px 70px;
	}

	.skill-group {
		margin-bottom: 26px;
	}

	.skill-group-label {
		display: flex;
		align-items: center;
		gap: 8px;
		margin: 0 0 10px;
		font-size: 13px;
		font-weight: 600;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: #5f6b73;
	}

	.skill-group-label svg {
		color: #29c7d9;
		flex-shrink: 0;
	}

	.skill-chips {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
	}

	.skill-chip {
		padding: 6px 16px;
		font-size: 14px;
		line-height: 1.4;
		color: #2c3338;
		background: #f2f6f7;
		border: 1px solid #dde6e9;
		border-radius: 999px;
		opacity: 0;
		transform: translateY(12px);
		transition:
			opacity 0.45s ease var(--delay),
			transform 0.45s ease var(--delay),
			border-color 0.2s ease,
			box-shadow 0.2s ease;
	}

	.skill-groups.visible .skill-chip {
		opacity: 1;
		transform: translateY(0);
	}

	.skill-chip:hover {
		border-color: #29c7d9;
		box-shadow: 0 2px 10px rgba(41, 199, 217, 0.25);
	}

	@media (prefers-reduced-motion: reduce) {
		.skill-chip {
			opacity: 1;
			transform: none;
			transition: none;
		}
	}
</style>
