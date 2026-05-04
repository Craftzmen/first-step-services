import Link from "next/link"
import { PhoneIcon, ArrowRightIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"

export function CtaHowItWorks() {
  return (
    <SectionWrapper padding="sm">
      <ScrollReveal>
        <div className="relative overflow-hidden rounded-[4rem] bg-navy p-12 text-center md:p-32 text-white shadow-2xl">
          {/* Dynamic Accents */}
          <div className="absolute -top-20 -right-20 hidden size-96 rounded-full bg-amber/10 blur-[120px] md:block" />
          <div className="absolute -bottom-20 -left-20 hidden size-96 rounded-full bg-amber/5 blur-[100px] md:block" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="mb-10 flex justify-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-6 py-2 text-[10px] font-black uppercase tracking-[0.3em] text-amber backdrop-blur-none md:bg-white/5 md:backdrop-blur-sm">
                Get Started
              </div>
            </div>
            <h2 className="text-5xl font-black tracking-tighter md:text-8xl mb-10 leading-[0.85]">
              Initiate <br /><span className="text-amber">Protocol.</span>
            </h2>
            <p className="mx-auto max-w-xl text-xl text-white/50 mb-12 font-medium leading-relaxed">
              The elite standard in automotive care. Calibrated for your convenience.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Button
                asChild
                size="lg"
                className="h-20 rounded-[2rem] bg-amber px-12 text-xl text-navy font-black uppercase tracking-tighter hover:bg-white hover:text-navy transition-all duration-500 shadow-2xl shadow-amber/20"
              >
                <Link href="/contact">
                  Book Appointment
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
