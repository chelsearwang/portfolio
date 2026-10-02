import { BookOpen } from 'lucide-react'
import { courses, courseworkSection } from '../config/content'

export function Coursework() {
  return (
    <div className="rounded-3xl p-6 h-full" style={{ background: '#fafafa', border: '1px solid rgba(0,0,0,0.06)' }}>
      <div className="flex items-center gap-3 mb-6">
        <BookOpen size={20} style={{ color: '#4862ae' }} />
        <h3 className="font-display font-bold text-xl" style={{ color: '#1a2340' }}>
          {courseworkSection.eyebrow}
        </h3>
      </div>

      <div className="flex justify-center">
        <div
          className="sticky-note w-64 p-5 pt-6"
          style={{ background: '#fdfdfb', ['--tilt' as string]: '-1.5deg' }}
        >
          <div className="sticky-note-tape" />
          <ul className="space-y-2">
            {courses.map(course => (
              <li key={course.code} className="font-body text-xs leading-snug" style={{ color: '#5a6a8a' }}>
                <span className="font-mono-custom font-bold" style={{ color: '#4862ae' }}>{course.code}</span>
                {' — '}{course.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}