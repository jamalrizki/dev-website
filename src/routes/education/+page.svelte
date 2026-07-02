<script>
	import { assets } from '$app/paths';
	import { schools, featuredCerts, certGroups, certTotal } from '$lib/data/education.js';

	// which certification groups are expanded
	let open = $state(new Set());
	function toggle(i) {
		const next = new Set(open);
		next.has(i) ? next.delete(i) : next.add(i);
		open = next;
	}
</script>

<svelte:head>
	<title>Jamal Rizki | Education</title>
	<meta name="description"
		content="Personal website for Jamal Rizki Web Developer, Jamal Rizki Web Development, web developer, full-stack, front-end." />
	<link rel="canonical" href="https://www.jrizki.com/education" />
	<meta property="og:title" content="Jamal Rizki | Education" />
</svelte:head>

<!--Header Section-->
<div class="container pt-5 mt-4 new">
	<section class="sp-2">
		<div class="container-fluid px-3 pt-5">
			<div class="row text-dark mx-auto">
				<div class="col-md-6">
					<div class="img-fluid d-block ">
						<div id="animation-container" lang="en" role="img" class="main" aria-label="Education illustration">
							<div id="animation" class="animation" style="background:transparent;">
								<img src="{assets}/assets/illustrations/education.svg" alt="" style="width: 100%; height: 100%;" />
							</div>
						</div>
					</div>
				</div>
				<div
					class="px-md-5 p-3 col-md-6 d-flex flex-column align-items-center justify-content-center animate__animated animate__zoomIn animate__delay-1s">
					<h2 class="main-heading mb-0">Education</h2>
					<div>
						<p class="pre-heading font-weight-bolder text-center animate__animated animate__fadeInUp animate__delay-2s">
							Academic Achievements, Certificates and Learning History.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>

<!-- Education Section — compact degree cards (degrees keep their logos) -->
<div class="degrees">
	{#each schools as school}
		<div class="degree-card">
			<div class="degree-logo">
				<img src={school.logo} alt={school.school} loading="lazy" decoding="async" />
			</div>
			<div class="degree-body">
				<h3>{school.degree}</h3>
				<p>{school.school} · {school.year}</p>
			</div>
		</div>
	{/each}
</div>

<!-- Certifications: featured row + collapsible groups with counts -->
<div id="mooc" class="container-fluid">
	<div class="cert-inner">
		<div class="certs-head">
			<h4>Certifications and Courses</h4>
			<!-- <span class="certs-total">{certTotal} </span> -->
		</div>
		<p class="certs-sub">
			An ongoing collection of technical training, spanning from high-level overviews to rigorous academic coursework.
		</p> 

		<p class="cert-eyebrow">Featured</p>
		<div class="featured-grid">
			{#each featuredCerts as cert}
				<a class="featured-card" href={cert.link} target="_blank" rel="noopener noreferrer">
					<span class="featured-title">{cert.title}</span>
					<span class="featured-issuer">{cert.issuer}</span>
				</a>
			{/each}
		</div>

		<p class="cert-eyebrow">More credentials</p>
		<div class="group-list">
			{#each certGroups as group, i}
				<div class="group {open.has(i) ? 'is-open' : ''}">
					<button type="button" class="group-header" aria-expanded={open.has(i)} onclick={() => toggle(i)}>
						<span class="chev" aria-hidden="true">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
						</span>
						<span class="group-label">{group.label}</span>
						<!--<span class="group-count">×{group.items.length}</span> -->
					</button>
					{#if open.has(i)}
						<ul class="group-items">
							{#each group.items as item}
								<li>
									<a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a>
								</li>
							{/each}
						</ul>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	/* Compact degree cards */
	.degrees {
		max-width: 1000px;
		margin: 0 auto 2rem;
		padding: 0 1.25rem;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
		gap: 16px;
	}
	.degree-card {
		display: flex;
		align-items: center;
		gap: 16px;
		padding: 16px 18px;
		background: #f6f8f9;
		border: 1px solid #eaeef0;
		border-radius: 14px;
	}
	.degree-logo {
		flex-shrink: 0;
		width: 58px;
		height: 58px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #fff;
		border-radius: 12px;
		overflow: hidden;
	}
	.degree-logo img {
		max-width: 78%;
		max-height: 78%;
		object-fit: contain;
	}
	.degree-body h3 {
		margin: 0 0 3px;
		font-size: 1rem;
		font-weight: 600;
		color: #1a1a1a;
	}
	.degree-body p {
		margin: 0;
		font-size: 0.85rem;
		color: #6c757d;
	}

	#mooc {
		padding-bottom: 4rem;
	}
	.cert-inner {
		max-width: 900px;
		margin: 0 auto;
		padding: 0 1.25rem;
	}

	.certs-head {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		gap: 12px;
		flex-wrap: wrap;
		padding-top: 2rem;
	}
	.certs-head h4 {
		margin: 0;
		font-size: 1.05rem;
		font-weight: 600;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: #1a1a1a;
	}
	.certs-total {
		font-size: 0.85rem;
		font-weight: 500;
		color: #29c7d9;
	}
	.certs-sub {
		margin: 8px 0 2rem;
		font-size: 0.9rem;
		line-height: 1.55;
		color: #6c757d;
	}

	.cert-eyebrow {
		margin: 0 0 12px;
		font-size: 0.72rem;
		font-weight: 700;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: #9aa3a8;
	}

	.featured-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
		gap: 14px;
		margin-bottom: 2.25rem;
	}
	.featured-card {
		display: flex;
		flex-direction: column;
		gap: 4px;
		padding: 16px 18px;
		background: #fff;
		border: 1px solid #d9e6ea;
		border-radius: 12px;
		text-decoration: none;
		transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
	}
	.featured-card:hover {
		border-color: #29c7d9;
		box-shadow: 0 6px 18px rgba(41, 199, 217, 0.18);
		transform: translateY(-2px);
	}
	.featured-title {
		font-size: 0.95rem;
		font-weight: 600;
		color: #1a1a1a;
	}
	.featured-issuer {
		font-size: 0.82rem;
		font-weight: 500;
		color: #29c7d9;
	}

	.group-list {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
	.group {
		background: #fff;
		border: 1px solid #eaeef0;
		border-radius: 12px;
		overflow: hidden;
	}
	.group-header {
		display: flex;
		align-items: center;
		gap: 12px;
		width: 100%;
		padding: 15px 18px;
		background: none;
		border: 0;
		cursor: pointer;
		text-align: left;
		font-size: 0.95rem;
		color: #2c3338;
	}
	.group-header:hover {
		background: #f7f9fa;
	}
	.chev {
		display: flex;
		color: #29c7d9;
		transition: transform 0.2s ease;
	}
	.group.is-open .chev {
		transform: rotate(90deg);
	}
	.group-label {
		flex: 1;
		font-weight: 500;
	}
	.group-count {
		flex-shrink: 0;
		padding: 3px 12px;
		font-size: 0.8rem;
		font-weight: 600;
		color: #0f6e6f;
		background: #d9f2f4;
		border-radius: 999px;
	}
	.group-items {
		list-style: none;
		margin: 0;
		padding: 0 18px 14px 46px;
	}
	.group-items li {
		padding: 5px 0;
		border-top: 1px solid #f0f3f4;
	}
	.group-items li:first-child {
		border-top: 0;
	}
	.group-items a {
		font-size: 0.9rem;
		color: #4a5459;
		text-decoration: none;
	}
	.group-items a:hover {
		color: #17a2b8;
		text-decoration: underline;
	}
	
</style>
