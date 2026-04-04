import { Inter } from "next/font/google"
import type { Metadata } from "next"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { cn } from "@/lib/utils"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: 'Prime Auto Deals | Expert Auto Repair & Financing in Brooklyn, NY',
  description:
    'Quality auto repair, maintenance, and financing services in Brooklyn, NY. Expert mechanics, transparent pricing, and convenient doorstep service. Trusted by 500+ car owners.',
  keywords: [
    'auto repair Brooklyn',
    'car maintenance NY',
    'car financing Brooklyn',
    'expert mechanics',
    'auto diagnostic tools',
    'car repair service',
    'affordable auto deals',
    'professional car care',
  ],
  openGraph: {
    title: 'Prime Auto Deals - Expert Auto Repair & Financing in Brooklyn',
    description:
      'Quality auto repair, maintenance, and financing. Step into the future of automotive care where technology meets expertise.',
    url: '/',
    type: 'website',
  },
  twitter: {
    title: 'Prime Auto Deals - Expert Auto Care',
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("antialiased", inter.variable, "font-sans")}>
      <body>
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
