"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Logo from '@/app/assets/images/logo.svg'
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
        "fixed left-0 right-0 top-0 z-50 transition-all duration-500 flex justify-center",
        scrolled ? "pt-4" : "pt-0"
      )}
    >
      <div
        className={cn(
          "transition-all duration-500 mx-auto w-full max-w-[1400px]",
          scrolled ? "px-5 md:px-8" : "px-0"
        )}
      >
        <nav
          className={cn(
            "flex items-center justify-between transition-all duration-500 px-6",
            scrolled
              ? "bg-white rounded-full border border-white/10 shadow-2xl shadow-navy/20"
              : "bg-transparent"
          )}
        >
          {/* Logo Area */}
          <Link href="/" className="relative z-10 flex items-center gap-2 group">
            <div className="absolute -inset-2 rounded-full bg-amber/0 transition-all group-hover:bg-amber/5" />
            <Image
              src={Logo}
              alt="First Step Services"
              width={160}
              height={45}
              className={cn(
                "h-28 w-auto transition-all duration-300",
                !scrolled && "brightness-0 invert"
              )}
            />
          </Link>

          {/* Navigation Links - Desktop */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                prefetch={false}
                className={cn(
                  "relative group px-4 py-2 text-sm font-semibold transition-all duration-300",
                  isActive(link.href)
                    ? "text-amber"
                    : scrolled
                      ? "text-foreground/60 hover:text-amber"
                      : "text-white/70 hover:text-white"
                )}
              >
                {link.label}
                <span className={cn(
                  "absolute bottom-0 left-4 right-4 h-0.5 scale-x-0 bg-amber transition-transform duration-300 group-hover:scale-x-100",
                  isActive(link.href) && "scale-x-100"
                )} />
              </Link>
            ))}

            {/* Policies Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setPolicyOpen(!policyOpen)}
                className={cn(
                  "group flex items-center gap-1.5 px-4 py-2 text-sm font-semibold transition-all duration-300",
                  pathname.startsWith("/policies")
                    ? "text-amber"
                    : scrolled
                      ? "text-foreground/60 hover:text-amber"
                      : "text-white/70 hover:text-white"
                )}
              >
                Policies
                <ChevronDownIcon
                  className={cn(
                    "size-4 transition-transform duration-300",
                    policyOpen && "rotate-180"
                  )}
                />
              </button>
              {policyOpen && (
                <div className="absolute right-0 top-[calc(100%+12px)] w-56 rounded-3xl border border-white/10 bg-navy/95 backdrop-blur-2xl p-2 shadow-2xl animate-scale-in origin-top-right">
                  {policyLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      prefetch={false}
                      onClick={() => setPolicyOpen(false)}
                      className={cn(
                        "block rounded-2xl px-4 py-3 text-sm transition-all duration-200",
                        isActive(link.href)
                          ? "bg-amber text-navy font-bold"
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
                "hidden xl:flex items-center gap-2 mr-4 text-xs font-bold uppercase tracking-widest transition-all",
                scrolled ? "text-foreground/40 hover:text-amber" : "text-white/40 hover:text-white"
              )}
            >
              <PhoneIcon className="size-3.5" />
              Support
            </Link>

            <Button
              asChild
              className={cn(
                "hidden sm:inline-flex rounded-full font-black uppercase tracking-tighter transition-all duration-500",
                scrolled
                  ? "bg-navy text-white hover:bg-navy-light px-8"
                  : "bg-amber text-navy hover:bg-amber-light px-10 shadow-xl shadow-amber/20"
              )}
            >
              <Link href="/contact">Book Now</Link>
            </Button>

            {/* Mobile Menu Trigger */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(
                    "lg:hidden rounded-full transition-all",
                    scrolled ? "text-foreground hover:bg-muted" : "text-white hover:bg-white/10"
                  )}
                >
                  <MenuIcon className="size-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-[400px] p-0 border-none bg-navy">
                <div className="flex flex-col h-full">
                  <SheetHeader className="p-6 border-b border-white/5">
                    <SheetTitle>
                      <Image
                        src={Logo}
                        alt="First Step Services"
                        width={160}
                        height={45}
                        className="h-16 w-auto"
                      />
                    </SheetTitle>
                  </SheetHeader>

                  <div className="flex-1 overflow-y-auto p-6 space-y-1">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        prefetch={false}
                        onClick={() => setMobileOpen(false)}
                        className={cn(
                          "block py-3 text-lg font-bold tracking-tighter transition-all",
                          isActive(link.href) ? "text-amber translate-x-2" : "text-white/40 hover:text-white hover:translate-x-2"
                        )}
                      >
                        {link.label}
                      </Link>
                    ))}

                    <div className="pt-4 mt-4 border-t border-white/5">
                      <p className="text-xs font-bold uppercase tracking-widest text-white/20 mb-2">Policies</p>
                      {policyLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          prefetch={false}
                          onClick={() => setMobileOpen(false)}
                          className={cn(
                            "block py-2 text-lg font-bold",
                            isActive(link.href) ? "text-amber" : "text-white/40 hover:text-white"
                          )}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 bg-white/5">
                    <Button asChild size="lg" className="w-full bg-amber text-navy font-bold rounded-2xl h-16 text-lg">
                      <Link href="tel:+18883968739">
                        <PhoneIcon className="mr-2 size-5" />
                        (888) 396-8739
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  )
}
