import { Plus_Jakarta_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ReactNode } from 'react';


const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta"
});

export const metadata = {
  title: 'Bright Funding Solution | Fast Business Funding for SMBs',
  description:
    'Bright Funding Solution helps small and medium-sized businesses secure fast, reliable funding with clear terms and transparent processes. Apply today for same-day approval.',
  keywords:
    'business funding, small business loans, merchant cash advance, working capital, business financing',

  openGraph: {
    title: 'Bright Funding Solution | Fast Business Funding',
    description:
      'Get the capital your business needs - quickly, simply, and with full transparency.',
    type: 'website',
    url: 'https://brightfundingsolution.com',
    siteName: 'Bright Funding Solution',
  },

  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'icon',
        url: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        rel: 'icon',
        url: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
    ],
  },
};


export const viewport = {
  themeColor: '#0a2a5d',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${plusJakarta.className} antialiased`}>
        <Header/>
        {children}
        <Footer/>
        <Analytics />
      </body>
    </html>
  )
}
