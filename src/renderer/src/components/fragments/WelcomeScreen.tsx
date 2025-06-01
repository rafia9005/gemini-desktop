import React, { useState } from "react"
import { InputChat } from "../elements/Input"
import { motion } from "framer-motion"
import { cn } from "@renderer/lib/utils"

export function WelcomeScreen() {
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
    <div className="min-h-screen flex items-center justify-center p-2">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-xl w-full mx-auto p-4 rounded-xl bg-gradient-to-br from-[hsl(var(--card))] to-[hsl(var(--card)/70%)] border border-[hsl(var(--border))] shadow-lg backdrop-blur-md"
      >
        <div className="text-center space-y-4">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h1 className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary)/70%)] mb-1">
              Welcome to Your AI Assistant
            </h1>
            <p className="text-sm text-[hsl(var(--muted-foreground))]">
              Ask me anything, and I'll try to help!
            </p>
          </motion.div>

          <form onSubmit={handleSubmit} className="flex gap-2 mt-4">
            <InputChat
              value={input}
              onChange={(e) => setInput(e.target.value)}
              aria-label="Chat input"
              autoFocus
              disabled={isSubmitting}
              className="text-sm px-3 py-2"
            />

            <motion.button
              type="submit"
              disabled={isSubmitting || !input.trim()}
              className={cn(
                "bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary)/80%)] text-[hsl(var(--primary-foreground))] rounded-lg px-4 py-2 font-semibold shadow-md hover:shadow-lg transition-all text-sm",
                "disabled:opacity-50 disabled:cursor-not-allowed",
                "focus:ring-2 focus:ring-offset-2 focus:ring-[hsl(var(--primary))] focus:outline-none"
              )}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? (
                <motion.span
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2"
                >
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    className="block w-3 h-3 border-2 border-white border-t-transparent rounded-full"
                  />
                  Sending...
                </motion.span>
              ) : (
                <motion.span
                  key="send"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  Send
                </motion.span>
              )}
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  )
}

