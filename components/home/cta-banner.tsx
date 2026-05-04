import Link from "next/link"
import Image from "next/image"
import { PhoneIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-navy py-32 md:py-48 text-white">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&q=80&w=2000"
          alt="Premium Garage"
          fill
          className="object-cover opacity-20 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/60 to-navy" />
      </div>

      {/* Decorative Orbs */}
      <div className="absolute -top-24 -left-24 size-[500px] rounded-full bg-amber/10 blur-[150px]" />
      <div className="absolute -bottom-24 -right-24 size-[500px] rounded-full bg-amber/5 blur-[150px]" />

      <div className="relative mx-auto max-w-[1000px] px-5 text-center md:px-8">
        <ScrollReveal>
          <div className="mb-10 flex justify-center">
            <div className="size-20 rounded-3xl bg-amber text-navy flex items-center justify-center shadow-2xl shadow-amber/20 animate-bounce-slow">
              <PhoneIcon className="size-8" />
            </div>
          </div>
          <h2 className="text-5xl font-black tracking-tighter md:text-7xl lg:text-8xl mb-8 leading-[0.9]">
            Initiate Peak <span className="text-amber">Performance.</span>
          </h2>
          <p className="mx-auto text-xl md:text-2xl text-white/50 mb-12 max-w-2xl font-medium leading-relaxed">
            Ready to transcend standard maintenance? Deploy our engineering team to ensure your vehicle operates at its absolute apex.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button
              asChild
              size="lg"
              className="h-20 rounded-3xl bg-amber px-12 text-xl text-navy font-black uppercase tracking-tighter hover:bg-white hover:text-navy hover:-translate-y-2 transition-all duration-500 w-full sm:w-auto shadow-2xl shadow-amber/20"
            >
              <Link href="tel:+18883968739">
                Call (888) 396-8739
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-20 rounded-3xl border-white/20 bg-white/5 backdrop-blur-xl px-12 text-xl text-white font-black uppercase tracking-tighter hover:bg-white hover:text-navy hover:-translate-y-2 transition-all duration-500 w-full sm:w-auto"
            >
              <Link href="/contact">Send Message</Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
