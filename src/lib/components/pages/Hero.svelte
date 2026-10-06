<script lang="ts">
	import { ArrowDownRight, ArrowUpRight, Github, Linkedin, MapPin } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import profilePic from '$lib/assets/portrait-studio.webp';
	import { magnetic, reveal } from '$lib/motion';

	let heroElement: HTMLElement;
	let pointerX = $state(50);
	let pointerY = $state(50);
	let tiltX = $state(0);
	let tiltY = $state(0);

	function move(event: PointerEvent) {
		if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
		const bounds =
			event.currentTarget instanceof HTMLElement
				? event.currentTarget.getBoundingClientRect()
				: null;
		if (!bounds) return;
		pointerX = ((event.clientX - bounds.left) / bounds.width) * 100;
		pointerY = ((event.clientY - bounds.top) / bounds.height) * 100;
		tiltX = ((pointerY - 50) / -50) * 3;
		tiltY = ((pointerX - 50) / 50) * 3;
	}

	function reset() {
		pointerX = 50;
		pointerY = 50;
		tiltX = 0;
		tiltY = 0;
	}

	onMount(() => {
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
		let frame = 0;
		const update = () => {
			if (frame) return;
			frame = requestAnimationFrame(() => {
				heroElement.style.setProperty('--hero-scroll', `${Math.min(scrollY / 700, 1) * 48}px`);
				frame = 0;
			});
		};
		update();
		window.addEventListener('scroll', update, { passive: true });
		return () => {
			window.removeEventListener('scroll', update);
			cancelAnimationFrame(frame);
		};
	});
</script>

<section
	bind:this={heroElement}
	id="home"
	class="hero"
	aria-labelledby="hero-title"
	onpointermove={move}
	onpointerleave={reset}
	style={`--pointer-x:${pointerX}%;--pointer-y:${pointerY}%;--portrait-tilt-x:${tiltX}deg;--portrait-tilt-y:${tiltY}deg`}
>
	<div class="hero-glow" aria-hidden="true"></div>
	<div class="shell hero-layout">
		<div class="hero-copy">
			<p class="hero-eyebrow">
				<span class="status-dot"></span> HELLO, I’M NIÑO ABAO <span class="eyebrow-divider">/</span>
				DEVELOPER & INSTRUCTOR
			</p>
			<h1 id="hero-title">
				<span class="hero-line"><span>I make</span></span>
				<span class="hero-line"><span class="hero-outline">useful things</span></span>
				<span class="hero-line"
					><span class="hero-script">feel alive<span class="hero-period">.</span></span></span
				>
			</h1>
			<p class="hero-description">
				I turn everyday problems into thoughtful digital experiences, then bring what I learn back
				to the classroom.
			</p>
			<div class="hero-actions">
				<a class="button button-primary" href="#projects" use:magnetic
					>Explore my work <ArrowUpRight size={18} /></a
				>
				<a class="button button-secondary" href="#contact" use:magnetic
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
			<div class="portrait-stage">
				<div class="portrait-backplate" aria-hidden="true"></div>
				<div class="portrait-frame">
					<img
						src={profilePic}
						alt="Niño Abao, web developer and IT instructor"
						width="1254"
						height="1254"
						fetchpriority="high"
					/>
					<div class="portrait-sheen" aria-hidden="true"></div>
				</div>
				<div class="portrait-index mono" aria-hidden="true">01 / THE PERSON BEHIND THE PIXELS</div>
				<div class="portrait-caption">
					<span class="mono">BUILD / TEACH / REPEAT</span><strong
						>Curiosity looks good on things.</strong
					>
				</div>
				<div class="portrait-side-note mono" aria-hidden="true">CREATING FROM CEBU ↗</div>
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
