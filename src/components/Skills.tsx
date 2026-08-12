import { useEffect, useRef, useState } from 'react'
import { skills, skillsSection } from '../config/content'

export function Skills() {
  const [filled, setFilled] = useState<boolean[]>(skills.map(() => false))
  const [revealed, setRevealed] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFilled(skills.map(() => true))
          setRevealed(true)
          obs.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (sectionRef.current) obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="py-24 sm:py-32 px-6 max-w-5xl mx-auto">
      <div className="font-mono-custom text-sm mb-3" style={{ color: '#8eaaff' }}>{skillsSection.eyebrow}</div>
      <h2 className="font-display font-bold mb-16" style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)', lineHeight: 1.1, color: '#1a2340' }}>
        {skillsSection.heading}{' '}
        <em className="font-light" style={{ color: '#8eaaff' }}>{skillsSection.headingEm}</em>
      </h2>

      <div className="grid sm:grid-cols-2 gap-6">
        {skills.map((skill, i) => (
          <div key={skill.name} className="group">
            <div className="flex justify-between mb-2">
              <span className="font-body font-semibold" style={{ color: '#1a2340' }}>{skill.name}</span>
              <span className="font-mono-custom text-sm" style={{ color: '#8eaaff', opacity: revealed ? 1 : 0, transition: 'opacity 0.5s' }}>
                {skill.level}%
              </span>
            </div>
            <div className="w-full h-2.5 rounded-full overflow-hidden" style={{ background: 'rgba(142,170,255,0.15)' }}>
              <div
                className="h-full rounded-full transition-all duration-1000 ease-out"
                style={{
                  width: filled[i] ? `${skill.level}%` : '0%',
                  background: skill.color,
                  transitionDelay: `${i * 80}ms`,
                  boxShadow: `0 0 8px ${skill.color}`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}