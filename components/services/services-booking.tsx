import { ArrowRightIcon, FileTextIcon, MailCheckIcon, CalendarCheckIcon } from "lucide-react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const nextSteps = [
  {
    num: "01",
    icon: FileTextIcon,
    title: "Send us your brief",
    desc: "A few quick fields — platform, scope, timing.",
  },
  {
    num: "02",
    icon: MailCheckIcon,
    title: "Reply within 1 business day",
    desc: "A real human, with a real answer or a few questions.",
  },
  {
    num: "03",
    icon: CalendarCheckIcon,
    title: "Book a discovery call",
    desc: "30 minutes to align on scope, timeline, and quote.",
  },
]

export function ServicesBooking() {
  return (
    <SectionWrapper background="muted" className="relative">
      <ScrollReveal>
        <div className="mb-10 max-w-2xl md:mb-14">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-amber/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-amber">
            Next Steps
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-navy dark:text-white md:text-4xl lg:text-5xl">
            Start your <span className="text-amber">project.</span>
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
        {/* LEFT: what happens next */}
        <ScrollReveal direction="left" className="lg:col-span-5">
          <div className="space-y-4">
            {nextSteps.map((s, i) => (
              <div
                key={s.num}
                className="group relative grid grid-cols-[auto_1fr] items-start gap-5 rounded-2xl border border-navy/10 bg-card p-5 transition hover:border-amber/40 dark:border-white/10 md:p-6"
              >
                <div className="flex flex-col items-center gap-2">
                  <span className="text-2xl font-bold tracking-tight text-amber/80 md:text-3xl">{s.num}</span>
                  <span className="flex size-10 items-center justify-center rounded-xl bg-navy text-white">
                    <s.icon className="size-4" />
                  </span>
                  {i < nextSteps.length - 1 ? (
                    <span aria-hidden className="mt-2 h-6 w-px bg-navy/15 dark:bg-white/15" />
                  ) : null}
                </div>
                <div className="pt-1">
                  <h3 className="text-base font-bold tracking-tight text-navy dark:text-white">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* RIGHT: dark form card */}
        <ScrollReveal direction="right" className="lg:col-span-7">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-navy p-8 text-white shadow-lg md:p-10">
            <div aria-hidden className="pointer-events-none absolute -right-20 -top-20 size-60 rounded-full bg-amber/15 blur-3xl" />

            <div className="relative">
              <h3 className="mb-2 text-2xl font-bold tracking-tight md:text-3xl">
                Tell us about <span className="text-amber">your store.</span>
              </h3>
              <p className="mb-8 max-w-md text-sm leading-relaxed text-white/65">
                A 60-second brief is enough for us to write back with a real next step.
              </p>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2 sm:col-span-1">
                  <label className="text-[10px] font-semibold uppercase tracking-wide text-white/45">Current Platform</label>
                  <Select>
                    <SelectTrigger className="h-12 rounded-xl border-white/15 bg-white/10 text-sm text-white focus:border-amber focus:ring-0">
                      <SelectValue placeholder="Select Platform" />
                    </SelectTrigger>
                    <SelectContent className="border-white/10 bg-navy text-white">
                      <SelectGroup>
                        <SelectItem value="shopify">Shopify / Shopify Plus</SelectItem>
                        <SelectItem value="woocommerce">WooCommerce</SelectItem>
                        <SelectItem value="magento">Magento / Adobe Commerce</SelectItem>
                        <SelectItem value="bigcommerce">BigCommerce</SelectItem>
                        <SelectItem value="custom">Custom / Headless</SelectItem>
                        <SelectItem value="none">No store yet</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2 sm:col-span-1">
                  <label className="text-[10px] font-semibold uppercase tracking-wide text-white/45">What do you need?</label>
                  <Select>
                    <SelectTrigger className="h-12 rounded-xl border-white/15 bg-white/10 text-sm text-white focus:border-amber focus:ring-0">
                      <SelectValue placeholder="Select Service" />
                    </SelectTrigger>
                    <SelectContent className="border-white/10 bg-navy text-white">
                      <SelectGroup>
                        <SelectItem value="store-build">New Store Build</SelectItem>
                        <SelectItem value="migration">Platform Migration</SelectItem>
                        <SelectItem value="cro">Conversion Optimization</SelectItem>
                        <SelectItem value="integrations">Integrations &amp; APIs</SelectItem>
                        <SelectItem value="headless">Headless Commerce</SelectItem>
                        <SelectItem value="support">Ongoing Support</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button className="mt-8 h-12 w-full rounded-xl bg-amber text-sm font-semibold uppercase tracking-wide text-white hover:bg-white hover:text-navy">
                Request a Proposal
                <ArrowRightIcon className="ml-2 size-5" />
              </Button>

              <p className="mt-4 text-center text-[10px] font-medium uppercase tracking-[0.2em] text-white/45">
                For the full form, head to the contact page.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  )
}
