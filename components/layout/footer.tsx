import Link from "next/link"
import Image from "next/image"
import { GlobeIcon, MessageCircleIcon, LinkIcon } from "lucide-react"
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

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-navy text-white">
      <div className="relative mx-auto max-w-[1200px] px-4 py-14 md:px-6 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">

          {/* ── Brand & Identity ── */}
          <div className="lg:col-span-5 space-y-8">
            <Link href="/" className="inline-block">
              <Image
                src={Logo}
                alt="First Step Services"
                width={220}
                height={62}
                className="h-[4.25rem] w-auto brightness-0 invert md:h-[5rem]"
              />
            </Link>
            <p className="max-w-md text-sm leading-relaxed text-white/55">
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
                  className="group flex size-11 items-center justify-center rounded-xl bg-white/10 hover:bg-amber"
                >
                  <social.icon className="size-4 text-white/50 group-hover:text-navy" />
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
                      className="inline-block text-sm font-medium text-white/50 hover:text-white"
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
                      className="inline-block text-sm font-medium text-white/50 hover:text-white"
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
        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-6 md:flex-row md:gap-8">
          <p className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em]">
            &copy; {new Date().getFullYear()} First Step Services — Precision Automotive Solutions
          </p>
          <div className="flex gap-10">
            {policyLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
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
