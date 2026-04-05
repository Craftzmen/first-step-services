import Link from "next/link"
import Image from "next/image"
import { ArrowRightIcon, WrenchIcon, CpuIcon, ShieldCheckIcon, WindIcon, DropletIcon, ActivityIcon } from "lucide-react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"

const services = [
  {
    icon: ActivityIcon,
    title: "Performance Upgrades",
    desc: "Boost your vehicle's power and efficiency with expert-level performance tuning and upgrades.",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=600",
    price: "$500 - $5,000+",
  },
  {
    icon: CpuIcon,
    title: "Computer Diagnostics",
    desc: "Advanced OBD-II scanning and system analysis to accurately identify any issue.",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=600",
    price: "$100 - $250",
  },
  {
    icon: ShieldCheckIcon,
    title: "Anti-Lock Brake Service",
    desc: "Complete brake system inspection, repair, and replacement for your safety.",
    image: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&q=80&w=600",
    price: "$150 - $450",
  },
  {
    icon: WindIcon,
    title: "AC Service & Repair",
    desc: "Full air conditioning evacuation, recharge, and climate control system service.",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=600",
    price: "$120 - $350",
  },
  {
    icon: DropletIcon,
    title: "Lube, Oil & Filters",
    desc: "Routine oil changes and filter replacements to keep your engine running at peak performance.",
    image: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&q=80&w=600",
    price: "$60 - $120",
  },
  {
    icon: WrenchIcon,
    title: "Engine Diagnostics",
    desc: "Comprehensive engine analysis and troubleshooting by certified mechanics.",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=600",
    price: "$150 - $400",
  },
]

export function HomeServices() {
  return (
    <SectionWrapper id="services">
      <ScrollReveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 border border-border bg-muted px-3 py-1 text-xs font-semibold tracking-widest text-foreground uppercase">
              <WrenchIcon className="size-3.5 text-amber" />
              What We Offer
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl text-navy dark:text-white">
              Comprehensive <br /><span className="text-amber">Auto Solutions</span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-md">
            From advanced diagnostics to engine rebuilds, our certified master technicians deliver uncompromising precision.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((svc, i) => (
          <ScrollReveal key={svc.title} delay={i * 80}>
            <div className="group relative flex h-full flex-col overflow-hidden border border-border bg-card transition-colors hover:border-amber pb-6">
              <div className="relative h-60 w-full overflow-hidden">
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
                <p className="text-base text-muted-foreground mb-4">
                  {svc.desc}
                </p>
                <div className="inline-flex items-center gap-1.5 rounded-full bg-amber/10 px-3 py-1 font-bold text-amber">
                  Price: {svc.price}
                </div>
              </div>
              <div className="px-6 mt-6 border-t border-border pt-6">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-sm font-bold text-navy dark:text-white uppercase tracking-wider group-hover:text-amber transition-colors"
                >
                  Learn more
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
