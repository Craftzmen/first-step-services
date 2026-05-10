import { SparklesIcon, UsersIcon, StoreIcon, RefreshCwIcon } from "lucide-react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"

const stats = [
  {
    icon: SparklesIcon,
    value: "2026",
    label: "Founded",
    blurb: "In our second year, working with brands across DTC apparel, beauty, and home goods.",
  },
  {
    icon: UsersIcon,
    value: "8y+",
    label: "Combined Experience",
    blurb: "Design and engineering hours from senior team members across Shopify, Woo, and headless.",
  },
  {
    icon: StoreIcon,
    value: "120+",
    label: "Stores Launched",
    blurb: "Storefronts shipped, replatformed, or rebuilt — at speeds from theme refresh to full headless.",
  },
  {
    icon: RefreshCwIcon,
    value: "99%",
    label: "Client Retention",
    blurb: "Most clients keep us on retainer for ongoing growth, performance, and feature work.",
  },
]

export function AboutStats() {
  return (
    <SectionWrapper className="relative">
      <ScrollReveal>
        <div className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-amber/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-amber">
              By The Numbers
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-navy dark:text-white md:text-4xl lg:text-5xl">
              Small team. <span className="text-amber">Big shipping volume.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            A snapshot of where we are today and the work we have shipped together with our partners.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid gap-5 md:grid-cols-2 md:gap-6">
        {stats.map((s, i) => (
          <ScrollReveal key={s.label} delay={i * 100} direction="up">
            <div className="group relative h-full overflow-hidden rounded-3xl border border-navy/10 bg-card p-7 transition hover:border-amber/40 dark:border-white/10 md:p-9">
              <div className="grid w-full grid-cols-[auto_1fr] gap-7">
                <div className="flex flex-col items-start gap-3">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-amber/10 text-amber">
                    <s.icon className="size-5" />
                  </span>
                  <div className="text-5xl font-bold leading-none tracking-tight text-navy dark:text-white md:text-6xl">
                    {s.value}
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-amber">{s.label}</div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">{s.blurb}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  )
}
