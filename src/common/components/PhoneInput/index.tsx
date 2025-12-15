"use client";

import React from "react";
import PhoneInputOriginal from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { cn } from "@/common/lib/utils";

export type PhoneInputProps = React.ComponentProps<typeof PhoneInputOriginal>;

export default function PhoneInput({ className, ...props }: PhoneInputProps) {
  return (
    <PhoneInputOriginal
      defaultCountry="NG"
      international
      {...props}
      className={cn(
        "flex rounded-lg h-11 w-full border border-gray-200 px-3.5 text-sm font-inter disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none text-primary",
        className
      )}
    />
  );
}

// 'f',
