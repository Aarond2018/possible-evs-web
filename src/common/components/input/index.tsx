"use client";
import * as React from "react";
import { cn as mergeClassName } from "@/common/lib/utils";
import EyeSlash from "../../icons/EyeSlash";
import EyeOpen from "../../icons/EyeOpen";
import Search from "../../icons/Search";
import { useFormField } from "../form";

type InputClassName = "container" | "label" | "input" | "error";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "prefix"> {
  className?: string;
  currency?: boolean;
  classNames?: Partial<Record<InputClassName, string>>;
  suffix?: React.ReactNode;
  prefix?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, name, type, currency, suffix, prefix, ...props }, ref) => {
    const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
    const [inputValue, setInputValue] = React.useState<string>("");
    const { error } = useFormField();

    const handlePasswordToggle = (
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
      e.preventDefault();
      setIsPasswordVisible((prev) => !prev);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      let value = e.target.value;

      if (currency) {
        // Remove non-numeric characters except dot
        value = value.replace(/[^0-9]/g, "");
        setInputValue(new Intl.NumberFormat("en-US").format(Number(value)));
      } else {
        setInputValue(value);
      }

      // Call the original onChange handler if provided
      if (props.onChange) {
        // Pass the original numeric value to onChange event
        const event = {
          ...e,
          target: {
            ...e.target,
            value: currency ? value.replace(/[^0-9]/g, "") : value,
          },
        };
        props.onChange(event as React.ChangeEvent<HTMLInputElement>);
      }
    };

    return (
      <div
        className={mergeClassName(
          "flex-col flex w-full",
          props.classNames?.container || ""
        )}
      >
        <div className="relative w-full">
          {prefix && (
            <div className="absolute left-3.5 top-1/2 -translate-y-1/2">
              {prefix}
            </div>
          )}
          <input
            className={mergeClassName(
              "flex rounded-lg h-11 w-full border border-gray-200 px-3.5 py-2 text-sm font-inter file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:cursor-not-allowed disabled:bg-gray-150 disabled:text-gray-400 placeholder:text-sm focus:outline-none placeholder:text-gray-400 text-primary",
              prefix || type?.includes("search") ? "pl-11" : "",
              type?.includes("password") ? "pr-10" : "",
              props.classNames?.input || className,
              error ? "" : ""
            )}
            ref={ref}
            name={name}
            type={isPasswordVisible ? "text" : type}
            value={inputValue}
            onChange={handleChange}
            {...props}
          />
          {suffix}
          {type?.includes("search") && (
            <div className="absolute left-3.5 top-1/2 -translate-y-1/2">
              <Search className="text-gray-400" />
            </div>
          )}
          {type?.includes("password") && (
            <button
              className="absolute right-3 top-[33%]"
              onClick={handlePasswordToggle}
              type="button"
            >
              {!isPasswordVisible ? (
                <EyeOpen className="text-sm text-gray-700 hover:text-gray-900" />
              ) : (
                <EyeSlash className="text-sm text-gray-700 hover:text-gray-900" />
              )}
            </button>
          )}
        </div>
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
