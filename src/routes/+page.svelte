<script lang="ts">
	import Hero from '$lib/components/pages/Hero.svelte';
	import About from '$lib/components/pages/About.svelte';
	import Skills from '$lib/components/pages/Skills.svelte';
	import Projects from '$lib/components/pages/Projects.svelte';
	import Contact from '$lib/components/pages/Contact.svelte';
	import Footer from '$lib/components/pages/Footer.svelte';
</script>

<svelte:head>
	<title>Portfolio - Web Developer</title>
	<meta name="description" content="Professional web developer portfolio showcasing skills, projects, and experience in modern web development." />
	<meta property="og:title" content="Niño Abao's Portfolio" />
  <meta property="og:description" content="Explore Niño's work in IT education, web development, and design." />
  <meta property="og:image" content="https://www.niñoabao.online/#home" />
  <meta property="og:url" content="https://www.niñoabao.online" />
  <meta property="og:type" content="website" />
</svelte:head>

<div class="min-h-screen">
	<!-- <Header /> -->
	<main>
		<Hero />
		<About />
		<Skills />
		<Projects />
		<Contact />
	</main>
	<!-- <Footer /> -->
</div>