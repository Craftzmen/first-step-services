import { Outfit } from "next/font/google"
import type { Metadata } from "next"
import { Suspense } from "react"

import "./globals.css"
import { Navbar } from "@/components/layout/navbar"
import { cn } from "@/lib/utils"

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  adjustFontFallback: true,
})

export const metadata: Metadata = {
  title: 'First Step Services | E-commerce Solutions Agency',
  description:
    'A senior e-commerce solutions agency. We design, build, migrate, and grow online stores on Shopify, WooCommerce, BigCommerce, and headless stacks.',
  keywords: [
    'ecommerce agency',
    'shopify agency',
    'shopify plus partner',
    'woocommerce development',
    'platform migration',
    'headless commerce',
    'conversion optimization',
    'ecommerce design and build',
  ],
  openGraph: {
    title: 'First Step Services — E-commerce Solutions Agency',
    description:
      'Store builds, replatforming, conversion optimization, integrations, and ongoing growth — end to end.',
    url: '/',
    type: 'website',
  },
  twitter: {
    title: 'First Step Services — E-commerce Solutions',
    description:
      'We design and build the stores that grow brands.',
  },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
}

async function SiteFooter() {
  const { Footer } = await import("@/components/layout/footer")
  return <Footer />
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={cn("antialiased", outfit.variable, "font-sans")}>
      <body>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Suspense fallback={<footer className="min-h-40 bg-navy" aria-hidden />}>
          <SiteFooter />
        </Suspense>
      </body>
    </html>
  )
}
