import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ScholatechAIChatbot } from "@/components/ai/ScholatechAIChatbot";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://scholatech.com.ng"),
  title: {
    default: "Scholatech — Premium School Tech | Built Once. Owned Permanently.",
    template: "%s | Scholatech",
  },
  description:
    "We build school websites, management portals, and 100% offline CBT installations for Nigerian schools. Pay once, 100% system & database ownership, zero subscriptions.",
  keywords: [
    "Nigerian school website developer",
    "School management system Nigeria",
    "Offline CBT software for schools",
    "WAEC JAMB mock CBT lab installation",
    "One-time payment school portal",
    "Self-hosted school management software",
    "Scholatech EdTech Studio",
  ],
  authors: [{ name: "Scholatech Studio", url: "https://scholatech.com.ng" }],
  creator: "Scholatech Studio",
  publisher: "Scholatech Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/images/logo/logo.png", type: "image/png" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/images/logo/logo.png",
    apple: "/images/logo/logo.png",
  },
  openGraph: {
    title: "Scholatech — Premium School Tech | Built Once. Owned Permanently.",
    description:
      "Custom school management portals and 100% offline CBT infrastructure for Nigerian schools. Built once on your hardware, owned permanently.",
    url: "https://scholatech.com.ng",
    siteName: "Scholatech Studio",
    images: [
      {
        url: "/images/hero/hero-stitch.png",
        width: 1200,
        height: 630,
        alt: "Scholatech School Tech Infrastructure",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scholatech — Premium School Tech | Built Once. Owned Permanently.",
    description:
      "Custom school management portals and 100% offline CBT infrastructure for Nigerian schools. Pay once, owned permanently.",
    images: ["/images/hero/hero-stitch.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://scholatech.com.ng",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://scholatech.com.ng/#organization",
      "name": "Scholatech Studio",
      "url": "https://scholatech.com.ng",
      "logo": "https://scholatech.com.ng/images/logo/logo.png",
      "description": "EdTech studio building school management portals, websites, and offline CBT suites with 100% system & database ownership.",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "NG",
        "addressRegion": "Lagos & Plateau State"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+234-812-997-3621",
        "contactType": "customer service",
        "email": "contact@scholatech.com.ng",
        "availableLanguage": "English"
      }
    },
    {
      "@type": "SoftwareApplication",
      "name": "Scholatech Offline CBT & School Management Portal",
      "operatingSystem": "Windows, Linux, Web",
      "applicationCategory": "EducationalApplication",
      "offers": {
        "@type": "Offer",
        "price": "150000",
        "priceCurrency": "NGN"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#0E1B38] text-[#F8FAFC] antialiased flex flex-col min-h-screen">
        {children}
        <ScholatechAIChatbot />
      </body>
    </html>
  );
}
