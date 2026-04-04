import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRightIcon, SparklesIcon, CheckCircle2Icon } from "lucide-react"
import { StatCounter } from "@/components/stat-counter"

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-navy text-foreground">
      <div className="absolute inset-0 bg-navy" />

      <div className="relative mx-auto flex min-h-screen max-w-[1400px] items-center px-5 pt-32 pb-20 md:px-8">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="z-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-none border border-amber/30 bg-amber/5 px-4 py-1.5 text-sm font-medium tracking-wide text-amber uppercase">
              <SparklesIcon className="size-4" />
              A company you can trust.
            </div>

            <h1 className="text-4xl font-extrabold leading-[1.4] tracking-tight text-white md:text-[3.5rem]">
              Precision Auto Care, <span className="block text-amber">At Your Doorstep</span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/70">
              Premium automotive diagnostics, repair, and maintenance. Experience unrivaled technical expertise combined with total transparency.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="rounded-none bg-amber px-8 py-6 text-base text-navy font-bold hover:bg-amber-light"
              >
                <Link href="/contact">
                  Book Appointment
                  <ArrowRightIcon className="ml-2 size-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-none border-white/20 bg-transparent px-8 py-6 text-base text-white hover:bg-white/10 hover:text-white"
              >
                <Link href="/services">Our Services</Link>
              </Button>
            </div>

            <div className="mt-16 flex flex-wrap gap-8 border-t border-white/10 pt-8">
              {[
                { value: 15, suffix: "+", label: "Years Experience" },
                { value: 5000, suffix: "+", label: "Cars Serviced" },
                { value: 50, suffix: "+", label: "Expert Mechanics" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-bold text-white md:text-4xl">
                    <StatCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="mt-1 text-sm font-medium text-amber uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block relative h-[600px] w-full">
            <div className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1615906655593-ad0386982a0f?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Premium European Car Workshop"
                fill
                className="object-cover opacity-90 sepia-[.2] grayscale-[.2]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/50 to-transparent" />
              <div className="absolute inset-0 border border-white/10" />
            </div>

            <div className="absolute bottom-8 right-8 bg-white p-6 shadow-none border border-border max-w-xs animate-fade-in-up delay-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex size-14 items-center justify-center bg-navy text-white">
                  <CheckCircle2Icon className="size-6" />
                </div>
                <div>
                  <h4 className="font-bold text-navy">Certified Standard</h4>
                  <p className="text-sm text-muted-foreground">Highest quality assurance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
