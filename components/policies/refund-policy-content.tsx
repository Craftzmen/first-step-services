import { Separator } from "@/components/ui/separator"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import Link from "next/link"

export function RefundPolicyContent() {
  return (
    <SectionWrapper className="relative overflow-hidden">
      {/* Decorative Watermark */}
      <div className="absolute -left-20 top-40 opacity-[0.02] dark:opacity-[0.04] pointer-events-none select-none">
        <span className="text-[20rem] font-black tracking-tighter leading-none uppercase">Guarantee</span>
      </div>

      <article className="mx-auto max-w-5xl">
        <div className="relative z-10 rounded-[4rem] bg-white p-12 dark:bg-navy-light md:p-24 shadow-2xl">
          <section className="mb-20">
            <h2 className="mb-8 text-4xl font-black tracking-tight text-navy dark:text-white">Our Commitment</h2>
            <p className="text-xl leading-relaxed text-muted-foreground font-medium">
              At First Step Services, we stand behind our engineering. If our solutions don't meet the gold standard of automotive excellence, we ensure a transparent path to resolution.
            </p>
          </section>

          <div className="space-y-24">
            <section>
              <h2 className="mb-10 text-4xl font-black tracking-tight text-navy dark:text-white">
                Refund Architecture
              </h2>
              <div className="grid gap-12 md:grid-cols-2">
                {[
                  { title: "Service Satisfaction", desc: "If you are not satisfied with our technical labor, we will re-evaluate and rectify at no additional cost." },
                  { title: "Part Replacement", desc: "Refunds on parts are subject to manufacturer warranty protocols and must be within the 30-day window." },
                  { title: "Appointment Cancellation", desc: "Cancel 24 hours prior to your slot for a full refund of any deposit paid." },
                  { title: "Expert Consultations", desc: "Online sessions are final unless technical failure occurs on our end." },
                ].map((item, i) => (
                  <div key={i} className="group rounded-[2.5rem] bg-navy/5 p-10 dark:bg-white/5 transition-all duration-500 hover:bg-amber hover:shadow-2xl">
                    <h3 className="mb-4 text-2xl font-black tracking-tight text-navy dark:text-white group-hover:text-navy">{item.title}</h3>
                    <p className="text-lg font-medium text-muted-foreground group-hover:text-navy/70">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="mb-8 text-4xl font-black tracking-tight text-navy dark:text-white">
                Contact Information
              </h2>
              <div className="rounded-[3rem] bg-navy p-12 text-white">
                <div className="grid gap-12 md:grid-cols-2">
                  <div>
                    <h3 className="mb-4 text-[10px] font-black uppercase tracking-[0.3em] text-amber">Direct Inquiry</h3>
                    <Link
                      href="mailto:info@firststepservices.tech"
                      className="text-2xl font-black hover:text-amber transition-colors"
                    >
                      info@firststepservices.tech
                    </Link>
                  </div>
                  <div>
                    <h3 className="mb-4 text-[10px] font-black uppercase tracking-[0.3em] text-amber">Headquarters</h3>
                    <p className="text-xl font-bold text-white/70">
                      2733 Stanley St, Stevens Point, WI 54481, United States of America
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </article>
    </SectionWrapper>
  )
}
