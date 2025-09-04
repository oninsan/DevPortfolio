<script lang="ts">
  import Card from '../ui/Card.svelte';
  import Badge from '../ui/Badge.svelte';
  import { ExternalLink, Github, Eye } from 'lucide-svelte';
  import { projects } from '$lib/data/project';
  import { fade, fly } from 'svelte/transition';
  import { onMount } from 'svelte';

  const filters = ['All', 'React', 'Svelte', 'Django', 'Full Stack'];

  let activeFilter: string = $state('All');
  let initialLoading: boolean = $state(true);

  let filteredProjects = $derived(
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter)
  );

  // Preload images and manage the initial loading state for the skeleton UI
  onMount(() => {
    const imagePromises = projects.map((project) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = project.image;
        img.onload = resolve;
        img.onerror = reject; // You can also handle errors here
      });
    });

    // Wait for all images to be loaded before hiding the skeletons
    Promise.all(imagePromises)
      .then(() => {
        initialLoading = false;
      })
      .catch((error) => {
        console.error("Error loading project images:", error);
        // Even if images fail, we should hide the loader
        initialLoading = false; 
      });
  });
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
          onclick={() => (activeFilter = filter)}
          class="px-6 py-2 rounded-full font-medium transition-all duration-300
          {activeFilter === filter
            ? 'bg-primary text-white shadow-lg'
            : 'bg-white text-gray-600 hover:bg-primary hover:text-white shadow-md'}"
        >
          {filter}
        </button>
      {/each}
    </div>

    <!-- Projects Grid or Skeletons -->
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#if initialLoading}
        <!-- Skeleton Loader Grid -->
        {#each filteredProjects as _}
          <div class="!bg-gray-200 rounded-lg shadow-md p-4 space-y-4">
            <div class="skeleton-box !h-48 !w-full"></div>
            <div class="space-y-3">
              <div class="skeleton-box !h-6 !w-3/4"></div>
              <div class="skeleton-box !h-4 !w-full"></div>
              <div class="skeleton-box !h-4 !w-5/6"></div>
              <div class="!flex flex-wrap gap-2 pt-2">
                <div class="skeleton-box !h-6 !w-16 !rounded-full"></div>
                <div class="skeleton-box !h-6 !w-20 !rounded-full"></div>
              </div>
            </div>
          </div>
        {/each}
      {:else}
        <!-- Actual Projects Grid -->
        {#each filteredProjects as project, i (`${project.id}-${i}`)}
          <div in:fly={{ y: 30, duration: 400, delay: i * 100 }}>
            <Card
              className="group h-full flex flex-col overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 project-card"
            >
              <!-- Project Image -->
              <div class="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <div class="absolute bottom-4 left-4 right-4 flex justify-center space-x-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="bg-white text-gray-900 p-2 rounded-full hover:bg-primary hover:text-white transition-colors duration-200"
                      aria-label="View Live Demo"
                    >
                      <Eye class="h-5 w-5" />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="bg-white text-gray-900 p-2 rounded-full hover:bg-primary hover:text-white transition-colors duration-200"
                      aria-label="View Source Code"
                    >
                      <Github class="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
              <!-- Project Details -->
              <div class="p-6 flex-grow flex flex-col">
                <h3
                  class="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-200"
                >
                  {project.title}
                </h3>
                <p class="text-gray-600 text-sm mb-4 leading-relaxed flex-grow">
                  {project.description}
                </p>
                <!-- Technologies -->
                <div class="flex flex-wrap gap-2 mb-4">
                  {#each project.technologies as tech}
                    <Badge variant="secondary" className="text-xs">{tech}</Badge>
                  {/each}
                </div>
                <!-- Links -->
                <div class="flex space-x-4 mt-auto">
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
      {/if}
    </div>

    {#if !initialLoading && filteredProjects.length === 0}
      <div class="text-center py-16" in:fade>
        <p class="text-gray-500 text-lg">No projects found for the selected filter.</p>
      </div>
    {/if}
  </div>
</section>