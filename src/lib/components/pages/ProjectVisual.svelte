<script lang="ts">
	import { base } from '$app/paths';
	import type { Project } from '$lib/data/project';
	let { project }: { project: Project } = $props();
</script>

{#if project.image}
	<img
		src={`${base}/${project.image}`}
		alt={project.imageAlt ?? project.title}
		width="1000"
		height="667"
		loading="lazy"
		decoding="async"
	/>
{:else if project.slug === 'chairflow-shared'}
	<div
		class="project-art art-shared"
		role="img"
		aria-label="Diagram of shared ChairFlow tokens connecting web, mobile, and API projects"
	>
		<div class="art-content" aria-hidden="true">
			<span class="art-eyebrow">@chairflow / shared</span>
			<div class="art-center">theme.ts <span>·</span> types.ts <span>·</span> status.ts</div>
			<div class="art-branches"><span>WEB</span><span>MOBILE</span><span>API</span></div>
			<span class="art-footnote">ONE SHARED FOUNDATION</span>
		</div>
	</div>
{:else}
	<div
		class="project-art art-tasks"
		role="img"
		aria-label="Diagram of the task list app's screen, state hook, and device storage"
	>
		<div class="art-content" aria-hidden="true">
			<span class="art-eyebrow">EXPO / TYPESCRIPT</span>
			<div class="art-task-row"><span class="art-check">✓</span><span>TasksScreen</span></div>
			<div class="art-task-row"><span class="art-check">✓</span><span>useTasks()</span></div>
			<div class="art-task-row"><span class="art-check">✓</span><span>AsyncStorage</span></div>
			<span class="art-footnote">BUILD IT. BREAK IT. LEARN IT.</span>
		</div>
	</div>
{/if}
