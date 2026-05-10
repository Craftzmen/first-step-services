import { ShieldCheckIcon, SparklesIcon, TrendingUpIcon, UsersIcon } from "lucide-react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"

const values = [
  {
    num: "01",
    icon: ShieldCheckIcon,
    title: "Transparency",
    desc: "Honest scope, clear quotes, and no surprises. You always know where the project stands.",
    practice: [
      "Weekly written status notes",
      "Time-boxed scope, no creeping buckets",
      "Quotes that include the boring parts",
    ],
  },
  {
    num: "02",
    icon: SparklesIcon,
    title: "Craft",
    desc: "Beautifully designed interfaces, clean code, and the kind of polish that compounds over time.",
    practice: [
      "Component-led design systems",
      "Performance budgets enforced",
      "Accessibility baked in, not bolted on",
    ],
  },
  {
    num: "03",
    icon: TrendingUpIcon,
    title: "Outcomes",
    desc: "We are paid to move your metrics — conversion, AOV, performance, and revenue per visitor.",
    practice: [
      "Analytics on day one",
      "A/B testing on what matters",
      "Quarterly business reviews",
    ],
  },
  {
    num: "04",
    icon: UsersIcon,
    title: "Partnership",
    desc: "We treat client teams like our own. Long-term retainers and steady ownership over years.",
    practice: [
      "Embedded squads in your Slack",
      "Steady senior staffing",
      "Roadmaps your team can run",
    ],
  },
]

export function AboutValues() {
  return (
    <SectionWrapper background="muted" className="relative">
      <ScrollReveal>
        <div className="mb-10 max-w-2xl md:mb-14">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-amber/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-amber">
            What We Stand For
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-navy dark:text-white md:text-4xl lg:text-5xl">
            The values that <span className="text-amber">drive every project.</span>
          </h2>
        </div>
      </ScrollReveal>

      <div className="space-y-5 md:space-y-6">
        {values.map((v, i) => (
          <ScrollReveal key={v.title} delay={i * 80} direction="up">
            <div className="group relative grid gap-6 rounded-3xl border border-navy/10 bg-card p-7 transition hover:border-amber/40 dark:border-white/10 md:grid-cols-12 md:gap-10 md:p-10">
              <div className="flex items-start gap-5 md:col-span-4">
                <span className="text-4xl font-bold tracking-tight text-amber/70 md:text-5xl">{v.num}</span>
                <div>
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-navy text-white">
                    <v.icon className="size-5" />
                  </span>
                  <h3 className="mt-4 text-xl font-bold tracking-tight text-navy dark:text-white md:text-2xl">{v.title}</h3>
                </div>
              </div>
              <div className="md:col-span-8">
                <p className="text-sm leading-relaxed text-muted-foreground md:text-base">{v.desc}</p>
                <ul className="mt-5 grid gap-3 sm:grid-cols-3">
                  {v.practice.map((p) => (
                    <li key={p} className="flex items-start gap-2 rounded-xl border border-navy/10 bg-background p-3 dark:border-white/10">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-amber" />
                      <span className="text-xs font-medium leading-snug text-navy/75 dark:text-white/75">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  )
}
