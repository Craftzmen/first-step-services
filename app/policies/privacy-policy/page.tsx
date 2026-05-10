import type { Metadata } from "next"
import { PolicyHeader } from "@/components/policies/policy-header"
import { PrivacyPolicyContent } from "@/components/policies/privacy-policy-content"

export const metadata: Metadata = {
  title: 'Privacy Policy | First Step Services',
  description:
    'How First Step Services collects, uses, and protects the personal information of visitors and clients of our e-commerce solutions services.',
  keywords: [
    'privacy policy',
    'data protection',
    'first step services privacy',
    'client data security',
    'cookie policy',
    'gdpr ecommerce agency',
  ],
  openGraph: {
    title: 'Privacy Policy — Our Commitment to Data Protection',
    description:
      'How we collect, use, and protect personal information across our website and client engagements.',
    url: '/policies/privacy-policy',
    type: 'website',
  },
  twitter: {
    title: 'Privacy Policy — First Step Services',
    description:
      'Our commitment to protecting visitor and client data.',
  },
  alternates: {
    canonical: '/policies/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PolicyHeader
        eyebrow="Legal"
        title="Privacy Policy"
        description="How we collect, use, and protect personal information across our website and client engagements."
        lastUpdated="May 4, 2026"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Policies" },
          { label: "Privacy Policy" },
        ]}
      />
      <PrivacyPolicyContent />
    </>
  )
}
