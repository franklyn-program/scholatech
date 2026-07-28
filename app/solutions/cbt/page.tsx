import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { Paragraph } from "@/components/ui/Paragraph";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { CBTShowcase } from "@/components/sections/CBTShowcase";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "100% Offline CBT Lab Software & Server Installation | Nigeria",
  description:
    "Computer-based testing software deployed to your computer lab server. Runs 100% offline for secure termly exams and WAEC/JAMB mock tests without internet.",
  keywords: [
    "Offline CBT software for schools Nigeria",
    "WAEC JAMB mock CBT software installation",
    "Computer based test lab setup Lagos Nigeria",
    "School exam CBT software local server",
  ],
  openGraph: {
    title: "100% Offline CBT Lab Software | Scholatech Studio",
    description:
      "Deploy tamper-proof CBT testing software on your local school computer lab server. Zero internet required.",
    url: "https://scholatech.com.ng/solutions/cbt",
  },
  alternates: {
    canonical: "https://scholatech.com.ng/solutions/cbt",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "@id": "https://scholatech.com.ng/solutions/cbt/#software",
      "name": "Scholatech Offline CBT Lab Suite",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Windows Server, Windows 10/11, Linux",
      "offers": {
        "@type": "Offer",
        "price": "150000",
        "priceCurrency": "NGN"
      },
      "description": "Offline local server computer-based testing software with instant objective score calculation."
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
          "name": "Offline CBT Software",
          "item": "https://scholatech.com.ng/solutions/cbt"
        }
      ]
    }
  ]
};

export default function CBTSolutionPage() {
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
            <SectionLabel>Product Detail #3</SectionLabel>
            <Heading as="h1" className="text-3xl sm:text-5xl">
              CBT Lab Software & Server Installation
            </Heading>
            <Paragraph size="lg">
              Equip your school's computer lab with tamper-proof CBT testing software that runs smoothly offline without relying on internet connectivity.
            </Paragraph>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
              <div className="p-6 rounded-lg bg-bg-soft border border-border-slate space-y-3">
                <h3 className="font-heading font-bold text-lg text-deep-navy">Offline Local Server</h3>
                <p className="text-sm text-slate-600">Deploys directly on your local computer lab network so exams continue even during internet outages.</p>
              </div>
              <div className="p-6 rounded-lg bg-bg-soft border border-border-slate space-y-3">
                <h3 className="font-heading font-bold text-lg text-deep-navy">Instant Automated Grading</h3>
                <p className="text-sm text-slate-600">Scores objective tests instantly, generating detailed breakdown analytics per class and subject.</p>
              </div>
            </div>

            <div className="pt-6">
              <Button asChild size="lg">
                <a href="/#contact">
                  Request CBT Lab Scope <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </Section>
        <CBTShowcase />
      </main>
      <Footer />
    </div>
  );
}
