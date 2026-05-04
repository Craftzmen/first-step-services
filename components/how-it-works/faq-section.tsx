import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"

const faqs = [
  {
    q: "What is the typical duration of a remote audit?",
    a: "Typically 15–30 cycles. Our master engineers are optimized for diagnostic efficiency, ensuring a definitive output without latency.",
  },
  {
    q: "Are specialized sensors required for protocol initiation?",
    a: "Only your primary mobile device. A stable uplink and adequate environmental lighting around the vehicle are the only prerequisites.",
  },
  {
    q: "What if a remote diagnosis is inconclusive?",
    a: "We deploy a mobile engineering unit or facilitate workshop integration for a physical deep-dive. Your vehicle's integrity is our priority.",
  },
  {
    q: "Is the capital breakdown definitive?",
    a: "Yes, our estimates are based on rigorous structural data. Any auxiliary interventions discovered during the process require explicit protocol approval.",
  },
]

export function FaqSection() {
  return (
    <SectionWrapper background="muted" className="relative overflow-hidden">
      <ScrollReveal>
        <div className="text-center mb-24">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber/10 px-5 py-2 text-[10px] font-black uppercase tracking-[0.3em] text-amber">
            The Knowledge Base
          </div>
          <h2 className="text-5xl font-black tracking-tighter md:text-7xl text-navy dark:text-white leading-[0.9]">
            Common <span className="text-amber">Queries.</span>
          </h2>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="mx-auto max-w-4xl space-y-4">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem 
                key={i} 
                value={`faq-${i}`} 
                className="mb-6 rounded-[2rem] border border-navy/5 bg-white px-8 py-2 dark:bg-navy-light dark:border-white/5 transition-all duration-300 hover:shadow-xl"
              >
                <AccordionTrigger className="text-left text-xl font-black tracking-tight text-navy dark:text-white py-8 hover:no-underline hover:text-amber transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-8">
                  <p className="text-lg text-muted-foreground font-medium leading-relaxed max-w-2xl">{faq.a}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </ScrollReveal>
    </SectionWrapper>
  )
}
