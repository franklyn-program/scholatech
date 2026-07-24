"use client";

import { CreativePricing, PricingTier } from "@/components/ui/creative-pricing";
import { Laptop, Zap, Server } from "lucide-react";

const scholatechTiers: PricingTier[] = [
  {
    name: "School Website & Portal",
    icon: <Laptop className="w-6 h-6 text-[#4169FF]" />,
    price: "Starts at ₦150,000 only",
    description: "High-converting, mobile-first website with online application forms and parent result checker portal.",
    color: "blue",
    features: [
      "Full source code & domain ownership",
      "Sub-second loading on 3G/4G networks",
      "Online student application & registration",
      "Parent result lookup portal",
      "Zero monthly or annual hosting lock-in",
      "Staff onboarding & technical handoff",
    ],
    ctaText: "Contact Us for Website",
    href: "#contact",
  },
  {
    name: "School Management System",
    icon: <Zap className="w-6 h-6 text-[#10B981]" />,
    price: "Starts at ₦300,000 only",
    description: "Complete operational suite covering admissions, bursary fee tracking, continuous assessment (CA), and report cards.",
    color: "emerald",
    features: [
      "Everything in School Website package",
      "Automated termly report card generator",
      "Bursary & tuition fee tracking + PDF receipts",
      "Multi-portal access (Admin, Teacher, Parent, Bursar)",
      "Bulk SMS & WhatsApp notification integration",
      "Full database & code transfer to your server",
    ],
    popular: true,
    ctaText: "Contact Us for Management System",
    href: "#contact",
  },
  {
    name: "100% Offline CBT Lab",
    icon: <Server className="w-6 h-6 text-[#5A7DFF]" />,
    price: "Starts at ₦300,000 only",
    description: "Bank-grade Computer Based Testing system running 100% offline inside your school computer lab network.",
    color: "indigo",
    features: [
      "Operates 100% offline on your local lab server",
      "JAMB & WAEC exam simulation interface",
      "Instant automatic score grading & aggregation",
      "Zero internet required during examination",
      "Hardware setup & LAN configuration guide",
      "Full source code & local database delivered",
    ],
    ctaText: "Contact Us for CBT Lab",
    href: "#contact",
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#0E1B38] overflow-hidden border-t border-white/10 scroll-mt-20">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.12)_0%,rgba(14,27,56,0)_70%)] blur-[90px] pointer-events-none" />
      
      <div className="relative z-10">
        <CreativePricing tiers={scholatechTiers} />
      </div>
    </section>
  );
}