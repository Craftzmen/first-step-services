import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"

const steps = [
  {
    num: "01",
    title: "Request a Quote",
    desc: "Give us a call or fill out our form. We'll discuss your needs and set up an appointment.",
  },
  {
    num: "02",
    title: "Bring Your Vehicle",
    desc: "Drive in or schedule our doorstep pickup. We'll perform a thorough inspection and provide a clear estimate.",
  },
  {
    num: "03",
    title: "Get It Repaired",
    desc: "Our certified technicians handle the work with precision. We keep you informed every step of the way.",
  },
]

export function ProcessSection() {
  return (
    <SectionWrapper>
      <ScrollReveal>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl text-navy dark:text-white">
            The Prime <span className="text-amber">Process</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            A frictionless journey from diagnosis to delivery. We engineered our process to save you time without compromising on quality.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid gap-0 md:grid-cols-3 border-y border-border divide-y md:divide-y-0 md:divide-x divide-border">
        {steps.map((step, i) => (
          <ScrollReveal key={step.num} delay={i * 150} className="p-10 text-center md:text-left bg-card hover:bg-muted/50 transition-colors">
            <div className="text-5xl font-extrabold text-amber/20 mb-6 font-mono">
              {step.num}
            </div>
            <h3 className="mb-4 text-2xl font-bold text-foreground">{step.title}</h3>
            <p className="text-base leading-relaxed text-muted-foreground">
              {step.desc}
            </p>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal className="mt-12 text-center">
        <Link
          href="/how-it-works"
          className="inline-flex items-center gap-2 text-base font-bold text-navy border-b-2 border-amber pb-1 dark:text-white hover:text-amber transition-colors uppercase tracking-wider"
        >
          View Full Methodology
          <ArrowRightIcon className="size-5" />
        </Link>
      </ScrollReveal>
    </SectionWrapper>
  )
}
