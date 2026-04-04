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
    q: "How long does an online consultation take?",
    a: "Typically 15–30 minutes. Our mechanics are efficient and thorough, ensuring you get a clear diagnosis without wasting time.",
  },
  {
    q: "Do I need any special equipment for the video call?",
    a: "Just your smartphone! A stable internet connection and a well-lit area around the vehicle is all you need.",
  },
  {
    q: "What if the issue can't be diagnosed remotely?",
    a: "No worries — we'll schedule an on-site visit or workshop appointment at your convenience. You'll never be left without a solution.",
  },
  {
    q: "Is the cost estimate binding?",
    a: "Our estimates are accurate and transparent. If any additional work is discovered, we'll always get your approval before proceeding.",
  },
]

export function FaqSection() {
  return (
    <SectionWrapper background="muted">
      <ScrollReveal>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl text-navy dark:text-white">
            Common <span className="text-amber">Questions</span>
          </h2>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="mx-auto max-w-3xl bg-white border border-border p-8 dark:bg-card">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-b border-border last:border-0 hover:bg-muted/50 px-4 transition-colors">
                <AccordionTrigger className="text-left font-bold py-6 hover:no-underline hover:text-amber transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-base text-muted-foreground leading-relaxed">{faq.a}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </ScrollReveal>
    </SectionWrapper>
  )
}
