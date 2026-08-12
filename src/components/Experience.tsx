import { useState } from 'react'
import { Calendar, MapPin, Briefcase } from 'lucide-react'
import { experiences, experienceSection, sectionIcon } from '../config/content'
import { Reveal } from './Reveal'

export function Experience() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <section id="experience" className="py-24 sm:py-32 px-6">
      {/* header uses the same max-width as About/Projects/Contact so they lnie up yay */}
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-xl" style={{ background: sectionIcon.bg, color: sectionIcon.color }}>
              <Briefcase size={20} />
            </div>
            <h2 className="font-display font-bold" style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)', lineHeight: 1.1, color: '#1a2340' }}>
              {experienceSection.heading}
            </h2>
          </div>
          <p className="font-mono-custom text-sm mb-16" style={{ color: '#4862ae' }}>{experienceSection.subtitle}</p>
        </Reveal>
      </div>

      {/* timeline is centered */}
      <div className="max-w-3xl mx-auto relative">
        <div
          className="absolute left-6 top-0 bottom-0 w-0.5 rounded-full"
          style={{ background: 'linear-gradient(to bottom, #8eaaff, #d6d0ff, #c6f0e4)' }}
        />

        <div className="space-y-8">
          {experiences.map((exp, i) => {
            const isHovered = hovered === exp.id
            return (
              <Reveal key={exp.id} delay={i * 0.12}>
                <div className="relative pl-16">
                  <div
                    className="absolute left-3.5 top-6 w-5 h-5 rounded-full border-2 border-white flex items-center justify-center text-xs shadow-md"
                    style={{ background: exp.color }}
                  >
                    <span>{exp.emoji}</span>
                  </div>

                  <div
                    className="rounded-3xl p-6 transition-all duration-250"
                    style={{
                      background: exp.color,
                      border: `2px solid ${isHovered ? exp.accent : 'rgba(142,170,255,0.15)'}`,
                      transform: isHovered ? 'scale(1.012)' : 'scale(1)',
                      boxShadow: isHovered ? `0 12px 32px ${exp.accent}40` : 'none',
                    }}
                    onMouseEnter={() => setHovered(exp.id)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h3 className="font-display font-bold text-lg" style={{ color: '#1a2340' }}>{exp.role}</h3>
                        <p className="font-body font-semibold text-sm" style={{ color: '#5a6a8a' }}>{exp.company}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 font-mono-custom text-xs mb-1 justify-end" style={{ color: 'rgba(26,35,64,0.5)' }}>
                          <Calendar size={11} />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1 font-mono-custom text-xs justify-end" style={{ color: 'rgba(26,35,64,0.5)' }}>
                          <MapPin size={11} />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    <p className="font-body text-sm leading-relaxed mb-4" style={{ color: '#3a4a6a' }}>{exp.description}</p>

                    <div className="flex flex-wrap items-center gap-2">
                      {exp.tech.map(t => (
                        <span
                          key={t}
                          className="font-mono-custom text-xs px-2.5 py-1 rounded-full font-medium"
                          style={{ background: 'rgba(255,255,255,0.6)', color: '#1a2340' }}
                        >
                          {t}
                        </span>
                      ))}
                      {exp.link && (
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono-custom text-xs px-2.5 py-1 rounded-full font-semibold transition-transform duration-150 hover:scale-105"
                          style={{ color: '#1a2340', textDecoration: 'underline' }}
                          onClick={e => e.stopPropagation()}
                        >
                          {exp.linkLabel ?? 'View link →'}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}