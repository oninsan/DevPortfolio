<script lang="ts">
	import { onMount } from 'svelte';
	import Badge from '../ui/Badge.svelte';
	import Card from '../ui/Card.svelte';
	import CardContent from '../ui/CardContent.svelte';
	import CardHeader from '../ui/CardHeader.svelte';
	import CardTitle from '../ui/CardTitle.svelte';
  import { skills } from '$lib/data/skills';
  import { skillCategories } from '$lib/data/skillCategory'; 
  
  
  let skillsElement:Element;
  onMount(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // entry.target.classList.add('animate-fade-in');
				}
			});
		});
		
		if (skillsElement) observer.observe(skillsElement);
		
		return () => observer.disconnect();
	});
</script>

<section id="skills" class="py-20" bind:this={skillsElement}>
	<div class="container mx-auto px-4">
		<div class="text-center mb-16">
			<h2 class="text-3xl md:text-4xl mb-4">Skills & Technologies</h2>
			<p class="text-xl text-muted-foreground max-w-2xl mx-auto">
				Here are the technologies and tools I work with to bring ideas to life.
			</p>
		</div>

		<div class="grid md:grid-cols-3 gap-8">
			{#each skillCategories as category (category.id)}
				<Card className="border-none shadow-sm">
					<CardHeader>
						<CardTitle className="text-center">{category.title}</CardTitle>
					</CardHeader>
					<CardContent>
						<div class="flex flex-wrap gap-2 justify-center">
							{#each skills as skill (skill.id)}
                {#if skill.category == category.title}
                  <Badge 
                    variant="secondary"
                    className="text-sm py-1 px-3"
                  >
                    {skill.skill}
                  </Badge>
                {/if}
							{/each}
						</div>
					</CardContent>
				</Card>
			{/each}
		</div>
	</div>
</section>

<style>
  .animate-fade-in {
		animation: fade-in 1s ease-out;
	}
</style>