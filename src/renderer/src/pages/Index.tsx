import { useState } from "react"
import { ModeToggle } from "@renderer/components/mode-toggle-theme"
import SidebarLayout from "@renderer/components/layouts/SidebarLayout"
import { WelcomeScreen } from "@renderer/components/fragments/WelcomeScreen"
import { InputChatMenu } from "@renderer/components/fragments/InputChatMenu"

export default function Index() {
  const [hasInteracted, setHasInteracted] = useState(false)

  const handleFirstInput = () => {
    if (!hasInteracted) setHasInteracted(true)
  }

  return (
    <SidebarLayout>
      <div className="flex flex-col h-[calc(100vh-2rem)] justify-between">
        <div className="flex justify-end mb-4">
          <ModeToggle />
        </div>
        <div className="flex-grow">
          {!hasInteracted && <WelcomeScreen onFirstInput={handleFirstInput} />}
        </div>
        <div className="p-4">
          <InputChatMenu onFirstInput={handleFirstInput} />
        </div>
      </div>
    </SidebarLayout>
  )
}

