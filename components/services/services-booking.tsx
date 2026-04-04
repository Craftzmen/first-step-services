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
    <SectionWrapper background="muted">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <ScrollReveal direction="left">
          <div className="mb-4 inline-flex items-center gap-2 border border-border bg-white px-3 py-1 text-xs font-semibold tracking-widest text-foreground uppercase dark:bg-black">
            <PhoneIcon className="size-3.5 text-amber" />
            Book Now
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl text-navy dark:text-white mb-6">
            Schedule Your <span className="text-amber">Service</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Select your vehicle brand and the service you need, and we&apos;ll
            take care of the rest. Quick, easy, no-hassle booking.
          </p>
          <ul className="space-y-4">
            {[
              "Free initial inspection",
              "Transparent cost estimates before work begins",
              "Certified mechanics with years of experience",
              "Satisfaction guaranteed on every service",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-4 border border-border p-3 bg-white dark:bg-card">
                <div className="size-2 shrink-0 bg-amber" />
                <span className="font-semibold text-foreground/90">{item}</span>
              </li>
            ))}
          </ul>
        </ScrollReveal>

        <ScrollReveal direction="right">
          <div className="border border-border bg-white p-10 dark:bg-card">
            <h3 className="mb-8 text-2xl font-bold uppercase tracking-wide text-navy dark:text-white border-b-2 border-amber inline-block pb-2">
              Booking Form
            </h3>
            <div className="space-y-6">
              <div>
                <label className="mb-2 block text-sm font-bold uppercase tracking-wider text-foreground/80">
                  Vehicle Brand
                </label>
                <Select>
                  <SelectTrigger className="h-12 rounded-none border border-border focus:ring-0 focus:border-amber bg-white dark:bg-black">
                    <SelectValue placeholder="Select brand" />
                  </SelectTrigger>
                  <SelectContent className="rounded-none border-border">
                    <SelectGroup>
                      <SelectItem value="bmw">BMW</SelectItem>
                      <SelectItem value="toyota">Toyota</SelectItem>
                      <SelectItem value="honda">Honda</SelectItem>
                      <SelectItem value="ford">Ford</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-bold uppercase tracking-wider text-foreground/80">
                  Service Type
                </label>
                <Select>
                  <SelectTrigger className="h-12 rounded-none border border-border focus:ring-0 focus:border-amber bg-white dark:bg-black">
                    <SelectValue placeholder="Select service" />
                  </SelectTrigger>
                  <SelectContent className="rounded-none border-border">
                    <SelectGroup>
                      <SelectItem value="diagnostics">Engine Diagnostics</SelectItem>
                      <SelectItem value="oil">Lube, Oil & Filters</SelectItem>
                      <SelectItem value="ac">Air Conditioning Evac</SelectItem>
                      <SelectItem value="brakes">Brake Service</SelectItem>
                      <SelectItem value="performance">Performance Upgrades</SelectItem>
                      <SelectItem value="computer">Computer Diagnostics</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <Button className="mt-4 w-full rounded-none bg-amber px-8 py-6 text-base font-bold text-navy hover:bg-amber-light">
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
