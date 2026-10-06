<script lang="ts">
	import { Github, ExternalLink, ArrowUpRight } from 'lucide-svelte';
	import { base } from '$app/paths';
	import { projects } from '$lib/data/project';
	import { reveal, tilt } from '$lib/motion';
	import ProjectVisual from './ProjectVisual.svelte';
	function accent() {
		if (typeof window !== 'undefined') window.dispatchEvent(new Event('portfolio:accent'));
	}
</script>

<section id="projects" class="section shell work-section" aria-labelledby="projects-title">
	<div class="section-kicker" use:reveal>
		<span class="mono">01 / THE WORK</span><span class="rule"></span><span class="mono"
			>SELECTED PROJECTS</span
		>
	</div>
	<div class="section-heading" use:reveal>
		<h2 id="projects-title">Proof in the <em>making.</em></h2>
		<p>
			A few different problems, built with the same curiosity. Open a project to see the thinking
			behind it.
		</p>
	</div>
	<div class="projects-grid">
		{#each projects as project, index (project.id)}
			<article
				class="project-card"
				use:reveal
				use:tilt
				onpointerenter={accent}
				style={`--reveal-delay:${(index % 2) * 130}ms`}
			>
				<div class="project-card-top">
					<span class="mono">PROJECT / 0{project.id}</span><span class="mono"
						>{project.category}</span
					>
				</div>
				<a
					class="project-image"
					href={`${base}/work/#${project.slug}`}
					aria-label={`Read the ${project.title} project story`}
					><ProjectVisual {project} /><span class="project-image-arrow"
						><ArrowUpRight size={26} /></span
					></a
				>
				<div class="project-body">
					<div class="project-category mono">
						{project.role}{#if project.status}<span>{project.status}</span>{/if}
					</div>
					<h3>{project.title}</h3>
					<p>{project.description}</p>
					<div class="tags project-tags">
						{#each project.technologies as tech (tech)}<span>{tech}</span>{/each}
					</div>
					<div class="project-links">
						<a class="project-story-link" href={`${base}/work/#${project.slug}`}
							>Explore the story <ArrowUpRight size={16} /></a
						>
						<div class="project-secondary-links">
							<a
								href={project.githubUrl}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={`${project.title} source code`}>Source</a
							>{#if project.liveUrl}<a
									href={project.liveUrl}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={`${project.title} ${project.liveLabel}`}
									><ExternalLink size={14} /> Demo</a
								>{/if}
						</div>
					</div>
				</div>
			</article>
		{/each}
	</div>
	<div class="work-footer" use:reveal>
		<span>There’s more in the workshop.</span><a
			href="https://github.com/oninsan?tab=repositories"
			target="_blank"
			rel="noopener noreferrer"
			><Github size={18} /> Explore all repositories <ArrowUpRight size={16} /></a
		>
	</div>
</section>
