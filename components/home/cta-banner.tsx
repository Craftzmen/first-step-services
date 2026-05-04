import Link from "next/link"
import Image from "next/image"
import { PhoneIcon } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { UNSPLASH } from "@/lib/remote-images"

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-white md:py-28">
      <div className="absolute inset-0">
        <Image
          src={`${UNSPLASH.garageNight}&w=1200`}
          alt="Premium Garage"
          fill
          sizes="100vw"
          quality={40}
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-navy/70" />
      </div>

      <div className="relative mx-auto max-w-[900px] px-4 text-center md:px-6">
        <ScrollReveal>
          <div className="mb-8 flex justify-center">
            <div className="flex size-14 items-center justify-center rounded-2xl bg-amber text-navy shadow-md">
              <PhoneIcon className="size-7" aria-hidden />
            </div>
          </div>
          <h2 className="mb-4 text-2xl font-bold leading-tight tracking-tight text-white md:text-3xl">
            Initiate Peak <span className="text-amber">Performance.</span>
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-sm leading-relaxed text-white/70 md:text-base">
            Ready to transcend standard maintenance? Deploy our engineering team to ensure your vehicle operates at its absolute apex.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="tel:+18883968739"
              className="inline-flex h-12 w-full items-center justify-center rounded-2xl bg-amber px-8 text-sm font-semibold uppercase tracking-wide text-navy shadow-sm hover:bg-amber-light sm:w-auto"
            >
              Call (888) 396-8739
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-12 w-full items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-8 text-sm font-semibold uppercase tracking-wide text-white hover:bg-white/15 sm:w-auto"
            >
              Send Message
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
