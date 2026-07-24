"use client";

import { useState } from "react";
import Image from "next/image";
import { Section } from "../layout/Section";
import { Heading } from "../ui/Heading";
import { Paragraph } from "../ui/Paragraph";
import { SectionLabel } from "../ui/SectionLabel";
import { Card } from "../ui/Card";
import { FadeIn } from "../motion/FadeIn";
import { ShieldCheck, UserCheck, GraduationCap, DollarSign, FileText, CheckCircle2, ArrowRight } from "lucide-react";

export function ManagementSystemShowcase() {
  const roles = [
    {
      id: "admin",
      label: "Admin Portal",
      icon: ShieldCheck,
      badge: "School Proprietor & Principal View",
      image: "/images/management/role-admin.png",
      title: "Complete Institutional Oversight & Control",
      description:
        "Manage overall student enrollment, staff permissions, class allocations, and generate school-wide analytics without technical complexity.",
      features: [
        "Full Student & Staff Master Register",
        "Class Allocation & Subject Assignment",
        "Termly Result Approval & Lock System",
        "Custom School Branding & Report Templates",
      ],
    },
    {
      id: "teacher",
      label: "Teacher Portal",
      icon: UserCheck,
      badge: "Class Teacher & Subject Master View",
      image: "/images/management/role-teacher.png",
      title: "Simplified Grade Input & Attendance Entry",
      description:
        "Teachers enter continuous assessments (CA) and term exam scores in seconds. Automated grade calculations eliminate manual math errors.",
      features: [
        "CA & Exam Score Sheet Upload",
        "Automated Grade Point Average (GPA)",
        "Affective & Psychomotor Domain Grading",
        "Daily Class Attendance Tracking",
      ],
    },
    {
      id: "student",
      label: "Student & Parent Portal",
      icon: GraduationCap,
      badge: "Parent & Pupil Result Lookup",
      image: "/images/management/role-student.png",
      title: "Instant Termly Report Cards & Fee Receipts",
      description:
        "Parents log in securely with student admission numbers to check termly report sheets, download PDF receipts, and view school announcements.",
      features: [
        "Instant PDF Report Card Download",
        "Termly Fee Payment History & Outstanding Balance",
        "Attendance Summary & Behavioral Comments",
        "Secure PIN / Password Access",
      ],
    },
    {
      id: "bursar",
      label: "Bursar & Finance Portal",
      icon: DollarSign,
      badge: "School Accountant & Fee Tracker",
      image: "/images/management/role-bursar.png",
      title: "Automated Fee Tracking & Digital Receipts",
      description:
        "Track tuition payments, generate digital payment receipts, monitor debt lists, and reconcile bank deposits effortlessly.",
      features: [
        "Automated Digital Receipt Generation",
        "Real-time Outstanding Fee Debtors List",
        "Custom Fee Category Breakdown (Bus, Uniform, Tuition)",
        "Termly Financial Income Summary Reports",
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState("admin");
  const currentRole = roles.find((r) => r.id === activeTab) || roles[0];

  const extraScreenshots = [
    { src: "/images/management/mgmt-shot-2.png", caption: "Student Performance Analytics" },
    { src: "/images/management/mgmt-shot-3.png", caption: "Termly Report Card Generator" },
    { src: "/images/management/mgmt-shot-4.png", caption: "Automated Grade Computation" },
    { src: "/images/management/mgmt-shot-5.png", caption: "Class Score Sheet Entry" },
    { src: "/images/management/mgmt-shot-6.png", caption: "Fee Payment & Debt Tracking" },
    { src: "/images/management/mgmt-shot-7.png", caption: "Parent Portal Dashboard" },
  ];

  return (
    <Section variant="dark" id="management-system-showcase" className="scroll-mt-20">
      <div className="space-y-12">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <FadeIn direction="up">
            <SectionLabel darkBg>Product Showcase · Portal</SectionLabel>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <Heading as="h2" darkBg>
              All-In-One School Management System
            </Heading>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <Paragraph size="lg" darkBg className="max-w-2xl mx-auto">
              Admissions, results, tuition fees, and staff attendance organized into 4 tailored portals designed for your exact school workflow.
            </Paragraph>
          </FadeIn>
        </div>

        {/* Role Tab Navigation */}
        <FadeIn direction="up" delay={0.3}>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {roles.map((role) => {
              const Icon = role.icon;
              const isActive = activeTab === role.id;
              return (
                <button
                  key={role.id}
                  onClick={() => setActiveTab(role.id)}
                  type="button"
                  className={`flex items-center gap-2 px-3.5 sm:px-5 py-2 sm:py-3 rounded-xl font-heading font-semibold text-xs sm:text-sm transition-all duration-300 ${
                    isActive
                      ? "bg-primary-blue text-white shadow-lg shadow-blue-500/25 scale-105"
                      : "bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>{role.label}</span>
                </button>
              );
            })}
          </div>
        </FadeIn>

        {/* Active Role Portal Card */}
        <FadeIn direction="up" delay={0.4}>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xl">
            {/* Image Preview Mockup */}
            <div className="lg:col-span-7 relative">
              <div className="relative rounded-xl overflow-hidden border border-slate-700/80 bg-slate-900/40 aspect-[16/10] shadow-xl group">
                <Image
                  src={currentRole.image}
                  alt={currentRole.title}
                  fill
                  className="object-contain object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  priority
                />
                <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur text-xs font-mono font-semibold text-emerald-400 border border-slate-700 px-3 py-1 rounded-md">
                  {currentRole.badge}
                </div>
              </div>
            </div>

            {/* Content & Features */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary-blue bg-blue-950/80 px-2.5 py-1 rounded border border-blue-800/60 inline-block">
                  {currentRole.label}
                </span>
                <h3 className="font-heading font-extrabold text-2xl text-white">
                  {currentRole.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {currentRole.description}
                </p>
              </div>

              <div className="space-y-3 pt-2 border-t border-slate-800">
                {currentRole.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-accent-green shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <a
                  href="/solutions/management-system"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary-blue hover:text-blue-400 transition-colors"
                >
                  Explore full management system features <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Dashboard Screenshot Highlights Grid */}
        <div className="space-y-4 pt-4">
          <h4 className="text-center font-heading font-bold text-lg text-white">
            System Interface Previews
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {extraScreenshots.map((item, idx) => (
              <div
                key={idx}
                className="relative rounded-lg overflow-hidden border border-slate-800 bg-slate-950 aspect-video group hover:border-primary-blue transition-colors cursor-pointer"
              >
                <Image
                  src={item.src}
                  alt={item.caption}
                  fill
                  className="object-cover object-top transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                  <span className="text-[10px] font-semibold text-white truncate">{item.caption}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
