import { useState } from "react";
import SectionTitle from "./section-title";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import ButtonGradient from "./button-gradient";

const ContactUs = () => {
  const [plan, setPlan] = useState<"Pro" | "Enterprise">("Pro");
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 py-6 md:py-10 px-4 sm:px-8 md:px-16 border-y-0 gap-4 w-full max-w-5xl border border-dashed border-gray-300 mx-auto">
      {/* Left Column - Contact Info */}
      <div className="flex-col flex gap-4 sm:gap-5 text-left">
        <SectionTitle title="Contact & Support" />
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          Get In <span className="text-[#4f4f4f]">Touch.</span>
        </h2>
        <p className="text-[#4f4f4f] text-sm sm:text-base">
          Have questions or need support? Our team is here to help you every
          step of the way
        </p>
        <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-13 bg-[#151519] text-xs sm:text-sm p-5 sm:p-6 md:p-8 flex flex-col gap-2 rounded-lg text-white/90">
          <div>
            <p className="font-bold">Email:</p>
            <br /> lorem@gmail.com
          </div>
          <Separator />
          <div>
            <p className="font-bold">Phone:</p>
            <br /> +123 456 7890
          </div>
          <Separator />
          <div>
            <p className="font-bold">Address:</p>
            <br /> 123 Main Street, City, Country
          </div>
        </div>
      </div>

      {/* Right Column - Contact Form */}
      <div className="p-4 sm:p-5 bg-[#E5E5E5] rounded-lg flex flex-col gap-4 sm:gap-5 items-center justify-start w-full text-left text-xs sm:text-sm font-semibold">
        <div className="text-[#4f4f4f] w-full flex flex-col gap-1 sm:gap-2">
          <label
            htmlFor="fullname"
            className="text-xs sm:text-sm font-semibold"
          >
            FULL NAME
          </label>
          <Input
            id="fullname"
            name="fullname"
            aria-label="Full Name"
            placeholder="John Doe"
            className="bg-white/90 h-9 sm:h-10"
          />
        </div>

        <div className="text-[#4f4f4f] w-full flex flex-col gap-1 sm:gap-2">
          <label htmlFor="email" className="text-xs sm:text-sm font-semibold">
            YOUR EMAIL
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            aria-label="Your Email"
            placeholder="john.doe@example.com"
            className="bg-white/90 h-9 sm:h-10"
          />
        </div>

        <div className="w-full flex flex-col gap-1 sm:gap-2">
          <p className="text-[#4f4f4f]">SELECT PLAN</p>
          <div className="flex flex-row gap-3 sm:gap-5 px-1 sm:px-2">
            <Button
              size="xl"
              onClick={() => setPlan("Pro")}
              className={`w-1/2 text-xs sm:text-sm ${
                plan === "Pro"
                  ? "bg-[#151519] text-white"
                  : "bg-white text-black"
              }`}
            >
              Pro
            </Button>
            <Button
              size="xl"
              onClick={() => setPlan("Enterprise")}
              className={`w-1/2 text-xs sm:text-sm ${
                plan === "Enterprise"
                  ? "bg-[#151519] text-white"
                  : "bg-white text-black"
              }`}
            >
              Enterprise
            </Button>
          </div>
        </div>

        <div className="w-full flex flex-col gap-1 sm:gap-2">
          <label
            htmlFor="message"
            className="text-[#4f4f4f] text-xs sm:text-sm font-semibold"
          >
            MESSAGE
          </label>
          <textarea
            id="message"
            name="message"
            aria-label="Message"
            placeholder="Type your message...."
            className="h-20 sm:h-22 bg-white/90 px-2 py-2 sm:py-3 rounded-lg text-sm"
          />
        </div>

        <ButtonGradient text="Get In Touch" size="xl" className="w-full" />
      </div>
    </div>
  );
};

export default ContactUs;
