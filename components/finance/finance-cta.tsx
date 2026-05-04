import { DollarSignIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"
import Link from "next/link"

export function FinanceCta() {
  return (
    <SectionWrapper padding="sm">
      <ScrollReveal>
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-navy p-10 text-center text-white shadow-lg md:p-14">
          <div className="relative z-10 mx-auto max-w-2xl">
            <div className="mb-6 flex justify-center">
              <div className="flex size-14 items-center justify-center rounded-2xl bg-amber text-navy shadow-md md:size-16">
                <DollarSignIcon className="size-8" />
              </div>
            </div>
            <h2 className="mb-4 text-2xl font-bold tracking-tight md:text-3xl">
              Deploy Strategic <span className="text-amber">Capital.</span>
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-sm leading-relaxed text-white/65 md:text-base">
              Unlock elite financing today. Our engineers are standing by to calibrate a package that optimizes your mechanical and financial performance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="h-11 rounded-xl bg-amber px-8 text-sm font-semibold uppercase tracking-wide text-navy hover:bg-white hover:text-navy">
                <Link href="tel:+18883968739">Speak to Advisor</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-11 rounded-xl border-white/25 bg-white/10 px-8 text-sm font-semibold uppercase tracking-wide text-white hover:bg-white hover:text-navy"
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
