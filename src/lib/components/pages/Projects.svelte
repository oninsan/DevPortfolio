<script lang="ts">
	import { Github, ExternalLink, Code2 } from 'lucide-svelte';
	import { base } from '$app/paths';
	import { projects } from '$lib/data/project';
	import ProjectVisual from './ProjectVisual.svelte';
</script>

<section id="projects" class="section shell work-section" aria-labelledby="projects-title">
	<div class="section-kicker">
		<span class="mono">01 / SELECTED WORK</span><span class="rule"></span>
	</div>
	<div class="section-heading">
		<h2 id="projects-title">Things I’ve built<span class="accent">.</span></h2>
		<p>Four different problems. Four ways of thinking through them.</p>
	</div>
	<div class="projects-grid">
		{#each projects as project (project.id)}
			<article class="project-card">
				<div class="project-image">
					<ProjectVisual {project} /><span class="project-number mono">0{project.id}</span>
				</div>
				<div class="project-body">
					<div class="project-category mono">
						{project.category}{#if project.status}<span>{project.status}</span>{/if}
					</div>
					<h3>{project.title}</h3>
					<p>{project.description}</p>
					<div class="tags project-tags">
						{#each project.technologies as tech (tech)}<span>{tech}</span>{/each}
					</div>
					<div class="project-links">
						<a class="project-story-link" href={`${base}/work/#${project.slug}`}
							>Read the story <span aria-hidden="true">↗</span></a
						>
						<div class="project-secondary-links">
							<a
								href={project.githubUrl}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={`${project.title} source code`}><Code2 size={17} /> Source</a
							>{#if project.liveUrl}<a
									href={project.liveUrl}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={`${project.title} ${project.liveLabel}`}
									><ExternalLink size={15} /> {project.liveLabel}</a
								>{/if}
						</div>
					</div>
				</div>
			</article>
		{/each}
	</div>
	<div class="work-footer">
		<span>Earlier experiments and more teaching resources live on GitHub.</span><a
			href="https://github.com/oninsan?tab=repositories"
			target="_blank"
			rel="noopener noreferrer"><Github size={18} /> Explore all repositories</a
		>
	</div>
</section>
