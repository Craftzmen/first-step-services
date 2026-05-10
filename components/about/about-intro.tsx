import { SectionWrapper } from "@/components/layout/section-wrapper"

export function AboutIntro() {
  return (
    <SectionWrapper className="relative">
      <div className="mx-auto max-w-5xl">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-amber/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-amber">
            Our Approach
          </div>

          <p className="text-2xl font-medium leading-snug tracking-tight text-navy dark:text-white sm:text-3xl md:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
            We are a small, senior team of e-commerce designers and engineers — pragmatic operators who&apos;ve spent years inside <span className="text-amber">Shopify</span>, <span className="text-amber">WooCommerce</span>, and <span className="text-amber">headless stacks</span>. That pragmatism shows up in everything we ship.
          </p>

          <div className="mt-12 grid gap-8 border-t border-navy/10 pt-10 dark:border-white/10 md:grid-cols-2 md:gap-12">
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              Every engagement starts with the merchant&apos;s business goals — what does revenue need to look like next quarter, where is the funnel leaking, what does the team need to ship faster — and ends with measurable outcomes.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              Faster sites, cleaner data, higher conversion, a roadmap your team can actually execute. The work in between is bespoke; the principles are the same every time.
            </p>
          </div>
      </div>
    </SectionWrapper>
  )
}
