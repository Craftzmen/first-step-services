import type { Metadata } from "next"
import { Suspense } from "react"
import { Hero } from "@/components/home/hero"

export const metadata: Metadata = {
  title: 'First Step Services | Premium Auto Care in Stevens Point, WI',
  description:
    'Experience the best in auto repair and maintenance. At First Step Services, we combine expertise with transparency. From engine diagnostics to brake repair, we keep your car running at its peak.',
  keywords: [
    'Stevens Point car care',
    'expert auto repair',
    'mechanic service',
    'engine diagnostic',
    'brake repair Stevens Point',
    'oil change service',
    'car maintenance specialists',
    'reliable auto service',
  ],
  openGraph: {
    title: 'First Step Services - Your Trusted Auto Care Partner',
    description:
      'Step into the future of automotive care. Our experts in Stevens Point provide top-tier repair and maintenance.',
    url: '/',
    type: 'website',
  },
  twitter: {
    title: 'First Step Services - Premium Auto Care',
    description:
      'Where technology meets expertise in automotive repair.',
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
