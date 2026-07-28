"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Code2, ShieldCheck, Laptop, Monitor, Smartphone } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";

const projects = [
  {
    id: "websites",
    title: "School Websites",
    client: "Real-World Deployments",
    category: "Website Design & Development",
    glowColor: "rgba(65, 105, 255, 0.25)",
    description: "Premium, mobile-first school websites built to win trust, drive admissions, and represent your brand. Delivered with full domain & system ownership and zero subscriptions.",
    outcomes: [
      "ThesisEase.com.ng: Thesis & project writing platform live in production",
      "Royal Rangers Academy (rra.com.ng): School website live and converting",
      "100% system & database ownership on day of launch",
    ],
    stats: [
      { label: "Page Load Speed", value: "< 1s" },
      { label: "Recurring License", value: "Zero" },
      { label: "System Control", value: "Fully Owned" },
    ],
    techStack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrls: [
      { label: "ThesisEase", href: "https://thesisease.com.ng" },
      { label: "Royal Rangers Academy", href: "https://rra.com.ng" },
    ],
    slides: [
      "/images/websites/web-snap-2.png",
      "/images/websites/web-shot-2.png",
      "/images/websites/web-shot-1.png",
      "/images/websites/web-shot-3.png",
    ],
  },
  {
    id: "management",
    title: "Management System",
    client: "Full Administrative Suite",
    category: "School Management Platform",
    glowColor: "rgba(245, 158, 11, 0.25)",
    description: "A comprehensive school operations platform covering staff payroll, student results, fee tracking, admissions, and parent portals. All under one owned system.",
    outcomes: [
      "Reduces result computation from 2 weeks to under 15 minutes",
      "Automated fee tracking and parent SMS notifications",
      "Multi-role access: admin, teacher, bursar, parent and student portals",
    ],
    stats: [
      { label: "Result Speed", value: "99% Faster" },
      { label: "Subscription", value: "Zero Fees" },
      { label: "Database Control", value: "Fully Owned" },
    ],
    techStack: ["Next.js", "Supabase", "PostgreSQL", "TypeScript", "Tailwind CSS"],
    liveUrls: [],
    slides: [
      "/images/management/mgmt-shot-1.png",
      "/images/management/mgmt-shot-2.png",
      "/images/management/mgmt-shot-3.png",
      "/images/management/mgmt-shot-6.png",
      "/images/management/mgmt-shot-7.png",
    ],
  },
  {
    id: "cbt",
    title: "Offline CBT Centres",
    client: "School Computer Labs",
    category: "Offline CBT Infrastructure",
    glowColor: "rgba(16, 185, 129, 0.25)",
    description: "Bank-grade Computer Based Testing systems installed directly on school lab servers. Operates 100% offline with zero internet dependency. Students never lose a session.",
    outcomes: [
      "Conducts hundreds of concurrent exams with zero network failure",
      "Instant automatic score aggregation and result export",
      "Simulates JAMB and WAEC exam formats precisely",
    ],
    stats: [
      { label: "Internet Required", value: "0%" },
      { label: "Grading Speed", value: "Instant" },
      { label: "Deployment", value: "Self-Hosted" },
    ],
    techStack: ["React", "Electron", "SQLite", "Node.js", "Express"],
    liveUrls: [],
    slides: [
      "/images/cbt/cbt-student-closeup-2.jpg",
      "/images/cbt/cbt-lab-1.jpg",
      "/images/cbt/cbt-lab-2.jpg",
      "/images/cbt/cbt-lab-3.jpg",
      "/images/cbt/cbt-software-preview.png",
    ],
  },
];

/** Lightweight auto-rotating slideshow hook */
function useSlideshow(slides: string[], intervalMs = 5000) {
  const [slideIdx, setSlideIdx] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const reset = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setSlideIdx((prev) => (prev + 1) % slides.length);
    }, intervalMs);
  }, [slides.length, intervalMs]);

  useEffect(() => {
    setSlideIdx(0);
    reset();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [slides, reset]);

  return { slideIdx, setSlideIdx, reset };
}

