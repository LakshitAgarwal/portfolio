import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import StarsCanvas from "./Components/Stars";

function App() {
  return (
    <div className="relative z-10 min-h-screen bg-[#030014]">
      {/* Moving StarsCanvas below Navbar for better layering */}
      <Navbar />
      <Hero />
      <StarsCanvas />
    </div>
  );
}

export default App;
