import Image from "next/image"
import { PhoneIcon } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ServicesEmergencyCta() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 md:py-24 text-white">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&q=80&w=2000"
          alt="Mechanic Team"
          fill
          className="object-cover opacity-10 grayscale"
        />
      </div>
      <div className="relative mx-auto max-w-[1200px] px-5 text-center md:px-8 border border-white/10 p-12 bg-navy/50 backdrop-blur-sm">
        <ScrollReveal>
          <h2 className="text-4xl font-extrabold text-white md:text-5xl mb-6">
            Need <span className="text-amber">Emergency Repair?</span>
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-white/70 mb-10">
            Our team is highly responsive for urgent technical failures. We will dispatch or schedule you immediately.
          </p>
          <Button
            asChild
            size="lg"
            className="rounded-none bg-amber px-10 py-7 text-lg text-navy font-bold hover:bg-amber-light"
          >
            <Link href="tel:+18882868307">
              <PhoneIcon className="mr-3 size-5" />
              (888) 286-8307
            </Link>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  )
}
