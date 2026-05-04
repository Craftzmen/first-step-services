import { SectionWrapper } from "@/components/layout/section-wrapper"
import Link from "next/link"

const personalInfo = [
  "Name",
  "Email address",
  "Phone number",
  "Mailing address",
  "Billing and shipping information",
  "Payment details (processed securely by third-party payment providers)",
]

const autoCollected = [
  "IP address",
  "Browser type and version",
  "Pages viewed, dates and times of visits",
  "Cookies and tracking technologies used to improve site experience and analytics",
]

const howWeUse = [
  "Provide, operate, and improve our services and Website",
  "Process orders and payments",
  "Communicate with you about your purchase, account, and updates",
  "Personalize your experience and tailor content",
  "Detect and prevent fraud and comply with legal obligations",
]

const sharing = [
  "Service providers (payment processors, analytics services)",
  "Legal authorities when required by law",
  "Businesses involved in order fulfillment (e.g., shipping partners)",
]

export function PrivacyPolicyContent() {
  return (
    <SectionWrapper padding="sm" className="pb-16 md:pb-20">
      <article className="mx-auto max-w-3xl rounded-2xl border border-border bg-card px-5 py-8 shadow-sm md:px-10 md:py-10">
        <p className="mb-8 text-xs font-semibold uppercase tracking-wide text-amber">Last updated: May 4, 2026</p>

        <div className="space-y-10 text-sm leading-relaxed text-muted-foreground md:text-base md:space-y-12">
          <section>
            <h2 className="mb-3 text-lg font-bold text-foreground md:text-xl">Introduction</h2>
            <p>
              First Step Services (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates{" "}
              <Link href="https://firststepservices.tech/" className="font-semibold text-amber underline-offset-2 hover:underline">
                https://firststepservices.tech/
              </Link>{" "}
              (the &ldquo;Website&rdquo;). This Privacy Policy describes how we collect, use, disclose, and protect the personal information of visitors
              and customers. Your privacy is important to us, and we are committed to protecting your personal information.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-foreground md:text-xl">Information We Collect</h2>
            <p className="mb-4">We collect personal and non-personal information when you use our Website:</p>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-amber">Personal information</h3>
                <ul className="list-disc space-y-1.5 pl-5">
                  {personalInfo.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-amber">Automatically collected</h3>
                <ul className="list-disc space-y-1.5 pl-5">
                  {autoCollected.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-foreground md:text-xl">How We Use Your Information</h2>
            <p className="mb-3">We use the information we collect to:</p>
            <ul className="list-disc space-y-1.5 pl-5">
              {howWeUse.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-foreground md:text-xl">Cookies and Tracking</h2>
            <p>
              We use cookies and similar tracking technologies to monitor website usage, remember preferences, and enhance user experience. You can disable
              cookies in your browser settings, but some features of the Website may not work properly.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-foreground md:text-xl">Sharing Your Information</h2>
            <p className="mb-3">We may share your data with:</p>
            <ul className="list-disc space-y-1.5 pl-5">
              {sharing.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-4">We do not sell personal information to third parties.</p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-foreground md:text-xl">Third-Party Links</h2>
            <p>
              Our Website may contain links to third-party websites with separate privacy practices. We are not responsible for their content or policies.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-foreground md:text-xl">Data Retention</h2>
            <p>We retain your information only as long as necessary to fulfill the purposes outlined in this policy or as required by law.</p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-foreground md:text-xl">Your Rights</h2>
            <p>You have the right to access, correct, or request deletion of your personal data. To exercise these rights, contact us as listed below.</p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-foreground md:text-xl">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The &ldquo;Last Updated&rdquo; date at the top reflects the most recent version.
            </p>
          </section>

          <section className="rounded-xl border border-border bg-muted/30 p-5 md:p-6">
            <h2 className="mb-4 text-lg font-bold text-foreground md:text-xl">Contact</h2>
            <p className="mb-4">If you have questions about this policy:</p>
            <div className="space-y-4 text-foreground">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-amber">Email</p>
                <Link href="mailto:query@firststepservices.tech" className="break-all text-sm font-medium hover:text-amber md:text-base">
                  query@firststepservices.tech
                </Link>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-amber">Address</p>
                <p className="text-sm font-medium md:text-base">
                  4525 South 23rd St Apt 5, Milwaukee, WI 53221, United States of America
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </SectionWrapper>
  )
}
