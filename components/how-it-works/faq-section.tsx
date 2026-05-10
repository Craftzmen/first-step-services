import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"

const faqs = [
  {
    q: "Which platforms do you support?",
    a: "Shopify and Shopify Plus, WooCommerce, BigCommerce, Adobe Commerce / Magento, and headless setups on Next.js with Shopify Hydrogen, Sanity, or contentful. If your store runs on something else, we will tell you honestly whether we are the right fit.",
  },
  {
    q: "How long does a typical build take?",
    a: "A focused Shopify build is typically four to eight weeks. A full migration or a headless project usually runs eight to twelve. We share a fixed timeline as part of every proposal so you can plan around it.",
  },
  {
    q: "Will you migrate my existing data?",
    a: "Yes. We migrate products, customers, orders, content, and SEO redirects from your current platform with a documented data plan and a staging environment you can review before launch.",
  },
  {
    q: "What does ongoing support cover?",
    a: "Retainers cover whatever moves the business — feature releases, content updates, third-party integrations, performance work, A/B testing, and quick fixes. You get a dedicated lead and weekly check-ins.",
  },
]

export function FaqSection() {
  return (
    <SectionWrapper background="muted" className="relative">
      <ScrollReveal>
        <div className="mb-10 grid gap-6 md:mb-14 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-6">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-amber/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-amber">
              FAQ
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-navy dark:text-white md:text-4xl lg:text-5xl">
              Common <span className="text-amber">questions.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:col-span-6 md:self-end md:text-base">
            The questions we hear most before a project kicks off — and short, honest answers. If yours isn&apos;t here, send us a message and we&apos;ll get back to you within one business day.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid gap-5 md:grid-cols-2 md:gap-6">
        {faqs.map((faq, i) => (
          <ScrollReveal key={faq.q} delay={i * 80} direction="up">
            <div className="group relative h-full rounded-3xl border border-navy/10 bg-card p-6 transition hover:border-amber/40 dark:border-white/10 md:p-8">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber">Q.0{i + 1}</span>
              <h3 className="mt-3 text-lg font-bold tracking-tight text-navy dark:text-white md:text-xl">{faq.q}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">{faq.a}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  )
}
