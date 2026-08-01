import About from "./pages/About";
import Home from "./pages/Home";
import ParticleBackground from "./components/ParticleBackground";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Teacher from "./pages/Teacher";

const App = () => {
  return (
    <div className="bg-primary">
      <ParticleBackground />

      <Home />
      <About />
      <Teacher />
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
