import { useState } from 'react'
import { User } from 'lucide-react'
import { about, facts, skills, sectionIcon } from '../config/content'
import { Reveal } from './Reveal'
import { Coursework } from './Coursework'

export function About() {
  const [hovered, setHovered] = useState<number | null>(null)
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <section id="about" className="py-24 sm:py-32 px-6 max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* left column: bio + skills, stacked */}
        <Reveal>
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-xl" style={{ background: sectionIcon.bg, color: sectionIcon.color }}>
              <User size={20} />
            </div>
            <h2 className="font-display font-bold" style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)', lineHeight: 1.1, color: '#1a2340' }}>
              {about.heading}
            </h2>
          </div>
          <p className="font-mono-custom text-sm mb-6" style={{ color: '#4862ae' }}>{about.subtitle}</p>
          {about.paragraphs.map((p, i) => (
            <p key={i} className="font-body leading-relaxed mb-5 last:mb-8" style={{ color: '#5a6a8a', fontSize: '1.05rem' }}>
              {p}
            </p>
          ))}
          <div className="flex flex-wrap gap-3 mb-8">
            {facts.map((f, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-body transition-all duration-200 cursor-default"
                style={{
                  background: hovered === i ? '#c8e6ff' : 'rgba(200,230,255,0.3)',
                  color: '#1a2340',
                  border: '1px solid rgba(142,170,255,0.3)',
                  transform: hovered === i ? 'translateY(-2px)' : 'none',
                }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <span>{f.emoji}</span>
                <span>{f.label}</span>
              </div>
            ))}
          </div>

          {/* skills card stacked below bio */}
          <div className="relative">
            <div
              className="relative w-full rounded-3xl overflow-hidden flex flex-col p-6"
              style={{ background: 'linear-gradient(135deg, #c8e6ff, #d6d0ff, #c6f0e4)', minHeight: 200 }}
            >
              <p className="font-mono-custom text-xs uppercase tracking-wider mb-4 opacity-60" style={{ color: '#1a2340' }}>
                {about.skillsLabel}
              </p>
              <div className="flex flex-wrap gap-2 content-start flex-1">
                {skills.map(skill => {
                  const isHovered = hoveredSkill === skill.name
                  return (
                    <span
                      key={skill.name}
                      className="text-xs px-3 py-1.5 rounded-full font-mono-custom font-medium cursor-default transition-all duration-200 ease-out"
                      style={{
                        background: isHovered ? skill.color : 'rgba(255,255,255,0.6)',
                        color: '#1a2340',
                        outline: isHovered ? `2px solid ${skill.color}` : '2px solid transparent',
                        outlineOffset: '1px',
                        transform: isHovered ? 'scale(1.12) translateY(-2px)' : 'scale(1) translateY(0)',
                        boxShadow: isHovered ? `0 6px 16px ${skill.color}` : 'none',
                      }}
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      {skill.name}
                    </span>
                  )
                })}
              </div>
            </div>

            {about.badges.map((b, i) => (
              <div
                key={b.label}
                className="absolute animate-float px-3 py-2 rounded-2xl font-mono-custom text-xs font-bold"
                style={{
                  background: b.bg,
                  color: '#1a2340',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  animationDelay: i === 0 ? '0.5s' : '1.2s',
                  ...(i === 0 ? { top: -16, right: -16 } : { bottom: -16, left: -16 }),
                }}
              >
                {b.label}
              </div>
            ))}
          </div>
        </Reveal>

        {/* right column: coursework */}
        <Reveal delay={0.12}>
          <Coursework />
        </Reveal>
      </div>
    </section>
  )
}