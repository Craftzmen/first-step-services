"use client"

import * as React from "react"

interface ScrollRevealProps {
  children: React.ReactNode
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
  threshold = 0.15,
}: ScrollRevealProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  const animationClass = {
    up: "animate-fade-in-up",
    left: "animate-fade-in-left",
    right: "animate-fade-in-right",
    fade: "animate-fade-in",
    scale: "animate-scale-in",
  }[direction]

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? animationClass : "opacity-0"}`}
      style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}
    >
      {children}
    </div>
  )
}
