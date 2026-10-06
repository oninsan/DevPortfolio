<script lang="ts">
	import Hero from '$lib/components/pages/Hero.svelte';
	import Marquee from '$lib/components/pages/Marquee.svelte';
	import About from '$lib/components/pages/About.svelte';
	import Skills from '$lib/components/pages/Skills.svelte';
	import Projects from '$lib/components/pages/Projects.svelte';
	import Contact from '$lib/components/pages/Contact.svelte';
	const siteUrl = 'https://oninsan.github.io/DevPortfolio/';
</script>

<svelte:head>
	<title>Niño Abao — Web Developer & IT Instructor</title>
	<meta
		name="description"
		content="Niño Abao is a web developer and IT instructor in Cebu, Philippines. Explore practical web applications, projects, and the tools behind them."
	/>
	<meta name="theme-color" content="#0b0d12" />
	<link rel="canonical" href={siteUrl} />
	<meta property="og:title" content="Niño Abao — Web Developer & IT Instructor" />
	<meta
		property="og:description"
		content="Thoughtful digital experiences, practical tools, and IT education from Cebu, Philippines."
	/>
	<meta property="og:url" content={siteUrl} />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="en_US" />
</svelte:head>

<main id="main"><Hero /><Marquee /><Projects /><About /><Skills /><Contact /></main>
