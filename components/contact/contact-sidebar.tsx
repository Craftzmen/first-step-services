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
    <div className="space-y-10 lg:col-span-2">
      {/* Working hours card */}
      <ScrollReveal direction="right">
        <div className="rounded-[3rem] bg-white p-10 dark:bg-navy-light shadow-xl">
          <div className="mb-10 flex items-center gap-4">
            <div className="flex size-14 items-center justify-center rounded-2xl bg-navy text-white shadow-xl">
              <ClockIcon className="size-6" />
            </div>
            <h3 className="text-2xl font-black tracking-tight text-navy dark:text-white">Active Windows</h3>
          </div>
          <ul className="space-y-4">
            {hours.map((h) => (
              <li
                key={h.day}
                className="flex items-center justify-between border-b border-navy/5 dark:border-white/5 pb-4 last:border-0 last:pb-0"
              >
                <span className="text-sm font-black uppercase tracking-widest text-navy/40 dark:text-white/40">{h.day}</span>
                <span
                  className={`text-sm font-black uppercase tracking-widest ${h.time === "Closed" ? "text-rose-500" : "text-amber"}`}
                >
                  {h.time}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </ScrollReveal>

      {/* Social links card */}
      <ScrollReveal direction="right" delay={150}>
        <div className="rounded-[3rem] bg-white p-10 dark:bg-navy-light shadow-xl">
          <h3 className="mb-10 text-2xl font-black tracking-tight text-navy dark:text-white">Connection Nodes</h3>
          <div className="flex flex-wrap gap-4">
            {[
              { icon: GlobeIcon, label: "Facebook" },
              { icon: MessageCircleIcon, label: "Twitter" },
              { icon: LinkIcon, label: "LinkedIn" },
            ].map(({ icon: Icon, label }) => (
              <Link
                key={label}
                href="#"
                aria-label={label}
                className="group flex size-20 items-center justify-center rounded-[1.5rem] bg-navy text-white transition-all duration-500 hover:bg-amber hover:text-navy hover:-rotate-6 hover:scale-110"
              >
                <Icon className="size-8" />
              </Link>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Emergency card */}
      <ScrollReveal direction="right" delay={250}>
        <div className="group relative overflow-hidden rounded-[3rem] bg-amber p-10 shadow-2xl transition-all duration-700 hover:rotate-1">
          {/* Decorative pattern */}
          <div className="absolute -right-10 -top-10 size-40 rounded-full bg-navy/5 blur-[40px]" />
          
          <div className="relative z-10 text-center">
            <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-[1.5rem] bg-navy text-white shadow-2xl transition-transform duration-500 group-hover:rotate-12">
              <PhoneIcon className="size-8" />
            </div>
            <h3 className="mb-3 text-3xl font-black tracking-tight text-navy leading-none">Emergency?</h3>
            <p className="mb-8 text-lg text-navy/60 font-medium">
              Immediate Technical Deployment.
            </p>
            <Button
              asChild
              className="h-16 w-full rounded-2xl bg-navy text-lg text-white font-black uppercase tracking-tighter hover:bg-white hover:text-navy transition-all duration-500 shadow-2xl"
            >
              <Link href="tel:+18883968739">(888) 396-8739</Link>
            </Button>
          </div>
        </div>
      </ScrollReveal>
    </div>
  )
}
