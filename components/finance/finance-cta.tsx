import { PhoneIcon, ArrowRightIcon, DollarSignIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"
import Link from "next/link"

export function FinanceCta() {
  return (
    <SectionWrapper padding="sm">
      <ScrollReveal>
        <div className="relative overflow-hidden rounded-[4rem] bg-navy p-12 text-center md:p-32 text-white shadow-2xl">
          {/* Dynamic Accents */}
          <div className="absolute -top-20 -right-20 size-96 rounded-full bg-amber/10 blur-[120px]" />
          <div className="absolute -bottom-20 -left-20 size-96 rounded-full bg-amber/5 blur-[100px]" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="mb-10 flex justify-center">
              <div className="size-20 rounded-3xl bg-amber text-navy flex items-center justify-center shadow-2xl shadow-amber/20 animate-bounce-slow">
                <DollarSignIcon className="size-10" />
              </div>
            </div>
            <h2 className="text-5xl font-black tracking-tighter md:text-8xl mb-10 leading-[0.85]">
              Deploy Strategic <br /><span className="text-amber">Capital.</span>
            </h2>
            <p className="mx-auto max-w-xl text-xl text-white/50 mb-12 font-medium leading-relaxed">
              Unlock elite financing today. Our engineers are standing by to calibrate a package that optimizes your mechanical and financial performance.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Button
                asChild
                size="lg"
                className="h-20 rounded-[2.5rem] bg-amber px-12 text-xl text-navy font-black uppercase tracking-tighter hover:bg-white hover:text-navy transition-all duration-500 shadow-2xl shadow-amber/20"
              >
                <Link href="tel:+18883968739">
                  Speak to Advisor
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-20 rounded-[2.5rem] border-white/20 bg-white/5 backdrop-blur-xl px-12 text-xl text-white font-black uppercase tracking-tighter hover:bg-white hover:text-navy transition-all duration-500"
              >
                <Link href="/contact">Apply Online</Link>
              </Button>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </SectionWrapper>
  )
}
