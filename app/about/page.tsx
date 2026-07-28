import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FounderTrust } from "@/components/sections/FounderTrust";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "About Us | Engineering Mission for Nigerian Private Schools",
  description:
    "Learn about Scholatech Studio's engineering mission: delivering zero-subscription school portals, websites, and offline CBT software across Nigeria.",
  openGraph: {
    title: "About Us | Scholatech Studio",
    description:
      "Engineering zero-subscription school portals, websites, and offline CBT software for Nigerian private schools.",
    url: "https://scholatech.com.ng/about",
  },
  alternates: {
    canonical: "https://scholatech.com.ng/about",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://scholatech.com.ng/about/#webpage",
      "url": "https://scholatech.com.ng/about",
      "name": "About Scholatech Studio",
      "description": "Scholatech Studio is an EdTech engineering firm focused on self-hosted school management software and CBT lab infrastructure in Nigeria."
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
          "name": "About Us",
          "item": "https://scholatech.com.ng/about"
        }
      ]
    }
  ]
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="flex-grow pt-28 sm:pt-36">
        <FounderTrust />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
