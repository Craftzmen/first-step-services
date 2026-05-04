import Link from "next/link"
import Image from "next/image"
import { ArrowRightIcon, UsersIcon, ClockIcon, WrenchIcon } from "lucide-react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"
import { UNSPLASH } from "@/lib/remote-images"

export function AboutSnapshot() {
  return (
    <SectionWrapper background="muted" className="overflow-hidden">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <ScrollReveal direction="left" className="relative">
          <div className="relative z-10 aspect-[4/5] w-full overflow-hidden rounded-3xl border border-navy/10 shadow-lg dark:border-white/10">
            <Image
              src={`${UNSPLASH.mechanic}&w=900`}
              alt="Master Technician"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={42}
              loading="lazy"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-navy/10" />
          </div>

          <div className="absolute -right-4 -top-4 z-20 md:-right-8 md:-top-8">
            <div className="glass rounded-2xl p-4 shadow-md md:p-5">
              <div className="mb-1 text-2xl font-bold text-amber md:text-3xl">100%</div>
              <div className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">Quality Assurance</div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber/25 bg-white/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-amber dark:bg-white/10">
              <UsersIcon className="size-3" />
              The Standard
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-navy dark:text-white md:text-3xl">
              Engineered for <span className="text-amber">Absolute Perfection.</span>
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              At First Step Services, we approach every vehicle with engineering precision. Our state-of-the-art facility is equipped to handle complex diagnostics and complete rebuilds.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { value: 20, suffix: "y+", label: "Combined Exp.", icon: ClockIcon },
                { value: 15, suffix: "+", label: "Master Techs", icon: WrenchIcon },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col items-start gap-1">
                  <div className="text-2xl font-bold tracking-tight text-navy dark:text-white">
                    {stat.value}
                    {stat.suffix}
                  </div>
                  <div className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex h-11 items-center rounded-full bg-navy px-6 text-xs font-semibold uppercase tracking-wide text-white hover:bg-amber hover:text-navy"
              >
                Discover Our Story
                <ArrowRightIcon className="ml-2 size-4" aria-hidden />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  )
}
