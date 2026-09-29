<script lang="ts">
	import { Github, ExternalLink, Code2 } from 'lucide-svelte';
	import { base } from '$app/paths';
	import { projects } from '$lib/data/project';
	const filters = ['All work', ...new Set(projects.map((project) => project.category))];
	let activeFilter = $state('All work');
	let filteredProjects = $derived(
		activeFilter === 'All work'
			? projects
			: projects.filter((project) => project.category === activeFilter)
	);
</script>

<section id="projects" class="section shell work-section" aria-labelledby="projects-title">
	<div class="section-kicker">
		<span class="mono">01 / SELECTED WORK</span><span class="rule"></span>
	</div>
	<div class="section-heading">
		<h2 id="projects-title">Ideas, made real<span class="accent">.</span></h2>
		<p>Tools for real workflows.<br />Experiments that taught me something.</p>
	</div>
	<div class="work-toolbar">
		<div class="filters" role="group" aria-label="Filter projects by technology">
			{#each filters as filter (filter)}<button
					class:active={activeFilter === filter}
					aria-pressed={activeFilter === filter}
					onclick={() => (activeFilter = filter)}>{filter}</button
				>{/each}
		</div>
		<span class="project-count mono" aria-live="polite"
			>{filteredProjects.length} PROJECT{filteredProjects.length === 1 ? '' : 'S'}</span
		>
	</div>
	<div class="projects-grid">
		{#each filteredProjects as project (project.id)}
			<article class="project-card">
				<div class="project-image">
					<img
						src={`${base}/${project.image}`}
						alt={`${project.title} project preview`}
						width="1536"
						height="1024"
						loading="lazy"
						decoding="async"
					/><span class="project-number mono">0{project.id}</span>
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
						{#if project.githubUrl}<a href={project.githubUrl} target="_blank" rel="noreferrer"
								><Code2 size={17} /> View source</a
							>{/if}
						{#if project.liveUrl}<a href={project.liveUrl} target="_blank" rel="noreferrer"
								>Live demo <ExternalLink size={15} /></a
							>{/if}
						{#if !project.githubUrl && !project.liveUrl}<span class="project-private"
								>Development in progress</span
							>{/if}
					</div>
				</div>
			</article>
		{/each}
	</div>
	<div class="work-footer">
		<span>There’s more where that came from.</span><a
			href="https://github.com/oninsan?tab=repositories"
			target="_blank"
			rel="noreferrer"><Github size={18} /> Explore my GitHub</a
		>
	</div>
</section>
