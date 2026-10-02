import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import { contact, socialLinks, profile } from '../config/content'
import { Reveal } from './Reveal'
import { InteractiveStars } from './InteractiveStars'

const ICONS: Record<string, React.ComponentType<{ size?: number; color?: string }>> = {
  GitHub: GithubIcon,
  LinkedIn: LinkedinIcon,
  Email: Mail,
}

export function Contact() {
  return (
    <section id="contact" className="py-28 relative overflow-hidden" style={{ backgroundColor: '#f7f8fa' }}>
      <div
        className="absolute pointer-events-none"
        style={{ right: '-8%', top: '5%', width: 420, height: 420, borderRadius: '50%', background: `radial-gradient(circle, ${profile.accent}14 0%, transparent 70%)`, filter: 'blur(30px)' }}
      />
      <div
        className="absolute pointer-events-none"
        style={{ left: '3%', bottom: '5%', width: 280, height: 280, borderRadius: '50%', background: `radial-gradient(circle, ${profile.accent}0d 0%, transparent 70%)`, filter: 'blur(20px)' }}
      />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        <Reveal>
          <span className="font-mono-custom text-xs tracking-widest uppercase block mb-4" style={{ color: profile.accent }}>{contact.eyebrow} — Contact</span>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div>
              <h2 className="mb-5 leading-tight" style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(2.25rem,5vw,3.75rem)', fontWeight: 600, color: '#0a0a0a' }}>
                {contact.heading}
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-6 max-w-sm">{contact.blurb}</p>

               <InteractiveStars color={profile.accent} height={300} />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-col gap-3">
              {socialLinks.map(l => {
                const Icon = ICONS[l.label]
                return (
                  <a
                    key={l.label}
                    href={l.href}
                    target={l.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 px-6 py-4 rounded-2xl transition-all duration-200"
                    style={{ background: 'rgba(72,98,174,0.03)', border: '1px solid rgba(72,98,174,0.16)' }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = profile.accent
                      e.currentTarget.style.background = 'rgba(72,98,174,0.07)'
                      e.currentTarget.style.transform = 'translateX(4px)'
                      e.currentTarget.style.boxShadow = `0 8px 24px ${profile.accent}25`
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'rgba(72,98,174,0.16)'
                      e.currentTarget.style.background = 'rgba(72,98,174,0.03)'
                      e.currentTarget.style.transform = 'translateX(0)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  >
                    <span className="flex items-center justify-center w-11 h-11 rounded-xl flex-shrink-0" style={{ backgroundColor: `${profile.accent}14`, color: profile.accent }}>
                      {Icon && <Icon size={20} />}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-gray-800">{l.label}</p>
                      {l.handle && <p className="text-xs text-gray-400 mt-0.5 font-mono-custom">{l.handle}</p>}
                    </div>
                  </a>
                )
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}