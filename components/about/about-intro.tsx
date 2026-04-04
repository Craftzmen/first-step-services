import Image from "next/image"
import { UsersIcon } from "lucide-react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"

export function AboutIntro() {
  return (
    <SectionWrapper>
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <ScrollReveal direction="left">
          <div className="relative h-[500px] w-full border border-border">
            <Image 
              src="https://images.unsplash.com/photo-1504222490345-c075b6008014?auto=format&fit=crop&q=80&w=1200"
              alt="Automotive Professional"
              fill
              className="object-cover grayscale-[0.2]"
            />
            <div className="absolute -top-6 -left-6 h-32 w-32 bg-amber -z-10" />
          </div>
        </ScrollReveal>
        
        <ScrollReveal direction="right">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 border border-border bg-muted px-3 py-1 text-xs font-semibold tracking-widest text-foreground uppercase">
              <UsersIcon className="size-3.5 text-amber" />
              Who We Are
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl text-navy dark:text-white mb-6">
              Your Trusted <span className="text-amber">Automotive Partner</span>
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              At Prime Auto Deals Limited, we provide top-quality vehicles and
              dependable automotive services. Our mission is to offer a seamless
              buying experience while prioritizing customer satisfaction.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              With our expert guidance, finding the right car or getting the precise repair you need has never been easier. We pride ourselves on engineering perfection into every job.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  )
}
