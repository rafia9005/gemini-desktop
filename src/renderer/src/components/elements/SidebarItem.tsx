import { ReactNode } from "react"
import { cn } from "@renderer/lib/utils"

interface SidebarItemProps {
  icon: ReactNode
  label: string
  active?: boolean
  onClick?: () => void
}

export function SidebarItem({ icon, label, active, onClick }: SidebarItemProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "flex items-center gap-3 px-4 py-2 rounded-md cursor-pointer transition-colors",
        "text-[hsl(var(--muted-foreground))] hover:bg-[hsl(var(--accent))] hover:text-[hsl(var(--accent-foreground))]",
        active && "bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))]"
      )}
    >
      <div className="text-lg">{icon}</div>
      <span className="text-xs font-medium">{label}</span>
    </div>
  )
}
