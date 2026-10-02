import { ChevronLeft, ChevronRight } from 'lucide-react'
import { carouselImages } from '../config/content'

export function PhotoCarousel({
  activeIndex,
  onChange,
}: {
  activeIndex: number
  onChange: (i: number) => void
}) {
  const image = carouselImages[activeIndex]
  const prev = () => onChange((activeIndex - 1 + carouselImages.length) % carouselImages.length)
  const next = () => onChange((activeIndex + 1) % carouselImages.length)

  return (
    <div className="w-full">
      <div
        className="relative w-full rounded-3xl overflow-hidden"
        style={{ height: 320, background: '#f0f1f4', border: '1px solid rgba(0,0,0,0.06)' }}
      >
        <img
          key={image.src}
          src={image.src}
          alt={image.alt}
          className="w-full h-full object-cover transition-opacity duration-300"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(to top, rgba(26,35,64,0.35) 0%, transparent 50%)' }}
        />
        {image.caption && (
          <span className="absolute bottom-4 left-4 font-mono-custom text-sm text-white/90">
            ↳ {image.caption}
          </span>
        )}

        <button
          onClick={prev}
          aria-label="Previous photo"
          className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full transition-all duration-200 hover:scale-110"
          style={{ background: 'rgba(255,255,255,0.85)', color: '#1a2340' }}
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={next}
          aria-label="Next photo"
          className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full transition-all duration-200 hover:scale-110"
          style={{ background: 'rgba(255,255,255,0.85)', color: '#1a2340' }}
        >
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="flex justify-center gap-2 mt-3">
        {carouselImages.map((img, i) => (
          <button
            key={img.keyword}
            onClick={() => onChange(i)}
            aria-label={`Show photo ${i + 1}`}
            className="rounded-full transition-all duration-200"
            style={{
              width: i === activeIndex ? 20 : 7,
              height: 7,
              background: i === activeIndex ? '#4862ae' : 'rgba(72,98,174,0.25)',
            }}
          />
        ))}
      </div>
    </div>
  )
}