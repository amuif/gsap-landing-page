import {
  lazy,
  Suspense,
  useEffect,
  useState,
  useRef,
  type ReactNode,
} from "react";
import Hero from "./components/hero";
import Margquee from "./components/marquee";
import NavBar from "./components/nav-bar";

const OurServices = lazy(() => import("./components/our-services"));
const AboutUs = lazy(() => import("./components/about-us"));
const Pricing = lazy(() => import("./components/pricing"));
const Testimony = lazy(() => import("./components/testimony"));
const WhyUs = lazy(() => import("./components/why-us"));
const FAQ = lazy(() => import("./components/FAQ"));
const ContactUs = lazy(() => import("./components/contact-us"));
const Footer = lazy(() => import("./components/footer"));

function DeferredSection({
  children,
  minHeight = "200px",
}: {
  children: ReactNode;
  minHeight?: string;
}) {
  const [shouldRender, setShouldRender] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      setShouldRender(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { rootMargin: "100px 0px" },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full flex flex-col items-center">
      {shouldRender ? (
        children
      ) : (
        <div style={{ minHeight }} className="w-full" />
      )}
    </div>
  );
}

function App() {
  return (
    <div className="font-sans relative w-full flex flex-col items-center justify-center bg-white">
      <NavBar />
      <main className="w-full flex flex-col items-center justify-center">
        <Hero />
        <DeferredSection minHeight="80px">
          <div className="w-full border-y border-dashed border-gray-300">
            <Margquee />
          </div>
        </DeferredSection>
        <Suspense fallback={null}>
          <DeferredSection minHeight="500px">
            <OurServices />
          </DeferredSection>
          <hr className="border-dashed border-gray-300 h-1 w-full" />
          <DeferredSection minHeight="400px">
            <AboutUs />
          </DeferredSection>
          <hr className="border-dashed border-gray-300 h-1 w-full" />
          <DeferredSection minHeight="400px">
            <Pricing />
          </DeferredSection>
          <hr className="border-dashed border-gray-300 h-1 w-full" />
          <DeferredSection minHeight="400px">
            <Testimony />
          </DeferredSection>
          <hr className="border-dashed border-gray-300 h-1 w-full" />
          <DeferredSection minHeight="400px">
            <WhyUs />
          </DeferredSection>
          <hr className="border-dashed border-gray-300 h-1 w-full" />
          <DeferredSection minHeight="400px">
            <FAQ />
          </DeferredSection>
          <hr className="border-dashed border-gray-300 h-1 w-full" />
          <DeferredSection minHeight="400px">
            <ContactUs />
          </DeferredSection>
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <DeferredSection minHeight="200px">
          <Footer />
        </DeferredSection>
      </Suspense>
    </div>
  );
}

export default App;
