"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import {
  MenuIcon,
  PhoneIcon,
  ChevronDownIcon,
  XIcon,
  ArrowRightIcon,
  StoreIcon,
  ArrowRightLeftIcon,
  LineChartIcon,
  PlugIcon,
  LayersIcon,
  RocketIcon,
} from "lucide-react"
import { cn } from "@/lib/utils"
import logoImage from "@/app/assets/images/logo.png"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Contact", href: "/contact" },
]

const serviceLinks = [
  {
    icon: StoreIcon,
    label: "Store Design & Build",
    href: "/services#store-build",
    desc: "Custom storefronts that convert.",
  },
  {
    icon: ArrowRightLeftIcon,
    label: "Platform Migration",
    href: "/services#migration",
    desc: "Replatform with zero downtime.",
  },
  {
    icon: LineChartIcon,
    label: "Conversion Optimization",
    href: "/services#cro",
    desc: "A/B testing & checkout lifts.",
  },
  {
    icon: PlugIcon,
    label: "Integrations & APIs",
    href: "/services#integrations",
    desc: "ERPs, 3PLs, payment gateways.",
  },
  {
    icon: LayersIcon,
    label: "Headless Commerce",
    href: "/services#headless",
    desc: "Composable storefronts on Next.js.",
  },
  {
    icon: RocketIcon,
    label: "Growth & Support",
    href: "/services#support",
    desc: "Embedded squad on retainer.",
  },
]

const policyLinks = [
  { label: "Privacy Policy", href: "/policies/privacy-policy" },
  { label: "Refund Policy", href: "/policies/refund-policy" },
]

type OpenMenu = "services" | "policies" | null

