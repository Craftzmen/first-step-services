import type { Metadata } from "next"
import { PolicyHeader } from "@/components/policies/policy-header"
import { RefundPolicyContent } from "@/components/policies/refund-policy-content"

export const metadata: Metadata = {
  title: 'Refund Policy | First Step Services',
  description:
    'How First Step Services handles refunds, rework, and cancellations for our e-commerce design, build, migration, CRO, and retainer services.',
  keywords: [
    'refund policy',
    'agency refund policy',
    'project cancellation terms',
    'service refund process',
    'first step services refund',
    'ecommerce agency refund policy',
  ],
  openGraph: {
    title: 'Refund Policy — Fair, Transparent Terms',
    description:
      'How we handle refunds, rework, and cancellations for our e-commerce solutions services.',
    url: '/policies/refund-policy',
    type: 'website',
  },
  twitter: {
    title: 'Refund Policy — First Step Services',
    description:
      'Fair, transparent terms for refunds, rework, and project cancellation.',
  },
  alternates: {
    canonical: '/policies/refund-policy',
  },
};

export default function RefundPolicyPage() {
  return (
    <>
      <PolicyHeader
        eyebrow="Legal"
        title="Refund Policy"
        description="Fair, transparent terms for refunds, rework, and project cancellation across our e-commerce solutions services."
        lastUpdated="May 4, 2026"
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
