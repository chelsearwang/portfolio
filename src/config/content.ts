// ─────────────────────────────────────────────────────────────────────────
// SITE CONTENT — the only file you should need to edit for text/links/data.
// ─────────────────────────────────────────────────────────────────────────
import type { Project, Skill, Experience, Fact, SocialLink, Course } from '../types'

export const profile = {
  name: 'Chelsea Wang',
  navLabel: 'chelsearwang',
  heroGreeting: 'hello, world',
  description: "Computer Science and Engineering student at UCLA, interested in software engineering.",
  primaryCtaLabel: 'View Projects',
  secondaryCtaLabel: 'Get in touch',
  nameClickHintPlural: (n: number) => `${n} more clicks...`,
  nameClickIdleHint: '↑ psst, try clicking my name',
  heroSocialLabels: ['GitHub', 'LinkedIn'],
  terminalUser: 'chelsea',
  accent: '#4862ae',
  statusCard: {
    role: 'CSE Student',
    aspiring: 'SWE',
    uni: 'UCLA',
    year: 'Class of 2029',
    location: 'Fremont, CA',
  },
}

export const about = {
  eyebrow: '01',
  heading: 'About Me',
  carouselHint: 'hover highlighted text to see a photo',
  techLabel: 'Technologies',
}

// Wrap any word/phrase in {{keyword}} to link it to a carousel photo 
export const aboutParagraphs = [
  "Hi! My name is {{Chelsea}}. I’m a Computer Science & Engineering student at UCLA, originally from the Bay Area.",
  "I'm interested in software engineering. Right now, I’m actively exploring full-stack web/app development, experimenting with AI/ML, and starting to get into robotics to understand how software interacts with the physical world.",
  "When I'm not working, you'll usually find me {{hiking}}, running, making jewelry, playing percussion, and taking {{photos}}.",
]

export const carouselImages = [
  { keyword: 'Chelsea', src: `${import.meta.env.BASE_URL}images/chelsea_wang.jpg`, alt: '', caption: '', position: 'center' },
  { keyword: 'photos', src: `${import.meta.env.BASE_URL}images/waterfall.jpg`, alt: '', caption: '', position: 'top' },
  { keyword: 'hiking', src: `${import.meta.env.BASE_URL}images/hiking.jpg`, alt: '', caption: '', position: 'center' },
]

export const facts: Fact[] = [
  { emoji: '🎓', label: 'UCLA' },
  { emoji: '📍', label: 'San Jose, CA' },
  { emoji: '💼', label: 'Open to internships' },
]

// Now displayed in About (moved from the hero) as interactive pill bubbles.
export const skills: Skill[] = [
  { name: 'Python' }, { name: 'TypeScript' }, { name: 'React' }, { name: 'React Native' },
  { name: 'Node.js' }, { name: 'Express' }, { name: 'PostgreSQL' }, { name: 'Java' },
  { name: 'C++' }, { name: 'Git' }, { name: 'REST APIs' }, { name: 'Linux' },
]

export const courseworkSection = { eyebrow: 'Relevant Coursework' }

export const courses: Course[] = [
  { code: 'CS 31', title: 'Intro to Computer Science I' },
  { code: 'CS 32', title: 'Data Structures' },
  { code: 'CS 35L', title: 'Software Construction' },
  { code: 'CS 33', title: 'Computer Organization' },
  { code: 'Math 61', title: 'Discrete Structures' },
  { code: 'Math 33A', title: 'Linear Algebra' },
  { code: 'Math 33B', title: 'Differential Equations' },
  { code: 'Physics 1B', title: 'Oscillations, Waves, E&M' },
  { code: 'Physics 1C', title: 'Electrodynamics & Optics' },
]

export const projectsSection = {
  eyebrow: '02',
  heading: 'Projects',
  subtitle: 'Click any card to flip it over for more info!',
}

export const projects: Project[] = [
  {
    id: 1,
    number: '01',
    title: 'RoomManager',
    description: 'A full-stack roommate management app with chore rotation, expense splitting, and gamification.',
    tags: ['React Native', 'Expo', 'Node.js', 'PostgreSQL'],
    year: 'June 2026 - PRESENT',
    highlights: [
      'Architected a full-stack mobile app with 25+ REST endpoints, JWT authentication, and native Google Sign-In for iOS/Android with server-side ID token verification',
      'Designed the system architecture for a self-correcting chore rotation engine, implementing custom date-based algorithms for recurrence rules and automatic overdue detection',
      'Built a debt-simplification algorithm to minimize settle-up transactions for expense splitting; deployed the backend to production with managed PostgreSQL',
    ],
    images: [
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&auto=format',
    ],
    githubUrl: 'https://github.com/chelsearwang/roommate-app',
    liveUrl: 'https://roommanager-kkw4.onrender.com/',
  },
  {
    id: 2,
    number: '02',
    title: 'MemoryShelf',
    description: 'A digital scrapbook with an auto-layout system that places and resizes elements using collision detection and sharing with email invites at 3 permission levels (owner, editor, viewer).',
    tags: ['React', 'FastAPI', 'PostgreSQL'],
    year: 'August 2026',
    highlights: [
      'astAPI/PostgreSQL backend and React frontend, including Google OAuth and JWT authentication across REST endpoints; deployed to Render and Vercel',
      'Designed an auto-layout system that places and resizes elements using collision detection to prevent overlap',
      'Added book sharing with email invites and three permission levels: owner, editor, and viewer',
    ],
    images: [
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop&auto=format',
    ],
    githubUrl: 'https://github.com/chelsearwang/REPLACE_ME',
    liveUrl: 'https://scrapbook-a7fl-one.vercel.app/',
  },
  {
    id: 3,
    number: '03',
    title: 'SoCal',
    description: 'A full-stack mobile calendar app that makes sharing, organizing, and managing family schedules simple.',
    tags: ['React Native', 'Expo', 'Google Calendar API'],
    year: 'REPLACE_ME',
    highlights: [
      'Frontend contributor on a full-stack group project, developing multi-view calendar interfaces and interactive scheduling experiences with React Native and Expo.',
      'Built reusable components for calendar rendering, event management, navigation, and dynamic scrolling/zooming.',
      'Integrated frontend calendar functionality with the Google Calendar API for real-time event display and management.',
    ],
    images: [
      'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&h=600&fit=crop&auto=format',
    ],
    githubUrl: 'https://github.com/chelsearwang/REPLACE_ME',
    liveUrl: 'https://veneratedapotheosis.github.io/SoCal/',
  },
]

