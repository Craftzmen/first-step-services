import Link from "next/link"
import { PhoneIcon, ArrowRightIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"

export function CtaHowItWorks() {
  return (
    <SectionWrapper background="navy" padding="sm" className="text-white border-y border-border">
      <ScrollReveal>
        <div className="p-12 text-center md:p-20 relative">
          <div className="absolute inset-0 border border-white/10 m-4" />
          <div className="relative z-10">
            <h2 className="text-3xl font-extrabold md:text-5xl mb-6">
              Ready to <span className="text-amber">Get Started?</span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-lg text-white/70 mb-10">
              Book your online consultation today and experience the easiest
              way to get your car serviced.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="rounded-none bg-amber px-8 py-6 text-base text-navy font-bold hover:bg-amber-light"
              >
                <Link href="/contact">
                  Book Appointment
                  <ArrowRightIcon className="ml-2 size-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-none border-2 border-white bg-transparent px-8 py-6 text-base text-white hover:bg-white hover:text-navy"
              >
                <Link href="tel:+18882868307">
                  <PhoneIcon className="mr-2 size-5" />
                  Call Us Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </SectionWrapper>
  )
}
