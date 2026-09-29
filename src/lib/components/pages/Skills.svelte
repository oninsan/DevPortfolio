<script lang="ts">
	import { skills } from '$lib/data/skills';
	import { skillCategories } from '$lib/data/skillCategory';
	import { Braces, Database, Wrench } from 'lucide-svelte';
	const icons = [Braces, Database, Wrench];
</script>

<section id="skills" class="toolkit-section" aria-labelledby="skills-title">
	<div class="shell section">
		<div class="section-kicker">
			<span class="mono">03 / THE TOOLKIT</span><span class="rule"></span>
		</div>
		<div class="section-heading">
			<h2 id="skills-title">The tools behind<br />the things I build.</h2>
			<p>From the interface to the database.<br />The right tool for the problem at hand.</p>
		</div>
		<div class="skills-grid">
			{#each skillCategories as category, index (category.id)}
				{@const Icon = icons[index]}
				<article class="skill-card">
					<div class="skill-card-top"><Icon size={23} /><span class="mono">0{index + 1}</span></div>
					<h3>{category.title}</h3>
					<div class="tags">
						{#each skills.filter((skill) => skill.category === category.title) as skill (skill.id)}<span
								>{skill.skill}</span
							>{/each}
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>
