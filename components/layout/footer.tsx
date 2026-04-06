import Link from "next/link"
import Image from "next/image"
import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  ClockIcon,
  GlobeIcon,
  MessageCircleIcon,
  LinkIcon,
} from "lucide-react"

const serviceLinks = [
  { label: "Performance Upgrades ($500+)", href: "/services" },
  { label: "Computer Diagnostics ($100+)", href: "/services" },
  { label: "Brake Service ($150+)", href: "/services" },
  { label: "AC Service ($120+)", href: "/services" },
  { label: "Lube, Oil & Filters ($60+)", href: "/services" },
  { label: "Engine Diagnostics ($150+)", href: "/services" },
]

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Finance", href: "/finance" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Contact", href: "/contact" },
]

const policyLinks = [
  { label: "Privacy Policy", href: "/policies/privacy-policy" },
  { label: "Refund Policy", href: "/policies/refund-policy" },
]

const hours = [
  { day: "Monday – Saturday", time: "8:00 AM – 6:00 PM" },
  { day: "Sunday", time: "Closed" },
]

export function Footer() {
  return (
    <footer className="bg-navy text-white/80">
      <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="mb-5 flex items-center gap-2.5">
              <Image
                src="/logo.png"
                alt="Prime Auto Deals"
                width={160}
                height={45}
                className="h-14 w-auto"
              />
            </Link>
            <p className="mb-6 text-sm leading-relaxed text-white/60">
              At Prime Auto Deals, we help prevent vehicle damage caused by
              neglected maintenance. Our skilled technicians provide reliable,
              affordable, and convenient services to keep your car running
              smoothly.
            </p>
            <div className="flex gap-3">
              {[
                { icon: GlobeIcon, label: "Facebook" },
                { icon: MessageCircleIcon, label: "Twitter" },
                { icon: LinkIcon, label: "LinkedIn" },
              ].map(({ icon: Icon, label }) => (
                <Link
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex size-9 items-center justify-center rounded-full bg-white/5 text-white/50 transition-all hover:bg-amber hover:text-navy"
                >
                  <Icon className="size-4" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 transition-colors hover:text-amber"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              {policyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 transition-colors hover:text-amber"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Our Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 transition-colors hover:text-amber"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPinIcon className="mt-0.5 size-4 shrink-0 text-amber" />
                <span className="text-sm text-white/50">
                  1916 E 51ST Street 2FL, Brooklyn, NY 11234
                </span>
              </li>
              <li>
                <Link
                  href="tel:+18882868307"
                  className="flex items-center gap-3 text-sm text-white/50 transition-colors hover:text-amber"
                >
                  <PhoneIcon className="size-4 shrink-0 text-amber" />
                  (888) 286-8307
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:query@primeautodeals.tech"
                  className="flex items-center gap-3 text-sm text-white/50 transition-colors hover:text-amber"
                >
                  <MailIcon className="size-4 shrink-0 text-amber" />
                  query@primeautodeals.tech
                </Link>
              </li>
            </ul>

            <div className="mt-6">
              <div className="flex items-center gap-2 text-sm font-medium text-white/70">
                <ClockIcon className="size-4 text-amber" />
                Service Hours
              </div>
              <ul className="mt-3 space-y-2">
                {hours.map((h) => (
                  <li
                    key={h.day}
                    className="flex justify-between text-xs text-white/40"
                  >
                    <span>{h.day}</span>
                    <span>{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-3 px-5 py-5 text-xs text-white/40 sm:flex-row md:px-8">
          <p>&copy; {new Date().getFullYear()} Prime Auto Deals. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/policies/privacy-policy" className="transition-colors hover:text-amber">
              Privacy Policy
            </Link>
            <Link href="/policies/refund-policy" className="transition-colors hover:text-amber">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
