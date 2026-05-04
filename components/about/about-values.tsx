import { ShieldCheckIcon, HeartIcon, TrophyIcon, UsersIcon, TargetIcon } from "lucide-react"
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
        <div className="text-center mb-24">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber/10 px-5 py-2 text-[10px] font-black uppercase tracking-[0.3em] text-amber">
            The Philosophy
          </div>
          <h2 className="text-5xl font-black tracking-tighter md:text-7xl text-navy dark:text-white">
            What Drives Us <br /><span className="text-amber">Every Day.</span>
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {values.map((v, i) => (
          <ScrollReveal key={v.title} delay={i * 100} direction="up">
            <div className="group relative h-full rounded-[2.5rem] bg-white p-10 dark:bg-navy-light shadow-xl transition-all duration-500 max-md:transition-none md:hover:-translate-y-3 md:hover:shadow-2xl">
              <div className="mb-8 flex size-16 items-center justify-center rounded-3xl bg-navy text-white transition-all duration-500 max-md:transition-none md:group-hover:bg-amber md:group-hover:text-navy md:group-hover:-rotate-6">
                <v.icon className="size-8" />
              </div>
              <h3 className="mb-4 text-2xl font-black tracking-tight text-navy dark:text-white">{v.title}</h3>
              <p className="text-base leading-relaxed text-muted-foreground font-medium">
                {v.desc}
              </p>
              {/* Decorative Accent */}
              <div className="absolute bottom-6 right-6 text-6xl font-black text-navy/[0.02] dark:text-white/[0.03] select-none pointer-events-none">
                0{i + 1}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  )
}
