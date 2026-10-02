import { footer } from '../config/content'

export function Footer() {
  return (
    <footer className="py-6 text-center" style={{ borderTop: '1px solid rgba(0,0,0,0.06)', backgroundColor: '#fafaf9' }}>
      <p className="font-display italic text-sm mb-2" style={{ color: '#4862ae' }}>{footer.thanksMessage}</p>
      <p className="font-mono-custom text-xs text-gray-400">{footer.text(new Date().getFullYear())}</p>
    </footer>
  )
}