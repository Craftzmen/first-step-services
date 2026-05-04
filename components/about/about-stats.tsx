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
      <div className="grid grid-cols-2 gap-12 md:grid-cols-4">
        {stats.map((stat, i) => (
          <ScrollReveal key={stat.label} delay={i * 100} direction="up">
            <div className="group flex flex-col items-center text-center">
              <div className="text-6xl font-black tracking-tighter text-navy transition-colors duration-500 group-hover:text-amber dark:text-white md:text-7xl lg:text-8xl motion-reduce:transition-none">
                {stat.value}
                {stat.suffix}
              </div>
              <div className="mt-4 text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground transition-colors group-hover:text-navy dark:group-hover:text-white">
                {stat.label}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  )
}
