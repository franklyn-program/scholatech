import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PricingSection } from "@/components/sections/PricingSection";
import { ComparisonTable } from "@/components/sections/ComparisonTable";

export const metadata: Metadata = {
  title: "School Technology Pricing Packages | One-Time Payment, Zero Subscriptions",
  description:
    "Transparent one-time pricing for Nigerian school websites (₦150k), CBT lab software (₦150k), and full school portals (₦250k). 100% permanent system ownership.",
  keywords: [
    "School management system cost Nigeria",
    "School portal developer price Lagos",
    "CBT software pricing for schools Nigeria",
    "One-time payment school portal",
  ],
  openGraph: {
    title: "School Technology Pricing Packages | Scholatech Studio",
    description:
      "Transparent one-time payment pricing packages for school websites, portals, and CBT lab software in Nigeria.",
    url: "https://scholatech.com.ng/pricing",
  },
  alternates: {
    canonical: "https://scholatech.com.ng/pricing",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "OfferCatalog",
      "@id": "https://scholatech.com.ng/pricing/#catalog",
      "name": "Scholatech Studio Product Packages",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "High-Converting School Website Package",
          "price": "150000",
          "priceCurrency": "NGN",
          "description": "Custom mobile-first school website with admissions form and 100% domain & codebase ownership."
        },
        {
          "@type": "Offer",
          "name": "100% Offline CBT Testing Lab Suite",
          "price": "150000",
          "priceCurrency": "NGN",
          "description": "Local computer lab server CBT software installation with automatic objective scoring."
        },
        {
          "@type": "Offer",
          "name": "School Portal & Management System",
          "price": "250000",
          "priceCurrency": "NGN",
          "description": "Automated result sheet processing, fee receipts tracking, and parent portal."
        },
        {
          "@type": "Offer",
          "name": "Enterprise Total Campus Infrastructure",
          "price": "450000",
          "priceCurrency": "NGN",
          "description": "Combined website, school portal, offline CBT lab, and staff onboarding."
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://scholatech.com.ng/pricing/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Are there any hidden monthly or yearly subscription fees?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Scholatech operates on a strict single deployment fee model. You pay once and own your system, code, and database permanently."
          }
        },
        {
          "@type": "Question",
          "name": "Who owns the school student database?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Your school retains 100% ownership and full administrative control over your database. We never lock you into proprietary vendor servers."
          }
        },
        {
          "@type": "Question",
          "name": "Does the CBT software work without internet?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Our CBT testing software is installed on your local computer lab network server, operating seamlessly offline without internet connectivity."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://scholatech.com.ng"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Pricing",
          "item": "https://scholatech.com.ng/pricing"
        }
      ]
    }
  ]
};

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#050816] text-[#F8FAFC]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="flex-grow pt-20">
        <PricingSection />
        <ComparisonTable />
      </main>
      <Footer />
    </div>
  );
}
