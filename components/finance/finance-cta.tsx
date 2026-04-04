import { PhoneIcon, ArrowRightIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"
import Link from "next/link"

export function FinanceCta() {
  return (
    <SectionWrapper background="navy" padding="sm" className="text-white border-y border-border">
      <ScrollReveal>
        <div className="p-12 text-center md:p-20 relative">
          <div className="absolute inset-0 border border-white/10 m-4" />
          <div className="relative z-10">
            <h2 className="text-3xl font-extrabold md:text-5xl mb-6">
              Start Your <span className="text-amber">Finance Journey</span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-lg text-white/70 mb-10">
              Apply today and experience a smooth, transparent, and hassle-free
              car financing journey.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="rounded-none bg-amber px-8 py-6 text-base text-navy font-bold hover:bg-amber-light"
              >
                <Link href="tel:+18883968739">
                  <PhoneIcon className="mr-2 size-5" />
                  Speak to an Advisor
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-none border-2 border-white bg-transparent px-8 py-6 text-base text-white hover:bg-white hover:text-navy"
              >
                <Link href="/contact">
                  Apply Online
                  <ArrowRightIcon className="ml-2 size-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </SectionWrapper>
  )
}
