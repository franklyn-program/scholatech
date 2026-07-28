"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Server, Globe, ShieldCheck, UserCheck, GraduationCap, DollarSign } from "lucide-react";

const roles = [
  { id: "admin", label: "Admin Portal", icon: ShieldCheck, badge: "School Proprietor View", image: "/images/management/role-admin.png", title: "Complete Institutional Oversight and Control", description: "Manage student enrollment, staff permissions, class allocations, and school-wide analytics without technical complexity.", accentColor: "#4169FF" },
  { id: "teacher", label: "Teacher Portal", icon: UserCheck, badge: "Teacher Score Input View", image: "/images/management/role-teacher.png", title: "Simplified Grade Input and Attendance Entry", description: "Teachers enter CA and exam scores in seconds. Automated grade calculations eliminate manual math errors.", accentColor: "#4169FF" },
  { id: "student", label: "Student and Parent", icon: GraduationCap, badge: "Parent Result Lookup View", image: "/images/management/role-student.png", title: "Instant Termly Report Cards and Fee Receipts", description: "Parents log in securely with student admission numbers to check report sheets and download PDF receipts.", accentColor: "#4169FF" },
  { id: "bursar", label: "Bursar and Finance", icon: DollarSign, badge: "Fee Tracker View", image: "/images/management/role-bursar.png", title: "Automated Fee Tracking and Digital Receipts", description: "Track tuition payments, generate digital receipts, monitor debt lists, and reconcile bank deposits effortlessly.", accentColor: "#10B981" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

export function OwnershipMoats() {
  const [activeTab, setActiveTab] = useState("admin");
  const currentRole = roles.find((r) => r.id === activeTab) || roles[0];

  return (
    <section id="solutions" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden border-t border-slate-100 scroll-mt-20">
      <div className="space-y-32 max-w-7xl mx-auto relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <motion.div {...fadeUp(0)} className="lg:col-span-5 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
            <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-mono font-bold uppercase tracking-wider border border-blue-100">The Ownership Model</span>
            <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-slate-900 leading-tight text-center lg:text-left">Management systems built to your blueprint.</h2>
            <p className="text-sm sm:text-lg text-slate-600 leading-relaxed text-center lg:text-left">We do not sell subscriptions. We build assets. Your school gets a custom management portal tailored to your specific grading, financial, and administrative workflows. Once built, it is yours permanently.</p>
            <ul className="space-y-3 pt-2 text-left">
              <li className="flex items-center gap-3 text-sm font-semibold text-slate-800"><CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" /><span>Custom grading logic and report card formats</span></li>
              <li className="flex items-center gap-3 text-sm font-semibold text-slate-800"><CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" /><span>Integrated fee management and tracking</span></li>
            </ul>
          </motion.div>

          <motion.div {...fadeUp(0.15)} className="lg:col-span-7 bg-[#F8FAFC] rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xl space-y-6">
            <div className="flex flex-wrap gap-2">
              {roles.map((r) => {
                const Icon = r.icon;
                const isActive = activeTab === r.id;
                return (
                  <button
                    key={r.id}
                    onClick={() => setActiveTab(r.id)}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-heading font-bold transition-all duration-300 ${
                      isActive
                        ? "bg-[#3B82F6] text-white shadow-md"
                        : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{r.label}</span>
                  </button>
                );
              })}
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 bg-white aspect-[16/10] shadow-lg">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentRole.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={currentRole.image}
                    alt={currentRole.title}
                    fill
                    className="object-contain object-top"
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
              <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur text-[11px] font-mono font-semibold text-emerald-400 border border-slate-700 px-3 py-1 rounded-md shadow-md">
                {currentRole.badge}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <motion.div {...fadeUp(0)} className="lg:col-span-6 bg-[#F8FAFC] rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xl relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 bg-white aspect-[16/10] shadow-lg group">
              <Image
                src="/images/cbt/cbt-software-preview.png"
                alt="Scholatech Offline CBT Software Interface"
                fill
                className="object-contain object-top transition-transform duration-500 group-hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur text-xs font-mono font-bold text-emerald-400 border border-slate-700 px-3 py-1 rounded-md flex items-center gap-2 shadow-md">
                <Server className="w-3.5 h-3.5" />
                <span>Offline Sync Engine. 100% LAN Ready</span>
              </div>
            </div>
          </motion.div>
          <motion.div {...fadeUp(0.15)} className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-mono font-bold uppercase tracking-wider border border-emerald-100">Infrastructure Independence</span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 leading-tight">Exams that do not need the internet.</h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">Run Computer Based Tests entirely within your school local area network (LAN). Students connect to a local server in your lab with zero lag, zero data costs, and zero chance of an internet outage ruining exam day.</p>
            <div className="bg-emerald-50 p-5 rounded-xl border-l-4 border-emerald-500 space-y-1">
              <p className="text-xs font-mono font-bold uppercase text-emerald-700">Scholatech Exclusive:</p>
              <p className="text-xs text-slate-600 leading-relaxed">We provide the hardware configuration and software that bridges your local network to our cloud for instant synchronization once the exam is over.</p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <motion.div {...fadeUp(0)} className="lg:col-span-5 space-y-6">
            <span className="inline-block px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-mono font-bold uppercase tracking-wider border border-purple-100">Digital Prestige and Admissions</span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 leading-tight">High-converting websites engineered for Nigerian schools.</h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">Custom websites built to convert prospective parents into enrolled students: 100% mobile-friendly with online admissions forms, campus galleries, and zero monthly hosting lock-in.</p>
            <ul className="space-y-3 pt-2">
              <li className="flex items-center gap-3 text-sm font-semibold text-slate-800"><CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" /><span>Sub-second loading times on mobile networks</span></li>
              <li className="flex items-center gap-3 text-sm font-semibold text-slate-800"><CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" /><span>Full domain ownership and system deployment handed over</span></li>
            </ul>
          </motion.div>
          <motion.div {...fadeUp(0.15)} className="lg:col-span-7 bg-[#F8FAFC] rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xl">
            <div className="px-4 py-2.5 bg-white border border-slate-200/80 rounded-t-xl flex items-center justify-between mb-4 shadow-sm">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />
              </div>
              <div className="bg-slate-100 px-3 py-1 rounded-full text-[11px] font-mono text-slate-700 flex items-center gap-1.5 border border-slate-200">
                <Globe className="w-3 h-3 text-[#3B82F6]" />
                <span>rra.com.ng</span>
              </div>
              <span className="text-[10px] font-mono text-emerald-700 font-bold bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">60fps</span>
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 bg-white aspect-[16/10] shadow-lg group">
              <Image
                src="/images/websites/web-shot-1.png"
                alt="Royal Rangers Academy Website Preview"
                fill
                className="object-contain object-top transition-transform duration-500 group-hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