/** Inner screen content — shared by all device frames */
function DeviceScreen({
  project, slideIdx, setSlideIdx, reset,
}: {
  project: (typeof projects)[0];
  slideIdx: number;
  setSlideIdx: (i: number) => void;
  reset: () => void;
}) {
  return (
    <div className="relative w-full h-full bg-[#050816] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={`${project.id}-${slideIdx}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={project.slides[slideIdx]}
            alt={`${project.title} screenshot ${slideIdx + 1}`}
            fill
            className="object-cover object-top"
            priority={slideIdx === 0}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050816]/20 pointer-events-none" />
        </motion.div>
      </AnimatePresence>
      {/* Slide dots */}
      <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {project.slides.map((_, i) => (
          <button
            key={i}
            onClick={() => { setSlideIdx(i); reset(); }}
            aria-label={`Screenshot ${i + 1}`}
            className={`h-1 rounded-full transition-all duration-300 ${
              i === slideIdx ? "w-5 bg-[#4169FF] shadow-[0_0_6px_#4169FF]" : "w-1.5 bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/** Laptop device frame — primary showcase device */
function LaptopFrame({ project, slideIdx, setSlideIdx, reset }: { project: (typeof projects)[0]; slideIdx: number; setSlideIdx: (i: number) => void; reset: () => void; }) {
  return (
    <div className="relative w-full max-w-[620px] mx-auto">
      {/* Screen bezel */}
      <div className="relative mx-auto rounded-t-2xl bg-[#162347] p-2.5 sm:p-3 border border-white/15 shadow-2xl">
        {/* Camera dot */}
        <div className="w-2 h-2 rounded-full bg-white/30 mx-auto mb-1.5" />
        {/* Screen */}
        <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden border border-white/10">
          <DeviceScreen project={project} slideIdx={slideIdx} setSlideIdx={setSlideIdx} reset={reset} />
        </div>
      </div>
      {/* Keyboard base / hinge */}
      <div className="relative mx-auto h-3.5 w-[108%] -ml-[4%] rounded-b-xl bg-gradient-to-b from-[#1E293B] to-[#162347] border-t border-white/20 shadow-2xl flex items-center justify-center">
        <div className="w-14 h-0.5 rounded-full bg-white/30" />
      </div>
      {/* Device label */}
      <div className="flex items-center justify-center gap-1.5 mt-3">
        <Monitor className="w-3 h-3 text-[#5A7DFF]" />
        <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-[#5A7DFF]">Desktop View</span>
      </div>
    </div>
  );
}

/** Phone device frame — secondary companion device */
function PhoneFrame({ project, slideIdx, setSlideIdx, reset }: { project: (typeof projects)[0]; slideIdx: number; setSlideIdx: (i: number) => void; reset: () => void; }) {
  return (
    <div className="relative w-full max-w-[240px] mx-auto">
      <div className="relative rounded-[2rem] overflow-hidden border border-white/15 shadow-2xl bg-[#0E1B38]">
        {/* Notch */}
        <div className="flex justify-center py-2 bg-[#162347]/60 border-b border-white/10">
          <div className="w-12 h-2.5 rounded-full bg-[#0E1B38] border border-white/15 flex items-center justify-center gap-1 px-2">
            <div className="w-1 h-1 rounded-full bg-white/30" />
            <div className="flex-1 h-0.5 rounded-full bg-white/20" />
          </div>
        </div>
        {/* Screen */}
        <div className="relative aspect-[9/16] w-full">
          <DeviceScreen project={project} slideIdx={slideIdx} setSlideIdx={setSlideIdx} reset={reset} />
        </div>
      </div>
      {/* Device label */}
      <div className="flex items-center justify-center gap-1.5 mt-3">
        <Smartphone className="w-3 h-3 text-[#10B981]" />
        <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-[#10B981]">Mobile View</span>
      </div>
    </div>
  );
}


export function Portfolio() {
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);
  const activeProject = projects[activeProjectIdx];
  const { slideIdx, setSlideIdx, reset } = useSlideshow(activeProject.slides, 5000);

  // Reset slideshow when project changes
  useEffect(() => { reset(); }, [activeProjectIdx, reset]);

  return (
    <section
      id="case-studies"
      className="relative w-full bg-[#0E1B38] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-white/10"
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30 transition-all duration-700"
        style={{ background: `radial-gradient(circle at 35% 45%, ${activeProject.glowColor} 0%, rgba(14,27,56,0) 65%)` }}
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#162347] border border-white/15 text-[#60A5FA] text-[11px] font-bold tracking-widest uppercase mb-3">
              <Laptop className="w-3.5 h-3.5 text-[#3B82F6]" />
              Keynote Presentation — Real Projects
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-[#F8FAFC] tracking-tight">Real outcomes in schools like yours.</h2>
          </div>
        </div>

        {/* Project Tab Switcher */}
        <div className="flex flex-wrap gap-3 mb-10">
          {projects.map((proj, idx) => (
            <button
              key={proj.id}
              onClick={() => setActiveProjectIdx(idx)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all duration-300 border ${
                activeProjectIdx === idx
                  ? "bg-[#3B82F6] border-[#3B82F6] text-white shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                  : "bg-[#162347] border-white/15 text-slate-300 hover:border-blue-400 hover:text-white"
              }`}
            >
              {proj.title}
            </button>
          ))}
        </div>

        {/* Main Content: Devices + Project Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* ============================================= */}
            {/* MOBILE LAYOUT: Phone frame ABOVE text content */}
            {/* ============================================= */}
            <div className="lg:hidden space-y-8">
              {/* Phone device — full width, first thing seen */}
              <div className="flex justify-center">
                <PhoneFrame project={activeProject} slideIdx={slideIdx} setSlideIdx={setSlideIdx} reset={reset} />
              </div>

              {/* Text content below phone on mobile */}
              <ProjectDetails project={activeProject} />
            </div>

            {/* DESKTOP LAYOUT: Laptop left, text right */}
            <div className="hidden lg:grid lg:grid-cols-12 gap-10 items-start">

              {/* Left: Laptop */}
              <div className="lg:col-span-7 flex justify-center">
                <div className="w-full max-w-[620px]">
                  <LaptopFrame project={activeProject} slideIdx={slideIdx} setSlideIdx={setSlideIdx} reset={reset} />
                </div>
              </div>

              {/* Right: Project details */}
              <div className="lg:col-span-5">
                <ProjectDetails project={activeProject} />
              </div>

            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

/** Extracted project details panel — shared between mobile and desktop layouts */
function ProjectDetails({ project }: { project: (typeof projects)[0] }) {
  return (
    <div className="space-y-5">
      {/* Title */}
      <div className="space-y-1">
        <span className="text-xs font-bold uppercase tracking-widest text-[#5A7DFF]">{project.client}</span>
        <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#F8FAFC]">{project.title}</h3>
      </div>

      {/* Description */}
      <p className="text-sm text-[#AAB4C5] leading-relaxed">{project.description}</p>

      {/* Outcomes */}
      <div className="space-y-2.5">
        <h4 className="text-xs font-bold uppercase tracking-wider text-[#F8FAFC]">Key Outcomes:</h4>
        {project.outcomes.map((out) => (
          <div key={out} className="flex items-start gap-2.5 text-xs text-[#AAB4C5]">
            <ShieldCheck className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
            <span>{out}</span>
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3">
        {project.stats.map((st) => (
          <div key={st.label} className="p-3 rounded-lg bg-[#0A1020] border border-white/[0.06]">
            <div className="text-base font-extrabold text-[#5A7DFF]">{st.value}</div>
            <div className="text-[9px] text-[#7A879C] uppercase mt-0.5">{st.label}</div>
          </div>
        ))}
      </div>

      {/* Tech Stack */}
      <div>
        <h4 className="text-xs font-bold uppercase tracking-wider text-[#7A879C] mb-2">Technology Stack:</h4>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span key={tech} className="px-2.5 py-1 rounded-md bg-[#111827] border border-white/[0.06] text-[11px] text-[#AAB4C5] font-mono">{tech}</span>
          ))}
        </div>
      </div>

      {/* CTA buttons */}
      <div className="pt-2 flex flex-wrap items-center gap-3">
        {project.liveUrls.length > 0 ? (
          project.liveUrls.map((url) => (
            <MagneticButton key={url.href}>
              <a href={url.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#4169FF] hover:bg-[#6D8DFF] text-white font-heading font-bold text-xs px-5 py-3 rounded-full shadow-[0_0_20px_rgba(65,105,255,0.35)] transition-all">
                <span>Visit {url.label}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </MagneticButton>
          ))
        ) : (
          <MagneticButton>
            <a href="#contact" className="inline-flex items-center gap-2 bg-[#4169FF] hover:bg-[#6D8DFF] text-white font-heading font-bold text-xs px-5 py-3 rounded-full shadow-[0_0_20px_rgba(65,105,255,0.35)] transition-all">
              <span>Request Demo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </MagneticButton>
        )}
        <div className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-[#111827] border border-white/[0.06] text-xs font-semibold text-[#AAB4C5]">
          <Code2 className="w-3.5 h-3.5 text-[#10B981]" />
          <span>Delivered to Proprietor</span>
        </div>
      </div>
    </div>
  );
}
