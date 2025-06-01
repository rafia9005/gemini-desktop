import React, { useState } from "react"
import { InputChat } from "../elements/Input"
import { motion } from "framer-motion"
import { Button } from "../elements/Button"
import { Send } from "lucide-react"
import { storeGemini } from "@renderer/stores/stores"

interface InputChatMenuProps {
  onFirstInput?: () => void
  onNewMessage?: (userMessage: string, responseMessage: string) => void
}

export function InputChatMenu({ onFirstInput, onNewMessage }: InputChatMenuProps) {
  const [input, setInput] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    if (onFirstInput) onFirstInput()

    setIsSubmitting(true)
    try {
      const result = await storeGemini(input)
      const responseText =
        result?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || "No response"

      if (onNewMessage) {
        onNewMessage(input, responseText)
      }

      setInput("")
    } catch (error) {
      console.error("Error submitting input:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <InputChat
        value={input}
        placeholder="Ask me anything..."
        onChange={(e) => setInput(e.target.value)}
        aria-label="Chat input"
        autoFocus
        disabled={isSubmitting}
      />

      <Button type="submit" disabled={isSubmitting || !input.trim()}>
        {isSubmitting ? (
          <span key="loading" className="loading loading-spinner loading-sm" />
        ) : (
          <motion.span
            key="send"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Send className="h-4 w-4" />
          </motion.span>
        )}
      </Button>
    </form>
  )
}
