export interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  color: string
  emoji: string
  highlights: string[]
  githubUrl?: string
  liveUrl?: string
}

export interface Skill {
  name: string
  color: string
}

export interface Experience {
  id: string
  company: string
  role: string
  period: string
  location: string
  description: string
  tech: string[]
  color: string
  accent: string
  emoji: string
  link?: string
  linkLabel?: string
}

export interface Fact {
  emoji: string
  label: string
}

export interface SocialLink {
  label: string
  handle?: string
  href: string
  icon: string
  color: string
}

export interface ConfettiPieceData {
  id: number
  x: number
  color: string
  size: number
  delay: number
  duration: number
}

export type CourseCategory = 'All' | 'Systems' | 'AI/ML' | 'Theory' | 'Math'

export interface Course {
  code: string
  title: string
  group: string
}