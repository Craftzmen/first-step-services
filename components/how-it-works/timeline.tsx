import { VideoIcon, CameraIcon, SearchIcon, SettingsIcon, DollarSignIcon, CheckCircle2Icon, HeadphonesIcon } from "lucide-react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"

const steps = [
  {
    num: "01",
    icon: VideoIcon,
    title: "Protocol Initiation",
    desc: "Secure your technical briefing slot via our encrypted portal for a remote system audit with a master engineer.",
  },
  {
    num: "02",
    icon: CameraIcon,
    title: "Live Telemetry Feed",
    desc: "Deploy your mobile sensor array (camera) for a live structural evaluation guided by our technical leads.",
  },
  {
    num: "03",
    icon: SearchIcon,
    title: "Diagnostic Output",
    desc: "Real-time analysis of mechanical stress markers and binary fault identification for immediate resolution strategy.",
  },
  {
    num: "04",
    icon: SettingsIcon,
    title: "Resolution Matrices",
    desc: "Select your intervention pathway based on the diagnostic severity and operational requirements.",
    subItems: [
      "Guided Calibration — for low-level system adjustments",
      "Mobile Deployment — for on-site structural repairs",
      "Facility Integration — for critical propulsion overhauls",
    ],
  },
  {
    num: "05",
    icon: DollarSignIcon,
    title: "Capital Transparency",
    desc: "Receive a definitive capital breakdown before any mechanical intervention. No surcharges, no hidden parameters.",
  },
]

export function Timeline() {
  return (
    <SectionWrapper id="process" className="relative overflow-hidden">
      {/* Decorative Watermark */}
      <div className="absolute -right-20 top-40 opacity-[0.03] dark:opacity-[0.05] pointer-events-none select-none">
        <span className="text-[15rem] font-black tracking-tighter leading-none uppercase">Workflow</span>
      </div>

      <ScrollReveal>
        <div className="text-center mb-32">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-amber/10 px-6 py-2 text-[10px] font-black uppercase tracking-[0.3em] text-amber">
            The Blueprint
          </div>
          <h2 className="text-5xl font-black tracking-tighter md:text-8xl text-navy dark:text-white leading-[0.85]">
            Engineered for <br /><span className="text-amber">Efficiency.</span>
          </h2>
        </div>
      </ScrollReveal>

      <div className="relative mx-auto max-w-5xl">
        {/* Central Line */}
        <div className="absolute left-[30px] top-0 h-full w-px bg-navy/10 dark:bg-white/10 md:left-1/2" />

        <div className="space-y-24">
          {steps.map((step, i) => {
            const isEven = i % 2 === 0
            return (
              <ScrollReveal key={step.num} delay={i * 100} direction={isEven ? "left" : "right"}>
                <div className={`relative flex flex-col md:flex-row md:items-center ${isEven ? "md:flex-row-reverse" : ""}`}>
                  {/* Step Number Dot */}
                  <div className="absolute left-0 top-0 z-10 flex size-[60px] items-center justify-center rounded-2xl bg-navy text-xl font-black text-white shadow-2xl transition-transform duration-500 hover:rotate-12 md:left-1/2 md:-ml-[30px] md:top-1/2 md:-mt-[30px]">
                    {step.num}
                  </div>

                  {/* Content */}
                  <div className={`w-full md:w-1/2 ${isEven ? "md:pl-20" : "md:pr-20"} pl-20`}>
                    <div className="group relative rounded-[2.5rem] bg-white p-10 dark:bg-navy-light shadow-xl transition-all duration-500 max-md:transition-none md:hover:-translate-y-2">
                      <div className="mb-6 flex size-14 items-center justify-center rounded-2xl bg-amber/10 text-amber transition-colors group-hover:bg-amber group-hover:text-navy">
                        <step.icon className="size-6" />
                      </div>
                      <h3 className="mb-4 text-2xl font-black tracking-tight text-navy dark:text-white">{step.title}</h3>
                      <p className="text-lg leading-relaxed text-muted-foreground font-medium">
                        {step.desc}
                      </p>
                      {step.subItems && (
                        <div className="mt-8 space-y-4 border-t border-navy/5 dark:border-white/5 pt-8">
                          {step.subItems.map((item) => (
                            <div key={item} className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-navy/60 dark:text-white/60">
                              <CheckCircle2Icon className="size-4 text-amber" />
                              {item}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Empty space for md layout */}
                  <div className="hidden w-1/2 md:block" />
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>

      {/* Follow-up Section */}
      <ScrollReveal>
        <div className="mx-auto mt-40 max-w-4xl overflow-hidden rounded-[3rem] bg-amber p-12 md:p-20 shadow-2xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="flex size-24 items-center justify-center rounded-[2rem] bg-navy text-white shadow-2xl">
              <HeadphonesIcon className="size-10" />
            </div>
            <div>
              <h3 className="mb-4 text-3xl font-black tracking-tight text-navy">Post-Service Precision</h3>
              <p className="text-lg text-navy/70 font-medium leading-relaxed">
                Our relationship doesn't end at the workshop. We follow up on every session to ensure your vehicle maintains peak performance.
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </SectionWrapper>
  )
}
