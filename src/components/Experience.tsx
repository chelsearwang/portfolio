import { useState } from 'react'
import { experiences, experienceSection, profile } from '../config/content'
import { Reveal } from './Reveal'

export function Experience() {
  const [activeIdx, setActiveIdx] = useState(0)

  return (
    <section id="experience" className="py-28 bg-white dot-grid-faint">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <Reveal>
          <div className="flex items-baseline gap-4 mb-16">
            <span className="font-mono-custom text-xs tracking-widest uppercase" style={{ color: profile.accent }}>{experienceSection.eyebrow}</span>
            <div>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '2.75rem', fontWeight: 600 }}>{experienceSection.heading}</h2>
              <p className="mt-2 text-sm text-gray-400">{experienceSection.subtitle}</p>
            </div>
          </div>
        </Reveal>

        <div className="relative pl-8 md:pl-12">
          <div className="absolute left-0 top-2 bottom-2 w-px" style={{ background: 'linear-gradient(to bottom, transparent, #e5e7eb 8%, #e5e7eb 92%, transparent)' }} />

          <div className="space-y-8">
            {experiences.map((exp, i) => {
              const isActive = i === activeIdx
              return (
                <Reveal key={exp.id} delay={i * 0.08}>
                  <div className="relative" onMouseEnter={() => setActiveIdx(i)} data-hover>
                    <div
                      className={`tl-dot absolute -left-8 md:-left-12 top-5 translate-x-[-50%] ${isActive ? 'active' : ''}`}
                      style={{ marginLeft: '0.5px' }}
                    />
                    <div
                      className="border rounded-xl p-5 transition-all duration-200"
                      style={{
                        borderColor: isActive ? `${profile.accent}40` : '#f3f4f6',
                        backgroundColor: isActive ? `${profile.accent}08` : 'white',
                        boxShadow: isActive ? `0 4px 20px ${profile.accent}15` : '0 1px 4px rgba(0,0,0,0.03)',
                      }}
                    >
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div>
                          <span className="font-mono-custom text-xs tracking-widest" style={{ color: profile.accent }}>{exp.company}</span>
                          <h3 className="text-[1.1rem] text-gray-900 mt-0.5" style={{ fontFamily: "'Fraunces', serif", fontWeight: 600 }}>{exp.role}</h3>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <p className="font-mono-custom text-xs tracking-wider text-gray-500">{exp.period}</p>
                          <p className="text-xs text-gray-400 mt-0.5">{exp.location}</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-500 leading-relaxed mb-3">{exp.description}</p>
                      <div className="flex flex-wrap items-center gap-2">
                        {exp.tech.map(tag => (
                          <span
                            key={tag}
                            className="font-mono-custom text-xs px-2.5 py-0.5 rounded-full border"
                            style={{
                              backgroundColor: isActive ? `${profile.accent}14` : '#f9fafb',
                              borderColor: isActive ? `${profile.accent}40` : '#e5e7eb',
                              color: isActive ? profile.accent : '#6b7280',
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                        {exp.link && (
                          <a
                            href={exp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono-custom text-xs px-2.5 py-0.5 rounded-full font-semibold underline"
                            style={{ color: profile.accent }}
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
      </div>
    </section>
  )
}