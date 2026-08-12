// ─────────────────────────────────────────────────────────────────────────
// SITE CONTENT
// ─────────────────────────────────────────────────────────────────────────
import type { Project, Skill, Experience, Fact, SocialLink, Course } from '../types'

export const profile = {
  name: 'Chelsea Wang',
  navLabel: 'chelsearwang',
  heroGreeting: 'hello, world',
  description: 'CSE student at UCLA building full-stack apps and exploring AI/ML (and would very much so like a job)',
  primaryCtaLabel: 'See my work',
  secondaryCtaLabel: 'Get in touch',
  nameClickHintSingular: '1 more click...',
  nameClickHintPlural: (n: number) => `${n} more clicks...`,
  nameClickIdleHint: '↑ psst, try clicking my name',
  heroSocialLabels: ['GitHub', 'LinkedIn'],
  terminalUser: 'chelsea',
  heroAccent: '#4862ae',
}

// Shared icon style for every section header badge
export const sectionIcon = {
  bg: 'rgba(142,170,255,0.18)',
  color: '#8eaaff',
}

export const about = {
  heading: 'About Me',
  subtitle: 'A little about me and my interests!',
  paragraphs: [
    "Hi! I'm Chelsea, a student studying Computer Science and Engineering at UCLA! I'm interested in full stack development and AI/ML.",
    "Outside of coding, I enjoy hiking, running, photography, and cafe hopping!",
  ],
  skillsLabel: '// technologies',
  badges: [
    { label: 'GPA 3.94 ⭐', bg: '#fff3c4' },
    { label: 'Class of 2029 🎓', bg: '#ffd6e8' },
  ],
}

export const facts: Fact[] = [
  { emoji: '🎓', label: 'UCLA' },
  { emoji: '📍', label: 'Bay Area' },
  //{ emoji: '💼', label: 'insert something' },
  //{ emoji: '🌙', label: 'insert fun fact' },
]


export const courseworkSection = {
  title: 'Relevant Coursework',
}

export const courses: Course[] = [
  { code: 'CS 31', title: 'Intro to Computer Science I', group: 'Software' },
  { code: 'CS 32', title: 'Data Structures', group: 'Software' },
  { code: 'CS 35L', title: 'Software Construction', group: 'Software' },
  { code: 'CS 33', title: 'Computer Organization', group: 'Systems & Hardware' },
  { code: 'Math 61', title: 'Discrete Structures', group: 'Math & Physics' },
  { code: 'Math 33A', title: 'Linear Algebra', group: 'Math & Physics' },
  { code: 'Math 33B', title: 'Differential Equations', group: 'Math & Physics' },
  { code: 'Physics 1B', title: 'Oscillations, Waves, E&M', group: 'Math & Physics' },
  { code: 'Physics 1C', title: 'Electrodynamics & Optics', group: 'Math & Physics' },
]

export const projects: Project[] = [
  {
    id: 1,
    title: "RoomManager",
    description: "A full-stack roommate management app built on custom calendar-recurrence algorithms and a debt-simplification algorithm for expense splitting.",
    tags: ["React Native", "Expo", "Node.js", "Express","PostgreSQL"],
    color: "#c8e6ff",
    emoji: "🏠",
    highlights: [
      "Built a chore rotation engine with custom recurrence scheduling and a debt-simplification algorithm for splitting shared expenses",
      "Implemented JWT authentication and Google OAuth (including a redirect-based flow for web), backed by a REST API deployed on Render with PostgreSQL",
      "Wrote a Jest test suite covering core business logic and built the React Native frontend including a custom calendar picker component",
    ],
    githubUrl: "https://github.com/chelsearwang/roommate-app",
    liveUrl: "https://roommanager-kkw4.onrender.com/",
  },
  {
    id: 2,
    title: 'Linked List Lesson',
    description:
      'An interactive linked list visualizer that traces real algorithms line-by-line, showing exactly how pointers rewire without any of the nodes ever moving.',
    tags: ['HTML', 'CSS', 'Javascripts'],
    color: '#d6d0ff',
    emoji: '🔗',
    highlights: [
      'Step-based animation engine that traces real algorithms line-by-line',
      'Full animation pre-computed before playback — instant scrubbing forward and back through every step',
      'Synced code highlighting and a retry-based quiz to reinforce the concept, not just show it',
    ],
    githubUrl: 'https://github.com/chelsearwang/REPLACE_ME',
    liveUrl: "https://chelsearwang.github.io/TLA_Impact_Project/",
  },
  {
    id: 3,
    title: 'SoCal',
    description:
      'A full-stack mobile calendar app that makes sharing, organizing, and managing family schedules simple.',
    tags: ['Expo', 'React Native', 'Node.js'],
    color: '#c6f0e4',
    emoji: '🗓️',
    highlights: [
      'Frontend contributor on a full-stack group project, developing multi-view calendar interfaces and interactive scheduling experiences with React Native and Expo.',
      'Built reusable components for calendar rendering, event management, navigation, and dynamic scrolling/zooming.',
      'Integrated frontend calendar functionality with the Google Calendar API for real-time event display and management.',
    ],
    githubUrl: 'https://github.com/VeneratedApotheosis/SoCal',
    liveUrl: "https://veneratedapotheosis.github.io/SoCal/",
  },
]

export const projectsSection = {
  heading: 'Projects',
  subtitle: "Some things I've been working on - click each card to see more!",
  comingSoonTitle: 'More coming soon!',
  comingSoonSubtitle: 'currently brewing in my local environment...',
}

