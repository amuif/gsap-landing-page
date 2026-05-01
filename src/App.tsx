import AboutUs from "./components/about-us";
import Hero from "./components/hero";
import Margquee from "./components/marquee";
import NavBar from "./components/nav-bar";
import OurServices from "./components/our-services";
import Pricing from "./components/pricing";
import Testimony from "./components/testimony";
import WhyUs from "./components/why-us";
function App() {
  return (
    <div className="font-sans relative w-full flex flex-col items-center justify-center bg-white">
      <div className="absolute top-4  w-full md:max-w-3xl z-50 ">
        <NavBar />
      </div>
      <div className="w-full relative flex flex-col  items-center justify-center">
        <Hero />
        <div className="w-full border-y border-dashed border-gray-300">
          <Margquee />
        </div>
        <OurServices />
        <hr className="border-dashed border-gray-300 h-1 w-full" />
        <AboutUs />
        <hr className="border-dashed border-gray-300 h-1 w-full" />
        <Pricing />
        <hr className="border-dashed border-gray-300 h-1 w-full" />
        <Testimony />
        <hr className="border-dashed border-gray-300 h-1 w-full" />
        <WhyUs />
      </div>
    </div>
  );
}

export default App;
