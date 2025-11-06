import './App.css'
import AnimatedWave from './components/lightswind/animated-wave'
import SparkleNavbar from './components/lightswind/sparkle-navbar'

function App() {
  return (
    <div className="relative bg-gray-900 rounded-lg overflow-hidden h-screen">
      <AnimatedWave className="absolute inset-0 z-0"/>
      <div className="relative z-10 flex flex-col items-center w-full">
        <SparkleNavbar items={["Redux Notifications" , "Bel"]} />

      </div>
    </div>
  )
}

export default App
