"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ExternalLink, Code2, ShieldCheck, Laptop } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const projects = [
  {
    id: "websites",
    title: "School Websites",
    client: "Real-World Deployments",
    category: "Website Design & Development",
    glowColor: "rgba(65, 105, 255, 0.25)",
    description: "Premium, mobile-first school websites built to win trust, drive admissions, and represent your brand. Delivered with full source code and zero subscriptions.",
    outcomes: [
      "ThesisEase.com.ng: Thesis & project writing platform live in production",
      "Royal Rangers Academy (rra.com.ng): School website live and converting",
      "100% source code ownership on day of launch",
    ],
    stats: [
      { label: "Page Load Speed", value: "< 1s" },
      { label: "Recurring License", value: "Zero" },
      { label: "Source Code", value: "Fully Delivered" },
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
      { label: "Subscription", value: "Zero Forever" },
      { label: "Source Code", value: "Fully Delivered" },
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
      { label: "Source Code", value: "Fully Delivered" },
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
          transition={{ duration: 0.7, ease: "easeInOut" }}
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
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050816]/25 pointer-events-none" />
        </motion.div>
      </AnimatePresence>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
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

function LaptopFrame({ project, slideIdx, setSlideIdx, reset }: { project: (typeof projects)[0]; slideIdx: number; setSlideIdx: (i: number) => void; reset: () => void; }) {
  return (
    <div className="relative w-full max-w-[680px]">
      <div className="relative mx-auto rounded-t-2xl bg-[#0A1020] p-3 border-t-2 border-x-2 border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.9)]">
        <div className="w-2 h-2 rounded-full bg-white/20 mx-auto mb-2" />
        <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden border border-white/[0.06]">
          <DeviceScreen project={project} slideIdx={slideIdx} setSlideIdx={setSlideIdx} reset={reset} />
        </div>
      </div>
      <div className="relative mx-auto h-4 w-[108%] -ml-[4%] rounded-b-xl bg-gradient-to-b from-[#1E293B] to-[#0A1020] border-t border-white/20 shadow-2xl flex items-center justify-center">
        <div className="w-16 h-1 rounded-full bg-white/20" />
      </div>
    </div>
  );
}

function TabletFrame({ project, slideIdx, setSlideIdx, reset }: { project: (typeof projects)[0]; slideIdx: number; setSlideIdx: (i: number) => void; reset: () => void; }) {
  return (
    <div className="relative w-full max-w-[380px] mx-auto">
      <div className="relative rounded-[2rem] bg-[#0A1020] border-4 border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.9)] p-3">
        <div className="flex justify-center mb-2">
          <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
        </div>
        <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden border border-white/[0.06]">
          <DeviceScreen project={project} slideIdx={slideIdx} setSlideIdx={setSlideIdx} reset={reset} />
        </div>
        <div className="flex justify-center mt-3">
          <div className="w-12 h-1 rounded-full bg-white/20" />
        </div>
      </div>
    </div>
  );
}

function PhoneFrame({ project, slideIdx, setSlideIdx, reset }: { project: (typeof projects)[0]; slideIdx: number; setSlideIdx: (i: number) => void; reset: () => void; }) {
  return (
    <div className="relative w-full max-w-[220px] mx-auto">
      <div className="relative rounded-[2.5rem] bg-[#0A1020] border-4 border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.9)] p-2.5">
        <div className="flex justify-center mb-1.5">
          <div className="w-16 h-4 rounded-full bg-[#050816] border border-white/10 flex items-center justify-center gap-1.5 px-3">
            <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
            <div className="flex-1 h-1 rounded-full bg-white/10" />
          </div>
        </div>
        <div className="relative aspect-[9/16] w-full rounded-2xl overflow-hidden border border-white/[0.06]">
          <DeviceScreen project={project} slideIdx={slideIdx} setSlideIdx={setSlideIdx} reset={reset} />
        </div>
        <div className="flex justify-center mt-2">
          <div className="w-10 h-1 rounded-full bg-white/20" />
        </div>
      </div>
    </div>
  );
}

export function Portfolio() {
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const activeProject = projects[activeProjectIdx];
  const { slideIdx, setSlideIdx, reset } = useSlideshow(activeProject.slides, 5000);

  useEffect(() => { reset(); }, [activeProjectIdx, reset]);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || !containerRef.current) return;
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: `+=${projects.length * window.innerHeight}`,
        pin: true,
        scrub: 0.8,
        onUpdate: (self) => {
          const idx = Math.min(Math.floor(self.progress * projects.length), projects.length - 1);
          setActiveProjectIdx(idx);
        },
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="case-studies"
      ref={containerRef}
      className="relative w-full min-h-screen bg-[#050816] py-14 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-white/[0.06] flex items-center"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-20 transition-all duration-1000"
        style={{ background: `radial-gradient(circle at 50% 40%, ${activeProject.glowColor} 0%, rgba(5,8,22,0) 70%)` }}
      />

      <div className="hidden lg:flex absolute left-6 top-1/2 -translate-y-1/2 flex-col gap-4 z-20">
        {projects.map((proj, idx) => (
          <button key={proj.id} onClick={() => setActiveProjectIdx(idx)} aria-label={`View ${proj.title}`} className="group flex items-center gap-2.5">
            <div className={`w-1 rounded-full transition-all duration-500 ${activeProjectIdx === idx ? "h-10 bg-[#4169FF] shadow-[0_0_8px_#4169FF]" : "h-4 bg-white/20 group-hover:bg-white/40"}`} />
            <span className={`text-[10px] font-bold tracking-widest uppercase transition-all duration-300 whitespace-nowrap ${activeProjectIdx === idx ? "text-[#5A7DFF] opacity-100" : "text-[#7A879C] opacity-0 group-hover:opacity-60"}`}>
              {proj.title}
            </span>
          </button>
        ))}
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0A1020] border border-white/[0.06] text-[#5A7DFF] text-[11px] font-bold tracking-widest uppercase mb-3">
              <Laptop className="w-3.5 h-3.5 text-[#4169FF]" />
              Keynote Presentation - Real Projects
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-[#F8FAFC] tracking-tight">Real outcomes in schools like yours.</h2>
          </div>
          <div className="flex items-center gap-3">
            {projects.map((proj, idx) => (
              <button key={proj.id} onClick={() => setActiveProjectIdx(idx)} className={`h-2.5 rounded-full transition-all duration-500 ${activeProjectIdx === idx ? "w-10 bg-[#4169FF] shadow-[0_0_12px_#4169FF]" : "w-2.5 bg-white/20 hover:bg-white/40"}`} aria-label={`View project: ${proj.title}`} />
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mb-8">
          {projects.map((proj, idx) => (
            <button key={proj.id} onClick={() => setActiveProjectIdx(idx)} className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all duration-300 border ${activeProjectIdx === idx ? "bg-[#4169FF] border-[#4169FF] text-white shadow-[0_0_20px_rgba(65,105,255,0.4)]" : "bg-[#111827] border-white/[0.06] text-[#AAB4C5] hover:border-[#4169FF]/40 hover:text-white"}`}>
              {proj.title}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 flex justify-center">
            <div className="hidden lg:flex w-full justify-center">
              <LaptopFrame project={activeProject} slideIdx={slideIdx} setSlideIdx={setSlideIdx} reset={reset} />
            </div>
            <div className="hidden md:flex lg:hidden w-full justify-center">
              <TabletFrame project={activeProject} slideIdx={slideIdx} setSlideIdx={setSlideIdx} reset={reset} />
            </div>
            <div className="flex md:hidden w-full justify-center">
              <PhoneFrame project={activeProject} slideIdx={slideIdx} setSlideIdx={setSlideIdx} reset={reset} />
            </div>
          </div>

          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div key={activeProject.id} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.45 }} className="space-y-6">
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#5A7DFF]">{activeProject.client}</span>
                  <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#F8FAFC]">{activeProject.title}</h3>
                </div>
                <p className="text-sm text-[#AAB4C5] leading-relaxed">{activeProject.description}</p>
                <div className="space-y-2.5 pt-1">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#F8FAFC]">Key Outcomes:</h4>
                  {activeProject.outcomes.map((out) => (
                    <div key={out} className="flex items-start gap-2.5 text-xs text-[#AAB4C5]">
                      <ShieldCheck className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                      <span>{out}</span>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-3 pt-1">
                  {activeProject.stats.map((st) => (
                    <div key={st.label} className="p-3 rounded-lg bg-[#0A1020] border border-white/[0.06]">
                      <div className="text-base font-extrabold text-[#5A7DFF]">{st.value}</div>
                      <div className="text-[9px] text-[#7A879C] uppercase mt-0.5">{st.label}</div>
                    </div>
                  ))}
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#7A879C] mb-2">Technology Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.techStack.map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded-md bg-[#111827] border border-white/[0.06] text-[11px] text-[#AAB4C5] font-mono">{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  {activeProject.liveUrls.length > 0 ? (
                    activeProject.liveUrls.map((url) => (
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
                <p className="text-[10px] text-[#7A879C] tracking-widest uppercase flex items-center gap-1.5">
                  <span className="inline-block w-4 h-px bg-[#7A879C]" />
                  Scroll to see next project
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
