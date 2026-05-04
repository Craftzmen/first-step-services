import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

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
      className={cn(
        className,
        animationClass,
        "motion-reduce:animate-none motion-reduce:opacity-100 max-md:animate-none max-md:opacity-100"
      )}
      style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}
    >
      {children}
    </div>
  )
}
