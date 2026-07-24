import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { Paragraph } from "@/components/ui/Paragraph";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { ManagementSystemShowcase } from "@/components/sections/ManagementSystemShowcase";
import { Users, ArrowRight } from "lucide-react";

export const metadata = {
  title: "School Management System: Scholatech Studio",
  description: "Admissions, fee tracking, attendance, and termly result computation portal for Nigerian private schools.",
};

export default function ManagementSystemSolutionPage() {
  return (
    <div className="flex flex-col min-h-screen bg-bg-white">
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
