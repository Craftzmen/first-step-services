import Link from "next/link"
import { ArrowRightIcon, StoreIcon, ArrowRightLeftIcon, LineChartIcon, PlugIcon, LayersIcon, RocketIcon, CheckIcon } from "lucide-react"
import { SectionWrapper } from "@/components/layout/section-wrapper"

interface Service {
  num: string
  icon: typeof StoreIcon
  title: string
  desc: string
  engagement: string
  slug: string
  platforms: string[]
  includes: string[]
}

const services: Service[] = [
  {
    num: "01",
    icon: StoreIcon,
    title: "Store Design & Build",
    desc: "Custom Shopify, WooCommerce, and BigCommerce storefronts with a design system tuned to your brand and built around the patterns that convert.",
    engagement: "From 4 weeks",
    slug: "store-build",
    platforms: ["Shopify Plus", "WooCommerce", "BigCommerce"],
    includes: [
      "Brand-led design system",
      "Performance-first build",
      "SEO & analytics from day one",
      "Launch QA on real devices",
    ],
  },
  {
    num: "02",
    icon: ArrowRightLeftIcon,
    title: "Platform Migration",
    desc: "Move from Magento, Wix, BigCartel, or any legacy stack with zero downtime, preserved SEO, and clean catalog, customer, and order data.",
    engagement: "Project-based",
    slug: "migration",
    platforms: ["Magento", "Wix", "BigCartel", "Custom"],
    includes: [
      "Documented data plan",
      "Catalog & order migration",
      "Redirect map for SEO",
      "Staging environment review",
    ],
  },
  {
    num: "03",
    icon: LineChartIcon,
    title: "Conversion Optimization",
    desc: "An ongoing CRO program — analytics audits, structured A/B testing, checkout improvements, and a steady backlog of revenue experiments.",
    engagement: "Retainer",
    slug: "cro",
    platforms: ["GA4", "Hotjar", "Optimizely", "VWO"],
    includes: [
      "Analytics & funnel audit",
      "Hypothesis-led test backlog",
      "Checkout & PDP experiments",
      "Quarterly business review",
    ],
  },
  {
    num: "04",
    icon: PlugIcon,
    title: "Integrations & APIs",
    desc: "Connect your store to ERPs, 3PLs, marketing platforms, payment gateways, and custom internal tools with reliable, well-tested middleware.",
    engagement: "From 2 weeks",
    slug: "integrations",
    platforms: ["NetSuite", "ShipStation", "Klaviyo", "Stripe"],
    includes: [
      "API & webhook design",
      "Idempotent middleware",
      "Monitoring & alerting",
      "Documentation handoff",
    ],
  },
  {
    num: "05",
    icon: LayersIcon,
    title: "Headless Commerce",
    desc: "Composable storefronts on Next.js with Shopify Hydrogen, Sanity, or contentful — built for performance, flexibility, and editorial freedom.",
    engagement: "From 6 weeks",
    slug: "headless",
    platforms: ["Next.js", "Hydrogen", "Sanity", "Contentful"],
    includes: [
      "Composable architecture",
      "Editorial CMS integration",
      "Cart & checkout layer",
      "Edge-cached performance",
    ],
  },
  {
    num: "06",
    icon: RocketIcon,
    title: "Growth & Support",
    desc: "An embedded squad for ongoing development, performance tuning, content updates, and feature releases — week after week, on a fixed retainer.",
    engagement: "Retainer",
    slug: "support",
    platforms: ["Slack", "Linear", "GitHub", "Sentry"],
    includes: [
      "Dedicated senior lead",
      "Weekly working demos",
      "Backlog grooming",
      "Performance & uptime work",
    ],
  },
]

export function ServicesGrid() {
  return (
    <SectionWrapper id="services" className="relative">
        <div className="mb-10 max-w-2xl md:mb-14">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-amber/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-amber">
            What We Offer
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-navy dark:text-white md:text-4xl lg:text-5xl">
            Pick a track. <span className="text-amber">Or stitch a few together.</span>
          </h2>
        </div>

      <div className="space-y-6 md:space-y-8">
        {services.map((svc) => (
            <article
              key={svc.slug}
              id={svc.slug}
              className="group grid scroll-mt-28 gap-8 rounded-3xl border border-navy/10 bg-card p-7 hover:border-amber/40 dark:border-white/10 md:grid-cols-12 md:gap-10 md:p-10"
            >
              <div className="flex items-start gap-5 md:col-span-5">
                <span className="text-5xl font-bold tracking-tight text-amber/70 md:text-6xl">{svc.num}</span>
                <div className="min-w-0 flex-1">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-navy text-white">
                    <svc.icon className="size-5" />
                  </span>
                  <h3 className="mt-4 text-2xl font-bold tracking-tight text-navy dark:text-white md:text-3xl">{svc.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {svc.platforms.map((p) => (
                      <span
                        key={p}
                        className="rounded-full border border-navy/10 bg-background px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-navy/70 dark:border-white/10 dark:text-white/70"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="md:col-span-7">
                <p className="text-sm leading-relaxed text-muted-foreground md:text-base">{svc.desc}</p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {svc.includes.map((inc) => (
                    <div
                      key={inc}
                      className="flex items-start gap-3 rounded-xl border border-navy/10 bg-background p-3 dark:border-white/10"
                    >
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-amber/15 text-amber">
                        <CheckIcon className="size-3" />
                      </span>
                      <span className="text-xs font-medium leading-snug text-navy/80 dark:text-white/80">{inc}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-navy/10 pt-5 dark:border-white/10">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber">{svc.engagement}</span>
                  <Link
                    href={`/contact?service=${svc.slug}`}
                    className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2 text-xs font-semibold uppercase tracking-wide text-white hover:bg-amber dark:bg-white dark:text-navy dark:hover:bg-amber dark:hover:text-white"
                  >
                    Talk to us
                    <ArrowRightIcon className="size-3.5" />
                  </Link>
                </div>
              </div>
            </article>
        ))}
      </div>
    </SectionWrapper>
  )
}
