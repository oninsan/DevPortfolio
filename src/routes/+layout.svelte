<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/monogram.svg';
	import Header from '$lib/components/pages/Header.svelte';
	import Footer from '$lib/components/pages/Footer.svelte';
	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<Header />
{@render children?.()}
<Footer />
