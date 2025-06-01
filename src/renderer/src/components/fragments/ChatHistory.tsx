import { ChatMessage } from "../elements/ChatMessage"

type Message = {
  isUser: boolean
  text: string
}

type ChatHistoryProps = {
  messages: Message[]
}

export function ChatHistory({ messages }: ChatHistoryProps) {
  return (
    <div className="flex flex-col space-y-3 p-4 overflow-y-auto max-h-[calc(100vh-12rem)] scroll-smooth">
      {messages.map((msg, i) => (
        <ChatMessage key={i} isUser={msg.isUser} text={msg.text} />
      ))}
    </div>
  )
}
