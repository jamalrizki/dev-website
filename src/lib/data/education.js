// Education page data (ported from assets/js/education.js and education.html)

export const schools = [
	{
		logo: '/assets/images/education-page/WGU.webp',
		degree: 'M.S. Cybersecurity & Information Assurance',
		school: 'Western Governors University',
		year: '2025'
	},
	{
		logo: '/assets/images/education-page/Auckland.webp',
		degree: 'Postgraduate Certificate in IT',
		school: 'University of Auckland',
		year: '2024'
	},
	{
		logo: '/assets/images/education-page/nucamp.webp',
		degree: 'Full Stack Web + Mobile Development',
		school: 'Nucamp Coding Bootcamp',
		year: '2020–2021'
	},
	{
		logo: '/assets/images/education-page/vic.webp',
		degree: 'Bachelor of Music (Hons), Jazz Performance',
		school: 'Victoria University · NZ School of Music',
		year: '2009'
	},
	{
		logo: '/assets/images/education-page/massey.webp',
		degree: 'Bachelor of Music, Jazz Performance',
		school: 'Massey University · NZ School of Music',
		year: '2005–2008'
	}
];


// Certifications — a short "Featured" row spotlights the credentials that
// matter; everything else collapses into labeled groups with counts.
export const featuredCerts = [
	{ title: 'CompTIA SecurityX (CASP+)', issuer: 'CompTIA', link: 'https://www.comptia.org/en-us/certifications/securityx/' },
	{ title: 'CompTIA CySA+', issuer: 'CompTIA', link: 'https://www.comptia.org/en-us/certifications/cybersecurity-analyst/' },
	{ title: 'CompTIA PenTest+', issuer: 'CompTIA', link: 'https://www.isaca.org/credentialing/cism' },
	{ title: 'ISACA CISM', issuer: 'ISACA', link: 'https://www.comptia.org/certifications/network' },
	{ title: 'AWS Solutions Architect', issuer: 'Amazon', link: 'https://aws.amazon.com/certification/certified-solutions-architect-associate/' },
	{ title: 'AWS Certified Developer', issuer: 'Amazon', link: 'https://aws.amazon.com/certification/certified-solutions-architect-associate/' }
];

