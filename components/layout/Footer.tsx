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
                width={220}
                height={55}
                className="h-7 sm:h-9 md:h-10 w-auto max-w-[150px] sm:max-w-[220px] object-contain filter brightness-0 invert"
                priority
              />
            </Link>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Scholatech is a premier EdTech studio building school management portals, websites, and offline CBT suites with 100% system & database ownership.
            </p>

            <div className="space-y-3 pt-2 text-xs">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#162347] border border-white/15 text-[#60A5FA] flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[#F8FAFC] font-semibold block">Direct Email</span>
                  <a href="mailto:contact@scholatech.com.ng" className="text-[#60A5FA] font-mono hover:underline">
                    contact@scholatech.com.ng
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#162347] border border-white/15 text-[#25D366] flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662a11.87 11.87 0 005.71 1.454h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.488-8.413z" />
                  </svg>
                </div>
                <div>
                  <span className="text-[#F8FAFC] font-semibold block">WhatsApp & Phone</span>
                  <a
                    href="https://wa.me/2348129973621?text=Hello%20Scholatech%2C%20I%20would%20like%20to%20inquire%20about%20your%20school%20management%20portal%2C%20website%2C%20or%20offline%20CBT%20solutions."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#25D366] font-mono font-bold hover:underline"
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
                  100% Owned
                </div>
              </div>

              <QuoteRequestForm />
            </div>
          </div>

        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A879C]">
          <p>© {new Date().getFullYear()} Scholatech EdTech Studio. Built once, owned permanently.</p>
          <p>Lagos & Plateau State, Nigeria</p>
        </div>
      </div>
    </footer>
  );
}