import {
  PersonalInfo,
  SkillGroup,
  Project,
  Experience,
  Education,
  Certification,
  Achievement,
} from './types';

// ─────────────────────────────────────────────
// PERSONAL INFO (From Resume)
// ─────────────────────────────────────────────
export const personalInfo: PersonalInfo = {
  name: 'Rahul Kumar Sah',
  firstName: 'Rahul',
  lastName: 'Kumar Sah',
  title: 'Computer Science & Engineering Student',
  subtitle: 'AI & Software Developer',
  location: 'Greater Noida, India',
  email: 'sahr67568@gmail.com',
  phone: '+91 9263028848',
  website: 'https://rahulks.com.np',
  github: 'https://github.com/98252',
  linkedin: 'https://linkedin.com/in/rahul-kumar-sah-5aa255304',
  summary:
    'Motivated Computer Science student aiming to build a career in AI and Software Developing. Possesses a strong grasp of programming fundamentals, problem-solving, and full-stack development. Adept in Python, Java, JavaScript, and Flutter, with hands-on experience building AI-driven applications, supporting QA and security-focused workflows, and integrating APIs and databases. Known for adaptability, teamwork, and a results-oriented approach to tackling complex engineering challenges.',
  profileImage: '/images/profile.jpg',
  cgpa: '8.4/10',
  scholarship: '100% Government Scholarship – EdCIL (India) Ltd., Government of India',
};

// ─────────────────────────────────────────────
// SKILLS (Categorized exactly as in Resume)
// ─────────────────────────────────────────────
export const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    skills: ['Python', 'Java', 'JavaScript', 'C'],
  },
  {
    category: 'AI & Cybersecurity',
    skills: ['NLP-based evaluation systems', 'API security fundamentals'],
  },
  {
    category: 'Web Development',
    skills: ['HTML5', 'CSS3', 'Tailwind CSS', 'React.js (Vite)', 'Node.js', 'Express.js'],
  },
  {
    category: 'Database',
    skills: ['MySQL', 'MongoDB', 'Firebase'],
  },
  {
    category: 'Tools & Platforms',
    skills: ['GitHub', 'VS Code', 'Android Studio', 'Postman', 'Antigravity IDE'],
  },
  {
    category: 'UI/UX',
    skills: ['Figma', 'Canva'],
  },
];

// ─────────────────────────────────────────────
// INTERNSHIP / EXPERIENCE
// ─────────────────────────────────────────────
export const experiences: Experience[] = [
  {
    id: 'terabyte-internship',
    role: 'Web Developer Intern',
    company: 'Terabyte Innovations Pvt. Ltd.',
    period: 'May 2025 – Jul 2025',
    points: [
      'Developed AI-driven automation features to enhance web application functionality and workflow efficiency.',
      'Implemented and tested responsive UI components to ensure seamless user experience across web interfaces.',
      'Executed quality assurance and debugging processes to identify and resolve application issues.',
      'Maintained technical documentation, development records, and system logs to support efficient project management.',
      'Collaborated with database and API teams to integrate scalable and secure web modules.',
      'Optimized backend APIs and database queries to improve application performance, responsiveness, and reliability.',
    ],
    techStack: ['AI Automation', 'Web Development', 'REST APIs', 'QA & Testing', 'Database Optimization'],
  },
];

