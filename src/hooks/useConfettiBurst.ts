import { useCallback, useState } from 'react'
import type { ConfettiPieceData } from '../types'

const COLORS = ['#c8e6ff', '#d6d0ff', '#c6f0e4', '#ffd6e8', '#fff3c4', '#8eaaff']
const PIECE_COUNT = 60
const CLEAR_AFTER_MS = 4000

// returns [pieces, spawn]
export function useConfettiBurst() {
  const [pieces, setPieces] = useState<ConfettiPieceData[]>([])

  const spawn = useCallback(() => {
    const next: ConfettiPieceData[] = Array.from({ length: PIECE_COUNT }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 100,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      size: 8 + Math.random() * 10,
      delay: Math.random() * 0.8,
      duration: 2 + Math.random() * 1.5,
    }))
    setPieces(next)
    setTimeout(() => setPieces([]), CLEAR_AFTER_MS)
  }, [])

  return { pieces, spawn }
}