import { HistoryIcon, TargetIcon, EyeIcon, CheckCircle2Icon } from "lucide-react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

export function AboutTabs() {
  return (
    <SectionWrapper background="muted" padding="default" className="relative overflow-hidden">
      <ScrollReveal>
        <Tabs defaultValue="history" className="mx-auto max-w-4xl">
          <TabsList className="mx-auto mb-10 flex h-auto w-full flex-wrap items-center justify-center gap-2 rounded-2xl bg-white p-2 dark:bg-navy-light md:mb-12 md:h-16 md:w-fit">
            <TabsTrigger
              value="history"
              className="h-11 gap-2 rounded-full px-5 text-[10px] font-semibold uppercase tracking-wide data-[state=active]:bg-amber data-[state=active]:text-navy md:px-6 md:text-xs"
            >
              <HistoryIcon className="size-4" />
              History
            </TabsTrigger>
            <TabsTrigger
              value="mission"
              className="h-11 gap-2 rounded-full px-5 text-[10px] font-semibold uppercase tracking-wide data-[state=active]:bg-amber data-[state=active]:text-navy md:px-6 md:text-xs"
            >
              <TargetIcon className="size-4" />
              Mission
            </TabsTrigger>
            <TabsTrigger
              value="vision"
              className="h-11 gap-2 rounded-full px-5 text-[10px] font-semibold uppercase tracking-wide data-[state=active]:bg-amber data-[state=active]:text-navy md:px-6 md:text-xs"
            >
              <EyeIcon className="size-4" />
              Vision
            </TabsTrigger>
          </TabsList>

          <TabsContent value="history">
            <div className="relative overflow-hidden rounded-2xl bg-navy p-8 text-white shadow-md md:p-12">
              <div className="pointer-events-none absolute -right-8 -top-8 opacity-10">
                <HistoryIcon className="size-40 md:size-48" />
              </div>
              <h3 className="relative z-10 mb-4 text-2xl font-bold tracking-tight md:text-3xl">
                Established 2026, <span className="text-amber">Stevens Point Facility.</span>
              </h3>
              <p className="relative z-10 max-w-2xl text-sm leading-relaxed text-white/70 md:text-base">
                First Step Services was established as an engineering-first workshop to disrupt the standard au model through telemetry-driven diagnostics and uncompromising transparency.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="mission">
            <div className="relative overflow-hidden rounded-2xl bg-navy p-8 text-white shadow-md md:p-12">
              <div className="pointer-events-none absolute -right-8 -top-8 opacity-10">
                <TargetIcon className="size-40 md:size-48" />
              </div>
              <h3 className="relative z-10 mb-4 text-2xl font-bold tracking-tight text-amber md:text-3xl">Absolute Performance.</h3>
              <p className="relative z-10 mb-8 max-w-2xl text-sm leading-relaxed text-white/70 md:text-base">
                To elevate the technical integrity of every vehicle we touch, ensuring absolute reliability and peak performance safety.
              </p>
              <ul className="relative z-10 grid gap-3 sm:grid-cols-2">
                {[
                  "Cutting-edge product knowledge",
                  "Latest technology innovations",
                  "Information security leadership",
                  "Mechanical precision",
                ].map((item) => (
                  <li key={item} className="flex gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                    <CheckCircle2Icon className="size-4 shrink-0 text-amber" />
                    <span className="text-[10px] font-semibold uppercase tracking-wide text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="vision">
            <div className="relative overflow-hidden rounded-2xl bg-navy p-8 text-white shadow-md md:p-12">
              <div className="pointer-events-none absolute -right-8 -top-8 opacity-10">
                <EyeIcon className="size-40 md:size-48" />
              </div>
              <h3 className="relative z-10 mb-4 text-2xl font-bold tracking-tight md:text-3xl">
                The Future of <span className="text-amber">Auto Care.</span>
              </h3>
              <p className="relative z-10 max-w-2xl text-sm leading-relaxed text-white/70 md:text-base">
                To define the future of automotive care through the integration of aerospace-grade diagnostic protocols and artisan craftsmanship.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </ScrollReveal>
    </SectionWrapper>
  )
}
