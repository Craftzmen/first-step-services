import Link from "next/link"
import Image from "next/image"
import { ArrowRightIcon, UsersIcon, ClockIcon, WrenchIcon } from "lucide-react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"

export function AboutSnapshot() {
  return (
    <SectionWrapper background="muted" className="overflow-hidden">
      <div className="grid items-center gap-20 lg:grid-cols-2">
        <ScrollReveal direction="left" className="relative">
          {/* Creative Image Layout */}
          <div className="relative z-10 aspect-[4/5] w-full overflow-hidden rounded-[3rem] shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1618783129985-dd97dbe4ad99?q=60&w=640&auto=format&fit=crop"
              alt="Master Technician"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={36}
              loading="lazy"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-navy/10" />
          </div>
          
          {/* Floating Element */}
          <div className="absolute -right-6 -top-6 z-20 md:-right-12 md:-top-12 md:animate-bounce-slow">
            <div className="glass rounded-[2rem] p-6 md:p-8 shadow-2xl border border-white/20">
              <div className="mb-2 text-3xl md:text-4xl font-black text-amber">100%</div>
              <div className="text-[10px] md:text-xs font-black uppercase tracking-widest text-navy/60 dark:text-white/60">Quality Assurance</div>
            </div>
          </div>

          {/* Background Decorative */}
          <div className="absolute -bottom-10 -left-10 hidden h-64 w-64 rounded-full bg-amber/20 blur-2xl md:block md:blur-3xl" />
        </ScrollReveal>

        <ScrollReveal direction="right">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/50 dark:bg-white/5 border border-amber/20 px-5 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-amber">
              <UsersIcon className="size-3" />
              The Standard
            </div>
            <h2 className="text-5xl font-black tracking-tighter md:text-7xl text-navy dark:text-white leading-[0.95]">
              Engineered for <br />
              <span className="text-amber">Absolute Perfection.</span>
            </h2>
            <p className="text-xl leading-relaxed text-muted-foreground font-medium">
              At First Step Services, we approach every vehicle with engineering precision. Our state-of-the-art facility is equipped to handle complex diagnostics and complete rebuilds.
            </p>

            <div className="grid grid-cols-2 gap-8">
              {[
                { value: 20, suffix: "y+", label: "Combined Exp.", icon: ClockIcon },
                { value: 15, suffix: "+", label: "Master Techs", icon: WrenchIcon },
              ].map((stat) => (
                <div key={stat.label} className="group flex flex-col items-start gap-2">
                  <div className="text-5xl font-black tracking-tighter text-navy transition-colors group-hover:text-amber dark:text-white">
                    {stat.value}
                    {stat.suffix}
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <Link
                href="/about"
                className="inline-flex h-16 items-center rounded-full bg-navy px-10 font-black uppercase tracking-widest text-white shadow-2xl transition-colors duration-500 hover:bg-amber hover:text-navy motion-reduce:transition-none"
              >
                Discover Our Story
                <ArrowRightIcon className="ml-3 size-5" aria-hidden />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  )
}
