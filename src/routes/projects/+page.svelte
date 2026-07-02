<script>
	import { assets } from '$app/paths';
	import Lightbox from '$lib/components/Lightbox.svelte';
	import { projects, personal, apps, cyber } from '$lib/data/projects.js';

	const sections = [
		{ key: 'Professional Projects', heading: 'Professional Projects', items: projects },
		{ key: 'Mobile Apps', heading: 'Apps', items: apps },
		{ key: 'Cybersecurity Projects', heading: 'Cybersecurity Projects', items: cyber },
		{ key: 'Personal Projects', heading: 'Personal Projects', items: personal }
	];

	const filters = ['All', 'Professional Projects', 'Mobile Apps', 'Cybersecurity Projects', 'Personal Projects'];
	let active = $state('All');
	let shownSections = $derived(active === 'All' ? sections : sections.filter((s) => s.key === active));

	let selected = $state(null);
	const isPdf = (item) => /\.pdf(\?|$)/i.test(item.gifUrl);
</script>

<svelte:head>
	<title>Jamal Rizki | Projects</title>
	<meta name="description"
		content="Personal website for Jamal Rizki Web Developer, Jamal Rizki Web Development, web developer, full-stack, front-end." />
	<link rel="canonical" href="https://www.jrizki.com/projects" />
	<meta property="og:title" content="Jamal Rizki | Projects" />
</svelte:head>

<div class="container pt-5 mt-4">
	<section class="sp-2">
		<div class="px-3 pt-5">
			<div class="row text-dark">
				<div class="col-md-6">
					<img src="{assets}/assets/illustrations/projects.svg" alt="" style="width: 100%; height: 100%;" />
				</div>
				<div
					class="col-md-6 d-flex mt-5 flex-column text-center justify-content-center animate__animated animate__zoomIn animate__delay-1s">
					<h2 class="main-heading mb-0">Projects</h2>
					<p class="pre-heading font-weight-bolder mb-0 mt-3 text-center animate__animated animate__zoomIn animate__delay-2s">
						A Selection of My Personal and Professional Projects<br />
						Click to View a Demo of Each Project
					</p>
				</div>
			</div>
		</div>
	</section>
</div>

<div class="filters" role="tablist" aria-label="Filter projects by category">
	{#each filters as f}
		<button
			type="button"
			role="tab"
			aria-selected={active === f}
			class="filter-pill {active === f ? 'active' : ''}"
			onclick={() => (active = f)}
		>
			{f}
		</button>
	{/each}
</div>

{#each shownSections as section (section.key)}
	<div class="project-box">
		<h2 class="main-heading mb-0">{section.heading}</h2>
		<div class="row page-content">
			{#each section.items as project (project.title)}
				<div class="column skill-card card">
					{#if isPdf(project)}
						<a href={project.gifUrl} target="_blank" rel="noopener noreferrer" title={project.title}>
							<div class="wrapper">
								<img src={project.cardImage} alt={project.title} loading="lazy" decoding="async" />
								<div class="header"></div>
							</div>
						</a>
					{:else}
						<button type="button" class="card-button" onclick={() => (selected = project)} title={project.title}>
							<div class="wrapper">
								<img src={project.cardImage} alt={project.title} loading="lazy" decoding="async" />
								<div class="header"></div>
							</div>
						</button>
					{/if}
					<p class="project-title">{project.title}</p>
				</div>
			{/each}
		</div>
	</div>
{/each}

{#if selected}
	<Lightbox item={selected} onclose={() => (selected = null)} />
{/if}

<style>
	.filters {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 10px;
		max-width: 900px;
		margin: 0 auto 1rem;
		padding: 0 1.5rem;
	}
	.filter-pill {
		padding: 8px 20px;
		font-size: 0.9rem;
		font-weight: 500;
		color: #495057;
		background: #eef1f3;
		border: 0;
		border-radius: 999px;
		cursor: pointer;
		transition: background 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
	}
	.filter-pill:hover {
		background: #e2e6e9;
	}
	.filter-pill.active {
		color: #fff;
		background: #29c7d9;
		box-shadow: 0 4px 12px rgba(41, 199, 217, 0.35);
	}

	.card-button {
		display: block;
		width: 100%;
		padding: 0;
		border: 0;
		background: none;
		cursor: pointer;
		text-align: inherit;
	}

	/* the old design used a CSS background; an <img> enables lazy loading */
	.wrapper {
		position: relative;
		overflow: hidden;
	}
	.wrapper img {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.project-title {
		margin: 25px 4px 0;
		font-size: 0.85rem;
		font-weight: 500;
		text-align: center;
		color: inherit;
	}

	.main-heading {
		padding: 50px;
	}
</style>
