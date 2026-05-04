import { MailIcon, SendIcon } from "lucide-react"
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
      <div className="relative overflow-hidden rounded-[3.5rem] bg-navy p-12 md:p-20 text-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
        {/* Decorative pattern */}
        <div className="absolute -right-20 -top-20 size-96 rounded-full bg-amber/5 blur-[100px]" />
        
        <div className="relative z-10">
          <div className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-6 py-2 text-[10px] font-black uppercase tracking-[0.3em] text-amber">
              Communications Protocol
            </div>
            <h2 className="text-4xl font-black tracking-tight md:text-5xl text-white">
              Initialize <br /><span className="text-amber">Uplink.</span>
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">
                Technical Point of Contact
              </label>
              <Input
                placeholder="Full Name"
                className="h-16 rounded-2xl border-white/10 bg-white/5 text-lg font-bold text-white focus-visible:ring-0 focus-visible:border-amber transition-all"
              />
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">
                Communication Uplink
              </label>
              <Input
                type="email"
                placeholder="Email Address"
                className="h-16 rounded-2xl border-white/10 bg-white/5 text-lg font-bold text-white focus-visible:ring-0 focus-visible:border-amber transition-all"
              />
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">
                Direct Response Line
              </label>
              <Input
                type="tel"
                placeholder="(888) 000-0000"
                className="h-16 rounded-2xl border-white/10 bg-white/5 text-lg font-bold text-white focus-visible:ring-0 focus-visible:border-amber transition-all"
              />
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">
                Intervention Protocol
              </label>
              <Select>
                <SelectTrigger className="h-16 rounded-2xl border-white/10 bg-white/5 text-lg font-bold text-white focus:ring-0 focus:border-amber">
                  <SelectValue placeholder="Select Service" />
                </SelectTrigger>
                <SelectContent className="rounded-2xl border-white/10 bg-navy text-white">
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
            <div className="sm:col-span-2 space-y-3">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">
                Briefing
              </label>
              <Textarea
                placeholder="Details of your vehicle requirements..."
                className="min-h-[180px] rounded-3xl border-white/10 bg-white/5 text-lg font-bold text-white focus-visible:ring-0 focus-visible:border-amber transition-all resize-none p-6"
              />
            </div>
          </div>

          <Button className="mt-12 h-20 w-full rounded-[2rem] bg-amber text-xl font-black uppercase tracking-tighter text-navy hover:bg-white hover:text-navy transition-all duration-500 shadow-2xl shadow-amber/20 group">
            <SendIcon className="mr-3 size-6 transition-transform group-hover:translate-x-2 group-hover:-translate-y-2" />
            Send Message
          </Button>
        </div>
      </div>
    </ScrollReveal>
  )
}
