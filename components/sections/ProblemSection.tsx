"use client";

import { motion } from "framer-motion";
import { PhoneCall, FileSpreadsheet, Clock, AlertTriangle, ArrowRight } from "lucide-react";

export function ProblemSection() {
  const painPoints = [
    {
      icon: PhoneCall,
      title: "Cluttered Communication",
      description: "Parents can't find basic information without calling the office constantly.",
    },
    {
      icon: FileSpreadsheet,
      title: "Manual Paperwork",
      description: "Admissions and student records are still handled on paper or scattered spreadsheets.",
    },
    {
      icon: Clock,
      title: "Slow Result Releases",
      description: "Result computation and report card release is slow and stressful every term.",
    },
    {
      icon: AlertTriangle,
      title: "Wasted Staff Time",
      description: "Staff waste hours on tedious administrative tasks a system could handle in minutes.",
    },
  ];

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#050816] overflow-hidden z-20 border-t border-white/[0.06]">
      {/* Background Radial Ambient */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(65,105,255,0.08)_0%,rgba(5,8,22,0)_70%)] blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0A1020] border border-white/[0.06] text-[#5A7DFF] text-[11px] font-bold tracking-widest uppercase"
          >
            Why Schools Switch
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-heading font-extrabold text-[#F8FAFC] tracking-tight leading-tight"
          >
            Running a school shouldn&apos;t mean fighting your software.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-[#AAB4C5]"
          >
            Most platforms lock you into monthly fees while creating operational bottlenecks.
          </motion.p>
        </div>

        {/* 4 Pain Point Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {painPoints.map((point, idx) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="group p-8 rounded-2xl bg-[#111827]/80 border border-white/[0.06] hover:border-[#4169FF]/40 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#0A1020] border border-white/[0.06] flex items-center justify-center text-[#5A7DFF] group-hover:text-white group-hover:bg-[#4169FF] transition-all duration-300 mb-6">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-heading font-bold text-[#F8FAFC] mb-3 group-hover:text-[#5A7DFF] transition-colors">
                    {point.title}
                  </h3>

                  <p className="text-sm text-[#AAB4C5] leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Transition Line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center p-6 rounded-2xl bg-[#0A1020]/90 border border-[#4169FF]/20 backdrop-blur-xl max-w-2xl mx-auto shadow-[0_0_30px_rgba(65,105,255,0.15)] flex items-center justify-center gap-3 text-sm sm:text-base font-semibold text-[#F8FAFC]"
        >
          <span>Scholatech replaces all four — and once it&apos;s built, it&apos;s yours.</span>
          <ArrowRight className="w-5 h-5 text-[#5A7DFF] shrink-0" />
        </motion.div>
      </div>
    </section>
  );
}


