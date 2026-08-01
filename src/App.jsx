import About from "./pages/About"
import Home from "./pages/Home"
import ParticleBackground from "./components/ParticleBackground"
import Experience from "./pages/Experience"

const App = () => {
  return (
    <div className="">
            <ParticleBackground />

      <Home/>
      <About />
      <Experience />
    </div>
  )
}

export default App
