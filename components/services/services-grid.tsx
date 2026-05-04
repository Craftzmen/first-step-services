import Link from "next/link"
import Image from "next/image"
import { ArrowRightIcon, WrenchIcon, ActivityIcon, CpuIcon, ShieldCheckIcon, WindIcon, DropletIcon } from "lucide-react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"

const services = [
  {
    icon: ActivityIcon,
    title: "Engine Optimization",
    desc: "Maximize thermal efficiency and power output through precision performance tuning protocols and advanced ECU remapping for high-performance units.",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=600",
    price: "From $500",
  },
  {
    icon: CpuIcon,
    title: "Binary Diagnostics",
    desc: "Low-level system analysis and telemetry interpretation to identify complex electrical anomalies within your vehicle's integrated circuitry.",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=600",
    price: "From $150",
  },
  {
    icon: ShieldCheckIcon,
    title: "Braking Dynamics",
    desc: "Evaluation and calibration of kinetic restraint systems to ensure absolute stopping performance under high-stress operational conditions.",
    image: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&q=80&w=600",
    price: "From $200",
  },
  {
    icon: WindIcon,
    title: "Climate Engineering",
    desc: "Complete environmental control restoration using advanced molecular evacuation and high-purity refrigerant recharge techniques.",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=600",
    price: "From $180",
  },
  {
    icon: DropletIcon,
    title: "Fluid Vitality",
    desc: "Strategic lubrication management and high-purity filtration to preserve the long-term internal integrity of your propulsion components.",
    image: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&q=80&w=600",
    price: "From $90",
  },
  {
    icon: WrenchIcon,
    title: "Propulsion Analysis",
    desc: "Comprehensive deep-dive into internal combustion health, utilizing structural compression metrics and timing synchronization analysis.",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=600",
    price: "From $250",
  },
]

export function ServicesGrid() {
  return (
    <SectionWrapper id="services" className="relative overflow-hidden">
      {/* Decorative Background Watermark */}
      <div className="absolute -left-20 top-20 select-none pointer-events-none opacity-[0.03] dark:opacity-[0.05]">
        <span className="text-[15rem] font-black tracking-tighter leading-none uppercase">Expertise</span>
      </div>

      <ScrollReveal>
        <div className="mb-20">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber/10 px-5 py-2 text-[10px] font-black uppercase tracking-[0.3em] text-amber">
            The Catalog
          </div>
          <h2 className="text-5xl font-black tracking-tighter md:text-7xl lg:text-8xl text-navy dark:text-white leading-[0.9]">
            Professional <br />
            <span className="text-amber">Auto Solutions.</span>
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((svc, i) => (
          <ScrollReveal key={svc.title} delay={i * 80} direction="up">
            <div className="group relative flex h-[600px] flex-col overflow-hidden rounded-[3rem] bg-navy transition-all duration-700 hover:-translate-y-3 hover:shadow-2xl hover:shadow-amber/10">
              {/* Background Image with Dynamic Overlay */}
              <Image
                src={svc.image}
                alt={svc.title}
                fill
                className="object-cover opacity-40 transition-all duration-1000 group-hover:scale-110 group-hover:opacity-20"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
              
              {/* Top Accent */}
              <div className="absolute top-10 left-10">
                <div className="flex size-16 items-center justify-center rounded-2xl bg-amber text-navy shadow-xl transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                  <svc.icon className="size-8" />
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-1 flex-col justify-end p-12">
                <h3 className="mb-4 text-4xl font-black tracking-tight text-white leading-none">{svc.title}</h3>
                <p className="mb-8 text-lg text-white/60 font-medium line-clamp-3">
                  {svc.desc}
                </p>
                <div className="flex items-center justify-between pt-8 border-t border-white/10">
                  <span className="text-2xl font-black text-amber">{svc.price}</span>
                  <Link
                    href="/contact"
                    className="flex size-14 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-xl border border-white/20 transition-all hover:bg-amber hover:text-navy hover:border-amber group-hover:translate-x-2"
                  >
                    <ArrowRightIcon className="size-6" />
                  </Link>
                </div>
              </div>

              {/* Decorative Index */}
              <div className="absolute top-12 right-12 text-7xl font-black text-white/[0.03] select-none pointer-events-none">
                0{i + 1}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  )
}
