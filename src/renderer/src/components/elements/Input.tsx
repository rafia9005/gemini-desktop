import { InputHTMLAttributes, forwardRef } from "react"
import { cn } from "@renderer/lib/utils"
import { motion } from "framer-motion"

interface InputChatProps extends InputHTMLAttributes<HTMLInputElement> { }

export const InputChat = forwardRef<HTMLInputElement, InputChatProps>(
  ({ className, ...props }, ref) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="relative w-full"
      >
        <input
          ref={ref}
          type="text"
          className={cn(
            "w-full input border-2 border-[hsl(var(--border))] bg-[hsl(var(--card))] px-5 py-3 text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] focus:border-transparent backdrop-blur-sm transition-all duration-300 shadow-sm hover:shadow-md text-xs",
            "dark:bg-[hsl(var(--card)/80%)]",
            className
          )}
          {...props}
        />
      </motion.div>
    )
  }
)
