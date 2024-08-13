import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { Spin } from "@/shared/components";
import { cn } from "@/shared/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md  transition-colors focus-visible:outline-none   disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        unStyled: "",
        default: "!text-content-inverse bg-primary  hover:bg-primary/90 ",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        tertiary: "bg-surface-tertiary text-content-primary",
        outline: "border border-input bg-background ",
        secondary:
          "bg-surface-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "size-10",
      },
      fullWidth: {
        true: "w-full",
      },
      rounded: {
        default: "rounded-md",
        xs: "rounded-xs",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
      },
      roundedFull: {
        true: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  roundedFull?: boolean;
  fullWidth?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      loading,
      disabled,
      asChild = false,
      children,
      fullWidth,
      roundedFull,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        disabled={loading || disabled}
        className={cn(
          buttonVariants({ variant, size, fullWidth, roundedFull, className }),
        )}
        ref={ref}
        {...props}
      >
        {children}
        {loading && <Spin className="ml-2" />}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
