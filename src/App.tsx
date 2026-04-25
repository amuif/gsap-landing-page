import Hero from "./components/hero";
import Margquee from "./components/marquee";
import NavBar from "./components/nav-bar";
import OurServices from "./components/our-services";
function App() {
  return (
    <div className="font-sans relative w-full flex flex-col items-center justify-center bg-white">
      <div className="absolute top-4  max-w-7xl z-50 ">
        <NavBar />
      </div>
      <div className="w-full relative flex flex-col  items-center justify-center">
          <Hero />
        <div className="w-full border-y border-dashed border-gray-300">
          <Margquee />
        </div>
        <OurServices/>
      </div>
    </div>
  );
}

export default App;
