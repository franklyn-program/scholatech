import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Portfolio } from "@/components/sections/Portfolio";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata = {
  title: "Portfolio: Scholatech Studio",
  description: "Explore flagship school website, portal, and CBT projects engineered by Scholatech Studio.",
};

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen bg-bg-white">
      <Navbar />
      <main className="flex-grow pt-28 sm:pt-36">
        <Portfolio />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
