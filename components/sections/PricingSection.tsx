"use client";

import { motion } from "framer-motion";
import { Check, ShieldCheck, ArrowRight, Sparkles, Zap, Laptop, Server } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";

const plans = [
  {
    id: "website",
    name: "School Website & Portal",
    badge: "Admissions & Prestige",
    icon: Laptop,
    price: "Starts at ₦150,000 only",
    subtitle: "One-time payment · Owned forever",
    description: "High-converting, mobile-first website with online application forms, termly result checker portal, and parent communication tools.",
    features: [
      "Full source code & domain ownership",
      "Sub-second loading on 3G/4G networks",
      "Online student application & registration",
      "Parent result lookup portal",
      "Zero monthly or annual hosting lock-in",
      "Staff onboarding & technical handoff",
    ],
    highlight: false,
    ctaText: "Contact Us for Website",
    accentColor: "#4169FF",
  },
  {
    id: "management",
    name: "School Management System",
    badge: "Most Popular for Proprietors",
    icon: Zap,
    price: "Starts at ₦300,000 only",
    subtitle: "One-time payment · Owned forever",
    description: "Complete operational suite covering admissions, bursary fee tracking, continuous assessment (CA), automated report cards, and payroll.",
    features: [
      "Everything in School Website package",
      "Automated termly report card generator",
      "Bursary & tuition fee tracking + PDF receipts",
      "Multi-portal access (Admin, Teacher, Parent, Bursar)",
      "Bulk SMS & WhatsApp notification integration",
      "Full database & code transfer to your server",
    ],
    highlight: true,
    ctaText: "Contact Us for Management System",
    accentColor: "#10B981",
  },
  {
    id: "cbt",
    name: "100% Offline CBT Lab",
    badge: "Infrastructure Independence",
    icon: Server,
    price: "Starts at ₦300,000 only",
    subtitle: "One-time payment · Owned forever",
    description: "Bank-grade Computer Based Testing system running 100% offline inside your school computer lab network with zero data costs.",
    features: [
      "Operates 100% offline on your local lab server",
      "JAMB & WAEC exam simulation interface",
      "Instant automatic score grading & aggregation",
      "Zero internet required during examination",
      "Hardware setup & LAN configuration guide",
      "Full source code & local database delivered",
    ],
    highlight: false,
    ctaText: "Contact Us for CBT Lab",
    accentColor: "#5A7DFF",
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#050816] overflow-hidden border-t border-white/[0.06] scroll-mt-20">
      {/* Background ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(65,105,255,0.08)_0%,rgba(5,8,22,0)_70%)] blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0A1020] border border-[#4169FF]/30 text-[#5A7DFF] text-[11px] font-bold tracking-widest uppercase"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
            100% Ownership · Zero Subscription Tax
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-heading font-extrabold text-[#F8FAFC] tracking-tight leading-tight"
          >
            Investment built once. Owned forever.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-[#AAB4C5] leading-relaxed max-w-2xl mx-auto"
          >
            We don&apos;t charge per student or per month. Every package includes custom engineering, full source code delivery, database setup, and staff onboarding.
          </motion.p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  plan.highlight
                    ? "bg-[#0A1020] border-2 border-[#10B981]/50 shadow-[0_0_40px_rgba(16,185,129,0.15)] md:-translate-y-3"
                    : "bg-[#0A1020]/60 border border-white/[0.08] hover:border-white/[0.2]"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#10B981] text-[#050816] text-[11px] font-extrabold tracking-wider uppercase flex items-center gap-1.5 shadow-lg">
                    <Sparkles className="w-3.5 h-3.5" />
                    {plan.badge}
                  </div>
                )}

                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#111827] border border-white/[0.08] flex items-center justify-center text-[#5A7DFF]">
                      <Icon className="w-6 h-6" style={{ color: plan.accentColor }} />
                    </div>
                    {!plan.highlight && (
                      <span className="text-[11px] font-mono text-[#7A879C] uppercase font-bold tracking-wider">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="text-xl font-heading font-extrabold text-[#F8FAFC]">
                      {plan.name}
                    </h3>
                    <div className="text-lg font-heading font-extrabold text-[#10B981] mt-1">
                      {plan.price}
                    </div>
                    <p className="text-xs text-[#7A879C] mt-0.5 font-mono">{plan.subtitle}</p>
                  </div>

                  <p className="text-xs text-[#AAB4C5] leading-relaxed">
                    {plan.description}
                  </p>

                  <div className="pt-4 border-t border-white/[0.06] space-y-3">
                    <p className="text-xs font-bold text-[#F8FAFC] uppercase tracking-wider">
                      Included Deliverables:
                    </p>
                    <ul className="space-y-2.5">
                      {plan.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2.5 text-xs text-[#AAB4C5]">
                          <Check className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-8 mt-6 border-t border-white/[0.06]">
                  <MagneticButton className="w-full">
                    <a
                      href="#contact"
                      className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full font-heading font-bold text-xs transition-all duration-300 ${
                        plan.highlight
                          ? "bg-[#10B981] hover:bg-[#059669] text-[#050816] shadow-[0_0_25px_rgba(16,185,129,0.3)]"
                          : "bg-[#111827] hover:bg-[#1A2338] text-[#F8FAFC] border border-white/[0.1]"
                      }`}
                    >
                      <span>{plan.ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </MagneticButton>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}