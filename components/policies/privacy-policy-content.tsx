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
          <p className="mb-16 text-sm font-bold uppercase tracking-widest text-amber">
            Last updated: May 4, 2026
          </p>

          <section className="mb-20">
            <h2 className="mb-8 text-4xl font-black tracking-tight text-navy dark:text-white">Introduction</h2>
            <p className="text-xl leading-relaxed text-muted-foreground font-medium">
              First Step Services (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates{" "}
              <Link
                href="https://firststepservices.tech/"
                className="font-black text-amber hover:underline transition-all"
              >
                https://firststepservices.tech/
              </Link>{" "}
              (the &ldquo;Website&rdquo;). This Privacy Policy describes how we collect, use, disclose, and protect
              the personal information of visitors and customers. Your privacy is important to us, and we are committed
              to protecting your personal information.
            </p>
          </section>

          <div className="space-y-24">
            <section>
              <h2 className="mb-10 text-4xl font-black tracking-tight text-navy dark:text-white">
                Information We Collect
              </h2>
              <p className="mb-10 text-lg leading-relaxed text-muted-foreground font-medium">
                We collect personal and non-personal information when you use our Website:
              </p>
              <div className="grid gap-12 md:grid-cols-2">
                <div>
                  <h3 className="mb-6 text-[10px] font-black uppercase tracking-[0.3em] text-amber">Personal Information</h3>
                  <ul className="space-y-4">
                    {[
                      "Name",
                      "Email address",
                      "Phone number",
                      "Mailing address",
                      "Billing and shipping information",
                      "Payment details (processed securely by third-party payment providers)",
                    ].map((item) => (
                      <li key={item} className="flex gap-4 items-center text-lg font-bold text-navy/70 dark:text-white/70">
                        <div className="size-2 shrink-0 rounded-full bg-amber" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="mb-6 text-[10px] font-black uppercase tracking-[0.3em] text-amber">
                    Automatically Collected Information
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "IP address",
                      "Browser type and version",
                      "Pages viewed, dates and times of visits",
                      "Cookies and tracking technologies used to improve site experience and analytics",
                    ].map((item) => (
                      <li key={item} className="flex gap-4 items-center text-lg font-bold text-navy/70 dark:text-white/70">
                        <div className="size-2 shrink-0 rounded-full bg-amber" />
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
              <p className="mb-8 text-lg font-medium text-muted-foreground">We use the information we collect to:</p>
              <ul className="grid gap-6 md:grid-cols-2">
                {[
                  "Provide, operate, and improve our services and Website",
                  "Process orders and payments",
                  "Communicate with you about your purchase, account, and updates",
                  "Personalize your experience and tailor content",
                  "Detect and prevent fraud and comply with legal obligations",
                ].map((item) => (
                  <li key={item} className="flex gap-6 items-center rounded-3xl bg-navy/5 p-8 dark:bg-white/5">
                    <div className="size-3 shrink-0 rounded-full bg-amber" />
                    <span className="text-xl font-black text-navy dark:text-white">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="mb-8 text-4xl font-black tracking-tight text-navy dark:text-white">Cookies and Tracking</h2>
              <p className="text-lg leading-relaxed text-muted-foreground font-medium">
                We use cookies and similar tracking technologies to monitor website usage, remember preferences, and
                enhance user experience. You can disable cookies in your browser settings, but some features of the
                Website may not work properly.
              </p>
            </section>

            <section>
              <h2 className="mb-8 text-4xl font-black tracking-tight text-navy dark:text-white">
                Sharing Your Information
              </h2>
              <p className="mb-8 text-lg font-medium text-muted-foreground">We may share your data with:</p>
              <ul className="space-y-4">
                {[
                  "Service providers (payment processors, analytics services)",
                  "Legal authorities when required by law",
                  "Businesses involved in order fulfillment (e.g., shipping partners)",
                ].map((item) => (
                  <li key={item} className="flex gap-4 items-center text-lg font-bold text-navy/70 dark:text-white/70">
                    <div className="size-2 shrink-0 rounded-full bg-amber" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-lg leading-relaxed text-muted-foreground font-medium">
                We do not sell personal information to third parties.
              </p>
            </section>

            <section>
              <h2 className="mb-8 text-4xl font-black tracking-tight text-navy dark:text-white">Third-Party Links</h2>
              <p className="text-lg leading-relaxed text-muted-foreground font-medium">
                Our Website may contain links to third-party websites with separate privacy practices. We are not
                responsible for their content or policies.
              </p>
            </section>

            <section>
              <h2 className="mb-8 text-4xl font-black tracking-tight text-navy dark:text-white">Data Retention</h2>
              <p className="text-lg leading-relaxed text-muted-foreground font-medium">
                We retain your information only as long as necessary to fulfill the purposes outlined in this policy or
                as required by law.
              </p>
            </section>

            <section>
              <h2 className="mb-8 text-4xl font-black tracking-tight text-navy dark:text-white">Your Rights</h2>
              <p className="text-lg leading-relaxed text-muted-foreground font-medium">
                You have the right to access, correct, or request deletion of your personal data. To exercise these
                rights, contact us as listed below.
              </p>
            </section>

            <section>
              <h2 className="mb-8 text-4xl font-black tracking-tight text-navy dark:text-white">
                Changes to This Policy
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground font-medium">
                We may update this Privacy Policy from time to time. The &ldquo;Last Updated&rdquo; date at the top
                reflects the most recent version.
              </p>
            </section>

            <section>
              <h2 className="mb-8 text-4xl font-black tracking-tight text-navy dark:text-white">
                Contact Information
              </h2>
              <p className="mb-8 text-lg text-muted-foreground font-medium">
                If you have questions or concerns about this policy, contact us at:
              </p>
              <div className="rounded-[3rem] bg-navy p-12 text-white">
                <div className="grid gap-12 md:grid-cols-2">
                  <div>
                    <h3 className="mb-4 text-[10px] font-black uppercase tracking-[0.3em] text-amber">Direct Inquiry</h3>
                    <Link
                      href="mailto:query@firststepservices.tech"
                      className="text-2xl font-black hover:text-amber transition-colors break-all"
                    >
                      query@firststepservices.tech
                    </Link>
                  </div>
                  <div>
                    <h3 className="mb-4 text-[10px] font-black uppercase tracking-[0.3em] text-amber">Headquarters</h3>
                    <p className="text-xl font-bold text-white/70">
                      4525 South 23rd St Apt 5, Milwaukee, WI 53221, United States of America
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
