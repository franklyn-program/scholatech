import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-[#050816] text-[#F8FAFC]">
      <Navbar />
      <main className="flex-grow flex items-center justify-center pt-32 pb-20 px-4">
        <div className="max-w-md mx-auto text-center space-y-6">
          <span className="text-6xl font-extrabold font-heading text-[#4169FF]">404</span>
          <h1 className="text-2xl font-bold text-[#F8FAFC]">Page Not Found</h1>
          <p className="text-sm text-[#AAB4C5]">
            The page you are looking for does not exist or has been moved.
          </p>
          <div className="pt-2">
            <Button asChild>
              <Link href="/">Return Home</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

