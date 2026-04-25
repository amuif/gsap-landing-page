import Hero from "./components/hero";
import NavBar from "./components/nav-bar";
function App() {
  return (
    <div className="font-sans relative">
      <div className="absolute top-0 left-0 w-full z-50">
        <NavBar />
      </div>
      <Hero />
    </div>
  );
}

export default App;
