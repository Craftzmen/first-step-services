import Image from "next/image"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"
import { UNSPLASH } from "@/lib/remote-images"

export function FinanceIntro() {
  return (
    <SectionWrapper className="relative overflow-hidden">
      <div className="pointer-events-none absolute -right-8 top-0 select-none opacity-[0.04] dark:opacity-[0.07]">
        <span className="text-7xl font-bold uppercase leading-none tracking-tighter md:text-9xl">CAPITAL</span>
      </div>

      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <ScrollReveal direction="left">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-amber">
              Financial Liberty
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-navy dark:text-white md:text-3xl">
              Strategic <span className="text-amber">Capital Deployment.</span>
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Acquire elite performance through our optimized liquidity strategies. We specialize in engineered financial pathways for Kia and Hyundai performance units, ensuring your capital remains efficient.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right" className="relative">
          <div className="relative z-10 aspect-video w-full overflow-hidden rounded-3xl border border-navy/10 shadow-lg dark:border-white/10">
            <Image
              src={`${UNSPLASH.carExterior}&w=1200`}
              alt="Vehicle financing"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={75}
              loading="eager"
              unoptimized
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 z-20 rounded-2xl border border-navy/10 bg-card p-4 shadow-md md:-bottom-6 md:-left-6 md:p-5 dark:border-white/10">
            <div className="text-2xl font-bold leading-none text-amber md:text-3xl">2.9%</div>
            <div className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">Starting APR</div>
          </div>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  )
}
