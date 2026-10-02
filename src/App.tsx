import { useCallback, useState } from 'react'
import { CustomCursor } from './components/CustomCursor'
import { ConfettiBurst } from './components/Confetti'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Experience } from './components/Experience'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Terminal } from './components/Terminal'
import { useConfettiBurst } from './hooks/useConfettiBurst'

export default function App() {
  const [showTerminal, setShowTerminal] = useState(false)
  const { pieces, spawn } = useConfettiBurst()

  const triggerEgg = useCallback(() => {
    spawn()
    setShowTerminal(true)
  }, [spawn])

  return (
    <div className="min-h-screen">
      <CustomCursor />
      <ConfettiBurst pieces={pieces} />
      {showTerminal && <Terminal onClose={() => setShowTerminal(false)} />}

      <Nav />
      <Hero onEgg={triggerEgg} />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  )
}