// ─────────────────────────────────────────────
// PROJECTS
// ─────────────────────────────────────────────
export const projects: Project[] = [
  {
    id: 'resume-analyzer',
    title: 'Resume Analyzer with Job Description',
    period: 'August 2024',
    techStack: ['Python', 'NLP', 'AI Evaluation', 'ATS Matching'],
    points: [
      'Designed and developed an AI-driven resume evaluation system to analyze ATS compatibility.',
      'Implemented NLP techniques to score resumes based on job relevance and keyword matching.',
      'Generated automated improvement suggestions to enhance candidate profile quality.',
      'Improved resume screening efficiency and accuracy for recruitment workflows.',
      'Integrated skill extraction and job-description matching to identify missing skills and relevant qualifications.',
      'Developed an automated scoring mechanism to provide actionable feedback and improve overall resume performance.',
    ],
    githubUrl: 'https://github.com/98252/Resumer_Analyzer_with_JD',
    liveUrl: 'https://resumeranalyzerwithjd-28z2y4afuiduqm9xctuabe.streamlit.app/',
    category: 'AI & NLP',
  },
  {
    id: 'palika-connect',
    title: 'Palika Connect',
    period: 'January 2025',
    techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Full-Stack'],
    points: [
      'Built a full-stack municipal complaint management platform for citizen issue reporting.',
      'Enabled real-time complaint assignment and resolution tracking for staff members.',
      'Integrated photo upload functionality to support evidence-based issue reporting.',
      'Developed a secure and responsive interface, improving civic engagement and service efficiency.',
      'Implemented role-based authentication and access control for citizens, staff, and administrators to ensure secure complaint management.',
      'Built an interactive dashboard to monitor complaint status, priority, assignments, and resolution progress for efficient municipal operations.',
    ],
    githubUrl: 'https://github.com/98252/Municipal-Complain-Management-System',
    liveUrl: 'https://municipal-complain-management-syste.vercel.app/',
    category: 'Full-Stack Web App',
  },
  {
    id: 'next-gen-multimodal-ai',
    title: 'Nepal-GPT | Next-Gen Multimodal AI Assistant',
    period: 'February 2025',
    techStack: ['Python', 'Google Gemini API', 'Multimodal Vision', 'Chart.js', 'NLP'],
    points: [
      'Architected a multimodal AI application powered by Google Gemini supporting vision analysis, real-time streaming, and document intelligence.',
      'Engineered support for multimodal file attachments including PNG, JPG, WEBP, PDF, CSV, JSON, and code repositories.',
      'Implemented 7 dedicated AI specialized task modes and interactive visual chart generation utilizing Chart.js.',
      'Built full conversation session lifecycle features including chat pinning, in-place session renaming, smart chronological date grouping, and full-text history search.',
      'Added cross-lingual natural language intelligence with native bilingual processing across English and Nepali.',
    ],
    githubUrl: 'https://github.com/98252/Next_Gen_Multimodal_AI_Assistant',
    liveUrl: 'https://next-gen-multimodal-ai-assistant.vercel.app',
    category: 'Generative AI & Multimodal',
  },
];

// ─────────────────────────────────────────────
// RESEARCH PUBLICATIONS & PRESENTATIONS
// ─────────────────────────────────────────────
export const researchPresentations = [
  {
    id: 'icsds-2025-paper',
    title: 'Intelligent Job Matching System: A Hybrid Approach Combining Machine Learning and Semantic Analysis for Enhanced Career Portal Efficiency',
    conference: 'International Conference on Sustainable Developments in Computer Engineering, Green Technology & Smart Systems (ICSDS-2025)',
    organizer: 'Hooghly Engineering & Technology College, West Bengal',
    indexing: 'CRC Press (Taylor & Francis Group) / Scopus',
    date: 'December 20–21, 2025',
    institution: 'Sharda University',
    imageUrl: '/certificates/icsds-2025-research-presentation.jpg',
    type: 'Research Presentation',
  },
];

// ─────────────────────────────────────────────
// HACKATHONS & ACHIEVEMENTS (With verified certificates)
// ─────────────────────────────────────────────
export const achievements: Achievement[] = [
  {
    id: '0-to-1-hackathon',
    title: '0 to 1 Hackathon',
    organization: 'E-Cell, IIIT Delhi (E-Summit 2025)',
    date: '21st–22nd March 2025',
    year: '2025',
    imageUrl: '/certificates/0-to-1-hackathon-iiit-delhi.png',
    description: 'Certificate of Participation at E-Summit 2025 organized by the Entrepreneurship Cell, IIIT Delhi.',
    badge: 'IIIT Delhi',
  },
  {
    id: 'hack-for-impact',
    title: 'Hack for Impact',
    organization: 'E-Cell, IIIT Delhi (E-Summit 2025)',
    date: '21st–22nd March 2025',
    year: '2025',
    imageUrl: '/certificates/hack-for-impact-iiit-delhi.png',
    description: 'Certificate of Participation at E-Summit 2025 organized by the Entrepreneurship Cell, IIIT Delhi.',
    badge: 'IIIT Delhi',
  },
  {
    id: 'innovate-bharat-2026',
    title: 'Innovate Bharat Hackathon 2026',
    organization: 'SSCSE, Sharda University & IEEE',
    date: '10th–11th April 2026',
    year: '2026',
    imageUrl: '/certificates/innovate-bharat-hackathon-2026.jpg',
    description: 'Certificate of Participation under theme AI and Intelligent Systems (AIIS) with team KBR2 Squad (Team ID: AIIS109).',
    badge: 'IEEE / Sharda',
  },
  {
    id: 'iit-delhi-tryst',
    title: 'ByteRunners Hackathon',
    organization: "IIT Delhi's Tryst 2025",
    year: '2025',
    description: "Competed in the ByteRunners Hackathon at IIT Delhi's flagship annual technical festival, Tryst 2025.",
    badge: 'IIT Delhi',
  },
];

