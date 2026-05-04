import { MapPinIcon, PhoneIcon, MailIcon } from "lucide-react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"
import Link from "next/link"

const contactCards = [
  {
    icon: MapPinIcon,
    title: "Physical Node",
    primary: "4525 South 23rd St Apt 5",
    secondary: "Milwaukee, WI 53221, USA",
  },
  {
    icon: PhoneIcon,
    title: "Direct Line",
    primary: "Call (888) 396-8739",
    secondary: "24/7 Active Response",
    href: "tel:+18883968739",
    titleAttr: "Call (888) 396-8739",
  },
  {
    icon: MailIcon,
    title: "Digital Uplink",
    primary: "info@firststepservices.tech",
    secondary: "Low-latency response",
    href: "mailto:info@firststepservices.tech",
    titleAttr: "Email us at info@firststepservices.tech",
  },
]

export function ContactCards() {
  return (
    <SectionWrapper id="contact-hubs" className="relative overflow-hidden">
      <div className="pointer-events-none absolute -left-10 top-0 select-none opacity-[0.04] dark:opacity-[0.06]">
        <span className="text-7xl font-bold uppercase leading-none tracking-tighter md:text-9xl">Direct</span>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {contactCards.map((card, i) => (
          <ScrollReveal key={card.title} delay={i * 100} direction="up">
            <div className="relative h-full overflow-hidden rounded-2xl border border-navy/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-navy-light md:p-8">
              <div className="mb-6 flex size-14 items-center justify-center rounded-2xl bg-navy text-white">
                <card.icon className="size-7" />
              </div>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">{card.title}</h3>
              {card.href ? (
                <Link href={card.href} title={card.titleAttr} className="text-lg font-bold text-navy hover:text-amber dark:text-white dark:hover:text-amber">
                  {card.primary}
                </Link>
              ) : (
                <p className="text-lg font-bold text-navy dark:text-white">{card.primary}</p>
              )}
              <p className="mt-3 text-sm text-muted-foreground">{card.secondary}</p>
              <div className="pointer-events-none absolute bottom-6 right-6 select-none text-3xl font-bold text-navy/[0.04] dark:text-white/[0.06]">
                0{i + 1}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  )
}
