"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function FinalCTA() {
  return (
    <section id="contact" className="relative py-32 sm:py-40 px-4 sm:px-6 lg:px-8 overflow-hidden scroll-mt-20" style={{ background: "linear-gradient(135deg, #0f1f6e 0%, #1a3aff 40%, #0a1855 100%)" }}>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[900px] h-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08)_0%,rgba(10,24,85,0)_65%)] blur-[80px]" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(16,185,129,0.15)_0%,transparent_60%)] pointer-events-none" />
      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-white text-[11px] font-bold tracking-widest uppercase backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
          Ready to start?
        </motion.div>
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }} className="text-4xl sm:text-6xl lg:text-7xl font-heading font-extrabold text-white tracking-tight leading-[1.06]">
          Ready to own your school&apos;s{" "}
          <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #93c5fd, #10B981)" }}>technical future?</span>
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="text-lg sm:text-xl text-blue-100 max-w-xl mx-auto leading-relaxed">
          Schedule a free infrastructure audit today. No sales pressure, just honest answers.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <MagneticButton>
            <a href="/contact" className="inline-flex items-center gap-2 bg-white hover:bg-blue-50 text-[#1a3aff] font-heading font-bold text-sm px-8 py-4 rounded-full shadow-[0_0_40px_rgba(255,255,255,0.25)] transition-all duration-300 group">
              <span>Request a Demo</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </MagneticButton>
          <MagneticButton>
            <a href="mailto:contact@scholatech.app" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-heading font-semibold text-sm px-8 py-4 rounded-full border border-white/25 backdrop-blur-md transition-all duration-300">
              <Mail className="w-4 h-4 text-blue-200" />
              <span>Talk to an Engineer</span>
            </a>
          </MagneticButton>
        </motion.div>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="text-xs text-blue-200/70 pt-4">
          Based in Lagos, Nigeria. Serving schools across West Africa. Response within 24 hours.
        </motion.p>
      </div>
    </section>
  );
}
