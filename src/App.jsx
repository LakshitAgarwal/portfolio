import Navbar from "./Components/Navbar";
import StarsCanvas from "./Components/Stars";

function App() {
  return (
    <>
      <div className="relative z-10 bg-[#030014]">
        <StarsCanvas />
      </div>
      <Navbar />
    </>
  );
}

export default App;
