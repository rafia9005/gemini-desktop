import React, { useState } from "react"
import { InputChat } from "../elements/Input"
import { motion } from "framer-motion"
import { Button } from "../elements/Button"
import { Send } from "lucide-react"

export function InputChatMenu() {
  const [input, setInput] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    setIsSubmitting(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 800))
      setInput("")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mt-4">
      <InputChat
        value={input}
        placeholder="Ask me anything..."
        onChange={(e) => setInput(e.target.value)}
        aria-label="Chat input"
        autoFocus
        disabled={isSubmitting}
      />

      <Button
        type="submit"
        disabled={isSubmitting || !input.trim()}
      >
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