export const certGroups = [
	{
		label: 'CompTIA',
		items: [
			// NOTE: the Security+ / Network+ links were swapped in the previous version — fixed below.
			{ title: 'CompTIA Security+', issuer: 'CompTIA', link: 'https://www.comptia.org/certifications/security' },
			{ title: 'CompTIA Network+', link: 'https://www.comptia.org/certifications/network' },
			{ title: 'CompTIA A+', link: 'https://www.comptia.org/certifications/a' },
			{ title: 'TOTAL: CompTIA A+ Core 1 & 2 - (Udemy)', link: 'https://www.udemy.com/course/comptia-aplus-core-1/' },
			{ title: 'CompTIA Security+, Network+ & A+ - Jason Dion (Udemy)', link: 'https://www.udemy.com/courses/search/?q=jason+dion+comptia' },
			{ title: 'CompTIA Linux+ - Dion Training (Udemy)', link: 'https://www.udemy.com/courses/search/?q=comptia+linux%2B+dion' },
			{ title: 'CompTIA CySA+ - Dion Training (Udemy)', link: 'https://www.udemy.com/courses/search/?q=comptia+cysa%2B+dion' },
			{ title: 'CompTIA CertMaster Learn CySA+', link: 'https://www.comptia.org/training' },
			{ title: 'CompTIA CySA+ Cert Prep - Mike Chapple (LinkedIn Learning)', link: 'https://www.linkedin.com/learning/search?keywords=cysa%2B+mike+chapple' },
			{ title: 'CompTIA CySA+ - Total Seminars (Udemy)', link: 'https://www.udemy.com/courses/search/?q=total+seminars+cysa%2B' },
			{ title: 'CompTIA PenTest+ - Dion Training (Udemy)', link: 'https://www.udemy.com/courses/search/?q=comptia+pentest%2B+dion' },
			{ title: 'CompTIA CertMaster Perform PenTest+', link: 'https://www.comptia.org/training' },
			{ title: 'PT0-003: CompTIA PenTest+ (Percipio)', link: 'https://www.percipio.com/' },
			{ title: 'CompTIA SecurityX - Dion Training (Udemy)', link: 'https://www.udemy.com/courses/search/?q=securityx+dion' },
			{ title: 'CompTIA CertMaster Perform SecurityX', link: 'https://www.comptia.org/training' },
			{ title: 'CompTIA SecurityX (Pluralsight)', link: 'https://www.pluralsight.com/search?q=securityx' }
		]
	},
	{
		label: 'Cybersecurity',
		items: [
			{ title: 'ISC2 Certified in Cybersecurity', link: 'https://www.isc2.org/certifications/cc' },
			{ title: 'Google Cybersecurity Certificate', link: 'https://www.coursera.org/professional-certificates/google-cybersecurity' },
			{ title: 'Learn Ethical Hacking From Scratch - (Udemy)', link: 'https://www.udemy.com/course/learn-ethical-hacking-from-basics/' },
			{ title: 'TryHackMe - SOC Level 1 Path', link: 'https://tryhackme.com/path/outline/soclevel1' },
			{ title: 'CISM (Pluralsight)', link: 'https://www.pluralsight.com/search?q=cism' },
			{ title: 'TLS for Beginners: Securing Network Communications (LinkedIn Learning)', link: 'https://www.linkedin.com/learning/search?keywords=tls+for+beginners' },
		    { title: 'D482 - Secure Network Design', link: 'https://www.wgu.edu/online-it-degrees/cybersecurity-information-assurance-masters-program.html' },
			{ title: 'D483 - Security Operations', link: 'https://www.wgu.edu/online-it-degrees/cybersecurity-information-assurance-masters-program.html' },
			{ title: 'D484 - Penetration Testing', link: 'https://www.wgu.edu/online-it-degrees/cybersecurity-information-assurance-masters-program.html' },
			{ title: 'D485 - Cloud Security', link: 'https://www.wgu.edu/online-it-degrees/cybersecurity-information-assurance-masters-program.html' },
			{ title: 'D486 - Governance, Risk & Compliance', link: 'https://www.wgu.edu/online-it-degrees/cybersecurity-information-assurance-masters-program.html' },
			{ title: 'D487 - Secure Software Design', link: 'https://www.wgu.edu/online-it-degrees/cybersecurity-information-assurance-masters-program.html' },
			{ title: 'D488 - Cybersecurity Architecture & Engineering', link: 'https://www.wgu.edu/online-it-degrees/cybersecurity-information-assurance-masters-program.html' },
			{ title: 'D489 - Cybersecurity Management', link: 'https://www.wgu.edu/online-it-degrees/cybersecurity-information-assurance-masters-program.html' },
			{ title: 'D490 - Capstone', link: 'https://www.wgu.edu/online-it-degrees/cybersecurity-information-assurance-masters-program.html' }
		]
	},
	{
		label: 'Microsoft & Windows administration',
		items: [
			{ title: 'Windows 11 Essential Training (LinkedIn Learning)', link: 'https://www.linkedin.com/learning/search?keywords=windows+11+essential+training' },
			{ title: 'Windows 11 for IT Support: Basic (LinkedIn Learning)', link: 'https://www.linkedin.com/learning/search?keywords=windows+11+for+it+support+basic' },
			{ title: 'Windows 11 for IT Support: Intermediate (LinkedIn Learning)', link: 'https://www.linkedin.com/learning/search?keywords=windows+11+for+it+support+intermediate' },
			{ title: 'Windows 11 for IT Support: Advanced (LinkedIn Learning)', link: 'https://www.linkedin.com/learning/search?keywords=windows+11+for+it+support+advanced' },
			{ title: 'Learning PC Maintenance and Performance (LinkedIn Learning)', link: 'https://www.linkedin.com/learning/search?keywords=pc+maintenance+and+performance' },
			{ title: 'Windows Server 2022 Essential Training (LinkedIn Learning)', link: 'https://www.linkedin.com/learning/search?keywords=windows+server+2022+essential+training' },
			{ title: 'Windows Server Labs (Pluralsight)', link: 'https://www.pluralsight.com/search?q=windows+server+labs' },
			{ title: 'Server Administration Essentials (LinkedIn Learning)', link: 'https://www.linkedin.com/learning/search?keywords=server+administration+essentials' },
			{ title: 'Learning PowerShell (LinkedIn Learning)', link: 'https://www.linkedin.com/learning/search?keywords=learning+powershell' },
			{ title: 'Microsoft 365 Administration (LinkedIn Learning)', link: 'https://www.linkedin.com/learning/search?keywords=microsoft+365+administration' },
			{ title: 'Outlook Essential Training — Microsoft 365 (LinkedIn Learning)', link: 'https://www.linkedin.com/learning/search?keywords=outlook+essential+training+microsoft+365' },
			{ title: 'Introduction to Exchange Online (LinkedIn Learning)', link: 'https://www.linkedin.com/learning/search?keywords=introduction+to+exchange+online' },
			{ title: 'Cloud Management with Microsoft Intune (LinkedIn Learning)', link: 'https://www.linkedin.com/learning/search?keywords=cloud+management+with+microsoft+intune' },
			{ title: 'Microsoft Windows Endpoint Administrator MD-102 (Pluralsight)', link: 'https://www.pluralsight.com/search?q=md-102' },
			{ title: 'Microsoft Modern Windows Desktop Admin (Udemy)', link: 'https://www.udemy.com/courses/search/?q=modern+windows+desktop+administrator' },
			{ title: 'Microsoft Word (Microsoft training)', link: 'https://support.microsoft.com/en-us/training' }
		]
	},
	{
		label: 'Cloud & DevOps',
		items: [
			{ title: 'AWS Certified Cloud Practitioner', link: 'https://aws.amazon.com/certification/certified-cloud-practitioner/' },
			{ title: 'Docker Mastery: Kubernetes + Swarm', link: 'https://www.udemy.com/course/docker-mastery' },
			{ title: 'AZ-900: Microsoft Azure Fundamentals', link: 'https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/' },
			{ title: 'Learning Virtualization (LinkedIn Learning)', link: 'https://www.linkedin.com/learning/search?keywords=learning+virtualization' },
			{ title: 'Complete VMware vSphere ESXi and vCenter Administration (Udemy)', link: 'https://www.udemy.com/courses/search/?q=complete+vmware+vsphere+esxi+vcenter+administration' },
			{ title: 'Monitoring and Observability with Datadog (LinkedIn Learning)', link: 'https://www.linkedin.com/learning/search?keywords=monitoring+observability+datadog' },
			{ title: 'Learning Splunk (LinkedIn Learning)', link: 'https://www.linkedin.com/learning/search?keywords=learning+splunk' },
			{ title: 'Checkmk (YouTube)', link: 'https://www.youtube.com/@checkmk' },
			{ title: 'PagerDuty University', link: 'https://university.pagerduty.com/' }
		]
	},
	{
		label: 'Networking & infrastructure',
		items: [
			{ title: 'Learning DNS (LinkedIn Learning)', link: 'https://www.linkedin.com/learning/search?keywords=learning+dns' },
			{ title: 'DNS Deep Dive (Udemy)', link: 'https://www.udemy.com/courses/search/?q=dns+deep+dive' },
			{ title: 'Learning Network Troubleshooting: Practical Network Diagnostics and Solutions (LinkedIn Learning)', link: 'https://www.linkedin.com/learning/search?keywords=learning+network+troubleshooting' },
			{ title: 'Wireless Networking: Advanced Troubleshooting (LinkedIn Learning)', link: 'https://www.linkedin.com/learning/search?keywords=wireless+networking+advanced+troubleshooting' },
			{ title: 'IT Infrastructure Fundamentals: Key Concepts for Network and Server Administrators (LinkedIn Learning)', link: 'https://www.linkedin.com/learning/search?keywords=it+infrastructure+fundamentals' },
			{ title: 'Learning Nginx (LinkedIn Learning)', link: 'https://www.linkedin.com/learning/search?keywords=learning+nginx' },
			{ title: 'Linux System Engineer: Web Servers and DNS Using Apache, NGINX, and BIND (LinkedIn Learning)', link: 'https://www.linkedin.com/learning/search?keywords=linux+system+engineer+apache+nginx+bind' },
			{ title: 'Learning VoIP and Unified Communications (LinkedIn Learning)', link: 'https://www.linkedin.com/learning/search?keywords=learning+voip+unified+communications' },
			{ title: 'Introduction to SAN and NAS (Udemy)', link: 'https://www.udemy.com/courses/search/?q=introduction+to+san+and+nas' }
		]
	},
	{
		label: 'Linux & systems',
		items: [
			{ title: 'Introduction to Linux (Linux Foundation, LFS101)', link: 'https://training.linuxfoundation.org/training/introduction-to-linux/' },
			{ title: 'Getting Started with RISC-V (LinkedIn Learning)', link: 'https://www.linkedin.com/learning/search?keywords=getting+started+with+risc-v' }
		]
	},
	{
		label: 'AI',
		items: [
			{ title: 'Google AI Essentials (Google)', link: 'https://grow.google/ai-essentials/' },
			{ title: 'Agentic AI Fundamentals: Architecture, Frameworks and Applications (LinkedIn Learning)', link: 'https://www.linkedin.com/learning/search?keywords=agentic+ai+fundamentals' },
			{ title: 'Build Agents with OpenClaw (LinkedIn Learning)', link: 'https://www.linkedin.com/learning/search?keywords=build+agents+openclaw' },
			{ title: 'ChatGPT Prompt Engineering for Developers (DeepLearning.AI)', link: 'https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/' }
		]
	},
	{
		label: 'IT support & service management',
		items: [
			{ title: 'Google IT Support Professional', link: 'https://www.coursera.org/professional-certificates/google-it-support' },
			{ title: 'Learn How to Support Apple Devices (Apple)', link: 'https://it-training.apple.com/' },
			{ title: 'Learning ServiceNow (LinkedIn Learning)', link: 'https://www.linkedin.com/learning/search?keywords=learning+servicenow' }
		]
	},
	{
		label: 'Web & programming',
		items: [
			{ title: 'COMPSCI 718 — Programming for Industry', link: 'https://www.online.auckland.ac.nz/postgraduate-programmes/science/postgraduate-certificate-in-information-technology/' },
			{ title: 'COMPSCI 719 — Web Technologies', link: 'https://www.online.auckland.ac.nz/postgraduate-programmes/science/postgraduate-certificate-in-information-technology/' },
			{ title: 'The Ultimate MySQL Bootcamp', link: 'https://www.udemy.com/course/the-ultimate-mysql-bootcamp-go-from-sql-beginner-to-expert' },
			{ title: 'The Modern JavaScript Bootcamp', link: 'https://www.udemy.com/course/javascript-beginners-complete-tutorial/' },
			{ title: 'Node.js, Express & MongoDB Bootcamp', link: 'https://www.udemy.com/course/nodejs-express-mongodb-bootcamp' },
			{ title: '100 Days of Code — Python', link: 'https://www.udemy.com/course/100-days-of-code/' },
			{ title: 'CS 1101 — Programming Fundamentals', link: 'https://www.uopeople.edu/prepare-for-university/programming-fundamentals-java-cs-1101-learning-materials/' },
			{ title: 'WordPress for Beginners', link: 'https://www.udemy.com/course/wordpress-for-beginners-course/' },
			{ title: 'Front-End Development with React', link: 'https://www.coursera.org/learn/front-end-react' },
			{ title: 'JavaScript Data Structures & Algorithms', link: 'https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/' },
			{ title: 'Python Essential Training (LinkedIn Learning)', link: 'https://www.linkedin.com/learning/search?keywords=python+essential+training' },
			{ title: 'Java 17 (LinkedIn Learning)', link: 'https://www.linkedin.com/learning/search?keywords=java+17' },
			{ title: 'Beginning C++ Programming — From Beginner to Beyond (Udemy)', link: 'https://www.udemy.com/course/beginning-c-plus-plus-programming/' },
			{ title: 'C Programming for Beginners — Master the Language (Udemy)', link: 'https://www.udemy.com/courses/search/?q=c+programming+for+beginners+master+the+language' },
			{ title: 'React Native — The Practical Guide (Maximilian Schwarzmüller, Udemy)', link: 'https://www.udemy.com/course/react-native-the-practical-guide/' },
			{ title: 'Introduction to MongoDB (MongoDB University)', link: 'https://learn.mongodb.com/learning-paths/introduction-to-mongodb' },
			{ title: 'Google Chrome DevTools (freeCodeCamp, YouTube)', link: 'https://www.youtube.com/@freecodecamp' }
		]
	},
	{
		label: 'Design & UX',
		items: [
			{ title: 'Google UX Design Certificate', link: 'https://www.coursera.org/professional-certificates/google-ux-design' },
			{ title: 'Photoshop, Web Design & Freelancing', link: 'https://www.udemy.com/course/learn-photoshop-web-design-profitable-freelancing/' },
			{ title: 'Graphic Design for Non-Designers', link: 'https://www.coursera.org/specializations/graphic-design-elements-non-designers' },
			{ title: 'Photography Basics & Beyond', link: 'https://www.coursera.org/specializations/photography-basics' }
		]
	},
	{
		label: 'Business & general',
		items: [
			{ title: 'Facebook Social Media Marketing', link: 'https://www.facebook.com/business/learn/certification/exams/100-101-exam' },
			{ title: 'WSET Level II in Wine & Spirits', link: 'https://www.wsetglobal.com/qualifications/wset-level-2-award-in-wines' },
			{ title: 'Level 3 TEFL', link: 'https://www.i-to-i.com/teaching-english-as-a-foreign-language.html' },
			{ title: 'Excel Skills for Business', link: 'https://www.coursera.org/learn/excel-essentials?specialization=excel' },
			{ title: 'Cert III in Hospitality', link: 'https://smartandskilled.nsw.gov.au/' },
			{ title: 'Classical Music (Coursera)', link: 'https://www.coursera.org/learn/introclassicalmusic' },
			{ title: 'Cert IV in Small Business Management', link: 'https://www.myskills.gov.au/courses/details?Code=BSB42518' },
			{ title: 'Financial Markets (Coursera)', link: 'https://www.coursera.org/learn/financial-markets-global' },
			{ title: 'Effective Emails, Memos and Letters (MindEdge Learning)', link: 'https://www.mindedge.com/' },
			{ title: 'Effective Business Writing (MindEdge Learning)', link: 'https://www.mindedge.com/' },
		]
	}
];
export const certTotal =
	featuredCerts.length + certGroups.reduce((n, g) => n + g.items.length, 0);
