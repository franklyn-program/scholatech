import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { Paragraph } from "@/components/ui/Paragraph";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { WebsiteShowcase } from "@/components/sections/WebsiteShowcase";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "School Website Development in Nigeria | High-Converting Admissions Sites",
  description:
    "Fast, mobile-responsive school websites built for prospective Nigerian parents & online admissions. 100% custom domain, zero monthly renewal fees.",
  keywords: [
    "School website development Nigeria",
    "School website designer Lagos",
    "Best school website builder Nigeria",
    "Private school admission website design",
  ],
  openGraph: {
    title: "School Website Development | Scholatech Studio",
    description:
      "Fast, mobile-responsive school websites built to capture prospective parent admission leads in Nigeria.",
    url: "https://scholatech.com.ng/solutions/websites",
  },
  alternates: {
    canonical: "https://scholatech.com.ng/solutions/websites",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://scholatech.com.ng/solutions/websites/#service",
      "name": "School Website Development",
      "serviceType": "Web Design & Development",
      "provider": {
        "@id": "https://scholatech.com.ng/#organization"
      },
      "areaServed": "Nigeria",
      "description": "High-converting, mobile-first websites engineered for Nigerian primary and secondary schools."
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
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "School Websites",
          "item": "https://scholatech.com.ng/solutions/websites"
        }
      ]
    }
  ]
};

export default function WebsiteSolutionPage() {
  return (
    <div className="flex flex-col min-h-screen bg-bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="flex-grow pt-28 sm:pt-36 pb-20">
        <Section variant="white">
          <div className="max-w-4xl mx-auto space-y-8">
            <SectionLabel>Product Detail #1</SectionLabel>
            <Heading as="h1" className="text-3xl sm:text-5xl">
              High-Converting School Websites
            </Heading>
            <Paragraph size="lg">
              Built specifically for how prospective parents and families search for schools in Nigeria. Fast, mobile-responsive, and equipped with online admission request forms.
            </Paragraph>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
              <div className="p-6 rounded-lg bg-bg-soft border border-border-slate space-y-3">
                <h3 className="font-heading font-bold text-lg text-deep-navy">Online Admissions Engine</h3>
                <p className="text-sm text-slate-600">Parents can submit admission inquiries directly online, routing leads to your administrative team.</p>
              </div>
              <div className="p-6 rounded-lg bg-bg-soft border border-border-slate space-y-3">
                <h3 className="font-heading font-bold text-lg text-deep-navy">Mobile-First Performance</h3>
                <p className="text-sm text-slate-600">Optimized for smartphones and 3G/4G networks so parents get instant page loading times.</p>
              </div>
            </div>

            <div className="pt-6">
              <Button asChild size="lg">
                <a href="/#contact">
                  Request Website Scope & Quote <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </Section>
        <WebsiteShowcase />
      </main>
      <Footer />
    </div>
  );
}
