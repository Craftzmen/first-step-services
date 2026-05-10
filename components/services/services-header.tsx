import Link from "next/link"
import { ArrowUpRightIcon, ChevronRightIcon, StoreIcon, ArrowRightLeftIcon, LineChartIcon, PlugIcon, LayersIcon, RocketIcon } from "lucide-react"

const quickLinks = [
  { icon: StoreIcon, title: "Store Design & Build", slug: "store-build" },
  { icon: ArrowRightLeftIcon, title: "Platform Migration", slug: "migration" },
  { icon: LineChartIcon, title: "Conversion Optimization", slug: "cro" },
  { icon: PlugIcon, title: "Integrations & APIs", slug: "integrations" },
  { icon: LayersIcon, title: "Headless Commerce", slug: "headless" },
  { icon: RocketIcon, title: "Growth & Support", slug: "support" },
]

export function ServicesHeader() {
  return (
    <section className="relative overflow-hidden bg-navy pt-28 pb-14 text-white md:pt-36 md:pb-20">
      <div className="relative mx-auto w-full max-w-[1200px] px-4 md:px-6">
        <nav aria-label="Breadcrumb" className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white/60">
          <Link href="/" className="hover:text-amber">Home</Link>
          <ChevronRightIcon className="size-3 text-white/25" aria-hidden />
          <span className="text-amber">Services</span>
        </nav>

        <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-amber">Capabilities</p>
            <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4.25rem]">
              End-to-end <br />
              <span className="text-amber">e-commerce solutions.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
              Six service tracks that cover everything from the first wireframe to the next quarter&apos;s growth experiments — sized to fit the work and quoted up front.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-white/15 bg-navy-light p-2">
              <p className="px-4 pt-3 pb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-white/40">Jump to a service</p>
              <ul className="grid divide-y divide-white/10">
                {quickLinks.map((q) => (
                  <li key={q.slug}>
                    <Link
                      href={`#${q.slug}`}
                      className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 px-4 py-3 hover:bg-white/5"
                    >
                      <span className="flex size-9 items-center justify-center rounded-xl bg-amber/15 text-amber">
                        <q.icon className="size-4" />
                      </span>
                      <span className="text-sm font-semibold text-white">{q.title}</span>
                      <ArrowUpRightIcon className="size-4 text-white/35 group-hover:text-amber" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
