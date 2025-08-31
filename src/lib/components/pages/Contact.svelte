<script lang="ts">
	import { onMount } from 'svelte';
	import Card from '../ui/Card.svelte';
	import Input from '../ui/Input.svelte';
	import Label from '../ui/Label.svelte';
	import Textarea from '../ui/Textarea.svelte';
	import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-svelte';
	import { fade, fly } from 'svelte/transition';
	
	let contactElement:Element;
	let formData = {
		name: '',
		email: '',
		subject: '',
		message: ''
	};
	let isSubmitting = false;
	
	onMount(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('animate-contact');
				}
			});
		});
		
		if (contactElement) observer.observe(contactElement);
		
		return () => observer.disconnect();
	});

	async function handleSubmit(event:Event) {
		event.preventDefault();
		isSubmitting = true;
		
		// Simulate form submission
		await new Promise(resolve => setTimeout(resolve, 1000));
		
		alert('Thank you for your message! I\'ll get back to you soon.');
		formData = { name: '', email: '', subject: '', message: '' };
		isSubmitting = false;
	}
</script>

<section id="contact" class="py-20 bg-white" bind:this={contactElement}>
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-16">
			<h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get In Touch</h2>
			<div class="w-24 h-1 bg-primary mx-auto mb-6"></div>
			<p class="text-gray-600 max-w-3xl mx-auto text-lg">
				Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
			</p>
		</div>

		<div class="grid lg:grid-cols-2 gap-12">
			<!-- Contact Information -->
			<div class="space-y-8">
				<div>
					<h3 class="text-2xl font-bold text-gray-900 mb-6">Let's start a conversation</h3>
					<p class="text-gray-600 text-lg leading-relaxed mb-8">
						I'm always interested in hearing about new projects and opportunities. 
						Whether you're a company looking to hire, or you're a fellow developer 
						wanting to collaborate, I'd love to hear from you.
					</p>
				</div>

				<!-- Contact Details -->
				<div class="space-y-6">
					<div class="flex items-start space-x-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
							<Mail class="h-6 w-6 text-primary" />
						</div>
						<div>
							<h4 class="font-semibold text-gray-900 mb-1">Email</h4>
							<p class="text-gray-600">kokoybaldofordawin@example.com</p>
							<p class="text-sm text-gray-500">I typically respond within 24 hours</p>
						</div>
					</div>

					<div class="flex items-start space-x-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
							<Phone class="h-6 w-6 text-primary" />
						</div>
						<div>
							<h4 class="font-semibold text-gray-900 mb-1">Phone</h4>
							<p class="text-gray-600">+1 (555) 123-4567</p>
							<p class="text-sm text-gray-500">Available Mon-Fri, 9AM-6PM PST</p>
						</div>
					</div>

					<div class="flex items-start space-x-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
							<MapPin class="h-6 w-6 text-primary" />
						</div>
						<div>
							<h4 class="font-semibold text-gray-900 mb-1">Location</h4>
							<p class="text-gray-600">Bogo City, Cebu, Philippines</p>
							<p class="text-sm text-gray-500">Open to remote work</p>
						</div>
					</div>
				</div>

				<!-- Social Links -->
				<div class="pt-8">
					<h4 class="font-semibold text-gray-900 mb-4">Connect with me</h4>
					<div class="flex space-x-4">
						<a aria-label="github" href="https://github.com/oninsan" target="_blank" rel="noopener noreferrer" 
							class="w-10 h-10 bg-gray-100 hover:bg-primary text-gray-600 hover:text-white rounded-lg flex items-center justify-center transition-colors duration-200">
							<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
								<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
							</svg>
						</a>
						<a aria-label="linkedin" href="https://www.linkedin.com/in/ni%C3%B1o-abao-415124185/" target="_blank" rel="noopener noreferrer" 
							class="w-10 h-10 bg-gray-100 hover:bg-primary text-gray-600 hover:text-white rounded-lg flex items-center justify-center transition-colors duration-200">
							<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
								<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
							</svg>
						</a>
						<a aria-label="twitter" href="https://x.com/abao_nino47037" target="_blank" rel="noopener noreferrer" 
							class="w-10 h-10 bg-gray-100 hover:bg-primary text-gray-600 hover:text-white rounded-lg flex items-center justify-center transition-colors duration-200">
							<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
								<path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
							</svg>
						</a>
					</div>
				</div>
			</div>

			<!-- Contact Form -->
			<Card className="p-8 shadow-lg">
				<form on:submit={handleSubmit} class="space-y-6">
					<div class="flex items-center space-x-3 mb-6">
						<MessageCircle class="h-6 w-6 text-primary" />
						<h3 class="text-xl font-bold text-gray-900">Send me a message</h3>
					</div>

					<div class="grid sm:grid-cols-2 gap-6">
						<div>
							<Label htmlFor='name' className="text-sm font-medium text-gray-700 mb-2">Full Name *</Label>
							<Input
								id="name"
								type="text"
								bind:value={formData.name}
								placeholder="Your full name"
								required
								class="w-full"
							/>
						</div>
						<div>
							<Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2">Email Address *</Label>
							<Input
								id="email"
								type="email"
								bind:value={formData.email}
								placeholder="your.email@example.com"
								required
								class="w-full"
							/>
						</div>
					</div>

					<div>
						<Label htmlFor="subject" className="text-sm font-medium text-gray-700 mb-2">Subject *</Label>
						<Input
							id="subject"
							type="text"
							bind:value={formData.subject}
							placeholder="What's this about?"
							required
							class="w-full"
						/>
					</div>

					<div>
						<Label htmlFor="message" className="text-sm font-medium text-gray-700 mb-2">Message *</Label>
						<Textarea
							id="message"
							bind:value={formData.message}
							placeholder="Tell me about your project, timeline, budget, or anything else you'd like to discuss..."
							rows="{6}"
							required
							class="w-full resize-none"
						/>
					</div>

					<button
						type="submit"
						disabled={isSubmitting}
						class="w-full bg-primary hover:bg-primary/90 disabled:opacity-50 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 hover:shadow-lg"
					>
						{#if isSubmitting}
							<div class="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
						{:else}
							<Send class="h-4 w-4" />
						{/if}
						<span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
					</button>
				</form>
			</Card>
		</div>
	</div>
</section>

<style>
	@keyframes slide-in {
		from { 
			opacity: 0; 
			transform: translateX(-30px); 
		}
		to { 
			opacity: 1; 
			transform: translateX(0); 
		}
	}
	
	.animate-contact {
		animation: slide-in 0.8s ease-out;
	}
</style>