<script lang="ts">
	const repeats = [0, 1, 2, 3];
</script>

<div class="marquee" aria-hidden="true">
	<div class="marquee-track">
		{#each repeats as repeat (repeat)}
			<span>THINK CLEARLY <b>✳</b> BUILD BOLDLY <b>✳</b> KEEP LEARNING <b>✳</b></span>
		{/each}
	</div>
</div>
