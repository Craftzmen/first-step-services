import { ShieldCheckIcon, HeartIcon, TrophyIcon, UsersIcon } from "lucide-react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"

const values = [
  {
    icon: ShieldCheckIcon,
    title: "Structural Integrity",
    desc: "Absolute transparency in every diagnostic protocol and engineering quote. No hidden parameters.",
  },
  {
    icon: HeartIcon,
    title: "Precision Tuning",
    desc: "Tailoring technical interventions to the specific telemetry and stress profiles of each vehicle.",
  },
  {
    icon: TrophyIcon,
    title: "Technical Superiority",
    desc: "Maintaining the highest standards of propulsion analysis and artisan component calibration.",
  },
  {
    icon: UsersIcon,
    title: "Regional Commitment",
    desc: "Providing the elite automotive standard for the Stevens Point landscape and beyond.",
  },
]

export function AboutValues() {
  return (
    <SectionWrapper background="muted">
      <ScrollReveal>
        <div className="mb-12 text-center md:mb-16">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-amber/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-amber">
            The Philosophy
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-navy dark:text-white md:text-3xl">
            What Drives Us <span className="text-amber">Every Day.</span>
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {values.map((v, i) => (
          <ScrollReveal key={v.title} delay={i * 100} direction="up">
            <div className="relative h-full rounded-2xl border border-navy/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-navy-light md:p-7">
              <div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-navy text-white">
                <v.icon className="size-6" />
              </div>
              <h3 className="mb-2 text-base font-bold tracking-tight text-navy dark:text-white">{v.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
              <div className="pointer-events-none absolute bottom-4 right-4 select-none text-3xl font-bold text-navy/[0.04] dark:text-white/[0.06]">
                0{i + 1}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  )
}
