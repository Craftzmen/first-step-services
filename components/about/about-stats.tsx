import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"

const stats = [
  { value: 2026, label: "Operational Baseline", suffix: "" },
  { value: 20, label: "Aggregated Team Expertise", suffix: "y+" },
  { value: 500, label: "Calibration Points", suffix: "+" },
  { value: 100, label: "Engineering Accuracy", suffix: "%" },
] as const

export function AboutStats() {
  return (
    <SectionWrapper className="relative overflow-hidden">
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-10">
        {stats.map((stat, i) => (
          <ScrollReveal key={stat.label} delay={i * 100} direction="up">
            <div className="flex flex-col items-center text-center">
              <div className="text-3xl font-bold tracking-tight text-navy dark:text-white md:text-4xl">
                {stat.value}
                {stat.suffix}
              </div>
              <div className="mt-2 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">{stat.label}</div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  )
}
