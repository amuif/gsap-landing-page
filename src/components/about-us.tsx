import SectionTitle from "./section-title";
import { Avatar, AvatarFallback, AvatarGroup, AvatarImage } from "./ui/avatar";
const AboutUs = () => {
  return (
    <div className="py-6 md:py-10 px-4 sm:px-8 md:px-16 border-y-0 w-full max-w-5xl border border-dashed border-gray-300 mx-auto">
      <div className="mx-auto pb-6 md:pb-10">
        <div className="mx-auto flex justify-center w-full">
          <SectionTitle title="About us" />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-start md:justify-between pt-5 gap-4 md:gap-0">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold w-full md:w-2/3 text-wrap">
            Next-Gen <span className="text-[#4F4F4F]"> AI Solutions.</span>
          </h1>
          <p className="text-balance w-full md:w-auto text-sm sm:text-base">
            Deep technical expertise + fast execution—so you move with
            confidence and impact.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 bg-[#e5e5e5] p-1 rounded-lg">
        {/* Mission Card */}
        <div className="bg-black text-white p-4 sm:p-5 rounded-lg flex flex-col">
          <div className="text-left">
            <h6 className="font-bold text-lg sm:text-xl">Our mission</h6>
            <p className="pt-3 sm:pt-5 text-sm sm:text-base">
              We give startups and forward-thinking teams the AI expertise and
              product strategy they need to launch faster and smarter.
            </p>
          </div>
          <div className="mt-auto text-left pt-8 sm:pt-16 flex flex-col gap-3 sm:gap-5">
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
            <div>
              <h6 className="font-bold text-lg sm:text-xl">Trusted by 155+ businesses</h6>
              <p className="text-sm sm:text-base">They hit their targets — you are next.</p>
            </div>
          </div>
        </div>

        {/* Stats Columns */}
        <div className="flex-col gap-1 flex">
          <div className="text-left h-auto md:h-1/2 bg-white/80 rounded-lg p-4 sm:p-6 flex flex-col justify-between shadow-md">
            <div className="flex flex-row items-center justify-between gap-2">
              <h3 className="font-bold text-2xl sm:text-3xl">155+</h3>
              <ProgressBar progress={50} />
            </div>
            <p className="font-semibold text-sm sm:text-base">Happy clients worldwide</p>
          </div>
          <div className="text-left h-auto md:h-1/2 bg-white/80 rounded-lg p-4 sm:p-6 flex flex-col justify-between shadow-md">
            <div className="flex flex-row items-center justify-between gap-2">
              <h3 className="font-bold text-2xl sm:text-3xl">300+</h3>
              <ProgressBar progress={75} />
            </div>
            <p className="font-semibold text-sm sm:text-base">Hours saved per month</p>
          </div>
        </div>

        <div className="flex-col flex gap-1">
          <div className="text-left h-auto md:h-1/2 bg-white/80 rounded-lg p-4 sm:p-6 flex flex-col justify-between shadow-md">
            <div className="flex flex-row items-center justify-between gap-2">
              <h3 className="font-bold text-2xl sm:text-3xl">55%</h3>
              <ProgressBar progress={50} />
            </div>
            <p className="font-semibold text-sm sm:text-base">Reduction in manual work</p>
          </div>
          <div className="text-left h-auto md:h-1/2 bg-white/80 rounded-lg p-4 sm:p-6 flex flex-col justify-between shadow-md">
            <div className="flex flex-row items-center justify-between gap-2">
              <h3 className="font-bold text-2xl sm:text-3xl">45%</h3>
              <ProgressBar progress={75} />
            </div>
            <p className="font-semibold text-sm sm:text-base">Increase in Productivity</p>
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
            className={`${progress > i * 25 ? "bg-black" : "bg-[#e5e5e5]"
              } h-3 w-1 rounded-sm transition-all duration-300`}
          ></div>
        </div>
      ))}
    </div>
  );
}
