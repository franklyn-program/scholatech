"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { FadeIn } from "../motion/FadeIn";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { QuoteRequestForm } from "@/components/forms/QuoteRequestForm";
import { ShieldCheck, CheckCircle2, ArrowRight, Sparkles, MessageSquare } from "lucide-react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center pt-28 pb-20 md:pt-36 md:pb-24 overflow-hidden bg-[#050816] text-white z-10 border-b border-white/[0.06]"
    >
      {/* Background Image with Dark Midnight Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/hero/hero-stitch.png"
          alt="Scholatech School Tech Infrastructure"
          fill
          priority
          className="object-cover object-center opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050816]/95 via-[#050816]/85 to-[#050816]" />
      </div>

      {/* Ambient Blue Radial Glow Overlay */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] max-w-[1100px] h-[550px] bg-[radial-gradient(ellipse_at_center,rgba(65,105,255,0.2)_0%,rgba(5,8,22,0)_70%)] blur-[95px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Hero Content & Value Proposition */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Eyebrow Pill */}
            <FadeIn direction="down">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0A1020]/90 border border-[#4169FF]/30 text-[#5A7DFF] shadow-2xl backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                <span className="text-xs font-heading font-bold tracking-widest uppercase text-[#F8FAFC]">
                  INFRASTRUCTURE YOU OWN · ZERO SUBSCRIPTIONS
                </span>
              </div>
            </FadeIn>

            {/* Headline */}
            <FadeIn direction="up" delay={0.1}>
              <h1 className="text-4xl sm:text-6xl lg:text-6xl font-heading font-extrabold tracking-tight text-[#F8FAFC] leading-[1.08]">
                Own your school&apos;s tech. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F8FAFC] via-[#5A7DFF] to-[#4169FF]">
                  Even the exam system. Even offline.
                </span>
              </h1>
            </FadeIn>

            {/* Subtitle */}
            <FadeIn direction="up" delay={0.2}>
              <p className="text-base sm:text-xl text-[#AAB4C5] max-w-2xl leading-relaxed font-normal">
                Custom school management portals and 100% offline CBT infrastructure for Nigerian schools. Built once on your hardware, owned forever with zero subscription fees.
              </p>
            </FadeIn>

            {/* Action Buttons */}
            <FadeIn direction="up" delay={0.3}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <MagneticButton>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 bg-[#4169FF] hover:bg-[#6D8DFF] text-white font-heading font-bold text-sm px-8 py-4 rounded-full shadow-[0_0_35px_rgba(65,105,255,0.5)] transition-all duration-300 group"
                  >
                    <span>Request Demo & Scope</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </MagneticButton>

                <MagneticButton>
                  <a
                    href="#offline-cbt"
                    className="inline-flex items-center justify-center gap-2 bg-[#111827]/90 hover:bg-[#1A2338] text-[#F8FAFC] font-heading font-semibold text-sm px-8 py-4 rounded-full border border-white/[0.08] backdrop-blur-md transition-all duration-300"
                  >
                    <span>See Offline CBT</span>
                  </a>
                </MagneticButton>
              </div>
            </FadeIn>

            {/* Value Guarantees Grid */}
            <FadeIn direction="up" delay={0.4}>
              <div className="pt-6 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm font-medium text-[#AAB4C5]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                  <span>Full Source Code Delivered</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                  <span>Zero Recurring SaaS Fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#4169FF] shrink-0" />
                  <span>Tailored for Nigerian Schools</span>
                </div>
              </div>
            </FadeIn>

          </div>

          {/* Right Column: Embedded Interactive Contact & Demo Form */}
          <div id="contact" className="lg:col-span-5 scroll-mt-28">
            <FadeIn direction="left" delay={0.2}>
              <div className="relative rounded-3xl p-1 bg-gradient-to-b from-[#4169FF]/40 via-[#10B981]/20 to-[#0A1020] shadow-[0_0_50px_rgba(65,105,255,0.25)]">
                <div className="bg-[#0A1020] rounded-[22px] p-6 sm:p-8 space-y-6 relative overflow-hidden">
                  
                  {/* Top Form Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#10B981] flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        Direct Scoping Form
                      </span>
                      <h3 className="text-xl font-heading font-extrabold text-[#F8FAFC] mt-0.5">
                        Request a Demo & Quote
                      </h3>
                    </div>
                    <div className="w-9 h-9 rounded-xl bg-[#4169FF]/20 border border-[#4169FF]/40 flex items-center justify-center text-[#5A7DFF]">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                  </div>

                  <p className="text-xs text-[#AAB4C5] leading-relaxed">
                    Sent directly to Lead Architect at <span className="text-[#5A7DFF] font-mono font-bold">agboseakade1@gmail.com</span>. Get a response within 24 hours.
                  </p>

                  {/* Form */}
                  <QuoteRequestForm />

                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
