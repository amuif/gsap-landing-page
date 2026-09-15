import { useState } from "react";
import SectionTitle from "./section-title";
import { Button } from "./ui/button";
import { ChartLine, Code2, PlusCircle } from "lucide-react";
import { ProgressBar } from "./about-us";
import ButtonGradient from "./button-gradient";

const Pricing = () => {
  return (
    <div
      id="pricing"
      className="py-6 md:py-10 px-4 sm:px-8 md:px-16 border-y-0 w-full max-w-5xl border border-dashed border-gray-300 flex flex-col gap-5 mx-auto"
    >
      <div className="mx-auto flex items-center justify-center">
        <SectionTitle title="Pricing" />
      </div>
      <div className="flex-col gap-3 flex text-center md:text-left">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold">
          Simple, <span className="text-[#4f4f4f]">flexible plans.</span>
        </h2>
        <p className="text-sm sm:text-base">
          Explore the key features that drive our partners growth.
        </p>
      </div>
      <PricingPlans />
    </div>
  );
};

export default Pricing;

function PricingPlans() {
  const [selectedPlan, setSelectedPlan] = useState("Monthly");

  return (
    <div className="w-full flex flex-col items-center justify-center pt-4 sm:pt-6">
      {/* Toggle Buttons */}
      <div className="transition-all duration-300 text-sm sm:text-lg p-1 rounded-xl flex flex-row items-center justify-between bg-[#e5e5e5] w-full sm:w-auto">
        <Button
          variant="default"
          aria-pressed={selectedPlan === "Monthly"}
          onClick={() => setSelectedPlan("Monthly")}
          className={`p-2 sm:p-3 rounded-lg text-black text-xs sm:text-sm ${
            selectedPlan === "Monthly" ? "bg-white shadow" : "bg-[#e5e5e5]"
          }`}
        >
          Monthly
        </Button>
        <Button
          variant="default"
          aria-pressed={selectedPlan === "Yearly"}
          onClick={() => setSelectedPlan("Yearly")}
          className={`p-2 sm:p-3 rounded-lg text-black text-xs sm:text-sm ${
            selectedPlan === "Yearly" ? "bg-white shadow" : "bg-[#e5e5e5]"
          }`}
        >
          Yearly <span className="hidden sm:inline">(-20%)</span>
          <span className="sm:hidden">-20%</span>
        </Button>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-5 w-full">
        {/* Left Column - Feature Cards */}
        <div className="flex flex-col gap-1">
          <div className="bg-[#e5e5e5] flex flex-col p-1 rounded-lg gap-1 h-full">
            <div className="p-3 sm:p-4 bg-white rounded-lg">
              <div className="flex flex-row items-center justify-between h-10 sm:h-12">
                <PlusCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                <ProgressBar progress={25} />
              </div>
              <div className="text-left mt-3 sm:mt-5">
                <h3 className="font-bold text-sm sm:text-base">Subscribe</h3>
                <p className="text-xs sm:text-sm">
                  Pick a plan that fits your workflow.
                </p>
              </div>
            </div>
            <div className="p-3 sm:p-4 bg-white rounded-lg">
              <div className="flex flex-row items-center justify-between h-10 sm:h-12">
                <Code2 className="w-5 h-5 sm:w-6 sm:h-6" />
                <ProgressBar progress={50} />
              </div>
              <div className="text-left mt-3 sm:mt-5">
                <h3 className="font-bold text-sm sm:text-base">Build</h3>
                <p className="text-xs sm:text-sm">
                  We develop custom AI solutions.
                </p>
              </div>
            </div>
            <div className="p-3 sm:p-4 bg-white rounded-lg">
              <div className="flex flex-row items-center justify-between h-10 sm:h-12">
                <ChartLine className="w-5 h-5 sm:w-6 sm:h-6" />
                <ProgressBar progress={100} />
              </div>
              <div className="text-left mt-3 sm:mt-5">
                <h3 className="font-bold text-sm sm:text-base">
                  Test & optimise
                </h3>
                <p className="text-xs sm:text-sm">
                  We optimize to maximize long-term impact.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Column - Pro Plan */}
        <div className="bg-[#e5e5e5] p-1 rounded-lg h-full flex flex-col">
          <div className="bg-white rounded-lg h-fit flex flex-col gap-3 sm:gap-4 text-left p-3 sm:p-4">
            <div className="bg-black p-3 sm:p-4 shadow-lg text-white rounded-lg">
              <h3 className="font-semibold pb-8 sm:pb-12 md:pb-16 text-sm sm:text-base">
                Pro
              </h3>
              <p className="font-bold text-xl sm:text-2xl mt-2">
                ${selectedPlan === "Monthly" ? "799" : "639"}
              </p>
            </div>
            <p className="font-semibold text-xs sm:text-sm">
              Ideal for growing teams
            </p>
            <ButtonGradient text="Get in Touch" size="lg" className="w-full" />
          </div>
          <div className="flex-col flex text-left p-3 sm:p-4 pt-2 text-xs sm:text-sm">
            <p className="py-3 sm:py-5 font-semibold">Features:</p>
            <ul className="flex flex-col gap-2">
              <li className="flex items-start gap-2">
                <span>✓</span> Two pilots or 1 expanded build
              </li>
              <li className="flex items-start gap-2">
                <span>✓</span> Full audit + 90-day plan
              </li>
              <li className="flex items-start gap-2">
                <span>✓</span> Guardrails + human handoff
              </li>
              <li className="flex items-start gap-2">
                <span>✓</span> Two workshops + handover docs
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column - Enterprise Plan */}
        <div className="bg-[#151515] text-white p-1 rounded-lg h-full flex flex-col">
          <div className="bg-white rounded-lg h-fit flex flex-col gap-3 sm:gap-4 text-left p-3 sm:p-4">
            <div className="bg-black p-3 sm:p-4 shadow-lg text-white rounded-lg">
              <h3 className="font-semibold pb-8 sm:pb-12 md:pb-16 text-sm sm:text-base">
                Enterprise
              </h3>
              <p className="font-bold text-xl sm:text-2xl mt-2">
                ${selectedPlan === "Monthly" ? "999" : "799"}
              </p>
            </div>
            <p className="font-semibold text-xs sm:text-sm text-black">
              For Large Organisations
            </p>
            <ButtonGradient text="Get in Touch" size="lg" className="w-full" />
          </div>
          <div className="flex-col flex text-left p-3 sm:p-4 pt-2 text-xs sm:text-sm">
            <p className="py-3 sm:py-5 font-semibold">Features:</p>
            <ul className="flex flex-col gap-2">
              <li className="flex items-start gap-2">
                <span>✓</span> Three+ solutions across teams
              </li>
              <li className="flex items-start gap-2">
                <span>✓</span> Security & compliance review
              </li>
              <li className="flex items-start gap-2">
                <span>✓</span> Unlimited integrations (scope)
              </li>
              <li className="flex items-start gap-2">
                <span>✓</span> Dedicated PM + on-call support
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
