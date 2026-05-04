import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"

const steps = [
  {
    num: "01",
    title: "Strategic Discovery",
    desc: "A comprehensive audit of your vehicle's telemetry data to establish a precise performance baseline.",
  },
  {
    num: "02",
    title: "System Diagnostics",
    desc: "Advanced deep-level analysis to isolate micro-anomalies that impede peak mechanical output.",
  },
  {
    num: "03",
    title: "Precision Execution",
    desc: "Targeted technical intervention using aerospace-grade calibration and rigorous engineering standards.",
  },
]

export function ProcessSection() {
  return (
    <SectionWrapper className="relative overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -z-10 hidden h-px w-[80%] -translate-x-1/2 bg-navy/10 lg:block dark:bg-white/10" />

      <ScrollReveal>
        <div className="mb-12 text-center md:mb-16">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-amber/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-amber">
            The Methodology
          </div>
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-navy dark:text-white md:text-3xl">
            Initiate Peak <span className="text-amber">Performance.</span>
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid gap-10 lg:grid-cols-3 lg:gap-8">
        {steps.map((step, i) => (
          <ScrollReveal key={step.num} delay={i * 150} direction="up">
            <div className="relative">
              <div className="pointer-events-none absolute -left-3 -top-10 text-5xl font-bold text-navy/[0.06] dark:text-white/[0.08] md:text-6xl">
                {step.num}
              </div>

              <div className="relative space-y-4 pt-10">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-navy text-white shadow-md md:size-16">
                  <span className="text-lg font-bold md:text-xl">{step.num}</span>
                </div>
                <h3 className="text-lg font-bold tracking-tight text-foreground md:text-xl">{step.title}</h3>
                <p className="max-w-xs text-sm leading-relaxed text-muted-foreground md:text-base">{step.desc}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal className="mt-14 text-center md:mt-16">
        <Link href="/how-it-works" className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-navy hover:text-amber dark:text-white dark:hover:text-amber">
          View Full Methodology
          <span className="flex size-9 items-center justify-center rounded-full border border-navy/15 dark:border-white/15">
            <ArrowRightIcon className="size-4" />
          </span>
        </Link>
      </ScrollReveal>
    </SectionWrapper>
  )
}
