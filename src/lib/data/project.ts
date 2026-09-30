export interface Project {
	id: number;
	slug: string;
	title: string;
	category: string;
	role: string;
	description: string;
	image?: string;
	imageAlt?: string;
	technologies: string[];
	liveUrl?: string;
	liveLabel?: string;
	githubUrl: string;
	secondarySourceUrl?: string;
	challenge: string;
	approach: string[];
	result: string;
	status?: string;
}

export const projects: Project[] = [
	{
		id: 1,
		slug: 'student-name-parser',
		title: 'Student Name Parser',
		category: 'Workflow automation',
		role: 'Full-stack development',
		description:
			'Turn registrar PDF class lists into organized Excel records, ready for teaching and administration.',
		image: 'images/student-name-parser-live.webp',
		imageAlt: 'The live ClassList Splitter upload interface',
		technologies: ['Python', 'Flask', 'JavaScript', 'Excel'],
		liveUrl: 'https://oninsan.github.io/LFM_Separator_frontend/',
		liveLabel: 'Try the interface',
		githubUrl: 'https://github.com/oninsan/LFM_Separator_frontend',
		secondarySourceUrl: 'https://github.com/oninsan/LFM_Separator',
		challenge:
			'Class lists arrived as PDFs, but class records needed student names separated into spreadsheet columns. Preparing those records by hand was repetitive.',
		approach: [
			'Defined the expected PDF format and the last-name, first-name, and middle-initial columns.',
			'Built a Flask API that extracts text with pdfplumber, filters headings, parses names, and sorts the results.',
			'Generated an Excel workbook with one worksheet per uploaded PDF, then connected it to a drag-and-drop web interface.'
		],
		result:
			'An upload-to-spreadsheet workflow that makes the class-record preparation task easier to repeat.'
	},
	{
		id: 2,
		slug: 'coop-mis',
		title: 'CoopMIS',
		category: 'Application prototype',
		role: 'Web application',
		description:
			'A cooperative management prototype bringing members, savings, loans, and reporting into one interface.',
		image: 'images/coop-mis-live.webp',
		imageAlt: 'CoopMIS dashboard showing member, savings, and loan views',
		technologies: ['React', 'JavaScript', 'Base44'],
		liveUrl: 'https://coop-mis.vercel.app/',
		liveLabel: 'View prototype',
		githubUrl: 'https://github.com/oninsan/coop-mis',
		challenge:
			'A cooperative needs different views of the same work: member records, savings, transactions, loans, and reporting.',
		approach: [
			'Organized the interface around the workflows and roles represented in the app, including member, teller, loan officer, and manager views.',
			'Built React screens for dashboards, member and loan management, savings, transactions, and reports.',
			'Connected the interface to Base44 entities and explored an AI-assisted loan eligibility view.'
		],
		result:
			'A browsable prototype of the product structure. The public preview currently shows empty account data and sample charts.',
		status: 'Prototype'
	},
	{
		id: 3,
		slug: 'chairflow-shared',
		title: 'ChairFlow Shared',
		category: 'Shared architecture',
		role: 'TypeScript package',
		description:
			'One source of truth for types, design tokens, status labels, and formatters across ChairFlow apps.',
		technologies: ['TypeScript', 'CSS tokens', 'Vitest'],
		githubUrl: 'https://github.com/oninsan/chairflow-shared',
		challenge:
			'Web, mobile, and API projects need consistent types and language as a product grows.',
		approach: [
			'Collected shared TypeScript types, status mappings, and formatting helpers in one package.',
			'Defined visual tokens in TypeScript and generated a stylesheet for web consumers.',
			'Added build checks and token guardrails so changes stay coordinated.'
		],
		result:
			'A reusable foundation that keeps status labels, visual language, and data shapes aligned across ChairFlow projects.'
	},
	{
		id: 4,
		slug: 'react-native-task-list',
		title: 'React Native Task List',
		category: 'Teaching project',
		role: 'Mobile development & instruction',
		description:
			'A small Expo app that teaches components, state, and persistence through a task list students can run.',
		technologies: ['React Native', 'Expo', 'TypeScript'],
		githubUrl: 'https://github.com/oninsan/first-reactnative-app',
		challenge:
			'New React Native students learn faster when each concept has a small, working example.',
		approach: [
			'Separated the screen into presentational components for input, task rows, and empty states.',
			'Put add, complete, and remove behavior in a custom hook.',
			'Used an AsyncStorage service to restore tasks after an app reload and documented how to teach the flow.'
		],
		result: 'A classroom demo students can run in Expo Go and inspect one layer at a time.'
	}
];
