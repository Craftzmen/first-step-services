import Link from "next/link"
import Image from "next/image"
import { ArrowRightIcon, WrenchIcon, ActivityIcon, CpuIcon, ShieldCheckIcon, WindIcon, DropletIcon } from "lucide-react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"

const services = [
  {
    icon: ActivityIcon,
    title: "Performance Upgrades",
    desc: "Unlock your vehicle's full potential with expert performance tuning, engine modifications, and power upgrades designed to boost speed and efficiency.",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=600",
  },
  {
    icon: CpuIcon,
    title: "Computer Diagnostics",
    desc: "State-of-the-art OBD-II diagnostics and electronic system analysis to pinpoint issues with unmatched accuracy. Fast, reliable, and thorough.",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=600",
  },
  {
    icon: ShieldCheckIcon,
    title: "Anti-Lock Brake Service",
    desc: "Comprehensive brake system inspection, pad replacement, rotor resurfacing, and ABS module diagnostics to keep you safe on every road.",
    image: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&q=80&w=600",
  },
  {
    icon: WindIcon,
    title: "Air Conditioning Evac & Recharge",
    desc: "Complete AC system evacuation, leak detection, refrigerant recharge, and climate control repair for year-round cabin comfort.",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=600",
  },
  {
    icon: DropletIcon,
    title: "Lube, Oil & Filters",
    desc: "Routine oil changes, filter replacements, and lubrication services using premium products to maximize engine longevity and performance.",
    image: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&q=80&w=600",
  },
  {
    icon: WrenchIcon,
    title: "Engine Diagnostics",
    desc: "Deep engine analysis — from compression tests to timing checks. Our certified mechanics identify and resolve complex engine issues.",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=600",
  },
]

export function ServicesGrid() {
  return (
    <SectionWrapper>
      <ScrollReveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 border border-border bg-muted px-3 py-1 text-xs font-semibold tracking-widest text-foreground uppercase">
              <WrenchIcon className="size-3.5 text-amber" />
              What We Do
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl text-navy dark:text-white">
              Professional <br /><span className="text-amber">Auto Repair</span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-md">
            From routine maintenance to complex repairs, our certified technicians
            deliver top-quality service using the latest tools and technology.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((svc, i) => (
          <ScrollReveal key={svc.title} delay={i * 80}>
            <div className="group relative flex h-full flex-col overflow-hidden border border-border bg-card transition-colors hover:border-amber pb-6">
              <div className="relative h-60 w-full overflow-hidden border-b border-border">
                <Image
                  src={svc.image}
                  alt={svc.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-navy/20 transition-opacity group-hover:opacity-0" />
                <div className="absolute bottom-0 left-0 bg-navy p-4 text-amber">
                  <svc.icon className="size-6" />
                </div>
              </div>
              <div className="flex-1 px-6 pt-8">
                <h3 className="mb-3 text-xl font-bold text-foreground">{svc.title}</h3>
                <p className="text-base text-muted-foreground">
                  {svc.desc}
                </p>
              </div>
              <div className="px-6 mt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-bold text-navy dark:text-white uppercase tracking-wider group-hover:text-amber transition-colors"
                >
                  Book This Service
                  <ArrowRightIcon className="size-4" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  )
}
