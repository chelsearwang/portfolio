import type { ConfettiPieceData } from '../types'

function ConfettiPiece({ piece }: { piece: ConfettiPieceData }) {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: `${piece.x}%`,
        width: piece.size,
        height: piece.size * 0.6,
        background: piece.color,
        borderRadius: 2,
        zIndex: 9998,
        animation: `confetti-fall ${piece.duration}s ease-in ${piece.delay}s forwards`,
        pointerEvents: 'none',
      }}
    />
  )
}

export function ConfettiBurst({ pieces }: { pieces: ConfettiPieceData[] }) {
  return (
    <>
      {pieces.map(p => <ConfettiPiece key={p.id} piece={p} />)}
    </>
  )
}