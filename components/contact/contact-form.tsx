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
      <div className="border border-border bg-white p-10 dark:bg-card md:p-14">
        <div className="mb-4 inline-flex items-center gap-2 border border-border bg-muted px-3 py-1 text-xs font-semibold tracking-widest text-foreground uppercase dark:bg-black">
          <MailIcon className="size-3.5 text-amber" />
          Send a Message
        </div>
        <h2 className="mb-8 text-4xl font-extrabold text-navy dark:text-white">Get in Touch</h2>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-bold uppercase tracking-wider text-foreground/80">
              Full Name
            </label>
            <Input
              placeholder="John Doe"
              className="h-12 rounded-none border-border focus-visible:ring-0 focus-visible:border-amber bg-white dark:bg-black"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-bold uppercase tracking-wider text-foreground/80">
              Email Address
            </label>
            <Input
              type="email"
              placeholder="john@example.com"
              className="h-12 rounded-none border-border focus-visible:ring-0 focus-visible:border-amber bg-white dark:bg-black"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-bold uppercase tracking-wider text-foreground/80">
              Phone Number
            </label>
            <Input
              type="tel"
              placeholder="(888) 000-0000"
              className="h-12 rounded-none border-border focus-visible:ring-0 focus-visible:border-amber bg-white dark:bg-black"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-bold uppercase tracking-wider text-foreground/80">
              Service Needed
            </label>
            <Select>
              <SelectTrigger className="w-full h-12! rounded-none border border-border focus:ring-0 focus:border-amber bg-white dark:bg-black">
                <SelectValue placeholder="Select service" />
              </SelectTrigger>
              <SelectContent className="rounded-none border-border">
                <SelectGroup>
                  <SelectItem value="diagnostics">Engine Diagnostics</SelectItem>
                  <SelectItem value="oil">Lube, Oil & Filters</SelectItem>
                  <SelectItem value="ac">Air Conditioning</SelectItem>
                  <SelectItem value="brakes">Brake Service</SelectItem>
                  <SelectItem value="performance">Performance Upgrades</SelectItem>
                  <SelectItem value="computer">Computer Diagnostics</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="sm:col-span-2">
            <label className="mb-2 block text-sm font-bold uppercase tracking-wider text-foreground/80">
              Message
            </label>
            <Textarea
              placeholder="Tell us about your vehicle issue..."
              className="min-h-[150px] rounded-none border-border focus-visible:ring-0 focus-visible:border-amber bg-white dark:bg-black resize-none"
            />
          </div>
        </div>

        <Button className="mt-8 h-14 w-full rounded-none bg-amber text-lg text-navy font-bold hover:bg-amber-light sm:w-auto sm:px-12">
          <SendIcon className="mr-3 size-5" />
          Send Message
        </Button>
      </div>
    </ScrollReveal>
  )
}
