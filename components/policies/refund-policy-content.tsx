import { Separator } from "@/components/ui/separator"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import Link from "next/link"

export function RefundPolicyContent() {
  return (
    <SectionWrapper>
      <article className="mx-auto max-w-4xl">
        <div className="border border-border bg-white p-10 dark:bg-card md:p-16">
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-extrabold text-navy dark:text-white">Overview</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              At Prime Auto Deals, customer satisfaction is important to us.
              This Refund Policy outlines when and how refunds or returns are
              handled for products and services purchased through our Website.
            </p>
          </section>

          <Separator className="my-10" />

          <section className="mb-12">
            <h2 className="mb-6 text-2xl font-extrabold text-navy dark:text-white">
              Eligibility for Refunds
            </h2>
            <ul className="space-y-3 text-lg leading-relaxed text-muted-foreground">
              {[
                "Requests must be made within 7 days of purchase/vehicle delivery.",
                "To be eligible, items or services must be unused, in original condition, and accompanied by proof of purchase.",
                "Refunds are issued only after review and approval by our team.",
              ].map((item) => (
                <li key={item} className="flex gap-4 items-center">
                  <span className="size-2 shrink-0 bg-amber" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <Separator className="my-10" />

          <section className="mb-12">
            <h2 className="mb-6 text-2xl font-extrabold text-navy dark:text-white">
              Non-Refundable Items & Services
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              The following are typically non-refundable:
            </p>
            <ul className="space-y-3 text-lg leading-relaxed text-muted-foreground">
              {[
                "Vehicle deposits once processing or inspection has begun",
                'Custom or special-order services after work has started',
                "Administration, documentation, or inspection fees",
                '"As-is" vehicles unless otherwise required by law',
              ].map((item) => (
                <li key={item} className="flex gap-4 items-center">
                  <span className="size-2 shrink-0 bg-amber" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <Separator className="my-10" />

          <section className="mb-12">
            <h2 className="mb-6 text-2xl font-extrabold text-navy dark:text-white">
              Defective or Damaged Goods
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              If items or services are defective or incorrectly provided:
            </p>
            <ol className="space-y-3 text-lg leading-relaxed text-muted-foreground list-decimal ml-6 font-semibold text-foreground/80">
              <li>
                Contact us within 7 days of receipt or service completion.
              </li>
              <li>Provide photos and order details.</li>
              <li>
                We may offer a repair, replacement, or refund based on the
                review.
              </li>
            </ol>
          </section>

          <Separator className="my-10" />

          <section className="mb-12">
            <h2 className="mb-6 text-2xl font-extrabold text-navy dark:text-white">Refund Processing</h2>
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              Once approved:
            </p>
            <ul className="space-y-3 text-lg leading-relaxed text-muted-foreground">
              {[
                "Refunds are issued to the original payment method.",
                "Processing times may vary, typically 5–10 business days depending on payment provider.",
              ].map((item) => (
                <li key={item} className="flex gap-4 items-center">
                  <span className="size-2 shrink-0 bg-amber" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <Separator className="my-10" />

          <section className="mb-12">
            <h2 className="mb-6 text-2xl font-extrabold text-navy dark:text-white">
              Exceptions & Special Cases
            </h2>
            <ul className="space-y-3 text-lg leading-relaxed text-muted-foreground">
              {[
                '"As-Is" sales: No refunds unless required by applicable law.',
                "Digital products, downloads, or informational services: Non-refundable after delivery or instant access.",
              ].map((item) => (
                <li key={item} className="flex gap-4 items-center">
                  <span className="size-2 shrink-0 bg-amber" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <Separator className="my-10" />

          <section>
            <h2 className="mb-6 text-2xl font-extrabold text-navy dark:text-white">
              Contact for Refund Requests
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              To request a refund, please contact us:
            </p>
            <ul className="space-y-4 text-base text-muted-foreground">
              <li>
                <span className="font-bold text-foreground">Email:</span>{" "}
                <Link
                  href="mailto:query@primeautodeals.tech"
                  className="text-amber font-semibold hover:text-amber-dark transition-colors"
                >
                  query@primeautodeals.tech
                </Link>
              </li>
              <li>
                <span className="font-bold text-foreground">Subject:</span> Refund Request
              </li>
            </ul>
          </section>
        </div>
      </article>
    </SectionWrapper>
  )
}
