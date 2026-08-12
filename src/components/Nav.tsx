import { useEffect, useState } from 'react'
import { nav, profile } from '../config/content'

export function Nav({ konamiActive }: { konamiActive: boolean }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // highlight section currently in view
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
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 sm:px-8 py-4 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(200,230,255,0.65)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(142,170,255,0.4)' : 'none',
      }}
    >
      <a href="#hero" className="font-display text-lg font-bold tracking-tight" style={{ color: '#1a2340' }}>
        <span className={konamiActive ? 'konami-active' : 'shimmer-text'}>
          {konamiActive ? nav.konamiActiveLabel : profile.navLabel}
        </span>
      </a>

      {/* Desktop links */}
      <div className="hidden sm:flex gap-2 font-mono-custom text-sm">
        {nav.sections.map(({ id, label }) => {
          const isActive = activeSection === id
          return (
            <a
              key={id}
              href={`#${id}`}
              className="px-4 py-2 rounded-full transition-all duration-300 hover:-translate-y-0.5"
              style={{
                color: isActive ? '#ffffff' : '#3a4a6a',
                background: isActive ? '#4862ae' : 'transparent',
                boxShadow: isActive ? '0 0 20px rgba(76,95,214,0.55), 0 4px 14px rgba(26,35,64,0.25)' : 'none',
                fontWeight: isActive ? 600 : 400,
              }}
              onMouseEnter={e => { if (!isActive) e.currentTarget.style.background = 'rgba(255,255,255,0.35)' }}
              onMouseLeave={e => { if (!isActive) e.currentTarget.style.background = 'transparent' }}
            >
              {label}
            </a>
          )
        })}
      </div>

      {/* Mobile menu button */}
      <button
        className="sm:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8"
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(o => !o)}
      >
        <span
          className="block w-5 h-0.5 transition-transform duration-200"
          style={{ background: '#1a2340', transform: menuOpen ? 'translateY(5px) rotate(45deg)' : 'none' }}
        />
        <span
          className="block w-5 h-0.5 transition-opacity duration-200"
          style={{ background: '#1a2340', opacity: menuOpen ? 0 : 1 }}
        />
        <span
          className="block w-5 h-0.5 transition-transform duration-200"
          style={{ background: '#1a2340', transform: menuOpen ? 'translateY(-5px) rotate(-45deg)' : 'none' }}
        />
      </button>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          className="sm:hidden absolute top-full left-0 right-0 flex flex-col gap-2 px-6 py-6 font-mono-custom text-sm"
          style={{ background: 'rgba(200,230,255,0.92)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(142,170,255,0.4)' }}
        >
          {nav.sections.map(({ id, label }) => {
            const isActive = activeSection === id
            return (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-2.5 rounded-full transition-all duration-300"
                style={{
                  color: isActive ? '#ffffff' : '#3a4a6a',
                  background: isActive ? '#4862ae' : 'transparent',
                  boxShadow: isActive ? '0 0 20px rgba(76,95,214,0.55), 0 4px 14px rgba(26,35,64,0.25)' : 'none',
                  fontWeight: isActive ? 600 : 400,
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