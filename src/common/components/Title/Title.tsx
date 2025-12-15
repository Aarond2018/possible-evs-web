import { cn } from "@/common/lib/utils";
import { TitleProps } from "./type";

const Title = ({ tag = "p", small, className, ...props }: TitleProps) => {
  const Tag = tag;

  return (
    <Tag
      {...props}
      className={cn(
        "text-gray-primary text-wrap",
        tag === "h1" ? "text-[2rem] leading-10" : "",
        tag === "h2" ? "text-[1.75rem] leading-8" : "",
        tag === "h3" ? "text-2xl" : "",
        tag === "h4" ? "text-base" : "",
        tag === "h5" ? "text-sm" : "",
        tag === "p" || tag === "span" ? "text-sm" : "",
        small ? "text-xs" : "",
        tag.includes("h") ? "font-bold" : "font-normal",
        className
      )}
    />
  );
};

export default Title;
