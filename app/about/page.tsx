import type { Metadata } from "next"
import { PageHeader } from "@/components/layout/page-header"
import { AboutIntro } from "@/components/about/about-intro"
import { AboutTabs } from "@/components/about/about-tabs"
import { AboutStats } from "@/components/about/about-stats"
import { AboutValues } from "@/components/about/about-values"
import { AboutCta } from "@/components/about/about-cta"

export const metadata: Metadata = {
  title: 'About Prime Auto Deals | Our Story & Values',
  description:
    'Since 2009, Prime Auto Deals has been serving Brooklyn with high-quality automotive solutions. Learn more about our mission to provide transparent and expert auto care.',
  keywords: [
    'about Prime Auto Deals',
    'car maintenance history',
    'mechanic team',
    'automotive solution and service',
    'trusted car dealer Brooklyn',
    'automotive expert team',
    'customer service auto care',
    'Brooklyn car specialists',
  ],
  openGraph: {
    title: 'About Prime Auto Deals - Our Commitment to Quality',
    description:
      'Step into the story of Prime Auto Deals. From high-quality vehicles to expert automotive services.',
    url: '/about',
    type: 'website',
  },
  twitter: {
    title: 'About Prime Auto Deals - Our Commitment',
    description:
      'Step into the story of Prime Auto Deals and our commitment to quality auto care.',
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
