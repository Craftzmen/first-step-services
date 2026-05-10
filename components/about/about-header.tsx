import Link from "next/link"
import { ChevronRightIcon, MapPinIcon, UsersIcon, CalendarIcon, BoxesIcon } from "lucide-react"

const facts = [
  { icon: CalendarIcon, label: "Founded", value: "2026" },
  { icon: UsersIcon, label: "Team", value: "Senior, small, hands-on" },
  { icon: MapPinIcon, label: "HQ", value: "Milwaukee, WI" },
  { icon: BoxesIcon, label: "Stack", value: "Shopify, Woo, BigCommerce, headless" },
]

export function AboutHeader() {
  return (
    <section className="relative overflow-hidden bg-navy pt-28 pb-14 text-white md:pt-36 md:pb-20">
      <div className="relative mx-auto w-full max-w-[1200px] px-4 md:px-6">
        <nav aria-label="Breadcrumb" className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white/60">
          <Link href="/" className="hover:text-amber">Home</Link>
          <ChevronRightIcon className="size-3 text-white/25" aria-hidden />
          <span className="text-amber">About Us</span>
        </nav>

        <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-amber">Who we are</p>
            <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4.5rem]">
              We&apos;re First Step <br />
              <span className="text-amber">Services.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
              A small, senior team of e-commerce designers and engineers helping ambitious brands launch and scale.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-white/15 bg-navy-light p-2">
              <p className="px-4 pt-3 pb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-white/40">At a glance</p>
              <dl className="grid divide-y divide-white/10">
                {facts.map((f) => (
                  <div key={f.label} className="grid grid-cols-[auto_1fr] items-center gap-4 px-4 py-3">
                    <span className="flex size-9 items-center justify-center rounded-xl bg-amber/15 text-amber">
                      <f.icon className="size-4" />
                    </span>
                    <div className="flex items-center justify-between gap-3">
                      <dt className="text-[10px] font-semibold uppercase tracking-wider text-white/55">{f.label}</dt>
                      <dd className="text-right text-sm font-semibold text-white">{f.value}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
