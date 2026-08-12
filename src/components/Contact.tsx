import { useState } from 'react'
import { MessageSquare, Send, ArrowRight } from 'lucide-react'
import { contact, socialLinks, sectionIcon } from '../config/content'
import { Reveal } from './Reveal'

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [focused, setFocused] = useState<string | null>(null)
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  const fieldStyle = (name: string) => ({
    width: '100%',
    padding: '12px 16px',
    borderRadius: 12,
    border: `1.5px solid ${focused === name ? '#8eaaff' : 'rgba(142,170,255,0.3)'}`,
    background: 'rgba(245,249,255,0.8)',
    color: '#1a2340',
    fontFamily: 'Outfit, sans-serif',
    fontSize: '0.95rem',
    outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    boxShadow: focused === name ? '0 0 0 3px rgba(142,170,255,0.15)' : 'none',
  })

  return (
    <section id="contact" className="py-24 sm:py-32 px-6" style={{ background: 'rgba(200,230,255,0.1)' }}>
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-xl" style={{ background: sectionIcon.bg, color: sectionIcon.color }}>
              <MessageSquare size={20} />
            </div>
            <h2 className="font-display font-bold" style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)', lineHeight: 1.1, color: '#1a2340' }}>
              {contact.heading}
            </h2>
          </div>
          <p className="font-mono-custom text-sm mb-4" style={{ color: '#4862ae' }}>{contact.subtitle}</p>
          <p className="font-body mb-16 max-w-md" style={{ color: '#5a6a8a' }}>{contact.blurb}</p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12">
          <Reveal>
          <div>
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center gap-4 rounded-2xl p-8" style={{ background: 'rgba(198,240,228,0.3)', border: '1px solid rgba(142,170,255,0.2)' }}>
                <div className="text-6xl">🎉</div>
                <h3 className="font-display font-bold text-2xl" style={{ color: '#1a2340' }}>{contact.successTitle}</h3>
                <p className="font-body" style={{ color: '#5a6a8a' }}>{contact.successBlurb}</p>
                <button
                  onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }) }}
                  className="font-mono-custom text-sm px-4 py-2 rounded-full transition-colors duration-200 hover:bg-[#c8e6ff]"
                  style={{ color: '#8eaaff', border: '1px solid #c8e6ff' }}
                >
                  {contact.successResetLabel}
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="flex flex-col gap-4">
                <input
                  name="name" value={form.name} onChange={handle} placeholder="Your name"
                  required style={fieldStyle('name')}
                  onFocus={() => setFocused('name')} onBlur={() => setFocused(null)}
                />
                <input
                  name="email" value={form.email} onChange={handle} placeholder="your@email.com"
                  type="email" required style={fieldStyle('email')}
                  onFocus={() => setFocused('email')} onBlur={() => setFocused(null)}
                />
                <textarea
                  name="message" value={form.message} onChange={handle}
                  placeholder="What's on your mind?" required rows={5}
                  style={{ ...fieldStyle('message'), resize: 'none' }}
                  onFocus={() => setFocused('message')} onBlur={() => setFocused(null)}
                />
                <button
                  type="submit"
                  className="w-full py-3 rounded-full font-body font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
                  style={{ background: '#1a2340', color: '#f5f9ff', boxShadow: '0 8px 24px rgba(26,35,64,0.35)' }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 12px 36px rgba(26,35,64,0.5), 0 0 24px rgba(142,170,255,0.4)' }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 8px 24px rgba(26,35,64,0.35)' }}
                >
                  <Send size={16} />
                  {contact.submitLabel}
                </button>
              </form>
            )}
          </div>
          </Reveal>

          <Reveal delay={0.1}>
          <div className="flex flex-col gap-4">
            {socialLinks.map(l => (
              <a
                key={l.label}
                href={l.href}
                className="flex items-center gap-4 p-4 rounded-2xl group transition-all duration-200 hover:-translate-y-1"
                style={{
                  background: l.color + '30',
                  border: '1px solid ' + l.color,
                  textDecoration: 'none',
                  boxShadow: hoveredLink === l.label ? `0 10px 32px ${l.color}` : 'none',
                }}
                onMouseEnter={() => setHoveredLink(l.label)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <span className="text-2xl w-10 text-center">{l.icon}</span>
                <div className="flex flex-col">
                  <span className="font-body font-semibold group-hover:text-[#1a2340] transition-colors" style={{ color: '#1a2340' }}>{l.label}</span>
                  {l.handle && (
                    <span className="font-mono-custom text-xs" style={{ color: '#5a6a8a' }}>{l.handle}</span>
                  )}
                </div>
                <ArrowRight
                  size={22}
                  strokeWidth={2}
                  className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: '#8eaaff' }}
                />
              </a>
            ))}
          </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}