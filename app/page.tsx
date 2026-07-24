import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { OwnershipMoats } from "@/components/sections/OwnershipMoats";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { OfflineCBTDeepDive } from "@/components/sections/OfflineCBTDeepDive";
import { Portfolio } from "@/components/sections/Portfolio";
import { ComparisonTable } from "@/components/sections/ComparisonTable";
import { PricingSection } from "@/components/sections/PricingSection";
import { FounderTrust } from "@/components/sections/FounderTrust";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { SmoothScroll } from "@/components/motion/SmoothScroll";

export const metadata = {
  title: "Scholatech: Own Your School Tech. Even Offline.",
  description:
    "Custom school management portals and 100% offline CBT infrastructure for Nigerian schools. Built once on your hardware, owned forever with zero subscription fees.",
};

export default function HomePage() {
  return (
    <SmoothScroll>
      <div className="flex flex-col min-h-screen bg-[#050816] text-[#F8FAFC] selection:bg-[#4169FF] selection:text-white overflow-x-hidden">
        <Navbar />
        <main className="flex-grow relative z-10">
          <Hero />
          <ProblemSection />
          <OwnershipMoats />
          <HowItWorks />
          <OfflineCBTDeepDive />
          <Portfolio />
          <ComparisonTable />
          <PricingSection />
          <FounderTrust />
          <FAQSection />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}
