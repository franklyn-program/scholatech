"use client";

import Image from "next/image";
import Link from "next/link";
import { QuoteRequestForm } from "@/components/forms/QuoteRequestForm";
import { Mail, MapPin, ShieldCheck, MessageSquare } from "lucide-react";

export function Footer() {
  const footerLinks = [
    { name: "Home", href: "#hero" },
    { name: "Solutions", href: "#solutions" },
    { name: "CBT Infrastructure", href: "#offline-cbt" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative bg-[#0E1B38] text-[#AAB4C5] py-14 px-4 sm:px-6 lg:px-8 overflow-hidden z-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Top Split Row: Left Brand & Contact Info + Right Compact Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Edge: Small Logo & Brand Info */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo/logo.png"
                alt="Scholatech Logo"
                width={150}
                height={38}
                className="h-8 w-auto object-contain filter brightness-0 invert"
                priority
              />
            </Link>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Scholatech is a premier EdTech studio building school management portals, websites, and offline CBT suites with 100% source code ownership.
            </p>

            <div className="space-y-3 pt-2 text-xs">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#162347] border border-white/15 text-[#60A5FA] flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[#F8FAFC] font-semibold block">Direct Email</span>
                  <a href="mailto:agboseakade1@gmail.com" className="text-[#60A5FA] font-mono hover:underline">
                    agboseakade1@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#162347] border border-white/15 text-[#10B981] flex items-center justify-center shrink-0">
                  <MessageSquare className="w-4 h-4 text-[#10B981]" />
                </div>
                <div>
                  <span className="text-[#F8FAFC] font-semibold block">WhatsApp & Phone</span>
                  <a
                    href="https://wa.me/2348129973621?text=Hello%20Scholatech%2C%20I%20would%20like%20to%20inquire%20about%20your%20school%20management%20portal%2C%20website%2C%20or%20offline%20CBT%20solutions."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#10B981] font-mono font-bold hover:underline"
                  >
                    08129973621 (+234 812 997 3621)
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#162347] border border-white/15 text-[#60A5FA] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[#F8FAFC] font-semibold block">Headquarters</span>
                  <span className="text-slate-300">Lagos & Plateau State, Nigeria</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="pt-4 border-t border-white/10 space-y-2">
              <h4 className="text-[11px] font-heading font-bold uppercase tracking-widest text-[#F8FAFC]">
                Navigation Links
              </h4>
              <ul className="flex flex-wrap gap-x-6 gap-y-2 text-xs">
                {footerLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-slate-300 hover:text-[#60A5FA] transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Edge: Embedded Footer Contact Card */}
          <div className="lg:col-span-7">
            <div className="bg-[#162347]/90 border border-white/15 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl backdrop-blur-xl">
              <div className="pb-3 border-b border-white/10 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-heading font-extrabold text-[#F8FAFC]">
                    Contact Us
                  </h3>
                  <p className="text-xs text-[#AAB4C5] mt-0.5">
                    Send us a message and we will respond within 24 hours.
                  </p>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#10B981]/10 text-[#10B981] text-[11px] font-mono font-bold border border-[#10B981]/20">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Code Ownership
                </div>
              </div>

              <QuoteRequestForm />
            </div>
          </div>

        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A879C]">
          <p>© {new Date().getFullYear()} Scholatech EdTech Studio. Built once, owned forever.</p>
          <p>Lagos & Plateau State, Nigeria</p>
        </div>
      </div>
    </footer>
  );
}