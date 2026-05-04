import { QuoteIcon, StarIcon } from "lucide-react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"

const testimonials = [
  {
    text: "The capital deployment was executed within 48 hours. Absolute precision in their financial engineering.",
    author: "James M.",
    rating: 5,
  },
  {
    text: "A highly engineered financial process with zero hidden parameters. Unrivaled standard in Stevens Point.",
    author: "Elena R.",
    rating: 5,
  },
]

export function FinanceTestimonials() {
  return (
    <SectionWrapper background="muted" className="relative overflow-hidden">
      <ScrollReveal>
        <div className="mb-10 text-center md:mb-12">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-amber/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-amber">
            Testimonials
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-navy dark:text-white md:text-3xl">
            Client <span className="text-amber">Trust.</span>
          </h2>
        </div>
      </ScrollReveal>

      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
        {testimonials.map((t, i) => (
          <ScrollReveal key={t.author} delay={i * 150} direction={i % 2 === 0 ? "left" : "right"}>
            <div className="flex h-full flex-col justify-between rounded-2xl border border-navy/10 bg-white p-6 shadow-md dark:border-white/10 dark:bg-navy-light md:p-8">
              <div className="relative">
                <QuoteIcon className="absolute -left-2 -top-2 size-10 text-amber opacity-20" />
                <p className="mb-6 pl-3 text-sm font-medium leading-relaxed text-navy italic dark:text-white md:text-base">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>
              <div className="mt-auto flex items-center justify-between border-t border-navy/10 pt-5 dark:border-white/10">
                <div className="flex items-center gap-3">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-amber text-sm font-bold text-navy">{t.author.charAt(0)}</div>
                  <div>
                    <div className="text-sm font-semibold text-navy dark:text-white">{t.author}</div>
                    <div className="mt-1 flex gap-0.5">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <StarIcon key={j} className="size-3 fill-amber text-amber" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  )
}
