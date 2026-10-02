import MechanismBackground from './components/MechanismBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Timeline from './components/Timeline'
import ProblemStatements from './components/ProblemStatements'
import Register from './components/Register'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen w-full">
      <MechanismBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Timeline />
        <ProblemStatements />
        <Register />
        <Footer />
      </div>
    </div>
  )
}
