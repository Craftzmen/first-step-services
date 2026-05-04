import Link from "next/link"
import Image from "next/image"
import { ArrowRightIcon, SparklesIcon } from "lucide-react"

const heroStats = [
  { value: 20, suffix: "y+", label: "Strategic Technical Experience" },
  { value: 250, suffix: "+", label: "Monthly Sessions Executed" },
  { value: 15, suffix: "+", label: "Master Engineering Specialists" },
] as const

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-navy text-foreground">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1615906655593-ad0386982a0f?q=75&w=640&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Premium European Car Workshop"
          fill
          sizes="100vw"
          quality={48}
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/60 to-navy" />
      </div>

      {/* Background gradient orbs — large blur filters are very costly on mobile GPUs */}
      <div className="absolute top-1/4 -right-32 z-0 hidden h-[500px] w-[500px] rounded-full bg-amber/8 blur-3xl md:block md:blur-[150px]" />
      <div className="absolute -bottom-24 -left-24 z-0 hidden h-[400px] w-[400px] rounded-full bg-amber/5 blur-3xl md:block md:blur-[120px]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1400px] items-center justify-center px-5 pt-32 pb-20 text-center md:px-8">
        <div className="flex w-full flex-col items-center">
          {/* Centered content area */}
          <div className="max-w-5xl">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-amber/20 bg-amber/10 px-6 py-2.5 text-sm font-semibold text-amber backdrop-blur-none md:bg-amber/5 md:backdrop-blur-sm">
              <SparklesIcon className="size-4" aria-hidden />
              Engineering Absolute Excellence.
            </div>

            <h1 className="text-5xl font-black leading-[1.05] tracking-tight text-white md:text-7xl lg:text-[5.5rem]">
              Defining The New <br />
              <span className="block gradient-text">Apex Of Automotive Care.</span>
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-xl font-medium leading-relaxed text-white/80">
              We apply rigorous industrial standards and advanced telemetry to ensure your vehicle performs at its maximum theoretical limit.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                prefetch={false}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-amber px-8 text-base font-bold text-navy shadow-xl shadow-amber/25 transition-colors duration-300 hover:bg-amber-light hover:shadow-amber/40 motion-reduce:transition-none"
              >
                Book Appointment
                <ArrowRightIcon className="size-5" aria-hidden />
              </Link>
              <Link
                href="/services"
                prefetch={false}
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 bg-white/10 px-8 text-base font-medium text-white backdrop-blur-none transition-colors duration-300 hover:border-white/25 hover:bg-white/10 motion-reduce:transition-none md:bg-white/5 md:backdrop-blur-sm"
              >
                Our Services
              </Link>
            </div>

            {/* Stats — server-rendered (avoids client hydration + rAF / IntersectionObserver on mobile) */}
            <div className="mt-16 grid w-full grid-cols-3 gap-4 border-t border-white/10 pt-8 md:gap-6">
              {heroStats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-black text-white sm:text-4xl md:text-5xl lg:text-6xl">
                    {stat.value}
                    {stat.suffix}
                  </div>
                  <div className="mt-3 text-[10px] font-bold uppercase tracking-[0.2em] text-amber md:text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
