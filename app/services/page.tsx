import type { Metadata } from "next"
import { ServicesHeader } from "@/components/services/services-header"
import { ServicesGrid } from "@/components/services/services-grid"
import { ServicesBooking } from "@/components/services/services-booking"
import { ServicesEmergencyCta } from "@/components/services/services-emergency-cta"

export const metadata: Metadata = {
  title: 'Services | E-commerce Design, Build, Migration & Growth',
  description:
    'Store design and build, platform migration, conversion optimization, integrations, headless commerce, and ongoing growth retainers.',
  keywords: [
    'shopify store build',
    'platform migration',
    'magento to shopify',
    'conversion rate optimization',
    'shopify integrations',
    'headless commerce',
    'shopify hydrogen',
    'ecommerce retainer',
  ],
  openGraph: {
    title: 'Services — End-to-end E-commerce Solutions',
    description:
      'Six service tracks covering everything from new store builds to long-term growth.',
    url: '/services',
    type: 'website',
  },
  twitter: {
    title: 'Services — E-commerce Solutions',
    description:
      'Builds, migrations, CRO, integrations, headless commerce, and ongoing support.',
  },
  alternates: {
    canonical: '/services',
  },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHeader />
      <ServicesGrid />
      <ServicesBooking />
      <ServicesEmergencyCta />
    </>
  )
}
