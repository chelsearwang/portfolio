import { useRef, useState } from 'react'
import { ExternalLink } from 'lucide-react'
import { GithubIcon } from './BrandIcons'
import type { Project } from '../types'

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [flipped, setFlipped] = useState(false)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current!.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = (e.clientX - cx) / (rect.width / 2)
    const dy = (e.clientY - cy) / (rect.height / 2)
    setTilt({ x: dy * -8, y: dx * 8 })
  }

  const onMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
    setHovered(false)
  }

  return (
    <div
      ref={cardRef}
      className="relative h-96 cursor-pointer rounded-2xl transition-all duration-300"
      style={{
        perspective: '1000px',
        animationDelay: `${index * 0.1}s`,
        boxShadow: hovered ? `0 16px 44px ${project.color}90` : 'none',
      }}
      onMouseMove={onMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={onMouseLeave}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
          transform: flipped
            ? `rotateY(180deg) rotateX(${tilt.x * 0.5}deg)`
            : `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 rounded-2xl p-6 flex flex-col"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            background: project.color,
            border: '1px solid rgba(255,255,255,0.6)',
            boxShadow: `0 8px 32px ${project.color}80`,
          }}
          onClick={() => setFlipped(true)}
        >
          {(project.githubUrl || project.liveUrl) && (
            <div className="absolute top-4 right-4 flex gap-2 z-10">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View on GitHub"
                  className="p-2.5 rounded-lg transition-all duration-200 hover:scale-110"
                  style={{ background: 'rgba(255,255,255,0.7)', color: '#1a2340' }}
                  onClick={e => e.stopPropagation()}
                >
                  <GithubIcon size={20} />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View live demo"
                  className="p-2.5 rounded-lg transition-all duration-200 hover:scale-110"
                  style={{ background: 'rgba(255,255,255,0.7)', color: '#1a2340' }}
                  onClick={e => e.stopPropagation()}
                >
                  <ExternalLink size={20} />
                </a>
              )}
            </div>
          )}
          <div className="text-5xl mb-4">{project.emoji}</div>
          <h3 className="font-display font-bold text-2xl mb-2 pr-20" style={{ color: '#1a2340' }}>{project.title}</h3>
          <p className="font-body text-sm leading-relaxed flex-1" style={{ color: '#3a4a6a' }}>{project.description}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.map(tag => (
              <span key={tag} className="font-mono-custom text-xs px-2 py-1 rounded-full" style={{ background: 'rgba(255,255,255,0.5)', color: '#1a2340' }}>
                {tag}
              </span>
            ))}
          </div>
          <p className="font-mono-custom text-xs mt-3 opacity-50" style={{ color: '#1a2340' }}>click for details ↻</p>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 rounded-2xl p-6 flex flex-col"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            background: '#1a2340',
            border: '1px solid rgba(142,170,255,0.2)',
          }}
          onClick={() => setFlipped(false)}
        >
          <p className="font-mono-custom text-xs uppercase tracking-wider mb-3 opacity-60" style={{ color: '#c8e6ff' }}>
            Highlights
          </p>
          <ul className="flex-1 flex flex-col gap-2.5">
            {project.highlights.map((h, i) => (
              <li key={i} className="font-body text-sm leading-snug flex gap-2" style={{ color: '#e8effc' }}>
                <span style={{ color: '#8eaaff' }}>▸</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
          <div className="flex gap-3 flex-wrap justify-center mt-4">
            <button
              className="px-5 py-2 rounded-full font-body font-semibold text-sm transition-all duration-200 hover:scale-105"
              style={{ background: 'transparent', color: '#c8e6ff', border: '1px solid rgba(200,230,255,0.3)' }}
              onClick={() => setFlipped(false)}
            >
              ← Back
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}