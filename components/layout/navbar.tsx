"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"
import {
  MenuIcon,
  PhoneIcon,
  MailIcon,
  ChevronDownIcon,
} from "lucide-react"

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

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
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

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white shadow-sm dark:bg-navy/90"
          : "bg-transparent"
      )}
    >
      <div
        className={cn(
          "border-b border-white/10 transition-all duration-300 overflow-hidden",
          scrolled ? "max-h-0 opacity-0" : "max-h-40 md:max-h-12 opacity-100"
        )}
      >
        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-2 px-5 py-2 text-[10px] sm:text-xs md:flex-row md:justify-between md:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-white/70 md:justify-start md:gap-5">
            <Link
              href="tel:+18882868307"
              className="flex items-center gap-1.5 transition-colors hover:text-amber"
            >
              <PhoneIcon className="size-3" />
              (888) 286-8307
            </Link>
            <span className="hidden text-white/30 sm:inline">|</span>
            <Link
              href="mailto:query@primeautodeals.tech"
              className="flex items-center gap-1.5 transition-colors hover:text-amber"
            >
              <MailIcon className="size-3" />
              query@primeautodeals.tech
            </Link>
          </div>
          <span className="text-white/50 text-center md:text-right">
            Monday to Saturday: 8:00 AM – 6:00 PM
          </span>
        </div>
      </div>

      <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-3 md:px-8 md:py-4">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/logo.png"
            alt="Prime Auto Deals"
            width={150}
            height={40}
            className={cn(
              "h-10 w-auto transition-all duration-300 md:h-14",
              scrolled && "brightness-100 invert grayscale-100 dark:invert dark:grayscale-0 dark:brightness-[unset]"
            )}
            priority
          />
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200",
                isActive(link.href)
                  ? scrolled
                    ? "text-amber"
                    : "text-amber"
                  : scrolled
                    ? "text-foreground/70 hover:text-amber"
                    : "text-white/80 hover:text-white"
              )}
            >
              {link.label}
            </Link>
          ))}

          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setPolicyOpen(!policyOpen)}
              className={cn(
                "cursor-pointer flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200",
                pathname.startsWith("/policies")
                  ? "text-amber"
                  : scrolled
                    ? "text-foreground/70 hover:text-amber"
                    : "text-white/80 hover:text-white"
              )}
            >
              Policies
              <ChevronDownIcon
                className={cn(
                  "size-3.5 transition-transform duration-200",
                  policyOpen && "rotate-180"
                )}
              />
            </button>
            {policyOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 rounded-xl border bg-white p-1.5 shadow-lg dark:bg-card">
                {policyLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setPolicyOpen(false)}
                    className={cn(
                      "block rounded-lg px-3 py-2 text-sm transition-colors",
                      isActive(link.href)
                        ? "bg-amber/10 font-medium text-amber"
                        : "text-foreground/70 hover:bg-muted hover:text-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button
            asChild
            size={'lg'}
            className="hidden bg-amber text-white font-semibold hover:bg-amber-light sm:inline-flex"
          >
            <Link href="tel:+18882868307">Get a Quote</Link>
          </Button>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon-sm"
                className={cn(
                  "lg:hidden",
                  scrolled ? "text-foreground" : "text-white"
                )}
              >
                <MenuIcon className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] p-0">
              <SheetHeader className="border-b p-5">
                <SheetTitle className="flex items-center gap-2">
                  <Image
                    src="/logo.png"
                    alt="Prime Auto Deals"
                    width={140}
                    height={35}
                    className="h-12 w-auto brightness-100 invert grayscale-100"
                  />
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col p-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                      isActive(link.href)
                        ? "bg-amber/10 text-amber"
                        : "text-foreground/70 hover:bg-muted hover:text-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="my-1 h-px bg-border" />
                <p className="px-4 pt-2 pb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Policies
                </p>
                {policyLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                      isActive(link.href)
                        ? "bg-amber/10 text-amber"
                        : "text-foreground/70 hover:bg-muted hover:text-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="my-2 h-px bg-border" />
                <div className="px-4 py-3">
                  <Button
                    asChild
                    className="w-full rounded-full bg-amber text-navy font-semibold hover:bg-amber-light"
                  >
                    <Link href="tel:+18882868307">
                      <PhoneIcon className="size-4" />
                      (888) 286-8307
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
