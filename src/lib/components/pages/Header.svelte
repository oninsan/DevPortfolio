<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
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

  let observer: IntersectionObserver;

  onMount(() => {
    // Mark header background on scroll
    const handleScroll = () => {
      isScrolled = window.scrollY > 50;
    };
    window.addEventListener('scroll', handleScroll);

    // Intersection Observer for sections
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6 // section must be 60% visible
    };

    observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          currentSection = id;

          if (window.location.hash.replace('#', '') !== id) {
            history.replaceState(null, '', `#${id}`);
          }
        }
      }
    }, options);

    // Observe each section
    navItems.forEach(item => {
      const el = document.getElementById(item.href.substring(1));
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (observer) observer.disconnect();
    };
  });

  const scrollToSection = (href: string) => {
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      isMobileMenuOpen = false;
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