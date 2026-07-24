import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { Paragraph } from "@/components/ui/Paragraph";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { CBTShowcase } from "@/components/sections/CBTShowcase";
import { Laptop, ArrowRight } from "lucide-react";

export const metadata = {
  title: "CBT Installations: Scholatech Studio",
  description: "Computer-based testing software deployed to your computer lab server. Runs offline for secure termly exams and mock tests.",
};

export default function CBTSolutionPage() {
  return (
    <div className="flex flex-col min-h-screen bg-bg-white">
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
