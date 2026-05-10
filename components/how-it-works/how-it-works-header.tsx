import Link from "next/link"
import { ChevronRightIcon, MessageSquareIcon, SearchIcon, PaletteIcon, CodeIcon, RocketIcon } from "lucide-react"

const previewSteps = [
  { num: "01", icon: MessageSquareIcon, label: "Discovery", phase: "Day 0" },
  { num: "02", icon: SearchIcon, label: "Audit", phase: "Week 1" },
  { num: "03", icon: PaletteIcon, label: "Design", phase: "Week 2–3" },
  { num: "04", icon: CodeIcon, label: "Build", phase: "Week 4–7" },
  { num: "05", icon: RocketIcon, label: "Launch", phase: "Week 8+" },
]

export function HowItWorksHeader() {
  return (
    <section className="relative overflow-hidden bg-navy pt-28 pb-16 text-white md:pt-36 md:pb-24">
      <div aria-hidden className="pointer-events-none absolute -top-32 left-1/2 size-[640px] -translate-x-1/2 rounded-full bg-amber/15 blur-[160px]" />

      <div className="relative mx-auto w-full max-w-[1200px] px-4 md:px-6">
        <nav aria-label="Breadcrumb" className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white/60">
          <Link href="/" className="hover:text-amber">Home</Link>
          <ChevronRightIcon className="size-3 text-white/25" aria-hidden />
          <span className="text-amber">How It Works</span>
        </nav>

        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-amber">Process</p>
          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4.25rem]">
            From idea to <br />
            <span className="text-amber">live store.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
            A clear five-step engagement, sized to fit the work — from a focused theme refresh to a full headless replatform.
          </p>
        </div>

        {/* Step indicator rail */}
        <div className="relative mt-14 md:mt-20">
          <div aria-hidden className="absolute left-0 right-0 top-7 hidden h-px bg-white/15 md:block" />
          <ol className="relative grid grid-cols-2 gap-y-8 sm:grid-cols-3 md:grid-cols-5">
            {previewSteps.map((s) => (
              <li key={s.num} className="flex flex-col items-center gap-3 text-center">
                <Link
                  href={`#step-${s.num}`}
                  className="group flex size-14 items-center justify-center rounded-full border border-white/15 bg-navy text-white transition hover:border-amber hover:bg-amber"
                >
                  <s.icon className="size-5 transition group-hover:text-white" />
                </Link>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-amber">{s.num} · {s.phase}</p>
                  <p className="mt-1 text-sm font-semibold text-white">{s.label}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
