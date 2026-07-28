import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { Paragraph } from "@/components/ui/Paragraph";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "School Technology Solutions | Websites, Portals & CBT",
  description:
    "Explore our 3 flagship school solutions: High-converting school websites, all-in-one management portals, and 100% offline CBT testing labs. Owned permanently.",
  openGraph: {
    title: "School Technology Solutions | Scholatech Studio",
    description:
      "High-converting school websites, report sheet portals, and 100% offline CBT testing labs for Nigerian schools.",
    url: "https://scholatech.com.ng/solutions",
  },
  alternates: {
    canonical: "https://scholatech.com.ng/solutions",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://scholatech.com.ng/solutions/#webpage",
      "url": "https://scholatech.com.ng/solutions",
      "name": "Scholatech School Tech Solutions",
      "description": "Comprehensive tech suite for Nigerian private primary, secondary, and tertiary institutions."
    },
    {
      "@type": "ItemList",
      "name": "Scholatech Product Suite",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "High-Converting School Websites",
          "url": "https://scholatech.com.ng/solutions/websites"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "School Management System & Result Portal",
          "url": "https://scholatech.com.ng/solutions/management-system"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "100% Offline CBT Lab Software",
          "url": "https://scholatech.com.ng/solutions/cbt"
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
          "name": "Solutions",
          "item": "https://scholatech.com.ng/solutions"
        }
      ]
    }
  ]
};

export default function SolutionsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="flex-grow pt-28 sm:pt-36">
        <Section variant="white">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <SectionLabel>Product Suite</SectionLabel>
            <Heading as="h1" className="text-3xl sm:text-5xl">
              Engineering solutions for modern Nigerian schools.
            </Heading>
            <Paragraph size="lg">
              Whether you need a high-converting school website, an all-in-one portal for fees and results, or an offline CBT testing lab, we deploy complete system and database ownership.
            </Paragraph>
          </div>
        </Section>

        <ProductShowcase />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
