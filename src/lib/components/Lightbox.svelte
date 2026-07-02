<script>
	let { item, onclose } = $props();

	let isVideo = $derived(/\.(m4v|mp4|mov)(\?|$)/i.test(item.gifUrl));

	$effect(() => {
		document.body.style.overflow = 'hidden';
		return () => {
			document.body.style.overflow = '';
		};
	});
</script>

<svelte:window onkeydown={(e) => e.key === 'Escape' && onclose()} />

<div class="lightbox-backdrop" onclick={onclose} role="presentation">
	<div class="lightbox" role="dialog" aria-modal="true" aria-label={item.title} onclick={(e) => e.stopPropagation()}>
		<button class="lightbox-close" type="button" onclick={onclose} aria-label="Close">&times;</button>
		{#if isVideo}
			<!-- svelte-ignore a11y_media_has_caption -->
			<video src={item.gifUrl} controls autoplay playsinline></video>
		{:else}
			<img src={item.gifUrl} alt={item.title} />
		{/if}
		<div class="lightbox-caption">
			<h5>{item.title}</h5>
			{#if item.liveUrl}
				<a href={item.liveUrl} target="_blank" rel="noopener noreferrer">Visit live site &nearr;</a>
			{/if}
		</div>
	</div>
</div>

<style>
	.lightbox-backdrop {
		position: fixed;
		inset: 0;
		z-index: 2000;
		background: rgba(8, 8, 12, 0.85);
		backdrop-filter: blur(4px);
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 24px;
		animation: lightbox-fade 0.2s ease;
	}

	@keyframes lightbox-fade {
		from {
			opacity: 0;
		}
	}

	.lightbox {
		position: relative;
		max-width: min(1100px, 92vw);
		max-height: 88vh;
		display: flex;
		flex-direction: column;
		background: #17171b;
		border-radius: 12px;
		overflow: hidden;
		box-shadow: 0 24px 64px rgba(0, 0, 0, 0.5);
	}

	.lightbox video,
	.lightbox img {
		display: block;
		max-width: 100%;
		max-height: calc(88vh - 72px);
		object-fit: contain;
		background: #000;
	}

	.lightbox-caption {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 16px;
		padding: 14px 18px;
		color: #f0f0f0;
	}

	.lightbox-caption h5 {
		margin: 0;
		font-size: 1rem;
		color: #f0f0f0;
	}

	.lightbox-caption a {
		color: #29c7d9;
		white-space: nowrap;
		text-decoration: none;
	}

	.lightbox-caption a:hover {
		text-decoration: underline;
	}

	.lightbox-close {
		position: absolute;
		top: 8px;
		right: 8px;
		z-index: 1;
		width: 36px;
		height: 36px;
		border: 0;
		border-radius: 50%;
		background: rgba(0, 0, 0, 0.55);
		color: #fff;
		font-size: 22px;
		line-height: 1;
		cursor: pointer;
	}

	.lightbox-close:hover {
		background: rgba(0, 0, 0, 0.8);
	}
</style>
