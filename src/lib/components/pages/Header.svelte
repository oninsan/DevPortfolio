<script lang="ts">
	import { onMount } from 'svelte';
  import { Menu, X } from 'lucide-svelte';

  let isScrolled = $state(false);
  let isMobileMenuOpen = $state(false);
  let currentSection = $state('home');

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ];

  // Sections cache
  let sections: { id: string; element: HTMLElement | null }[] = [];

  // For debouncing scroll events
  let scrollTimeout: number | undefined;
  const scrollDebounce = 400; // match smooth scroll duration

  onMount(() => {
    sections = navItems.map(item => ({
      id: item.href.substring(1),
      element: document.getElementById(item.href.substring(1))
    }));

    const handleScroll = () => {
      isScrolled = window.scrollY > 50;

      // cancel pending update
      if (scrollTimeout) clearTimeout(scrollTimeout);

      scrollTimeout = window.setTimeout(() => {
        let scrollPos = window.scrollY + window.innerHeight / 2;

        for (const { id, element } of sections) {
          if (
            element &&
            element.offsetTop <= scrollPos &&
            element.offsetTop + element.offsetHeight > scrollPos
          ) {
            if (window.location.hash.replace('#', '') !== id) {
              window.location.hash = id;
            }
            currentSection = id;
            break;
          }
        }
      }, scrollDebounce);
    };

    // Run once on mount
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  function scrollToSection(href: string) {
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      isMobileMenuOpen = false;

      // Ensure hash updates when animation finishes
      setTimeout(() => {
        if (window.location.hash !== href) {
          window.location.hash = href;
        }
        currentSection = targetId;
      }, scrollDebounce);
    }
  }
</script>

<header class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 {isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}">
	<nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex items-center justify-between h-16">
			<!-- Logo -->
			<div class="flex-shrink-0">
        <div class="text-2xl font-bold {isScrolled ? 'text-gray-900' : 'text-white'}">
          <span class="text-primary">Dev</span>Portfolio
        </div>
			</div>

			<!-- Desktop Navigation -->
			<div class="hidden md:block">
				<div class="ml-10 flex items-baseline space-x-8">
					{#each navItems as item}
						<button
                onclick={() => scrollToSection(item.href)}
                class="px-3 py-2 text-sm font-medium transition-colors duration-200 hover:text-primary {isScrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-primary'} {currentSection === item.href.replace('#', '') ? 'text-primary' : ''}"
            >
                {item.label}
            </button>
					{/each}
				</div>
			</div>

			<!-- Mobile menu button -->
			<div class="md:hidden">
				<button
					onclick={() => isMobileMenuOpen = !isMobileMenuOpen}
					class="p-2 rounded-md {isScrolled ? 'text-gray-700' : 'text-white'}"
				>
					{#if isMobileMenuOpen}
						<X class="h-6 w-6" />
					{:else}
						<Menu class="h-6 w-6" />
					{/if}
				</button>
			</div>
		</div>

		<!-- Mobile Navigation -->
		{#if isMobileMenuOpen}
			<div class="md:hidden">
				<div class="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-sm rounded-lg mt-2 shadow-lg">
					{#each navItems as item}
						<button
                onclick={() => scrollToSection(item.href)}
                class="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors duration-200 {currentSection === item.href.replace('#', '') ? 'text-primary' : ''}"
            >
                {item.label}
            </button>
					{/each}
				</div>
			</div>
		{/if}
	</nav>
</header>
<style>
  html {
    scroll-behavior: smooth; /* fallback for anchor clicks */
  }
</style>