import { X } from "lucide-react";
import SectionTitle from "./section-title";
import { Separator } from "@/components/ui/separator";
export default function WhyUs() {
  return (
    <div className="py-10 md:py-10 px-16 border-y-0 w-full max-w-5xl border border-dashed border-gray-300 flex flex-col gap-5">
      <SectionTitle title="Why Us" />
      <div className=" p-4 rounded-lg flex-col flex gap-4 items-center">
        <h2 className="text-3xl md:text-5xl font-semibold">
          AI Partner, <span className="text-[#4f4f4f]">Done Right.</span>
        </h2>
        <p>We bring your vision to life with custom AI.</p>
      </div>
      <WhyUsContent />
    </div>
  );
}

function WhyUsContent() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 px-1  bg-[#e5e5e5]  rounded-xl">
      <div className="text-left flex flex-col gap-10 p-5 text-sm">
        <h4 className="text-lg font-semibold">Freelance</h4>
        <ul className="flex flex-col gap-3">
          <li className="flex flex-row gap-3">
            <X /> Vague discovery, unclear ROI
          </li>
          <hr className="border-[#4f4f4f] border-dotted" />
          <li className="flex flex-row gap-3">
            <X /> Generic AI tools & pre-made bots
          </li>
          <hr className="border-[#4f4f4f] border-dotted" />
          <li className="flex flex-row gap-3">
            <X /> Months to ship the first pilot
          </li>
          <hr className="border-[#4f4f4f] border-dotted" />
          <li className="flex flex-row gap-3">
            <X /> Black-box systems, no documentation{" "}
          </li>{" "}
          <hr className="border-[#4f4f4f] border-dotted" />
          <li className="flex flex-row gap-3">
            <X /> Handover, then radio silence
          </li>
        </ul>
      </div>
      <div className="text-left flex flex-col bg-white gap-10 p-3 text-sm my-2 rounded-xl">
        <h4 className="text-lg font-semibold">Other Agencies</h4>
        <ul className="flex flex-col gap-3">
          <li className="flex flex-row gap-3">
            <X /> Vague discovery, unclear ROI
          </li>
          <hr className="border-[#4f4f4f] border-dotted" />
          <li className="flex flex-row gap-3">
            <X /> Generic AI tools & pre-made bots
          </li>
          <hr className="border-[#4f4f4f] border-dotted" />
          <li className="flex flex-row gap-3">
            <X /> Months to ship the first pilot
          </li>
          <hr className="border-[#4f4f4f] border-dotted" />
          <li className="flex flex-row gap-3">
            <X /> Black-box systems, no documentation{" "}
          </li>{" "}
          <hr className="border-[#4f4f4f] border-dotted" />
          <li className="flex flex-row gap-3">
            <X /> Handover, then radio silence
          </li>
        </ul>
      </div>
      <div className="text-left flex flex-col gap-10 bg-black p-3 my-2 text-sm rounded-xl text-white">
        <h4 className="text-lg font-semibold">Working with Us</h4>
        <ul className="flex flex-col gap-3">
          <li className="flex flex-row gap-3">
            <X /> Vague discovery, unclear ROI
          </li>
          <hr className="border-[#4f4f4f] border-dotted" />
          <li className="flex flex-row gap-3">
            <X /> Generic AI tools & pre-made bots
          </li>
          <hr className="border-[#4f4f4f] border-dotted" />
          <li className="flex flex-row gap-3">
            <X /> Months to ship the first pilot
          </li>
          <hr className="border-[#4f4f4f] border-dotted" />
          <li className="flex flex-row gap-3">
            <X /> Black-box systems, no documentation{" "}
          </li>{" "}
          <hr className="border-[#4f4f4f] border-dotted" />
          <li className="flex flex-row gap-3">
            <X /> Handover, then radio silence
          </li>
        </ul>
      </div>
    </div>
  );
}
