import { useEffect } from 'react'
import { X, ExternalLink } from 'lucide-react'
import { GithubIcon } from './BrandIcons'
import { profile } from '../config/content'
import type { Project } from '../types'

export function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      style={{ background: 'rgba(10,10,10,0.6)', backdropFilter: 'blur(6px)' }}
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-3xl bg-white scroll-visible"
        style={{ boxShadow: '0 40px 100px rgba(0,0,0,0.35)' }}
        onClick={e => e.stopPropagation()}
      >
        <div className="p-8 md:p-10">
          <div className="flex items-start justify-between gap-4 mb-1">
            <span className="font-mono-custom text-xs tracking-widest" style={{ color: profile.accent }}>{project.number}</span>
            <button onClick={onClose} aria-label="Close" className="p-1.5 rounded-full transition-colors hover:bg-gray-100" data-hover>
              <X size={18} />
            </button>
          </div>

          <h2 className="mb-3" style={{ fontFamily: "'Fraunces', serif", fontSize: '2rem', fontWeight: 600, color: '#0a0a0a' }}>
            {project.title}
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">{project.description}</p>

          <p className="font-mono-custom text-xs uppercase tracking-widest text-gray-400 mb-3">Highlights</p>
          <ul className="space-y-2.5 mb-7">
            {project.highlights.map((h, i) => (
              <li key={i} className="text-sm text-gray-600 leading-relaxed flex gap-2">
                <span style={{ color: profile.accent }}>▸</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>

          {project.images.length > 0 && (
            <>
              <p className="font-mono-custom text-xs uppercase tracking-widest text-gray-400 mb-3">Screenshots</p>
              <div className={project.images.length > 1 ? 'grid grid-cols-2 gap-3 mb-7' : 'mb-7'}>
                {project.images.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`${project.title} screenshot ${i + 1}`}
                    className={`w-full object-cover rounded-xl border border-gray-100 ${project.images.length > 1 ? 'h-40' : 'h-64'}`}
                  />
                ))}
              </div>
            </>
          )}

          <div className="flex flex-wrap gap-2 mb-7">
            {project.tags.map(tag => (
              <span key={tag} className="font-mono-custom text-xs px-2.5 py-1 rounded-full bg-gray-50 border border-gray-100 text-gray-500">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-transform hover:scale-105"
                style={{ background: '#0a0a0a', color: '#ffffff' }}
              >
                <GithubIcon size={16} /> GitHub
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-transform hover:scale-105"
                style={{ background: `${profile.accent}14`, color: profile.accent, border: `1px solid ${profile.accent}40` }}
              >
                <ExternalLink size={16} /> Live demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}