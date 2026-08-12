import { BookOpen } from 'lucide-react'
import { courses, courseworkSection } from '../config/content'

const NOTE_COLORS = ['#fff3c4', '#ffd6e8', '#c8e6ff', '#c6f0e4', '#d6d0ff']
const NOTE_ROTATIONS = [-3, 2.5, -2, 3, -2.5]

export function Coursework() {
  // group courses by label
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
    <div className="rounded-3xl p-6" style={{ background: 'rgba(200,230,255,0.12)', border: '1.5px solid rgba(142,170,255,0.15)' }}>
      <div className="flex items-center gap-3 mb-6">
        <BookOpen size={20} style={{ color: '#8eaaff' }} />
        <h3 className="font-display font-bold text-xl" style={{ color: '#1a2340' }}>
          {courseworkSection.title}
        </h3>
      </div>

      <div className="flex flex-wrap gap-6 justify-center">
        {groups.map((group, i) => {
          const color = NOTE_COLORS[i % NOTE_COLORS.length]
          const rotation = NOTE_ROTATIONS[i % NOTE_ROTATIONS.length]
          return (
            <div
              key={group.name}
              className="sticky-note w-44 p-4 pt-5"
              style={{ background: color, ['--tilt' as string]: `${rotation}deg` }}
            >
              <div className="sticky-note-tape" />
              <p className="font-display font-bold text-sm mb-2.5" style={{ color: '#1a2340' }}>
                {group.name}
              </p>
              <ul className="space-y-1.5">
                {group.items.map(course => (
                  <li key={course.code} className="font-body text-xs leading-snug" style={{ color: '#3a4a6a' }}>
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