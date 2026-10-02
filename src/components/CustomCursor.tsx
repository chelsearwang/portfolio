import { useEffect, useRef } from 'react'

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const ringPos = useRef({ x: -100, y: -100 })
  const mousePos = useRef({ x: -100, y: -100 })
  const rafRef = useRef<number>(0)

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return

    const onMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + 'px'
        dotRef.current.style.top = e.clientY + 'px'
      }
    }
    document.addEventListener('mousemove', onMove)

    const animate = () => {
      const lerp = (a: number, b: number, t: number) => a + (b - a) * t
      ringPos.current.x = lerp(ringPos.current.x, mousePos.current.x, 0.14)
      ringPos.current.y = lerp(ringPos.current.y, mousePos.current.y, 0.14)
      if (ringRef.current) {
        ringRef.current.style.left = ringPos.current.x + 'px'
        ringRef.current.style.top = ringPos.current.y + 'px'
      }
      rafRef.current = requestAnimationFrame(animate)
    }
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  if (!window.matchMedia('(pointer: fine)').matches) return null

  return (
    <>
      <div ref={dotRef} className="cursor-dot" style={{ left: -100, top: -100 }} />
      <div ref={ringRef} className="cursor-ring" style={{ left: -100, top: -100 }} />
    </>
  )
}