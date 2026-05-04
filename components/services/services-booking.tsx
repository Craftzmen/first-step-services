import { ArrowRightIcon } from "lucide-react"
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

export function ServicesBooking() {
  return (
    <SectionWrapper background="muted" className="relative overflow-hidden">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <ScrollReveal direction="left">
          <div className="space-y-6">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-amber/25 bg-white/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-amber dark:bg-white/10">
                Next Steps
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-navy dark:text-white md:text-3xl">
                Schedule Your <span className="text-amber">Elite Session.</span>
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Precision requires planning. Select your vehicle profile and service requirements to initiate our engineering workflow.
            </p>

            <ul className="space-y-3">
              {[
                "Structural Telemetry Assessment",
                "Binary Fault Extraction",
                "Master Engineering Deployment",
                "Absolute Structural Guarantee",
              ].map((item, i) => (
                <li
                  key={item}
                  className="flex items-center gap-4 rounded-2xl border border-navy/10 bg-white p-4 dark:border-white/10 dark:bg-navy-light"
                >
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-amber text-xs font-bold text-navy">0{i + 1}</div>
                  <span className="text-xs font-semibold uppercase tracking-wide text-navy/75 dark:text-white/75">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right">
          <div className="rounded-2xl border border-white/10 bg-navy p-8 text-white shadow-lg md:p-10">
            <h3 className="mb-8 text-lg font-bold tracking-tight md:text-xl">
              Initialize <span className="text-amber">Workflow</span>
            </h3>
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-semibold uppercase tracking-wide text-white/45">Vehicle Brand</label>
                <Select>
                  <SelectTrigger className="h-12 rounded-xl border-white/15 bg-white/10 text-sm text-white focus:border-amber focus:ring-0">
                    <SelectValue placeholder="Select Brand" />
                  </SelectTrigger>
                  <SelectContent className="border-white/10 bg-navy text-white">
                    <SelectGroup>
                      <SelectItem value="bmw">BMW</SelectItem>
                      <SelectItem value="mercedes">Mercedes-Benz</SelectItem>
                      <SelectItem value="audi">Audi</SelectItem>
                      <SelectItem value="porsche">Porsche</SelectItem>
                      <SelectItem value="other">Other Premium</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-semibold uppercase tracking-wide text-white/45">Required Service</label>
                <Select>
                  <SelectTrigger className="h-12 rounded-xl border-white/15 bg-white/10 text-sm text-white focus:border-amber focus:ring-0">
                    <SelectValue placeholder="Select Service" />
                  </SelectTrigger>
                  <SelectContent className="border-white/10 bg-navy text-white">
                    <SelectGroup>
                      <SelectItem value="performance">Performance Tuning</SelectItem>
                      <SelectItem value="diagnostics">Expert Diagnostics</SelectItem>
                      <SelectItem value="brakes">Brake Systems</SelectItem>
                      <SelectItem value="maintenance">Elite Maintenance</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <Button className="h-12 w-full rounded-xl bg-amber text-sm font-semibold uppercase tracking-wide text-navy hover:bg-white hover:text-navy">
                Request Appointment
                <ArrowRightIcon className="ml-2 size-5" />
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  )
}
