"use client";

import * as React from "react";
import { cn as mergeClassName } from "@/common/lib/utils";
import { useFormField } from "../form";

type TextareaClassName = "container" | "textarea" | "error";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  classNames?: Partial<Record<TextareaClassName, string>>;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, rows = 4, ...props }, ref) => {
    const { formItemId } = useFormField();

    return (
      <div
        className={mergeClassName(
          "flex flex-col w-full",
          props.classNames?.container || ""
        )}
      >
        <textarea
          id={formItemId}
          ref={ref}
          rows={rows}
          className={mergeClassName(
            "rounded-lg border border-gray-200 px-3.5 py-2 text-sm placeholder:text-gray-400 placeholder:text-sm font-inter text-primary focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
            props.classNames?.textarea || className
          )}
          {...props}
        />
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };
