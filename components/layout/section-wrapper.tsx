import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  containerClassName?: string
  id?: string
  background?: "default" | "muted" | "navy" | "amber" | "white"
  padding?: "default" | "sm" | "lg" | "none"
}

const bgMap = {
  default: "",
  muted: "bg-muted/50",
  navy: "bg-navy text-white",
  amber: "bg-gradient-to-r from-amber to-amber-light text-navy",
  white: "bg-white dark:bg-card",
}

const paddingMap = {
  default: "py-20 md:py-24",
  sm: "py-12 md:py-16",
  lg: "py-24 md:py-32",
  none: "",
}

export function SectionWrapper({
  children,
  className,
  containerClassName,
  id,
  background = "default",
  padding = "default",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(bgMap[background], paddingMap[padding], className)}
    >
      <div className={cn("mx-auto max-w-[1200px] px-5 md:px-8", containerClassName)}>
        {children}
      </div>
    </section>
  )
}
