import Image from "next/image"
import { DollarSignIcon } from "lucide-react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"

export function FinanceIntro() {
  return (
    <SectionWrapper className="relative overflow-hidden">
      {/* Decorative Watermark */}
      <div className="absolute -right-10 top-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none select-none">
        <span className="text-[15rem] font-black tracking-tighter leading-none uppercase">CAPITAL</span>
      </div>

      <div className="grid items-center gap-24 lg:grid-cols-2">
        <ScrollReveal direction="left">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber/10 px-5 py-2 text-[10px] font-black uppercase tracking-[0.3em] text-amber">
              Financial Liberty
            </div>
            <h2 className="text-5xl font-black tracking-tighter md:text-7xl text-navy dark:text-white leading-[0.9]">
              Strategic <br />
              <span className="text-amber">Capital Deployment.</span>
            </h2>
            <p className="text-xl leading-relaxed text-muted-foreground font-medium max-w-xl">
              Acquire elite performance through our optimized liquidity strategies. We specialize in engineered financial pathways for Kia and Hyundai performance units, ensuring your capital remains efficient.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right" className="relative group">
          <div className="relative z-10 aspect-video w-full overflow-hidden rounded-[3rem] shadow-2xl transition-all duration-700 group-hover:-translate-y-4">
            <Image
              src="https://images.unsplash.com/photo-1718780138801-d93ebf484827?q=75&w=960&auto=format&fit=crop"
              alt="Kia EV6 Performance"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={50}
              className="object-cover"
            />
          </div>
          {/* Floating Stats */}
          <div className="absolute -bottom-6 -left-6 z-20 rounded-3xl border border-white/20 bg-white p-6 shadow-2xl md:-bottom-10 md:-left-10 md:animate-bounce-slow md:p-8">
            <div className="text-2xl md:text-3xl font-black text-amber leading-none">2.9%</div>
            <div className="text-[10px] font-black uppercase tracking-widest text-navy/40 dark:text-white/40 mt-1">Starting APR</div>
          </div>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  )
}
