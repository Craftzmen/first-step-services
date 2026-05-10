import {
  MessageSquareIcon,
  SearchIcon,
  PaletteIcon,
  CodeIcon,
  RocketIcon,
  CheckCircle2Icon,
  HeadphonesIcon,
  ArrowRightIcon,
} from "lucide-react"
import Link from "next/link"
import { SectionWrapper } from "@/components/layout/section-wrapper"

interface Step {
  num: string
  icon: typeof MessageSquareIcon
  phase: string
  duration: string
  title: string
  desc: string
  subItems: string[]
}

const steps: Step[] = [
  {
    num: "01",
    icon: MessageSquareIcon,
    phase: "Day 0",
    duration: "30 minutes",
    title: "Discovery Call",
    desc: "A 30-minute conversation about your store, your goals, and the work ahead — no commitment, no boilerplate decks.",
    subItems: [],
  },
  {
    num: "02",
    icon: SearchIcon,
    phase: "Week 1",
    duration: "5 business days",
    title: "Audit & Strategy",
    desc: "We review your stack, analytics, and conversion funnel, then write a clear plan that ties scope, timeline, and outcomes.",
    subItems: [
      "Tech stack & data audit",
      "Funnel & analytics review",
      "Fixed-fee proposal",
    ],
  },
  {
    num: "03",
    icon: PaletteIcon,
    phase: "Week 2–3",
    duration: "2 weeks",
    title: "Design & Prototype",
    desc: "Wireframes and high-fidelity prototypes for every key page, reviewed in real time so feedback turns into decisions fast.",
    subItems: [
      "Information architecture",
      "Component design system",
      "High-fidelity prototype",
    ],
  },
  {
    num: "04",
    icon: CodeIcon,
    phase: "Week 4–7",
    duration: "4 weeks",
    title: "Build & QA",
    desc: "Senior engineers ship the build with continuous code review, end-to-end testing, and weekly working demos.",
    subItems: [
      "Custom theme & components",
      "Third-party integrations",
      "Performance & SEO hardening",
    ],
  },
  {
    num: "05",
    icon: RocketIcon,
    phase: "Week 8+",
    duration: "Ongoing",
    title: "Launch & Optimize",
    desc: "We launch, monitor, and iterate — A/B testing, analytics tuning, and a steady backlog of improvements after go-live.",
    subItems: [
      "Soft launch & monitoring",
      "A/B testing program",
      "Quarterly business reviews",
    ],
  },
]

export function Timeline() {
  return (
    <SectionWrapper id="process" className="relative">
        <div className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-amber/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-amber">
              The Engagement
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-navy dark:text-white md:text-4xl lg:text-5xl">
              Five steps. <span className="text-amber">No surprises.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Same shape every engagement, sized to fit the work — focused theme refresh, full migration, or headless build.
          </p>
        </div>

      <div className="space-y-5 md:space-y-6">
        {steps.map((step, i) => {
          const isAmber = i % 2 === 1
          return (
              <article
                key={step.num}
                id={`step-${step.num}`}
                className={`grid scroll-mt-28 gap-8 rounded-3xl border p-7 md:grid-cols-12 md:gap-10 md:p-10 ${
                  isAmber
                    ? "border-amber/25 bg-amber/5"
                    : "border-navy/10 bg-card dark:border-white/10"
                }`}
              >
                <div className="flex items-start gap-5 md:col-span-5">
                  <span className="text-5xl font-bold tracking-tight text-amber/80 md:text-6xl">{step.num}</span>
                  <div className="min-w-0 flex-1">
                    <span className="flex size-12 items-center justify-center rounded-2xl bg-navy text-white">
                      <step.icon className="size-5" />
                    </span>
                    <div className="mt-4 flex flex-wrap items-baseline gap-3">
                      <span className="rounded-full border border-amber/30 bg-amber/15 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-amber">
                        {step.phase}
                      </span>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                        {step.duration}
                      </span>
                    </div>
                    <h3 className="mt-3 text-2xl font-bold tracking-tight text-navy dark:text-white md:text-3xl">{step.title}</h3>
                  </div>
                </div>

                <div className="md:col-span-7">
                  <p className="text-sm leading-relaxed text-muted-foreground md:text-base">{step.desc}</p>
                  {step.subItems.length > 0 ? (
                    <ul className="mt-6 grid gap-3 sm:grid-cols-3">
                      {step.subItems.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 rounded-xl border border-navy/10 bg-background p-3 dark:border-white/10"
                        >
                          <CheckCircle2Icon className="mt-0.5 size-4 shrink-0 text-amber" />
                          <span className="text-xs font-medium leading-snug text-navy/80 dark:text-white/80">{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </article>
          )
        })}
      </div>

        <div className="mt-12 grid gap-8 rounded-3xl bg-navy p-8 text-white md:mt-16 md:grid-cols-12 md:gap-10 md:p-12">
          <div className="md:col-span-2">
            <div className="flex size-16 items-center justify-center rounded-2xl border border-amber/20 bg-amber text-white">
              <HeadphonesIcon className="size-7" />
            </div>
          </div>
          <div className="md:col-span-7">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-amber">After launch</p>
            <h3 className="text-xl font-bold tracking-tight md:text-2xl">Most clients stay on as a long-term partner.</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/70 md:text-base">
              Launching is the start, not the finish. Most clients keep us on a retainer for ongoing development, A/B testing, and feature work after go-live.
            </p>
          </div>
          <div className="md:col-span-3 md:flex md:items-center md:justify-end">
            <Link
              href="/services#support"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-white px-5 text-xs font-semibold uppercase tracking-wide text-navy hover:bg-amber hover:text-white"
            >
              Growth retainers
              <ArrowRightIcon className="size-4" />
            </Link>
          </div>
        </div>
    </SectionWrapper>
  )
}
