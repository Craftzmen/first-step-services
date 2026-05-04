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
        <div className="mb-12 text-center md:mb-14">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-amber/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-amber">
            The Knowledge Base
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-navy dark:text-white md:text-3xl">
            Common <span className="text-amber">Queries.</span>
          </h2>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="mx-auto max-w-3xl space-y-3">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="mb-3 rounded-2xl border border-navy/10 bg-white px-5 py-1 dark:border-white/10 dark:bg-navy-light md:px-6"
              >
                <AccordionTrigger className="py-5 text-left text-sm font-semibold tracking-tight text-navy hover:text-amber hover:no-underline dark:text-white md:text-base">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5">
                  <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">{faq.a}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </ScrollReveal>
    </SectionWrapper>
  )
}
