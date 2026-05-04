import type { Metadata } from "next"
import { PageHeader } from "@/components/layout/page-header"
import { Timeline } from "@/components/how-it-works/timeline"
import { FaqSection } from "@/components/how-it-works/faq-section"
import { CtaHowItWorks } from "@/components/how-it-works/cta-section"

export const metadata: Metadata = {
  title: 'How It Works | Our Seamless Auto Care Process',
  description:
    'Discover our simple 5-step process for expert auto care. From online consultation to doorstep repair, First Step Services makes vehicle maintenance hassle-free.',
  keywords: [
    'auto repair process',
    'how car maintenance works',
    'doorstep car repair',
    'online auto consultation',
    'car repair estimation',
    'how to book car service',
    'transparent auto care',
    'reliable mechanic process',
  ],
  openGraph: {
    title: 'How It Works - Simple & Transparent Auto Care',
    description:
      'Step into clarity. Experience a seamless automotive repair process designed for your convenience.',
    url: '/how-it-works',
    type: 'website',
  },
  twitter: {
    title: 'How It Works - Simple Auto Care',
    description:
      'Experience absolute clarity in car repair with our simple 5-step process.',
  },
  alternates: {
    canonical: '/how-it-works',
  },
};

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader
        title="How It Works"
        description="A streamlined, transparent journey from diagnosis to doorstep delivery."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "How It Works" },
        ]}
      />

      <Timeline />
      <FaqSection />
      <CtaHowItWorks />
    </>
  )
}
