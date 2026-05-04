import Link from "next/link"
import Image from "next/image"
import { ArrowRightIcon, WrenchIcon, CpuIcon, ShieldCheckIcon, WindIcon, DropletIcon, ActivityIcon } from "lucide-react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"

const services = [
  {
    icon: ActivityIcon,
    title: "Engine Optimization",
    desc: "Maximize thermal efficiency and power output through precision performance tuning protocols.",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=600",
    price: "From $500",
  },
  {
    icon: CpuIcon,
    title: "Binary Diagnostics",
    desc: "Low-level system analysis and telemetry interpretation to identify complex electrical anomalies.",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=600",
    price: "From $150",
  },
  {
    icon: ShieldCheckIcon,
    title: "Braking Dynamics",
    desc: "Evaluation and calibration of kinetic restraint systems to ensure absolute stopping performance.",
    image: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&q=80&w=600",
    price: "From $200",
  },
  {
    icon: WindIcon,
    title: "Climate Engineering",
    desc: "Complete environmental control restoration using advanced evacuation and recharge techniques.",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=600",
    price: "From $180",
  },
  {
    icon: DropletIcon,
    title: "Fluid Vitality",
    desc: "Strategic lubrication management and high-purity filtration to preserve internal engine integrity.",
    image: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&q=80&w=600",
    price: "From $90",
  },
  {
    icon: WrenchIcon,
    title: "Propulsion Analysis",
    desc: "Comprehensive deep-dive into internal combustion health and component stress levels.",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=600",
    price: "From $250",
  },
]

export function HomeServices() {
  return (
    <SectionWrapper id="services" className="relative overflow-hidden">
      {/* Decorative Background Watermark */}
      <div className="absolute -right-20 top-20 select-none pointer-events-none opacity-[0.03] dark:opacity-[0.05]">
        <span className="text-[15rem] font-black tracking-tighter leading-none">SERVICE</span>
      </div>

      <ScrollReveal>
        <div className="mb-20">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber/10 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-amber">
            <WrenchIcon className="size-3" />
            Engineering Excellence
          </div>
          <h2 className="text-5xl font-black tracking-tighter md:text-7xl lg:text-8xl text-navy dark:text-white leading-[0.9]">
            Strategic <br />
            <span className="text-amber">Service Units.</span>
          </h2>
          <p className="mt-8 text-xl text-muted-foreground max-w-xl font-medium leading-relaxed">
            From low-level binary diagnostics to high-performance propulsion tuning, we deliver absolute precision.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((svc, i) => (
          <ScrollReveal key={svc.title} delay={i * 80} direction="up">
            <div className="group relative h-[500px] overflow-hidden rounded-[2.5rem] bg-navy transition-all duration-700 hover:shadow-2xl hover:shadow-amber/10">
              {/* Background Image with Overlay */}
              <Image
                src={svc.image}
                alt={svc.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                quality={55}
                className="object-cover opacity-60 transition-all duration-1000 group-hover:scale-110 group-hover:rotate-1 group-hover:opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-10">
                <div className="mb-6 flex size-14 items-center justify-center rounded-2xl bg-amber text-navy transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <svc.icon className="size-6" />
                </div>
                <h3 className="mb-3 text-3xl font-black tracking-tight text-white">{svc.title}</h3>
                <p className="mb-6 text-base text-white/60 line-clamp-2 font-medium">
                  {svc.desc}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-black text-amber">{svc.price}</span>
                  <Link
                    href="/services"
                    className="flex size-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur-sm transition-all hover:bg-amber hover:text-navy hover:border-amber"
                  >
                    <ArrowRightIcon className="size-5" />
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
