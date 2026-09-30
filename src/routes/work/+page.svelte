<script lang="ts">
	import { base } from '$app/paths';
	import { ExternalLink, Code2 } from 'lucide-svelte';
	import { projects } from '$lib/data/project';
	import ProjectVisual from '$lib/components/pages/ProjectVisual.svelte';
	const workUrl = 'https://oninsan.github.io/DevPortfolio/work/';
</script>

<svelte:head>
	<title>Project stories — Niño Abao</title>
	<meta
		name="description"
		content="A closer look at Niño Abao’s work in automation, web applications, shared architecture, and React Native teaching."
	/>
	<link rel="canonical" href={workUrl} />
	<meta property="og:title" content="Project stories — Niño Abao" />
	<meta
		property="og:description"
		content="The problems, decisions, and outcomes behind four selected projects."
	/>
	<meta property="og:url" content={workUrl} />
	<meta property="og:type" content="website" />
</svelte:head>

<main id="main" class="case-page shell">
	<a class="case-back" href={`${base}/#projects`}
		><span aria-hidden="true">←</span> Back to selected work</a
	>
	<div class="case-intro">
		<p class="eyebrow"><span class="small-line"></span> The work behind the work</p>
		<h1>From problem<br /><span>to product.</span></h1>
		<p>
			Here’s a closer look at four projects I can walk you through: what each one needed, how I
			approached it, and what I built.
		</p>
	</div>
	<nav class="case-index" aria-label="Project stories">
		{#each projects as project (project.slug)}<a href={`#${project.slug}`}
				><span class="mono">0{project.id}</span><span>{project.title}</span></a
			>{/each}
	</nav>
	{#each projects as project (project.slug)}
		<article id={project.slug} class="case-story" aria-labelledby={`${project.slug}-title`}>
			<div class="section-kicker">
				<span class="mono">0{project.id} / {project.category.toUpperCase()}</span><span class="rule"
				></span>
			</div>
			<div class="case-story-heading">
				<div>
					<h2 id={`${project.slug}-title`}>{project.title}</h2>
					<p>{project.description}</p>
				</div>
				<span class="case-role mono">{project.role}</span>
			</div>
			<div class="case-story-grid">
				<div class="case-visual"><ProjectVisual {project} /></div>
				<div class="case-narrative">
					<div>
						<h3>The problem</h3>
						<p>{project.challenge}</p>
					</div>
					<div>
						<h3>How I approached it</h3>
						<ol>
							{#each project.approach as step (step)}<li>{step}</li>{/each}
						</ol>
					</div>
					<div>
						<h3>Where it landed</h3>
						<p>{project.result}</p>
					</div>
				</div>
			</div>
			<div class="case-story-footer">
				<div class="tags">
					{#each project.technologies as tech (tech)}<span>{tech}</span>{/each}
				</div>
				<div class="case-story-links">
					{#if project.liveUrl}<a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
							><ExternalLink size={17} /> {project.liveLabel}</a
						>{/if}<a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
						><Code2 size={18} /> View source</a
					>{#if project.secondarySourceUrl}<a
							href={project.secondarySourceUrl}
							target="_blank"
							rel="noopener noreferrer"><Code2 size={18} /> Backend source</a
						>{/if}
				</div>
			</div>
		</article>
	{/each}
	<div class="case-end">
		<p>Want to see something else I’ve built?</p>
		<a href="https://github.com/oninsan?tab=repositories" target="_blank" rel="noopener noreferrer"
			>Browse all repositories <ExternalLink size={17} /></a
		>
	</div>
</main>
