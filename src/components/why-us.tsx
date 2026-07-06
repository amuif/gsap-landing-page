import { X, Check } from "lucide-react";
import SectionTitle from "./section-title";

export default function WhyUs() {
  return (
    <div id='whyus' className="py-6 md:py-10 px-4 sm:px-8 md:px-16 border-y-0 w-full max-w-5xl border border-dashed border-gray-300 flex flex-col gap-5 mx-auto">
      <div className="flex items-center justify-center mx-auto">
        <SectionTitle title="Why Us" />
      </div>
      <div className="p-4 rounded-lg flex-col flex gap-3 md:gap-4 items-center text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
          AI Partner, <span className="text-[#4f4f4f]">Done Right.</span>
        </h2>
        <p className="text-sm sm:text-base">
          We bring your vision to life with custom AI.
        </p>
      </div>
      <WhyUsContent />
    </div>
  );
}

function WhyUsContent() {
  const features = [
    "Vague discovery, unclear ROI",
    "Generic AI tools & pre-made bots",
    "Months to ship the first pilot",
    "Black-box systems, no documentation",
    "Handover, then radio silence",
  ];

  const workingWithUsFeatures = [
    "Clear discovery, defined ROI",
    "Custom AI solutions built for you",
    "Weeks to ship the first pilot",
    "Fully documented, transparent systems",
    "Ongoing support & partnership",
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 bg-[#e5e5e5] rounded-xl p-1">
      {/* Freelance Column */}
      <div className="text-left flex flex-col gap-6 sm:gap-8 md:gap-10 p-4 sm:p-5 text-xs sm:text-sm rounded-lg bg-white/50">
        <h4 className="text-base sm:text-lg font-semibold">Freelance</h4>
        <ul className="flex flex-col gap-2 sm:gap-3">
          {features.map((feature, index) => (
            <li key={index}>
              <div className="flex flex-row gap-2 sm:gap-3 items-start">
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 shrink-0 mt-0.5" />
                <span className="text-gray-700">{feature}</span>
              </div>
              {index < features.length - 1 && (
                <hr className="border-[#4f4f4f] border-dotted mt-2 sm:mt-3" />
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Other Agencies Column */}
      <div className="text-left flex flex-col bg-white gap-6 sm:gap-8 md:gap-10 p-4 sm:p-5 text-xs sm:text-sm my-1 sm:my-2 rounded-xl shadow-sm">
        <h4 className="text-base sm:text-lg font-semibold">Other Agencies</h4>
        <ul className="flex flex-col gap-2 sm:gap-3">
          {features.map((feature, index) => (
            <li key={index}>
              <div className="flex flex-row gap-2 sm:gap-3 items-start">
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 shrink-0 mt-0.5" />
                <span className="text-gray-700">{feature}</span>
              </div>
              {index < features.length - 1 && (
                <hr className="border-[#4f4f4f] border-dotted mt-2 sm:mt-3" />
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Working with Us Column */}
      <div className="text-left flex flex-col bg-black text-white gap-6 sm:gap-8 md:gap-10 p-4 sm:p-5 text-xs sm:text-sm my-1 sm:my-2 rounded-xl">
        <h4 className="text-base sm:text-lg font-semibold">Working with Us</h4>
        <ul className="flex flex-col gap-2 sm:gap-3">
          {workingWithUsFeatures.map((feature, index) => (
            <li key={index}>
              <div className="flex flex-row gap-2 sm:gap-3 items-start">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 shrink-0 mt-0.5" />
                <span>{feature}</span>
              </div>
              {index < workingWithUsFeatures.length - 1 && (
                <hr className="border-gray-600 border-dotted mt-2 sm:mt-3" />
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}