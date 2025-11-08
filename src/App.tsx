import './App.css'
import { SparkleParticles } from './components/lightswind/sparkle-particles'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="relative bg-gray-900 rounded-lg overflow-hidden h-screen">
      <SparkleParticles className="absolute inset-0 z-0" particleColor='#ffffff' enableHoverGrab={true} enableParallax={true} enableCollisions={true} />
      <div className="relative z-10 flex flex-col items-center w-full">
        <header>
          <Navbar />
        </header>
      </div>
    </div>
  )
}

export default App
