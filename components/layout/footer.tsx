import Link from "next/link"
import Image from "next/image"
import {
  ArrowRightIcon,
  GlobeIcon,
  MessageCircleIcon,
  LinkIcon,
  StoreIcon,
  ArrowRightLeftIcon,
  LineChartIcon,
  PlugIcon,
  LayersIcon,
  RocketIcon,
  PhoneIcon,
  MailIcon,
  MapPinIcon,
} from "lucide-react"
import logoImage from "@/app/assets/images/logo.png"

const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Contact", href: "/contact" },
]

const serviceLinks = [
  { icon: StoreIcon, label: "Store Design & Build", href: "/services#store-build" },
  { icon: ArrowRightLeftIcon, label: "Platform Migration", href: "/services#migration" },
  { icon: LineChartIcon, label: "Conversion Optimization", href: "/services#cro" },
  { icon: PlugIcon, label: "Integrations & APIs", href: "/services#integrations" },
  { icon: LayersIcon, label: "Headless Commerce", href: "/services#headless" },
  { icon: RocketIcon, label: "Growth & Support", href: "/services#support" },
]

const policyLinks = [
  { label: "Privacy Policy", href: "/policies/privacy-policy" },
  { label: "Refund Policy", href: "/policies/refund-policy" },
]

const socials = [
  { icon: GlobeIcon, label: "Twitter / X", href: "#" },
  { icon: MessageCircleIcon, label: "LinkedIn", href: "#" },
  { icon: LinkIcon, label: "Instagram", href: "#" },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy text-white">
      <div aria-hidden className="pointer-events-none absolute -right-32 -top-32 size-[420px] rounded-full bg-amber/10 blur-[140px]" />
      <div aria-hidden className="pointer-events-none absolute -bottom-24 -left-32 size-[320px] rounded-full bg-amber/10 blur-[120px]" />

      <div className="relative mx-auto max-w-[1200px] px-4 pt-16 md:px-6 md:pt-20">
        {/* Top tagline + CTA */}
        <div className="grid items-end gap-8 border-b border-white/10 pb-14 md:grid-cols-12 md:gap-10 md:pb-16">
          <div className="md:col-span-7">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-amber">
              First Step Services
            </p>
            <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-[2.75rem]">
              We design and build<br />
              <span className="text-amber">the stores that grow brands.</span>
            </h2>
          </div>
          <div className="flex flex-col gap-3 md:col-span-5 md:items-end">
            <Link
              href="/contact"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-amber px-7 text-xs font-semibold uppercase tracking-wide text-white shadow-lg shadow-amber/25 hover:bg-amber-light sm:w-auto"
            >
              Book a Strategy Call
              <ArrowRightIcon className="size-4" />
            </Link>
            <Link
              href="tel:+18883968739"
              className="inline-flex h-11 items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wide text-white/60 hover:text-amber"
            >
              <PhoneIcon className="size-4 text-amber" />
              (888) 396-8739
            </Link>
          </div>
        </div>

        {/* Link grid */}
        <div className="grid gap-12 py-14 md:grid-cols-12 md:gap-8 md:py-16">
          {/* Brand */}
          <div className="space-y-6 md:col-span-4">
            <Link href="/" aria-label="First Step Services — home" className="inline-flex items-center">
              <Image
                src={logoImage}
                alt="First Step Services"
                sizes="(max-width: 768px) 200px, 240px"
                className="h-14 w-auto brightness-0 invert md:h-16"
              />
            </Link>
            <p className="max-w-md text-sm leading-relaxed text-white/55">
              A senior agency for brands building, replatforming, and growing on Shopify, WooCommerce, BigCommerce, and headless stacks.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="group flex size-10 items-center justify-center rounded-xl bg-white/5 transition hover:bg-amber"
                >
                  <s.icon className="size-4 text-white/55 transition group-hover:text-white" />
                </Link>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div className="md:col-span-2">
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.3em] text-amber">Explore</p>
            <ul className="space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-white/55 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.3em] text-amber">Services</p>
            <ul className="space-y-3">
              {serviceLinks.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="group flex items-center gap-2.5 text-sm font-medium text-white/55 transition hover:text-white"
                  >
                    <s.icon className="size-3.5 text-amber/55 transition group-hover:text-amber" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Reach us */}
          <div className="md:col-span-3">
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.3em] text-amber">Reach us</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-lg bg-amber/15 text-amber">
                  <MapPinIcon className="size-3.5" />
                </span>
                <span className="text-sm font-medium text-white/55">
                  4525 South 23rd St Apt 5<br />
                  Milwaukee, WI 53221, USA
                </span>
              </li>
              <li>
                <Link href="tel:+18883968739" className="group flex items-center gap-3">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-amber/15 text-amber transition group-hover:bg-amber group-hover:text-white">
                    <PhoneIcon className="size-3.5" />
                  </span>
                  <span className="text-sm font-medium text-white/55 transition group-hover:text-white">
                    (888) 396-8739
                  </span>
                </Link>
              </li>
              <li>
                <Link href="mailto:info@firststepservices.tech" className="group flex items-center gap-3">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-amber/15 text-amber transition group-hover:bg-amber group-hover:text-white">
                    <MailIcon className="size-3.5" />
                  </span>
                  <span className="break-all text-sm font-medium text-white/55 transition group-hover:text-white">
                    info@firststepservices.tech
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Decorative wordmark */}
        <div aria-hidden className="relative -mx-4 mt-2 select-none md:-mx-6">
          <p className="text-center font-bold uppercase leading-none tracking-tighter text-white/5 text-[clamp(3rem,18vw,14rem)]">
            FirstStep
          </p>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 md:flex-row md:gap-8">
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/40">
            &copy; {new Date().getFullYear()} First Step Services — E-commerce Solutions Agency
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {policyLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/40 transition hover:text-amber"
              >
                {link.label}
              </Link>
            ))}
            <span aria-hidden className="hidden h-3 w-px bg-white/15 md:inline-block" />
            <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-white/45">
              <span aria-hidden className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
              </span>
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
