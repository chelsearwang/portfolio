import { marqueeItems } from '../config/content'

export function Marquee() {
  const items = [...marqueeItems, ...marqueeItems]
  return (
    <div className="overflow-hidden py-4 border-y" style={{ borderColor: 'rgba(142,170,255,0.25)', background: 'rgba(200,230,255,0.15)' }}>
      <div className="flex gap-8 animate-marquee whitespace-nowrap w-max">
        {items.map((item, i) => (
          <span key={i} className="font-mono-custom text-sm flex items-center gap-3" style={{ color: '#4862ae' }}>
            <span style={{ color: '#8eaaff' }}>◆</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}