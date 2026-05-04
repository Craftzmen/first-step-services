import Image from "next/image"
import { CarIcon, KeyIcon, RefreshCwIcon, CheckCircle2Icon } from "lucide-react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"

const financeOptions = [
  {
    icon: CarIcon,
    title: "Primary Acquisition",
    desc: "Secure peak-performance inventory with aggressive rates on all new Kia and Hyundai models.",
    image: "https://images.unsplash.com/photo-1689221590315-514bb87b16e8?q=80&w=1740&auto=format&fit=crop", // Sonata
    features: [
      "Optimized down payment matrix",
      "Dynamic tenure (12–84 months)",
      "High-velocity approvals",
      "Encrypted digital documentation",
    ],
  },
  {
    icon: KeyIcon,
    title: "Legacy Portfolio",
    desc: "High-integrity financing for pre-vetted elite pre-owned Kia and Hyundai vehicles.",
    image: "https://images.unsplash.com/photo-1705624843697-4461f9dce482?q=80&w=1160&auto=format&fit=crop", // Tucson
    features: [
      "Vetted dealer & peer networks",
      "Variable liquidity plans",
      "Accelerated vetting process",
      "Low-drag interest structures",
    ],
  },
  {
    icon: RefreshCwIcon,
    title: "Structural Optimization",
    desc: "Recalibrate your existing financial burden for improved cash flow and reduced interest drag.",
    image: "https://images.unsplash.com/photo-1693456356273-b0bfab25c4bf?q=80&w=1660&auto=format&fit=crop", // Kia Sportage
    features: [
      "EMI load reduction",
      "Aggressive rate recalibration",
      "Liquidity preservation",
      "Tenure stress adjustment",
    ],
  },
]

export function FinanceOptions() {
  return (
    <SectionWrapper background="muted">
      <ScrollReveal>
        <div className="text-center mb-24">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber/10 px-5 py-2 text-[10px] font-black uppercase tracking-[0.3em] text-amber">
            Our Portfolios
          </div>
          <h2 className="text-5xl font-black tracking-tighter md:text-7xl text-navy dark:text-white">
            Tailored <span className="text-amber">Capital.</span>
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid gap-12 lg:grid-cols-3">
        {financeOptions.map((option, i) => (
          <ScrollReveal key={option.title} delay={i * 100} direction="up">
            <div className="group relative flex flex-col h-full rounded-[3rem] bg-white overflow-hidden dark:bg-navy-light shadow-xl transition-all duration-500 max-md:transition-none md:hover:-translate-y-4 md:hover:shadow-2xl md:hover:border-amber/20 border border-transparent">
              {/* Card Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={option.image}
                  alt={option.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  quality={38}
                  loading="lazy"
                  className="object-cover transition-transform duration-700 max-md:transition-none md:group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-navy-light to-transparent" />
                <div className="absolute top-8 left-8 flex size-14 items-center justify-center rounded-2xl bg-navy text-white shadow-xl transition-all duration-500 max-md:transition-none md:group-hover:bg-amber md:group-hover:text-navy md:group-hover:rotate-12\">
                  <option.icon className="size-6" />
                </div>
              </div>

              <div className="p-10 pt-4 flex flex-col flex-1">
                <h3 className="mb-4 text-3xl font-black tracking-tight text-navy dark:text-white">{option.title}</h3>
                <p className="mb-10 text-lg leading-relaxed text-muted-foreground font-medium">
                  {option.desc}
                </p>
                <ul className="space-y-5 border-t border-navy/5 dark:border-white/5 pt-10 mt-auto">
                  {option.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-4 text-sm font-black uppercase tracking-widest text-navy/60 dark:text-white/60">
                      <CheckCircle2Icon className="size-5 shrink-0 text-amber" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Decorative Number */}
              <div className="absolute top-4 right-8 text-6xl font-black text-white/20 select-none pointer-events-none z-10">
                0{i + 1}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  )
}
