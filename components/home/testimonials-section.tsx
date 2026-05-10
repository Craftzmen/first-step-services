import { QuoteIcon, StarIcon } from "lucide-react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"

const featured = {
  text: "Replatformed us from Magento to Shopify in eight weeks with zero lost SEO and a 28% lift in conversion in the first quarter. Genuinely the best agency partner we have worked with.",
  author: "Marcus V.",
  role: "Founder, DTC Apparel Brand",
  rating: 5,
}

const secondary = {
  text: "They treated our checkout like it was their own revenue. Clear communication, sensible scope, and the analytics work paid for itself within the month.",
  author: "Elena K.",
  role: "Head of Growth, Beauty Brand",
  rating: 5,
}

const trustLogos = ["Northbound Co.", "Cypress & Birch", "Halo Studios", "Forge Apparel", "Lumen Goods"]

export function TestimonialsSection() {
  return (
    <SectionWrapper background="muted" className="relative overflow-hidden">
      <ScrollReveal>
        <div className="mb-10 flex flex-col items-start justify-between gap-4 md:mb-14 md:flex-row md:items-end">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-amber/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-amber">
              Client Stories
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-navy dark:text-white md:text-4xl lg:text-5xl">
              Trusted by <span className="text-amber">growing brands.</span>
            </h2>
          </div>
          <div className="hidden items-center gap-2 text-amber md:flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} className="size-5 fill-current" />
            ))}
            <span className="ml-2 text-xs font-bold uppercase tracking-wider text-navy/60 dark:text-white/60">5.0 average</span>
          </div>
        </div>
      </ScrollReveal>

      <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
        {/* Featured (left, large) */}
        <ScrollReveal direction="left" className="lg:col-span-7">
          <div className="relative h-full overflow-hidden rounded-3xl bg-navy p-8 text-white md:p-12">
            <QuoteIcon aria-hidden className="pointer-events-none absolute -right-6 -top-6 size-44 opacity-10" />

            <div className="relative">
              <div className="mb-6 flex items-center gap-2 text-amber">
                {Array.from({ length: featured.rating }).map((_, i) => (
                  <StarIcon key={i} className="size-4 fill-current" />
                ))}
              </div>

              <blockquote className="mb-10 text-2xl font-semibold leading-snug tracking-tight md:text-3xl lg:text-4xl">
                &ldquo;{featured.text}&rdquo;
              </blockquote>

              <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-amber text-lg font-bold text-white">
                  {featured.author.charAt(0)}
                </div>
                <div>
                  <div className="text-base font-bold text-white">{featured.author}</div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-amber">{featured.role}</div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Secondary column (right) */}
        <div className="flex flex-col gap-6 lg:col-span-5">
          <ScrollReveal direction="right">
            <div className="relative rounded-3xl border border-navy/10 bg-card p-6 shadow-sm dark:border-white/10 md:p-8">
              <QuoteIcon aria-hidden className="absolute -left-2 -top-2 size-7 text-amber opacity-30" />

              <div className="mb-4 flex items-center gap-1.5 text-amber">
                {Array.from({ length: secondary.rating }).map((_, i) => (
                  <StarIcon key={i} className="size-3.5 fill-current" />
                ))}
              </div>

              <blockquote className="text-base font-medium leading-relaxed text-navy dark:text-white md:text-lg">
                &ldquo;{secondary.text}&rdquo;
              </blockquote>

              <div className="mt-5 flex items-center gap-3 border-t border-navy/10 pt-5 dark:border-white/10">
                <div className="flex size-10 items-center justify-center rounded-xl bg-amber text-xs font-bold text-white">
                  {secondary.author.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-bold text-navy dark:text-white">{secondary.author}</div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">{secondary.role}</div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={120}>
            <div className="rounded-3xl border border-amber/30 bg-amber/5 p-6 md:p-8">
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-amber">Trusted by</p>
              <div className="flex flex-wrap gap-x-5 gap-y-3">
                {trustLogos.map((l) => (
                  <span key={l} className="text-sm font-bold tracking-tight text-navy/65 dark:text-white/70">
                    {l}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </SectionWrapper>
  )
}
