import Image from "next/image"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"
import { UNSPLASH } from "@/lib/remote-images"

export function AboutIntro() {
  return (
    <SectionWrapper className="relative overflow-hidden">
      <div className="pointer-events-none absolute -left-8 top-0 select-none opacity-[0.04] dark:opacity-[0.07]">
        <span className="text-7xl font-bold uppercase leading-none tracking-tighter md:text-9xl">Precision</span>
      </div>

      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <ScrollReveal direction="left" className="relative order-2 lg:order-1">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-amber">
              Engineering Excellence
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-navy dark:text-white md:text-3xl">
              Engineered <span className="text-amber">For Longevity.</span>
            </h2>
            <div className="space-y-4">
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                At First Step Services, we don&apos;t just service vehicles — we optimize them for peak operational performance. Our facility is a hub of mechanical sophistication where advanced diagnostics meet time-tested craftsmanship.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground/90 md:text-base">
                From precision sensor calibration to complex drivetrain restoration, we approach every task with the analytical rigor demanded by modern automotive engineering.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right" className="order-1 lg:order-2">
          <div className="relative">
            <div className="relative z-10 aspect-square w-full overflow-hidden rounded-3xl border border-navy/10 shadow-lg dark:border-white/10">
              <Image
                src={`${UNSPLASH.workshop}&w=1200`}
                alt="Automotive Technical Facility"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={45}
                loading="lazy"
                className="object-cover"
              />
            </div>
            <div
              className="absolute -bottom-4 -right-4 -z-10 hidden h-full w-full rounded-3xl border-2 border-amber/30 md:block"
              aria-hidden
            />
          </div>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  )
}
