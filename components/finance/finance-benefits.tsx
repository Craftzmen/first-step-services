import { ZapIcon, ClockIcon, DollarSignIcon, FileTextIcon, ShieldCheckIcon, PhoneIcon } from "lucide-react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"

const benefits = [
  { icon: ZapIcon, label: "Instant Eligibility Check" },
  { icon: ClockIcon, label: "Fast Approval Process" },
  { icon: DollarSignIcon, label: "Competitive Rates" },
  { icon: FileTextIcon, label: "Minimal Documentation" },
  { icon: ShieldCheckIcon, label: "No Hidden Charges" },
  { icon: PhoneIcon, label: "Dedicated Loan Advisors" },
]

export function FinanceBenefits() {
  return (
    <SectionWrapper>
      <ScrollReveal>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl text-navy dark:text-white">
            The Prime <span className="text-amber">Advantage</span>
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-3 border-y border-border left-0 divide-y sm:divide-y-0 sm:divide-x divide-border">
        {benefits.map((item, i) => (
          <ScrollReveal key={item.label} delay={i * 80}>
            <div className="flex flex-col items-center justify-center gap-4 bg-white p-10 transition-colors hover:bg-muted text-center dark:bg-card dark:hover:bg-muted/50 h-full border-b sm:border-b-0">
              <div className="flex size-14 shrink-0 items-center justify-center bg-navy text-amber">
                <item.icon className="size-6" />
              </div>
              <span className="text-base font-bold uppercase tracking-wider">{item.label}</span>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  )
}
