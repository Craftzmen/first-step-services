import { MapPinIcon, PhoneIcon, MailIcon } from "lucide-react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"
import Link from "next/link"

const contactCards = [
  {
    icon: MapPinIcon,
    title: "Physical Node",
    primary: "2733 Stanley St",
    secondary: "Stevens Point, WI 54481, USA",
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
      {/* Decorative Watermark */}
      <div className="absolute -left-20 top-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none select-none">
        <span className="text-[15rem] font-black tracking-tighter leading-none uppercase">Direct</span>
      </div>

      <div className="grid gap-10 md:grid-cols-3">
        {contactCards.map((card, i) => (
          <ScrollReveal key={card.title} delay={i * 100} direction="up">
            <div className="group relative h-full overflow-hidden rounded-[3rem] bg-white p-12 dark:bg-navy-light shadow-xl transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl">
              <div className="mb-10 flex size-20 items-center justify-center rounded-[2rem] bg-navy text-white transition-all duration-500 group-hover:bg-amber group-hover:text-navy group-hover:rotate-6">
                <card.icon className="size-8" />
              </div>
              <h3 className="mb-6 text-2xl font-black uppercase tracking-tight text-navy/40 dark:text-white/40">{card.title}</h3>
              {card.href ? (
                <Link
                  href={card.href}
                  title={card.titleAttr}
                  className="text-2xl font-black text-navy dark:text-white transition-colors hover:text-amber"
                >
                  {card.primary}
                </Link>
              ) : (
                <p className="text-2xl font-black text-navy dark:text-white">{card.primary}</p>
              )}
              <p className="mt-4 text-base text-muted-foreground font-medium">
                {card.secondary}
              </p>
              {/* Decorative Accent */}
              <div className="absolute bottom-10 right-10 text-6xl font-black text-navy/[0.02] dark:text-white/[0.03] select-none pointer-events-none">
                0{i + 1}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  )
}
