import Link from "next/link"
import { ArrowRightIcon, StoreIcon, ArrowRightLeftIcon, LineChartIcon, PlugIcon, LayersIcon, RocketIcon } from "lucide-react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"

const featured = {
  icon: StoreIcon,
  title: "Store Design & Build",
  desc: "Custom Shopify, WooCommerce, and BigCommerce storefronts engineered for performance and conversion. The work most of our clients hire us for first.",
  engagement: "From 4 weeks",
  highlights: [
    "Tailored design system",
    "Performance-first build",
    "Analytics & SEO from day one",
  ],
}

const services = [
  {
    icon: ArrowRightLeftIcon,
    title: "Platform Migration",
    desc: "Move from Magento, Wix, or legacy systems with zero downtime and clean catalog data.",
    engagement: "Project-based",
  },
  {
    icon: LineChartIcon,
    title: "Conversion Optimization",
    desc: "Analytics audit, A/B testing, and checkout improvements that lift revenue.",
    engagement: "Retainer",
  },
  {
    icon: PlugIcon,
    title: "Integrations & APIs",
    desc: "Connect your store to ERPs, 3PLs, marketing tools, and payment providers reliably.",
    engagement: "From 2 weeks",
  },
  {
    icon: LayersIcon,
    title: "Headless Commerce",
    desc: "Composable storefronts on Next.js with Hydrogen, Sanity, or contentful.",
    engagement: "From 6 weeks",
  },
  {
    icon: RocketIcon,
    title: "Growth & Support",
    desc: "Embedded squad for ongoing development, performance, and feature releases.",
    engagement: "Retainer",
  },
] as const

export function HomeServices() {
  return (
    <SectionWrapper id="services" className="relative">
      <ScrollReveal>
        <div className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-amber/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-amber">
              <RocketIcon className="size-3" />
              What We Do
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-navy dark:text-white md:text-4xl lg:text-5xl">
              End-to-end <span className="text-amber">e-commerce solutions.</span>
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              From the first wireframe to the next quarter&apos;s growth experiments — we ship the work that moves the metrics that matter.
            </p>
          </div>
          <Link
            href="/services"
            className="hidden items-center gap-2 self-end text-xs font-semibold uppercase tracking-[0.2em] text-navy/60 hover:text-amber dark:text-white/60 dark:hover:text-amber lg:inline-flex"
          >
            All Services
            <ArrowRightIcon className="size-4" />
          </Link>
        </div>
      </ScrollReveal>

      {/* Bento grid: 3 cols × 3 rows on lg, with the flagship card spanning 2×2 */}
      <div className="grid gap-4 md:gap-5 lg:grid-cols-3 lg:grid-rows-3">
        <ScrollReveal direction="up" className="lg:col-span-2 lg:row-span-2">
          <div className="group relative flex h-full min-h-[300px] flex-col overflow-hidden rounded-3xl bg-navy p-7 text-white md:p-9">
            <div className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-amber/20 blur-3xl" aria-hidden />

            <div className="relative flex items-start justify-between">
              <div className="flex size-14 items-center justify-center rounded-2xl bg-amber text-white shadow-lg shadow-amber/30">
                <featured.icon className="size-7" />
              </div>
              <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-amber">
                Flagship
              </span>
            </div>

            <h3 className="relative mt-8 text-3xl font-bold tracking-tight md:text-4xl">{featured.title}</h3>
            <p className="relative mt-3 max-w-md text-sm leading-relaxed text-white/70 md:text-base">{featured.desc}</p>

            <ul className="relative mt-6 space-y-2">
              {featured.highlights.map((h) => (
                <li key={h} className="flex items-center gap-3 text-xs font-medium text-white/65">
                  <span className="size-1 rounded-full bg-amber" />
                  {h}
                </li>
              ))}
            </ul>

            <div className="relative mt-auto flex items-center justify-between border-t border-white/10 pt-6">
              <span className="text-sm font-bold text-amber">{featured.engagement}</span>
              <Link
                href="/services"
                className="flex size-11 items-center justify-center rounded-full bg-amber text-white transition group-hover:translate-x-1"
                aria-label={`Learn more about ${featured.title}`}
              >
                <ArrowRightIcon className="size-5" />
              </Link>
            </div>
          </div>
        </ScrollReveal>

        {services.map((svc, i) => (
          <ScrollReveal key={svc.title} delay={(i + 1) * 70} direction="up">
            <div className="group relative flex h-full min-h-[200px] flex-col rounded-3xl border border-navy/10 bg-card p-6 transition hover:-translate-y-0.5 hover:border-amber/40 hover:shadow-lg dark:border-white/10 md:p-7">
              <div className="flex items-start justify-between">
                <div className="flex size-11 items-center justify-center rounded-xl bg-amber/10 text-amber">
                  <svc.icon className="size-5" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-navy/40 dark:text-white/40">
                  0{i + 2}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-bold tracking-tight text-navy dark:text-white md:text-xl">{svc.title}</h3>
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{svc.desc}</p>
              <div className="mt-auto flex items-center justify-between pt-5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber">{svc.engagement}</span>
                <Link
                  href="/services"
                  className="flex size-9 items-center justify-center rounded-full border border-navy/15 text-navy/60 transition hover:bg-amber hover:text-white group-hover:border-amber dark:border-white/15 dark:text-white/60"
                  aria-label={`Learn more about ${svc.title}`}
                >
                  <ArrowRightIcon className="size-4" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal className="mt-8 lg:hidden">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-navy hover:text-amber dark:text-white"
        >
          All Services
          <ArrowRightIcon className="size-4" />
        </Link>
      </ScrollReveal>
    </SectionWrapper>
  )
}
