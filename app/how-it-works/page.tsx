import type { Metadata } from "next"
import { HowItWorksHeader } from "@/components/how-it-works/how-it-works-header"
import { Timeline } from "@/components/how-it-works/timeline"
import { FaqSection } from "@/components/how-it-works/faq-section"
import { CtaHowItWorks } from "@/components/how-it-works/cta-section"

export const metadata: Metadata = {
  title: 'How It Works | Our E-commerce Engagement Process',
  description:
    'A clear five-step engagement: discovery, audit and strategy, design, build and QA, and launch and optimize. Honest scope, real outcomes.',
  keywords: [
    'ecommerce engagement process',
    'agency project process',
    'ecommerce discovery and audit',
    'design and prototype',
    'ecommerce build and qa',
    'launch and optimization',
    'how an ecommerce agency works',
    'fixed-fee agency process',
  ],
  openGraph: {
    title: 'How It Works — A Clear Five-Step Engagement',
    description:
      'From discovery call to post-launch optimization. Honest scope, fixed quotes, real outcomes.',
    url: '/how-it-works',
    type: 'website',
  },
  twitter: {
    title: 'How It Works — Our Process',
    description:
      'Five steps from idea to live store, with senior engineers on every engagement.',
  },
  alternates: {
    canonical: '/how-it-works',
  },
};

export default function HowItWorksPage() {
  return (
    <>
      <HowItWorksHeader />
      <Timeline />
      <FaqSection />
      <CtaHowItWorks />
    </>
  )
}
