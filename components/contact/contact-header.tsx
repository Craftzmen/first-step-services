import Link from "next/link"
import { ChevronRightIcon, MapPinIcon, PhoneIcon, MailIcon } from "lucide-react"

const masthead = [
  {
    icon: PhoneIcon,
    label: "Direct line",
    primary: "(888) 396-8739",
    secondary: "Mon–Sat, 8am–6pm CT",
    href: "tel:+18883968739",
  },
  {
    icon: MailIcon,
    label: "Email",
    primary: "info@firststepservices.tech",
    secondary: "Reply within 1 business day",
    href: "mailto:info@firststepservices.tech",
  },
  {
    icon: MapPinIcon,
    label: "Office",
    primary: "Milwaukee, WI",
    secondary: "4525 South 23rd St Apt 5",
  },
]

export function ContactHeader() {
  return (
    <section className="relative overflow-hidden bg-navy pt-28 pb-12 text-white md:pt-36 md:pb-16">
      <div aria-hidden className="pointer-events-none absolute -top-40 right-0 size-[520px] rounded-full bg-amber/15 blur-[160px]" />
      <div aria-hidden className="pointer-events-none absolute -bottom-40 left-0 size-[420px] rounded-full bg-amber/10 blur-[140px]" />

      <div className="relative mx-auto w-full max-w-[1200px] px-4 md:px-6">
        <nav aria-label="Breadcrumb" className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white/60">
          <Link href="/" className="hover:text-amber">Home</Link>
          <ChevronRightIcon className="size-3 text-white/25" aria-hidden />
          <span className="text-amber">Contact</span>
        </nav>

        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-amber">Get in touch</p>
          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4.25rem]">
            Tell us about <br />
            <span className="text-amber">your project.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
            A 60-second brief is enough for us to write back with a real next step — a discovery call, a proposal, or a few thoughtful questions.
          </p>
        </div>

        {/* Masthead row */}
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/10 sm:grid-cols-3 md:mt-16">
          {masthead.map((m) => {
            const inner = (
              <div className="flex h-full flex-col gap-3 bg-navy/95 p-5 transition group-hover:bg-navy md:p-6">
                <span className="flex size-10 items-center justify-center rounded-xl bg-amber/15 text-amber">
                  <m.icon className="size-4" />
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/45">{m.label}</p>
                  <p className="mt-1 text-base font-bold tracking-tight text-white md:text-lg">{m.primary}</p>
                  <p className="mt-1 text-xs text-white/55">{m.secondary}</p>
                </div>
              </div>
            )
            return m.href ? (
              <Link key={m.label} href={m.href} className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-amber">
                {inner}
              </Link>
            ) : (
              <div key={m.label} className="group block">
                {inner}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
