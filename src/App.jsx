import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import StarsCanvas from "./Components/Stars";
import TechStacks from "./Components/TechStacks";

function App() {
  return (
    <div className="relative z-10 min-h-screen bg-[#030014]">
      {/* Moving StarsCanvas below Navbar for better layering */}
      <Navbar />
      <Hero />
      <TechStacks />
      <Projects />
      <StarsCanvas />
    </div>
  );
}

export default App;
