import type { Metadata } from "next"
import { PageHeader } from "@/components/layout/page-header"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ContactCards } from "@/components/contact/contact-cards"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactSidebar } from "@/components/contact/contact-sidebar"

export const metadata: Metadata = {
  title: 'Contact Us | First Step Services in Stevens Point, WI',
  description:
    'Get in touch with the automotive experts at First Step Services. Visit our Stevens Point location, call us, or book an appointment online for reliable car repair and care.',
  keywords: [
    'contact First Step Services',
    'mechanic in Stevens Point',
    'car repair location',
    'book car appointment',
    'auto repair number',
    'emergency car repair',
    'automotive service contact',
    'customer support auto care',
  ],
  openGraph: {
    title: 'Contact Us - Get in Touch with Auto Care Experts',
    description:
      'Step into the solution. Visit our Stevens Point office for quality car care and repairs.',
    url: '/contact',
    type: 'website',
  },
  twitter: {
    title: 'Contact Us - Auto Care at Your Fingertips',
    description:
      'Reach out to First Step Services for all your automotive needs. We are here to help.',
  },
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        description="Connect with our specialists and experience the gold standard of client-centric automotive care."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />

      <ContactCards />

      <SectionWrapper background="muted">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
          <ContactSidebar />
        </div>
      </SectionWrapper>
    </>
  )
}
