import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import StarsCanvas from "./Components/Stars";
import About from "./Components/About";
import ContactForm from "./Components/ContactForm";
import TechStacks from "./Components/TechStacks";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div className="relative z-10 min-h-screen bg-[#030014]">
        <Navbar />
        <section id="hero">
          <Hero />
        </section>
        <section id="skills">
          <TechStacks />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="contact">
          <ContactForm />
        </section>
        <StarsCanvas />
      </div>
    </HashRouter>
  );
}

export default App;
