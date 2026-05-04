import type { Metadata } from "next"
import { PageHeader } from "@/components/layout/page-header"
import { ServicesGrid } from "@/components/services/services-grid"
import { ServicesBooking } from "@/components/services/services-booking"
import { ServicesEmergencyCta } from "@/components/services/services-emergency-cta"

export const metadata: Metadata = {
  title: 'Auto Repair & Maintenance Services in Stevens Point | First Step Services',
  description:
    'Professional automotive repair services. Performance upgrades, computer diagnostics, brake repairs, and air conditioning service. Keeping your car reliable and efficient.',
  keywords: [
    'auto repair services',
    'car maintenance specialists',
    'performance car upgrades',
    'advanced engine diagnostics',
    'brake service specialists',
    'AC repair Stevens Point',
    'lube and oil changes',
    'expert auto mechanic service',
  ],
  openGraph: {
    title: 'Professional Auto Repair & Maintenance Services',
    description:
      'Step into quality. Our expert technicians in Stevens Point provide comprehensive care for your vehicle.',
    url: '/services',
    type: 'website',
  },
  twitter: {
    title: 'Auto Repair & Maintenance - Professional Services',
    description:
      'Keep your car performing at its best with expert repair and care.',
  },
  alternates: {
    canonical: '/services',
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        description="Comprehensive automotive solutions powered by advanced technology and elite craftsmanship."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />

      <ServicesGrid />
      <ServicesBooking />
      <ServicesEmergencyCta />
    </>
  )
}
