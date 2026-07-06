import SectionTitle from "./section-title";
import { Marquee } from "./ui/marquee";
import { Star } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";

const testimonials = [
  {
    quote:
      "The launch campaign exceeded expectations. Their team delivered clarity, speed, and a conversion lift we hadn't seen before.",
    name: "Maya Patel",
    title: "Marketing Director, Bloom Labs",
    avatar: "https://i.pravatar.cc/100?img=12",
  },
  {
    quote:
      "Every meeting felt like a partnership. The final product is polished, persuasive, and built for market momentum.",
    name: "Ethan Cole",
    title: "Founder, ArcVector",
    avatar: "https://i.pravatar.cc/100?img=25",
  },
  {
    quote:
      "The design quality and attention to detail made our brand feel premium. This is exactly the storytelling support we needed.",
    name: "Sofia Garcia",
    title: "Brand Lead, Luma Studio",
    avatar: "https://i.pravatar.cc/100?img=38",
  },
  {
    quote:
      "Fast, creative, and consistently excellent. Our revenue growth reports are already reflecting the new momentum.",
    name: "Noah Kim",
    title: "VP Sales, Horizon Grid",
    avatar: "https://i.pravatar.cc/100?img=44",
  },
  {
    quote:
      "The team distilled our complex offering into a memorable customer journey. The results spoke for themselves.",
    name: "Avery Johnson",
    title: "Product Lead, VeloTech",
    avatar: "https://i.pravatar.cc/100?img=53",
  },
  {
    quote:
      "Their work felt like a natural extension of our brand, and the feedback from customers has been glowing.",
    name: "Liam Brown",
    title: "COO, NexaWorks",
    avatar: "https://i.pravatar.cc/100?img=61",
  },
  {
    quote:
      "Reliable, thoughtful, and results-oriented. This is the level of support every growing company should have.",
    name: "Zoe Wilson",
    title: "Customer Experience Head, Pulse Eight",
    avatar: "https://i.pravatar.cc/100?img=72",
  },
  {
    quote:
      "The final creative felt homespun yet highly professional. Our team is more confident than ever about the next phase.",
    name: "Julian Reed",
    title: "Strategy Director, EmberPoint",
    avatar: "https://i.pravatar.cc/100?img=83",
  },
  {
    quote:
      "Transparency and speed were the standout traits here. Every update came with clear decisions and measurable impact.",
    name: "Nina Morgan",
    title: "Head of Growth, Cedar Lane",
    avatar: "https://i.pravatar.cc/100?img=90",
  },
  {
    quote:
      "A seamless experience from concept to launch. Their execution elevated our message and gave us stronger traction.",
    name: "Owen Brooks",
    title: "Senior Product Manager, Driftly",
    avatar: "https://i.pravatar.cc/100?img=98",
  },
];

const Testimony = () => {
  return (
    <div className="py-6 md:py-10 px-4 sm:px-6 md:px-16 w-full max-w-6xl mx-auto flex flex-col gap-6 md:gap-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-start justify-between gap-4 md:gap-8">
        <div className="text-left flex flex-col gap-3 md:gap-5 w-full md:w-auto">
          <SectionTitle title="Our Clients" />
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            What our <span className="text-[#4f4f4f]">clients say.</span>
          </h1>
        </div>
        <div className="w-full md:max-w-xl">
          <p className="text-sm md:text-base text-left pt-0 md:pt-16 text-gray-600">
            Real stories from brands that use AIthor to scale faster and achieve
            measurable results.
          </p>
        </div>
      </div>

      {/* Marquee Section */}
      <div className="overflow-hidden rounded-[2rem] border-none">
        <Marquee
          className="gap-4 sm:gap-6 py-6 sm:py-8 px-4 md:px-6 border-none"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
            maskImage:
              "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
          }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="min-w-70 sm:min-w-75 md:min-w-[320px] max-w-sm rounded-3xl p-1 shadow-sm bg-[#e5e5e5] h-auto"
            >
              <div className="bg-white/80 rounded-2xl p-4 sm:p-6 flex flex-col">
                <div className="flex items-center gap-1 mb-3 sm:mb-4 justify-start">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span key={index} className="text-lg leading-none">
                      <Star
                        stroke="#F04711"
                        className="fill-[#F04711]"
                        size={16}
                      />
                    </span>
                  ))}
                </div>
                <p className="text-xs sm:text-sm font-bold text-gray-800 italic text-left line-clamp-3 sm:line-clamp-none">
                  "{testimonial.quote}"
                </p>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4">
                <Avatar className="rounded-full object-cover border border-gray-200 w-10 h-10 sm:w-12 sm:h-12">
                  <AvatarImage
                    src={testimonial.avatar}
                    alt={`${testimonial.name} profile`}
                  />
                </Avatar>
                <div className="flex flex-col text-left">
                  <span className="font-semibold text-xs sm:text-sm text-gray-900">
                    {testimonial.name}
                  </span>
                  <span className="text-xs sm:text-sm text-gray-500">
                    {testimonial.title}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Testimony;