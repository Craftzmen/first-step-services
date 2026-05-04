"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import Logo from "@/app/assets/images/logo.svg"
import Image from "next/image"
import { MenuIcon, PhoneIcon, ChevronDownIcon, XIcon } from "lucide-react"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Finance", href: "/finance" },
  { label: "Services", href: "/services" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Contact", href: "/contact" },
]

const policyLinks = [
  { label: "Privacy Policy", href: "/policies/privacy-policy" },
  { label: "Refund Policy", href: "/policies/refund-policy" },
]

export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = React.useState(false)
  const [policyOpen, setPolicyOpen] = React.useState(false)
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const dropdownRef = React.useRef<HTMLDivElement>(null)
  const scrollTimeoutRef = React.useRef<number | null>(null)
  const lastScrollYRef = React.useRef(0)
  const closeMobile = React.useCallback(() => setMobileOpen(false), [])

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

  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setPolicyOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

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

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 flex justify-center max-md:transition-none",
        scrolled ? "pt-4" : "pt-0"
      )}
    >
      <div
        className={cn(
          "mx-auto w-full max-w-[1200px]",
          scrolled ? "px-5 md:px-8" : "px-0"
        )}
      >
        <nav
          className={cn(
            "flex items-center justify-between px-4 md:px-6",
            scrolled
              ? "rounded-full border border-white/10 bg-white shadow-xl shadow-navy/20"
              : "bg-transparent"
          )}
        >
          {/* Logo Area */}
          <Link href="/" className="relative z-10 flex items-center gap-2">
            <Image
              src={Logo}
              alt="First Step Services"
              width={200}
              height={56}
              className={cn("h-16 w-auto md:h-[4.75rem] lg:h-[5.25rem]", !scrolled && "brightness-0 invert")}
            />
          </Link>

          {/* Navigation Links - Desktop */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-3 py-2 text-sm font-semibold md:px-4 md:text-base",
                  isActive(link.href)
                    ? "text-amber"
                    : scrolled
                      ? "text-foreground/60 hover:text-amber"
                      : "text-white/75 hover:text-white"
                )}
              >
                {link.label}
                {isActive(link.href) ? (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-amber md:left-4 md:right-4" />
                ) : null}
              </Link>
            ))}

            {/* Policies Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setPolicyOpen(!policyOpen)}
                className={cn(
                  "flex items-center gap-1.5 px-3 py-2 text-sm font-semibold md:px-4 md:text-base",
                  pathname.startsWith("/policies")
                    ? "text-amber"
                    : scrolled
                      ? "text-foreground/60 hover:text-amber"
                      : "text-white/70 hover:text-white"
                )}
              >
                Policies
                <ChevronDownIcon className={cn("size-4", policyOpen && "rotate-180")} />
              </button>
              {policyOpen && (
                <div className="absolute right-0 top-[calc(100%+12px)] z-10 w-56 rounded-2xl border border-white/10 bg-navy p-2 shadow-lg">
                  {policyLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setPolicyOpen(false)}
                      className={cn(
                        "block rounded-xl px-4 py-2.5 text-sm",
                        isActive(link.href)
                          ? "bg-amber font-bold text-navy"
                          : "text-white/60 hover:bg-white/5 hover:text-white"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <Link
              href="tel:+18883968739"
                className={cn(
                  "mr-3 hidden items-center gap-2 text-xs font-semibold uppercase tracking-wide xl:flex",
                scrolled ? "text-foreground/40 hover:text-amber" : "text-white/40 hover:text-white"
              )}
            >
              <PhoneIcon className="size-3.5" />
              Support
            </Link>

            <Link
              href="/contact"
                className={cn(
                  "hidden rounded-full px-7 py-2.5 text-sm font-semibold uppercase tracking-wide sm:inline-flex sm:items-center sm:justify-center",
                  scrolled ? "bg-navy text-white hover:bg-navy-light" : "bg-amber text-navy hover:bg-amber-light"
                )}
            >
              Book Now
            </Link>

            {/* Mobile menu — lightweight panel (no Radix / Dialog / Portal) */}
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
        </nav>
      </div>

      {mobileOpen ? (
        <div
          className="fixed inset-0 z-[100] lg:hidden"
          aria-hidden={!mobileOpen}
        >
          <button
            type="button"
            tabIndex={-1}
            className="absolute inset-0 bg-black/55"
            onClick={closeMobile}
            aria-label="Close menu"
          />
          <div
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            className="absolute right-0 top-0 flex h-full w-full max-w-[400px] flex-col bg-navy shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-white/5 p-6">
              <Image src={Logo} alt="First Step Services" width={180} height={50} className="h-14 w-auto md:h-16" />
              <button
                type="button"
                className="rounded-full p-2 text-white/70 hover:bg-white/10 hover:text-white"
                onClick={closeMobile}
                aria-label="Close menu"
              >
                <XIcon className="size-6" />
              </button>
            </div>

            <div className="flex-1 space-y-1 overflow-y-auto overscroll-contain p-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMobile}
                  className={cn(
                    "block py-2.5 text-base font-semibold tracking-tight",
                    isActive(link.href) ? "text-amber" : "text-white/50 hover:text-white"
                  )}
                >
                  {link.label}
                </Link>
              ))}

              <div className="mt-4 border-t border-white/5 pt-4">
                <p className="mb-2 text-xs font-bold uppercase tracking-widest text-white/20">Policies</p>
                {policyLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMobile}
                    className={cn(
                      "block py-2 text-base font-semibold",
                      isActive(link.href) ? "text-amber" : "text-white/50 hover:text-white"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="p-6 bg-white/5">
              <Link
                href="tel:+18883968739"
                onClick={closeMobile}
                className="flex h-12 w-full items-center justify-center rounded-xl bg-amber text-sm font-semibold text-navy"
              >
                <PhoneIcon className="mr-2 size-5" />
                (888) 396-8739
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}
