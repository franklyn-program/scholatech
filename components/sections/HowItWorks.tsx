"use client";

import { motion } from "framer-motion";

const steps = [
  { num: 1, title: "Consult", description: "We learn your school current setup and what is actually slowing you down.", color: "#4169FF" },
  { num: 2, title: "Build", description: "We design and develop your site, system, or CBT setup on your specific requirements.", color: "#5A7DFF" },
  { num: 3, title: "Train and Launch", description: "We deploy, train your staff, and go live together.", color: "#6D8DFF" },
  { num: 4, title: "Own It", description: "You receive the full source code and database. No recurring fees, no lock-in.", color: "#10B981" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export function HowItWorks() {
  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#0E1B38] overflow-hidden border-t border-white/10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.12)_0%,rgba(14,27,56,0)_70%)] blur-[80px] pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20 space-y-4">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#162347] border border-white/15 text-[#60A5FA] text-[11px] font-bold tracking-widest uppercase">How It Works</motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="text-3xl sm:text-5xl font-heading font-extrabold text-[#F8FAFC] tracking-tight">Four steps to complete ownership.</motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="text-base sm:text-lg text-slate-300">From first call to full code ownership. No middlemen, no subscriptions.</motion.p>
        </div>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
          <motion.div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-[#10B981] origin-left" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }} />
          {steps.map((step) => (
            <motion.div key={step.num} variants={cardVariants} whileHover={{ y: -6, transition: { duration: 0.25 } }} className="group relative p-8 rounded-2xl bg-[#162347]/90 border border-white/15 hover:border-[#3B82F6] backdrop-blur-xl transition-colors duration-300 flex flex-col space-y-4 shadow-xl">
              <div className="relative w-11 h-11 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500" style={{ background: step.color + "40" }} />
                <div className="relative w-11 h-11 rounded-full flex items-center justify-center font-heading font-extrabold text-sm border border-white/10 z-10" style={{ background: "linear-gradient(135deg, " + step.color + "30, " + step.color + "10)" }}>
                  <span style={{ color: step.color }}>{step.num}</span>
                </div>
              </div>
              <h3 className="font-heading font-bold text-xl text-[#F8FAFC] group-hover:text-[#5A7DFF] transition-colors duration-300">{step.title}</h3>
              <p className="text-sm text-[#AAB4C5] leading-relaxed flex-grow">{step.description}</p>
              <div className="h-0.5 w-0 group-hover:w-full rounded-full transition-all duration-500" style={{ background: "linear-gradient(90deg, " + step.color + ", transparent)" }} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
