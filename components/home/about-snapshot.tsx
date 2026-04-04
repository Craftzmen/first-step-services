import Link from "next/link"
import Image from "next/image"
import { ArrowRightIcon, UsersIcon, ClockIcon, WrenchIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"
import { StatCounter } from "@/components/stat-counter"

export function AboutSnapshot() {
  return (
    <SectionWrapper background="muted">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <ScrollReveal direction="left">
          <div className="relative h-[600px] w-full border border-border">
            <Image
              src="https://images.unsplash.com/photo-1618783129985-dd97dbe4ad99?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Mechanic Team"
              fill
              className="object-cover"
            />
            <div className="absolute -bottom-6 -right-6 h-48 w-48 bg-amber -z-10" />
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right">
          <div className="pl-0 lg:pl-10">
            <div className="mb-4 inline-flex items-center gap-2 border border-border bg-white px-3 py-1 text-xs font-semibold tracking-widest text-foreground uppercase dark:bg-black">
              <UsersIcon className="size-3.5 text-amber" />
              About Us
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl text-navy dark:text-white mb-6">
              Engineered for <span className="text-amber">Perfection.</span>
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-8">
              At Prime Auto Deals, we approach every vehicle with engineering precision. Our state-of-the-art facility is equipped to handle complex diagnostics and complete rebuilds—ensuring your investment is protected and performing at its peak.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              {[
                { value: 15, suffix: "+", label: "Years Expr", icon: ClockIcon },
                { value: 50, suffix: "+", label: "Master Techs", icon: WrenchIcon },
              ].map((stat) => (
                <div key={stat.label} className="border-l-4 border-amber pl-4">
                  <div className="text-3xl font-extrabold text-navy dark:text-white">
                    <StatCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="mt-1 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <Button
              asChild
              size="lg"
              className="rounded-none bg-navy text-white px-8 py-6 font-bold hover:bg-navy-light dark:bg-white dark:text-navy"
            >
              <Link href="/about">
                Discover Our Story
                <ArrowRightIcon className="ml-2 size-5" />
              </Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  )
}
