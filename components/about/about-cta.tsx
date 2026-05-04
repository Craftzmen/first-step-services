import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"

export function AboutCta() {
  return (
    <SectionWrapper>
      <ScrollReveal>
        <div className="relative overflow-hidden rounded-[4rem] bg-navy p-12 text-center md:p-32 text-white shadow-2xl">
          {/* Massive Background Accents */}
          <div className="absolute -right-20 -top-20 size-96 rounded-full bg-amber/10 blur-[120px]" />
          <div className="absolute -bottom-20 -left-20 size-96 rounded-full bg-amber/5 blur-[100px]" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="mb-10 flex justify-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-2 text-[10px] font-black uppercase tracking-[0.3em] text-amber backdrop-blur-sm">
                Get Started
              </div>
            </div>
            <h2 className="text-5xl font-black tracking-tighter md:text-8xl mb-10 leading-[0.85]">
              Engineering <br /><span className="text-amber">Peak Output.</span>
            </h2>
            <p className="mx-auto max-w-xl text-xl text-white/50 mb-12 font-medium leading-relaxed">
              Step into the future of automotive care. Deploy our expertise for your vehicle today.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Button
                asChild
                size="lg"
                className="h-20 rounded-[2rem] bg-amber px-12 text-xl text-navy font-black uppercase tracking-tighter hover:bg-white hover:text-navy transition-all duration-500 shadow-2xl shadow-amber/20"
              >
                <Link href="/contact">
                  Get in Touch
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-20 rounded-[2rem] border-white/20 bg-white/5 backdrop-blur-xl px-12 text-xl text-white font-black uppercase tracking-tighter hover:bg-white hover:text-navy transition-all duration-500"
              >
                <Link href="tel:+18883968739">Call Us Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </SectionWrapper>
  )
}
