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
  muted: "bg-muted/40",
  navy: "bg-navy text-white",
  amber: "bg-gradient-to-br from-amber via-amber-light to-amber text-navy",
  white: "bg-white dark:bg-card",
}

const paddingMap = {
  default: "py-20 md:py-28",
  sm: "py-12 md:py-16",
  lg: "py-28 md:py-36",
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
      className={cn(
        bgMap[background],
        paddingMap[padding],
        "[content-visibility:auto] supports-[content-visibility:auto]:[contain-intrinsic-size:auto_520px]",
        className
      )}
    >
      <div className={cn("mx-auto max-w-[1200px] px-5 md:px-8", containerClassName)}>
        {children}
      </div>
    </section>
  )
}
