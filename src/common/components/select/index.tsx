import React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { cn as mergeClassName } from "@/common/lib/utils";
import LoadScreen from "../loadscreen";
import { useFormField } from "../form";
// import { toSentenceCase } from '@/common/utils/string';

/* Uninstall lucide react later and rely solely on redix... */
import { Check, ChevronDown, ChevronUp } from "lucide-react";

type ClassName = "trigger" | "content" | "icon";

interface Iselect
  extends Omit<
    React.ComponentPropsWithoutRef<typeof SelectPrimitive.Root>,
    "className" | "onValueChange"
  > {
  onChange?: (e: string) => void;
  id?: string;
  className?: string;
  classNames?: Partial<Record<ClassName, string>>;
  placeholder?: string;
  loading?: boolean;
  selectedLabel?: string;
  prefix?: string; // Add prefix prop
}
export const Select = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  Iselect
>(({ children, loading, prefix, ...props }, forwardedRef) => {
  const error = useFormField()?.error;

  return (
    <SelectPrimitive.Root
      {...props}
      onValueChange={(value) => props.onChange?.(value)} // Ensure we pass only the value, not an event
      value={props.value}
    >
      <div className="relative">
        <div className="flex items-center gap-x-3">
          <SelectPrimitive.Trigger
            disabled={props.disabled || loading}
            id={props.id}
            className={mergeClassName(
              "flex rounded-lg h-11 w-full border border-gray-200 px-3.5 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:cursor-not-allowed disabled:opacity-50 placeholder:text-sm focus:outline-none placeholder:text-gray-400 text-primary cursor-pointer",
              !props.value && props?.placeholder ? "text-sm" : "",
              props.classNames?.trigger,
              error ? "" : ""
            )}
            ref={forwardedRef}
            name={props.name}
            value={props.value}
          >
            <div className="flex items-center w-full">
              {prefix && <span className="mr-2 text-sm">{prefix}</span>}
              {/* <SelectPrimitive.Value
                placeholder={
                  props.selectedLabel ||
                  (props.value
                    ? toSentenceCase(props.value)
                    : props.placeholder) ||
                  ''
                }
                className={mergeClassName(
                  'text-sm',
                  !props.selectedLabel && props?.placeholder ? '' : '',
                  props.classNames?.trigger
                )}
              >
                {props.selectedLabel ||
                  (props.value
                    ? toSentenceCase(props.value)
                    : props.placeholder) ||
                  ''}
              </SelectPrimitive.Value> */}
              <SelectPrimitive.Value
                placeholder={props.placeholder ?? ""}
                className={mergeClassName("text-sm", props.classNames?.trigger)}
              />
            </div>

            <SelectPrimitive.Icon
              className={mergeClassName(
                // "absolute top-1/2 right-3 -translate-y-1/2 ",
                props.classNames?.icon
              )}
            >
              {loading ? (
                <LoadScreen size={16} className="bg-transparent" />
              ) : (
                <ChevronDown />
              )}
            </SelectPrimitive.Icon>
          </SelectPrimitive.Trigger>
        </div>
      </div>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          className={mergeClassName(
            "z-60 bg-white py-1 px-0.5 rounded-lg border border-gray-200",
            props.classNames?.content
          )}
        >
          <SelectPrimitive.ScrollUpButton className="select-scroll-btn flex justify-center">
            <ChevronUp />
          </SelectPrimitive.ScrollUpButton>

          <SelectPrimitive.Viewport className="">
            {children}
          </SelectPrimitive.Viewport>

          <SelectPrimitive.ScrollDownButton className="select-scroll-btn flex justify-center">
            <ChevronDown />
          </SelectPrimitive.ScrollDownButton>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
});

Select.displayName = SelectPrimitive.Root.displayName;

export const Option = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ children, className, value, ...props }, forwardedRef) => {
  return (
    <SelectPrimitive.Item
      {...props}
      className={mergeClassName(
        "flex cursor-pointer items-center justify-between px-4 py-1 text-sm font-medium capitalize  hover:bg-gray-100 hover:text-primary focus:outline-none focus:bg-gray-100",
        className
      )}
      value={value}
      ref={forwardedRef}
    >
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>

      <SelectPrimitive.ItemIndicator>
        <Check />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  );
});

Option.displayName = SelectPrimitive.Item.displayName;
