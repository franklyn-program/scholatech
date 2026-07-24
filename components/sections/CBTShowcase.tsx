"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Heading } from "../ui/Heading";
import { Paragraph } from "../ui/Paragraph";
import { SectionLabel } from "../ui/SectionLabel";
import { Card } from "../ui/Card";
import { FadeIn } from "../motion/FadeIn";
import { ChevronLeft, ChevronRight, WifiOff, Zap, ShieldCheck, Award } from "lucide-react";

export function CBTShowcase() {
  const cbtSlides = [
    {
      src: "/images/cbt/cbt-student-closeup.jpg",
      title: "Focused Student Test Station",
      subtitle: "Intuitive, distraction-free interface designed for effortless student operation.",
      tag: "Zero Internet Needed",
    },
    {
      src: "/images/cbt/cbt-lab-1.jpg",
      title: "100+ Concurrent Lab Stations",
      subtitle: "High-capacity local server setup handling simultaneous exam sessions smoothly.",
      tag: "Local Offline Network",
    },
    {
      src: "/images/cbt/cbt-software-preview.png",
      title: "Real-time CBT Examination Software",
      subtitle: "Instant automated score computation with detailed subject breakdown.",
      tag: "Automated Grading",
    },
    {
      src: "/images/cbt/cbt-lab-2.jpg",
      title: "School Computer Lab Installation",
      subtitle: "Turnkey hardware and local server deployment for primary & secondary schools.",
      tag: "Turnkey Deployment",
    },
    {
      src: "/images/cbt/cbt-lab-4.jpg",
      title: "Invigilator & Exam Monitoring",
      subtitle: "Live supervisor dashboard to track student progress and test completion status.",
      tag: "Tamper-Proof",
    },
    {
      src: "/images/cbt/cbt-student-closeup-2.jpg",
      title: "Accessible for All Grade Levels",
      subtitle: "Simple keyboard & mouse controls suitable for primary to senior secondary students.",
      tag: "Easy Access",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? cbtSlides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === cbtSlides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === cbtSlides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [cbtSlides.length]);

  return (
    <section id="cbt-case-study" className="py-20 sm:py-28 bg-[#F0FDF4] border-t border-b border-emerald-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <FadeIn direction="up">
            <SectionLabel>Case Study · CBT Center Installation</SectionLabel>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <Heading as="h2" className="text-[#050816] text-2xl sm:text-4xl lg:text-5xl font-extrabold text-center tracking-tight">
              Exams That Do Not Need The Internet
            </Heading>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <Paragraph size="lg" className="max-w-2xl mx-auto text-emerald-950/80 text-sm sm:text-base text-center">
              See how Nigerian schools run stress-free termly examinations and WAEC/JAMB mock tests with 100% internet-free offline local servers.
            </Paragraph>
          </FadeIn>
        </div>

        {/* Main Interactive Showcase Carousel */}
        <FadeIn direction="up" delay={0.3}>
          <div className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden bg-slate-900 border border-emerald-200/60 shadow-2xl">
            {/* Slide Image Container */}
            <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full bg-slate-900/40 overflow-hidden">
              <Image
                src={cbtSlides[currentIndex].src}
                alt={cbtSlides[currentIndex].title}
                fill
                className="object-cover transition-all duration-500"
                sizes="(max-width: 1280px) 100vw, 1200px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

              {/* Tag pill */}
              <div className="absolute top-4 left-4 bg-emerald-950/85 backdrop-blur border border-emerald-500/40 text-emerald-400 font-mono text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                <WifiOff className="w-3.5 h-3.5" />
                <span>{cbtSlides[currentIndex].tag}</span>
              </div>

              {/* Caption Card */}
              <div className="absolute bottom-6 left-6 right-6 sm:left-8 sm:right-auto sm:max-w-xl bg-slate-900/95 backdrop-blur border border-slate-700 p-5 rounded-xl text-white space-y-1.5 shadow-2xl">
                <h3 className="font-heading font-extrabold text-lg sm:text-xl text-white">
                  {cbtSlides[currentIndex].title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {cbtSlides[currentIndex].subtitle}
                </p>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                type="button"
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-emerald-600 text-white flex items-center justify-center border border-slate-700 transition-colors shadow-lg"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-emerald-600 text-white flex items-center justify-center border border-slate-700 transition-colors shadow-lg"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Thumbnail Navigation Strip */}
            <div className="p-4 bg-slate-900 border-t border-slate-800 flex items-center justify-center gap-3 overflow-x-auto">
              {cbtSlides.map((slide, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`relative w-16 h-10 rounded-md overflow-hidden border-2 transition-all shrink-0 ${
                    idx === currentIndex
                      ? "border-emerald-500 scale-105 opacity-100"
                      : "border-slate-800 opacity-50 hover:opacity-80"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                >
                  <Image src={slide.src} alt={slide.title} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* CBT Value Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-4">
          <Card variant="white" className="border-emerald-200/80 space-y-3 bg-white/90">
            <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <WifiOff className="w-5 h-5" />
            </div>
            <h4 className="font-heading font-bold text-base text-emerald-950">100% Internet Free</h4>
            <p className="text-xs text-emerald-800/80 leading-relaxed">
              Runs on your school&apos;s local computer lab server. Never depends on internet connections or data subscriptions.
            </p>
          </Card>

          <Card variant="white" className="border-emerald-200/80 space-y-3 bg-white/90">
            <div className="w-9 h-9 rounded-lg bg-blue-100 text-primary-blue flex items-center justify-center">
              <Zap className="w-5 h-5" />
            </div>
            <h4 className="font-heading font-bold text-base text-emerald-950">Instant Score Grading</h4>
            <p className="text-xs text-emerald-800/80 leading-relaxed">
              Results are computed automatically as soon as students finish, reducing teacher marking workloads to zero.
            </p>
          </Card>

          <Card variant="white" className="border-emerald-200/80 space-y-3 bg-white/90">
            <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="font-heading font-bold text-base text-emerald-950">Anti-Cheat Engine</h4>
            <p className="text-xs text-emerald-800/80 leading-relaxed">
              Randomized question shuffling, timed examination sessions, and browser lockdowns stop exam malpractice.
            </p>
          </Card>

          <Card variant="white" className="border-emerald-200/80 space-y-3 bg-white/90">
            <div className="w-9 h-9 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <h4 className="font-heading font-bold text-base text-emerald-950">One-Time Ownership</h4>
            <p className="text-xs text-emerald-800/80 leading-relaxed">
              Full installation with source code and local server license. No recurring per-student subscription fees.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
