import { SendIcon, MailCheckIcon, CalendarCheckIcon } from "lucide-react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"

const stages = [
  {
    num: "01",
    icon: SendIcon,
    title: "You send your brief",
    desc: "Use the form below or email us directly. A few sentences about your store and the work ahead is plenty to get started.",
  },
  {
    num: "02",
    icon: MailCheckIcon,
    title: "We reply within 1 business day",
    desc: "A real human, with either a clear next step, a proposal, or a couple of follow-up questions to sharpen the brief.",
  },
  {
    num: "03",
    icon: CalendarCheckIcon,
    title: "We schedule a discovery call",
    desc: "30 minutes on Zoom or a phone line. We walk through scope, timeline, and quote — no decks, no commitment.",
  },
]

export function ContactCards() {
  return (
    <SectionWrapper id="next-steps" className="relative">
      <ScrollReveal>
        <div className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-amber/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-amber">
              What happens next
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-navy dark:text-white md:text-4xl lg:text-5xl">
              Three short steps. <span className="text-amber">No surprises.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Every inquiry gets the same treatment — fast, transparent, and grounded in what your team actually needs.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid gap-5 md:grid-cols-3 md:gap-6">
        {stages.map((s, i) => (
          <ScrollReveal key={s.num} delay={i * 100} direction="up">
            <div className="group relative h-full rounded-3xl border border-navy/10 bg-card p-7 transition hover:border-amber/40 dark:border-white/10 md:p-8">
              <div className="flex items-center justify-between">
                <span className="text-4xl font-bold tracking-tight text-amber/70 md:text-5xl">{s.num}</span>
                <span className="flex size-11 items-center justify-center rounded-2xl bg-navy text-white">
                  <s.icon className="size-5" />
                </span>
              </div>
              <h3 className="mt-6 text-lg font-bold tracking-tight text-navy dark:text-white md:text-xl">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  )
}
