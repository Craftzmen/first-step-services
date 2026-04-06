import { MapPinIcon, PhoneIcon, MailIcon } from "lucide-react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"
import Link from "next/link"

const contactCards = [
  {
    icon: MapPinIcon,
    title: "Visit Us",
    primary: "1916 E 51ST Street 2FL",
    secondary: "Brooklyn, NY 11234",
  },
  {
    icon: PhoneIcon,
    title: "Call Us",
    primary: "(888) 286-8307",
    secondary: "24/7 Available",
    href: "tel:+18882868307",
  },
  {
    icon: MailIcon,
    title: "Email Us",
    primary: "query@primeautodeals.tech",
    secondary: "We reply within 24 hours",
    href: "mailto:query@primeautodeals.tech",
  },
]

export function ContactCards() {
  return (
    <SectionWrapper>
      <div className="grid gap-6 md:grid-cols-3">
        {contactCards.map((card, i) => (
          <ScrollReveal key={card.title} delay={i * 100}>
            <div className="h-full border border-border bg-white text-center transition-colors hover:border-amber dark:bg-card p-10">
              <div className="mx-auto mb-6 flex size-16 items-center justify-center bg-navy text-amber">
                <card.icon className="size-6" />
              </div>
              <h3 className="mb-3 font-bold uppercase tracking-wider text-xl text-navy dark:text-white">{card.title}</h3>
              {card.href ? (
                <Link
                  href={card.href}
                  className="text-lg font-bold text-amber transition-colors hover:text-amber-dark"
                >
                  {card.primary}
                </Link>
              ) : (
                <p className="text-lg font-bold text-foreground">{card.primary}</p>
              )}
              <p className="mt-2 text-sm text-muted-foreground font-medium">
                {card.secondary}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  )
}
