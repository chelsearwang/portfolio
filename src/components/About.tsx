import { useState } from 'react'
import { about, aboutParagraphs, carouselImages, skills, courses, courseworkSection, profile } from '../config/content'
import { Reveal } from './Reveal'

function parseParagraph(text: string) {
  const parts: { text: string; keyword: string | null }[] = []
  const regex = /\{\{(\w+)\}\}/g
  let lastIndex = 0
  let match: RegExpExecArray | null
  while ((match = regex.exec(text))) {
    if (match.index > lastIndex) parts.push({ text: text.slice(lastIndex, match.index), keyword: null })
    parts.push({ text: match[1], keyword: match[1] })
    lastIndex = match.index + match[0].length
  }
  if (lastIndex < text.length) parts.push({ text: text.slice(lastIndex), keyword: null })
  return parts
}

export function About() {
  const [activeImage, setActiveImage] = useState(0)
  const [imageVisible, setImageVisible] = useState(true)

  const changeImage = (index: number) => {
    setImageVisible(false)
    setTimeout(() => {
      setActiveImage(index)
      setImageVisible(true)
    }, 160)
  }
  const goToKeyword = (keyword: string) => {
    const idx = carouselImages.findIndex(img => img.keyword === keyword)
    if (idx !== -1) changeImage(idx)
  }
  const img = carouselImages[activeImage]

  return (
    <section id="about" className="py-28 bg-white dot-grid-faint">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <Reveal>
          <div className="flex items-baseline gap-4 mb-16">
            <span className="font-mono-custom text-xs tracking-widest uppercase" style={{ color: profile.accent }}>{about.eyebrow}</span>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '2.75rem', fontWeight: 600 }}>{about.heading}</h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Left: bio + technologies */}
          <Reveal className="md:col-span-3">
            <div className="space-y-5 text-[1.0625rem] text-gray-600 leading-relaxed">
              {aboutParagraphs.map((paragraph, i) => (
                <p key={i}>
                  {parseParagraph(paragraph).map((part, j) =>
                    part.keyword ? (
                      <span
                        key={j}
                        className="glow-text font-medium underline decoration-dotted underline-offset-3 decoration-gray-300"
                        onMouseEnter={() => goToKeyword(part.keyword!)}
                        data-hover
                      >
                        {part.text}
                      </span>
                    ) : (
                      <span key={j}>{part.text}</span>
                    )
                  )}
                </p>
              ))}
            </div>

            <div className="mt-8">
              <p className="text-xs tracking-widest uppercase text-gray-400 mb-4 font-mono-custom">{about.techLabel}</p>
              <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                  <span
                    key={skill.name}
                    className="text-xs px-3 py-1.5 rounded-full text-gray-500 bg-gray-50 border border-gray-200 transition-all duration-200 font-mono-custom"
                    data-hover
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = profile.accent
                      e.currentTarget.style.color = profile.accent
                      e.currentTarget.style.backgroundColor = `${profile.accent}0d`
                      e.currentTarget.style.transform = 'scale(1.08)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = ''
                      e.currentTarget.style.color = ''
                      e.currentTarget.style.backgroundColor = ''
                      e.currentTarget.style.transform = 'scale(1)'
                    }}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Right: photo carousel + coursework note */}
          <Reveal className="md:col-span-2" delay={0.1}>
            <div className="flex flex-col gap-5">
              <div
                className="relative overflow-hidden rounded-xl"
                style={{
                  opacity: imageVisible ? 1 : 0,
                  transform: imageVisible ? 'scale(1)' : 'scale(0.97)',
                  transition: 'opacity 0.25s ease, transform 0.25s ease',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.09)',
                }}
              >
                <img src={img.src} alt={img.alt} className="w-full h-auto block rounded-xl" />
                <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.22) 0%, transparent 55%)' }} />
                {img.caption && (
                  <span className="absolute bottom-3 left-3 text-xs text-white/80 tracking-wider font-mono-custom">↳ {img.caption}</span>
                )}
              </div>

              {/* Relevant coursework — a single pinned note listing everything */}

              <div
                className="pinned-note p-5"
                data-hover
                style={{ background: '#d9e4ef', transform: 'rotate(-1deg)', ['--r' as string]: '-1deg' }}
              >
                <p className="text-xs tracking-widest uppercase text-gray-500 mb-3 font-mono-custom">{courseworkSection.eyebrow}</p>
                <ul className="space-y-1.5">
                  {courses.map(c => (
                    <li key={c.code} className="text-xs text-gray-600 leading-snug font-mono-custom">
                      <span className="font-semibold text-gray-800">{c.code}</span>
                      {' — '}{c.title}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}