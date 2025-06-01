import { ReactNode } from "react"
import { SidebarContent } from "../fragments/SidebarContent"

interface SidebarLayoutProps {
  children: ReactNode
}

export default function SidebarLayout({ children }: SidebarLayoutProps) {
  return (
    <div className="flex h-screen">
      <aside className="fixed top-0 left-0 h-full w-56 bg-[hsl(var(--background))] border-r border-[hsl(var(--border))] p-4">
        <div className="text-xl font-bold text-[hsl(var(--foreground))] mb-6">Gemini Desktop</div>
        <SidebarContent />
      </aside>

      <main
        className="flex-1 ml-56 bg-[hsl(var(--muted))] p-6 text-[hsl(var(--foreground))] overflow-auto"
        style={{
          height: "100vh",
          scrollbarWidth: "none",
          msOverflowStyle: "none"
        }}
      >
        {children}
      </main>

    </div>
  )
}
