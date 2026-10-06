<script lang="ts">
	import { Menu, X, ArrowUpRight } from 'lucide-svelte';
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	import SoundToggle from './SoundToggle.svelte';
	let menuOpen = $state(false);
	let progress = $state(0);
	const links = [
		{ href: `${base}/#projects`, label: 'Work', number: '01' },
		{ href: `${base}/#about`, label: 'About', number: '02' },
		{ href: `${base}/#skills`, label: 'Toolkit', number: '03' },
		{ href: `${base}/#contact`, label: 'Contact', number: '04' }
	];
	onMount(() => {
		const update = () => {
			const total = document.documentElement.scrollHeight - innerHeight;
			progress = total > 0 ? Math.min(100, (scrollY / total) * 100) : 0;
		};
		update();
		window.addEventListener('scroll', update, { passive: true });
		window.addEventListener('resize', update);
		return () => {
			window.removeEventListener('scroll', update);
			window.removeEventListener('resize', update);
		};
	});
</script>

<svelte:window
	onkeydown={(event) => {
		if (event.key === 'Escape') menuOpen = false;
	}}
/>
<a class="skip-link" href="#main">Skip to content</a>
<header class="site-header">
	<nav class="shell nav" aria-label="Main navigation">
		<a href={`${base}/#home`} class="brand" aria-label="Niño Abao — home">
			<span class="brand-mark" aria-hidden="true">n<span>✳</span></span>
			<span class="brand-name"
				>Niño Abao<span class="brand-sub">Developer <span class="accent">/</span> Educator</span
				></span
			>
		</a>
		<div class="desktop-nav">
			{#each links as link (link.href)}<a href={link.href}
					><small>{link.number}</small>{link.label}</a
				>{/each}
		</div>
		<div class="nav-tools">
			<SoundToggle />
			<a class="nav-contact" href={`${base}/#contact`}>Let’s talk <ArrowUpRight size={17} /></a>
			<button
				class="menu-toggle"
				type="button"
				onclick={() => (menuOpen = !menuOpen)}
				aria-expanded={menuOpen}
				aria-controls="mobile-nav"
				aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
			>
				{#if menuOpen}<X size={23} />{:else}<Menu size={23} />{/if}
			</button>
		</div>
	</nav>
	{#if menuOpen}
		<nav id="mobile-nav" class="mobile-nav shell" aria-label="Mobile navigation">
			{#each links as link (link.href)}<a href={link.href} onclick={() => (menuOpen = false)}
					><small>{link.number}</small>{link.label}<span aria-hidden="true">↗</span></a
				>{/each}
		</nav>
	{/if}
	<div class="scroll-progress" style={`width: ${progress}%`} aria-hidden="true"></div>
</header>
