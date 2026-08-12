import { useEffect, useState } from 'react'
import { profile, terminalLines } from '../config/content'

export function Terminal({ onClose }: { onClose: () => void }) {
  const [shown, setShown] = useState(0)

  useEffect(() => {
    if (shown < terminalLines.length) {
      const t = setTimeout(() => setShown(s => s + 1), 400)
      return () => clearTimeout(t)
    }
  }, [shown])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6" style={{ background: 'rgba(26,35,64,0.85)', backdropFilter: 'blur(8px)' }}>
      <div className="w-full max-w-lg rounded-2xl overflow-hidden" style={{ background: '#0d1117', boxShadow: '0 32px 80px rgba(0,0,0,0.5)' }}>
        <div className="flex items-center gap-2 px-4 py-3" style={{ background: '#161b22', borderBottom: '1px solid #30363d' }}>
          <button onClick={onClose} className="w-3 h-3 rounded-full transition-opacity hover:opacity-80" style={{ background: '#ff5f57' }} aria-label="Close terminal" />
          <div className="w-3 h-3 rounded-full" style={{ background: '#febc2e' }} />
          <div className="w-3 h-3 rounded-full" style={{ background: '#28c840' }} />
          <span className="ml-4 font-mono-custom text-xs" style={{ color: '#484f58' }}>{profile.terminalUser}@portfolio ~ %</span>
        </div>
        <div className="p-6 min-h-64 font-mono-custom text-sm leading-loose" style={{ color: '#c9d1d9' }}>
          {terminalLines.slice(0, shown).map((l, i) => (
            <p key={i} style={{ color: l.startsWith('>') ? '#8eaaff' : '#c9d1d9' }}>{l}</p>
          ))}
          {shown < terminalLines.length && <p className="terminal-line" style={{ color: '#8eaaff' }}>{'>'} </p>}
          {shown >= terminalLines.length && (
            <button
              onClick={onClose}
              className="mt-4 px-4 py-2 rounded-lg text-xs transition-colors hover:bg-[#8eaaff] hover:text-[#0d1117]"
              style={{ border: '1px solid #8eaaff', color: '#8eaaff' }}
            >
              close terminal
            </button>
          )}
        </div>
      </div>
    </div>
  )
}