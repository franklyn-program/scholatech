"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Heading } from "../ui/Heading";
import { Paragraph } from "../ui/Paragraph";
import { SectionLabel } from "../ui/SectionLabel";
import { Card } from "../ui/Card";
import { FadeIn } from "../motion/FadeIn";
import { Globe, Smartphone, ChevronLeft, ChevronRight, ShieldCheck, Sparkles } from "lucide-react";

export function WebsiteShowcase() {
  const webSlides = [
    {
      src: "/images/websites/web-shot-1.png",
      domain: "rra.com.ng",
      title: "Royal Rangers Academy: Modern School Portal & Website",
      category: "High-Converting Parent Portal",
      description: "Custom homepage layout featuring online admission forms, video campus tours, and news announcements.",
    },
    {
      src: "/images/websites/web-shot-2.png",
      domain: "royalheritage.sch.ng",
      title: "Royal Heritage Schools: Mobile-First Website",
      category: "Admissions & Event Showcase",
      description: "Clean typography, fast page load speeds, and intuitive navigation for prospective parents.",
    },
    {
      src: "/images/websites/web-shot-3.png",
      domain: "lagosmodelcollege.edu.ng",
      title: "Lagos Model College: Academic Portal",
      category: "Student & Parent Result Checking",
      description: "Direct integration with student result lookup engine and online tuition fee payment status.",
    },
    {
      src: "/images/websites/web-snap-1.png",
      domain: "scholatech.app/live-demo-1",
      title: "Live Video & Campus Activity Gallery",
      category: "Rich Media & Engagement",
      description: "Dynamic video preview section showcasing school sports, graduation ceremonies, and lab activities.",
    },
    {
      src: "/images/websites/web-shot-4.png",
      domain: "scholatech.app/live-demo-2",
      title: "Interactive Term Calendar & Announcements",
      category: "Parent Communication",
      description: "Automated event scheduling, termly fee breakdown, and downloadable prospectus PDFs.",
    },
    {
      src: "/images/websites/web-snap-2.png",
      domain: "scholatech.app/live-demo-3",
      title: "Optimized Mobile Navigation & Contact",
      category: "Mobile First Design",
      description: "Flawless mobile layout ensuring parents on smartphones can apply within 2 minutes.",
    },
  ];

  const [activeIdx, setActiveIdx] = useState(0);

  const prevWebSlide = () => {
    setActiveIdx((prev) => (prev === 0 ? webSlides.length - 1 : prev - 1));
  };

  const nextWebSlide = () => {
    setActiveIdx((prev) => (prev === webSlides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev === webSlides.length - 1 ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(timer);
  }, [webSlides.length]);

  return (
    <section id="website-showcase" className="py-20 sm:py-28 bg-white border-t border-slate-200/60 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <FadeIn direction="up">
            <SectionLabel>Portfolio Showcase · Websites</SectionLabel>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <Heading as="h2">
              High-Converting Websites Engineered for Nigerian Schools
            </Heading>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <Paragraph size="lg" className="max-w-2xl mx-auto">
              Every website we build is custom designed to convert prospective parents into enrolled students: 100% mobile-friendly with zero monthly hosting lock-in.
            </Paragraph>
          </FadeIn>
        </div>

        {/* Browser Frame Showcase Slider */}
        <FadeIn direction="up" delay={0.3}>
          <div className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden bg-slate-900 border border-slate-300 shadow-2xl">
            {/* Top Browser Bar */}
            <div className="px-4 py-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
              </div>
              <div className="bg-slate-800/90 px-4 py-1 rounded-md text-xs font-mono text-slate-200 flex items-center gap-2 border border-slate-700">
                <Globe className="w-3.5 h-3.5 text-primary-blue" />
                <span>https://{webSlides[activeIdx].domain}</span>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded border border-emerald-800/60">
                <Sparkles className="w-3 h-3" />
                <span>60fps Optimized</span>
              </div>
            </div>

            {/* Display Screen */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-slate-900/40 overflow-hidden flex items-center justify-center">
              <Image
                src={webSlides[activeIdx].src}
                alt={webSlides[activeIdx].title}
                fill
                className="object-contain object-top transition-all duration-500"
                sizes="(max-width: 1280px) 100vw, 1200px"
                priority
              />

              {/* Gradient Bottom Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />

              {/* Floating Information Box */}
              <div className="absolute bottom-6 left-6 right-6 sm:left-8 sm:right-auto sm:max-w-xl bg-slate-900/95 backdrop-blur border border-slate-700/90 p-5 rounded-xl text-white space-y-2 shadow-2xl">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-primary-blue bg-blue-950/80 px-2.5 py-1 rounded border border-blue-800/60 inline-block">
                  {webSlides[activeIdx].category}
                </span>
                <h3 className="font-heading font-extrabold text-lg sm:text-xl text-white">
                  {webSlides[activeIdx].title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  {webSlides[activeIdx].description}
                </p>
              </div>

              {/* Prev / Next Buttons */}
              <button
                onClick={prevWebSlide}
                type="button"
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-primary-blue text-white flex items-center justify-center border border-slate-700 transition-colors shadow-lg"
                aria-label="Previous Website Slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextWebSlide}
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-primary-blue text-white flex items-center justify-center border border-slate-700 transition-colors shadow-lg"
                aria-label="Next Website Slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Thumbnail Selectors */}
            <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-center gap-3 overflow-x-auto">
              {webSlides.map((slide, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  className={`relative w-16 h-10 rounded-md overflow-hidden border-2 transition-all shrink-0 ${
                    idx === activeIdx
                      ? "border-primary-blue scale-105 opacity-100"
                      : "border-slate-800 opacity-50 hover:opacity-80"
                  }`}
                  aria-label={`Select website slide ${idx + 1}`}
                >
                  <Image src={slide.src} alt={slide.title} fill className="object-cover object-top" />
                </button>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Website Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <Card variant="white" className="space-y-3 bg-slate-50/50 border-slate-200">
            <div className="w-9 h-9 rounded-lg bg-blue-100 text-primary-blue flex items-center justify-center font-bold">
              <Globe className="w-5 h-5" />
            </div>
            <h4 className="font-heading font-bold text-base text-deep-navy">Online Admissions Engine</h4>
            <p className="text-xs text-text-slate leading-relaxed">
              Parents can fill application forms, upload pupil documents, and request tour appointments directly on mobile or desktop.
            </p>
          </Card>

          <Card variant="white" className="space-y-3 bg-slate-50/50 border-slate-200">
            <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
              <Smartphone className="w-5 h-5" />
            </div>
            <h4 className="font-heading font-bold text-base text-deep-navy">Mobile-First & Ultra Fast</h4>
            <p className="text-xs text-text-slate leading-relaxed">
              Built using Next.js for sub-second page loads even on slow 3G mobile networks across Nigeria.
            </p>
          </Card>

          <Card variant="white" className="space-y-3 bg-slate-50/50 border-slate-200">
            <div className="w-9 h-9 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="font-heading font-bold text-base text-deep-navy">Full Source Code Handover</h4>
            <p className="text-xs text-text-slate leading-relaxed">
              You own your code, domain, and web files completely. No agency holding your school website hostage.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
