import type { Metadata } from "next"
import { AboutHeader } from "@/components/about/about-header"
import { AboutIntro } from "@/components/about/about-intro"
import { AboutTabs } from "@/components/about/about-tabs"
import { AboutStats } from "@/components/about/about-stats"
import { AboutValues } from "@/components/about/about-values"
import { AboutCta } from "@/components/about/about-cta"

export const metadata: Metadata = {
  title: 'About First Step Services | E-commerce Solutions Agency',
  description:
    'A small, senior team of e-commerce designers and engineers helping ambitious brands launch and scale online. Learn about our story, mission, and values.',
  keywords: [
    'about first step services',
    'ecommerce agency team',
    'shopify experts',
    'ecommerce consultants',
    'agency mission and values',
    'senior ecommerce engineers',
    'design and development agency',
    'long-term agency partner',
  ],
  openGraph: {
    title: 'About First Step Services — Our Story & Values',
    description:
      'Senior e-commerce designers and engineers helping merchants ship great commerce experiences.',
    url: '/about',
    type: 'website',
  },
  twitter: {
    title: 'About First Step Services',
    description:
      'A senior agency built around honest scope, clean code, and real outcomes.',
  },
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHeader />
      <AboutIntro />
      <AboutTabs />
      <AboutStats />
      <AboutValues />
      <AboutCta />
    </>
  )
}
