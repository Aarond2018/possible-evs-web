"use client";

import * as React from "react";
import { ChevronDownIcon } from "lucide-react";
import { Button } from "@/common/components/ui/button";
import { Label } from "@/common/components/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/common/components/ui/popover";

export interface TimePickerProps {
  value?: string | Date;
  onChange?: (time?: string) => void;
  defaultValue?: string | Date;
  name?: string;
  id?: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  icon?: React.ReactNode;
}

// Convert input value to "HH:mm AM/PM"
function normalizeDisplay(value?: string | Date | null): string | undefined {
  if (!value) return undefined;

  if (typeof value === "string") {
    const match = value.match(/(\d{1,2}):(\d{2})\s*([AaPp][Mm])?/);
    if (!match) return undefined;

    const [_, h, m, ap] = match;
    let hour = Number(h);
    const minute = Number(m);
    const period = ap ? ap.toUpperCase() : hour >= 12 ? "PM" : "AM";

    if (!ap) {
      // Convert 24h → 12h if user passed "18:30"
      if (hour === 0) {
        hour = 12;
      } else if (hour > 12) {
        hour = hour - 12;
      }
    }

    return `${hour}:${minute.toString().padStart(2, "0")} ${period}`;
  }

  if (value instanceof Date) {
    let hour = value.getHours();
    const minute = value.getMinutes().toString().padStart(2, "0");
    const period = hour >= 12 ? "PM" : "AM";

    hour = hour % 12 || 12;

    return `${hour}:${minute} ${period}`;
  }

  return undefined;
}

export const TimePicker = React.forwardRef<HTMLInputElement, TimePickerProps>(
  (props, forwardedRef) => {
    const {
      value: controlledValue,
      onChange,
      defaultValue,
      name,
      id,
      label,
      placeholder = "Select time",
      disabled,
      className,
      icon,
    } = props;

    const isControlled = controlledValue !== undefined;
    const initial = normalizeDisplay(
      isControlled ? controlledValue : defaultValue
    );
    const [open, setOpen] = React.useState(false);
    const [display, setDisplay] = React.useState<string | undefined>(initial);

    React.useEffect(() => {
      if (isControlled) setDisplay(normalizeDisplay(controlledValue));
    }, [controlledValue, isControlled]);

    // Parse display → hour, minute, period
    const parsed = React.useMemo(() => {
      if (!display) return { h: "12", m: "00", p: "AM" };

      const match = display.match(/(\d{1,2}):(\d{2})\s(AM|PM)/);
      if (!match) return { h: "12", m: "00", p: "AM" };

      return { h: match[1], m: match[2], p: match[3] };
    }, [display]);

    const [selectedHour, setSelectedHour] = React.useState(parsed.h);
    const [selectedMinute, setSelectedMinute] = React.useState(parsed.m);
    const [period, setPeriod] = React.useState(parsed.p);

    React.useEffect(() => {
      setSelectedHour(parsed.h);
      setSelectedMinute(parsed.m);
      setPeriod(parsed.p);
    }, [parsed]);

    const handleConfirm = () => {
      const formatted = `${Number(selectedHour)}:${selectedMinute} ${period}`;

      setDisplay(formatted);
      onChange?.(formatted);
      setOpen(false);
    };

    // 12-hour hours list
    const hours = Array.from({ length: 12 }, (_, i) => (i + 1).toString());

    // Minutes list: 00–59
    const minutes = Array.from({ length: 60 }, (_, i) =>
      i.toString().padStart(2, "0")
    );

    return (
      <div className={`w-full ${className ?? ""}`}>
        {label && <Label htmlFor={id}>{label}</Label>}

        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              id={id}
              variant="outline"
              disabled={disabled}
              type="button"
              className="w-full justify-between h-11 font-normal rounded-lg"
            >
              <div className="flex items-center gap-2">
                {icon && <span className="text-muted-foreground">{icon}</span>}
                <span className={`${display ? "" : "text-muted-foreground"}`}>
                  {display || placeholder}
                </span>
              </div>
              <ChevronDownIcon className="text-muted-foreground" />
            </Button>
          </PopoverTrigger>

          <PopoverContent className="p-3 w-auto">
            <div className="flex items-center gap-3">
              {/* HOUR */}
              <select
                className="border rounded-md p-1 text-sm"
                value={selectedHour}
                onChange={(e) => setSelectedHour(e.target.value)}
              >
                {hours.map((h) => (
                  <option key={h} value={h}>
                    {h}
                  </option>
                ))}
              </select>

              <span>:</span>

              {/* MINUTE */}
              <select
                className="border rounded-md p-1 text-sm"
                value={selectedMinute}
                onChange={(e) => setSelectedMinute(e.target.value)}
              >
                {minutes.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>

              {/* AM / PM */}
              <select
                className="border rounded-md p-1 text-sm"
                value={period}
                onChange={(e) => setPeriod(e.target.value as "AM" | "PM")}
              >
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </select>

              <Button size="sm" onClick={handleConfirm}>
                OK
              </Button>
            </div>
          </PopoverContent>
        </Popover>

        {name && (
          <input
            type="hidden"
            name={name}
            ref={forwardedRef}
            value={display ?? ""}
            readOnly
          />
        )}
      </div>
    );
  }
);

TimePicker.displayName = "TimePicker";

export default TimePicker;
