import Image from "next/image"
import { PhoneIcon } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ServicesEmergencyCta() {
  return (
    <section className="relative overflow-hidden bg-navy py-24 md:py-32 text-white">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&q=80&w=2000"
          alt="Technical Support"
          fill
          sizes="100vw"
          quality={50}
          className="object-cover opacity-10 grayscale scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-5 md:px-8">
        <div className="group relative overflow-hidden rounded-[3rem] bg-amber p-12 md:p-24 shadow-2xl transition-all duration-700 hover:rotate-1">
          {/* Decorative Pattern */}
          <div className="absolute -right-20 -top-20 size-[400px] rounded-full bg-navy/5 blur-[100px]" />
          
          <ScrollReveal>
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className="text-left">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-navy/10 px-6 py-2 text-[10px] font-black uppercase tracking-[0.3em] text-navy">
                  Rapid Response
                </div>
                <h2 className="text-5xl font-black tracking-tighter md:text-8xl text-navy leading-[0.85] mb-8">
                  Critical System <br /><span className="text-white">Failure?</span>
                </h2>
                <p className="text-xl text-navy/70 font-medium leading-relaxed max-w-md">
                  Our rapid response engineering unit is active. If your vehicle has suffered a propulsion or electrical collapse, we are ready to deploy immediately.
                </p>
              </div>
              <div className="flex justify-center lg:justify-end">
                <Button
                  asChild
                  size="lg"
                  className="h-24 rounded-[2rem] bg-navy px-16 text-2xl text-white font-black uppercase tracking-tighter hover:bg-white hover:text-navy transition-all duration-500 shadow-2xl group-hover:scale-105"
                >
                  <Link href="tel:+18883968739">
                    <PhoneIcon className="mr-4 size-8" />
                    (888) 396-8739
                  </Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
