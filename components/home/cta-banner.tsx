import Link from "next/link"
import Image from "next/image"
import { PhoneIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-navy py-24 text-white">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&q=80&w=2000"
          alt="Garage Background"
          fill
          className="object-cover opacity-10"
        />
      </div>

      <div className="relative mx-auto max-w-4xl px-5 text-center md:px-8">
        <ScrollReveal>
          <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl mb-6">
            Demand the Best for Your <span className="text-amber">Vehicle.</span>
          </h2>
          <p className="mx-auto text-xl text-white/70 mb-10">
            Schedule your appointment today and experience the Prime Auto Deals standard of service.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button
              asChild
              size="lg"
              className="rounded-none bg-amber px-10 py-7 text-lg text-navy font-bold hover:bg-amber-light w-full sm:w-auto"
            >
              <Link href="tel:+18882868307">
                <PhoneIcon className="mr-3 size-5" />
                (888) 286-8307
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-none border-2 border-white bg-transparent px-10 py-7 text-lg text-white hover:bg-white hover:text-navy w-full sm:w-auto"
            >
              <Link href="/contact">Send a Message</Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
