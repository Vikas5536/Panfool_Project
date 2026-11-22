import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { WhatsAppFloatingWidget } from "@/components/WhatsAppFloatingWidget";
import { SITE_CONFIG } from "@/data/siteContent";

export const metadata: Metadata = {
  title: "Pankaj Foolwani — Entrepreneur & Strategic Business Consultant",
  description:
    "Official digital portal of Pankaj Foolwani. Providing strategic business advisory, enterprise growth consulting, premier documentation services (Perfect Documents), and bespoke travel management (Mr & Miss Perfect Trips Pvt. Ltd.) across Zirakpur, Chandigarh, Panchkula, Delhi & Jaipur.",
  keywords: [
    "Pankaj Foolwani",
    "Business Consultant Zirakpur",
    "Entrepreneur in India",
    "Perfect Documents",
    "Mr And Miss Perfect Trips Private Limited",
    "Digital Seva Kendra",
    "Passport Agent Chandigarh",
    "OCI Application Assistance",
    "Tatkal Passport Zirakpur",
    "Business Development Strategist",
    "Luxury Travel Consultant",
  ],
  authors: [{ name: "Pankaj Foolwani" }],
  creator: "Pankaj Foolwani",
  publisher: "Foolwani Group",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect x='4' y='4' width='56' height='56' rx='12' fill='%230f172a' stroke='%23d4af37' stroke-width='3'/%3E%3Ctext x='32' y='42' font-family='Georgia, serif' font-size='24' font-weight='bold' fill='%23d4af37' text-anchor='middle'%3EPF%3C/text%3E%3C/svg%3E",
  },
  openGraph: {
    title: "Pankaj Foolwani — Entrepreneur & Strategic Business Consultant",
    description:
      "Turning Vision Into Reality. Building Trust. Creating Lasting Impact. Strategic business consulting, precision documentation, and bespoke travel.",
    url: "https://pankajfoolwani.com",
    siteName: "Pankaj Foolwani",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pankaj Foolwani — Entrepreneur & Strategic Business Consultant",
    description:
      "Empowering Businesses. Enabling Dreams. Strategic business consulting, documentation, and luxury travel.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLdPerson = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Pankaj Foolwani",
    jobTitle: "Entrepreneur | Business Consultant | Business Development Strategist",
    description:
      "Entrepreneur and business consultant focused on simplifying complex services through strategic business solutions, professional documentation assistance, and personalised travel planning.",
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    areaServed: ["Zirakpur", "Chandigarh", "Panchkula", "Mohali", "Delhi", "Gurgaon", "Jaipur"],
    knowsAbout: [
      "Strategic Business Consulting",
      "Corporate Structuring",
      "Documentation & OCI Services",
      "Passport Assistance",
      "Luxury Travel Planning",
      "Business Development",
    ],
  };

  const jsonLdBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Mr And Miss Perfect Trips Private Limited",
    alternateName: "Perfect Documents / Digital Seva Kendra",
    description:
      "Professional documentation, government services, enterprise consulting, and bespoke travel planning — Zirakpur & Chandigarh Tricity.",
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Shop No. 51, Panchkula Complex, Krishna Enclave, Dhakoli",
      addressLocality: "Zirakpur",
      addressRegion: "Punjab",
      postalCode: "160104",
      addressCountry: "IN",
    },
    openingHours: "Mo-Su 10:30-21:00",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "38",
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBusiness) }}
        />
      </head>
      <body className="bg-slate-50 dark:bg-[#0a0f1d] text-slate-900 dark:text-slate-100 min-h-screen flex flex-col antialiased selection:bg-gold-400 selection:text-slate-950 transition-colors duration-300">
        <ThemeProvider>
          <LanguageProvider>
            {children}
            <WhatsAppFloatingWidget />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
