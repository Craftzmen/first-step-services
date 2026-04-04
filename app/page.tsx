import type { Metadata } from "next"
import { Hero } from "@/components/home/hero"
import { HomeServices } from "@/components/home/services-section"
import { AboutSnapshot } from "@/components/home/about-snapshot"
import { ProcessSection } from "@/components/home/process-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { CtaBanner } from "@/components/home/cta-banner"

export const metadata: Metadata = {
  title: 'Prime Auto Deals | Premium Auto Care in Brooklyn, NY',
  description:
    'Experience the best in auto repair and maintenance. At Prime Auto Deals, we combine expertise with transparency. From engine diagnostics to brake repair, we keep your car running at its peak.',
  keywords: [
    'Brooklyn car care',
    'expert auto repair',
    'mechanic service',
    'engine diagnostic',
    'brake repair Brooklyn',
    'oil change service',
    'car maintenance specialists',
    'reliable car deals',
  ],
  openGraph: {
    title: 'Prime Auto Deals - Your Trusted Auto Care Partner',
    description:
      'Step into the future of automotive care. Our experts in Brooklyn provide top-tier repair and maintenance.',
    url: '/',
    type: 'website',
  },
  twitter: {
    title: 'Prime Auto Deals - Premium Auto Care',
    description:
      'Where technology meets expertise in automotive repair.',
  },
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <HomeServices />
      <AboutSnapshot />
      <ProcessSection />
      <TestimonialsSection />
      <CtaBanner />
    </>
  )
}
