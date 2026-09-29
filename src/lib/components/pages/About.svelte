<script lang="ts">
	import { Code2, BookOpen, Guitar, MapPin } from 'lucide-svelte';
</script>

<section id="about" class="section shell" aria-labelledby="about-title">
	<div class="section-kicker">
		<span class="mono">02 / ABOUT ME</span><span class="rule"></span>
	</div>
	<div class="about-grid">
		<div>
			<h2 id="about-title">
				A builder’s mindset.<br /><span class="text-muted">A teacher’s heart.</span>
			</h2>
			<p class="location"><MapPin size={17} /> Bogo City, Cebu, Philippines</p>
		</div>
		<div class="about-copy">
			<p>
				I’m Niño, a web developer and IT instructor who enjoys turning everyday problems into
				practical tools. My work spans responsive websites, web applications, APIs, and database
				integrations.
			</p>
			<p>
				Teaching keeps me curious. I help students connect the concepts to the code through hands-on
				lessons and real projects. Building gives me new things to share in the classroom.
			</p>
			<p class="personal-note">
				<Guitar size={19} /> Away from the keyboard: guitar, paddle sports, and a little coding for fun.
			</p>
		</div>
	</div>
	<div class="practice-grid">
		<article class="practice">
			<Code2 size={24} />
			<h3>Build useful things</h3>
			<p>Clear interfaces and practical software that make everyday work a little easier.</p>
		</article>
		<article class="practice">
			<BookOpen size={24} />
			<h3>Share what I learn</h3>
			<p>Hands-on teaching that helps the next generation of developers get started.</p>
		</article>
	</div>
</section>
