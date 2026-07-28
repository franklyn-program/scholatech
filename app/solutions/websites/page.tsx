import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { Paragraph } from "@/components/ui/Paragraph";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { WebsiteShowcase } from "@/components/sections/WebsiteShowcase";
import { CheckCircle2, Globe, ArrowRight } from "lucide-react";

export const metadata = {
  title: "School Websites: Scholatech Studio",
  description: "Fast, mobile-friendly school websites built for prospective parents and online admission leads. Full domain & system ownership included.",
};

export default function WebsiteSolutionPage() {
  return (
    <div className="flex flex-col min-h-screen bg-bg-white">
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
