<script lang="ts">
	import { Github, Linkedin, MapPin } from 'lucide-svelte';
	import profilePic from '$lib/assets/profile.webp';
</script>

<section id="home" class="hero shell" aria-labelledby="hero-title">
	<div class="hero-copy">
		<p class="eyebrow"><span class="small-line"></span> Hi, I’m Niño Abao</p>
		<h1 id="hero-title">Thoughtful code.<br /><span>Useful things.</span></h1>
		<p class="hero-description">
			Web developer and IT instructor. I build practical digital experiences and help others find
			their footing in code.
		</p>
		<div class="hero-actions">
			<a class="button button-primary" href="#projects">Explore my work</a>
			<a class="button button-secondary" href="#contact">Get in touch</a>
		</div>
		<div class="hero-meta">
			<span><MapPin size={15} /> Cebu, Philippines</span>
			<div class="social-links">
				<a
					href="https://github.com/oninsan"
					target="_blank"
					rel="noreferrer"
					aria-label="Niño Abao on GitHub"><Github size={19} /></a
				>
				<a
					href="https://www.linkedin.com/in/ni%C3%B1o-abao-415124185/"
					target="_blank"
					rel="noreferrer"
					aria-label="Niño Abao on LinkedIn"><Linkedin size={19} /></a
				>
			</div>
		</div>
	</div>
	<div class="portrait-wrap">
		<div class="portrait-frame">
			<img
				src={profilePic}
				alt="Niño Abao, web developer and IT instructor"
				width="850"
				height="850"
				fetchpriority="high"
			/>
			<div class="portrait-caption">
				<span class="mono">BUILD / TEACH / LEARN</span><span
					>Always curious.<br />Always building.</span
				>
			</div>
		</div>
		<span class="portrait-label mono">A little code. A lot of curiosity.</span>
	</div>
	<div class="hero-bottom">
		<span class="mono">WEB DEVELOPMENT & IT EDUCATION</span><a href="#projects"
			>Scroll to discover <span aria-hidden="true">↓</span></a
		>
	</div>
</section>
