import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";

const sizeClasses: Record<string, string> = {
  xs: "h-6 px-2 text-xs",
  sm: "h-7 px-2.5 text-xs",
  default: "h-8 px-3 text-sm",
  lg: "h-9 px-3.5 text-sm",
  xl: "h-12 px-5 text-base font-semibold",
};

const ButtonGradient = ({
  text,
  size = "default",
  className,
}: {
  text: string;
  size?:
    | "sm"
    | "lg"
    | "xl"
    | "default"
    | "xs"
    | "icon"
    | "icon-xs"
    | "icon-sm"
    | "icon-lg"
    | null
    | undefined;
  className?: string;
}) => {
  return (
    <button
      type="button"
      className={cn(
        "cursor-pointer inline-flex items-center justify-center font-medium bg-black text-white hover:bg-neutral-800 transition-colors rounded-full border-gray-300 border-b-2 border-b-[#F04711]",
        size ? sizeClasses[size] || "h-8 px-3 text-sm" : "h-8 px-3 text-sm",
        className,
      )}
    >
      {text}
    </button>
  );
};

export default ButtonGradient;

export const ButtonPlus = ({
  isExpanded,
  className,
}: {
  isExpanded: boolean;
  size?:
    | "sm"
    | "lg"
    | "xl"
    | "default"
    | "xs"
    | "icon"
    | "icon-xs"
    | "icon-sm"
    | "icon-lg"
    | null
    | undefined;
  className?: string;
}) => {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "cursor-pointer inline-flex shrink-0 items-center justify-center size-9 rounded-full border border-gray-300 border-b-2 border-b-[#F04711] bg-black text-white transition-colors duration-300",
        isExpanded ? "border-[#F04711]" : "",
        className,
      )}
    >
      <Plus className="size-4" />
    </div>
  );
};
