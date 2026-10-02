import { BookOpen } from 'lucide-react'
import { courses, courseworkSection } from '../config/content'

const NOTE_BG = '#fdfdfb'
const TITLE_COLORS = ['#4862ae', '#2f4a8f', '#6b7fd7', '#1a2340']
const NOTE_ROTATIONS = [-3, 2.5, -2, 3, -2.5]

export function Coursework() {
  const groups: { name: string; items: typeof courses }[] = []
  for (const course of courses) {
    let g = groups.find(g => g.name === course.group)
    if (!g) {
      g = { name: course.group, items: [] }
      groups.push(g)
    }
    g.items.push(course)
  }

  return (
    <div className="rounded-3xl p-6 h-full" style={{ background: '#fafafa', border: '1px solid rgba(0,0,0,0.06)' }}>
      <div className="flex items-center gap-3 mb-6">
        <BookOpen size={20} style={{ color: '#4862ae' }} />
        <h3 className="font-display font-bold text-xl" style={{ color: '#1a2340' }}>
          {courseworkSection.title}
        </h3>
      </div>

      <div className="flex flex-wrap gap-5 justify-center">
        {groups.map((group, i) => {
          const titleColor = TITLE_COLORS[i % TITLE_COLORS.length]
          const rotation = NOTE_ROTATIONS[i % NOTE_ROTATIONS.length]
          return (
            <div
              key={group.name}
              className="sticky-note w-44 p-4 pt-5"
              style={{ background: NOTE_BG, ['--tilt' as string]: `${rotation}deg` }}
            >
              <div className="sticky-note-tape" />
              <p className="font-display font-bold text-sm mb-2.5" style={{ color: titleColor }}>
                {group.name}
              </p>
              <ul className="space-y-1.5">
                {group.items.map(course => (
                  <li key={course.code} className="font-body text-xs leading-snug" style={{ color: '#5a6a8a' }}>
                    <span className="font-mono-custom font-bold" style={{ color: '#1a2340' }}>{course.code}</span>
                    {' — '}{course.title}
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </div>
  )
}