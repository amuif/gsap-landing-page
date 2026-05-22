import SectionTitle from "./section-title";
import { Avatar, AvatarFallback, AvatarGroup, AvatarImage } from "./ui/avatar";

const AboutUs = () => {
  return (
    <div className="py-10 md:py-10 px-16 border-y-0 w-full max-w-5xl border border-dashed border-gray-300">
      <div className="w-full pb-10">
        <SectionTitle title="About us" />
        <div className="flex items-center justify-between pt-5">
          <h1 className="text-3xl md:text-5xl  font-semibold w-2/3 text-nowrap">
            Next-Gen <span className="text-[#4F4F4F]"> AI Solutions.</span>
          </h1>
          <p className="text-balance">
            Deep technical expertise + fast execution—so you move with
            confidence and impact.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 bg-[#e5e5e5] p-1 rounded-lg">
        <div className=" bg-black text-white  p-5 rounded-lg">
          <div className="text-left">
            <h6 className="font-bold text-lg">Our mission</h6>
            <p className="pt-5">
              We give startups and forward-thinking teams the AI expertise and
              product strategy they need to launch faster and smarter.
            </p>
          </div>
          <div className="mt-auto text-left pt-16 flex-col gap-5">
            <AvatarGroup>
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage
                  src="https://github.com/maxleiter.png"
                  alt="@maxleiter"
                />
                <AvatarFallback>LR</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage
                  src="https://github.com/evilrabbit.png"
                  alt="@evilrabbit"
                />
                <AvatarFallback>ER</AvatarFallback>
              </Avatar>
            </AvatarGroup>
            <h6 className="font-bold text-lg">Trusted by 155+ businesses</h6>
            <p>They hit their targets — you are next.</p>
          </div>
        </div>
        <div className="flex-col gap-1 flex">
          <div className="text-left md:h-1/2 bg-white/80 rounded-lg p-4 flex flex-col justify-between shadow-md">
            <div className="flex flex-row items-center justify-between ">
              <h3 className="font-bold text-3xl">155+</h3>
              <ProgressBar progress={50} />
            </div>
            <p className="font-semibold">Happy clients worldwide</p>
          </div>
          <div className="text-left md:h-1/2 bg-white/80 rounded-lg p-6 flex flex-col justify-between shadow-md">
            <div className="flex flex-row items-center justify-between ">
              <h3 className="font-bold text-3xl">300+</h3>
              <ProgressBar progress={75} />
            </div>
            <p className="font-semibold">Hours saved per month</p>
          </div>
        </div>
        <div className="flex-col flex gap-1">
          <div className="text-left md:h-1/2 bg-white/80 rounded-lg p-6 flex flex-col justify-between shadow-md">
            <div className="flex flex-row items-center justify-between ">
              <h3 className="font-bold text-3xl">55%</h3>
              <ProgressBar progress={50} />
            </div>
            <p className="font-semibold">Reduction in manual work</p>
          </div>

          <div className="text-left md:h-1/2 bg-white/80 rounded-lg p-6 flex flex-col justify-between shadow-md">
            <div className="flex flex-row items-center justify-between ">
              <h3 className="font-bold text-3xl">45%</h3>
              <ProgressBar progress={75} />
            </div>
            <p className="font-semibold">Increase in Productivity</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

export function ProgressBar({ progress }: { progress: number }) {
  return (
    <div className="flex flex-row gap-0.5">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className={`${
              progress > i * 25 ? "bg-black" : "bg-[#e5e5e5]"
            } h-3 w-1 rounded-sm transition-all duration-300`}
          ></div>
        </div>
      ))}
    </div>
  );
}
