import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/common/lib/utils";
import Refresh2 from "../../icons/Refresh2";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-x-1.5 whitespace-nowrap rounded-lg text-sm leading-17 border cursor-pointer font-medium disabled:cursor-not-allowed focus-visible:outline-none",
  {
    variants: {
      variant: {
        default:
          "text-white bg-primary border-primary hover:bg-primary/90 disabled:bg-primary/50 disabled:border-transparent",
        outline: "text-primary border-gray-200 disabled:text-primary/50",
        ghost: "text-primary border-transparent",
        secondary: "",
        outlineSecondary:
          "text-primary border-gray-200 disabled:text-primary/50 bg-white hover:bg-white/90 transition-all",
        ghostSecondary: "",
      },
      size: {
        default: "py-2 px-5 h-11 rounded-xl",
        sm: "h-10 px-5 py-2.5 rounded-lg",
        xl: "h-12 px-5 py-2.5 rounded-xl",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      loading,
      disabled,
      children,
      icon,
      iconPosition = "left",
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    const renderIcon = loading ? (
      <Refresh2 size={16} className="animate-spin" />
    ) : (
      icon
    );

    return (
      <Comp
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {iconPosition === "left" && renderIcon}
        {children}
        {iconPosition === "right" && renderIcon}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
