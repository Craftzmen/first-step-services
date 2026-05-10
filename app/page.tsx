import type { Metadata } from "next"
import { Suspense } from "react"
import { Hero } from "@/components/home/hero"

export const metadata: Metadata = {
  title: 'First Step Services | E-commerce Solutions for Modern Brands',
  description:
    'Full-service e-commerce solutions — store builds, replatforming, conversion optimization, integrations, and growth retainers for ambitious brands.',
  keywords: [
    'ecommerce solutions',
    'shopify development',
    'shopify plus',
    'woocommerce experts',
    'magento migration',
    'headless commerce nextjs',
    'cro agency',
    'ecommerce integrations',
  ],
  openGraph: {
    title: 'First Step Services — E-commerce Solutions Agency',
    description:
      'We design and build the stores that grow brands. Shopify, WooCommerce, BigCommerce, and headless commerce — done right.',
    url: '/',
    type: 'website',
  },
  twitter: {
    title: 'First Step Services — E-commerce Solutions',
    description:
      'Store builds, replatforming, CRO, integrations, and growth retainers.',
  },
  alternates: {
    canonical: '/',
  },
}

async function DeferredHomeServices() {
  const { HomeServices } = await import("@/components/home/services-section")
  return <HomeServices />
}

async function DeferredAboutSnapshot() {
  const { AboutSnapshot } = await import("@/components/home/about-snapshot")
  return <AboutSnapshot />
}

async function DeferredProcessSection() {
  const { ProcessSection } = await import("@/components/home/process-section")
  return <ProcessSection />
}

async function DeferredTestimonialsSection() {
  const { TestimonialsSection } = await import("@/components/home/testimonials-section")
  return <TestimonialsSection />
}

async function DeferredCtaBanner() {
  const { CtaBanner } = await import("@/components/home/cta-banner")
  return <CtaBanner />
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Suspense fallback={null}>
        <DeferredHomeServices />
      </Suspense>
      <Suspense fallback={null}>
        <DeferredAboutSnapshot />
      </Suspense>
      <Suspense fallback={null}>
        <DeferredProcessSection />
      </Suspense>
      <Suspense fallback={null}>
        <DeferredTestimonialsSection />
      </Suspense>
      <Suspense fallback={null}>
        <DeferredCtaBanner />
      </Suspense>
    </>
  )
}
