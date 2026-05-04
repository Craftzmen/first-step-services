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
import Logo from '@/app/assets/images/logo.svg'

const serviceLinks = [
  { label: "Engine Optimization", href: "/services" },
  { label: "Binary Diagnostics", href: "/services" },
  { label: "Braking Dynamics", href: "/services" },
  { label: "Climate Engineering", href: "/services" },
  { label: "Fluid Vitality", href: "/services" },
  { label: "Propulsion Analysis", href: "/services" },
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
    <footer className="relative bg-navy text-white overflow-hidden border-t border-white/5">
      {/* ── Background Elements ── */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-amber/[0.02] to-transparent pointer-events-none" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 hidden size-96 rounded-full bg-amber/5 blur-3xl md:block md:blur-[120px]" />

      <div className="relative mx-auto max-w-[1400px] px-5 py-20 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">

          {/* ── Brand & Identity ── */}
          <div className="lg:col-span-5 space-y-8">
            <Link href="/" className="inline-block transition-transform hover:scale-105 duration-300">
              <Image
                src={Logo}
                alt="First Step Services"
                width={200}
                height={50}
                className="h-28 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-xl text-white/40 leading-relaxed max-w-md font-medium">
              Redefining automotive care through transparency, technology, and a commitment to absolute precision.
            </p>
            <div className="flex gap-4">
              {[
                { icon: GlobeIcon, label: "Web" },
                { icon: MessageCircleIcon, label: "Contact" },
                { icon: LinkIcon, label: "Links" }
              ].map((social, i) => (
                <Link
                  key={i}
                  href="#"
                  aria-label={social.label}
                  className="group relative flex size-12 items-center justify-center rounded-2xl bg-white/5 transition-all duration-300 hover:bg-amber hover:-translate-y-1"
                >
                  <social.icon className="size-5 text-white/40 group-hover:text-navy transition-colors" />
                </Link>
              ))}
            </div>
          </div>

          {/* ── Navigation Grid ── */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-8">
            {/* Exploration Links */}
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-amber mb-8">Explore</h4>
              <ul className="space-y-4">
                {quickLinks.map(link => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      prefetch={false}
                      className="text-sm text-white/40 hover:text-white transition-all hover:translate-x-1 inline-block font-semibold"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Expertise Links */}
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-amber mb-8">Expertise</h4>
              <ul className="space-y-4">
                {serviceLinks.slice(0, 5).map(link => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      prefetch={false}
                      className="text-sm text-white/40 hover:text-white transition-all hover:translate-x-1 inline-block font-semibold"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Column */}
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-amber mb-8">Support</h4>
              <div className="space-y-8">
                <div className="space-y-3">
                  <p className="text-xs font-black text-white/90 uppercase tracking-widest">Workshop</p>
                  <p className="text-sm text-white/40 leading-relaxed font-medium">
                    4525 South 23rd St Apt 5,<br />Milwaukee, WI 53221, USA
                  </p>
                </div>
                <div className="pt-6 border-t border-white/10 space-y-4">
                  <Link
                    href="tel:+18883968739"
                    className="group flex flex-col gap-1"
                  >
                    <span className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em] group-hover:text-amber transition-colors">Direct Line</span>
                    <span className="text-xl font-black text-white group-hover:text-amber transition-colors">(888) 396-8739</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em]">
            &copy; {new Date().getFullYear()} First Step Services — Precision Automotive Solutions
          </p>
          <div className="flex gap-10">
            {policyLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                prefetch={false}
                className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
