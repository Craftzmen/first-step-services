import Image from "next/image"
import { DollarSignIcon } from "lucide-react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"

export function FinanceIntro() {
  return (
    <SectionWrapper>
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <ScrollReveal direction="left">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 border border-border bg-muted px-3 py-1 text-xs font-semibold tracking-widest text-foreground uppercase">
              <DollarSignIcon className="size-3.5 text-amber" />
              Financing Solutions
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl text-navy dark:text-white mb-6">
              Drive Now, <span className="text-amber">Pay Later</span>
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              Whether you're buying new, used, or looking to refinance, we offer
              flexible financing options to get you on the road with confidence. Our partnerships with top lenders ensure competitive rates.
            </p>
          </div>
        </ScrollReveal>
        
        <ScrollReveal direction="right">
          <div className="relative h-[400px] w-full border border-border">
            <Image 
              src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1200"
              alt="Finance Consultation"
              fill
              className="object-cover grayscale-[0.2]"
            />
            <div className="absolute -bottom-6 -right-6 h-32 w-32 bg-navy -z-10 dark:bg-amber" />
          </div>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  )
}
