import {
  VideoIcon,
  CameraIcon,
  SearchIcon,
  SettingsIcon,
  DollarSignIcon,
  CheckCircle2Icon,
  HeadphonesIcon,
} from "lucide-react"
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
      <div className="pointer-events-none absolute -right-10 top-32 select-none opacity-[0.04] dark:opacity-[0.06]">
        <span className="text-7xl font-bold uppercase leading-none tracking-tighter md:text-9xl">Workflow</span>
      </div>

      <ScrollReveal>
        <div className="mb-16 text-center md:mb-20">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-amber/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-amber">
            The Blueprint
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-navy dark:text-white md:text-3xl">
            Engineered for <span className="text-amber">Efficiency.</span>
          </h2>
        </div>
      </ScrollReveal>

      <div className="relative mx-auto max-w-5xl">
        <div className="absolute left-[30px] top-0 h-full w-px bg-navy/15 dark:bg-white/15 md:left-1/2" />

        <div className="space-y-14 md:space-y-20">
          {steps.map((step, i) => {
            const isEven = i % 2 === 0
            return (
              <ScrollReveal key={step.num} delay={i * 100} direction={isEven ? "left" : "right"}>
                <div className={`relative flex flex-col md:flex-row md:items-center ${isEven ? "md:flex-row-reverse" : ""}`}>
                  <div className="absolute left-0 top-0 z-10 flex size-12 items-center justify-center rounded-xl bg-navy text-sm font-bold text-white shadow-md md:left-1/2 md:top-1/2 md:-ml-6 md:-mt-6 md:size-14 md:text-base">
                    {step.num}
                  </div>

                  <div className={`w-full md:w-1/2 ${isEven ? "md:pl-14" : "md:pr-14"} pl-16 md:pl-16`}>
                    <div className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-navy-light md:p-8">
                      <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-amber/15 text-amber">
                        <step.icon className="size-5" />
                      </div>
                      <h3 className="mb-2 text-base font-bold tracking-tight text-navy dark:text-white md:text-lg">{step.title}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground md:text-base">{step.desc}</p>
                      {step.subItems && (
                        <div className="mt-6 space-y-3 border-t border-navy/10 pt-6 dark:border-white/10">
                          {step.subItems.map((item) => (
                            <div key={item} className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wide text-navy/70 dark:text-white/70">
                              <CheckCircle2Icon className="size-3.5 shrink-0 text-amber" />
                              {item}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="hidden w-1/2 md:block" />
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>

      <ScrollReveal>
        <div className="mx-auto mt-16 max-w-3xl overflow-hidden rounded-2xl border border-navy/10 bg-amber p-8 shadow-md md:mt-24 md:p-10">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
            <div className="flex size-16 items-center justify-center rounded-2xl bg-navy text-white md:size-20">
              <HeadphonesIcon className="size-8 md:size-9" />
            </div>
            <div>
              <h3 className="mb-2 text-lg font-bold tracking-tight text-navy md:text-xl">Post-Service Precision</h3>
              <p className="text-sm leading-relaxed text-navy/80 md:text-base">
                Our relationship doesn&apos;t end at the workshop. We follow up on every session to ensure your vehicle maintains peak performance.
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </SectionWrapper>
  )
}
