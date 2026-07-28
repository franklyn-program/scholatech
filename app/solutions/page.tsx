import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { Paragraph } from "@/components/ui/Paragraph";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata = {
  title: "Solutions & Products: Scholatech Studio",
  description: "Explore our 3 core products: School Websites, Management Portals, and CBT Lab Software. Built once, owned permanently.",
};

export default function SolutionsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-bg-white">
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
