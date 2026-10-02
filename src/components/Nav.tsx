import { useEffect, useState } from 'react'
import { nav, profile } from '../config/content'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = ['hero', ...nav.sections.map(s => s.id)]
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { threshold: 0.4 }
    )
    ids.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(250,250,249,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,0,0,0.06)' : '1px solid transparent',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#hero" className="font-display text-lg font-bold tracking-tight">
          <span className="shimmer-text">{profile.navLabel}</span>
        </a>

        <div className="hidden sm:flex items-center gap-2">
          {nav.sections.map(({ id, label }) => {
            const isActive = activeSection === id
            return (
              <a                                               
                key={id}
                href={`#${id}`}
                className="nav-link px-4 py-2 rounded-full"
                style={{
                  color: isActive ? '#ffffff' : '#6b7280',
                  background: isActive ? profile.accent : 'transparent',
                  boxShadow: isActive ? `0 0 18px ${profile.accent}80, 0 4px 14px rgba(10,10,10,0.15)` : 'none',
                  transform: 'translateY(0)',
                  transition: 'background-color 0.3s ease-out, color 0.3s ease-out, box-shadow 0.3s ease-out, transform 0.3s ease-out',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-3px)'
                  if (!isActive) {
                    e.currentTarget.style.color = profile.accent
                    e.currentTarget.style.background = `${profile.accent}14`
                    e.currentTarget.style.boxShadow = `0 8px 20px ${profile.accent}30`
                  } else {
                    e.currentTarget.style.boxShadow = `0 12px 26px ${profile.accent}90, 0 4px 14px rgba(10,10,10,0.2)`
                  }
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  if (!isActive) {
                    e.currentTarget.style.color = '#6b7280'
                    e.currentTarget.style.background = 'transparent'
                    e.currentTarget.style.boxShadow = 'none'
                  } else {
                    e.currentTarget.style.boxShadow = `0 0 18px ${profile.accent}80, 0 4px 14px rgba(10,10,10,0.15)`
                  }
                }}
              >
                {label}
              </a>
            )
          })}
        </div>

        <button
          className="sm:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(o => !o)}
          data-hover
        >
          <span className="block w-5 h-0.5 transition-transform duration-200" style={{ background: '#0a0a0a', transform: menuOpen ? 'translateY(5px) rotate(45deg)' : 'none' }} />
          <span className="block w-5 h-0.5 transition-opacity duration-200" style={{ background: '#0a0a0a', opacity: menuOpen ? 0 : 1 }} />
          <span className="block w-5 h-0.5 transition-transform duration-200" style={{ background: '#0a0a0a', transform: menuOpen ? 'translateY(-5px) rotate(-45deg)' : 'none' }} />
        </button>
      </div>

      {menuOpen && (
        <div className="sm:hidden flex flex-col gap-2 px-6 py-6" style={{ background: 'rgba(250,250,249,0.97)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          {nav.sections.map(({ id, label }) => {
            const isActive = activeSection === id
            return (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setMenuOpen(false)}
                className="nav-link px-4 py-2.5 rounded-full transition-all duration-300"
                style={{
                  color: isActive ? '#ffffff' : '#6b7280',
                  background: isActive ? profile.accent : 'transparent',
                }}
              >
                {label}
              </a>
            )
          })}
        </div>
      )}
    </nav>
  )
}