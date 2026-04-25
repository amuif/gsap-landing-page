import SectionTitle from "./section-title";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { ChevronDown, Folder, Link, Mic, Plus, Send } from "lucide-react";
import { TypingAnimation } from "./ui/typing-animation";
import { Marquee } from "./ui/marquee";
import { aiUsesPrimary, aiUsesSecondary, calls } from "@/lib/data";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { motion } from "motion/react";

const OurServices = () => {
  return (
    <div className="border-y-0  py-10 border border-dashed border-gray-300 w-full max-w-5xl  flex flex-col gap-4">
      <div className="mx-auto p-14 flex flex-col gap-5">
        <div className="mx-auto">
          <SectionTitle title="our services" />
        </div>
        <h2 className="text-3xl md:text-5xl  font-semibold">
          Problem-Solving <span className="text-[#4F4F4F]">AI.</span>
        </h2>
        <p className="text-balance">
          Explore the key features that drive our partners growth, day after
          day.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-5">
        <ServiceOne />
        <ServiceTwo />
        <ServiceThree />
      </div>
      <div>
        <UsesMarquee />
      </div>
    </div>
  );
};

export default OurServices;

function ServiceOne() {
  const [selectedModel, setSelectedModel] = useState("openai");
  const modelMap: Record<string, { img: string; label: string }> = {
    openai: { img: "/openai.svg", label: "GPT 5.2" },
    claude: { img: "/claude-color.svg", label: "Claude 4.6" },
    gemini: { img: "/gemini-color.svg", label: "Gemini 3" },
    grok: { img: "/grok.svg", label: "Grok 4.2" },
  };
  return (
    <Card className="py-0  pb-1 pt-5 bg-[#e5e5e5]">
      <CardHeader>
        <CardTitle className="text-left font-bold">
          Chatbot Development
        </CardTitle>
        <CardDescription className="text-left">
          We build custom AI chat solutions for instant support and sales.
        </CardDescription>
      </CardHeader>

      <div className="pt-5 h-full pb-1  flex flex-col gap-5  bg-white  justify-between aspect-square rounded-lg mx-1 px-1">
        <div className="flex items-center justify-between ">
          <div>
            <Select
              value={selectedModel}
              onValueChange={(v) => setSelectedModel(String(v))}
            >
              <SelectTrigger className="w-fit">
                <SelectValue placeholder="" className="">
                  <img
                    src={modelMap[selectedModel]?.img}
                    alt={modelMap[selectedModel]?.label}
                  />
                  <span className="text-sm">
                    {modelMap[selectedModel]?.label}
                  </span>
                </SelectValue>
              </SelectTrigger>
              <SelectContent className="bg-[#e5e5e5] w-full border-none rounded-lg focus:border-0">
                <SelectGroup className="px-1">
                  <SelectItem value="openai" className="">
                    <img src="/openai.svg" alt="OpenAI" /> GPT 5.2
                  </SelectItem>
                  <SelectItem value="claude">
                    <img src="/claude-color.svg" alt="Claude" />
                    <p className="text-sm">Claude 4.6 </p>
                  </SelectItem>
                  <SelectItem value="gemini">
                    <img src="/gemini-color.svg" alt="Gemini" /> Gemini 3
                  </SelectItem>
                  <SelectItem value="grok">
                    <img src="/grok.svg" alt="Grok" /> Grok 4.2
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger
                render={<Button variant="outline" size="icon" />}
                className="border-0"
              >
                <ChevronDown />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[#e5e5e5]">
                <DropdownMenuGroup>
                  <DropdownMenuItem className="hover:bg-white">
                    Share
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-white">
                    Save
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className=" w-full ">
          <div className="flex items-center  p-2">
            <div className="flex-1 text-sm font-light text-gray-700">
              <TypingAnimation
                words={[
                  "Build your AI assistance with confidence.",
                  "Smart chatbot tailored to your needs.",
                  "Automate support, engage, convert, repeat.",
                ]}
                loop
              />
              <div className="flex flex-row justify-between items-center">
                <div>
                  <Button size="icon-sm">
                    <Plus />
                  </Button>
                  <Button size="icon-sm">
                    <Link />
                  </Button>
                  <Button size="icon-sm">
                    <Folder />
                  </Button>
                </div>
                <div>
                  <Button size="icon-sm">
                    <Mic />
                  </Button>
                  <Button size="icon-sm">
                    <Send />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

function ServiceTwo() {
  return (
    <Card className="py-0  pb-1 pt-5 bg-[#e5e5e5]">
      <CardHeader>
        <CardTitle className="text-left font-bold">Voice Assistants</CardTitle>
        <CardDescription className="text-left">
          We build smart voice solutions for effortless control and better
          access.
        </CardDescription>
      </CardHeader>

      <Marquee vertical className="h-75 overflow-hidden">
        <div className="flex flex-col gap-3">
          {calls.map((call) => (
            <div
              key={call.id}
              className="flex items-center justify-between w-full px-4 py-3 rounded-2xl 
                       bg-white/70 backdrop-blur-md border border-gray-200 
                       shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <img
                  src={call.image}
                  alt={call.name}
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-gray-200"
                />

                <div className="flex flex-col leading-tight">
                  <p className="text-sm font-semibold text-gray-900">
                    {call.name}
                  </p>
                  <div className="text-xs text-left text-gray-500 items-center justify-start flex gap-1 capitalize">
                    <div className="bg-black rounded-full h-2 w-2"></div>{" "}
                    {call.status}
                  </div>
                </div>
              </div>

              <Button
                className="p-2 rounded-full bg-black/80 hover:bg-black/90 
                         transition-colors duration-200"
              >
                <Mic className="w-4 h-4 text-white" />
              </Button>
            </div>
          ))}
        </div>
      </Marquee>
    </Card>
  );
}

const AnimatedBar = (props: any) => {
  const { x, y, width, height, fill } = props;

  return (
    <motion.rect
      x={x}
      width={width}
      fill={fill}
      initial={{ y: y + height, height: 0 }}
      animate={{ y, height }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      rx={4}
    />
  );
};

function ServiceThree() {
  const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
  ];

  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "var(--chart-1)",
    },
    mobile: {
      label: "Mobile",
      color: "var(--chart-2)",
    },
  } satisfies ChartConfig;

  return (
    <Card className="py-0 pb-2 pt-5 bg-[#e5e5e5] rounded-2xl shadow-sm">
      <CardHeader className="text-left space-y-1">
        <CardTitle className="font-semibold text-lg">
          AI Strategy Consulting
        </CardTitle>
        <CardDescription className="text-muted-foreground text-sm">
          We help you implement AI solutions for maximum efficiency and growth.
        </CardDescription>
      </CardHeader>

      <ChartContainer config={chartConfig} className="h-full">
        <BarChart data={chartData} barGap={6}>
          <CartesianGrid vertical={false} strokeDasharray="3 3" opacity={1} />

          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={10}
            tick={{ fontSize: 12, fill: "#666" }}
            tickFormatter={(value) => value.slice(0, 3)}
          />

          <ChartTooltip content={<ChartTooltipContent hideLabel />} />
          <ChartLegend content={<ChartLegendContent />} />

          <Bar
            dataKey="desktop"
            stackId="a"
            fill="var(--color-desktop)"
            shape={<AnimatedBar />}
          />

          <Bar
            dataKey="mobile"
            stackId="a"
            fill="var(--color-mobile)"
            shape={<AnimatedBar />}
          />
        </BarChart>
      </ChartContainer>
    </Card>
  );
}

function UsesMarquee() {
  return (
    <div className="p-10">
      <div className="relative">
        <div
          className="overflow-hidden"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
            maskImage:
              "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
          }}
        >
          <div className="flex flex-col gap-3">
            <Marquee className="p-0">
              {aiUsesSecondary.map((use) => (
                <div
                  key={use.title}
                  className="bg-[#e5e5e5] flex items-center justify-center gap-1 p-2 text-sm rounded-2xl mx-2"
                >
                  <use.icon className="h-4 w-4" />
                  <span className="text-sm">{use.title}</span>
                </div>
              ))}
            </Marquee>
            <Marquee reverse className="p-0">
              {aiUsesPrimary.map((use) => (
                <div
                  key={use.title}
                  className="bg-[#e5e5e5] flex items-center justify-center gap-1 p-2 text-sm rounded-2xl mx-2"
                >
                  <use.icon className="h-4 w-4" />
                  <span className="text-sm">{use.title}</span>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
}
