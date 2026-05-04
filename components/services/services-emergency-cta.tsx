import Image from "next/image"
import { PhoneIcon } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { UNSPLASH } from "@/lib/remote-images"

export function ServicesEmergencyCta() {
  return (
    <section className="relative overflow-hidden bg-navy py-16 text-white md:py-24">
      <div className="absolute inset-0">
        <Image
          src={`${UNSPLASH.dashboard}&w=1600`}
          alt="Technical Support"
          fill
          sizes="100vw"
          quality={35}
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-navy/80" />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-4 md:px-6">
        <div className="overflow-hidden rounded-2xl border border-navy/20 bg-amber p-8 shadow-lg md:p-12">
          <ScrollReveal>
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-10">
              <div className="text-left">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-navy/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-navy">
                  Rapid Response
                </div>
                <h2 className="mb-4 text-2xl font-bold tracking-tight text-navy md:text-3xl">
                  Critical System <span className="text-white">Failure?</span>
                </h2>
                <p className="max-w-md text-sm leading-relaxed text-navy/80 md:text-base">
                  Our rapid response engineering unit is active. If your vehicle has suffered a propulsion or electrical collapse, we are ready to deploy immediately.
                </p>
              </div>
              <div className="flex justify-center lg:justify-end">
                <Button asChild size="lg" className="h-14 rounded-xl bg-navy px-8 text-sm font-semibold uppercase tracking-wide text-white hover:bg-white hover:text-navy">
                  <Link href="tel:+18883968739">
                    <PhoneIcon className="mr-2 size-5" />
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
