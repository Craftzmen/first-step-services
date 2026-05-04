import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"

export function AboutCta() {
  return (
    <SectionWrapper>
      <ScrollReveal>
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-navy p-10 text-center text-white shadow-lg md:p-14">
          <div className="relative z-10 mx-auto max-w-2xl">
            <div className="mb-6 flex justify-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-amber">
                Get Started
              </div>
            </div>
            <h2 className="mb-4 text-2xl font-bold tracking-tight md:text-3xl">
              Engineering <span className="text-amber">Peak Output.</span>
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-sm leading-relaxed text-white/65 md:text-base">
              Step into the future of automotive care. Deploy our expertise for your vehicle today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="h-11 rounded-xl bg-amber px-8 text-sm font-semibold uppercase tracking-wide text-navy hover:bg-white hover:text-navy">
                <Link href="/contact">Get in Touch</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-11 rounded-xl border-white/25 bg-white/10 px-8 text-sm font-semibold uppercase tracking-wide text-white hover:bg-white hover:text-navy"
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
