import type { Metadata } from "next"
import { PageHeader } from "@/components/layout/page-header"
import { RefundPolicyContent } from "@/components/policies/refund-policy-content"

export const metadata: Metadata = {
  title: 'Refund Policy | First Step Services',
  description:
    'Read about our refund and return policies at First Step Services. We are committed to providing top-quality automotive services and customer satisfaction.',
  keywords: [
    'refund policy car care',
    'service cancellation terms',
    'car repair guarantee',
    'refund process auto repair',
    'automotive service refund',
    'first step services refund',
  ],
  openGraph: {
    title: 'Refund Policy - Satisfaction Guarantee',
    description:
      'Step into quality. Learn about our clear and transparent refund policies for your peace of mind.',
    url: '/policies/refund-policy',
    type: 'website',
  },
  twitter: {
    title: 'Refund Policy - Quality Commitment',
    description:
      'Learn more about our transparent refund and satisfaction policies.',
  },
  alternates: {
    canonical: '/policies/refund-policy',
  },
};

export default function RefundPolicyPage() {
  return (
    <>
      <PageHeader
        title="Refund Policy"
        description="Transparent terms and a satisfaction guarantee designed to keep your journey worry-free."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Policies" },
          { label: "Refund Policy" },
        ]}
      />
      <RefundPolicyContent />
    </>
  )
}
