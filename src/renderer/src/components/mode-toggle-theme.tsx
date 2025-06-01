import { Moon, Sun } from "lucide-react"
import { useTheme } from "./theme-provider"
import { useEffect, useState } from "react"

export function ModeToggle() {
  const { setTheme, theme } = useTheme()
  const [currentTheme, setCurrentTheme] = useState("light")

  useEffect(() => {
    setCurrentTheme(theme)
  }, [theme])

  const toggleTheme = () => {
    const newTheme = currentTheme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    setCurrentTheme(newTheme)
  }

  return (
    <button
      onClick={toggleTheme}
      className={`
        p-1 rounded-sm
        bg-[hsl(var(--background)/80%)]
        text-[hsl(var(--foreground))]
        border border-[hsl(var(--border)/30%)]
        shadow-sm
        transition-all duration-200 ease-out
        relative overflow-hidden
        active:scale-95
      `}
      aria-label="Toggle color scheme"
    >
      <div className="relative w-4 h-4">
        <Sun
          className={`
            absolute w-4 h-4 transition-all duration-300
            ${currentTheme === "dark" ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"}
          `}
        />
        <Moon
          className={`
            absolute w-4 h-4 transition-all duration-300
            ${currentTheme === "light" ? "opacity-100 rotate-0" : "opacity-0 rotate-90"}
          `}
        />
      </div>
    </button>
  )
}
