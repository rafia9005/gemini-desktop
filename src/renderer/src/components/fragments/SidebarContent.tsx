import { SidebarItem } from "../elements/SidebarItem"
import { User } from "lucide-react"

export function SidebarContent() {
  return (
    <div className="space-y-1">
      <SidebarItem icon={<User className="w-4 h-4" />} label="Menu" active={true} />
    </div>
  )
}