export const experienceSection = {
  eyebrow: '03',
  heading: 'Experience',
  subtitle: 'Roles, research, and milestones.',
}

export const experiences: Experience[] = [
  {
    id: 'sri-lab-assistant',
    company: 'Sensing and Robotics for Infrastricture (SRI) Lab at UCLA',
    role: 'Undergraduate Research Assistant',
    period: 'August 2026 - PRESENT',
    location: 'Los Angeles, CA',
    description: 'Migrating a Heron-style Unmanned Surface Vehicle’s robotics platform from ROS1 to ROS2 (Jazzy Jalisco). Updating ROS2 packages and launch configurations, resolving dependencies across the robotics software stack.',
    tech: ['Python', 'C++', 'ROS2'],
  },
  {
    id: 'kwk-mentor',
    company: 'Kode With Klossy',
    role: 'AI/ML Instructor Assistant',
    period: 'March 2026 - August 2026',
    location: 'Online',
    description: 'Mentored 20 high school scholars in building AI chatbot applications using Python, PyTorch, Hugging Face, embeddings, prompt engineering, and Retrieval-Augmented Generation (RAG). Built a reference RAG chatbot with cosine-similarity query-document ranking and top-k retrieval.',
    tech: ['Python', 'RAG', 'LLMs'],
  },
  {
    id: 'kwk-accelerator',
    company: 'Kode With Klossy',
    role: 'Technical Leader Accelerator Participant',
    period: 'May 2026 - August 2026',
    location: 'REPLACE_ME',
    description: 'Selected for Kode With Klossy\'s inaugural Technical Leadership Accelerator, a 12-week leadership development program focused on technical communication, collaboration, and inclusive leadership.',
    tech: ['Code Review', 'Technical Communication', 'Mentorship'],
    link: 'https://app.notion.com/p/Technical-Leadership-Portfolio-Chelsea-Wang-ba6aae343187836aab02814c8aabcbed',
    linkLabel: 'View portfolio →',
  },
  {
    id: 'acm-w',
    company: 'Association for Computing Machinery at UCLA',
    role: 'ACM W Officer',
    period: 'October 2025 - PRESENT',
    location: 'Los Angeles, CA',
    description: 'Led a 2-quarter Git/React/Firebase course for 40 participants across 8 teams, guiding them through development and debugging, including Git workflows, merge conflict resolution, and frontend/backend implementation, culminating in MVP pitches to ACM, alumni, and faculty.',
    tech: ['Git', 'React', 'Firebase'],
  },
  {
    id: 'ucsd-cosmos',
    company: 'UC San Diego COSMOS — Robots for Undersea Science',
    role: 'Student Researcher',
    period: 'July 2024 - August 2024',
    location: 'San Diego, CA',
    description: 'Built an Autonomous Surface Vessel (ASV) in a team, integrating a Kakute H743 flight controller for navigation and a Metro M4 microcontroller for real-time sensor logging. Collect and transmit GPS coordinates, pH levels, and digital temperature data in real time via telemetry radio to a ground base station.',
    tech: ['ArduPilot', 'GPS/Telemetry', 'Embedded Systems'],
  },
]

export const contact = {
  eyebrow: '04',
  heading: "Let's Connect",
  blurb: "Let's make something together :)",
}

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', handle: '@chelsearwang', href: 'https://github.com/chelsearwang' },
  { label: 'LinkedIn', handle: 'Chelsea Wang', href: 'https://www.linkedin.com/in/chelsea-wang-00a400322/' },
  { label: 'Email', handle: 'chelsearwang@ucla.edu', href: 'mailto:chelsearwang@ucla.edu' },
]

export const footer = {
  thanksMessage: 'thanks for stopping by! 👋',
  text: (year: number) => `built with React by Chelsea Wang · ${year}`,
}

// Shown in the terminal easter egg after 5 clicks on your name
export const terminalLines = [
  '> aboutme',
  'chelsea — CSE @ UCLA',
  '> cat current_focus.txt',
  'coding side projects, chasing internships, learning new things',
  '> ls hobbies/',
  'hiking/  running/  percussion/  reading/',
  '> echo $THANKS',
  'thanks for stopping by :)',
  '> exit',
]

export const nav = {
  sections: [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ],
}