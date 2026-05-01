import { useState } from "react";
import SectionTitle from "./section-title";
import { Button } from "./ui/button";
import { ChartLine, Code2, PlusCircle } from "lucide-react";
import { ProgressBar } from "./about-us";
import ButtonGradient from "./button-gradient";

const Pricing = () => {
  return (
    <div className="py-10 md:py-10 px-16 border-y-0 w-full max-w-5xl border border-dashed border-gray-300 flex flex-col gap-5">
      <div className="mx-auto flex items-center justify-center">
        <SectionTitle title="Pricing" />
      </div>
      <div className="flex-col gap-3 flex">
        <h2 className="text-3xl md:text-5xl font-extrabold">
          Simple, <span className="text-[#4f4f4f]">flexible plans.</span>{" "}
        </h2>
        <p>Explore the key features that drive our partners growth.</p>
      </div>
      <PricingPlans />
    </div>
  );
};

export default Pricing;

function PricingPlans() {
  const [selectedPlan, setSelectedPlan] = useState("Monthly");

  return (
    <div className="w-full flex flex-col items-center justify-center pt-6">
      <div className="transition-all duration-300 text-lg p-1  rounded-xl flex-row items-center justify-between bg-[#e5e5e5]">
        <Button
          variant="default"
          onClick={() => setSelectedPlan("Monthly")}
          className={` p-3 rounded-lg   text-black ${selectedPlan === "Monthly" ? "bg-white shadow" : "bg-[#e5e5e5] "}`}
        >
          Monthly
        </Button>
        <Button
          variant="default"
          onClick={() => setSelectedPlan("Yearly")}
          className={` p-3 rounded-lg  text-black  ${selectedPlan === "Yearly" ? "bg-white shadow" : "bg-[#e5e5e5] "}`}
        >
          Yearly (-20%)
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-5 w-full">
        <div className="bg-[#e5e5e5] flex flex-col p-1 rounded-lg gap-1">
          <div className="p-4 bg-white rounded-lg">
            <div className="flex flex-row items-center justify-between h-12 ">
              <PlusCircle />
              <ProgressBar progress={25} />
            </div>
            <div className="text-left mt-5">
              <h3 className="font-bold">Subscibe</h3>
              <p className="text-xs">Pick a plan that fits your workflow.</p>
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg">
            <div className="flex flex-row items-center justify-between h-12 ">
              <Code2 />
              <ProgressBar progress={50} />
            </div>
            <div className="text-left mt-5">
              <h3 className="font-bold">Build</h3>
              <p className="text-xs">We develop custom AI solutions.</p>
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg">
            <div className="flex flex-row items-center justify-between h-12 ">
              <ChartLine />
              <ProgressBar progress={100} />
            </div>
            <div className="text-left mt-5">
              <h3 className="font-bold">Test & optimise</h3>
              <p className="text-xs">
                We optimize to maximize long-term impact.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#e5e5e5] p-1 rounded-lg">
          <div className="bg-white rounded-lg h-fit flex flex-col gap-4 text-left p-2">
            <div className="bg-black p-3 shadow-lg text-white rounded-lg">
              <h3 className="text- font-semibold pb-16">Pro</h3>
              <p className="text- font-bold mt">$799</p>
            </div>
            <p className="font-semibold text-sm">Ideal for growing teams</p>

            <ButtonGradient text="Get in Touch" size="lg" />
          </div>
          <div className="flex-col flex text-left p-2 pt-2 text-sm ">
            <p className="py-5">Feature:</p>
            <ul className="flex flex-col gap-2 ">
              <li>✓ Two pilots or 1 expanded build</li>
              <li>✓ Full audit + 90-day plan</li>
              <li>✓ Guardrails + human handoff</li>
              <li>✓ Two workshops + handover docs</li>
            </ul>
          </div>
        </div>
        {/* 3rd */}
        <div className="bg-[#151515] text-white p-1 rounded-lg">
          <div className="bg-white rounded-lg h-fit flex flex-col gap-4 text-left p-2">
            <div className="bg-black p-3 shadow-lg text-white rounded-lg">
              <h3 className="text- font-semibold pb-16">Enterprise</h3>
              <p className="text- font-bold mt">$999</p>
            </div>

            <p className="font-semibold text-sm text-black">
              For Large Organisations
            </p>
            <ButtonGradient text="Get in Touch" size="lg" />
          </div>
          <div className="flex-col flex text-left p-2 pt-2 text-sm ">
            <p className="py-5">Feature:</p>
            <ul className="flex flex-col gap-2">
              <li>✓ Three+ solutions across teams</li>
              <li>✓ Security & compliance review</li>
              <li>✓ Unlimited integrations (scope)</li>
              <li>✓ Dedicated PM + on-call support</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
