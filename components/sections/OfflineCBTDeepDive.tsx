"use client";

import { motion } from "framer-motion";
import { Heading } from "../ui/Heading";
import { Paragraph } from "../ui/Paragraph";
import { FadeIn } from "../motion/FadeIn";
import { Info, WifiOff, Server, Zap, Database, ShieldCheck } from "lucide-react";

export function OfflineCBTDeepDive() {
  const steps = [
    {
      num: 1,
      icon: Server,
      title: "Local Server Setup",
      description:
        "A dedicated computer in your school acts as the \"Exam Brain.\" All exam questions are loaded onto it before the test begins.",
    },
    {
      num: 2,
      icon: WifiOff,
      title: "Internal Network Link",
      description:
        "Student computers connect to this local server via your school's Wi-Fi or cables. They aren't \"on the internet\"—they're just talking to the room's server.",
    },
    {
      num: 3,
      icon: Zap,
      title: "Zero-Lag Testing",
      description:
        "Because data only travels across the room, pages load instantly. No \"spinning wheels\" or disconnected sessions when a student clicks 'Next'.",
    },
    {
      num: 4,
      icon: Database,
      title: "Cloud Sync (Optional)",
      description:
        "Once exams are finished, a single click syncs the results to your central cloud management portal for parent access.",
    },
  ];

  return (
    <section id="offline-cbt" className="py-20 sm:py-28 bg-[#F4F7FC] text-slate-900 scroll-mt-20 border-t border-slate-200/60 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header - Mobile Centered */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <FadeIn direction="down">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#4169FF]/10 border border-[#4169FF]/20 text-[#4169FF] rounded-full text-xs font-mono font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              Exams That Do Not Need The Internet
            </span>
          </FadeIn>

          <FadeIn direction="up" delay={0.1}>
            <Heading as="h2" className="text-3xl sm:text-4xl lg:text-5xl text-slate-900 font-extrabold text-center tracking-tight leading-tight">
              How Offline CBT Works
            </Heading>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <Paragraph size="lg" className="text-slate-600 text-center text-sm sm:text-base max-w-xl mx-auto">
              Technical reliability, simplified for school leaders. 100% internet-free exam execution on your school hardware.
            </Paragraph>
          </FadeIn>
        </div>

        {/* 4 Animated Steps Grid */}
        <div className="grid grid-cols-1 gap-4">
          {steps.map((step, idx) => {
            const StepIcon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group p-6 sm:p-7 bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col sm:flex-row gap-5 items-center sm:items-start text-center sm:text-left"
              >
                <div className="shrink-0 w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 text-[#4169FF] flex items-center justify-center font-bold text-lg shadow-sm group-hover:bg-[#4169FF] group-hover:text-white transition-all duration-300">
                  <StepIcon className="w-6 h-6" />
                </div>

                <div className="space-y-1.5 flex-grow">
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <span className="text-xs font-mono font-bold text-[#4169FF] uppercase tracking-wider">
                      Step 0{step.num}
                    </span>
                    <h4 className="font-heading font-extrabold text-lg text-slate-900 group-hover:text-[#4169FF] transition-colors">
                      {step.title}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Why this saves you money Banner */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="p-6 sm:p-8 bg-white rounded-2xl border-l-4 border-[#4169FF] border border-slate-200/80 shadow-md space-y-2 text-center sm:text-left"
        >
          <div className="flex items-center justify-center sm:justify-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#10B981]" />
            <h4 className="font-heading font-extrabold text-base text-slate-900">
              Why this saves your school money
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto sm:mx-0">
            Unlike other vendors, we don&apos;t charge a &quot;per-student&quot; fee for exams. Whether you have 50 students or 5,000, your cost to run an exam session is effectively zero after the initial setup.
          </p>
        </motion.div>

      </div>
    </section>
  );
}