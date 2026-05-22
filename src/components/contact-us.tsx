import { useState } from "react";
import SectionTitle from "./section-title";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import ButtonGradient from "./button-gradient";

const ContactUs = () => {
  const [plan, setPlan] = useState<"Pro" | "Enterprise">("Pro");
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 py-14 md:py-10 px-16 border-y-0  gap-4 w-full max-w-5xl border border-dashed border-gray-300">
      <div className="flex-col flex gap-5 text-left">
        <SectionTitle title="Contact & Support" />
        <h1 className="text-3xl md:text-5xl font-bold ">
          Get In <span className="text-[#4f4f4f]">Touch.</span>
        </h1>
        <p className="text-[#4f4f4f]">
          Have questions or need support? Our team is here to help you every
          step of the way
        </p>
        <div className="mt-13 bg-[#151519] text-xs p-8 flex flex-col gap-2 rounded-lg text-white/90">
          <div>
            <p className="text-bold"> Email:</p> <br />
            lorem@gmail.com
          </div>
          <Separator />
          <div>
            <p className="text-bold">Phone:</p>
            <br /> +123 456 7890
          </div>
          <Separator />
          <div>
            <p className="text-bold"> Address:</p>
            <br /> 123 Main Street, City, Country
          </div>
        </div>
      </div>
      <div className="p-5 bg-[#E5E5E5] rounded-lg flex flex-col gap-5 items-center justify-start w-full text-left text-xs font-semibold ">
        <div className="text-[#4f4f4f] w-full flex flex-col gap-2">
          <p className="">FULL NAME</p>
          <Input placeholder="John Doe" className="bg-white/90 h-10" />
        </div>{" "}
        <div className="text-[#4f4f4f] w-full flex flex-col gap-2">
          <p className="">YOUR EMAIL</p>
          <Input
            placeholder="john.doe@example.com"
            className="bg-white/90 h-10"
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <p>SELECT PLAN</p>
          <div className="flex flex-row gap-5 px-2">
            <Button
              size="xl"
              onClick={() => setPlan("Pro")}
              className={`w-1/2 ${plan === "Pro" ? "bg-[#151519] text-white" : "bg-white text-black"}`}
            >
              Pro
            </Button>
            <Button
              size="xl"
              onClick={() => setPlan("Enterprise")}
              className={`w-1/2 ${plan === "Enterprise" ? "bg-[#151519] text-white" : "bg-white text-black"}`}
            >
              Enterprise
            </Button>
          </div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <p>MESSAGE</p>
          <textarea
            placeholder="Type your message...."
            className="h-22 bg-white/90 px-2 py-3 rounded-lg"
          />
        </div>
        <ButtonGradient text="Get In Touch" size="xl" className="w-full" />
      </div>
    </div>
  );
};

export default ContactUs;
