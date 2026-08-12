import { useCallback, useState } from 'react'
import { CustomCursor } from './components/CustomCursor'
import { ConfettiBurst } from './components/Confetti'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Experience } from './components/Experience'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Terminal } from './components/Terminal'
import { useKonamiCode } from './hooks/useKonamiCode'
import { useConfettiBurst } from './hooks/useConfettiBurst'

export default function App() {
  const [konamiActive, setKonamiActive] = useState(false)
  const [showTerminal, setShowTerminal] = useState(false)
  const { pieces, spawn } = useConfettiBurst()

  const triggerEgg = useCallback(() => {
    spawn()
    setShowTerminal(true)
  }, [spawn])

  const triggerKonami = useCallback(() => {
    setKonamiActive(true)
    spawn()
    setShowTerminal(true)
    setTimeout(() => setKonamiActive(false), 5000)
  }, [spawn])

  useKonamiCode(triggerKonami)

  return (
    <>
      <CustomCursor />
      <ConfettiBurst pieces={pieces} />
      {showTerminal && <Terminal onClose={() => setShowTerminal(false)} />}

      <Nav konamiActive={konamiActive} />
      <Hero onEgg={triggerEgg} />
      <Marquee />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  )
}