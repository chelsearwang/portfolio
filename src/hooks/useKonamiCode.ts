import { useEffect, useRef } from 'react'

const KONAMI = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
  'b', 'a',
]

// call onActivate() when the user types the Konami code on their keyboard 
export function useKonamiCode(onActivate: () => void) {
  const buffer = useRef<string[]>([])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      buffer.current.push(e.key)
      if (buffer.current.length > KONAMI.length) {
        buffer.current.shift()
      }
      if (JSON.stringify(buffer.current) === JSON.stringify(KONAMI)) {
        onActivate()
        buffer.current = []
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onActivate])
}