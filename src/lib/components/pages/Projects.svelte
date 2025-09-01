<script lang="ts">
	import Card from '../ui/Card.svelte';
	import Badge from '../ui/Badge.svelte';
	import { ExternalLink, Github, Eye } from 'lucide-svelte';
  import { projects } from '$lib/data/project';
	import { fade, fly } from 'svelte/transition';
	
	let activeFilter:string = 'All';
	const filters = ['All', 'React', 'Svelte', 'Full Stack'];
	
	
	$: filteredProjects = activeFilter === 'All' 
		? projects 
		: projects.filter(project => project.category === activeFilter);
	
</script>

<section id="projects" class="py-20 bg-gray-50">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-16">
			<h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Featured Projects</h2>
			<div class="w-24 h-1 bg-primary mx-auto mb-6"></div>
			<p class="text-gray-600 max-w-3xl mx-auto text-lg">
				Here are some of my recent projects that showcase my skills and experience
			</p>
		</div>

		<!-- Filter Buttons -->
		<div class="flex flex-wrap justify-center gap-4 mb-12">
			{#each filters as filter}
				<button
					on:click={() => activeFilter = filter}
					class="px-6 py-2 rounded-full font-medium transition-all duration-300
						{activeFilter === filter 
							? 'bg-primary text-white shadow-lg' 
							: 'bg-white text-gray-600 hover:bg-primary hover:text-white shadow-md'}"
				>
					{filter}
				</button>
			{/each}
		</div>

		<!-- Projects Grid -->
		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each filteredProjects as project, i (`${project.id}-${i}`)}
        <div in:fly={{ y: 30, duration: 400, delay: i * 100 }}>
          <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 project-card">
              <!-- Project Image -->
              <div class="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div class="absolute bottom-4 left-4 right-4 flex justify-between">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="bg-white text-gray-900 p-2 rounded-full hover:bg-primary hover:text-white transition-colors duration-200"
                    >
                      <Eye class="h-4 w-4" />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="bg-white text-gray-900 p-2 rounded-full hover:bg-primary hover:text-white transition-colors duration-200"
                    >
                      <Github class="h-4 w-4" />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="bg-white text-gray-900 p-2 rounded-full hover:bg-primary hover:text-white transition-colors duration-200"
                    >
                      <ExternalLink class="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
              <!-- Project Details -->
              <div class="p-6">
                <h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-200">
                  {project.title}
                </h3>
                <p class="text-gray-600 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <!-- Technologies -->
                <div class="flex flex-wrap gap-2 mb-4">
                  {#each project.technologies as tech}
                    <Badge variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  {/each}
                </div>
                <!-- Links -->
                <div class="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex-1 bg-primary hover:bg-primary/90 text-white text-center py-2 px-4 rounded-lg font-medium transition-colors duration-200 text-sm"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded-lg font-medium transition-colors duration-200 text-sm"
                  >
                    Code
                  </a>
                </div>
              </div>
            </Card>
          </div>
        {/each}
      </div>

		{#if filteredProjects.length === 0}
			<div class="text-center py-16">
				<p class="text-gray-500 text-lg">No projects found for the selected filter.</p>
			</div>
		{/if}
	</div>
</section>