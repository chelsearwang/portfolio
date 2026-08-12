import { Code2 } from 'lucide-react'
import { projects, projectsSection, sectionIcon } from '../config/content'
import { ProjectCard } from './ProjectCard'
import { Reveal } from './Reveal'

export function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 px-6" style={{ background: 'rgba(200,230,255,0.1)' }}>
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-xl" style={{ background: sectionIcon.bg, color: sectionIcon.color }}>
              <Code2 size={20} />
            </div>
            <h2 className="font-display font-bold" style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)', lineHeight: 1.1, color: '#1a2340' }}>
              {projectsSection.heading}
            </h2>
          </div>
          <p className="font-mono-custom text-sm mb-16" style={{ color: '#4862ae' }}>{projectsSection.subtitle}</p>
        </Reveal>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08}>
              <ProjectCard project={p} index={i} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div
            className="mt-6 rounded-2xl p-6 flex items-center justify-center gap-4 border-2 border-dashed transition-all duration-300 hover:border-solid group"
            style={{ borderColor: 'rgba(142,170,255,0.4)', minHeight: 120, cursor: 'default' }}
          >
            <span className="text-3xl group-hover:animate-spin-slow">🚧</span>
            <div>
              <p className="font-display font-bold text-lg" style={{ color: '#1a2340' }}>{projectsSection.comingSoonTitle}</p>
              <p className="font-mono-custom text-xs" style={{ color: '#8eaaff' }}>{projectsSection.comingSoonSubtitle}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}