import { useEffect, useRef } from 'react'

interface Particle {
  homeX: number
  homeY: number
  x: number
  y: number
  vx: number
  vy: number
}

interface StarSpec {
  cx: number
  cy: number
  radius: number
  rotation: number
}

function starDotPositions(cx: number, cy: number, outerRadius: number, rotation: number, spacing: number) {
  const spikes = 5
  const innerRadius = outerRadius * 0.45
  const verts: { x: number; y: number }[] = []
  let rot = (Math.PI / 2) * 3 + rotation
  const angleStep = Math.PI / spikes

  for (let i = 0; i < spikes; i++) {
    verts.push({ x: cx + Math.cos(rot) * outerRadius, y: cy + Math.sin(rot) * outerRadius })
    rot += angleStep
    verts.push({ x: cx + Math.cos(rot) * innerRadius, y: cy + Math.sin(rot) * innerRadius })
    rot += angleStep
  }

  const points: { x: number; y: number }[] = []
  const seen = new Set<string>()
  const n = verts.length

  for (let i = 0; i < n; i++) {
    const v1 = verts[i]
    const v2 = verts[(i + 1) % n]
    const e1x = v1.x - cx, e1y = v1.y - cy
    const e2x = v2.x - cx, e2y = v2.y - cy
    const triSize = Math.max(Math.hypot(e1x, e1y), Math.hypot(e2x, e2y))
    const subdivisions = Math.max(2, Math.round(triSize / spacing))

    for (let a = 0; a <= subdivisions; a++) {
      for (let b = 0; b <= subdivisions - a; b++) {
        const u = a / subdivisions
        const v = b / subdivisions
        const x = cx + e1x * u + e2x * v
        const y = cy + e1y * u + e2y * v
        const key = `${Math.round(x * 4)},${Math.round(y * 4)}`
        if (!seen.has(key)) {
          seen.add(key)
          points.push({ x, y })
        }
      }
    }
  }

  return points
}

export function InteractiveStars({
  color,
  height = 220,
}: {
  color: string
  height?: number
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: -9999, y: -9999 })
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    if (!window.matchMedia('(pointer: fine)').matches) return

    const dpr = window.devicePixelRatio || 1
    const rect = canvas.parentElement!.getBoundingClientRect()
    const width = rect.width

    canvas.width = width * dpr
    canvas.height = height * dpr
    canvas.style.width = `${width}px`
    canvas.style.height = `${height}px`
    ctx.scale(dpr, dpr)

    const spacing = 8
    const stars: StarSpec[] = [
      { cx: width * 0.22, cy: height * 0.48, radius: Math.min(104, height * 0.38), rotation: -0.3 },
      { cx: width * 0.56, cy: height * 0.3, radius: Math.min(72, height * 0.26), rotation: 0.5 },
      { cx: width * 0.84, cy: height * 0.6, radius: Math.min(48, height * 0.17), rotation: -0.7 },
      { cx: width * 0.54, cy: height * 0.78, radius: Math.min(40, height * 0.14), rotation: 0.9 },
    ]

    const particles: Particle[] = []
    for (const s of stars) {
      for (const pt of starDotPositions(s.cx, s.cy, s.radius, s.rotation, spacing)) {
        particles.push({ homeX: pt.x, homeY: pt.y, x: pt.x, y: pt.y, vx: 0, vy: 0 })
      }
    }
    particlesRef.current = particles

    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect()
      mouseRef.current = { x: e.clientX - r.left, y: e.clientY - r.top }
    }
    const onLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 }
    }
    canvas.addEventListener('mousemove', onMove)
    canvas.addEventListener('mouseleave', onLeave)

    const REPEL_RADIUS = 27
    const REPEL_STRENGTH = 5
    const SPRING = 0.05
    const FRICTION = 0.85

    const animate = () => {
      ctx.clearRect(0, 0, width, height)
      ctx.fillStyle = color

      for (const p of particlesRef.current) {
        const dx = p.x - mouseRef.current.x
        const dy = p.y - mouseRef.current.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < REPEL_RADIUS) {
          const force = ((REPEL_RADIUS - dist) / REPEL_RADIUS) * REPEL_STRENGTH
          p.vx += (dx / (dist || 1)) * force
          p.vy += (dy / (dist || 1)) * force
        }

        p.vx += (p.homeX - p.x) * SPRING
        p.vy += (p.homeY - p.y) * SPRING
        p.vx *= FRICTION
        p.vy *= FRICTION
        p.x += p.vx
        p.y += p.vy

        ctx.beginPath()
        ctx.arc(p.x, p.y, 1.6, 0, Math.PI * 2)
        ctx.fill()
      }

      rafRef.current = requestAnimationFrame(animate)
    }
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      canvas.removeEventListener('mousemove', onMove)
      canvas.removeEventListener('mouseleave', onLeave)
      cancelAnimationFrame(rafRef.current)
    }
  }, [color, height])

  const isFine = typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches

  return (
    <div className="w-full flex justify-center">
      {isFine ? (
        <canvas ref={canvasRef} style={{ maxWidth: '100%' }} />
      ) : (
        <div className="flex gap-3 justify-center py-8">
          <span style={{ color, fontSize: 32 }}>★</span>
          <span style={{ color, fontSize: 20 }}>★</span>
          <span style={{ color, fontSize: 14 }}>★</span>
        </div>
      )}
    </div>
  )
}