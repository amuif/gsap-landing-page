import { useState } from "react";
import ButtonGradient from "./button-gradient";

const NavLinks = [
  {
    name: "Services",
    href: "#services",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Pricing",
    href: "#pricing",
  },
  {
    name: "Clients",
    href: "#clients",
  },
  {
    name: "Why us",
    href: "#whyus",
  },
  {
    name: "FAQs",
    href: "#faqs",
  },
];

const NavBar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md shadow-sm">
      <div className="hidden md:flex w-full">
        <DesktopNavBar />
      </div>
      <div className="flex md:hidden w-full">
        <MobileNavBar />
      </div>
    </nav>
  );
};

export default NavBar;

const DesktopNavBar = () => {
  return (
    <div className="w-full flex items-center justify-between px-4 lg:px-8 py-1.5 border-b border-[#E5E5E5]">
      {/* Logo - Far Left */}
      <div className="shrink-0">
        <a href="/">
          <img
            src="/gsap-logo-complete.svg"
            alt="AIthor Logo"
            width={64}
            height={64}
            className="w-12 h-12 lg:w-18 lg:h-14 xl:w-16 xl:h-16 object-contain"
          />
        </a>
      </div>

      {/* Navigation Links & CTA - Far Right */}
      <div className="flex items-center gap-4 lg:gap-6">
        <nav
          aria-label="Main Navigation"
          className="hidden lg:flex flex-row items-center gap-4 xl:gap-6 font-semibold text-sm"
        >
          {NavLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-gray-700 hover:text-black transition-colors duration-200 whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </nav>
        <div className="shrink-0">
          <ButtonGradient text="Get in Touch" size={"default"} />
        </div>
      </div>
    </div>
  );
};

const MobileNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full border-b border-[#E5E5E5] bg-white/80 backdrop-blur-md">
      <div className="w-full flex justify-between items-center px-4 py-1.5">
        {/* Logo - Far Left */}
        <a href="/" className="shrink-0">
          <img
            src="/gsap-logo-complete.svg"
            alt="AIthor Logo"
            width={56}
            height={40}
            className="w-14 h-10 sm:w-14 sm:h-14 object-contain"
          />
        </a>

        {/* Hamburger Menu - Far Right */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen(!isOpen)}
          className="relative flex flex-col items-center justify-center w-8 h-8 sm:w-10 sm:h-10 gap-1 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors cursor-pointer"
        >
          <div
            className={`bg-black w-4 h-0.5 rounded-full transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-1" : ""
            }`}
          />
          <div
            className={`bg-black w-4 h-0.5 rounded-full transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-1" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-4 pt-2">
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-2">
            {NavLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-base font-semibold text-gray-700 hover:text-black transition-colors py-2 border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="w-full mt-3">
            <ButtonGradient
              text="Get in Touch"
              size={"lg"}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
