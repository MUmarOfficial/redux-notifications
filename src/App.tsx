import './App.css'
import { SparkleParticles } from './components/lightswind/sparkle-particles'
// import { NavbarDark } from './components/NavbarDark'

function App() {
  return (
    <div className="relative bg-gray-900 rounded-lg overflow-hidden h-screen">
      <SparkleParticles className="absolute inset-0 z-0" particleColor='#ffffff' enableHoverGrab={true} enableParallax={true} enableCollisions={true} />
      <div className="relative z-10 flex flex-col items-center w-full">
        {/* <NavbarDark /> */}

      </div>
    </div>
  )
}

export default App
