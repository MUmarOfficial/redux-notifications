import './App.css'
import { SparkleParticles } from './components/lightswind/sparkle-particles'
import Navbar from './components/features/Navbar'
import Notifications from './components/features/Notifications'

function App() {
  return (
    <div className="relative bg-gray-900 rounded-lg overflow-hidden h-screen">
      <SparkleParticles className="absolute inset-0 z-0" particleColor='#ffffff' enableHoverGrab={true} enableParallax={true} enableCollisions={true} />
      <div className="relative z-10 ">
        <header className='relative'>
          <Navbar />
        </header>
        <main>
          <Notifications />
        </main>
      </div>
    </div>
  );
}

export default App
