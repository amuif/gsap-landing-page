import { useState } from "react";
import { Button } from "./ui/button";
import GetInTouchButton from "./button-gradient";
import { AnimatePresence, motion } from "motion/react";

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
    <motion.div className="max-w-3xl mx-auto  m-5 ">
      <AnimatePresence>
        <div className="hidden md:flex w-full ">
        <DesktopNavBar />
      </div>
      <div className="flex md:hidden w-full px-2">
        <MobileNavBar />
      </div>
      </AnimatePresence>
    </motion.div>
  );
};

export default NavBar;

const DesktopNavBar = () => {
  return (
    <div className="w-full flex items-center justify-between  border-solid border-4 border-gray-300 rounded-full  pl-1 pr-0 ">
      <div>
        <h1>Logo</h1>
      </div>
      <div>
        <nav className="w-full flex flex-row gap-3 font-semibold text-sm">
          {NavLinks.map((link, index) => (
            <a key={index} href={link.href}>
              {link.name}
            </a>
          ))}
        </nav>
      </div>
      <div>
        <GetInTouchButton text="Get in Touch" size={"xl"} />
      </div>
    </div>
  );
};

const MobileNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
<motion.div
  layout
  transition={{ duration: 0.4, ease: "easeInOut" }}
  className="w-full border-solid border-4 p-1 overflow-hidden rounded-xl border-gray-300 "
>
  <div className="w-full flex justify-between items-center ">
    <div>Logo</div>
    <Button
      variant="ghost"
      onClick={() => setIsOpen(!isOpen)}
      className="relative flex flex-col items-center justify-center w-12 h-12 gap-1.5"
    >
      <div className={`bg-black w-5 h-0.5 rounded-full transition-all duration-300 ${isOpen ? "rotate-45 translate-y-1" : ""}`} />
      <div className={`bg-black w-5 h-0.5 rounded-full transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-1" : ""}`} />
    </Button>
  </div>

  <AnimatePresence>
    {isOpen && (
      <motion.div
        key="content"
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <nav className="flex flex-col gap-2 pt-4">
          {NavLinks.map((link, index) => (
            <a key={index} href={link.href} className="text-lg font-semibold hover:text-blue-500">
              {link.name}
            </a>
          ))}
        </nav>
         <div className="w-full">
        <GetInTouchButton text="Get in Touch" size={"xl"}  className="w-full"/>
      </div>
      </motion.div>
    )}
  </AnimatePresence>
</motion.div>
  );
};
