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
      <div className="rounded-3xl border border-navy/10 bg-card p-7 shadow-sm dark:border-white/10 md:p-10">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-amber/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-amber">
              Project Inquiry
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-navy dark:text-white md:text-3xl">
              Tell us about <span className="text-amber">your project.</span>
            </h2>
          </div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            * Required fields
          </p>
        </div>

        <fieldset className="space-y-5">
          <legend className="mb-4 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.25em] text-amber">
            <span className="flex size-5 items-center justify-center rounded-full bg-amber text-[10px] font-bold text-white">1</span>
            About you
            <span aria-hidden className="h-px flex-1 bg-navy/10 dark:bg-white/10" />
          </legend>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <label className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">Your Name *</label>
              <Input
                placeholder="Full name"
                className="h-11 rounded-xl border-navy/10 bg-background text-sm focus-visible:border-amber focus-visible:ring-0 dark:border-white/10"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">Email *</label>
              <Input
                type="email"
                placeholder="you@brand.com"
                className="h-11 rounded-xl border-navy/10 bg-background text-sm focus-visible:border-amber focus-visible:ring-0 dark:border-white/10"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">Phone (optional)</label>
              <Input
                type="tel"
                placeholder="(888) 000-0000"
                className="h-11 rounded-xl border-navy/10 bg-background text-sm focus-visible:border-amber focus-visible:ring-0 dark:border-white/10"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">Company (optional)</label>
              <Input
                placeholder="Brand or company name"
                className="h-11 rounded-xl border-navy/10 bg-background text-sm focus-visible:border-amber focus-visible:ring-0 dark:border-white/10"
              />
            </div>
          </div>
        </fieldset>

        <fieldset className="mt-10 space-y-5">
          <legend className="mb-4 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.25em] text-amber">
            <span className="flex size-5 items-center justify-center rounded-full bg-amber text-[10px] font-bold text-white">2</span>
            About your project
            <span aria-hidden className="h-px flex-1 bg-navy/10 dark:bg-white/10" />
          </legend>

          <div className="space-y-2">
            <label className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">Service Interest *</label>
            <Select>
              <SelectTrigger className="h-11 rounded-xl border-navy/10 bg-background text-sm focus:border-amber focus:ring-0 dark:border-white/10">
                <SelectValue placeholder="Select a service track" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="store-build">New Store Build</SelectItem>
                  <SelectItem value="migration">Platform Migration</SelectItem>
                  <SelectItem value="cro">Conversion Optimization</SelectItem>
                  <SelectItem value="integrations">Integrations &amp; APIs</SelectItem>
                  <SelectItem value="headless">Headless Commerce</SelectItem>
                  <SelectItem value="support">Ongoing Support</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">Project Details *</label>
            <Textarea
              placeholder="Tell us about your store, your stack, and what you want to build..."
              className="min-h-[160px] resize-none rounded-xl border-navy/10 bg-background p-4 text-sm focus-visible:border-amber focus-visible:ring-0 dark:border-white/10"
            />
          </div>
        </fieldset>

        <Button className="mt-8 h-12 w-full rounded-xl bg-navy text-sm font-semibold uppercase tracking-wide text-white hover:bg-amber dark:bg-white dark:text-navy dark:hover:bg-amber dark:hover:text-white">
          <SendIcon className="mr-2 size-5" />
          Send Message
        </Button>

        <p className="mt-4 text-center text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
          We&apos;ll reply within 1 business day.
        </p>
      </div>
    </ScrollReveal>
  )
}
