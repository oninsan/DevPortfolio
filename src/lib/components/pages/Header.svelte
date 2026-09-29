<script lang="ts">
	import { Menu, X } from 'lucide-svelte';
	let menuOpen = $state(false);
	const links = [
		{ href: '#projects', label: 'Work' },
		{ href: '#about', label: 'About' },
		{ href: '#skills', label: 'Toolkit' },
		{ href: '#contact', label: 'Contact' }
	];
</script>

<svelte:window
	onkeydown={(event) => {
		if (event.key === 'Escape') menuOpen = false;
	}}
/>
<a class="skip-link" href="#main">Skip to content</a>
<header class="site-header">
	<nav class="shell nav" aria-label="Main navigation">
		<a href="#home" class="brand" aria-label="Niño Abao — home">
			<span class="brand-mark" aria-hidden="true">n<span>.</span></span>
			<span>Niño Abao<span class="brand-sub">Developer & instructor</span></span>
		</a>
		<div class="desktop-nav">
			{#each links as link (link.href)}
				<a href={link.href}>{link.label}</a>
			{/each}
		</div>
		<a class="nav-contact" href="mailto:kokoybaldofordawin@gmail.com"
			>Let’s talk <span aria-hidden="true">↗</span></a
		>
		<button
			class="menu-toggle"
			onclick={() => (menuOpen = !menuOpen)}
			aria-expanded={menuOpen}
			aria-controls="mobile-nav"
			aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
		>
			{#if menuOpen}<X size={22} />{:else}<Menu size={22} />{/if}
		</button>
	</nav>
	{#if menuOpen}
		<nav id="mobile-nav" class="mobile-nav shell" aria-label="Mobile navigation">
			{#each links as link (link.href)}
				<a href={link.href} onclick={() => (menuOpen = false)}>{link.label}</a>
			{/each}
		</nav>
	{/if}
</header>
