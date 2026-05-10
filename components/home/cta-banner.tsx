import Link from "next/link"
import { PhoneIcon, MailIcon, ArrowRightIcon, ClockIcon } from "lucide-react"

export function CtaBanner() {
  return (
    <section className="relative bg-background py-16 md:py-24">
      <div className="relative mx-auto max-w-[1200px] px-4 md:px-6">
          <div className="overflow-hidden rounded-3xl border border-navy/10 dark:border-white/10">
            <div className="grid lg:grid-cols-5">
              {/* Primary message side */}
              <div className="relative overflow-hidden bg-navy p-8 text-white md:p-12 lg:col-span-3 lg:p-14">
                <div className="relative">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-amber">
                    Ready when you are
                  </div>
                  <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
                    Ready to take the <span className="text-amber">first step?</span>
                  </h2>
                  <p className="mb-8 max-w-md text-sm leading-relaxed text-white/70 md:text-base">
                    Tell us about your store, your stack, and what you want to ship. We&apos;ll come back with a clear plan and a fixed quote.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex h-12 items-center gap-2 rounded-full border border-amber/20 bg-amber px-7 text-sm font-semibold uppercase tracking-wide text-white hover:bg-amber-light"
                  >
                    Send Message
                    <ArrowRightIcon className="size-4" />
                  </Link>

                  <div className="mt-8 flex items-center gap-2 text-xs text-white/60">
                    <ClockIcon className="size-4 text-amber" aria-hidden />
                    Reply within 1 business day.
                  </div>
                </div>
              </div>

              {/* Direct contact side */}
              <div className="relative bg-amber p-8 text-white md:p-12 lg:col-span-2 lg:p-14">
                <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.25em] text-white/80">
                  Or reach us directly
                </p>

                <Link
                  href="tel:+18883968739"
                  className="group mb-4 flex items-center justify-between gap-4 rounded-2xl border border-white/20 bg-white/10 p-5 hover:bg-white/20"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-navy text-white">
                      <PhoneIcon className="size-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-white/70">Direct Line</div>
                      <div className="text-base font-bold text-white">(888) 396-8739</div>
                    </div>
                  </div>
                  <ArrowRightIcon className="size-5 text-white/70 group-hover:text-white" />
                </Link>

                <Link
                  href="mailto:info@firststepservices.tech"
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-white/20 bg-white/10 p-5 hover:bg-white/20"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-navy text-white">
                      <MailIcon className="size-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-white/70">Email</div>
                      <div className="truncate text-sm font-bold text-white">info@firststepservices.tech</div>
                    </div>
                  </div>
                  <ArrowRightIcon className="size-5 shrink-0 text-white/70 group-hover:text-white" />
                </Link>

                <p className="mt-6 text-xs font-medium text-white/80">Mon–Sat, 8am–6pm CT.</p>
              </div>
            </div>
          </div>
      </div>
    </section>
  )
}
