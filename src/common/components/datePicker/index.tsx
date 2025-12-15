"use client";

import * as React from "react";
import { ChevronDownIcon } from "lucide-react";
import { Button } from "@/common/components/ui/button";
import { Calendar } from "@/common/components/ui/calendar";
import { Label } from "@/common/components/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/common/components/ui/popover";

export interface DatePickerProps {
  value?: Date | string;
  onChange?: (date?: Date) => void;
  defaultValue?: Date | string;
  name?: string;
  id?: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  /** Optional left icon */
  icon?: React.ReactNode;
}

/** Format date as DD/MM/YYYY */
function formatDisplay(date?: Date) {
  if (!date) return "";
  const d = date.getDate().toString().padStart(2, "0");
  const m = (date.getMonth() + 1).toString().padStart(2, "0");
  const y = date.getFullYear();
  return `${d}/${m}/${y}`;
}

function normalizeDate(v?: string | Date | null): Date | undefined {
  if (!v) return undefined;
  if (v instanceof Date) return isNaN(v.getTime()) ? undefined : v;

  const d = new Date(v);
  return isNaN(d.getTime()) ? undefined : d;
}

export const DatePicker = React.forwardRef<HTMLInputElement, DatePickerProps>(
  (props, forwardedRef) => {
    const {
      value,
      onChange,
      defaultValue,
      name,
      id,
      label,
      placeholder = "Select date",
      disabled,
      className,
      icon,
    } = props;

    const isControlled = value !== undefined;

    const initial = normalizeDate(isControlled ? value : defaultValue);

    const [open, setOpen] = React.useState(false);
    const [internalDate, setInternalDate] = React.useState<Date | undefined>(
      initial
    );
    const [month, setMonth] = React.useState<Date | undefined>(initial);

    React.useEffect(() => {
      if (isControlled) {
        const d = normalizeDate(value);
        setInternalDate(d);
        setMonth(d);
      }
    }, [value, isControlled]);

    const handleSelect = (d?: Date) => {
      if (!isControlled) {
        setInternalDate(d);
        setMonth(d);
      }

      onChange?.(d);
      setOpen(false);
    };

    const selectedDate = isControlled ? normalizeDate(value) : internalDate;

    const display = selectedDate ? formatDisplay(selectedDate) : "";

    const hiddenValue = selectedDate ? selectedDate.toISOString() : "";

    return (
      <div className={`w-full ${className ?? ""}`}>
        {label && (
          <Label htmlFor={id} className="px-1">
            {label}
          </Label>
        )}

        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              id={id}
              type="button"
              variant="outline"
              disabled={disabled}
              className={`w-full h-11 flex items-center justify-between font-normal relative rounded-lg ${
                disabled ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {/* LEFT SECTION: icon + text */}
              <span className="flex items-center gap-2 truncate">
                {icon && <span className="opacity-70">{icon}</span>}
                {display || placeholder}
              </span>

              {/* RIGHT CHEVRON */}
              <ChevronDownIcon className="ml-2 h-4 w-4 shrink-0" />
            </Button>
          </PopoverTrigger>

          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={selectedDate}
              month={month}
              onMonthChange={setMonth}
              onSelect={handleSelect}
              captionLayout="dropdown"
            />
          </PopoverContent>
        </Popover>

        {name && (
          <input
            ref={forwardedRef}
            type="hidden"
            name={name}
            readOnly
            value={hiddenValue}
          />
        )}
      </div>
    );
  }
);

DatePicker.displayName = "DatePicker";

export default DatePicker;
