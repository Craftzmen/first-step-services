import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRightIcon, SparklesIcon } from "lucide-react"
import { StatCounter } from "@/components/stat-counter"

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-navy text-foreground">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1615906655593-ad0386982a0f?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Premium European Car Workshop"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/60 to-navy" />
      </div>

      {/* Background gradient orbs */}
      <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] bg-amber/8 rounded-full blur-[150px] z-0" />
      <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] bg-amber/5 rounded-full blur-[120px] z-0" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1400px] items-center justify-center px-5 pt-32 pb-20 text-center md:px-8">
        <div className="flex w-full flex-col items-center">
          {/* Centered content area */}
          <div className="max-w-5xl">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-amber/20 bg-amber/5 px-6 py-2.5 text-sm font-semibold text-amber backdrop-blur-sm">
              <SparklesIcon className="size-4" />
              Engineering Absolute Excellence.
            </div>

            <h1 className="text-5xl font-black leading-[1.05] tracking-tight text-white md:text-7xl lg:text-[5.5rem]">
              Defining The New <br />
              <span className="block gradient-text">Apex Of Automotive Care.</span>
            </h1>

            <p className="mt-8 mx-auto max-w-2xl text-xl leading-relaxed text-white/80 font-medium">
              We apply rigorous industrial standards and advanced telemetry to ensure your vehicle performs at its maximum theoretical limit.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-amber px-8 py-6 text-base text-navy font-bold hover:bg-amber-light shadow-xl shadow-amber/25 hover:shadow-amber/40 transition-all duration-300"
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
                className="rounded-full border-white/15 bg-white/5 backdrop-blur-sm px-8 py-6 text-base text-white hover:bg-white/10 hover:text-white hover:border-white/25 transition-all duration-300"
              >
                <Link href="/services">Our Services</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-3 gap-6 border-t border-white/10 pt-8 w-full">
          {[
                { value: 20, suffix: "y+", label: "Strategic Technical Experience" },
                { value: 250, suffix: "+", label: "Monthly Sessions Executed" },
                { value: 15, suffix: "+", label: "Master Engineering Specialists" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-4xl font-black text-white md:text-5xl lg:text-6xl">
                    <StatCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="mt-3 text-[10px] md:text-xs font-bold text-amber tracking-[0.2em] uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