export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = React.useState(false)
  const [openMenu, setOpenMenu] = React.useState<OpenMenu>(null)
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const navWrapRef = React.useRef<HTMLDivElement>(null)
  const scrollTimeoutRef = React.useRef<number | null>(null)
  const lastScrollYRef = React.useRef(0)
  const closeMobile = React.useCallback(() => setMobileOpen(false), [])
  const closeMenus = React.useCallback(() => setOpenMenu(null), [])

  // scroll detection (debounced)
  React.useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY
      const scrollThreshold = 20
      const wasScrolled = lastScrollYRef.current > scrollThreshold
      const isScrolled = currentScrollY > scrollThreshold

      if (wasScrolled !== isScrolled) {
        lastScrollYRef.current = currentScrollY
        if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current)
        scrollTimeoutRef.current = window.setTimeout(() => {
          setScrolled(isScrolled)
        }, 0)
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current)
    }
  }, [])

  // click outside closes any open menu
  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navWrapRef.current && !navWrapRef.current.contains(e.target as Node)) {
        setOpenMenu(null)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // close menus + mobile sheet on route change
  React.useEffect(() => {
    setOpenMenu(null)
    setMobileOpen(false)
  }, [pathname])

  // body scroll lock + Esc to close while mobile menu is open
  React.useEffect(() => {
    if (!mobileOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false)
    }
    document.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = prev
      document.removeEventListener("keydown", onKey)
    }
  }, [mobileOpen])

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }
  const isServicesActive = pathname.startsWith("/services")
  const isPoliciesActive = pathname.startsWith("/policies")

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 flex justify-center",
        scrolled ? "pt-4" : "pt-0"
      )}
    >
      <div
        ref={navWrapRef}
        className={cn(
          "mx-auto w-full max-w-[1200px]",
          scrolled ? "px-5 md:px-8" : "px-0"
        )}
      >
        <nav
          className={cn(
            "relative flex items-center justify-between px-4 md:px-6",
            scrolled
              ? "rounded-full border border-white/10 bg-white"
              : "bg-transparent"
          )}
        >
          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenus}
            aria-label="First Step Services — home"
            className="relative z-10 inline-flex items-center py-3"
          >
            <Image
              src={logoImage}
              alt="First Step Services"
              priority
              sizes="(max-width: 768px) 140px, 180px"
              className={cn(
                "h-9 w-auto md:h-11",
                scrolled ? "brightness-0" : "brightness-0 invert"
              )}
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 lg:flex">
            <NavLink href="/" label="Home" active={isActive("/")} scrolled={scrolled} />
            <NavLink href="/about" label="About" active={isActive("/about")} scrolled={scrolled} />

            {/* Services mega menu trigger */}
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={openMenu === "services"}
              onClick={() => setOpenMenu((v) => (v === "services" ? null : "services"))}
              className={cn(
                "relative flex items-center gap-1.5 px-3 py-2 text-sm font-semibold md:px-4 md:text-base",
                isServicesActive
                  ? "text-amber"
                  : scrolled
                    ? "text-foreground/60 hover:text-amber"
                    : "text-white/75 hover:text-white"
              )}
            >
              Services
              <ChevronDownIcon
                className={cn("size-4", openMenu === "services" && "rotate-180")}
              />
              {isServicesActive ? (
                <span className="absolute bottom-0 left-3 right-7 h-0.5 bg-amber md:left-4 md:right-8" />
              ) : null}
            </button>

            <NavLink href="/how-it-works" label="How It Works" active={isActive("/how-it-works")} scrolled={scrolled} />
            <NavLink href="/contact" label="Contact" active={isActive("/contact")} scrolled={scrolled} />

            {/* Policies dropdown trigger + panel */}
            <div className="relative">
              <button
                type="button"
                aria-haspopup="menu"
                aria-expanded={openMenu === "policies"}
                onClick={() => setOpenMenu((v) => (v === "policies" ? null : "policies"))}
                className={cn(
                  "relative flex items-center gap-1.5 px-3 py-2 text-sm font-semibold md:px-4 md:text-base",
                  isPoliciesActive
                    ? "text-amber"
                    : scrolled
                      ? "text-foreground/60 hover:text-amber"
                      : "text-white/70 hover:text-white"
                )}
              >
                Policies
                <ChevronDownIcon
                  className={cn("size-4", openMenu === "policies" && "rotate-180")}
                />
                {isPoliciesActive ? (
                  <span className="absolute bottom-0 left-3 right-7 h-0.5 bg-amber md:left-4 md:right-8" />
                ) : null}
              </button>

              {openMenu === "policies" ? (
                <div className="absolute right-0 top-[calc(100%+12px)] z-30 w-64 overflow-hidden rounded-2xl border border-white/10 bg-navy p-2">
                  <p className="px-3 pt-2 pb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-amber">
                    Legal
                  </p>
                  {policyLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMenus}
                      className={cn(
                        "block rounded-xl px-3 py-2.5 text-sm",
                        isActive(link.href)
                          ? "bg-amber font-bold text-white"
                          : "font-medium text-white/65 hover:bg-white/5 hover:text-white"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <Link
              href="tel:+18883968739"
              className={cn(
                "mr-2 hidden items-center gap-2 text-xs font-semibold uppercase tracking-wide xl:flex",
                scrolled ? "text-foreground/45 hover:text-amber" : "text-white/45 hover:text-white"
              )}
            >
              <PhoneIcon className="size-3.5" />
              (888) 396-8739
            </Link>

            <Link
              href="/contact"
              className={cn(
                "hidden items-center gap-2 rounded-full px-6 py-2.5 text-xs font-semibold uppercase tracking-wide sm:inline-flex",
                scrolled
                  ? "bg-navy text-white hover:bg-amber"
                  : "bg-amber text-white hover:bg-amber-light"
              )}
            >
              Book a Call
              <ArrowRightIcon className="size-3.5" />
            </Link>

            {/* Mobile menu toggle */}
            <button
              type="button"
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((o) => !o)}
              className={cn(
                "inline-flex size-9 items-center justify-center rounded-full lg:hidden",
                scrolled ? "text-foreground hover:bg-muted" : "text-white hover:bg-white/10"
              )}
            >
              {mobileOpen ? <XIcon className="size-6" /> : <MenuIcon className="size-6" />}
            </button>
          </div>

          {/* Services mega menu (positioned at nav level, centered) */}
          {openMenu === "services" ? (
            <div
              role="menu"
              aria-label="Services"
              className="absolute left-1/2 top-[calc(100%+12px)] z-30 w-[640px] max-w-[calc(100vw-2rem)] -translate-x-1/2 overflow-hidden rounded-3xl border border-white/10 bg-navy p-6"
            >
              <div className="mb-5 flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-amber">
                  Service Tracks
                </p>
                <Link
                  href="/services"
                  onClick={closeMenus}
                  className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-white/55 hover:text-amber"
                >
                  All services
                  <ArrowRightIcon className="size-3" />
                </Link>
              </div>

              <ul className="grid grid-cols-2 gap-1">
                {serviceLinks.map((s) => (
                  <li key={s.href}>
                    <Link
                      href={s.href}
                      onClick={closeMenus}
                      className="group flex items-start gap-3 rounded-xl p-3 hover:bg-white/5"
                    >
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-amber/15 text-amber group-hover:bg-amber group-hover:text-white">
                        <s.icon className="size-4" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-sm font-bold text-white">{s.label}</p>
                        <p className="mt-0.5 text-xs leading-snug text-white/55">{s.desc}</p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </nav>
      </div>

      {/* Mobile menu: always mounted under lg:hidden so the panel can slide */}
      <div
        className={cn(
          "fixed inset-0 z-100 lg:hidden",
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        )}
        aria-hidden={!mobileOpen}
      >
        <button
          type="button"
          tabIndex={-1}
          className={cn("absolute inset-0 bg-black/60", !mobileOpen && "invisible")}
          onClick={closeMobile}
          aria-label="Close menu"
        />
        <div
          id="mobile-navigation"
          role="dialog"
          aria-modal={mobileOpen ? true : undefined}
          aria-label="Site navigation"
          tabIndex={mobileOpen ? undefined : -1}
          className={cn(
            "absolute right-0 top-0 flex h-full w-full max-w-[420px] flex-col border-l border-white/10 bg-navy transition-transform duration-300 ease-out",
            mobileOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
            <div className="flex items-center justify-between border-b border-white/10 p-6">
              <Link href="/" onClick={closeMobile} aria-label="First Step Services — home" className="inline-flex items-center">
                <Image
                  src={logoImage}
                  alt="First Step Services"
                  sizes="160px"
                  className="h-10 w-auto brightness-0 invert"
                />
              </Link>
              <button
                type="button"
                className="rounded-full p-2 text-white/70 hover:bg-white/10 hover:text-white"
                onClick={closeMobile}
                aria-label="Close menu"
              >
                <XIcon className="size-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto overscroll-contain p-6">
              {/* Primary nav */}
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-amber/70">Explore</p>
              <ul className="space-y-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={closeMobile}
                      className={cn(
                        "block rounded-xl px-2 py-2.5 text-base font-bold tracking-tight",
                        isActive(link.href) ? "text-amber" : "text-white/75 hover:bg-white/5 hover:text-white"
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Services */}
              <div className="mt-8">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-amber/70">Services</p>
                  <Link
                    href="/services"
                    onClick={closeMobile}
                    className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-white/40 hover:text-amber"
                  >
                    View all
                    <ArrowRightIcon className="size-3" />
                  </Link>
                </div>
                <ul className="space-y-1">
                  {serviceLinks.map((s) => (
                    <li key={s.href}>
                      <Link
                        href={s.href}
                        onClick={closeMobile}
                        className="flex items-center gap-3 rounded-xl px-2 py-2 hover:bg-white/5"
                      >
                        <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-amber/15 text-amber">
                          <s.icon className="size-4" />
                        </span>
                        <span className="text-sm font-semibold text-white/80">{s.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Policies */}
              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-amber/70">Policies</p>
                <ul className="space-y-1">
                  {policyLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={closeMobile}
                        className={cn(
                          "block rounded-xl px-2 py-2 text-sm font-semibold",
                          isActive(link.href) ? "text-amber" : "text-white/55 hover:bg-white/5 hover:text-white"
                        )}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sticky bottom action area */}
            <div className="space-y-3 border-t border-white/10 bg-white/5 p-6">
              <Link
                href="/contact"
                onClick={closeMobile}
                className="flex h-12 w-full items-center justify-center gap-2 rounded-full border border-amber/20 bg-amber text-sm font-semibold uppercase tracking-wide text-white"
              >
                Book a Strategy Call
                <ArrowRightIcon className="size-4" />
              </Link>
              <Link
                href="tel:+18883968739"
                onClick={closeMobile}
                className="flex h-12 w-full items-center justify-center gap-2 rounded-full border border-white/15 text-sm font-semibold uppercase tracking-wide text-white"
              >
                <PhoneIcon className="size-4 text-amber" />
                (888) 396-8739
              </Link>
            </div>
          </div>
        </div>
    </header>
  )
}

function NavLink({
  href,
  label,
  active,
  scrolled,
}: {
  href: string
  label: string
  active: boolean
  scrolled: boolean
}) {
  return (
    <Link
      href={href}
      className={cn(
        "relative px-3 py-2 text-sm font-semibold md:px-4 md:text-base",
        active
          ? "text-amber"
          : scrolled
            ? "text-foreground/60 hover:text-amber"
            : "text-white/75 hover:text-white"
      )}
    >
      {label}
      {active ? (
        <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-amber md:left-4 md:right-4" />
      ) : null}
    </Link>
  )
}
