import Link from "next/link"
import { PhoneIcon, ZapIcon, ClockIcon, ShieldCheckIcon } from "lucide-react"

const metrics = [
  {
    icon: ClockIcon,
    label: "Avg. response",
    value: "<30 min",
  },
  {
    icon: ZapIcon,
    label: "Support hours",
    value: "8am–6pm CT",
  },
  {
    icon: ShieldCheckIcon,
    label: "Recovery target",
    value: "Same day",
  },
]

export function ServicesEmergencyCta() {
  return (
    <section className="relative overflow-hidden bg-navy py-16 text-white md:py-24">
        <div className="relative mx-auto grid max-w-[1200px] items-center gap-10 px-4 md:grid-cols-12 md:gap-12 md:px-6">
          <div className="md:col-span-5">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber/30 bg-amber/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-amber">
              <span className="relative flex size-2">
                <span className="inline-flex size-2 rounded-full bg-amber" />
              </span>
              Rapid response
            </div>
            <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl">
              Site down or <br />
              <span className="text-amber">critical issue?</span>
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70 md:text-base">
              Checkout broken, traffic spiking, integration failing — call us directly. We&apos;ll triage on the line and get someone shipping a fix.
            </p>

            <Link
              href="tel:+18883968739"
              className="mt-7 inline-flex h-12 items-center gap-3 rounded-full border border-amber/20 bg-amber px-6 text-sm font-semibold uppercase tracking-wide text-white hover:bg-amber-light"
            >
              <PhoneIcon className="size-4" />
              (888) 396-8739
            </Link>
          </div>

          <div className="md:col-span-7">
            <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
              {metrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-2xl border border-white/10 bg-navy-light p-5 md:p-6"
                >
                  <span className="flex size-10 items-center justify-center rounded-xl bg-amber/15 text-amber">
                    <m.icon className="size-4" />
                  </span>
                  <div className="mt-4 text-2xl font-bold leading-none tracking-tight text-white md:text-3xl">
                    {m.value}
                  </div>
                  <div className="mt-2 text-[10px] font-bold uppercase tracking-[0.25em] text-white/50">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    </section>
  )
}
