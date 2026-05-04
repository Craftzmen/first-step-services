import type { ComponentPropsWithoutRef, ReactNode } from "react"
import { cn } from "@/lib/utils"

type ScrollRevealProps = ComponentPropsWithoutRef<"div"> & {
  children: ReactNode
  /** @deprecated No-op; animations removed */
  direction?: "up" | "left" | "right" | "fade" | "scale"
  /** @deprecated No-op; animations removed */
  delay?: number
  /** @deprecated No-op; animations removed */
  threshold?: number
}

export function ScrollReveal({
  children,
  className,
  direction: _direction,
  delay: _delay,
  threshold: _threshold,
  ...rest
}: ScrollRevealProps) {
  void _direction
  void _delay
  void _threshold
  return (
    <div className={cn(className)} {...rest}>
      {children}
    </div>
  )
}
