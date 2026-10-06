<script lang="ts">
	import { ArrowDownRight, ArrowUpRight, Github, Linkedin, MapPin } from 'lucide-svelte';
	import profilePic from '$lib/assets/profile.webp';
	import { reveal } from '$lib/motion';
	let pointerX = $state(50);
	let pointerY = $state(50);
	function move(event: PointerEvent) {
		const bounds =
			event.currentTarget instanceof HTMLElement
				? event.currentTarget.getBoundingClientRect()
				: null;
		if (!bounds) return;
		pointerX = ((event.clientX - bounds.left) / bounds.width) * 100;
		pointerY = ((event.clientY - bounds.top) / bounds.height) * 100;
	}
</script>

<section
	id="home"
	class="hero"
	aria-labelledby="hero-title"
	onpointermove={move}
	style={`--pointer-x:${pointerX}%;--pointer-y:${pointerY}%`}
>
	<div class="hero-glow" aria-hidden="true"></div>
	<div class="shell hero-layout">
		<div class="hero-copy" use:reveal>
			<p class="hero-eyebrow">
				<span class="status-dot"></span> HELLO, I’M NIÑO ABAO <span class="eyebrow-divider">/</span>
				DEVELOPER & INSTRUCTOR
			</p>
			<h1 id="hero-title">
				I make<br /><span class="hero-outline">useful things</span><br /><span class="hero-script"
					>feel alive<span class="hero-period">.</span></span
				>
			</h1>
			<p class="hero-description">
				I turn everyday problems into thoughtful digital experiences, then bring what I learn back
				to the classroom.
			</p>
			<div class="hero-actions">
				<a class="button button-primary" href="#projects"
					>Explore my work <ArrowUpRight size={18} /></a
				>
				<a class="button button-secondary" href="#contact"
					>Let’s connect <span aria-hidden="true">↗</span></a
				>
			</div>
			<div class="hero-meta">
				<span><MapPin size={15} /> Bogo City, Cebu, Philippines</span><span class="hero-meta-rule"
				></span><a
					href="https://github.com/oninsan"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Niño Abao on GitHub"><Github size={19} /></a
				><a
					href="https://www.linkedin.com/in/ni%C3%B1o-abao-415124185/"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Niño Abao on LinkedIn"><Linkedin size={19} /></a
				>
			</div>
		</div>
		<div class="hero-visual" use:reveal>
			<div class="orbit orbit-one" aria-hidden="true"></div>
			<div class="orbit orbit-two" aria-hidden="true"></div>
			<div class="hero-star hero-star-one" aria-hidden="true">✳</div>
			<div class="hero-star hero-star-two" aria-hidden="true">✦</div>
			<div class="portrait-frame">
				<img
					src={profilePic}
					alt="Niño Abao, web developer and IT instructor"
					width="850"
					height="850"
					fetchpriority="high"
				/>
				<div class="portrait-shade"></div>
				<div class="portrait-corner portrait-corner-top"></div>
				<div class="portrait-corner portrait-corner-bottom"></div>
			</div>
			<div class="portrait-sticker">
				<span>BUILD</span><b>✳</b><span>TEACH</span><b>✳</b><span>LEARN</span>
			</div>
			<div class="portrait-caption">
				<span class="mono">CURRENTLY EXPLORING</span><strong>What can we make better?</strong>
			</div>
		</div>
	</div>
	<div class="shell hero-bottom">
		<span class="mono">SCROLL TO EXPLORE THE WORK</span><a
			href="#projects"
			aria-label="Scroll to selected projects"><ArrowDownRight size={22} /></a
		><span class="mono hero-bottom-right">PORTFOLIO / NIÑO ABAO</span>
	</div>
</section>