export const skills: Skill[] = [
  { name: 'Python', color: '#c8e6ff' },
  { name: 'TypeScript', color: '#d6d0ff' },
  { name: 'React', color: '#c6f0e4' },
  { name: 'React Native', color: '#ffd6e8' },
  { name: 'Node.js', color: '#fff3c4' },
  { name: 'Express', color: '#c8e6ff' },
  { name: 'PostgreSQL', color: '#d6d0ff' },
  { name: 'Java', color: '#c6f0e4' },
  { name: 'C++', color: '#ffd6e8' },
  { name: 'Git', color: '#fff3c4' },
  { name: 'REST APIs', color: '#c8e6ff' },
  // { name: 'Linux', color: '#d6d0ff' },
]

export const experiences: Experience[] = [
  {
    id: 'kwk-mentor',
    company: 'Kode With Klossy',
    role: 'AI/ML Camp Mentor',
    period: 'March 2026 - Present',
    location: 'Virtual',
    description:
      'Mentor 20 high school scholars building AI-powered chatbot applications with PyTorch, Hugging Face, and Retrieval-Augmented Generation, guiding them through debugging ML pipelines. Built a reference RAG chatbot with cosine-similarity ranking and mode-conditioned prompting as demo.',
    tech: ['Python', 'RAG', 'LLMs'],
    color: '#c8e6ff',
    accent: '#4a90d9',
    emoji: '🤖',
  },
  {
    id: 'kwk-accelerator',
    company: 'Kode With Klossy',
    role: 'Technical Leader Accelerator Participant',
    period: 'May 2026 - August 2026',
    location: 'Remote',
    description:
      'Developed technical leadership skills — clear communication, productive code reviews, and mentoring practices — through a hands-on accelerator program.',
    tech: ['Code Review', 'Technical Communication', 'Mentorship'],
    color: '#fff3c4',
    accent: '#c9a227',
    emoji: '🧭',
    link: 'https://app.notion.com/p/Technical-Leadership-Portfolio-Chelsea-Wang-ba6aae343187836aab02814c8aabcbed?source=copy_link',
    linkLabel: 'View portfolio →',
  },
  {
    id: 'acm-w',
    company: 'ACM W',
    role: 'Officer',
    period: 'September 2025 - Present',
    location: 'UCLA',
    description:
      'Led a 2-quarter Git/React/Firebase course for 40 students across 8 project teams, guiding them through the full software development lifecycle from code review to final presentations.',
    tech: ['Git', 'React', 'Firebase'],
    color: '#d6d0ff',
    accent: '#7040c0',
    emoji: '👩‍💻',
  },
  {
    id: 'ucsd-cosmos',
    company: 'UC San Diego — COSMOS',
    role: 'Student Researcher',
    period: 'July 2024 - August 2024',
    location: 'San Diego, CA',
    description:
      'Built and programmed an autonomous Unmanned Surface Vehicle for environmental monitoring, programming Metro M4 microcontroller for real-time sensor acquisition and configuring ArduPilot for GPS waypoint navigation.',
    tech: ['ArduPilot', 'GPS/Telemetry', 'Embedded Systems'],
    color: '#c6f0e4',
    accent: '#3a9a5c',
    emoji: '🚤',
  },
]

export const experienceSection = {
  heading: 'Experiences',
  subtitle: "A little bit of what I’ve been up to.",
}

export const marqueeItems = [
  'algorithms', 'data structures', 'clean code', 'version control',
  'REST APIs', 'databases', 'unit testing', 'code reviews',
  'system design', 'debugging', 'documentation', 'continuous deployment',
]

export const contact = {
  heading: "Let's Connect",
  subtitle: 'Feel free to reach out and say hello!',
  blurb:
    "Always open to new projects, opportunities, and interesting conversations :)",
  submitLabel: 'Send message',
  successTitle: 'Message sent!',
  successBlurb: "I'll get back to you faster than O(1) lookup.",
  successResetLabel: 'send another',
  email: 'REPLACE_ME@example.com',
}

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', handle: '@chelsearwang', href: 'https://github.com/chelsearwang', icon: '⌨️', color: '#c8e6ff' },
  { label: 'LinkedIn', handle: '/in/chelsea-wang-00a400322/', href: 'https://www.linkedin.com/in/chelsea-wang-00a400322/', icon: '🔗', color: '#d6d0ff' },
  { label: 'Email', handle: 'chelsearwang@g.ucla.edu', href: 'mailto:chelsearwang@g.ucla.edu', icon: '✉️', color: '#ffd6e8' },
]

export const footer = {
  thanksMessage: 'thanks for stopping by!',
  text: (year: number) => `built with React by Chelsea Wang · ${year}`,
  konamiHintCollapsed: "pssst... there's a konami code easter egg",
  konamiHintExpanded: '↑ ↑ ↓ ↓ ← → ← → B A — try it on your keyboard 👾',
}

export const terminalLines = [
  '> aboutme',
  'chelsea — CSE @ UCLA, full-stack developer',
  '> cat current_focus.txt',
  'building projects, chasing internships, learning new things',
  '> ls hobbies/',
  'hiking/  reading/  running/  photography/',
  '> echo $CONGRATS',
  'nice job finding this! thanks for poking around the site',
  '> exit',
]

export const nav = {
  sections: [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experiences' },
    { id: 'contact', label: 'Contact' },
  ],
  konamiActiveLabel: '⚡ hello! ⚡',
}