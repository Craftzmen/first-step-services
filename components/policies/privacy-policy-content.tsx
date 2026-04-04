import { Separator } from "@/components/ui/separator"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import Link from "next/link"

export function PrivacyPolicyContent() {
  return (
    <SectionWrapper>
      <article className="mx-auto max-w-4xl">
        <div className="border border-border bg-white p-10 dark:bg-card md:p-16">
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-extrabold text-navy dark:text-white">Introduction</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Prime Auto Deals (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
              &ldquo;our&rdquo;) operates{" "}
              <Link
                href="https://primeautodeals.tech/"
                className="font-bold text-amber hover:text-amber-dark transition-colors"
              >
                https://primeautodeals.tech/
              </Link>{" "}
              (the &ldquo;Website&rdquo;). This Privacy Policy describes how
              we collect, use, disclose, and protect the personal information
              of visitors and customers. Your privacy is important to us, and
              we are committed to protecting your personal information.
            </p>
          </section>

          <Separator className="my-10" />

          <section className="mb-12">
            <h2 className="mb-6 text-2xl font-extrabold text-navy dark:text-white">
              Information We Collect
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              We collect personal and non-personal information when you use
              our Website:
            </p>

            <h3 className="mb-4 text-xl font-bold uppercase tracking-wide text-foreground/80">Personal Information</h3>
            <ul className="mb-8 space-y-3 text-base text-muted-foreground">
              {[
                "Name",
                "Email address",
                "Phone number",
                "Mailing address",
                "Billing and shipping information",
                "Payment details (processed securely by third-party payment providers)",
              ].map((item) => (
                <li key={item} className="flex gap-4 items-center">
                  <span className="size-2 shrink-0 bg-amber" />
                  {item}
                </li>
              ))}
            </ul>

            <h3 className="mb-4 text-xl font-bold uppercase tracking-wide text-foreground/80">
              Automatically Collected Information
            </h3>
            <ul className="space-y-3 text-base text-muted-foreground">
              {[
                "IP address",
                "Browser type and version",
                "Pages viewed, dates and times of visits",
                "Cookies and tracking technologies used to improve site experience and analytics",
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
              How We Use Your Information
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              We use the information we collect to:
            </p>
            <ul className="space-y-3 text-base text-muted-foreground">
              {[
                "Provide, operate, and improve our services and Website",
                "Process orders and payments",
                "Communicate with you about your purchase, account, and updates",
                "Personalize your experience and tailor content",
                "Detect and prevent fraud and comply with legal obligations",
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
            <h2 className="mb-4 text-2xl font-extrabold text-navy dark:text-white">
              Cookies and Tracking
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              We use cookies and similar tracking technologies to monitor
              website usage, remember preferences, and enhance user
              experience. You can disable cookies in your browser settings,
              but some features of the Website may not work properly.
            </p>
          </section>

          <Separator className="my-10" />

          <section className="mb-12">
            <h2 className="mb-6 text-2xl font-extrabold text-navy dark:text-white">
              Sharing Your Information
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              We may share your data with:
            </p>
            <ul className="mb-8 space-y-3 text-base text-muted-foreground">
              {[
                "Service providers (payment processors, analytics services)",
                "Legal authorities when required by law",
                "Businesses involved in order fulfillment (e.g., shipping partners)",
              ].map((item) => (
                <li key={item} className="flex gap-4 items-center">
                  <span className="size-2 shrink-0 bg-amber" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-base font-bold uppercase tracking-wider text-navy dark:text-amber">
              We do not sell personal information to third parties.
            </p>
          </section>

          <Separator className="my-10" />

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-extrabold text-navy dark:text-white">Third-Party Links</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Our Website may contain links to third-party websites with
              separate privacy practices. We are not responsible for their
              content or policies.
            </p>
          </section>

          <Separator className="my-10" />

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-extrabold text-navy dark:text-white">Data Retention</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              We retain your information only as long as necessary to fulfill
              the purposes outlined in this policy or as required by law.
            </p>
          </section>

          <Separator className="my-10" />

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-extrabold text-navy dark:text-white">Your Rights</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              You have the right to access, correct, or request deletion of
              your personal data. To exercise these rights, contact us as
              listed below.
            </p>
          </section>

          <Separator className="my-10" />

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-extrabold text-navy dark:text-white">
              Changes to This Policy
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              We may update this Privacy Policy from time to time. The
              &ldquo;Last Updated&rdquo; date at the top reflects the most
              recent version.
            </p>
          </section>

          <Separator className="my-10" />

          <section>
            <h2 className="mb-6 text-2xl font-extrabold text-navy dark:text-white">
              Contact Information
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              If you have questions or concerns about this policy, contact us
              at:
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
                <span className="font-bold text-foreground">Address:</span> 1916 E 51ST Street 2FL, Brooklyn, NY 11234
              </li>
            </ul>
          </section>
        </div>
      </article>
    </SectionWrapper>
  )
}
