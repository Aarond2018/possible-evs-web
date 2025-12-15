import { cn } from "@/common/lib/utils";
import React, { ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
  fullWidth?: boolean;
};

export default function MaxWidthWrapper({
  className,
  children,
  fullWidth,
}: Props) {
  return (
    <div
      className={cn(
        "w-full px-5",
        !fullWidth && "max-w-screen-xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
}
