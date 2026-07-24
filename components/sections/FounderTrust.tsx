"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function FounderTrust() {
  return (
    <section id="about" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden border-t border-slate-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative w-full aspect-[4/5] max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/team/founder.jpg"
                alt="Scholatech Founder"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1f6e]/60 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-4 -right-4 md:bottom-6 md:right-0 lg:-right-6 bg-[#4169FF] text-white px-6 py-5 rounded-2xl shadow-xl">
              <p className="text-2xl font-heading font-extrabold leading-none">Built</p>
              <p className="text-2xl font-heading font-extrabold leading-none">in Nigeria</p>
              <p className="text-[10px] uppercase font-mono tracking-wider opacity-80 mt-1.5">for African Schools</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#4169FF] bg-blue-50 px-3 py-1 rounded-full inline-block border border-blue-100">
              Meet the Founder
            </span>

            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 leading-tight">
              Our mission is to end the subscription tax on African schools.
            </h2>

            <div className="relative pl-5 border-l-2 border-[#4169FF]/30">
              <Quote className="absolute -left-3 -top-1 w-5 h-5 text-[#4169FF]/40" />
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed italic">
                Schools were being overcharged for standard software and left stranded during critical termly exam and report card release periods. We built Scholatech so that never happens again.
              </p>
            </div>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                Scholatech was born from a simple conviction: schools should own their digital future, not rent it. We build high-performance, durable software infrastructure that stays with your institution permanently.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#4169FF]/20 shrink-0 relative">
                <Image src="/images/team/founder.jpg" alt="Founder" fill className="object-cover object-center" sizes="48px" />
              </div>
              <div>
                <p className="font-heading font-bold text-slate-900 text-sm">Lead Architect & Founder</p>
                <p className="text-xs text-slate-500 font-mono">Scholatech Studio · Lagos & Plateau State, Nigeria</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
