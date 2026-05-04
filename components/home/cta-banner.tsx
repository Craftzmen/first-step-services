import Link from "next/link"
import Image from "next/image"
import { PhoneIcon } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-navy py-32 text-white md:py-48">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&q=50&w=960"
          alt="Premium Garage"
          fill
          sizes="100vw"
          quality={30}
          className="object-cover opacity-20 max-md:scale-100 md:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/60 to-navy" />
      </div>

      {/* Decorative orbs — skip huge blur radius on mobile */}
      <div className="absolute -top-24 -left-24 hidden size-[500px] rounded-full bg-amber/10 blur-3xl md:block md:blur-[150px]" />
      <div className="absolute -bottom-24 -right-24 hidden size-[500px] rounded-full bg-amber/5 blur-3xl md:block md:blur-[150px]" />

      <div className="relative mx-auto max-w-[1000px] px-5 text-center md:px-8">
        <ScrollReveal>
          <div className="mb-10 flex justify-center">
            <div className="flex size-20 items-center justify-center rounded-3xl bg-amber text-navy shadow-2xl shadow-amber/20 md:animate-bounce-slow">
              <PhoneIcon className="size-8" aria-hidden />
            </div>
          </div>
          <h2 className="mb-8 text-5xl font-black leading-[0.9] tracking-tighter md:text-7xl lg:text-8xl">
            Initiate Peak <span className="text-amber">Performance.</span>
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-xl font-medium leading-relaxed text-white/50 md:text-2xl">
            Ready to transcend standard maintenance? Deploy our engineering team to ensure your vehicle operates at its absolute apex.
          </p>
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
            <Link
              href="tel:+18883968739"
              className="inline-flex h-20 w-full items-center justify-center rounded-3xl bg-amber px-12 text-xl font-black uppercase tracking-tighter text-navy shadow-2xl shadow-amber/20 transition-colors duration-300 hover:bg-white hover:text-navy sm:w-auto md:-translate-y-0 md:hover:-translate-y-2 md:transition-transform md:duration-500"
            >
              Call (888) 396-8739
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-20 w-full items-center justify-center rounded-3xl border border-white/20 bg-white/10 px-12 text-xl font-black uppercase tracking-tighter text-white backdrop-blur-none transition-colors duration-300 hover:bg-white hover:text-navy sm:w-auto md:bg-white/5 md:backdrop-blur-xl md:hover:-translate-y-2 md:transition-transform md:duration-500"
            >
              Send Message
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
