import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const ButtonGradient = ({
  text,
  size,
  className,
}: {
  text: string;
  size:
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
    <Button
      size={size}
      className={cn(
        "rounded-full  border-gray-300 border-b-2 border-b-[#F04711]",
        className,
      )}
    >
      {text}
    </Button>
  );
};

export default ButtonGradient;
