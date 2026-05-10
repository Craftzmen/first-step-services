import Link from "next/link"
import Image from "next/image"
import { ArrowRightIcon, SparklesIcon, CheckCircle2Icon, TrendingUpIcon } from "lucide-react"
import { UNSPLASH } from "@/lib/remote-images"

const platforms = [
  "Shopify Plus",
  "WooCommerce",
  "BigCommerce",
  "Adobe Commerce",
  "Hydrogen",
  "Sanity",
]

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy pt-28 pb-16 text-white md:pt-36 md:pb-24">
      <div className="pointer-events-none absolute -right-32 -top-24 h-[640px] w-[640px] rounded-full bg-amber/20 blur-[140px]" aria-hidden />
      <div className="pointer-events-none absolute -bottom-40 -left-32 h-[420px] w-[420px] rounded-full bg-amber/10 blur-[120px]" aria-hidden />

      <div className="relative mx-auto w-full max-w-[1200px] px-4 md:px-6">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-12">
          {/* LEFT: text content */}
          <div className="lg:col-span-7">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber/25 bg-amber/10 px-4 py-2 text-sm font-semibold text-amber">
              <SparklesIcon className="size-3.5" aria-hidden />
              Built to scale.
            </div>

            <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              We design and build <br className="hidden sm:block" />
              <span className="text-amber">the stores that grow brands.</span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/75 md:text-lg">
              Full-service e-commerce solutions — store builds, replatforming, conversion optimization, integrations, and ongoing growth.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-amber px-7 text-base font-semibold text-white shadow-lg shadow-amber/25 hover:bg-amber-light"
              >
                Book a Strategy Call
                <ArrowRightIcon className="size-4" aria-hidden />
              </Link>
              <Link
                href="/services"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 text-base font-medium text-white hover:border-white/30 hover:bg-white/10"
              >
                View Services
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-white/55">
              <div className="flex items-center gap-2">
                <CheckCircle2Icon className="size-4 text-amber" aria-hidden />
                Senior team
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2Icon className="size-4 text-amber" aria-hidden />
                Fixed-fee quotes
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2Icon className="size-4 text-amber" aria-hidden />
                Reply within 1 day
              </div>
            </div>
          </div>

          {/* RIGHT: storefront mockup with floating chips */}
          <div className="relative lg:col-span-5">
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 shadow-2xl shadow-black/40">
                <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/5 px-4 py-3">
                  <span className="size-2.5 rounded-full bg-rose-400/60" aria-hidden />
                  <span className="size-2.5 rounded-full bg-amber/60" aria-hidden />
                  <span className="size-2.5 rounded-full bg-emerald-400/60" aria-hidden />
                  <div className="ml-3 flex-1 truncate rounded-md bg-white/10 px-3 py-1 text-[11px] font-medium text-white/55">
                    yourbrand.com
                  </div>
                </div>
                <div className="relative aspect-4/5 w-full">
                  <Image
                    src={`${UNSPLASH.storefront}&w=1000`}
                    alt="Storefront preview"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    quality={55}
                    priority
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-navy/40 via-transparent to-transparent" aria-hidden />
                </div>
              </div>

              {/* Floating chip: top-left */}
              <div className="absolute -left-4 top-12 hidden rounded-2xl border border-white/15 bg-navy-light px-4 py-3 shadow-xl sm:block md:-left-8">
                <div className="flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-xl bg-amber/20 text-amber">
                    <TrendingUpIcon className="size-4" />
                  </div>
                  <div>
                    <div className="text-base font-bold leading-none text-white">+35%</div>
                    <div className="mt-1 text-[10px] font-medium uppercase tracking-wider text-white/55">conv. lift</div>
                  </div>
                </div>
              </div>

              {/* Floating chip: bottom-right */}
              <div className="absolute -right-4 bottom-10 hidden rounded-2xl border border-white/15 bg-navy-light px-4 py-3 shadow-xl sm:block md:-right-8">
                <div className="flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-xl bg-amber/20 text-amber">
                    <SparklesIcon className="size-4" />
                  </div>
                  <div>
                    <div className="text-base font-bold leading-none text-white">120+</div>
                    <div className="mt-1 text-[10px] font-medium uppercase tracking-wider text-white/55">stores launched</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8 md:mt-20 md:pt-10">
          <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/40">Platforms we ship</p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 md:gap-x-12">
            {platforms.map((p) => (
              <span key={p} className="text-sm font-bold tracking-tight text-white/55 md:text-base">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
