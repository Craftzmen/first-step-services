import Link from "next/link"
import Image from "next/image"
import { ArrowRightIcon, WrenchIcon, ActivityIcon, CpuIcon, ShieldCheckIcon, WindIcon, DropletIcon } from "lucide-react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"
import { SERVICE_CARD_IMAGES } from "@/lib/remote-images"

const services = [
  {
    icon: ActivityIcon,
    title: "Engine Optimization",
    desc: "Maximize thermal efficiency and power output through precision performance tuning protocols and advanced ECU remapping for high-performance units.",
    price: "From $500",
  },
  {
    icon: CpuIcon,
    title: "Binary Diagnostics",
    desc: "Low-level system analysis and telemetry interpretation to identify complex electrical anomalies within your vehicle's integrated circuitry.",
    price: "From $150",
  },
  {
    icon: ShieldCheckIcon,
    title: "Braking Dynamics",
    desc: "Evaluation and calibration of kinetic restraint systems to ensure absolute stopping performance under high-stress operational conditions.",
    price: "From $200",
  },
  {
    icon: WindIcon,
    title: "Climate Engineering",
    desc: "Complete environmental control restoration using advanced molecular evacuation and high-purity refrigerant recharge techniques.",
    price: "From $180",
  },
  {
    icon: DropletIcon,
    title: "Fluid Vitality",
    desc: "Strategic lubrication management and high-purity filtration to preserve the long-term internal integrity of your propulsion components.",
    price: "From $90",
  },
  {
    icon: WrenchIcon,
    title: "Propulsion Analysis",
    desc: "Comprehensive deep-dive into internal combustion health, utilizing structural compression metrics and timing synchronization analysis.",
    price: "From $250",
  },
] as const

export function ServicesGrid() {
  return (
    <SectionWrapper id="services" className="relative overflow-hidden">
      <div className="absolute -left-16 top-16 select-none pointer-events-none opacity-[0.04] dark:opacity-[0.06]">
        <span className="text-6xl font-bold tracking-tighter uppercase leading-none md:text-8xl">Expertise</span>
      </div>

      <ScrollReveal>
        <div className="mb-12 md:mb-16">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-amber/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-amber">
            The Catalog
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-navy dark:text-white md:text-3xl">
            Professional <span className="text-amber">Auto Solutions.</span>
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((svc, i) => (
          <ScrollReveal key={svc.title} delay={i * 80} direction="up">
            <div className="relative flex min-h-[420px] flex-col overflow-hidden rounded-2xl bg-navy md:min-h-[460px]">
              <Image
                src={SERVICE_CARD_IMAGES[i]}
                alt={svc.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                quality={45}
                className="object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-navy/50" />

              <div className="absolute top-6 left-6 z-10">
                <div className="flex size-12 items-center justify-center rounded-xl bg-amber text-navy shadow-md">
                  <svc.icon className="size-6" />
                </div>
              </div>

              <div className="relative z-10 mt-auto flex flex-1 flex-col justify-end p-6 md:p-8">
                <h3 className="mb-3 text-2xl font-bold tracking-tight text-white">{svc.title}</h3>
                <p className="mb-6 line-clamp-3 text-sm leading-relaxed text-white/65">{svc.desc}</p>
                <div className="flex items-center justify-between border-t border-white/10 pt-5">
                  <span className="text-base font-bold text-amber">{svc.price}</span>
                  <Link
                    href="/contact"
                    className="flex size-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white hover:bg-amber hover:text-navy"
                  >
                    <ArrowRightIcon className="size-5" />
                  </Link>
                </div>
              </div>

              <div className="pointer-events-none absolute top-8 right-6 z-10 select-none text-xl font-bold text-white/[0.06]">
                0{i + 1}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  )
}
