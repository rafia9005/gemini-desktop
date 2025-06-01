import { motion } from "framer-motion"
import { InputChatMenu } from "./InputChatMenu"

export function WelcomeScreen() {
  return (
    <div className="min-h-screen flex items-center justify-center p-2">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-xl w-full mx-auto p-4 rounded-sm bg-gradient-to-br from-[hsl(var(--card))] to-[hsl(var(--card)/70%)] border border-[hsl(var(--border))] shadow-lg backdrop-blur-md"
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
          <InputChatMenu />
        </div>
      </motion.div>
    </div>
  )
}

