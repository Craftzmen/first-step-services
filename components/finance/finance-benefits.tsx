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
      {/* Decorative Gradient */}
      <div className="absolute top-0 right-0 h-full w-1/3 bg-gradient-to-l from-amber/[0.03] to-transparent pointer-events-none" />

      <ScrollReveal>
        <div className="text-center mb-24">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber/10 px-5 py-2 text-[10px] font-black uppercase tracking-[0.3em] text-amber">
            The Advantage
          </div>
          <h2 className="text-5xl font-black tracking-tighter md:text-7xl text-navy dark:text-white leading-[0.9]">
            The First Step <br /><span className="text-amber">Edge.</span>
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((item, i) => (
          <ScrollReveal key={item.label} delay={i * 80} direction="up">
            <div className="group relative flex items-center gap-6 rounded-3xl border border-navy/5 bg-white p-8 transition-all duration-500 hover:border-amber/40 hover:shadow-2xl dark:bg-navy-light dark:border-white/5">
              <div className="flex size-16 shrink-0 items-center justify-center rounded-[1.25rem] bg-navy text-white transition-all duration-500 max-md:transition-none md:group-hover:bg-amber md:group-hover:text-navy md:group-hover:-rotate-6 md:group-hover:scale-110">
                <item.icon className="size-7" />
              </div>
              <span className="text-sm font-black uppercase tracking-widest text-navy dark:text-white/80">{item.label}</span>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  )
}
