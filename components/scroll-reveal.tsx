import type { ReactNode } from "react"

interface ScrollRevealProps {
  children: ReactNode
  direction?: "up" | "left" | "right" | "fade" | "scale"
  delay?: number
  className?: string
  threshold?: number
}

export function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
  threshold: _threshold = 0.15,
}: ScrollRevealProps) {
  const animationClass = {
    up: "animate-fade-in-up",
    left: "animate-fade-in-left",
    right: "animate-fade-in-right",
    fade: "animate-fade-in",
    scale: "animate-scale-in",
  }[direction]

  return (
    <div
      className={`${className} ${animationClass}`}
      style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}
    >
      {children}
    </div>
  )
}
