import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden group",
  {
    variants: {
      variant: {
        default: "bg-tech-gradient text-white hover:scale-105 shadow-glow-primary hover:shadow-glow-accent",
        hero: "bg-tech-gradient text-white hover:scale-105 shadow-glow-primary hover:shadow-glow-accent px-8 py-4 text-lg font-semibold rounded-xl",
        glass: "backdrop-blur-glass border border-white/20 text-foreground hover:bg-white/10 hover:scale-105",
        outline: "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:scale-105",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:scale-105",
        ghost: "text-foreground hover:bg-white/10 hover:scale-105",
        link: "text-primary underline-offset-4 hover:underline hover:text-accent",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-lg px-8",
        xl: "h-14 rounded-xl px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
