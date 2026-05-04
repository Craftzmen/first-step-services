import { QuoteIcon } from "lucide-react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"

const testimonials = [
  {
    text: "The propulsion analysis was definitive. They identified a low-level binary anomaly that three other shops missed. Absolute precision.",
    author: "Marcus V.",
    role: "Professional Driver",
    rating: 5,
  },
  {
    text: "Unrivaled transparency. The live telemetry feed during the inspection gave me total confidence in their methodology. Simply the elite choice.",
    author: "Elena K.",
    role: "Tech Executive",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <SectionWrapper background="muted" className="relative overflow-hidden">
      <div className="pointer-events-none absolute -left-8 top-8 opacity-[0.04] dark:opacity-[0.06]">
        <QuoteIcon className="size-32 md:size-40" />
      </div>

      <ScrollReveal>
        <div className="mb-10 text-center md:mb-12">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-amber/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-amber">
            Success Stories
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-navy dark:text-white md:text-3xl">
            Client <span className="text-amber">Testimonials.</span>
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid gap-6 md:grid-cols-2 lg:mx-auto lg:max-w-5xl">
        {testimonials.map((t, i) => (
          <ScrollReveal key={t.author} delay={i * 150} direction={i % 2 === 0 ? "left" : "right"}>
            <div className="flex h-full flex-col justify-between rounded-2xl border border-navy/10 bg-white p-6 shadow-md dark:border-white/10 dark:bg-navy-light md:p-8">
              <div className="relative">
                <QuoteIcon className="absolute -left-2 -top-2 size-8 text-amber opacity-25" />
                <p className="mb-6 pl-4 text-sm font-medium leading-relaxed text-navy italic dark:text-white md:text-base">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-4 border-t border-navy/10 pt-5 dark:border-white/10">
                <div className="flex size-11 items-center justify-center rounded-xl bg-amber text-sm font-bold text-navy">{t.author.charAt(0)}</div>
                <div>
                  <div className="text-sm font-semibold text-navy dark:text-white">{t.author}</div>
                  <div className="text-[10px] font-semibold uppercase tracking-wide text-amber">{t.role}</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  )
}