// ─────────────────────────────────────────────
// CERTIFICATIONS (With verified certificates & details)
// ─────────────────────────────────────────────
export const certifications: Certification[] = [
  {
    id: 'cert-nptel-elite',
    title: 'Education for Sustainable Development',
    issuer: 'NPTEL · IIT Kharagpur (MoE, Govt. of India)',
    score: '99% (Elite)',
    date: 'Jan–Apr 2026',
    imageUrl: '/certificates/nptel-elite-sustainable-development.png',
    credentialId: 'NPTEL26HS58S1062602275',
    description: 'Elite NPTEL Online Certification (Funded by MoE, Govt. of India) on Swayam. Scored 99% (Assignments: 25/25, Proctored Exam: 73.5/75) among 21,132 certified candidates.',
    category: 'Elite Govt. Certification',
  },
  {
    id: 'cert-django',
    title: 'Python with Django',
    issuer: 'Cigno Technology',
    category: 'Web Development',
    description: 'Comprehensive certification in full-stack Python and Django web framework architecture.',
  },
  {
    id: 'cert-oracle-java',
    title: 'Java Foundation',
    issuer: 'Oracle Academy',
    category: 'Programming',
    description: 'Foundational certification in core Java programming, object-oriented principles, and algorithmic problem solving.',
  },
  {
    id: 'cert-flutter',
    title: 'Flutter Training',
    issuer: 'Ainwik Infotech · IEEE · Sharda University',
    date: '20 Mar – 16 Apr 2025',
    category: 'Mobile App Dev',
    imageUrl: '/certificates/flutter-training-ainwik-infotech.jpg',
    credentialId: '2023001105',
    description:
      'Certificate of Proficiency in Flutter Training (20 March – 16 April 2025) at Sharda University, Knowledge Park-III, Greater Noida. Organized by Ainwik Infotech in association with IEEE, Computer Society of India, Technova, and the Institution\'s Innovation Council (Ministry of HRD initiative). System ID: 2023001105.',
  },
  {
    id: 'cert-hackerrank',
    title: 'HackerRank Software Engineer Test',
    issuer: 'HackerRank',
    category: 'Software Engineering',
    description: 'Standardized assessment evaluating core computer science fundamentals, data structures, and problem solving.',
  },
  {
    id: 'cert-genai',
    title: 'Be Practical - Gen AI And Data Science',
    issuer: 'Be Practical',
    category: 'AI & Data Science',
    description: 'Generative AI architectures, transformer models, machine learning pipelines, and data science workflows.',
  },
];

// ─────────────────────────────────────────────
// EDUCATION
// ─────────────────────────────────────────────
export const education: Education[] = [
  {
    id: 'sharda-btech',
    degree: 'Bachelor of Technology – Computer Science & Engineering',
    institution: 'Sharda University',
    location: 'Greater Noida, India',
    period: '2023 – Present',
    cgpa: '8.4 / 10',
    scholarship: '100% Government Scholarship – EdCIL (India) Ltd., Government of India',
  },
];

// ─────────────────────────────────────────────
// NAVIGATION LINKS
// ─────────────────────────────────────────────
export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Education', href: '#education' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
] as const;
