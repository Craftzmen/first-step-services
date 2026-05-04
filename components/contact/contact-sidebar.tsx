import { ClockIcon, PhoneIcon, GlobeIcon, MessageCircleIcon, LinkIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"
import Link from "next/link"

const hours = [
  { day: "Monday", time: "8:00 AM – 6:00 PM" },
  { day: "Tuesday", time: "8:00 AM – 6:00 PM" },
  { day: "Wednesday", time: "8:00 AM – 6:00 PM" },
  { day: "Thursday", time: "8:00 AM – 6:00 PM" },
  { day: "Friday", time: "8:00 AM – 6:00 PM" },
  { day: "Saturday", time: "8:00 AM – 6:00 PM" },
  { day: "Sunday", time: "Closed" },
]

export function ContactSidebar() {
  return (
    <div className="space-y-8 lg:col-span-2">
      <ScrollReveal direction="right">
        <div className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-navy-light md:p-8">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex size-12 items-center justify-center rounded-xl bg-navy text-white">
              <ClockIcon className="size-5" />
            </div>
            <h3 className="text-lg font-bold tracking-tight text-navy dark:text-white">Active Windows</h3>
          </div>
          <ul className="space-y-3">
            {hours.map((h) => (
              <li
                key={h.day}
                className="flex items-center justify-between border-b border-navy/10 pb-3 last:border-0 last:pb-0 dark:border-white/10"
              >
                <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{h.day}</span>
                <span className={`text-xs font-semibold uppercase tracking-wide ${h.time === "Closed" ? "text-rose-500" : "text-amber"}`}>
                  {h.time}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </ScrollReveal>

      <ScrollReveal direction="right" delay={150}>
        <div className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-navy-light md:p-8">
          <h3 className="mb-6 text-lg font-bold tracking-tight text-navy dark:text-white">Connection Nodes</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { icon: GlobeIcon, label: "Facebook" },
              { icon: MessageCircleIcon, label: "Twitter" },
              { icon: LinkIcon, label: "LinkedIn" },
            ].map(({ icon: Icon, label }) => (
              <Link
                key={label}
                href="#"
                aria-label={label}
                className="flex size-14 items-center justify-center rounded-xl bg-navy text-white hover:bg-amber hover:text-navy"
              >
                <Icon className="size-6" />
              </Link>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal direction="right" delay={250}>
        <div className="rounded-2xl border border-navy/20 bg-amber p-6 shadow-md md:p-8">
          <div className="text-center">
            <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-xl bg-navy text-white">
              <PhoneIcon className="size-7" />
            </div>
            <h3 className="mb-2 text-2xl font-bold tracking-tight text-navy">Emergency?</h3>
            <p className="mb-6 text-sm text-navy/70">Immediate Technical Deployment.</p>
            <Button asChild className="h-12 w-full rounded-xl bg-navy text-sm font-semibold text-white hover:bg-white hover:text-navy">
              <Link href="tel:+18883968739">(888) 396-8739</Link>
            </Button>
          </div>
        </div>
      </ScrollReveal>
    </div>
  )
}
