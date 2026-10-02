import { projects, projectsSection, profile } from '../config/content'
import { ProjectCard } from './ProjectCard'
import { Reveal } from './Reveal'

export function Projects() {
  return (
    <section id="projects" className="py-28" style={{ backgroundColor: '#f7f8fa' }}>
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <Reveal>
          <div className="flex items-baseline gap-4 mb-4">
            <span className="font-mono-custom text-xs tracking-widest uppercase" style={{ color: profile.accent }}>{projectsSection.eyebrow}</span>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '2.75rem', fontWeight: 600 }}>{projectsSection.heading}</h2>
          </div>
          <p className="text-sm text-gray-400 mb-14 ml-10">{projectsSection.subtitle}</p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08}>
              <ProjectCard p={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}