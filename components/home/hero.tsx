import Link from "next/link"
import Image from "next/image"
import { ArrowRightIcon, SparklesIcon } from "lucide-react"
import { UNSPLASH } from "@/lib/remote-images"

const heroStats = [
  { value: 20, suffix: "y+", label: "Strategic Technical Experience" },
  { value: 250, suffix: "+", label: "Monthly Sessions Executed" },
  { value: 15, suffix: "+", label: "Master Engineering Specialists" },
] as const

export function Hero() {
  return (
    <section className="relative min-h-[85vh] overflow-hidden bg-navy text-foreground md:min-h-screen">
      <div className="absolute inset-0 z-0">
        <Image
          src={`${UNSPLASH.workshop}&w=1600`}
          alt="Premium European Car Workshop"
          fill
          sizes="100vw"
          quality={45}
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-navy/55" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-[1200px] items-center justify-center px-4 pt-28 pb-16 text-center md:min-h-screen md:px-6 md:pt-32 md:pb-20">
        <div className="flex w-full flex-col items-center">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber/25 bg-amber/10 px-4 py-2 text-sm font-semibold text-amber">
              <SparklesIcon className="size-3.5" aria-hidden />
              Engineering Absolute Excellence.
            </div>

            <h1 className="text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Defining The New <br />
              <span className="block text-amber">Apex Of Automotive Care.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base font-normal leading-relaxed text-white/85 md:text-lg">
              We apply rigorous industrial standards and advanced telemetry to ensure your vehicle performs at its maximum theoretical limit.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-amber px-8 text-base font-semibold text-navy shadow-sm hover:bg-amber-light"
              >
                Book Appointment
                <ArrowRightIcon className="size-4" aria-hidden />
              </Link>
              <Link
                href="/services"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 text-base font-medium text-white hover:border-white/30 hover:bg-white/15"
              >
                Our Services
              </Link>
            </div>

            <div className="mt-12 grid w-full grid-cols-3 gap-3 border-t border-white/10 pt-6 md:gap-4 md:pt-8">
              {heroStats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
                    {stat.value}
                    {stat.suffix}
                  </div>
                  <div className="mt-2 text-[10px] font-semibold uppercase tracking-wider text-amber md:text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
