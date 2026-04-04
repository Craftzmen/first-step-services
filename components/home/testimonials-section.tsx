import { QuoteIcon } from "lucide-react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"

const testimonials = [
  {
    text: "The approval was faster than I expected. I drove my new car home within days! The entire team was professional and transparent throughout.",
    author: "Michael R.",
    role: "Satisfied Customer",
    rating: 5,
  },
  {
    text: "Transparent process and no hidden charges. The mechanics explained everything clearly. I couldn't ask for better service. Highly recommended!",
    author: "Sarah T.",
    role: "Loyal Customer",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <SectionWrapper background="muted">
      <ScrollReveal>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl text-navy dark:text-white">
            Client <span className="text-amber">Testimonials</span>
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid gap-8 md:grid-cols-2">
        {testimonials.map((t, i) => (
          <ScrollReveal key={t.author} delay={i * 150}>
            <div className="flex flex-col justify-between h-full border border-border bg-white p-10 dark:bg-card">
              <div>
                <QuoteIcon className="mb-6 size-10 text-amber" />
                <p className="mb-8 text-xl font-medium leading-relaxed text-foreground/90">
                  "{t.text}"
                </p>
              </div>
              <div className="flex items-center gap-4 pt-6 border-t border-border">
                <div className="flex size-12 items-center justify-center bg-navy text-lg font-bold text-white">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <div className="text-base font-bold text-foreground">{t.author}</div>
                  <div className="text-sm font-medium text-muted-foreground uppercase tracking-widest mt-1">
                    {t.role}
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
