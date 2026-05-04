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
            <h2 className="mb-8 text-4xl font-black tracking-tight text-navy dark:text-white">Overview</h2>
            <p className="text-xl leading-relaxed text-muted-foreground font-medium">
              At First Step Services, customer satisfaction is important to us. This Refund Policy outlines when and
              how refunds or returns are handled for products and services purchased through our Website (
              <Link
                href="https://firststepservices.tech/"
                className="font-black text-amber hover:underline transition-all"
              >
                https://firststepservices.tech/
              </Link>
              ).
            </p>
          </section>

          <div className="space-y-24">
            <section>
              <h2 className="mb-8 text-4xl font-black tracking-tight text-navy dark:text-white">
                Eligibility for Refunds
              </h2>
              <ul className="space-y-4">
                {[
                  "Requests must be made within 7 days of purchase/vehicle delivery.",
                  "To be eligible, items or services must be unused, in original condition, and accompanied by proof of purchase.",
                  "Refunds are issued only after review and approval by our team.",
                ].map((item) => (
                  <li key={item} className="flex gap-4 items-start text-lg font-bold text-navy/70 dark:text-white/70">
                    <div className="mt-2 size-2 shrink-0 rounded-full bg-amber" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="mb-8 text-4xl font-black tracking-tight text-navy dark:text-white">
                Non-Refundable Items & Services
              </h2>
              <p className="mb-8 text-lg font-medium text-muted-foreground">The following are typically non-refundable:</p>
              <ul className="space-y-4">
                {[
                  "Vehicle deposits once processing or inspection has begun",
                  "Custom or special-order services after work has started",
                  "Administration, documentation, or inspection fees",
                  '"As-is" vehicles unless otherwise required by law',
                ].map((item) => (
                  <li key={item} className="flex gap-4 items-center text-lg font-bold text-navy/70 dark:text-white/70">
                    <div className="size-2 shrink-0 rounded-full bg-amber" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="mb-8 text-4xl font-black tracking-tight text-navy dark:text-white">
                Defective or Damaged Goods
              </h2>
              <p className="mb-8 text-lg font-medium text-muted-foreground">
                If items or services are defective or incorrectly provided:
              </p>
              <ul className="space-y-4">
                {[
                  "Contact us within 7 days of receipt or service completion.",
                  "Provide photos and order details.",
                  "We may offer a repair, replacement, or refund based on the review.",
                ].map((item) => (
                  <li key={item} className="flex gap-4 items-start text-lg font-bold text-navy/70 dark:text-white/70">
                    <div className="mt-2 size-2 shrink-0 rounded-full bg-amber" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="mb-8 text-4xl font-black tracking-tight text-navy dark:text-white">Refund Processing</h2>
              <p className="mb-8 text-lg font-medium text-muted-foreground">Once approved:</p>
              <ul className="grid gap-6 md:grid-cols-1">
                {[
                  "Refunds are issued to the original payment method.",
                  "Processing times may vary, typically 5–10 business days depending on payment provider.",
                ].map((item) => (
                  <li key={item} className="flex gap-6 items-center rounded-3xl bg-navy/5 p-8 dark:bg-white/5">
                    <div className="size-3 shrink-0 rounded-full bg-amber" />
                    <span className="text-xl font-black text-navy dark:text-white">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="mb-8 text-4xl font-black tracking-tight text-navy dark:text-white">
                Exceptions & Special Cases
              </h2>
              <ul className="space-y-4">
                {[
                  '"As-Is" sales: No refunds unless required by applicable law.',
                  "Digital products, downloads, or informational services: Non-refundable after delivery or instant access.",
                ].map((item) => (
                  <li key={item} className="flex gap-4 items-start text-lg font-bold text-navy/70 dark:text-white/70">
                    <div className="mt-2 size-2 shrink-0 rounded-full bg-amber" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="mb-8 text-4xl font-black tracking-tight text-navy dark:text-white">
                Contact for Refund Requests
              </h2>
              <p className="mb-8 text-lg text-muted-foreground font-medium">
                To request a refund, please contact us using the email below with{" "}
                <span className="font-black text-navy dark:text-white">Subject: Refund Request</span>.
              </p>
              <div className="rounded-[3rem] bg-navy p-12 text-white">
                <div className="grid gap-12 md:grid-cols-2">
                  <div>
                    <h3 className="mb-4 text-[10px] font-black uppercase tracking-[0.3em] text-amber">Direct Inquiry</h3>
                    <Link
                      href="mailto:query@firststepservices.tech?subject=Refund%20Request"
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
