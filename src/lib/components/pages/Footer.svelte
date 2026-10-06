<script lang="ts">
	import { base } from '$app/paths';
	import { ArrowUpRight } from 'lucide-svelte';
</script>

<footer class="site-footer">
	<div class="shell footer-inner">
		<div>
			<a class="footer-name" href={`${base}/#home`}>Niño Abao<span>✳</span></a>
			<p>Good ideas deserve thoughtful execution.</p>
		</div>
		<div class="footer-links">
			<a href="https://github.com/oninsan" target="_blank" rel="noopener noreferrer"
				>GitHub <ArrowUpRight size={15} /></a
			><a
				href="https://www.linkedin.com/in/ni%C3%B1o-abao-415124185/"
				target="_blank"
				rel="noopener noreferrer">LinkedIn <ArrowUpRight size={15} /></a
			><a href={`${base}/#home`}>Back to top ↑</a>
		</div>
	</div>
	<div class="shell footer-bottom">
		<span>© {new Date().getFullYear()} Niño Abao</span><span
			>MADE WITH CURIOSITY IN CEBU, PHILIPPINES</span
		>
	</div>
</footer>
