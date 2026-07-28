import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Portfolio } from "@/components/sections/Portfolio";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Flagship School Tech Portfolio | Case Studies & Previews",
  description:
    "Explore flagship school website, result portal, and offline CBT lab software projects engineered by Scholatech Studio.",
  openGraph: {
    title: "School Technology Portfolio | Scholatech Studio",
    description:
      "Explore real-world school websites, result portals, and CBT lab implementations deployed by Scholatech.",
    url: "https://scholatech.com.ng/portfolio",
  },
  alternates: {
    canonical: "https://scholatech.com.ng/portfolio",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://scholatech.com.ng/portfolio/#webpage",
      "url": "https://scholatech.com.ng/portfolio",
      "name": "Scholatech Engineering Portfolio",
      "description": "Showcase of school portals, CBT installations, and custom websites developed for schools in Nigeria."
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
          "name": "Portfolio",
          "item": "https://scholatech.com.ng/portfolio"
        }
      ]
    }
  ]
};

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen bg-bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="flex-grow pt-28 sm:pt-36">
        <Portfolio />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
