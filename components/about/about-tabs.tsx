import { HistoryIcon, TargetIcon, EyeIcon, CheckCircle2Icon } from "lucide-react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

export function AboutTabs() {
  return (
    <SectionWrapper background="muted" padding="default">
      <ScrollReveal>
        <Tabs defaultValue="history" className="mx-auto max-w-5xl">
          <TabsList className="mx-auto mb-10 flex w-full flex-wrap justify-center gap-2 bg-transparent">
            <TabsTrigger value="history" className="gap-2 rounded-none border border-border data-[state=active]:border-amber data-[state=active]:text-amber px-6 py-3 font-semibold uppercase tracking-wider">
              <HistoryIcon className="size-4" />
              History
            </TabsTrigger>
            <TabsTrigger value="mission" className="gap-2 rounded-none border border-border data-[state=active]:border-amber data-[state=active]:text-amber px-6 py-3 font-semibold uppercase tracking-wider">
              <TargetIcon className="size-4" />
              Our Mission
            </TabsTrigger>
            <TabsTrigger value="vision" className="gap-2 rounded-none border border-border data-[state=active]:border-amber data-[state=active]:text-amber px-6 py-3 font-semibold uppercase tracking-wider">
              <EyeIcon className="size-4" />
              Our Vision
            </TabsTrigger>
          </TabsList>

          <TabsContent value="history">
            <div className="border border-border bg-white p-10 dark:bg-card md:p-14">
              <h3 className="mb-6 text-3xl font-bold text-navy dark:text-white">
                Founded in 2009, Brooklyn, NY
              </h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Prime Auto Deals Limited has been serving customers with quality
                vehicles and reliable automotive solutions for over a decade.
                Starting as a small auto dealership, the company quickly grew by
                focusing on trust, transparency, and exceptional customer
                service. Over the years, Prime Auto Deals Limited has expanded
                its offerings, building a strong reputation for delivering
                dependable cars and a seamless buying experience.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="mission">
            <div className="border border-border bg-white p-10 dark:bg-card md:p-14">
              <h3 className="mb-6 text-3xl font-bold text-navy dark:text-white">
                Our Mission for Over 15 Years
              </h3>
              <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                Our mission is to provide the highest quality automotive
                solutions while building lasting relationships with every
                customer. We believe that every vehicle deserves expert care,
                and every customer deserves transparent, honest service.
              </p>
              <ul className="grid gap-4 sm:grid-cols-2">
                {[
                  "Share best practices and cutting-edge product knowledge",
                  "Collaborate with the latest technology innovations",
                  "Lead in technology, information security, and business partnerships",
                  "Deliver uncompromising quality and mechanical precision"
                ].map((item) => (
                  <li key={item} className="flex gap-4 border border-border p-4">
                    <CheckCircle2Icon className="mt-0.5 size-5 shrink-0 text-amber" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="vision">
            <div className="border border-border bg-white p-10 dark:bg-card md:p-14">
              <h3 className="mb-6 text-3xl font-bold text-navy dark:text-white">
                Leading the Future of Auto Care
              </h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Our vision is to be recognized as a leading automotive solutions
                provider, known for quality vehicles, exceptional service, and
                customer trust. We aspire to continuously innovate and expand,
                setting new standards in the car buying experience while
                building long-lasting relationships with our clients.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </ScrollReveal>
    </SectionWrapper>
  )
}
