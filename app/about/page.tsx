import type { Metadata } from "next"
import { PageHeader } from "@/components/layout/page-header"
import { AboutIntro } from "@/components/about/about-intro"
import { AboutTabs } from "@/components/about/about-tabs"
import { AboutStats } from "@/components/about/about-stats"
import { AboutValues } from "@/components/about/about-values"
import { AboutCta } from "@/components/about/about-cta"

export const metadata: Metadata = {
  title: 'About First Step Services | Our Story & Values',
  description:
    'Since March 2026, First Step Services has been serving Stevens Point with high-quality automotive solutions. Learn more about our mission to provide transparent and expert auto care.',
  keywords: [
    'about First Step Services',
    'car maintenance history',
    'mechanic team',
    'automotive solution and service',
    'trusted car service Stevens Point',
    'automotive expert team',
    'customer service auto care',
    'Stevens Point car specialists',
  ],
  openGraph: {
    title: 'About First Step Services - Our Commitment to Quality',
    description:
      'Step into the story of First Step Services. From expert vehicles to expert automotive services.',
    url: '/about',
    type: 'website',
  },
  twitter: {
    title: 'About First Step Services - Our Commitment',
    description:
      'Step into the story of First Step Services and our commitment to quality auto care.',
  },
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Us"
        description="A new standard of excellence in automotive care, built on transparency and technical mastery."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
      />

      <AboutIntro />
      <AboutTabs />
      <AboutStats />
      <AboutValues />
      <AboutCta />
    </>
  )
}
