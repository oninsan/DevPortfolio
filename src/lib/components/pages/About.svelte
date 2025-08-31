<script lang="ts">
	import Card from '../ui/Card.svelte';
	import { User, Calendar, MapPin, Mail } from 'lucide-svelte';
	import profilePic from '$lib/assets/profile.png';
</script>

<section id="about" class="py-20 bg-gray-50">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-16">
			<h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Me</h2>
			<div class="w-24 h-1 bg-primary mx-auto"></div>
		</div>

		<div class="grid lg:grid-cols-2 gap-12 items-center">
			<!-- Left Content -->
			<div class="space-y-6">
				<div class="space-y-4">
					<h3 class="text-2xl font-bold text-gray-900">
						Hello! I'm a Web Developer passionate about creating digital solutions.
					</h3>
					<p class="text-gray-600 leading-relaxed">
						With over 4 years of experience in web development, I've had the privilege of working 
						on diverse projects ranging from small business websites to large-scale web applications. 
						My journey started with a curiosity about how websites work, and it has evolved into a 
						passion for creating seamless user experiences.
					</p>
					<p class="text-gray-600 leading-relaxed">
						I believe in writing clean, efficient code and staying up-to-date with the latest 
						technologies and best practices. When I'm not coding, you can find me exploring new 
						frameworks, contributing to open-source projects, or enjoying a good bottle of milk.
					</p>
				</div>

				<!-- Personal Info -->
				<div class="grid sm:grid-cols-2 gap-4">
					<div class="flex items-center space-x-3">
						<User class="h-5 w-5 text-primary" />
						<span class="text-gray-700">Niño Abao</span>
					</div>
					<div class="flex items-center space-x-3">
						<Calendar class="h-5 w-5 text-primary" />
						<span class="text-gray-700">25 years old</span>
					</div>
					<div class="flex items-center space-x-3">
						<MapPin class="h-5 w-5 text-primary" />
						<span class="text-gray-700">Bogo City Cebu, Philippines</span>
					</div>
					<div class="flex items-center space-x-3">
						<Mail class="h-5 w-5 text-primary" />
						<span class="text-gray-700">kokoybaldofordawin@gmail.com</span>
					</div>
				</div>
			</div>

			<!-- Right Content - Image and Stats -->
			<div class="space-y-8">
				<!-- Profile Image -->
				<div class="relative">
					<div class="w-80 h-80 mx-auto rounded-2xl overflow-hidden shadow-2xl">
						<img 
							src="{profilePic}" 
							alt="About me" 
							class="w-full h-full object-cover"
						/>
					</div>
					<!-- Decorative Elements -->
					<div class="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full"></div>
					<div class="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-600 rounded-full"></div>
				</div>

				<!-- Stats -->
				<div class="grid grid-cols-3 gap-4">
					<Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
						<div class="text-3xl font-bold text-primary mb-2">10+</div>
						<div class="text-sm text-gray-600">Projects Completed</div>
					</Card>
					<Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
						<div class="text-3xl font-bold text-primary mb-2">4+</div>
						<div class="text-sm text-gray-600">Years Experience</div>
					</Card>
					<Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
						<div class="text-3xl font-bold text-primary mb-2">15+</div>
						<div class="text-sm text-gray-600">Happy Clients</div>
					</Card>
				</div>
			</div>
		</div>
	</div>
</section>