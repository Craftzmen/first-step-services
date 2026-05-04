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
        <div className="text-center mb-24">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber/10 px-5 py-2 text-[10px] font-black uppercase tracking-[0.3em] text-amber">
            Testimonials
          </div>
          <h2 className="text-5xl font-black tracking-tighter md:text-7xl text-navy dark:text-white">
            Client <span className="text-amber">Trust.</span>
          </h2>
        </div>
      </ScrollReveal>

      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
        {testimonials.map((t, i) => (
          <ScrollReveal key={t.author} delay={i * 150} direction={i % 2 === 0 ? "left" : "right"}>
            <div className="group relative flex flex-col justify-between h-full rounded-[3rem] bg-white p-12 dark:bg-navy-light shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="relative">
                <QuoteIcon className="absolute -left-6 -top-6 size-16 text-amber opacity-10" />
                <p className="mb-10 text-2xl font-black leading-tight tracking-tight text-navy dark:text-white italic">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>
              <div className="flex items-center justify-between border-t border-navy/5 dark:border-white/5 pt-10 mt-auto">
                <div className="flex items-center gap-4">
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-amber text-xl font-black text-navy shadow-lg shadow-amber/20 group-hover:rotate-6 transition-transform duration-500">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <div className="text-lg font-black text-navy dark:text-white tracking-tight">{t.author}</div>
                    <div className="flex gap-1 mt-1">
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
