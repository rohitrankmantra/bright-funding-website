import { Plus_Jakarta_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta"
});

export const metadata = {
  title: 'Bright Funding Solution | Fast Business Funding for SMBs',
  description: 'Bright Funding Solution helps small and medium-sized businesses secure fast, reliable funding with clear terms and transparent processes. Apply today for same-day approval.',
  keywords: 'business funding, small business loans, merchant cash advance, working capital, business financing',
  openGraph: {
    title: 'Bright Funding Solution | Fast Business Funding',
    description: 'Get the capital your business needs - quickly, simply, and with full transparency.',
    type: 'website',
  },
    generator: 'v0.app'
}

export const viewport = {
  themeColor: '#6B2D3C',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${plusJakarta.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
