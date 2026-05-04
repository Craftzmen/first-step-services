import Image from "next/image"
import { UsersIcon } from "lucide-react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"

export function AboutIntro() {
  return (
    <SectionWrapper className="relative overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute -left-10 top-0 opacity-[0.02] dark:opacity-[0.05] pointer-events-none select-none">
        <span className="text-[12rem] font-black tracking-tighter leading-none uppercase">Precision</span>
      </div>

      <div className="grid items-center gap-20 lg:grid-cols-2">
        <ScrollReveal direction="left" className="relative order-2 lg:order-1">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber/10 px-5 py-2 text-[10px] font-black uppercase tracking-[0.3em] text-amber">
              Engineering Excellence
            </div>
            <h2 className="text-5xl font-black tracking-tighter md:text-7xl text-navy dark:text-white leading-[0.9]">
              Engineered <br />
              <span className="text-amber">For Longevity.</span>
            </h2>
            <div className="space-y-6">
              <p className="text-xl leading-relaxed text-muted-foreground font-medium">
                At First Step Services, we don't just service vehicles — we optimize them for peak operational performance. Our facility is a hub of mechanical sophistication where advanced diagnostics meet time-tested craftsmanship.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground/80">
                From precision sensor calibration to complex drivetrain restoration, we approach every task with the analytical rigor demanded by modern automotive engineering.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right" className="order-1 lg:order-2">
          <div className="relative group">
            {/* Offset Image Mask */}
            <div className="relative z-10 aspect-square w-full overflow-hidden rounded-[4rem] shadow-2xl transition-transform duration-700 group-hover:-translate-y-4 group-hover:rotate-2">
              <Image 
                src="https://images.unsplash.com/photo-1504222490345-c075b6008014?auto=format&fit=crop&q=80&w=1200"
                alt="Automotive Technical Facility"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative Background Frame */}
            <div className="absolute -bottom-6 -right-6 h-full w-full rounded-[4rem] border-4 border-amber/20 -z-10 transition-transform duration-700 group-hover:translate-x-4 group-hover:translate-y-4" />
          </div>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  )
}
