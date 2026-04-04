import { VideoIcon, CameraIcon, SearchIcon, SettingsIcon, DollarSignIcon, CheckCircle2Icon, HeadphonesIcon } from "lucide-react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"

const steps = [
  {
    num: "01",
    icon: VideoIcon,
    title: "Book an Online Call",
    desc: "Customers select a convenient time slot and start a video call with a certified mechanic. No need to leave your home.",
  },
  {
    num: "02",
    icon: CameraIcon,
    title: "Live Inspection Through Camera",
    desc: "Our mechanics guide you to show the car's issue on camera for a quick, real-time visual assessment from any angle.",
  },
  {
    num: "03",
    icon: SearchIcon,
    title: "Instant Diagnosis",
    desc: "The mechanic identifies the problem, explains what's wrong in plain language, and tells you exactly what needs to be fixed.",
  },
  {
    num: "04",
    icon: SettingsIcon,
    title: "Service Options",
    desc: "Choose the option that works best for you based on the diagnosis and your schedule.",
    subItems: [
      "Self-Fix Guidance — for minor issues you can handle yourself",
      "On-Site Mechanic Visit — if the issue requires hands-on work",
      "Workshop Appointment — for major repairs and overhauls",
    ],
  },
  {
    num: "05",
    icon: DollarSignIcon,
    title: "Transparent Cost Estimates",
    desc: "Before any work begins, you receive a complete breakdown of expected repair costs. No surprises, no hidden fees.",
  },
]

export function Timeline() {
  return (
    <SectionWrapper>
      <ScrollReveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 border border-border bg-muted px-3 py-1 text-xs font-semibold tracking-widest text-foreground uppercase">
              <SettingsIcon className="size-3.5 text-amber" />
              Our Process
            </div>
            <h2 className="text-4xl font-extrabold md:text-5xl text-navy dark:text-white">
              Simple, Transparent, <br /><span className="text-amber">Hassle Free</span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-md">
            Getting your vehicle serviced with Prime Auto Deals is designed to
            be easy and completely transparent at every step.
          </p>
        </div>
      </ScrollReveal>

      <div className="relative mx-auto max-w-4xl py-10">
        <div className="absolute left-10 top-0 hidden h-full w-0.5 bg-border md:block md:left-1/2" />

        {steps.map((step, i) => {
          const isEven = i % 2 === 0
          return (
            <ScrollReveal key={step.num} delay={i * 120}>
              <div
                className={`relative mb-12 flex flex-col gap-8 md:flex-row md:items-start ${isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
              >
                <div
                  className={`flex-1 border border-border bg-white p-8 transition-colors hover:border-amber dark:bg-card relative ${isEven ? "md:text-right" : "md:text-left"
                    }`}
                >
                  <div
                    className={`mb-6 inline-flex size-14 items-center justify-center bg-navy text-amber ${isEven ? 'md:float-right md:ml-6' : 'md:float-left md:mr-6'}`}
                  >
                    <step.icon className="size-6" />
                  </div>
                  <div className="clear-both" />

                  <div className={`text-4xl font-black text-muted-foreground/20 absolute top-8 ${isEven ? 'left-8' : 'right-8'}`}>
                    {step.num}
                  </div>

                  <h3 className="mb-4 text-xl font-bold text-navy dark:text-white uppercase tracking-wider">{step.title}</h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {step.desc}
                  </p>
                  {step.subItems && (
                    <ul className={`mt-6 space-y-3 border-t border-border pt-6 ${isEven ? "md:ml-auto md:max-w-sm" : "max-w-sm"}`}>
                      {step.subItems.map((item) => (
                        <li key={item} className={`flex items-start gap-3 text-sm font-semibold text-foreground/80 ${isEven ? "md:flex-row-reverse md:text-right" : ""}`}>
                          <CheckCircle2Icon className="mt-0.5 size-4 shrink-0 text-amber" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="absolute left-10 hidden size-4 -translate-x-1/2 translate-y-12 border-4 border-amber bg-white md:left-1/2 md:block dark:bg-navy" />

                <div className="hidden flex-1 md:block" />
              </div>
            </ScrollReveal>
          )
        })}
      </div>

      <ScrollReveal>
        <div className="mx-auto mt-10 max-w-2xl border border-amber bg-amber/5 p-10 text-center">
          <HeadphonesIcon className="mx-auto mb-4 size-10 text-amber" />
          <h3 className="mb-3 text-xl font-bold uppercase tracking-wide">Post-Service Follow-Up</h3>
          <p className="text-base text-muted-foreground">
            After the service, you&apos;ll receive a follow-up call to ensure
            everything is running smoothly. Your satisfaction is our priority.
          </p>
        </div>
      </ScrollReveal>
    </SectionWrapper>
  )
}
