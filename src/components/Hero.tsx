import { useState } from 'react'
import { profile } from '../config/content'

export function Hero({ onEgg }: { onEgg: () => void }) {
  const [clickCount, setClickCount] = useState(0)
  const s = profile.statusCard
  const remaining = 5 - clickCount

  const handleNameClick = () => {
    const next = clickCount + 1
    setClickCount(next)
    if (next >= 5) {
      onEgg()
      setClickCount(0)
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden dot-grid">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: `radial-gradient(ellipse 65% 55% at 72% 45%, ${profile.accent}12 0%, transparent 70%)` }}
      />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10 w-full pt-24 pb-16 grid md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-3 space-y-6">
          <p className="fade-in-up font-mono-custom text-xl tracking-widest uppercase" style={{ color: profile.accent }}>
            {profile.heroGreeting}<span className="cursor-blink" style={{ color: profile.accent }} />
          </p>
          <h1
            className="fade-in-up-3 leading-none tracking-tight"
            style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: 600, color: '#0a0a0a' }}
          >
            I'm
            <br />
            <span
              className="cursor-pointer select-none"
              onClick={handleNameClick}
              title={clickCount > 0 ? profile.nameClickHintPlural(remaining) : 'Try clicking!'}
              data-hover
            >
              {profile.name}
            </span>
          </h1>
          <p className="fade-in-up-3 text-lg text-gray-500 max-w-md leading-relaxed">
            {profile.description}
          </p>
          <div className="fade-in-up-4 flex items-center gap-4 pt-1">
            <a
              href="#projects"
              className="px-6 py-3 text-sm rounded-full text-white transition-all duration-300"
              style={{ backgroundColor: profile.accent }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#37508f')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = profile.accent)}
            >
              {profile.primaryCtaLabel}
            </a>
            <a
              href="#contact"
              className="px-6 py-3 text-sm text-gray-500 transition-colors underline underline-offset-4"
              onMouseEnter={e => (e.currentTarget.style.color = profile.accent)}
              onMouseLeave={e => (e.currentTarget.style.color = '')}
            >
              {profile.secondaryCtaLabel}
            </a>
          </div>
        </div>

        <div className="fade-in-up-3 md:col-span-2 hidden md:block">
          <div className="border border-gray-100 rounded-2xl p-6 bg-white/70 backdrop-blur-sm font-mono-custom">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-3 h-3 rounded-full bg-red-300" />
              <div className="w-3 h-3 rounded-full bg-yellow-300" />
              <div className="w-3 h-3 rounded-full bg-green-300" />
              <span className="ml-2 text-xs text-gray-400">status.json</span>
            </div>
            <pre className="text-xs leading-7 text-gray-600 whitespace-pre-wrap">
{`{
  "role":     "${s.role}",
  "aspiring": "${s.aspiring}",
  "uni":      "${s.uni}",
  "year":     "${s.year}",
  "location": "${s.location}"
}`}
            </pre>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-35">
        <span className="text-xs tracking-widest uppercase font-mono-custom">scroll</span>
        <div className="w-px h-10 bg-gray-400 animate-pulse" />
      </div>
    </section>
  )
}