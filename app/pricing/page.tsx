import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PricingSection } from "@/components/sections/PricingSection";
import { ComparisonTable } from "@/components/sections/ComparisonTable";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata = {
  title: "Pricing Packages: Scholatech Studio",
  description: "One-time payment pricing packages for school websites, portals, and CBT lab software.",
};

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#050816] text-[#F8FAFC]">
      <Navbar />
      <main className="flex-grow pt-20">
        <PricingSection />
        <ComparisonTable />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
