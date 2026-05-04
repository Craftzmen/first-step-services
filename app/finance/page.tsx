import type { Metadata } from "next"
import { PageHeader } from "@/components/layout/page-header"
import { FinanceIntro } from "@/components/finance/finance-intro"
import { FinanceOptions } from "@/components/finance/finance-options"
import { FinanceBenefits } from "@/components/finance/finance-benefits"
import { FinanceTestimonials } from "@/components/finance/finance-testimonials"
import { FinanceCta } from "@/components/finance/finance-cta"
import { FinancePopup } from "@/components/finance/finance-popup"

export const metadata: Metadata = {
  title: 'Car Finance & Loans in Stevens Point | First Step Services',
  description:
    'Navigating car finance made easy. Explore competitive rates, flexible terms, and fast approvals for new or used vehicles with First Step Services.',
  keywords: [
    'car finance Stevens Point',
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
      'Step into flexible financing solutions. Whether buying new or refinancing, First Step Services makes it seamless.',
    url: '/finance',
    type: 'website',
  },
  twitter: {
    title: 'Car Finance - Affordable Auto Financing',
    description:
      'Experience seamless car financing with First Step Services. Easy rates and flexible terms.',
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
        description="Unlock the road ahead with flexible financing solutions for Kia and Hyundai models, tailored to your unique journey."
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
      <FinancePopup />
    </>
  )
}
