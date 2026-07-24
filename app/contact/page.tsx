import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { QuoteRequestForm } from "@/components/forms/QuoteRequestForm";
import { ShieldCheck, Mail, MapPin, CheckCircle2 } from "lucide-react";
import { Suspense } from "react";

export const metadata = {
  title: "Request a Quote: Scholatech Studio",
  description: "Get a clear scope and transparent quote for your school website, management system, or CBT lab installation.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#050816] text-[#F8FAFC]">
      <Navbar />
      <main className="flex-grow pt-28 sm:pt-36 pb-20">
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0A1020] border border-[#4169FF]/30 text-[#5A7DFF] text-[11px] font-bold tracking-widest uppercase">
                  Direct Scoping & Proposals
                </div>
                <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-[#F8FAFC] tracking-tight leading-tight">
                  Let&apos;s build your school&apos;s technical future.
                </h1>
                <p className="text-base text-[#AAB4C5] leading-relaxed">
                  Fill out the scoping form to receive a detailed proposal tailored to your student capacity and campus needs — with zero recurring subscription fees.
                </p>
              </div>

              <div className="pt-6 border-t border-white/[0.08] space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#0A1020] border border-white/[0.08] text-[#4169FF] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-heading font-bold text-[#F8FAFC] text-sm block">Direct Email</span>
                    <a href="mailto:agboseakade1@gmail.com" className="text-[#5A7DFF] font-mono text-xs hover:underline">
                      agboseakade1@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#0A1020] border border-white/[0.08] text-[#10B981] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-heading font-bold text-[#F8FAFC] text-sm block">Headquarters</span>
                    <span className="text-[#AAB4C5] text-xs">Lagos & Plateau State, Nigeria</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#0A1020] border border-[#10B981]/30 p-6 rounded-2xl space-y-3">
                <div className="font-heading font-bold text-xs uppercase tracking-wider text-[#10B981] flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" />
                  100% Source Code Ownership Guarantee
                </div>
                <p className="text-xs text-[#AAB4C5] leading-relaxed">
                  Every project delivered includes complete repository access, database setup, and staff onboarding. You will never pay a monthly subscription fee.
                </p>
                <div className="pt-1 flex items-center gap-2 text-[11px] text-[#F8FAFC]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                  <span>Owned outright on day of launch</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <Suspense fallback={<div className="p-12 text-center text-[#7A879C]">Loading scoping form...</div>}>
                <QuoteRequestForm />
              </Suspense>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
