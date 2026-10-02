import { useState } from 'react'
import { ExternalLink } from 'lucide-react'
import { GithubIcon } from './BrandIcons'
import { profile } from '../config/content'
import type { Project } from '../types'

export function ProjectCard({ p }: { p: Project }) {
  const [flipped, setFlipped] = useState(false)
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="flip-scene"
      style={{ minHeight: 320 }}
      onClick={() => setFlipped(f => !f)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-hover
    >
      <div
        className={`flip-card ${flipped ? 'is-flipped' : ''}`}
        style={{
          minHeight: 320,
          transform: `${flipped ? 'rotateY(180deg)' : 'rotateY(0)'} ${hovered ? 'translateY(-6px)' : 'translateY(0)'}`,
        }}
      >
        <div
          className="flip-face bg-white p-7 flex flex-col gap-4"
          style={{
            border: `1.5px solid ${hovered ? profile.accent : '#f3f4f6'}`,
            boxShadow: hovered ? `0 20px 44px ${profile.accent}25, 0 4px 14px rgba(10,10,10,0.08)` : '0 1px 6px rgba(0,0,0,0.04)',
            transition: 'border-color 0.25s, box-shadow 0.25s',
          }}
        >
          <div className="flex items-start justify-between">
            <span className="font-mono-custom text-xs tracking-widest" style={{ color: profile.accent }}>{p.number}</span>
            <div className="flex items-center gap-2">
              {p.githubUrl && (
                <a
                  href={p.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View on GitHub"
                  onClick={e => e.stopPropagation()}
                  className="p-1.5 rounded-lg transition-all duration-200 hover:scale-110"
                  style={{ color: profile.accent, background: `${profile.accent}12`, border: `1px solid ${profile.accent}30` }}
                >
                  <GithubIcon size={16} />
                </a>
              )}
              {p.liveUrl && (
                <a
                  href={p.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View live demo"
                  onClick={e => e.stopPropagation()}
                  className="p-1.5 rounded-lg transition-all duration-200 hover:scale-110"
                  style={{ color: profile.accent, background: `${profile.accent}12`, border: `1px solid ${profile.accent}30` }}
                >
                  <ExternalLink size={16} />
                </a>
              )}
              <span className="font-mono-custom text-xs text-gray-300 ml-1">{p.year}</span>
            </div>
          </div>
          <div>
            <h3 className="text-xl text-gray-900 mb-2" style={{ fontFamily: "'Fraunces', serif", fontWeight: 600 }}>{p.title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{p.description}</p>
          </div>
          <div className="flex flex-wrap gap-2 mt-auto">
            {p.tags.map(tag => (
              <span key={tag} className="font-mono-custom text-xs px-2.5 py-1 rounded-full bg-gray-50 border border-gray-100 text-gray-500">
                {tag}
              </span>
            ))}
          </div>
          <p className="font-mono-custom text-xs text-gray-300 text-right">click to flip →</p>
        </div>

        <div
          className="flip-face flip-face-back flex flex-col"
          style={{
            backgroundColor: '#f0f5fb',
            border: `1.5px solid ${hovered ? profile.accent : `${profile.accent}40`}`,
            boxShadow: hovered ? `0 20px 44px ${profile.accent}25, 0 4px 14px rgba(10,10,10,0.08)` : 'none',
            transition: 'border-color 0.25s, box-shadow 0.25s',
          }}
        >
          <div className="flex items-center justify-between px-7 pt-7 pb-4 flex-shrink-0">
            <span className="text-lg text-gray-900" style={{ fontFamily: "'Fraunces', serif", fontWeight: 600 }}>{p.title}</span>
            <span className="font-mono-custom text-xs px-3 py-1 rounded-full text-white" style={{ backgroundColor: profile.accent }}>{p.year}</span>
          </div>

          <div className="flex-1 min-h-0 overflow-y-auto px-7 scroll-visible" style={{ position: 'relative' }}>
            <p className="font-mono-custom text-xs uppercase tracking-widest text-gray-400 mb-3">Highlights</p>
            <ul className="space-y-2.5 pb-2">
              {p.highlights.map((h, i) => (
                <li key={i} className="text-sm text-gray-600 leading-relaxed flex gap-2">
                  <span style={{ color: profile.accent }}>▸</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap items-center gap-4 px-7 pt-3 pb-5 border-t flex-shrink-0" style={{ borderColor: `${profile.accent}30` }}>
            {p.githubUrl && (
              <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} className="font-mono-custom text-xs hover:underline transition-colors" style={{ color: profile.accent }}>
                GitHub ↗
              </a>
            )}
            {p.liveUrl && (
              <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} className="font-mono-custom text-xs hover:underline transition-colors" style={{ color: profile.accent }}>
                Live demo ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}