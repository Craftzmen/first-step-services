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
      {/* Decorative Line */}
      <div className="absolute left-1/2 top-1/2 -z-10 hidden h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-amber/20 to-transparent lg:block" />

      <ScrollReveal>
        <div className="text-center mb-24">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber/10 px-5 py-2 text-[10px] font-black uppercase tracking-[0.3em] text-amber">
            The Methodology
          </div>
          <h2 className="text-5xl font-black tracking-tighter md:text-7xl lg:text-8xl mb-8 leading-[0.9] text-navy dark:text-white">
            Initiate Peak <span className="text-amber">Performance.</span>
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid gap-12 lg:grid-cols-3">
        {steps.map((step, i) => (
          <ScrollReveal key={step.num} delay={i * 150} direction="up">
            <div className="relative group">
              {/* Massive Background Number */}
              <div className="absolute -top-12 -left-4 text-9xl font-black text-navy/[0.03] dark:text-white/[0.05] pointer-events-none transition-all duration-500 max-md:transition-none md:group-hover:-translate-y-4 md:group-hover:text-amber/[0.08]">
                {step.num}
              </div>
              
              <div className="relative space-y-6 pt-12">
                <div className="flex size-20 items-center justify-center rounded-3xl bg-navy text-white shadow-xl transition-all duration-500 max-md:transition-none md:group-hover:bg-amber md:group-hover:text-navy md:group-hover:-rotate-6 md:group-hover:scale-110">
                  <span className="text-2xl font-black">{step.num}</span>
                </div>
                <h3 className="text-3xl font-black tracking-tight text-foreground">{step.title}</h3>
                <p className="text-lg leading-relaxed text-muted-foreground font-medium max-w-xs">
                  {step.desc}
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal className="mt-20 text-center">
        <Link
          href="/how-it-works"
          className="group inline-flex items-center gap-4 text-sm font-black uppercase tracking-[0.2em] text-navy dark:text-white hover:text-amber dark:hover:text-amber transition-all"
        >
          View Full Methodology
          <div className="flex size-10 items-center justify-center rounded-full border border-navy/10 dark:border-white/10 transition-all max-md:transition-none md:group-hover:border-amber md:group-hover:translate-x-2">
            <ArrowRightIcon className="size-4" />
          </div>
        </Link>
      </ScrollReveal>
    </SectionWrapper>
  )
}
