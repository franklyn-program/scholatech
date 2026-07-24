"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck, Heart } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Footer() {
  const footerLinks = [
    { name: "Home", href: "#" },
    { name: "Solutions", href: "#solutions" },
    { name: "CBT Infrastructure", href: "#offline-cbt" },
    { name: "Keynote Case Studies", href: "#case-studies" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative bg-[#050816] text-[#AAB4C5] pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden z-20 border-t border-white/[0.06]">
      {/* Background Soft Radial Glow behind Watermark Logo */}
      <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-[85vw] max-w-[1200px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(65,105,255,0.14)_0%,rgba(90,125,255,0.04)_50%,rgba(5,8,22,0)_75%)] blur-[90px] pointer-events-none" />

      {/* Hero Element: Giant Fluid Watermark Scholatech Logo */}
      <div className="relative w-full max-w-7xl mx-auto flex justify-center items-center py-12 pointer-events-none select-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-[clamp(300px,85vw,1300px)] aspect-[4/1] flex items-center justify-center opacity-10 filter brightness-200 drop-shadow-[0_0_50px_rgba(65,105,255,0.4)]"
        >
          <Image
            src="/images/logo/logo.png"
            alt="Scholatech Watermark"
            fill
            className="object-contain object-center filter brightness-0 invert"
            priority
          />
        </motion.div>
      </div>

      {/* Layered Floating Footer Content (Sits above Watermark via Z-Index) */}
      <div className="relative z-10 max-w-7xl mx-auto space-y-16">
        {/* Top CTA Banner inside Footer */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 p-8 sm:p-12 rounded-3xl bg-[#0A1020]/90 border border-white/[0.06] backdrop-blur-2xl shadow-2xl">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#4169FF] uppercase bg-[#4169FF]/10 px-3 py-1 rounded-full border border-[#4169FF]/20">
              <ShieldCheck className="w-4 h-4 text-[#10B981]" />
              <span>Full Code Ownership Guaranteed</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#F8FAFC]">
              Ready to upgrade your school&apos;s technical future?
            </h3>
            <p className="text-sm text-[#AAB4C5]">
              Get a custom proposal and quote for your school portal or CBT setup. No monthly fees.
            </p>
          </div>

          <MagneticButton>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#4169FF] hover:bg-[#6D8DFF] text-white font-heading font-bold text-xs tracking-wider px-8 py-4 rounded-full shadow-[0_0_30px_rgba(65,105,255,0.4)] transition-all duration-300 group"
            >
              <span>Get a custom quote</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </MagneticButton>
        </div>

        {/* Navigation & Location Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pt-6">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo/logo.png"
                alt="Scholatech Logo"
                width={180}
                height={45}
                className="h-9 w-auto object-contain filter brightness-0 invert drop-shadow-[0_0_12px_rgba(65,105,255,0.4)]"
              />
            </Link>
            <p className="text-xs text-[#AAB4C5] leading-relaxed max-w-sm">
              Scholatech is a premier EdTech studio building school management portals, websites, and offline CBT suites with 100% source code ownership.
            </p>
            <div className="text-xs font-semibold text-[#7A879C]">
              <span>Operating Locations: </span>
              <span className="text-[#F8FAFC]">Lagos, Nigeria · Accra, Ghana</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-heading font-bold uppercase tracking-widest text-[#F8FAFC]">
              Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-xs">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#AAB4C5] hover:text-[#4169FF] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-3 space-y-3 text-xs">
            <h4 className="text-xs font-heading font-bold uppercase tracking-widest text-[#F8FAFC]">
              Direct Inquiries
            </h4>
            <p className="text-[#AAB4C5]">
              Email: <a href="mailto:hello@scholatech.app" className="text-[#4169FF] hover:underline">hello@scholatech.app</a>
            </p>
            <p className="text-[#AAB4C5]">
              Response SLA: Within 24 Hours
            </p>
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A879C]">
          <p>© {new Date().getFullYear()} Scholatech EdTech Studio. Built once, owned forever.</p>
          <div className="flex items-center gap-1">
            <span>Crafted for high-performing schools</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
