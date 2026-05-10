import { ClockIcon, GlobeIcon, MessageCircleIcon, LinkIcon } from "lucide-react"
import Link from "next/link"

const hours = [
  { day: "Mon", time: "8 AM – 6 PM" },
  { day: "Tue", time: "8 AM – 6 PM" },
  { day: "Wed", time: "8 AM – 6 PM" },
  { day: "Thu", time: "8 AM – 6 PM" },
  { day: "Fri", time: "8 AM – 6 PM" },
  { day: "Sat", time: "8 AM – 6 PM" },
  { day: "Sun", time: "Closed" },
]

const socials = [
  { icon: GlobeIcon, label: "Twitter / X", handle: "@firststeptech" },
  { icon: MessageCircleIcon, label: "LinkedIn", handle: "/firststepservices" },
  { icon: LinkIcon, label: "Instagram", handle: "@firststep.tech" },
]

export function ContactSidebar() {
  return (
    <div className="space-y-6 lg:col-span-5">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-navy p-7 text-white md:p-8">
          <div className="relative">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex size-12 items-center justify-center rounded-2xl border border-amber/20 bg-amber text-white">
                <ClockIcon className="size-5" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-amber">All times CT</p>
                <h3 className="mt-1 text-lg font-bold tracking-tight">Office Hours</h3>
              </div>
            </div>

            <ul className="divide-y divide-white/10">
              {hours.map((h) => {
                const isClosed = h.time === "Closed"
                return (
                  <li key={h.day} className="flex items-center justify-between py-3">
                    <span className="text-xs font-bold uppercase tracking-[0.25em] text-white/55">{h.day}</span>
                    <span
                      className={`text-sm font-semibold ${
                        isClosed ? "text-rose-300" : "text-white"
                      }`}
                    >
                      {h.time}
                    </span>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        <div className="rounded-3xl border border-navy/10 bg-card p-7 dark:border-white/10 md:p-8">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-amber">Stay connected</p>
          <h3 className="mb-6 text-lg font-bold tracking-tight text-navy dark:text-white">
            Follow the work in progress.
          </h3>

          <ul className="space-y-3">
            {socials.map((s) => (
              <li key={s.label}>
                <Link
                  href="#"
                  aria-label={s.label}
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-navy/10 bg-background p-3 hover:border-amber/40 dark:border-white/10"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-navy text-white group-hover:bg-amber">
                      <s.icon className="size-4" />
                    </span>
                    <div>
                      <p className="text-sm font-bold text-navy dark:text-white">{s.label}</p>
                      <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                        {s.handle}
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber">Follow</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
    </div>
  )
}
