import { cn } from "@renderer/lib/utils"
import { ButtonHTMLAttributes, ReactNode, forwardRef } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
  icon?: ReactNode
  variant?: "default" | "outline" | "ghost" | "glass" | "gradient" | "neutral" | "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error" | "dash" | "soft" | "link"
  size?: "xs" | "sm" | "md" | "lg" | "xl"
  shape?: "default" | "square" | "circle" | "wide" | "block"
  isLoading?: boolean
  active?: boolean
  className?: string
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      icon,
      variant = "default",
      size = "md",
      shape = "default",
      isLoading = false,
      active = false,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyle = cn(
      "btn",
      "inline-flex items-center justify-center gap-2 font-medium transition-all",
      "focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))] focus:ring-offset-2",
      "disabled:btn-disabled disabled:opacity-70 disabled:cursor-not-allowed",
      "active:scale-[0.98] transition-transform duration-150 ease-out",
      "whitespace-nowrap select-none",
      active && "btn-active"
    )

    const sizes = {
      xs: "btn-xs px-2 py-1 text-xs",
      sm: "btn-sm px-3 py-1.5 text-xs",
      md: "btn-md px-4 py-2 text-sm",
      lg: "btn-lg px-6 py-3 text-base",
      xl: "btn-xl px-8 py-4 text-lg",
    }

    const shapes = {
      default: "",
      square: "btn-square aspect-square p-0",
      circle: "btn-circle aspect-square rounded-full p-0",
      wide: "btn-wide px-8",
      block: "btn-block w-full",
    }

    const variants = {
      default: cn(
        "bg-[hsl(var(--background))] text-[hsl(var(--foreground))]",
        "border border-[hsl(var(--border))]",
        "hover:bg-[hsl(var(--background))]/90",
        "shadow-sm"
      ),
      neutral: "btn-neutral",
      primary: "btn-primary",
      secondary: "btn-secondary",
      accent: "btn-accent",
      info: "btn-info",
      success: "btn-success",
      warning: "btn-warning",
      error: "btn-error",
      outline: cn(
        "btn-outline",
        "bg-transparent border border-[hsl(var(--border))]",
        "text-[hsl(var(--foreground))]",
        "hover:bg-[hsl(var(--accent))]/10",
        "shadow-sm"
      ),
      dash: "btn-dash",
      soft: "btn-soft",
      ghost: cn(
        "btn-ghost",
        "bg-transparent text-[hsl(var(--foreground))]",
        "hover:bg-[hsl(var(--accent))]/10",
        "shadow-none"
      ),
      glass: cn(
        "bg-[hsl(var(--background))]/30 backdrop-blur-md",
        "border border-[hsl(var(--border))]/30",
        "hover:bg-[hsl(var(--background))]/50",
        "text-[hsl(var(--foreground))]"
      ),
      gradient: cn(
        "bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--primary))]/80",
        "text-white",
        "hover:brightness-110",
        "shadow-md hover:shadow-lg"
      ),
      link: "btn-link",
    }

    return (
      <button
        ref={ref}
        className={cn(
          baseStyle,
          sizes[size],
          shapes[shape],
          variants[variant],
          className
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <span className="w-4 h-4 animate-spin">↻</span>
        ) : icon ? (
          <span className={cn("w-4 h-4", children ? "" : "mx-0.5")}>{icon}</span>
        ) : null}
        {children && <span>{children}</span>}
      </button>
    )
  }
)

Button.displayName = "Button"
