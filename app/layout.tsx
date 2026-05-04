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
  title: 'First Step Services | Expert Auto Repair & Financing in Stevens Point, WI',
  description:
    'Quality auto repair, maintenance, and financing services in Stevens Point, WI. Expert mechanics, transparent pricing, and convenient doorstep service. Trusted by 500+ car owners.',
  keywords: [
    'auto repair Stevens Point',
    'car maintenance WI',
    'car financing Stevens Point',
    'expert mechanics',
    'auto diagnostic tools',
    'car repair service',
    'affordable auto deals',
    'professional car care',
  ],
  openGraph: {
    title: 'First Step Services - Expert Auto Repair & Financing in Stevens Point',
    description:
      'Quality auto repair, maintenance, and financing. Step into the future of automotive care where technology meets expertise.',
    url: '/',
    type: 'website',
  },
  twitter: {
    title: 'First Step Services - Expert Auto Care',
    description:
      'Step into the future of automotive care with expert repair and financing technology.',
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
