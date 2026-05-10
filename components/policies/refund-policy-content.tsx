import Link from "next/link"
import { MailIcon, MapPinIcon } from "lucide-react"
import { SectionWrapper } from "@/components/layout/section-wrapper"

const sections = [
  { id: "overview", label: "Overview" },
  { id: "eligibility", label: "Eligibility for Refunds" },
  { id: "non-refundable", label: "Non-Refundable Fees" },
  { id: "rework", label: "Rework on Defective Deliverables" },
  { id: "cancellation", label: "Project Cancellation" },
  { id: "processing", label: "Refund Processing" },
  { id: "contact", label: "Contact for Refund Requests" },
]

const eligibility = [
  "Refund requests must be made in writing within 7 days of the invoiced milestone or deposit payment.",
  "Eligible for refund: deposits or milestone payments where work has not yet started.",
  "Refunds are reviewed on a case-by-case basis and approved by our team in writing.",
]

const nonRefundable = [
  "Work already completed, delivered, or in active development at the time of the request",
  "Custom design, code, or strategy hours that have been logged against your project",
  "Third-party fees passed through at cost (Shopify, hosting, themes, plugins, paid integrations, stock assets)",
  "Discovery calls, audits, and strategy sessions once they have been delivered",
  "Retainer fees for periods that have already started or been worked",
]

const rework = [
  "Contact us within 7 days of the affected delivery.",
  "Share specific examples and the original brief or acceptance criteria.",
  "Where the deliverable does not match the agreed scope, we will rework it at no additional charge before any refund is considered.",
]

const processing = [
  "Approved refunds are issued to the original payment method.",
  "Processing typically takes 5–10 business days, depending on your payment provider.",
  "Any third-party fees already paid on your behalf are deducted from the refund amount.",
]

const cancellation = [
  "Project engagements may be cancelled at any time with 14 days written notice.",
  "On cancellation, you are billed for any work in progress and any third-party fees committed up to the cancellation date.",
  "Retainers may be cancelled at the end of the current billing period and are not pro-rated mid-period.",
]

export function RefundPolicyContent() {
  return (
    <SectionWrapper className="relative" padding="lg">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Sticky TOC */}
        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-amber">On this page</p>
            <nav aria-label="Refund policy table of contents">
              <ol className="space-y-1.5 border-l border-navy/10 dark:border-white/10">
                {sections.map((s, i) => (
                  <li key={s.id}>
                    <Link
                      href={`#${s.id}`}
                      className="group -ml-px flex items-baseline gap-3 border-l-2 border-transparent py-2 pl-5 text-sm font-medium text-muted-foreground hover:border-amber hover:text-amber"
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
            <section id="overview" className="scroll-mt-28">
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-navy dark:text-white md:text-3xl">Overview</h2>
              <p>
                At First Step Services, we want every engagement to feel fair on both sides. This Refund Policy describes how we handle refunds, rework, and cancellations for the e-commerce solutions services purchased through our Website (
                <Link href="https://firststepservices.tech/" className="font-semibold text-amber underline-offset-2 hover:underline">
                  https://firststepservices.tech/
                </Link>
                ).
              </p>
            </section>

            <section id="eligibility" className="scroll-mt-28">
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-navy dark:text-white md:text-3xl">Eligibility for Refunds</h2>
              <ul className="list-disc space-y-1.5 pl-5">
                {eligibility.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section id="non-refundable" className="scroll-mt-28">
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-navy dark:text-white md:text-3xl">Non-Refundable Fees</h2>
              <p className="mb-3">The following are not refundable once delivered or started:</p>
              <ul className="list-disc space-y-1.5 pl-5">
                {nonRefundable.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section id="rework" className="scroll-mt-28">
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-navy dark:text-white md:text-3xl">Rework on Defective Deliverables</h2>
              <p className="mb-3">If a deliverable does not match the agreed scope:</p>
              <ul className="list-disc space-y-1.5 pl-5">
                {rework.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section id="cancellation" className="scroll-mt-28">
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-navy dark:text-white md:text-3xl">Project Cancellation</h2>
              <ul className="list-disc space-y-1.5 pl-5">
                {cancellation.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section id="processing" className="scroll-mt-28">
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-navy dark:text-white md:text-3xl">Refund Processing</h2>
              <p className="mb-3">Once a refund is approved:</p>
              <ul className="list-disc space-y-1.5 pl-5">
                {processing.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section id="contact" className="scroll-mt-28 rounded-3xl border border-navy/10 bg-card p-6 dark:border-white/10 md:p-8">
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-navy dark:text-white md:text-3xl">Contact for Refund Requests</h2>
              <p className="mb-6">
                To request a refund, email us with{" "}
                <span className="font-semibold text-foreground">Subject: Refund Request</span> and include your invoice number and project name.
              </p>
              <div className="grid gap-5 md:grid-cols-2">
                <div className="flex items-start gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-amber/10 text-amber">
                    <MailIcon className="size-4" />
                  </span>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-amber">Email</p>
                    <Link
                      href="mailto:query@firststepservices.tech?subject=Refund%20Request"
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
