import { HistoryIcon, TargetIcon, EyeIcon, CheckCircle2Icon } from "lucide-react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

export function AboutTabs() {
  return (
    <SectionWrapper background="muted" padding="default" className="relative overflow-hidden">
      <ScrollReveal>
        <Tabs defaultValue="history" className="mx-auto max-w-5xl">
          <TabsList className="mx-auto mb-16 flex h-20 w-fit items-center gap-2 rounded-full bg-white dark:bg-navy-light p-2 shadow-2xl">
            <TabsTrigger value="history" className="h-full gap-2 rounded-full px-8 font-black uppercase tracking-widest transition-all data-[state=active]:bg-amber data-[state=active]:text-navy">
              <HistoryIcon className="size-4" />
              History
            </TabsTrigger>
            <TabsTrigger value="mission" className="h-full gap-2 rounded-full px-8 font-black uppercase tracking-widest transition-all data-[state=active]:bg-amber data-[state=active]:text-navy">
              <TargetIcon className="size-4" />
              Mission
            </TabsTrigger>
            <TabsTrigger value="vision" className="h-full gap-2 rounded-full px-8 font-black uppercase tracking-widest transition-all data-[state=active]:bg-amber data-[state=active]:text-navy">
              <EyeIcon className="size-4" />
              Vision
            </TabsTrigger>
          </TabsList>

          <TabsContent value="history" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="relative overflow-hidden rounded-[3rem] bg-navy p-12 text-white md:p-20 shadow-2xl">
              <div className="absolute -right-10 -top-10 opacity-10 pointer-events-none">
                <HistoryIcon className="size-64" />
              </div>
              <h3 className="relative z-10 mb-8 text-4xl font-black tracking-tighter md:text-6xl">
                Established 2026, <br /><span className="text-amber">Stevens Point Facility.</span>
              </h3>
              <p className="relative z-10 text-xl leading-relaxed text-white/60 font-medium max-w-2xl">
                First Step Services was established as an engineering-first workshop to disrupt the standard auto-repair model through telemetry-driven diagnostics and uncompromising transparency.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="mission" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="relative overflow-hidden rounded-[3rem] bg-navy p-12 text-white md:p-20 shadow-2xl">
              <div className="absolute -right-10 -top-10 opacity-10 pointer-events-none">
                <TargetIcon className="size-64" />
              </div>
              <h3 className="relative z-10 mb-8 text-4xl font-black tracking-tighter md:text-6xl text-amber">
                Absolute Performance.
              </h3>
              <p className="relative z-10 mb-12 text-xl leading-relaxed text-white/60 font-medium max-w-2xl">
                To elevate the technical integrity of every vehicle we touch, ensuring absolute reliability and peak performance safety.
              </p>
              <ul className="relative z-10 grid gap-4 sm:grid-cols-2">
                {[
                  "Cutting-edge product knowledge",
                  "Latest technology innovations",
                  "Information security leadership",
                  "Mechanical precision"
                ].map((item) => (
                  <li key={item} className="flex gap-4 rounded-2xl border border-white/5 bg-white/5 p-5 backdrop-blur-sm transition-all hover:bg-white/10">
                    <CheckCircle2Icon className="size-5 shrink-0 text-amber" />
                    <span className="font-black uppercase tracking-widest text-[10px]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="vision" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="relative overflow-hidden rounded-[3rem] bg-navy p-12 text-white md:p-20 shadow-2xl">
              <div className="absolute -right-10 -top-10 opacity-10 pointer-events-none">
                <EyeIcon className="size-64" />
              </div>
              <h3 className="relative z-10 mb-8 text-4xl font-black tracking-tighter md:text-6xl text-white">
                The Future of <br /><span className="text-amber">Auto Care.</span>
              </h3>
              <p className="relative z-10 text-xl leading-relaxed text-white/60 font-medium max-w-2xl">
                To define the future of automotive care through the integration of aerospace-grade diagnostic protocols and artisan craftsmanship.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </ScrollReveal>
    </SectionWrapper>
  )
}
