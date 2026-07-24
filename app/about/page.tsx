import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FounderTrust } from "@/components/sections/FounderTrust";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata = {
  title: "About Us: Scholatech Studio",
  description: "Learn about Scholatech Studio's engineering mission for Nigerian private schools.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-bg-white">
      <Navbar />
      <main className="flex-grow pt-28 sm:pt-36">
        <FounderTrust />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
