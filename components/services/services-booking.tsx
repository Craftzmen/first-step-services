import { PhoneIcon, ArrowRightIcon } from "lucide-react"
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
      <div className="grid items-center gap-24 lg:grid-cols-2">
        <ScrollReveal direction="left">
          <div className="space-y-10">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/50 dark:bg-white/5 border border-amber/20 px-6 py-2 text-[10px] font-black uppercase tracking-[0.3em] text-amber">
                Next Steps
              </div>
              <h2 className="text-5xl font-black tracking-tighter md:text-7xl text-navy dark:text-white leading-[0.9]">
                Schedule Your <br /><span className="text-amber">Elite Session.</span>
              </h2>
            </div>
            
            <p className="text-xl text-muted-foreground font-medium leading-relaxed max-w-xl">
              Precision requires planning. Select your vehicle profile and service requirements to initiate our engineering workflow.
            </p>

            <ul className="space-y-6">
              {[
                "Structural Telemetry Assessment",
                "Binary Fault Extraction",
                "Master Engineering Deployment",
                "Absolute Structural Guarantee",
              ].map((item, i) => (
                <li key={i} className="group flex items-center gap-6 rounded-[2rem] border border-white bg-white/40 p-6 shadow-xl transition-all duration-500 hover:bg-white dark:bg-navy-light dark:border-white/5 dark:hover:bg-navy transition-all">
                  <div className="flex size-10 items-center justify-center rounded-full bg-amber text-navy font-black text-xs transition-transform duration-500 max-md:transition-none md:group-hover:rotate-12">
                    0{i + 1}
                  </div>
                  <span className="text-sm font-black uppercase tracking-widest text-navy/70 dark:text-white/70 group-hover:text-navy dark:group-hover:text-white">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right">
          <div className="relative rounded-[3.5rem] bg-navy p-12 md:p-20 text-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
            <h3 className="mb-10 text-4xl font-black tracking-tight text-white">
              Initialize <br /><span className="text-amber">Workflow</span>
            </h3>
            <div className="space-y-8">
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">
                  Vehicle Brand
                </label>
                <Select>
                  <SelectTrigger className="h-16 rounded-2xl border-white/10 bg-white/5 text-lg font-bold text-white focus:ring-0 focus:border-amber">
                    <SelectValue placeholder="Select Brand" />
                  </SelectTrigger>
                  <SelectContent className="rounded-2xl border-white/10 bg-navy text-white">
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
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">
                  Required Service
                </label>
                <Select>
                  <SelectTrigger className="h-16 rounded-2xl border-white/10 bg-white/5 text-lg font-bold text-white focus:ring-0 focus:border-amber">
                    <SelectValue placeholder="Select Service" />
                  </SelectTrigger>
                  <SelectContent className="rounded-2xl border-white/10 bg-navy text-white">
                    <SelectGroup>
                      <SelectItem value="performance">Performance Tuning</SelectItem>
                      <SelectItem value="diagnostics">Expert Diagnostics</SelectItem>
                      <SelectItem value="brakes">Brake Systems</SelectItem>
                      <SelectItem value="maintenance">Elite Maintenance</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <Button className="h-20 w-full rounded-[2rem] bg-amber text-xl font-black uppercase tracking-tighter text-navy hover:bg-white hover:text-navy transition-all duration-500 shadow-2xl shadow-amber/20">
                Request Appointment
                <ArrowRightIcon className="ml-3 size-6" />
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  )
}
