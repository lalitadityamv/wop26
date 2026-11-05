import MechanismBackground from './components/MechanismBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Timeline from './components/Timeline'
import ProblemStatements from './components/ProblemStatements'

import Footer from './components/Footer'
import RegistrationClosedPopup from './components/RegistrationClosedPopup'
import RegistrationClosed from './components/closed'



export default function App() {
  return (
    <div className="min-h-screen w-full">
      <MechanismBackground />
      <div className="relative z-10">
        <RegistrationClosedPopup />
        <Navbar />
        <Hero />
        <About />
        <Timeline />
        <ProblemStatements />
        <RegistrationClosed />
        <Footer />
      </div>
    </div>
  )
}
