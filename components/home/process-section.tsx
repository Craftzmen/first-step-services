import Link from "next/link"
import { ArrowRightIcon, MessageSquareIcon, PaletteIcon, RocketIcon } from "lucide-react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"

const steps = [
  {
    num: "01",
    icon: MessageSquareIcon,
    title: "Discover",
    desc: "We audit your store, your stack, and your goals — then write a plan that ties scope to outcomes.",
    bullets: ["Stakeholder interviews", "Stack & data audit", "Scope & quote"],
  },
  {
    num: "02",
    icon: PaletteIcon,
    title: "Design",
    desc: "Wireframes, prototypes, and a design system tuned to your brand and proven conversion patterns.",
    bullets: ["Information architecture", "Design system", "High-fidelity prototype"],
  },
  {
    num: "03",
    icon: RocketIcon,
    title: "Deliver",
    desc: "Build, test, and launch with QA and analytics in place — then iterate on what the data tells us.",
    bullets: ["Build & QA", "Analytics & SEO", "Launch & post-launch"],
  },
]

export function ProcessSection() {
  return (
    <SectionWrapper className="relative">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        {/* LEFT: sticky header */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <ScrollReveal>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-amber/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-amber">
                How We Work
              </div>
              <h2 className="mb-5 text-3xl font-bold leading-tight tracking-tight text-navy dark:text-white md:text-4xl lg:text-5xl">
                A simple <br />
                <span className="text-amber">three-step partnership.</span>
              </h2>
              <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
                Same shape every time, sized to fit the work — from a focused theme refresh to a full headless replatform.
              </p>
              <Link
                href="/how-it-works"
                className="mt-8 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-navy hover:text-amber dark:text-white dark:hover:text-amber"
              >
                See the full process
                <span className="flex size-9 items-center justify-center rounded-full border border-navy/15 dark:border-white/15">
                  <ArrowRightIcon className="size-4" />
                </span>
              </Link>
            </ScrollReveal>
          </div>
        </div>

        {/* RIGHT: vertical timeline */}
        <div className="relative lg:col-span-7">
          <div
            aria-hidden
            className="pointer-events-none absolute left-7 top-2 h-[calc(100%-1rem)] w-px bg-navy/15 dark:bg-white/15 md:left-8"
          />

          <div className="space-y-8 md:space-y-10">
            {steps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 120} direction="right">
                <div className="relative flex gap-6 md:gap-8">
                  <div className="relative z-10 flex size-14 shrink-0 items-center justify-center rounded-2xl bg-navy text-white shadow-md dark:bg-amber md:size-16">
                    <step.icon className="size-6 md:size-7" />
                  </div>
                  <div className="flex-1 rounded-2xl border border-navy/10 bg-card p-6 shadow-sm dark:border-white/10 md:p-8">
                    <div className="flex items-baseline gap-3">
                      <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-amber">Step {step.num}</span>
                      <span aria-hidden className="h-px flex-1 bg-navy/10 dark:bg-white/10" />
                    </div>
                    <h3 className="mt-3 text-xl font-bold tracking-tight text-navy dark:text-white md:text-2xl">{step.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">{step.desc}</p>
                    <ul className="mt-5 grid gap-2 sm:grid-cols-3">
                      {step.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-2 text-xs font-medium text-navy/65 dark:text-white/65">
                          <span className="size-1 rounded-full bg-amber" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
