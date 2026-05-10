import { HistoryIcon, TargetIcon, EyeIcon, CheckCircle2Icon } from "lucide-react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"

interface PhilosophySection {
  num: string
  label: string
  icon: typeof HistoryIcon
  title: string
  desc: string
  bullets: string[]
}

const sections: PhilosophySection[] = [
  {
    num: "01",
    label: "History",
    icon: HistoryIcon,
    title: "Founded to help brands launch faster.",
    desc: "First Step Services was started by a small group of senior e-commerce engineers and designers who were tired of seeing brands stuck on slow, brittle platforms. We have shipped storefronts for DTC brands, B2B catalogs, and fast-moving startups — and built a practice around honest scope, clean code, and real outcomes.",
    bullets: [],
  },
  {
    num: "02",
    label: "Mission",
    icon: TargetIcon,
    title: "Help merchants ship great commerce.",
    desc: "Our job is to remove the friction between your brand and your customer — across the storefront, the checkout, the back office, and everything that connects them.",
    bullets: [
      "Platform-agnostic execution",
      "Performance-first builds",
      "Data-driven optimization",
      "Long-term partnership",
    ],
  },
  {
    num: "03",
    label: "Vision",
    icon: EyeIcon,
    title: "The agency partner of choice for growing brands.",
    desc: "We want to be the team you call when you need to ship something hard — a replatform, a checkout overhaul, a headless build — and trust will get done well, on time, with no surprises.",
    bullets: [],
  },
]

export function AboutTabs() {
  return (
    <SectionWrapper background="muted" className="relative">
      <ScrollReveal>
        <div className="mb-10 max-w-2xl md:mb-14">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-amber/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-amber">
            Story · Mission · Vision
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-navy dark:text-white md:text-4xl lg:text-5xl">
            What <span className="text-amber">drives the work.</span>
          </h2>
        </div>
      </ScrollReveal>

      <div className="space-y-6 md:space-y-8">
        {sections.map((s, i) => (
          <ScrollReveal key={s.num} delay={i * 100} direction="up">
            <article className="grid gap-6 rounded-3xl border border-navy/10 bg-card p-7 dark:border-white/10 md:grid-cols-12 md:gap-10 md:p-10">
              <div className="flex items-start gap-4 md:col-span-3">
                <span className="text-5xl font-bold tracking-tight text-amber/80 md:text-6xl">{s.num}</span>
                <div className="pt-1">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-amber/10 text-amber">
                    <s.icon className="size-5" />
                  </span>
                  <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground">{s.label}</p>
                </div>
              </div>
              <div className="md:col-span-9">
                <h3 className="text-2xl font-bold tracking-tight text-navy dark:text-white md:text-3xl">{s.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">{s.desc}</p>
                {s.bullets.length > 0 ? (
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-3 rounded-xl border border-navy/10 bg-background p-3 dark:border-white/10">
                        <CheckCircle2Icon className="size-4 shrink-0 text-amber" />
                        <span className="text-[11px] font-semibold uppercase tracking-wide text-navy/75 dark:text-white/75">{b}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  )
}
