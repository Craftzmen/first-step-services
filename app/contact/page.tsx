import type { Metadata } from "next"
import { ContactHeader } from "@/components/contact/contact-header"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ContactCards } from "@/components/contact/contact-cards"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactSidebar } from "@/components/contact/contact-sidebar"

export const metadata: Metadata = {
  title: 'Contact First Step Services | Start Your E-commerce Project',
  description:
    'Tell us about your store and your goals. We reply within one business day with a clear next step — a discovery call, a proposal, or a few thoughtful questions.',
  keywords: [
    'contact ecommerce agency',
    'request a proposal',
    'shopify project quote',
    'ecommerce strategy call',
    'first step services contact',
    'milwaukee ecommerce agency',
    'shopify migration quote',
    'cro retainer inquiry',
  ],
  openGraph: {
    title: 'Contact Us — Start Your E-commerce Project',
    description:
      'Tell us about your store, your stack, and what you want to ship. We reply within one business day.',
    url: '/contact',
    type: 'website',
  },
  twitter: {
    title: 'Contact First Step Services',
    description:
      'Book a strategy call or send a project brief. We reply within one business day.',
  },
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactHeader />

      <ContactCards />

      <SectionWrapper background="muted">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
          <ContactSidebar />
        </div>
      </SectionWrapper>
    </>
  )
}
