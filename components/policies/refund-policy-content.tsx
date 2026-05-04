import { SectionWrapper } from "@/components/layout/section-wrapper"
import Link from "next/link"

const eligibility = [
  "Requests must be made within 7 days of purchase/vehicle delivery.",
  "To be eligible, items or services must be unused, in original condition, and accompanied by proof of purchase.",
  "Refunds are issued only after review and approval by our team.",
]

const nonRefundable = [
  "Vehicle deposits once processing or inspection has begun",
  "Custom or special-order services after work has started",
  "Administration, documentation, or inspection fees",
  '"As-is" vehicles unless otherwise required by law',
]

const defective = [
  "Contact us within 7 days of receipt or service completion.",
  "Provide photos and order details.",
  "We may offer a repair, replacement, or refund based on the review.",
]

const processing = [
  "Refunds are issued to the original payment method.",
  "Processing times may vary, typically 5–10 business days depending on payment provider.",
]

const exceptions = [
  '"As-Is" sales: No refunds unless required by applicable law.',
  "Digital products, downloads, or informational services: Non-refundable after delivery or instant access.",
]

export function RefundPolicyContent() {
  return (
    <SectionWrapper padding="sm" className="pb-16 md:pb-20">
      <article className="mx-auto max-w-3xl rounded-2xl border border-border bg-card px-5 py-8 shadow-sm md:px-10 md:py-10">
        <div className="space-y-10 text-sm leading-relaxed text-muted-foreground md:text-base md:space-y-12">
          <section>
            <h2 className="mb-3 text-lg font-bold text-foreground md:text-xl">Overview</h2>
            <p>
              At First Step Services, customer satisfaction is important to us. This Refund Policy outlines when and how refunds or returns are handled for
              products and services purchased through our Website (
              <Link href="https://firststepservices.tech/" className="font-semibold text-amber underline-offset-2 hover:underline">
                https://firststepservices.tech/
              </Link>
              ).
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-foreground md:text-xl">Eligibility for Refunds</h2>
            <ul className="list-disc space-y-1.5 pl-5">
              {eligibility.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-foreground md:text-xl">Non-Refundable Items &amp; Services</h2>
            <p className="mb-3">The following are typically non-refundable:</p>
            <ul className="list-disc space-y-1.5 pl-5">
              {nonRefundable.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-foreground md:text-xl">Defective or Damaged Goods</h2>
            <p className="mb-3">If items or services are defective or incorrectly provided:</p>
            <ul className="list-disc space-y-1.5 pl-5">
              {defective.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-foreground md:text-xl">Refund Processing</h2>
            <p className="mb-3">Once approved:</p>
            <ul className="list-disc space-y-1.5 pl-5">
              {processing.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-foreground md:text-xl">Exceptions &amp; Special Cases</h2>
            <ul className="list-disc space-y-1.5 pl-5">
              {exceptions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="rounded-xl border border-border bg-muted/30 p-5 md:p-6">
            <h2 className="mb-3 text-lg font-bold text-foreground md:text-xl">Contact for Refund Requests</h2>
            <p className="mb-4">
              To request a refund, contact us using the email below with{" "}
              <span className="font-semibold text-foreground">Subject: Refund Request</span>.
            </p>
            <div className="space-y-4 text-foreground">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-amber">Email</p>
                <Link
                  href="mailto:query@firststepservices.tech?subject=Refund%20Request"
                  className="break-all text-sm font-medium hover:text-amber md:text-base"
                >
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
