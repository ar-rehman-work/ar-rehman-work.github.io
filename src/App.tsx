import Navbar from './components/Navbar/Navbar'
import ScrollProgress from './components/ScrollProgress/ScrollProgress'
import Hero from './sections/Hero'
import About from './sections/About'
import Work from './sections/Work/Work'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'
import Footer from './components/Footer/Footer'

import { useReveal } from './hooks/useReveal'

function App() {
  useReveal()

  return (
    <>
      <Navbar />
      <ScrollProgress />
      <Hero />
      <About />
      <Work />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App