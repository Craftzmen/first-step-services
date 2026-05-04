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
      {/* Decorative Quote Mark */}
      <div className="absolute -left-10 top-10 pointer-events-none opacity-[0.03] dark:opacity-[0.05]">
        <QuoteIcon className="size-[20rem]" />
      </div>

      <ScrollReveal>
        <div className="text-center mb-20">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber/10 px-5 py-2 text-[10px] font-black uppercase tracking-[0.3em] text-amber">
            Success Stories
          </div>
          <h2 className="text-5xl font-black tracking-tighter md:text-7xl text-navy dark:text-white">
            Client <span className="text-amber">Testimonials.</span>
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid gap-12 md:grid-cols-2 lg:mx-auto lg:max-w-6xl">
        {testimonials.map((t, i) => (
          <ScrollReveal key={t.author} delay={i * 150} direction={i % 2 === 0 ? "left" : "right"}>
            <div className="group relative flex flex-col justify-between h-full rounded-[2.5rem] bg-white p-12 dark:bg-navy-light shadow-2xl transition-all duration-500 max-md:transition-none md:hover:-translate-y-2">
              <div className="relative">
                <QuoteIcon className="absolute -left-4 -top-4 size-12 text-amber opacity-20" />
                <p className="mb-10 text-2xl font-black leading-tight tracking-tight text-navy dark:text-white italic">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-5 pt-8 border-t border-navy/5 dark:border-white/5">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-amber text-xl font-black text-navy shadow-lg shadow-amber/20 transition-transform duration-500 max-md:transition-none md:group-hover:rotate-6">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <div className="text-lg font-black text-navy dark:text-white tracking-tight">{t.author}</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-amber">
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
