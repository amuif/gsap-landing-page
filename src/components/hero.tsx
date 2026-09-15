import ButtonGradient from "./button-gradient";

const Hero = () => {
  return (
    <div className="h-screen w-full max-w-5xl border-y-0 border border-dashed border-gray-300 flex flex-col gap-5 items-center justify-center text-black">
      <h1 className="text-center flex-col text-3xl md:text-5xl font-bold gap-2 md:gap-5 flex">
        <span>AI Chatbots Built To</span>
        <span className="text-[#4F4F4F]">Convert and scale</span>
      </h1>
      <div>
        <p className="text-balance">
          Build meaningful 1-to-1 connections with every customer, at scale.
        </p>
      </div>
      <div className="flex flex-row gap-5">
        <ButtonGradient
          text="Get in Touch"
          size={"xl"}
          className="shadow-xl/20"
        />
        <ButtonGradient
          text="Book a Demo"
          size={"xl"}
          className="shadow-xl/20"
        />
      </div>
    </div>
  );
};

export default Hero;
