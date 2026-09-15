import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200 py-8">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row gap-8 items-start justify-between">
        <div className="flex flex-col gap-3 text-left">
          <img
            src="/gsap-logo-complete.svg"
            alt="AIthor Logo"
            className="h-16 w-36"
          />
          <p className="text-sm text-[#4F4F4F] max-w-sm">
            Build meaningful 1-to-1 connections with every customer, at scale.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 w-full text-left">
          <div>
            <p className="text-sm font-semibold mb-2">Company</p>
            <nav
              aria-label="Company links"
              className="flex flex-col gap-2 text-sm text-[#4F4F4F]"
            >
              <a href="#about" className="hover:text-black">
                About
              </a>
              <a href="#clients" className="hover:text-black">
                Clients
              </a>
              <a href="#whyus" className="hover:text-black">
                Why Us
              </a>
            </nav>
          </div>

          <div>
            <p className="text-sm font-semibold mb-2">Services</p>
            <nav
              aria-label="Service links"
              className="flex flex-col gap-2 text-sm text-[#4F4F4F]"
            >
              <a href="#services" className="hover:text-black">
                Services
              </a>
              <a href="#pricing" className="hover:text-black">
                Pricing
              </a>
              <a href="#faqs" className="hover:text-black">
                FAQs
              </a>
            </nav>
          </div>

          <div>
            <p className="text-sm font-semibold mb-2">Contact</p>
            <div className="flex flex-col gap-2 text-sm text-[#4F4F4F]">
              <a
                href="mailto:hello@example.com"
                className="hover:text-black flex items-center gap-2"
              >
                <Mail size={16} /> hello@example.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} AIthor. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
