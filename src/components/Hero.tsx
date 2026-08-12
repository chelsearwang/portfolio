import { useEffect, useRef, useState } from 'react'
import { profile, socialLinks } from '../config/content'
import { GithubIcon, LinkedinIcon } from './BrandIcons'

const ICONS: Record<string, React.ComponentType<{ size?: number }>> = {
  GitHub: GithubIcon,
  LinkedIn: LinkedinIcon,
}

export function Hero({ onEgg }: { onEgg: () => void }) {
  const [nameHovered, setNameHovered] = useState(false)
  const [clickCount, setClickCount] = useState(0)
  const blobRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return

    let raf: number
    let tx = 50, ty = 50
    let cx = 50, cy = 50

    const onMove = (e: MouseEvent) => {
      const w = window.innerWidth, h = window.innerHeight
      tx = (e.clientX / w) * 100
      ty = (e.clientY / h) * 100
    }

    const loop = () => {
      cx += (tx - cx) * 0.03
      cy += (ty - cy) * 0.03
      if (blobRef.current) {
        blobRef.current.style.background = `radial-gradient(ellipse at ${cx}% ${cy}%, #fff7d6 0%, #f8f3e7 35%, #f5f9ff 70%)`
      }
      raf = requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(loop)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  const handleNameClick = () => {
    const next = clickCount + 1
    setClickCount(next)
    if (next >= 5) {
      onEgg()
      setClickCount(0)
    }
  }

  const remaining = 5 - clickCount
  const heroLinks = socialLinks.filter(l => profile.heroSocialLabels.includes(l.label))

  return (
    <section id="hero" className="relative flex flex-col items-center justify-center min-h-screen text-center px-6" style={{ overflow: 'hidden' }}>
      <div
        ref={blobRef}
        className="absolute inset-0 transition-none"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, #fff7d6 0%, #f8f3e7 35%, #f5f9ff 70%)' }}
      />

      <div className="absolute animate-float" style={{ top: '15%', left: '10%', width: 120, height: 120, borderRadius: '60% 40% 70% 30% / 50% 60% 40% 50%', background: 'rgba(200,230,255,0.5)', animationDelay: '0s' }} />
      <div className="absolute animate-float" style={{ top: '60%', right: '8%', width: 80, height: 80, borderRadius: '40% 60% 30% 70% / 60% 40% 70% 30%', background: 'rgba(214,208,255,0.5)', animationDelay: '1.5s' }} />
      <div className="absolute animate-drift" style={{ bottom: '20%', left: '15%', width: 60, height: 60, borderRadius: '50%', background: 'rgba(198,240,228,0.5)', animationDelay: '0.7s' }} />
      <div className="absolute animate-drift" style={{ top: '25%', right: '20%', width: 40, height: 40, borderRadius: '50%', background: 'rgba(255,214,232,0.5)', animationDelay: '2s' }} />

      <div
        className="absolute inset-0"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(142,170,255,0.3) 1px, transparent 1px)', backgroundSize: '28px 28px' }}
      />

      <div className="relative z-10 max-w-3xl">
        <div className="font-mono-custom text-lg sm:text-xl font-semibold mb-6" style={{ color: '#4862ae', letterSpacing: '0.15em' }}>
          <span className="terminal-line">{profile.heroGreeting}</span>
        </div>

        <h1 className="font-display font-black leading-none mb-4" style={{ fontSize: 'clamp(2.75rem, 8vw, 7rem)', color: '#1a2340' }}>
          I'm{' '}
          <span
            className="relative inline-block cursor-pointer select-none"
            style={{
              color: nameHovered ? '#4862ae' : '#1a2340',
              transition: 'color 0.2s',
              textDecoration: nameHovered ? 'underline wavy #c8e6ff' : 'none',
            }}
            onMouseEnter={() => setNameHovered(true)}
            onMouseLeave={() => setNameHovered(false)}
            onClick={handleNameClick}
            title={clickCount > 0 ? profile.nameClickHintPlural(remaining) : 'Try clicking!'}
          >
            {profile.name}
          </span>.
        </h1>

        <p className="font-body text-lg md:text-xl leading-relaxed mb-8 mx-auto max-w-xl" style={{ color: '#4862ae' }}>
          {profile.description}
        </p>

        <div className="flex gap-4 justify-center flex-wrap mb-8">
          <a
            href="#projects"
            className="group relative px-8 py-3 rounded-full font-body font-semibold overflow-hidden transition-all duration-300"
            style={{ background: '#1a2340' }}
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'linear-gradient(135deg, #8eaaff, #d6d0ff)' }} />
            <span className="relative z-10 transition-colors duration-300" style={{ color: '#f5f9ff' }}>
              <span className="group-hover:hidden">{profile.primaryCtaLabel}</span>
              <span className="hidden group-hover:inline" style={{ color: '#1a2340' }}>{profile.primaryCtaLabel}</span>
            </span>
          </a>
          <a
            href="#contact"
            className="group relative px-8 py-3 rounded-full font-body font-semibold overflow-hidden transition-all duration-300 border-2"
            style={{ borderColor: '#1a2340' }}
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'linear-gradient(135deg, #8eaaff, #d6d0ff)' }} />
            <span className="relative z-10" style={{ color: '#1a2340' }}>
              {profile.secondaryCtaLabel}
            </span>
          </a>
        </div>
        {/* GitHub / LinkedIn icon buttons */}
        <div className="flex gap-3 justify-center">
          {heroLinks.map(link => {
            const Icon = ICONS[link.label]
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="p-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: 'rgba(255,255,255,0.7)', color: '#1a2340', border: '1px solid rgba(142,170,255,0.3)' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#4862ae'; e.currentTarget.style.color = '#f5f9ff' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.7)'; e.currentTarget.style.color = '#1a2340' }}
              >
                {Icon && <Icon size={20} />}
              </a>
            )
          })}
        </div>

        <p className="mt-6 font-mono-custom text-xs" style={{ color: '#b0bcdc' }}>
          {clickCount > 0 ? `(${profile.nameClickHintPlural(remaining)})` : profile.nameClickIdleHint}
        </p>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <span className="font-mono-custom text-xs" style={{ color: '#4862ae' }}>scroll</span>
        <div className="w-px h-10 overflow-hidden" style={{ background: 'rgba(142,170,255,0.2)' }}>
          <div className="w-full h-1/2" style={{ background: '#4862ae', animation: 'float 1.5s ease-in-out infinite' }} />
        </div>
      </div>
    </section>
  )
}