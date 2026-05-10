import Link from "next/link"
import { ArrowRightIcon, PhoneIcon } from "lucide-react"
import { SectionWrapper } from "@/components/layout/section-wrapper"

export function CtaHowItWorks() {
  return (
    <SectionWrapper padding="sm">
        <div className="relative overflow-hidden rounded-3xl border border-navy/10 bg-amber p-8 text-navy md:p-12">
          <div className="grid items-center gap-8 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-7">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-navy/60">Get started</p>
              <h2 className="text-3xl font-bold leading-tight tracking-tight text-navy md:text-4xl lg:text-[2.75rem]">
                Ready to launch? <span className="text-white">Let&apos;s talk.</span>
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-navy/80 md:text-base">
                Book a strategy call and walk away with a clear assessment, a fixed quote, and a sensible plan for what to ship next.
              </p>
            </div>
            <div className="flex flex-col gap-3 md:col-span-5 md:items-end">
              <Link
                href="/contact"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-navy px-7 text-sm font-semibold uppercase tracking-wide text-white hover:bg-white hover:text-navy sm:w-auto"
              >
                Book a Strategy Call
                <ArrowRightIcon className="size-4" />
              </Link>
              <Link
                href="tel:+18883968739"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-navy/20 bg-white/40 px-7 text-sm font-semibold uppercase tracking-wide text-navy hover:bg-white sm:w-auto"
              >
                <PhoneIcon className="size-4" />
                (888) 396-8739
              </Link>
            </div>
          </div>
        </div>
    </SectionWrapper>
  )
}
