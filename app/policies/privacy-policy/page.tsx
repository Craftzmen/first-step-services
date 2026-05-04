import type { Metadata } from "next"
import { PageHeader } from "@/components/layout/page-header"
import { PrivacyPolicyContent } from "@/components/policies/privacy-policy-content"

export const metadata: Metadata = {
  title: 'Privacy Policy | First Step Services',
  description:
    'Learn how First Step Services collects, uses, and protects your personal information. Your privacy is our priority.',
  keywords: [
    'privacy policy',
    'data protection',
    'first step services privacy',
    'customer information security',
    'cookie policy auto care',
    'legal automotive compliance',
  ],
  openGraph: {
    title: 'Privacy Policy - Our Commitment to Data Protection',
    description:
      'Step into absolute trust. Learn how we secure your data while providing the best automotive care.',
    url: '/policies/privacy-policy',
    type: 'website',
  },
  twitter: {
    title: 'Privacy Policy - Protecting Your Information',
    description:
      'Read about how we protect your personal data for a secure car care experience.',
  },
  alternates: {
    canonical: '/policies/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader
        title="Privacy Policy"
        description="Your security is our priority. Explore how we protect and respect your digital footprint."
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
