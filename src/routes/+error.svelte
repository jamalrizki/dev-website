<svelte:head>
	<title>Got Lost!</title>
	<meta name="robots" content="noindex,nofollow" />
</svelte:head>

<div class="container container-star">
	{#each Array(30) as _}
		<div class="star-1"></div>
	{/each}
	{#each Array(30) as _}
		<div class="star-2"></div>
	{/each}
</div>
<div class="container container-bird">
	{#each Array(6) as _}
		<div class="bird bird-anim">
			<div class="bird-container">
				<div class="wing wing-left">
					<div class="wing-left-top"></div>
				</div>
				<div class="wing wing-right">
					<div class="wing-right-top"></div>
				</div>
			</div>
		</div>
	{/each}
	<div class="container-title">
		<div class="title">
			<div class="number">4</div>
			<div class="moon">
				<div class="face">
					<div class="mouth"></div>
					<div class="eyes">
						<div class="eye-left"></div>
						<div class="eye-right"></div>
					</div>
				</div>
			</div>
			<div class="number">4</div>
		</div>
		<div class="subtitle">Oops. Looks like you took a wrong turn.</div>
		<br />
		<br />
		<a class="button" href="/">Go back</a>
	</div>
</div>
