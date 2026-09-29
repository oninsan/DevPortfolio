export interface Project {
	id: number;
	title: string;
	description: string;
	image: string;
	technologies: string[];
	category: string;
	liveUrl?: string;
	githubUrl?: string;
	status?: string;
}

export const projects: Project[] = [
	{
		id: 1,
		title: 'Student Name Parser',
		description:
			'From registrar PDFs to ready-to-use Excel class records. A practical tool that takes the repetition out of preparing student lists.',
		image: 'images/student-name-parser.webp',
		technologies: ['HTML', 'CSS', 'Python', 'Flask'],
		category: 'Full Stack',
		liveUrl: 'https://oninsan.github.io/LFM_Separator_frontend/',
		githubUrl: 'https://github.com/oninsan/LFM_Separator_frontend'
	},
	{
		id: 2,
		title: 'Resume Maker',
		description:
			'A flexible resume builder for creating personalized CVs, with sections that can be added and arranged to suit each person.',
		image: 'images/resume-maker.webp',
		technologies: ['HTML', 'CSS', 'PHP', 'SQL'],
		category: 'Full Stack',
		githubUrl: 'https://gitlab.com/oninsama/resume-maker/-/tree/master'
	},
	{
		id: 3,
		title: 'Learning Materials Archive',
		description:
			'A shared home for CRMC learning resources. Teachers can publish materials, and students can find and download what they need.',
		image: 'images/lm-archive.webp',
		technologies: ['MongoDB', 'Express', 'React', 'Node.js'],
		category: 'React',
		githubUrl: 'https://gitlab.com/oninsama/onlinarchiveforlearningmaterials'
	},
	{
		id: 4,
		title: 'ChitChat',
		description:
			'A messaging application exploring a .NET backend and a Svelte interface. An ongoing project in application architecture and communication.',
		image: 'images/chitchat.webp',
		technologies: ['MySQL', '.NET', 'Svelte'],
		category: 'Svelte',
		status: 'In development'
	},
	{
		id: 5,
		title: 'Developer Portfolio',
		description:
			'A place for my projects, my toolkit, and a little about the person behind the code. Built with SvelteKit and hosted on GitHub Pages.',
		image: 'images/devPortfolio.webp',
		technologies: ['SvelteKit', 'TypeScript', 'CSS'],
		category: 'Svelte',
		githubUrl: 'https://github.com/oninsan/DevPortfolio'
	},
	{
		id: 6,
		title: 'Bluewave',
		description:
			'Discovering tourist spots around Bogo City. One of my first Django applications, built while learning to turn local ideas into web experiences.',
		image: 'images/Bluewave.webp',
		technologies: ['HTML', 'CSS', 'Python', 'Django'],
		category: 'Django',
		githubUrl: 'https://github.com/oninsan/3rd-ecom'
	}
];
