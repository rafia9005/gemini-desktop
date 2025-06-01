import { ModeToggle } from "@renderer/components/mode-toggle-theme"
import SidebarLayout from "@renderer/components/layouts/SidebarLayout"
import { WelcomeScreen } from "@renderer/components/fragments/WelcomeScreen"

export default function Index() {
  return (
    <SidebarLayout>
      <div className="flex justify-end mb-4">
        <ModeToggle />
      </div>
      <div>
        <WelcomeScreen/>
      </div>
    </SidebarLayout>
  )
}

