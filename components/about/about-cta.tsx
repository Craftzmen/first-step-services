import Link from "next/link"
import { ArrowRightIcon, PhoneIcon } from "lucide-react"

export function AboutCta() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
        <div className="relative mx-auto grid max-w-[1200px] items-center gap-10 px-4 py-16 md:grid-cols-12 md:gap-12 md:px-6 md:py-20 lg:py-24">
          <div className="md:col-span-7">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-amber">Get in touch</p>
            <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl">
              Let&apos;s build something <br />
              <span className="text-amber">that converts.</span>
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70 md:text-base">
              Tell us about your store and the work ahead. We&apos;ll reply within one business day.
            </p>
          </div>

          <div className="flex flex-col gap-3 md:col-span-5 md:items-end">
            <Link
              href="/contact"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-amber/20 bg-amber px-7 text-sm font-semibold uppercase tracking-wide text-white hover:bg-amber-light sm:w-auto"
            >
              Start a Project
              <ArrowRightIcon className="size-4" />
            </Link>
            <Link
              href="tel:+18883968739"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 text-sm font-semibold uppercase tracking-wide text-white hover:bg-white/10 sm:w-auto"
            >
              <PhoneIcon className="size-4 text-amber" />
              (888) 396-8739
            </Link>
          </div>
        </div>
    </section>
  )
}
