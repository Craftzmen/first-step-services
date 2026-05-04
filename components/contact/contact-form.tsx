import { SendIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ScrollReveal } from "@/components/scroll-reveal"

export function ContactForm() {
  return (
    <ScrollReveal direction="left">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-navy p-8 text-white shadow-lg md:p-10">
        <div className="relative z-10">
          <div className="mb-8">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-amber">
              Communications Protocol
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
              Initialize <span className="text-amber">Uplink.</span>
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <label className="text-[10px] font-semibold uppercase tracking-wide text-white/45">Technical Point of Contact</label>
              <Input
                placeholder="Full Name"
                className="h-11 rounded-xl border-white/15 bg-white/10 text-sm text-white focus-visible:border-amber focus-visible:ring-0"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-semibold uppercase tracking-wide text-white/45">Communication Uplink</label>
              <Input
                type="email"
                placeholder="Email Address"
                className="h-11 rounded-xl border-white/15 bg-white/10 text-sm text-white focus-visible:border-amber focus-visible:ring-0"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-semibold uppercase tracking-wide text-white/45">Direct Response Line</label>
              <Input
                type="tel"
                placeholder="(888) 000-0000"
                className="h-11 rounded-xl border-white/15 bg-white/10 text-sm text-white focus-visible:border-amber focus-visible:ring-0"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-semibold uppercase tracking-wide text-white/45">Intervention Protocol</label>
              <Select>
                <SelectTrigger className="h-11 rounded-xl border-white/15 bg-white/10 text-sm text-white focus:border-amber focus:ring-0">
                  <SelectValue placeholder="Select Service" />
                </SelectTrigger>
                <SelectContent className="border-white/10 bg-navy text-white">
                  <SelectGroup>
                    <SelectItem value="diagnostics">Expert Diagnostics</SelectItem>
                    <SelectItem value="oil">Lube & Filters</SelectItem>
                    <SelectItem value="ac">Climate Control</SelectItem>
                    <SelectItem value="brakes">Brake Systems</SelectItem>
                    <SelectItem value="performance">Performance Tuning</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2 sm:col-span-2">
              <label className="text-[10px] font-semibold uppercase tracking-wide text-white/45">Briefing</label>
              <Textarea
                placeholder="Details of your vehicle requirements..."
                className="min-h-[140px] resize-none rounded-xl border-white/15 bg-white/10 p-4 text-sm text-white focus-visible:border-amber focus-visible:ring-0"
              />
            </div>
          </div>

          <Button className="mt-8 h-12 w-full rounded-xl bg-amber text-sm font-semibold uppercase tracking-wide text-navy hover:bg-white hover:text-navy">
            <SendIcon className="mr-2 size-5" />
            Send Message
          </Button>
        </div>
      </div>
    </ScrollReveal>
  )
}
