import Link from "next/link"
import { MailIcon, MapPinIcon } from "lucide-react"
import { SectionWrapper } from "@/components/layout/section-wrapper"

const sections = [
  { id: "introduction", label: "Introduction" },
  { id: "information-we-collect", label: "Information We Collect" },
  { id: "how-we-use", label: "How We Use Your Information" },
  { id: "cookies", label: "Cookies & Tracking" },
  { id: "sharing", label: "Sharing Your Information" },
  { id: "third-party", label: "Third-Party Links" },
  { id: "retention", label: "Data Retention" },
  { id: "rights", label: "Your Rights" },
  { id: "changes", label: "Changes to This Policy" },
  { id: "contact", label: "Contact" },
]

const personalInfo = [
  "Name",
  "Email address",
  "Phone number",
  "Company name and role",
  "Project brief details, screenshots, and access credentials shared during engagements",
  "Billing details (processed securely by third-party payment providers)",
]

const autoCollected = [
  "IP address",
  "Browser type and version",
  "Pages viewed, dates and times of visits",
  "Cookies and tracking technologies used to improve site experience and analytics",
]

const howWeUse = [
  "Respond to inquiries and deliver our services",
  "Process service contracts, invoices, and payments",
  "Communicate with you about your project, account, and updates",
  "Improve the Website and tailor relevant content",
  "Detect and prevent fraud and comply with legal obligations",
]

const sharing = [
  "Service providers (payment processors, analytics, hosting, and email tools)",
  "Subcontractors engaged on your project under written confidentiality agreements",
  "Legal authorities when required by law",
]

export function PrivacyPolicyContent() {
  return (
    <SectionWrapper className="relative" padding="lg">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Sticky TOC */}
        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-amber">On this page</p>
            <nav aria-label="Privacy policy table of contents">
              <ol className="space-y-1.5 border-l border-navy/10 dark:border-white/10">
                {sections.map((s, i) => (
                  <li key={s.id}>
                    <Link
                      href={`#${s.id}`}
                      className="group -ml-px flex items-baseline gap-3 border-l-2 border-transparent py-2 pl-5 text-sm font-medium text-muted-foreground transition hover:border-amber hover:text-amber"
                    >
                      <span className="text-[10px] font-bold tracking-wider text-amber/70 group-hover:text-amber">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        </aside>

        {/* Content */}
        <article className="lg:col-span-8">
          <div className="space-y-12 text-sm leading-relaxed text-muted-foreground md:text-base">
            <section id="introduction" className="scroll-mt-28">
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-navy dark:text-white md:text-3xl">Introduction</h2>
              <p>
                First Step Services (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates{" "}
                <Link href="https://firststepservices.tech/" className="font-semibold text-amber underline-offset-2 hover:underline">
                  https://firststepservices.tech/
                </Link>{" "}
                (the &ldquo;Website&rdquo;). This Privacy Policy describes how we collect, use, disclose, and protect the personal information of visitors,
                prospective clients, and customers of our e-commerce solutions services. Your privacy is important to us, and we are committed to protecting your personal information.
              </p>
            </section>

            <section id="information-we-collect" className="scroll-mt-28">
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-navy dark:text-white md:text-3xl">Information We Collect</h2>
              <p className="mb-6">We collect personal and non-personal information when you use our Website:</p>
              <div className="grid gap-5 md:grid-cols-2">
                <div className="rounded-2xl border border-navy/10 bg-card p-5 dark:border-white/10 md:p-6">
                  <h3 className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-amber">Personal information</h3>
                  <ul className="list-disc space-y-1.5 pl-5">
                    {personalInfo.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-navy/10 bg-card p-5 dark:border-white/10 md:p-6">
                  <h3 className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-amber">Automatically collected</h3>
                  <ul className="list-disc space-y-1.5 pl-5">
                    {autoCollected.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section id="how-we-use" className="scroll-mt-28">
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-navy dark:text-white md:text-3xl">How We Use Your Information</h2>
              <p className="mb-3">We use the information we collect to:</p>
              <ul className="list-disc space-y-1.5 pl-5">
                {howWeUse.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section id="cookies" className="scroll-mt-28">
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-navy dark:text-white md:text-3xl">Cookies and Tracking</h2>
              <p>
                We use cookies and similar tracking technologies to monitor website usage, remember preferences, and enhance user experience. You can disable
                cookies in your browser settings, but some features of the Website may not work properly.
              </p>
            </section>

            <section id="sharing" className="scroll-mt-28">
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-navy dark:text-white md:text-3xl">Sharing Your Information</h2>
              <p className="mb-3">We may share your data with:</p>
              <ul className="list-disc space-y-1.5 pl-5">
                {sharing.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-4">We do not sell personal information to third parties.</p>
            </section>

            <section id="third-party" className="scroll-mt-28">
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-navy dark:text-white md:text-3xl">Third-Party Links</h2>
              <p>
                Our Website may contain links to third-party websites with separate privacy practices. We are not responsible for their content or policies.
              </p>
            </section>

            <section id="retention" className="scroll-mt-28">
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-navy dark:text-white md:text-3xl">Data Retention</h2>
              <p>We retain your information only as long as necessary to fulfill the purposes outlined in this policy or as required by law.</p>
            </section>

            <section id="rights" className="scroll-mt-28">
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-navy dark:text-white md:text-3xl">Your Rights</h2>
              <p>You have the right to access, correct, or request deletion of your personal data. To exercise these rights, contact us as listed below.</p>
            </section>

            <section id="changes" className="scroll-mt-28">
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-navy dark:text-white md:text-3xl">Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. The &ldquo;Last Updated&rdquo; date at the top reflects the most recent version.
              </p>
            </section>

            <section id="contact" className="scroll-mt-28 rounded-3xl border border-navy/10 bg-card p-6 dark:border-white/10 md:p-8">
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-navy dark:text-white md:text-3xl">Contact</h2>
              <p className="mb-6">If you have questions about this policy:</p>
              <div className="grid gap-5 md:grid-cols-2">
                <div className="flex items-start gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-amber/10 text-amber">
                    <MailIcon className="size-4" />
                  </span>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-amber">Email</p>
                    <Link
                      href="mailto:query@firststepservices.tech"
                      className="mt-1 block break-all text-sm font-semibold text-navy hover:text-amber dark:text-white md:text-base"
                    >
                      query@firststepservices.tech
                    </Link>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-amber/10 text-amber">
                    <MapPinIcon className="size-4" />
                  </span>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-amber">Address</p>
                    <p className="mt-1 text-sm font-semibold text-navy dark:text-white md:text-base">
                      4525 South 23rd St Apt 5,<br />
                      Milwaukee, WI 53221, USA
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </article>
      </div>
    </SectionWrapper>
  )
}
