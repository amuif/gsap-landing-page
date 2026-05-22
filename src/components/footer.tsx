import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200 py-8">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row gap-8 items-start justify-between">
        <div className="flex flex-col gap-3 text-left">
          <h2 className="text-2xl font-bold">Logo</h2>
          <p className="text-sm text-[#4F4F4F] max-w-sm">
            Build meaningful 1-to-1 connections with every customer, at scale.
          </p>
          {/* <div className="flex gap-2 mt-2">
            <Button variant="ghost" className="rounded-full">
              Contact
            </Button>
            <Button variant="ghost" className="rounded-full">
              Subscribe
            </Button>
          </div> */}
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 w-full text-left">
          <div>
            <p className="text-sm font-semibold mb-2">Company</p>
            <nav className="flex flex-col gap-2 text-sm text-[#4F4F4F]">
              <a href="#about" className="hover:text-black">
                About
              </a>
              <a href="#careers" className="hover:text-black">
                Careers
              </a>
              <a href="#blog" className="hover:text-black">
                Blog
              </a>
            </nav>
          </div>

          <div>
            <p className="text-sm font-semibold mb-2">Services</p>
            <nav className="flex flex-col gap-2 text-sm text-[#4F4F4F]">
              <a href="#services" className="hover:text-black">
                Chatbots
              </a>
              <a href="#pricing" className="hover:text-black">
                Pricing
              </a>
              <a href="#demo" className="hover:text-black">
                Book a demo
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
              <div className="flex gap-3 mt-1">
                <a
                  aria-label="twitter"
                  href="#"
                  className="text-[#4F4F4F] hover:text-black"
                >
                  {/* <Twitter size={18} /> */}
                </a>
                <a
                  aria-label="linkedin"
                  href="#"
                  className="text-[#4F4F4F] hover:text-black"
                >
                  {/* <Linkedin size={18} /> */}
                </a>
                <a
                  aria-label="facebook"
                  href="#"
                  className="text-[#4F4F4F] hover:text-black"
                >
                  {/* <Facebook size={18} /> */}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-[#828282]">
        © {new Date().getFullYear()} Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
