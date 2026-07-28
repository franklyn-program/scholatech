import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { Paragraph } from "@/components/ui/Paragraph";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { ManagementSystemShowcase } from "@/components/sections/ManagementSystemShowcase";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "School Management System & Result Portal | Self-Hosted Nigeria Software",
  description:
    "Automated termly result sheets, tuition fee tracking, attendance & parent portal for Nigerian schools. 100% database ownership with zero monthly subscription fees.",
  keywords: [
    "School management system Nigeria",
    "School result checking portal Nigeria",
    "Report sheet generator for schools",
    "Self-hosted school management software",
  ],
  openGraph: {
    title: "School Management System & Result Portal | Scholatech Studio",
    description:
      "Automated result computation, tuition fee management, and parent portal for Nigerian private schools.",
    url: "https://scholatech.com.ng/solutions/management-system",
  },
  alternates: {
    canonical: "https://scholatech.com.ng/solutions/management-system",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "@id": "https://scholatech.com.ng/solutions/management-system/#software",
      "name": "Scholatech School Management Portal",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web, Windows, Cloud, Self-Hosted",
      "offers": {
        "@type": "Offer",
        "price": "250000",
        "priceCurrency": "NGN"
      },
      "description": "All-in-one admissions, attendance, result sheet processing, and fee receipt management portal."
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
          "name": "School Management System",
          "item": "https://scholatech.com.ng/solutions/management-system"
        }
      ]
    }
  ]
};

export default function ManagementSystemSolutionPage() {
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
            <SectionLabel>Product Detail #2</SectionLabel>
            <Heading as="h1" className="text-3xl sm:text-5xl">
              School Management System & Result Portal
            </Heading>
            <Paragraph size="lg">
              Streamline admissions, termly report sheet generation, fee receipt tracking, and parent communication in one intuitive portal.
            </Paragraph>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
              <div className="p-6 rounded-lg bg-bg-soft border border-border-slate space-y-3">
                <h3 className="font-heading font-bold text-lg text-deep-navy">Automated Result Sheets</h3>
                <p className="text-sm text-slate-600">Teachers input scores once and the system calculates grades, averages, and printable termly report cards.</p>
              </div>
              <div className="p-6 rounded-lg bg-bg-soft border border-border-slate space-y-3">
                <h3 className="font-heading font-bold text-lg text-deep-navy">Tuition & Fee Management</h3>
                <p className="text-sm text-slate-600">Track paid fees, generate digital receipts, and notify parents of outstanding balances.</p>
              </div>
            </div>

            <div className="pt-6">
              <Button asChild size="lg">
                <a href="/#contact">
                  Request Management System Scope <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </Section>
        <ManagementSystemShowcase />
      </main>
      <Footer />
    </div>
  );
}
