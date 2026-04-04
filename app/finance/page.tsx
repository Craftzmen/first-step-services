import type { Metadata } from "next"
import { PageHeader } from "@/components/layout/page-header"
import { FinanceIntro } from "@/components/finance/finance-intro"
import { FinanceOptions } from "@/components/finance/finance-options"
import { FinanceBenefits } from "@/components/finance/finance-benefits"
import { FinanceTestimonials } from "@/components/finance/finance-testimonials"
import { FinanceCta } from "@/components/finance/finance-cta"

export const metadata: Metadata = {
  title: 'Car Finance & Loans in Brooklyn | Prime Auto Deals',
  description:
    'Navigating car finance made easy. Explore competitive rates, flexible terms, and fast approvals for new or used vehicles with Prime Auto Deals.',
  keywords: [
    'car finance Brooklyn',
    'easy car loans',
    'auto refinancing',
    'low interest car loans',
    'new car finance',
    'used car finance',
    'credit car deals',
    'fast car loan approval',
  ],
  openGraph: {
    title: 'Car Finance & Loans - Affordable Automotive Financing',
    description:
      'Step into flexible financing solutions. Whether buying new or refinancing, Prime Auto Deals makes it seamless.',
    url: '/finance',
    type: 'website',
  },
  twitter: {
    title: 'Car Finance - Affordable Auto Financing',
    description:
      'Experience seamless car financing with Prime Auto Deals. Easy rates and flexible terms.',
  },
  alternates: {
    canonical: '/finance',
  },
};

export default function FinancePage() {
  return (
    <>
      <PageHeader
        title="Car Finance"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Finance" },
        ]}
      />

      <FinanceIntro />
      <FinanceOptions />
      <FinanceBenefits />
      <FinanceTestimonials />
      <FinanceCta />
    </>
  )
}
