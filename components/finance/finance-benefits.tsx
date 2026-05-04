import { ZapIcon, ClockIcon, DollarSignIcon, FileTextIcon, ShieldCheckIcon, PhoneIcon } from "lucide-react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"

const benefits = [
  { icon: ZapIcon, label: "Rapid Telemetry Check" },
  { icon: ClockIcon, label: "Expedited Approval Protocol" },
  { icon: DollarSignIcon, label: "Aggressive Interest Calibration" },
  { icon: FileTextIcon, label: "Simplified Data Requirement" },
  { icon: ShieldCheckIcon, label: "Zero Latency Costs" },
  { icon: PhoneIcon, label: "Elite Advisory Node" },
]

export function FinanceBenefits() {
  return (
    <SectionWrapper className="relative overflow-hidden">
      <ScrollReveal>
        <div className="mb-12 text-center md:mb-16">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-amber/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-amber">
            The Advantage
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-navy dark:text-white md:text-3xl">
            The First Step <span className="text-amber">Edge.</span>
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((item, i) => (
          <ScrollReveal key={item.label} delay={i * 80} direction="up">
            <div className="flex items-center gap-4 rounded-2xl border border-navy/10 bg-white p-5 dark:border-white/10 dark:bg-navy-light">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-navy text-white">
                <item.icon className="size-6" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wide text-navy dark:text-white/85">{item.label}</span>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  )
}
