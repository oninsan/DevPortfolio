<script lang="ts">
	import { onMount } from 'svelte';
	import { ChevronDown } from 'lucide-svelte';
  import profilePic from '$lib/assets/profile.png'
	import { fade, fly } from 'svelte/transition';
	
	let heroElement:Element;
	
	onMount(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('animate-fade-in');
				}
			});
		});
		
		if (heroElement) observer.observe(heroElement);		
		return () => observer.disconnect();
	});

	function scrollToAbout() {
		const element = document.getElementById('about');
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	}

	function scrollToSection(href:string) {
		const targetId = href.substring(1);
		const element = document.getElementById(targetId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	}
</script>

<section id="home" class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-700 text-white relative overflow-hidden" bind:this={heroElement}>
	<!-- Background Pattern -->
	<div class="absolute inset-0 opacity-10">
		<div class="absolute inset-0" style="background-image: url(&quot;data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E&quot;);"></div>
	</div>

	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
		<div class="space-y-8">
			<!-- Profile Image -->
			<div class="mx-auto w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-2xl">
				<img 
					src="{profilePic}" 
					alt="Profile" 
					class="w-full h-full object-cover"
				/>
			</div>

			<!-- Main Content -->
			<div class="space-y-6">
				<h1 class="text-5xl md:text-7xl font-bold leading-tight">
					Hi, I'm <span class="text-primary">Niño Abao</span>
				</h1>
				
				<p class="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
					A passionate web developer and an IT Instructor, creating amazing digital experiences
				</p>
				
				<p class="text-lg text-blue-200 max-w-2xl mx-auto leading-relaxed">
					I love building modern, responsive websites and web applications 
					using the latest technologies. Let's bring your ideas to life!
				</p>
			</div>

			<!-- CTA Buttons -->
			<div class="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
				<button 
					on:click={scrollToAbout}
					class="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
				>
					Learn More About Me
				</button>
				
				<button 
					on:click={() => scrollToSection('#contact')}
					class="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:-translate-y-1"
				>
					Get In Touch
				</button>
			</div>
		</div>

		<!-- Scroll Indicator -->
		<div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
			<button on:click={scrollToAbout} class="text-white hover:text-primary transition-colors duration-200">
				<ChevronDown class="h-8 w-8" />
			</button>
		</div>
	</div>
</section>

<style>
	@keyframes fade-in {
		from { opacity: 0; transform: translateY(30px); }
		to { opacity: 1; transform: translateY(0); }
	}
	
	.animate-fade-in {
		animation: fade-in 1s ease-out;
	}
</style>