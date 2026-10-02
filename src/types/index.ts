export interface Project {
  id: number
  number: string
  title: string
  description: string
  tags: string[]
  year: string
  highlights: string[]
  images: string[]
  githubUrl?: string
  liveUrl?: string
}

export interface Skill {
  name: string
}

export interface Experience {
  id: string
  company: string
  role: string
  period: string
  location: string
  description: string
  tech: string[]
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
}

export interface ConfettiPieceData {
  id: number
  x: number
  color: string
  size: number
  delay: number
  duration: number
}

export interface Course {
  code: string
  title: string
}