import Image from "next/image"
import { CarIcon, KeyIcon, RefreshCwIcon, CheckCircle2Icon } from "lucide-react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"
import { UNSPLASH } from "@/lib/remote-images"

const financeOptions = [
  {
    icon: CarIcon,
    title: "Primary Acquisition",
    desc: "Secure peak-performance inventory with aggressive rates on all new Kia and Hyundai models.",
    image: `${UNSPLASH.sedan}&w=1200`,
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
    image: `${UNSPLASH.suv}&w=1200`,
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
    image: `${UNSPLASH.carExterior}&w=1200`,
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
        <div className="mb-16 text-center md:mb-20">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-amber/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-amber">
            Our Portfolios
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-navy dark:text-white md:text-3xl">
            Tailored <span className="text-amber">Capital.</span>
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid gap-8 lg:grid-cols-3">
        {financeOptions.map((option, i) => (
          <ScrollReveal key={option.title} delay={i * 100} direction="up">
            <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-md dark:border-white/10 dark:bg-navy-light">
              <div className="relative h-40 w-full overflow-hidden md:h-44">
                <Image
                  src={option.image}
                  alt={option.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  quality={75}
                  loading={i === 0 ? "eager" : "lazy"}
                  unoptimized
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-navy/20 dark:bg-navy/40" />
                <div className="absolute top-5 left-5 flex size-11 items-center justify-center rounded-xl bg-navy text-white shadow-md dark:bg-white dark:text-navy">
                  <option.icon className="size-5" />
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6 pt-4 md:p-8">
                <h3 className="mb-2 text-xl font-bold tracking-tight text-navy dark:text-white md:text-2xl">{option.title}</h3>
                <p className="mb-6 text-sm leading-relaxed text-muted-foreground">{option.desc}</p>
                <ul className="mt-auto space-y-3 border-t border-navy/10 pt-6 dark:border-white/10">
                  {option.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-navy/70 dark:text-white/70"
                    >
                      <CheckCircle2Icon className="size-4 shrink-0 text-amber" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pointer-events-none absolute top-3 right-5 z-10 select-none text-4xl font-bold text-white/25">
                0{i + 1}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  )
}
