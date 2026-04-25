import SectionTitle from "./section-title";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "./ui/card";
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
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { ChevronDown, Folder, Link, Mic, Plus, Send } from "lucide-react";
import { TypingAnimation } from "./ui/typing-animation";
const OurServices = () => {
    return (
        <div className="border-y-0 border border-dashed border-gray-300 w-full max-w-5xl  flex flex-col gap-4">
            <div className="mx-auto pt-14 flex flex-col gap-5">
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
                <CardTitle>Chatbot Development</CardTitle>
                <CardDescription>
                    We build custom AI chat solutions for instant support and sales.
                </CardDescription>
            </CardHeader>
            <CardContent className="h-62 bg-white aspect-square rounded-lg mx-1 px-1">
                <div className="pt-5  pb-1 px-0 flex flex-col gap-5 h-full justify-between">
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
                                    <SelectGroup className='px-1'>
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
                                        <Button size='icon-sm'>
                                            <Plus />
                                        </Button>
                                        <Button size='icon-sm'>
                                            <Link />
                                        </Button>
                                        <Button size='icon-sm'>
                                            <Folder />
                                        </Button>
                                    </div><div>
                                        <Button size='icon-sm'>
                                            <Mic />
                                        </Button>
                                        <Button size='icon-sm'>
                                            <Send />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
