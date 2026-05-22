import { cn } from "@/lib/utils";
import SectionTitle from "./section-title";

import { useCallback, useLayoutEffect, useRef, useState } from "react";

import { motion } from "motion/react";
import { ButtonPlus } from "./button-gradient";
import { gsap } from "gsap";

export default function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number>(0);

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };
  return (
    <div className="py-10 md:py-10 px-16 border-y-0 w-full max-w-5xl border border-dashed  border-gray-300 flex flex-col gap-5">
      <div>
        <div className="flex items-center justify-center mx-auto">
          <SectionTitle title="FAQs" />
        </div>
        <h2 className="text-3xl md:text-5xl font-bold">
          Need <span className="text-[#4f4f4f]">Answers?</span>
        </h2>
        <p>Learn more about how we can transform your business.</p>
      </div>
      <div className="bg-[#e5e5e5] p-5 rounded-xl flex flex-col gap-3">
        {processItems.map((item, index) => (
          <FAQCARD
            key={index}
            number={item.number}
            title={item.title}
            description={item.description}
            isExpanded={expandedIndex === index}
            onToggle={() => {
              handleToggle(index);
            }}
            className={index !== processItems.length - 1 ? "mb-8" : ""}
          />
        ))}
      </div>
    </div>
  );
}
type ProcessItem = {
  number: string;
  title: string;
  description: string;
};
const processItems: ProcessItem[] = [
  {
    number: "01",
    title: "What does the membership include?",
    description:
      "The membership gives you unlimited access to our AI tools, regular updates, priority support, and expert resources to help you achieve your business goals.",
  },
  {
    number: "02",
    title: "How do I get started with your services?",
    description:
      "Simply sign up for the membership, and you’ll gain instant access to all tools and resources. You can start customizing and implementing solutions right away",
  },
  {
    number: "03",
    title: "Can I cancel my membership anytime?",
    description:
      "Yes, you can cancel your membership at any time without any penalties.",
  },
  {
    number: "04",
    title: "Do I need technical expertise?",
    description:
      "Not at all! Our solutions are designed to be user-friendly, and we provide tutorials and support to guide you through every step.",
  },
  {
    number: "05",
    title: "Are there additional costs?",
    description:
      "No, your membership covers everything. The only potential extra costs are for external services like custom domains or third-party tools, if required.",
  },
  {
    number: "06",
    title: " How often do you release updates?",
    description:
      "We release updates regularly to ensure our tools remain cutting-edge and effective. Members receive notifications about new features and improvements as they are rolled out.",
  },
];

type ProcessCardProps = {
  number: string;
  title: string;
  description?: string;
  isExpanded: boolean;
  onToggle: () => void;
  className?: string;
};

export function FAQCARD({
  number,
  title,
  description,
  isExpanded,
  onToggle,
}: ProcessCardProps) {
  const [autoHeight, setAutoHeight] = useState<number>(2000);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const updateAutoHeight = useCallback(() => {
    if (descriptionRef.current) {
      setAutoHeight(descriptionRef.current.clientHeight);
    }
  }, []);

  useLayoutEffect(() => {
    if (!descriptionRef.current) return;
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        updateAutoHeight();
      }
    });
    let firstResize = false;
    const resizeObserver = new ResizeObserver(() => {
      if (!firstResize) {
        firstResize = true;
        return;
      }
      updateAutoHeight();
    });
    intersectionObserver.observe(descriptionRef.current);
    resizeObserver.observe(descriptionRef.current);
    return () => {
      intersectionObserver.disconnect();
      resizeObserver.disconnect();
    };
  }, [description, isExpanded, updateAutoHeight]);

  useLayoutEffect(() => {
    if (isExpanded && descriptionRef.current) {
      gsap.fromTo(
        descriptionRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.5 },
      );
    }
  }, [isExpanded]);

  return (
    <div
      className="bg-white/80 rounded-2xl cursor-pointer"
      data-name="Card"
      onClick={onToggle}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onToggle();
        }
      }}
    >
      <div
        className="flex flex-row items-center justify-between p-5 rounded-xl"
        data-name="Content"
      >
        <div className="flex flex-row gap-2" data-name="Label">
          <p className="relative shrink-0  max-sm:text-[26px] font-medium">
            {number}
          </p>
          <p className="relative flex-1  font-medium whitespace-pre-wrap">
            {title}
          </p>
        </div>
        <ButtonPlus
          isExpanded={isExpanded}
          size="lg"
          // className="relative shrink-0 "
        />
      </div>
      {description && (
        <motion.div
          className={cn(
            "transition-all duration-300 overflow-hidden",
            isExpanded
              ? `max-h-(--auto-height)`
              : "max-h-0 opacity-0 invisible",
          )}
          style={
            {
              "--auto-height": autoHeight + "px",
            } as React.CSSProperties
          }
        >
          <div className="overflow-hidden flex flex-col gap-4 px-5 py-3">
            <hr className="border-dotted" />
            <p className="text-left text-[#4f4f4f] text-sm">{description}</p>
          </div>
        </motion.div>
      )}
    </div>
  );
}
