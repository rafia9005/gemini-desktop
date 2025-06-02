import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism"
import rehypeRaw from "rehype-raw"

type ChatMessageProps = {
  isUser?: boolean
  text: string
}

export function ChatMessage({ isUser = false, text }: ChatMessageProps) {
  return (
    <div
      className={`group relative max-w-[85%] p-3 rounded-lg whitespace-pre-wrap text-sm
        ${isUser
          ? "bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] self-end rounded-br-none ml-8"
          : "bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] self-start rounded-bl-none mr-8"
        }
        shadow-sm transition-all duration-100
      `}
      style={{ wordBreak: "break-word" }}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          code({ node, className, children, ...props }: any) {
            const inline = props.inline as boolean | undefined

            const match = /language-(\w+)/.exec(className || "")
            return !inline && match ? (
              <SyntaxHighlighter
                style={oneDark}
                language={match[1]}
                PreTag="div"
                {...props}
                customStyle={{
                  padding: "0.75rem",
                  borderRadius: "calc(var(--radius) - 2px)",
                  fontSize: "0.85rem",
                  margin: "0.5rem 0",
                }}
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code
                className={`px-1.5 py-0.5 rounded text-[0.85em] ${
                  isUser
                    ? "bg-[hsl(var(--primary)/0.8)] text-[hsl(var(--primary-foreground))]"
                    : "bg-[hsl(var(--muted))] text-[hsl(var(--foreground))]"
                }`}
                {...props}
              >
                {children}
              </code>
            )
          }
        }}
      >
        {text}
      </ReactMarkdown>
    </div>
  )
}
