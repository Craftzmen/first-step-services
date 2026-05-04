import Link from "next/link"
import Image from "next/image"
import { ArrowRightIcon, WrenchIcon, CpuIcon, ShieldCheckIcon, WindIcon, DropletIcon, ActivityIcon } from "lucide-react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"
import { SERVICE_CARD_IMAGES } from "@/lib/remote-images"

const services = [
  {
    icon: ActivityIcon,
    title: "Engine Optimization",
    desc: "Maximize thermal efficiency and power output through precision performance tuning protocols.",
    price: "From $500",
  },
  {
    icon: CpuIcon,
    title: "Binary Diagnostics",
    desc: "Low-level system analysis and telemetry interpretation to identify complex electrical anomalies.",
    price: "From $150",
  },
  {
    icon: ShieldCheckIcon,
    title: "Braking Dynamics",
    desc: "Evaluation and calibration of kinetic restraint systems to ensure absolute stopping performance.",
    price: "From $200",
  },
  {
    icon: WindIcon,
    title: "Climate Engineering",
    desc: "Complete environmental control restoration using advanced evacuation and recharge techniques.",
    price: "From $180",
  },
  {
    icon: DropletIcon,
    title: "Fluid Vitality",
    desc: "Strategic lubrication management and high-purity filtration to preserve internal engine integrity.",
    price: "From $90",
  },
  {
    icon: WrenchIcon,
    title: "Propulsion Analysis",
    desc: "Comprehensive deep-dive into internal combustion health and component stress levels.",
    price: "From $250",
  },
] as const

export function HomeServices() {
  return (
    <SectionWrapper id="services" className="relative overflow-hidden">
      <div className="absolute -right-16 top-16 select-none pointer-events-none opacity-[0.04] dark:opacity-[0.06]">
        <span className="text-6xl font-bold leading-none tracking-tighter sm:text-7xl md:text-8xl">SERVICE</span>
      </div>

      <ScrollReveal>
        <div className="mb-12 md:mb-16">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-amber/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-amber">
            <WrenchIcon className="size-3" />
            Engineering Excellence
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-navy dark:text-white md:text-3xl">
            Strategic <span className="text-amber">Service Units.</span>
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            From low-level binary diagnostics to high-performance propulsion tuning, we deliver absolute precision.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((svc, i) => (
          <ScrollReveal key={svc.title} delay={i * 80} direction="up">
            <div className="relative h-[280px] overflow-hidden rounded-2xl bg-navy sm:h-[300px] lg:h-[320px]">
              <Image
                src={SERVICE_CARD_IMAGES[i]}
                alt={svc.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                quality={40}
                loading="lazy"
                className="object-cover opacity-55"
              />
              <div className="absolute inset-0 bg-navy/45" />

              <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6">
                <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-amber text-navy">
                  <svc.icon className="size-5" />
                </div>
                <h3 className="mb-2 text-xl font-bold tracking-tight text-white md:text-2xl">{svc.title}</h3>
                <p className="mb-4 line-clamp-2 text-xs leading-relaxed text-white/75">{svc.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-amber">{svc.price}</span>
                  <Link
                    href="/services"
                    className="flex size-9 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white hover:bg-amber hover:text-navy"
                  >
                    <ArrowRightIcon className="size-4" />
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  )
}
