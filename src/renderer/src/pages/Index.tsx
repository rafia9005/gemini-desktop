import { useState } from "react"
import { ModeToggle } from "@renderer/components/mode-toggle-theme"
import SidebarLayout from "@renderer/components/layouts/SidebarLayout"
import { InputChatMenu } from "@renderer/components/fragments/InputChatMenu"
import { ChatHistory } from "@renderer/components/fragments/ChatHistory"

export default function Index() {
  const [hasInteracted, setHasInteracted] = useState(false)
  const [messages, setMessages] = useState<
    { isUser: boolean; text: string }[]
  >([])

  const handleFirstInput = () => {
    if (!hasInteracted) setHasInteracted(true)
  }

  const handleNewMessage = (userMessage: string, responseMessage: string) => {
    setMessages((prev) => [
      ...prev,
      { isUser: true, text: userMessage },
      { isUser: false, text: responseMessage },
    ])
  }

  return (
    <SidebarLayout>
      <div className="flex flex-col h-[calc(100vh-2rem)] justify-between">
        <div className="flex justify-end mb-4">
          <ModeToggle />
        </div>
        <div className="flex-grow overflow-hidden">
          <ChatHistory messages={messages} />
        </div>
        <div className="p-4">
          <InputChatMenu onFirstInput={handleFirstInput} onNewMessage={handleNewMessage} />
        </div>
      </div>
    </SidebarLayout>
  )
}

