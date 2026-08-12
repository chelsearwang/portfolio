import { useState } from 'react'
import { footer } from '../config/content'

export function Footer() {
  const [hint, setHint] = useState(false)
  return (
    <footer className="py-8 px-6 text-center border-t" style={{ borderColor: 'rgba(142,170,255,0.2)' }}>
      <p className="font-mono-custom text-sm mb-2" style={{ color: '#4862ae' }}>
        Thanks for stopping by!
      </p>
      <p className="font-mono-custom text-xs mb-2" style={{ color: '#4862ae' }}>
        {footer.text(new Date().getFullYear())}
      </p>
      <p
        className="font-mono-custom text-xs cursor-pointer transition-colors duration-200 hover:text-[#8eaaff]"
        style={{ color: '#d0d8f0' }}
        onClick={() => setHint(h => !h)}
      >
        {hint ? footer.konamiHintExpanded : footer.konamiHintCollapsed}
      </p>
    </footer>
  )
}