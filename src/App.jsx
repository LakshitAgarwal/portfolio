import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import StarsCanvas from "./Components/Stars";
import TechStacks from "./Components/TechStacks";
import About from "./Components/About";

function App() {
  return (
    <div className="relative z-10 min-h-screen bg-[#030014]">
      <Navbar />
      <Hero />
      <TechStacks />
      <Projects />
      <About />
      <StarsCanvas />
    </div>
  );
}

export default App;
