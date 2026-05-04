import { Separator } from "@/components/ui/separator"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import Link from "next/link"

export function PrivacyPolicyContent() {
  return (
    <SectionWrapper className="relative overflow-hidden">
      {/* Decorative Watermark */}
      <div className="absolute -left-20 top-40 opacity-[0.02] dark:opacity-[0.04] pointer-events-none select-none">
        <span className="text-[20rem] font-black tracking-tighter leading-none uppercase">Legal</span>
      </div>

      <article className="mx-auto max-w-5xl">
        <div className="relative z-10 rounded-[4rem] bg-white p-12 dark:bg-navy-light md:p-24 shadow-2xl">
          <section className="mb-20">
            <h2 className="mb-8 text-4xl font-black tracking-tight text-navy dark:text-white">Introduction</h2>
            <p className="text-xl leading-relaxed text-muted-foreground font-medium">
              First Step Services (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
              &ldquo;our&rdquo;) operates{" "}
              <Link
                href="https://firststepservices.tech/"
                className="font-black text-amber hover:underline transition-all"
              >
                https://firststepservices.tech/
              </Link>{" "}
              (the &ldquo;Website&rdquo;). This Privacy Policy describes how
              we collect, use, disclose, and protect the personal information
              of visitors and customers. Your privacy is absolute, and
              we are committed to protecting your digital footprint.
            </p>
          </section>

          <div className="space-y-24">
            <section>
              <h2 className="mb-10 text-4xl font-black tracking-tight text-navy dark:text-white">
                Information We Collect
              </h2>
              <div className="grid gap-12 md:grid-cols-2">
                <div>
                  <h3 className="mb-6 text-[10px] font-black uppercase tracking-[0.3em] text-amber">Personal Data</h3>
                  <ul className="space-y-4">
                    {[
                      "Identity Credentials",
                      "Digital Communication Paths",
                      "Operational Contact Metrics",
                      "Secured Transaction Logs",
                    ].map((item) => (
                      <li key={item} className="flex gap-4 items-center text-lg font-bold text-navy/70 dark:text-white/70">
                        <div className="size-2 rounded-full bg-amber" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="mb-6 text-[10px] font-black uppercase tracking-[0.3em] text-amber">Automated Metadata</h3>
                  <ul className="space-y-4">
                    {[
                      "IP Architecture Details",
                      "Browser Environment Metrics",
                      "Behavioral Navigation Logs",
                      "Session Persistence Tools",
                    ].map((item) => (
                      <li key={item} className="flex gap-4 items-center text-lg font-bold text-navy/70 dark:text-white/70">
                        <div className="size-2 rounded-full bg-amber" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-8 text-4xl font-black tracking-tight text-navy dark:text-white">
                How We Use Your Information
              </h2>
              <ul className="grid gap-6 md:grid-cols-2">
                {[
                  "Service Optimization",
                  "Secure Transactional Workflows",
                  "Strategic Communication",
                  "Fraud Mitigation Protocols",
                ].map((item) => (
                  <li key={item} className="flex gap-6 items-center rounded-3xl bg-navy/5 p-8 dark:bg-white/5">
                    <div className="size-3 rounded-full bg-amber" />
                    <span className="text-xl font-black text-navy dark:text-white">{item}</span>
                  </li>
                ))}
              </ul>
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
